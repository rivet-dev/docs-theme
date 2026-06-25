import { defineConfig } from "astro/config";
import { docsTheme } from "@rivet-dev/docs-theme";

const siteConfig = {
  product: "Example",
  productHome: "/",
};

export default defineConfig({
  site: "https://example.com",
  output: "static",
  integrations: [...docsTheme(siteConfig)],
  vite: {
    ssr: {
      // The theme + vendored UI packages ship TypeScript/TSX source; let Vite
      // compile them instead of trying to externalize them at SSR time.
      noExternal: ["@rivet-dev/docs-theme", "@rivet-gg/components", "@rivet-gg/icons"],
    },
  },
});
