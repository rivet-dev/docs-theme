import { defineConfig } from "astro/config";
import { docsTheme } from "@rivet-dev/docs-theme";

const siteConfig = {
  product: "Example Docs",
  productLogo: "/logo.svg",
  productHome: "/",
  siteUrl: "https://example.com",
  topNav: [{ label: "Docs", href: "/", match: "/" }],
  tabs: [{ label: "Documentation", href: "/", match: "/" }],
  cta: { label: "Get Started", href: "/" },
  social: { github: "https://github.com/rivet-dev" },
  footer: {
    columns: {
      Docs: [{ name: "Home", href: "/" }],
    },
    social: [{ icon: "faGithub", href: "https://github.com/rivet-dev", label: "GitHub" }],
    copyright: "© Example",
  },
};

export default defineConfig({
  site: "https://example.com",
  output: "static",
  integrations: [...docsTheme(siteConfig)],
  vite: {
    ssr: {
      noExternal: ["@rivet-dev/docs-theme", "@rivet-gg/components", "@rivet-gg/icons"],
    },
  },
});
