// src/mdx/remark.ts
import { mdxAnnotations } from "mdx-annotations";
import remarkGfm from "remark-gfm";
import { execSync } from "child_process";
import { visit as visit2 } from "unist-util-visit";

// src/mdx/remark-code-snippet.ts
import { visit } from "unist-util-visit";
import { readFileSync } from "node:fs";
import { resolve, extname } from "node:path";
var EMBED_ROOT = process.env.DOCS_EMBED_ROOT ? resolve(process.env.DOCS_EMBED_ROOT) : resolve(process.cwd(), "..");
var LANG_BY_EXT = {
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
  ".css": "css"
};
var MARKER = /\/\/\s*docs:(start|end)(?:\s+(\S+))?/;
function stripTrailingBlank(s) {
  return s.replace(/\s+$/, "");
}
function extractRegion(source, region, file) {
  const lines = source.split("\n");
  if (!region) {
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
      `<CodeSnippet>: region "${region}" not found (or malformed) in ${file}`
    );
  }
  const body = lines.slice(startIdx + 1, endIdx).filter((l) => !MARKER.test(l));
  const indents = body.filter((l) => l.trim().length > 0).map((l) => l.match(/^\s*/)?.[0].length ?? 0);
  const dedent = indents.length ? Math.min(...indents) : 0;
  return stripTrailingBlank(body.map((l) => l.slice(dedent)).join("\n"));
}
function getAttr(node, name) {
  const attr = (node.attributes ?? []).find(
    (a) => a.type === "mdxJsxAttribute" && a.name === name
  );
  if (!attr) return void 0;
  return typeof attr.value === "string" ? attr.value : void 0;
}
function remarkCodeSnippet() {
  return (tree) => {
    visit(
      tree,
      (node) => {
        const n = node;
        return (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement") && n.name === "CodeSnippet";
      },
      (node, index, parent) => {
        if (!parent || index == null || !parent.children) return;
        const el = node;
        const file = getAttr(el, "file");
        if (!file) {
          throw new Error(
            '<CodeSnippet> requires a string `file` attribute, e.g. file="examples/foo/index.ts"'
          );
        }
        const region = getAttr(el, "region");
        const title = getAttr(el, "title");
        const lang = getAttr(el, "lang");
        const abs = resolve(EMBED_ROOT, file);
        let source;
        try {
          source = readFileSync(abs, "utf8");
        } catch {
          throw new Error(
            `<CodeSnippet>: cannot read file "${file}" (resolved to ${abs})`
          );
        }
        const meta = [`file="${file}"`];
        if (title) meta.push(`title="${title}"`);
        parent.children[index] = {
          type: "code",
          lang: lang ?? LANG_BY_EXT[extname(abs).toLowerCase()] ?? "text",
          meta: meta.join(" "),
          value: extractRegion(source, region, file)
        };
      }
    );
  };
}

// src/mdx/remark.ts
function remarkModifiedTime() {
  return function(_tree, file) {
    const filepath = file.history[0];
    if (!filepath) return;
    try {
      const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`, {
        stdio: ["pipe", "pipe", "pipe"],
        timeout: 5e3
      });
      const lastModified = result.toString().trim();
      if (lastModified) {
        file.data.astro = file.data.astro || {};
        file.data.astro.frontmatter = file.data.astro.frontmatter || {};
        file.data.astro.frontmatter.lastModified = lastModified;
      }
    } catch {
    }
  };
}
function remarkCodeFenceMetaToAnnotation() {
  return (tree) => {
    visit2(tree, "code", (node) => {
      const code = node;
      const meta = code.meta?.trim();
      if (!meta) return;
      const data = code.data ??= {};
      const hProperties = data.hProperties ??= {};
      const existingMetaString = hProperties.metastring;
      if (typeof existingMetaString !== "string" || existingMetaString.trim().length === 0) {
        hProperties.metastring = meta;
      }
    });
  };
}
var remarkPlugins = [
  // Inline <CodeSnippet file="…" /> example files before anything else reads
  // the code body, so embedded source flows through the normal Shiki pipeline.
  remarkCodeSnippet,
  mdxAnnotations.remark,
  remarkCodeFenceMetaToAnnotation,
  remarkGfm,
  remarkModifiedTime
];
export {
  remarkPlugins
};
