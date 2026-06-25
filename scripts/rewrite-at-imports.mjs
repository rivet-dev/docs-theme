// Codemod: rewrite rivet's `@/…` app-alias imports (which assume tsconfig paths
// `@/* -> src/*`) into package-relative imports, so packages/theme is a normal
// importable library with no global alias dependency. Operates on string
// literals that follow `from`, bare `import '…'`, or dynamic `import('…')`.
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, dirname } from "node:path";

const SRC = new URL("../packages/theme/src/", import.meta.url).pathname;
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".astro"]);

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (EXTS.has(name.slice(name.lastIndexOf(".")))) out.push(p);
  }
  return out;
}

function toRel(fromFile, spec) {
  // spec like "@/lib/sitemap" -> absolute target under SRC, then relativize.
  const target = join(SRC, spec.slice(2)); // drop "@/"
  let rel = relative(dirname(fromFile), target).replace(/\\/g, "/");
  if (!rel.startsWith(".")) rel = "./" + rel;
  return rel;
}

let changedFiles = 0;
let changedImports = 0;
for (const file of walk(SRC)) {
  const src = readFileSync(file, "utf8");
  // Match the specifier string in: from "@/…", import "@/…", import("@/…")
  const re = /(\bfrom\s*|\bimport\s*\(?\s*)(['"])@\/([^'"]+)\2/g;
  let changed = false;
  const out = src.replace(re, (_m, lead, q, rest) => {
    changed = true;
    changedImports++;
    return `${lead}${q}${toRel(file, "@/" + rest)}${q}`;
  });
  if (changed) {
    writeFileSync(file, out);
    changedFiles++;
  }
}
console.log(`rewrote ${changedImports} @/ imports across ${changedFiles} files`);
