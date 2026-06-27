import { visit } from "unist-util-visit";
import { readFileSync } from "node:fs";
import { resolve, extname } from "node:path";

/**
 * Embed example source files into docs code fences at build time.
 *
 * Authoring convention — an EMPTY fence whose meta carries a repo-relative
 * `file=` path:
 *
 *     ```ts file="examples/quickstart/hello-world/index.ts"
 *     ```
 *
 * The plugin reads that file and inlines its content as the fence body, so the
 * rendered code is always the REAL, separately type-checked example — no
 * in-Astro type checking, and the `Code` component links back to the source on
 * GitHub. Optionally embed just a marked region with `region="name"`:
 *
 *     ```ts file="examples/foo/index.ts" region="setup"
 *     ```
 *
 * Region markers in the source file (stripped from the output):
 *     // docs:start setup
 *     ...shown...
 *     // docs:end setup
 *
 * Paths resolve against DOCS_EMBED_ROOT (default: the parent of the Astro
 * project, i.e. the monorepo root). A `file=` value that is NOT a path (no
 * slash, no extension, e.g. `file="server.ts"`) is left untouched so it keeps
 * working as a plain title label.
 */
const EMBED_ROOT = process.env.DOCS_EMBED_ROOT
	? resolve(process.env.DOCS_EMBED_ROOT)
	: resolve(process.cwd(), "..");

const LANG_BY_EXT: Record<string, string> = {
	".ts": "ts",
	".tsx": "tsx",
	".js": "js",
	".jsx": "jsx",
	".mjs": "js",
	".cjs": "js",
	".json": "json",
	".sh": "bash",
	".bash": "bash",
	".rs": "rust",
	".py": "python",
	".toml": "toml",
	".yaml": "yaml",
	".yml": "yaml",
	".md": "markdown",
	".mdx": "markdown",
	".html": "html",
	".css": "css",
};

const MARKER = /\/\/\s*docs:(start|end)(?:\s+(\S+))?/;

function parseAttr(meta: string, name: string): string | undefined {
	const m = meta.match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)')`));
	return m ? (m[1] ?? m[2]) : undefined;
}

function stripTrailingBlank(s: string): string {
	return s.replace(/\s+$/, "");
}

function extractRegion(source: string, region: string | undefined, file: string): string {
	const lines = source.split("\n");
	if (!region) {
		// Whole file, minus any stray region markers.
		return stripTrailingBlank(lines.filter((l) => !MARKER.test(l)).join("\n"));
	}
	const startIdx = lines.findIndex((l) => {
		const m = l.match(MARKER);
		return m && m[1] === "start" && m[2] === region;
	});
	const endIdx = lines.findIndex((l) => {
		const m = l.match(MARKER);
		return m && m[1] === "end" && m[2] === region;
	});
	if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
		throw new Error(
			`remark-embed-code: region "${region}" not found (or malformed) in ${file}`,
		);
	}
	const body = lines.slice(startIdx + 1, endIdx).filter((l) => !MARKER.test(l));
	const indents = body
		.filter((l) => l.trim().length > 0)
		.map((l) => (l.match(/^\s*/)?.[0].length ?? 0));
	const dedent = indents.length ? Math.min(...indents) : 0;
	return stripTrailingBlank(body.map((l) => l.slice(dedent)).join("\n"));
}

export function remarkEmbedCodeFiles() {
	return (tree: unknown) => {
		visit(tree, "code", (node: unknown) => {
			const code = node as {
				lang?: string | null;
				meta?: string | null;
				value?: string;
				data?: { hProperties?: Record<string, unknown> };
			};
			const meta = code.meta ?? "";
			const file = parseAttr(meta, "file");
			if (!file) return;
			// Only embed when `file=` is an actual path (has a slash); a bare
			// `file="server.ts"` stays a plain title label for CodeGroup tabs.
			if (!file.includes("/")) return;

			const abs = resolve(EMBED_ROOT, file);
			let source: string;
			try {
				source = readFileSync(abs, "utf8");
			} catch {
				throw new Error(
					`remark-embed-code: cannot read embedded file "${file}" (resolved to ${abs})`,
				);
			}
			const region = parseAttr(meta, "region");
			code.value = extractRegion(source, region, file);
			if (!code.lang) code.lang = LANG_BY_EXT[extname(abs).toLowerCase()] ?? "text";

			// Pass the source path to the Code component so it can render a
			// "View source" link to the file on GitHub.
			const data = (code.data ??= {});
			const hProperties = (data.hProperties ??= {});
			hProperties.sourceFile = file;
		});
	};
}
