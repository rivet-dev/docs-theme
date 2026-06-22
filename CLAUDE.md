# @rivet-dev/docs-theme

Shared Starlight docs theme/framework for Rivet OSS projects (secure-exec and
agent-os-docs are the first consumers). One fixed Rivet "porcelain" brand;
consumers pass a `SiteConfig` and never configure Starlight directly. Distributed
by `github:` URL pinned to a tag (no npm publishing). `example/` is a standalone
site that proves the package end-to-end — keep it building (`pnpm --dir example
build`) when changing the package.

## How to update

- **Brand/chrome** (palette, fonts, header, sidebar, code blocks): edit this
  package. `src/styles/theme.css` (porcelain tokens + `@font-face`),
  `src/expressive-code.mjs` (code blocks), `src/components/*.astro` (chrome),
  `src/icons.mjs` (shared FA icon catalog). Re-test via `pnpm --dir website build`.
- **A consumer's identity/nav/content**: that belongs in the consumer's
  `docs.config.mjs` (`SiteConfig`), never hardcoded here.
- After changing the `SiteConfig` shape, update `src/site-config.d.ts`,
  `src/virtual.d.ts`, and `README.md` together — the config is a shared contract.

## Changing a style (release workflow)

ALL docs styling for Rivet OSS sites lives here — never restyle docs in a
consumer repo. To change a style:

1. **Edit here**, then verify with the standalone example (no consumer needed):
   `pnpm --dir example build`.
2. **Iterate against a real consumer locally** by overriding its github dep with a
   live symlink — use `link:` (pnpm *copies* `file:` deps, so edits go stale):
   ```jsonc
   // consumer package.json (at the root of its pnpm workspace)
   "pnpm": { "overrides": { "@rivet-dev/docs-theme": "link:/abs/path/to/docs-theme" } }
   ```
   `pnpm install`; edits here now reflect on the consumer's next build. You may keep
   the override through local commits while iterating, but **remove it before
   pushing** — a pushed consumer must use `github:…#tag`, never a path.
3. **Release**: bump `version` in `package.json`, commit, `git tag vX.Y.Z`,
   `git push origin main --tags`. Consumers pin to a **tag**, never `#main`.
4. **Update one consumer**: set its dep to `github:rivet-dev/docs-theme#vX.Y.Z`,
   `pnpm install` (refetches the tag), rebuild to verify.
5. **Roll to everyone**: once proven on one site, **prompt the user** before bumping
   the tag in secure-exec, agent-os, and sandbox-agent and pushing each to `main`
   (each push triggers a Railway redeploy).

Notes:
- Don't patch the installed copy under `node_modules` as a fix — throwaway test only.
- Per-site one-offs that don't belong in the shared brand go through the consumer's
  escape hatches (`config.css`, `config.components`, `config.starlight`) — not here.
- Consumer Starlight plugins (e.g. `starlight-openapi`) run BEFORE this theme's final
  config, so the theme re-asserts Expressive Code last (see `config.mjs`); otherwise a
  plugin resets the dark code-block styling.

## Invariants

- **Ship source only** — `.astro`/`.css`/`.mjs`/`.woff2`. No build/`prepare`/
  `postinstall` step; Astro/Vite compile at the consumer's build time.
- **Never import `@astrojs/starlight` here.** Starlight ships TS source that Node
  can't strip under `node_modules`; the consumer imports `starlight` and passes
  the factory into `docsTheme(starlight, config)`.
- **No React peer dep.** Interactive bits (e.g. `GitHubStars.astro`) are plain
  Astro + inline scripts.
- **No hardcoded routes/projects.** Sidebar icons come from `entry.attrs['data-icon']`
  (fed by a manual sidebar item's `attrs` or a page's `sidebar.attrs`), resolved
  against `src/icons.mjs`. Header/landing data comes from the virtual module
  `virtual:rivet-docs/config`. Zero `secure-exec` references belong in this package.
- Fonts are bundled via relative `url()` in `theme.css` (Vite hashes + emits
  them) — do not reference an absolute `/fonts/...` path.
- PostHog host is fixed (`ph.rivet.gg`); only the project key is configurable.
