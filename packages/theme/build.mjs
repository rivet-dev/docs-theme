// Compile the config-time TS modules (those imported by a consumer's
// astro.config at config-load time, where Node cannot strip TS) to plain ESM
// JS under dist/. Runtime components (.astro/.tsx) are NOT compiled here — the
// consumer's Astro/Vite pipeline compiles those from src/ directly.
import { build } from "esbuild";

const entryPoints = {
  "mdx/remark": "src/mdx/remark.ts",
  "mdx/rehype": "src/mdx/rehype.ts",
  "integrations/generate-routes": "src/integrations/generate-routes.ts",
};

// Externalize bare-package JS imports (don't bundle node_modules), but let
// `.json` imports (e.g. tm-themes/themes/ayu-dark.json) be bundled/inlined —
// otherwise Node's ESM loader rejects them at config-load time for missing an
// `import ... with { type: "json" }` attribute.
const externalizeBareJs = {
  name: "externalize-bare-js",
  setup(b) {
    b.onResolve({ filter: /^[^./]/ }, (args) => {
      if (args.path.endsWith(".json")) return null; // bundle JSON
      return { path: args.path, external: true };
    });
  },
};

await build({
  entryPoints,
  outdir: "dist",
  bundle: true,
  format: "esm",
  platform: "node",
  target: "node20",
  plugins: [externalizeBareJs],
  logLevel: "info",
});

console.log("built config-time modules → dist/");
