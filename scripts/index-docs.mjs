#!/usr/bin/env node
/**
 * Standalone Typesense docs indexer for @rivet-dev/docs-theme consumers.
 *
 * Ported 1:1 (schema + document shape) from rivet's
 * website/scripts/generateMarkdownAndLlms.ts so the indexed documents match the
 * theme's search UI (src/components/v2/TypesenseSearch.tsx), which queries
 * `title,content` and reads back `id, title, content, url, hierarchy.lvl0/1/2`.
 *
 * Configuration is entirely via environment variables so each consumer website
 * wires it with a `docs:index` script and supplies the ADMIN/populate key out of
 * band (never committed):
 *
 *   TYPESENSE_HOST              (required) e.g. xxxx.a1.typesense.net
 *   TYPESENSE_PORT              (default 443)
 *   TYPESENSE_PROTOCOL          (default https)
 *   TYPESENSE_API_KEY           (required) admin/populate key
 *   TYPESENSE_COLLECTION_NAME   (required) e.g. agentos-docs
 *   DOCS_DIR                    (default cwd) the website dir to index from
 *
 * Source strategy (first that exists wins):
 *   1. Theme-emitted per-page markdown under `${DOCS_DIR}/public/docs/**.md`
 *      (already cleaned to plain text by generate-routes).
 *   2. Content collection `${DOCS_DIR}/src/content/docs/**.{md,mdx}` parsed
 *      directly (frontmatter + MDX/JSX stripped to plain text).
 *
 * URLs mirror the live routes: the docs page route is `entry.id` (path relative
 * to `src/content/docs`, ext + `/index` stripped), so
 * `src/content/docs/docs/quickstart.mdx` -> `/docs/quickstart`.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";
import Typesense from "typesense";

const CONTENT_COLLECTION_ROOT = "src/content/docs";
const PUBLIC_DOCS_ROOT = "public/docs";
const BATCH_SIZE = 100;

// UI-only components whose JSX blocks should be dropped entirely (mirrors the
// theme's generate-routes MARKDOWN_COMPONENT_BLOCKLIST).
const MARKDOWN_COMPONENT_BLOCKLIST = new Set(["Card", "CardGroup"]);

// ---------------------------------------------------------------------------
// Source: parse content collection .md/.mdx directly
// ---------------------------------------------------------------------------

async function walk(dir) {
	const out = [];
	let entries;
	try {
		entries = await fs.readdir(dir, { withFileTypes: true });
	} catch {
		return out;
	}
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			out.push(...(await walk(full)));
		} else if (
			entry.isFile() &&
			(entry.name.endsWith(".mdx") || entry.name.endsWith(".md"))
		) {
			out.push(full);
		}
	}
	return out;
}

function extractFrontmatter(content) {
	const match = content.match(/^---\n([\s\S]*?)\n---/);
	const frontmatter = match?.[1] ?? "";
	const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
	const descMatch = frontmatter.match(/^description:\s*(.+)$/m);
	return {
		title: titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, "") : "",
		description: descMatch
			? descMatch[1].trim().replace(/^["']|["']$/g, "")
			: "",
	};
}

// Strip MDX/JSX + frontmatter to plain text. Mirrors the theme's
// cleanMdxForMarkdown line-machine closely enough for search content.
function cleanMdxForMarkdown(content) {
	const withoutFrontmatter = content.replace(/^---\n[\s\S]*?\n---\n*/m, "");
	const lines = withoutFrontmatter.split(/\r?\n/);
	const cleaned = [];

	let inFence = false;
	let fenceToken = "";
	let inComment = false;
	let inModuleBlock = false;
	let expressionDepth = 0;
	let scriptDepth = 0;
	let skippedComponentDepth = 0;

	const countChar = (input, char) => input.split(char).length - 1;
	const countDelta = (input, open, close) =>
		countChar(input, open) - countChar(input, close);
	const isPureTagLine = (line) =>
		/^\s*<\/?[A-Za-z][\w:-]*(?:\s+[^>]*)?\s*\/?>\s*$/.test(line);
	const isScriptStartLine = (line) =>
		/^\s*(const|let|var|function)\s+/.test(line);
	const getSkippedComponentTagDelta = (line) => {
		const trimmed = line.trim();
		const tagMatch = trimmed.match(
			/^<\/?([A-Za-z][\w:-]*)(?:\s+[^>]*)?\s*\/?>$/,
		);
		if (!tagMatch) return null;
		const tagName = tagMatch[1];
		if (!MARKDOWN_COMPONENT_BLOCKLIST.has(tagName)) return null;
		if (trimmed.startsWith("</")) return -1;
		if (trimmed.endsWith("/>")) return 0;
		return 1;
	};

	for (const originalLine of lines) {
		let line = originalLine;
		const trimmed = line.trim();
		const fenceMatch = line.match(/^\s*(```+|~~~+)/);

		if (fenceMatch) {
			if (!inFence) {
				inFence = true;
				fenceToken = fenceMatch[1];
				line = line
					.replace(/\s+\{\{[^}]+\}\}\s*$/, "")
					.replace(/\s+\{[^}]+\}\s*$/, "");
			} else if (trimmed.startsWith(fenceToken)) {
				inFence = false;
				fenceToken = "";
			}
			cleaned.push(line);
			continue;
		}
		if (inFence) {
			cleaned.push(line);
			continue;
		}
		if (inComment) {
			if (line.includes("-->")) inComment = false;
			continue;
		}
		if (line.includes("<!--")) {
			if (!line.includes("-->")) inComment = true;
			continue;
		}
		if (inModuleBlock) {
			if (trimmed.endsWith(";")) inModuleBlock = false;
			continue;
		}
		if (skippedComponentDepth > 0) {
			const delta = getSkippedComponentTagDelta(line);
			if (delta !== null) {
				skippedComponentDepth = Math.max(0, skippedComponentDepth + delta);
			}
			continue;
		}
		if (expressionDepth > 0) {
			expressionDepth += countDelta(line, "{", "}");
			if (expressionDepth <= 0) expressionDepth = 0;
			continue;
		}
		if (scriptDepth > 0) {
			scriptDepth += countDelta(line, "{", "}");
			scriptDepth += countDelta(line, "[", "]");
			scriptDepth += countDelta(line, "(", ")");
			if (scriptDepth <= 0 && trimmed.endsWith(";")) scriptDepth = 0;
			continue;
		}
		if (/^\s*import\s+/.test(line) || /^\s*export\s+/.test(line)) {
			if (!trimmed.endsWith(";")) inModuleBlock = true;
			continue;
		}
		if (isScriptStartLine(line)) {
			scriptDepth += countDelta(line, "{", "}");
			scriptDepth += countDelta(line, "[", "]");
			scriptDepth += countDelta(line, "(", ")");
			if (scriptDepth <= 0 && trimmed.endsWith(";")) scriptDepth = 0;
			else if (scriptDepth <= 0) scriptDepth = 1;
			continue;
		}
		if (/^\s*\{/.test(line)) {
			expressionDepth = countDelta(line, "{", "}");
			if (expressionDepth <= 0) expressionDepth = 0;
			continue;
		}
		const skippedTagDelta = getSkippedComponentTagDelta(line);
		if (skippedTagDelta !== null) {
			if (skippedTagDelta > 0) skippedComponentDepth = skippedTagDelta;
			continue;
		}
		if (isPureTagLine(line)) continue;
		if (/^[\[\](){};,]+$/.test(trimmed)) continue;
		cleaned.push(line);
	}

	return cleaned.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

// Live route for a content file: id relative to src/content/docs, strip
// extension and trailing /index, prepend '/'.
function contentPathToUrl(relPath) {
	const id = relPath
		.replace(/\\/g, "/")
		.replace(/\.mdx?$/, "")
		.replace(/\/index$/, "");
	return `/${id}`;
}

function firstHeading(body) {
	const m = body.match(/^#{1,3}\s+(.+)$/m);
	return m ? m[1].trim() : "";
}

async function loadFromContentCollection(docsDir) {
	const root = path.join(docsDir, CONTENT_COLLECTION_ROOT);
	if (!existsSync(root)) return null;
	const files = await walk(root);
	if (files.length === 0) return null;

	const pages = [];
	for (const file of files) {
		const raw = await fs.readFile(file, "utf-8");
		const { title, description } = extractFrontmatter(raw);
		const body = cleanMdxForMarkdown(raw);
		const rel = path.relative(root, file);
		const url = contentPathToUrl(rel);
		const finalTitle = title || path.basename(rel).replace(/\.mdx?$/, "");
		const content = [description, body].filter(Boolean).join("\n\n").trim();
		pages.push({
			title: finalTitle,
			content,
			url,
			lvl2: firstHeading(body) || undefined,
		});
	}
	pages.sort((a, b) => a.url.localeCompare(b.url));
	return pages;
}

// ---------------------------------------------------------------------------
// Source: theme-emitted per-page markdown under public/docs/**.md
// These are already plain text shaped as `# Title\n\n<desc>\n\n<body>`.
// File layout: public/docs/<id>.md where <id> is the live route id, e.g.
// public/docs/docs/quickstart.md -> /docs/quickstart, public/docs/docs.md ->
// /docs (top-level collection index emitted as <collection>.md by the theme is
// public/docs.md, handled too).
// ---------------------------------------------------------------------------

async function loadFromPublicMarkdown(docsDir) {
	const root = path.join(docsDir, PUBLIC_DOCS_ROOT);
	const topLevel = path.join(docsDir, "public", "docs.md");
	const hasRoot = existsSync(root);
	const hasTop = existsSync(topLevel);
	if (!hasRoot && !hasTop) return null;

	const files = hasRoot ? await walk(root) : [];
	if (hasTop) files.push(topLevel);
	if (files.length === 0) return null;

	const publicRoot = path.join(docsDir, "public");
	const pages = [];
	for (const file of files) {
		const raw = await fs.readFile(file, "utf-8");
		// Derive id/url from path relative to public/.
		const rel = path
			.relative(publicRoot, file)
			.replace(/\\/g, "/")
			.replace(/\.md$/, "");
		const url = `/${rel}`;
		const h1 = raw.match(/^#\s+(.+)$/m);
		const title = h1 ? h1[1].trim() : path.basename(rel);
		// Body is everything; keep as content. First subsequent heading -> lvl2.
		const afterH1 = h1 ? raw.slice((h1.index ?? 0) + h1[0].length) : raw;
		const lvl2Match = afterH1.match(/^#{2,3}\s+(.+)$/m);
		pages.push({
			title,
			content: raw.replace(/^#\s+.+$/m, "").trim(),
			url,
			lvl2: lvl2Match ? lvl2Match[1].trim() : undefined,
		});
	}
	pages.sort((a, b) => a.url.localeCompare(b.url));
	return pages;
}

// ---------------------------------------------------------------------------
// Typesense
// ---------------------------------------------------------------------------

function buildSchema(collectionName) {
	return {
		name: collectionName,
		fields: [
			{ name: "id", type: "string" },
			{ name: "title", type: "string" },
			{ name: "content", type: "string" },
			{ name: "url", type: "string" },
			{ name: "hierarchy", type: "object", optional: true },
		],
		enable_nested_fields: true,
	};
}

async function setupCollection(client, collectionName) {
	const schema = buildSchema(collectionName);
	try {
		await client.collections(collectionName).retrieve();
		console.log(`Collection ${collectionName} exists, updating schema...`);
		try {
			await client.collections(collectionName).update(schema);
			console.log(`Updated collection: ${collectionName}`);
		} catch {
			console.log("Failed to update schema, recreating collection...");
			await client.collections(collectionName).delete();
			await client.collections().create(schema);
			console.log(`Recreated collection: ${collectionName}`);
		}
	} catch {
		console.log(`Collection ${collectionName} doesn't exist, creating...`);
		await client.collections().create(schema);
		console.log(`Created collection: ${collectionName}`);
	}
}

function toDocuments(pages, siteUrl) {
	return pages.map((page, index) => {
		const url = siteUrl ? `${siteUrl}${page.url}` : page.url;
		const hierarchy = { lvl0: "Documentation", lvl1: page.title };
		if (page.lvl2) hierarchy.lvl2 = page.lvl2;
		return {
			id: `doc_${index}`,
			title: page.title,
			content: page.content,
			url,
			hierarchy,
		};
	});
}

async function importDocuments(client, collectionName, documents) {
	let imported = 0;
	for (let i = 0; i < documents.length; i += BATCH_SIZE) {
		const batch = documents.slice(i, i + BATCH_SIZE);
		const results = await client
			.collections(collectionName)
			.documents()
			.import(batch, { action: "upsert" });
		const lines = Array.isArray(results) ? results : String(results).split("\n");
		for (const line of lines) {
			const parsed = typeof line === "string" ? safeJson(line) : line;
			if (parsed && parsed.success === false) {
				console.warn("Import error:", parsed.error);
			} else {
				imported++;
			}
		}
	}
	return imported;
}

function safeJson(s) {
	try {
		return JSON.parse(s);
	} catch {
		return null;
	}
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

export async function indexDocs(env = process.env) {
	const host = env.TYPESENSE_HOST;
	const port = env.TYPESENSE_PORT ? Number(env.TYPESENSE_PORT) : 443;
	const protocol = env.TYPESENSE_PROTOCOL || "https";
	const apiKey = env.TYPESENSE_API_KEY;
	const collectionName = env.TYPESENSE_COLLECTION_NAME;
	const docsDir = env.DOCS_DIR || process.cwd();
	// Optional: absolute site origin to prefix URLs (e.g. https://agentos-sdk.dev).
	const siteUrl = env.DOCS_SITE_URL || "";

	if (!host || !apiKey) {
		console.log(
			"Typesense host/api key not provided (TYPESENSE_HOST / TYPESENSE_API_KEY); skipping search indexing.",
		);
		return { skipped: true, indexed: 0 };
	}
	if (!collectionName) {
		console.log(
			"TYPESENSE_COLLECTION_NAME not provided; skipping search indexing.",
		);
		return { skipped: true, indexed: 0 };
	}

	console.log(`Indexing docs from: ${docsDir}`);

	// Prefer the content collection: it yields URLs that match the live routes
	// exactly (route id == path relative to src/content/docs). The theme's
	// public/ markdown nests under public/<collection>/, which doubles the
	// leading segment (public/docs/docs/quickstart.md), so it is only a fallback
	// for sites that ship built markdown without sources.
	let pages = await loadFromContentCollection(docsDir);
	if (pages && pages.length > 0) {
		console.log(`Source: content collection mdx (${pages.length} pages).`);
	} else {
		pages = await loadFromPublicMarkdown(docsDir);
		if (pages && pages.length > 0) {
			console.log(
				`Source: theme-emitted public markdown (${pages.length} pages).`,
			);
		}
	}

	if (!pages || pages.length === 0) {
		console.log(
			`No docs found under ${docsDir} (looked in ${PUBLIC_DOCS_ROOT}/ and ${CONTENT_COLLECTION_ROOT}/); nothing to index.`,
		);
		return { skipped: true, indexed: 0 };
	}

	const client = new Typesense.Client({
		nodes: [{ host, port, protocol }],
		apiKey,
		connectionTimeoutSeconds: 10,
	});

	await setupCollection(client, collectionName);
	const documents = toDocuments(pages, siteUrl);
	const imported = await importDocuments(client, collectionName, documents);

	console.log(
		`Indexed ${imported}/${documents.length} documents into "${collectionName}" on ${protocol}://${host}:${port}.`,
	);
	return { skipped: false, indexed: imported, total: documents.length };
}

// Run when invoked directly.
const invokedDirectly =
	import.meta.url === `file://${process.argv[1]}` ||
	(process.argv[1] && import.meta.url.endsWith(path.basename(process.argv[1])));

if (invokedDirectly) {
	indexDocs().catch((err) => {
		console.error("Indexing failed:", err);
		process.exit(1);
	});
}
