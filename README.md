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

## Docs search (Typesense)

The theme ships a hosted-Typesense search UI (`src/components/v2/TypesenseSearch.tsx`)
plus a standalone indexer (`scripts/index-docs.mjs`) that populates the collection
it reads. Consumers configure the **search-only** (client) side in `docs.config.mjs`
and run the indexer with the **admin/populate** key from the environment (never
committed).

### Config shape (`docs.config.mjs`)

The search-only key is safe to ship client-side:

```js
export const siteConfig = {
  // ...
  search: {
    typesense: {
      host: "xxxxx.a1.typesense.net",
      port: 443,            // optional, defaults to 443
      protocol: "https",    // optional, defaults to https
      searchApiKey: "<search-only key>",
      collectionName: "my-docs",
    },
  },
};
```

### Indexer environment variables

`scripts/index-docs.mjs` reads everything from env so the admin key never lands in
a committed file:

| Var | Required | Default | Meaning |
| --- | --- | --- | --- |
| `TYPESENSE_HOST` | yes | — | cluster host (skips gracefully if missing) |
| `TYPESENSE_PORT` | no | `443` | cluster port |
| `TYPESENSE_PROTOCOL` | no | `https` | `http`/`https` |
| `TYPESENSE_API_KEY` | yes | — | **admin/populate** key (skips gracefully if missing) |
| `TYPESENSE_COLLECTION_NAME` | yes | — | collection to create/update + upsert into |
| `DOCS_DIR` | no | cwd | website dir to index from |
| `DOCS_SITE_URL` | no | `""` | optional origin prefixed onto each doc URL |

It creates-or-updates the collection (retrieve → update, recreate on schema
mismatch), then upserts every doc in batches. Documents carry `id, title, content,
url, hierarchy.lvl0/lvl1/lvl2` — the exact fields the search UI queries. URLs are
sourced from `${DOCS_DIR}/src/content/docs/**/*.{md,mdx}` (route id == path relative
to `src/content/docs`, e.g. `docs/quickstart.mdx` → `/docs/quickstart`), falling
back to the theme-emitted `public/docs/**.md` if no sources are present. If the host
or API key is missing it logs and exits 0.

### Populate command

Each consumer website wires a `docs:index` script that invokes the theme indexer:

```jsonc
// website/package.json
"scripts": {
  "docs:index": "node --input-type=module -e \"import('@rivet-dev/docs-theme/scripts/index-docs').then(m => m.indexDocs())\""
}
```

Run it with the admin key supplied out of band:

```sh
TYPESENSE_HOST=xxxxx.a1.typesense.net \
TYPESENSE_API_KEY=<admin key> \
TYPESENSE_COLLECTION_NAME=my-docs \
DOCS_DIR=$PWD \
pnpm --filter ./website run docs:index
```

The indexer is also exposed directly as the `docs-theme-index` bin and importable
as `import { indexDocs } from "@rivet-dev/docs-theme/scripts/index-docs"`.

## License

MIT
