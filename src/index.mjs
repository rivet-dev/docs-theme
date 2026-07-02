/**
 * @rivet-dev/docs-theme — a shared Astro docs framework, copied 1:1 from
 * rivet.dev's custom docs platform (NOT Starlight). Consumers add
 * `...docsTheme(siteConfig)` to their Astro `integrations` and supply content +
 * a docs.config. The MDX pipeline (remark/rehype/Shiki) and route generation
 * are owned here; the project's SiteConfig is exposed to the component
 * overrides through a Vite virtual module (`virtual:rivet-docs/config`).
 *
 * The config-time pipeline modules are imported from `dist/` (compiled to plain
 * ESM by build.mjs) because a consumer's astro.config is loaded by Node, which
 * cannot strip TypeScript from a dependency. Runtime components (.astro/.tsx)
 * are compiled from src/ by the consumer's Astro/Vite pipeline.
 */
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import { remarkPlugins } from "../dist/mdx/remark.js";
import { rehypePlugins } from "../dist/mdx/rehype.js";
import generateRoutes from "../dist/integrations/generate-routes.js";

const VIRTUAL_ID = "virtual:rivet-docs/config";
const RESOLVED_ID = "\0" + VIRTUAL_ID;

/** Exposes the SiteConfig to component overrides via a Vite virtual module, and
 *  wires the markdown (.md) pipeline. */
function configIntegration(config) {
  const serialized = JSON.stringify(config ?? {});
  return {
    name: "@rivet-dev/docs-theme/config",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          markdown: {
            syntaxHighlight: false,
            remarkPlugins,
            rehypePlugins,
          },
          vite: {
            plugins: [
              {
                name: "rivet-docs-config",
                resolveId(id) {
                  return id === VIRTUAL_ID ? RESOLVED_ID : null;
                },
                load(id) {
                  return id === RESOLVED_ID
                    ? `export default ${serialized};`
                    : null;
                },
              },
            ],
          },
        });
      },
    },
  };
}

/**
 * Build the docs-theme integrations. Spread into `integrations` in
 * `astro.config.mjs`:
 *
 *   import { docsTheme } from "@rivet-dev/docs-theme";
 *   integrations: [...docsTheme(siteConfig)]
 *
 * Also set `markdown.syntaxHighlight: false` + the same remark/rehype plugins is
 * handled automatically via the config integration.
 */
export function docsTheme(config = {}) {
  return [
    react(),
    mdx({ syntaxHighlight: false, remarkPlugins, rehypePlugins }),
    generateRoutes(),
    configIntegration(config),
  ];
}

export { remarkPlugins, rehypePlugins };
export default docsTheme;
