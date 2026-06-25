# @rivet-dev/docs-theme

The shared [Starlight](https://starlight.astro.build/) docs theme and framework
for Rivet OSS projects — one fixed Rivet "porcelain" brand (light-only palette,
Manrope + JetBrains Mono, dark code blocks, the Rivet header lockup). Consumers
never configure Starlight directly: they pass a `SiteConfig` and supply only
their markdown content and landing page.

Distributed by **git URL**, not npm. Pin a consumer to a tag:

```jsonc
// package.json
"dependencies": {
  "@rivet-dev/docs-theme": "github:rivet-dev/docs-theme#v0.1.0"
}
```

The package ships source (`.astro` / `.css` / `.mjs` / `.woff2`); Astro/Vite
compile it at the consumer's build time. There is no build or install step.

## Usage

Starlight ships TypeScript source, so the consumer imports the `starlight`
factory and passes it in (this keeps Node from trying to load Starlight's `.ts`
natively during config load):

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { docsTheme } from "@rivet-dev/docs-theme";
import { siteConfig } from "./docs.config.mjs";

export default defineConfig({
  integrations: [...docsTheme(starlight, siteConfig)],
});
```

```js
// docs.config.mjs
/** @type {import('@rivet-dev/docs-theme').SiteConfig} */
export const siteConfig = {
  product: "My Project",
  productLogo: "/logo.svg",      // optional; falls back to the product text
  repo: "rivet-dev/my-project",  // derives the GitHub link, stars, edit links
  editPath: "website/",          // sub-path prefix for edit links
  topNav: [{ label: "Documentation", href: "/docs", match: "/docs" }],
  cta: { label: "Get Started", href: "/docs/quickstart" },
  social: { discord: "https://rivet.dev/discord" },
  analytics: { posthogKey: "phc_..." },   // PostHog host is fixed
  landing: { title, subtitle, cards: [...] },
  sidebar: [
    {
      label: "Getting Started",
      items: [
        // Icons attach via `attrs.data-icon` (resolved against the shared
        // catalog), so the theme hardcodes no routes. Pages may instead set
        // `sidebar.attrs.data-icon` in their own frontmatter.
        { slug: "docs/quickstart", attrs: { "data-icon": "rocket" } },
      ],
    },
  ],
};
```

Render the docs landing on your overview page:

```mdx
import DocsLanding from '@rivet-dev/docs-theme/components/DocsLanding.astro';

<DocsLanding />
```

## Escape hatches

`SiteConfig` accepts `starlight` (extra Starlight config, merged), `css` (extra
stylesheet specifiers appended after the theme), and `components` (override any
Starlight component slot) for projects that need to diverge.

## Icon catalog

Icons are backed by **native Font Awesome** (`@fortawesome/free-solid-svg-icons`,
the free package — public npm, no token). `src/icons.mjs` maps each stable theme
key to a Font Awesome glyph and exposes it as `{ w, d }` (intrinsic width + SVG
path). Consumers reference an icon by key, unchanged:

- a sidebar leaf via `sidebar[].attrs['data-icon']`,
- a sidebar GROUP label via `sidebarGroupIcons` (e.g. `{ Agents: "bot" }`),
- a landing card via `icon`.

Available keys: `rocket`, `terminal`, `bot`, `code`, `server`, `puzzle`,
`layers`, `hexagon`, `globe`, `cpu`, `fileCode`, `shield`, `folder`,
`folderTree`, `network`, `package`, `box`, `blocks`, `book`, `scroll`, `gauge`,
`split`, `check`, `gitCompare`, `dollar`, `lock`, `dot`, `info`, `lightbulb`,
`scaleBalanced`, `messages`, `key`, `wrench`, `cloud`, `download`, `floppyDisk`,
`clock`, `hardDrive`, `link`, `towerBroadcast`, `arrowsLeftRight`, `diagramNext`,
`mailbox`, `database`, `zap`, `play`, `plus`.

### Adding / swapping an icon

Import any glyph from `@fortawesome/free-solid-svg-icons` and add it to the `FA`
map in `src/icons.mjs`. To swap a key to a different glyph, just point it at a
different import — consumer config keeps working because the key is the contract.

### Using Font Awesome Pro / custom-kit icons

Pro (`@fortawesome/pro-*-svg-icons`) and custom-kit (`@awesome.me/kit-*`) glyphs
come from Font Awesome's own registry and need a Pro license. To pull them in:

1. Set `FONTAWESOME_PACKAGE_TOKEN` to your Font Awesome Pro package token
   (https://fontawesome.com/account → "Package Manager Tokens", or a kit token).
   Never commit the token.
2. Uncomment the registry lines in `.npmrc` (already wired to read the env var).
3. Add the Pro/kit package to `dependencies` in `package.json`, `pnpm install`,
   then import the glyph in `src/icons.mjs` exactly like the free ones.

## License

MIT
