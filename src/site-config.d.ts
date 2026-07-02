/**
 * SiteConfig — the consumer-supplied configuration for @rivet-dev/docs-theme.
 * Passed to `docsTheme(siteConfig)` and exposed to components via the
 * `virtual:rivet-docs/config` virtual module. Everything that was hardcoded to
 * rivet.dev in the original platform is parameterized here.
 */
import type { Sitemap } from "./lib/sitemap";

export interface NavItem {
  label: string;
  href: string;
  /** Active-state prefix match (e.g. "/docs"). */
  match?: string;
  external?: boolean;
  target?: string;
}

/** Product entries for the header "products" dropdown (optional). */
export interface ProductItem {
  label: string;
  href: string;
  logo?: string;
  description?: string;
  external?: boolean;
}

export interface CallToAction {
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
  target?: string;
}

export interface FooterConfig {
  /** Named columns of links, e.g. { Product: [...], Resources: [...] }. */
  columns?: Record<string, FooterLink[]>;
  /** Social icon links (icon key + href). */
  social?: { icon: string; href: string; label?: string }[];
  /** Small print / copyright line. */
  copyright?: string;
}

export interface SearchConfig {
  /** Hosted Typesense connection (search-only key is safe to ship). */
  typesense?: {
    host: string;
    port?: number;
    protocol?: string;
    searchApiKey: string;
    collectionName: string;
  };
}

export interface FaviconConfig {
  svg?: string;
  icon16?: string;
  icon32?: string;
  appleTouchIcon?: string;
  manifest?: string;
}

export interface OrganizationConfig {
  name?: string;
  url?: string;
  logo?: string;
  email?: string;
  sameAs?: string[];
}

export interface AnalyticsConfig {
  posthogKey?: string;
  gaId?: string;
  ahrefsKey?: string;
}

export interface SiteConfig {
  /** Product / site name (used in titles, og:site_name, schema). */
  product: string;
  /** Logo image URL/path shown in the header. */
  productLogo?: string;
  /** Where the logo links to (default "/"). */
  productHome?: string;
  /** Canonical site origin, e.g. "https://agentos-sdk.dev". */
  siteUrl?: string;
  /** Default meta description. */
  description?: string;
  /** Default OG image URL. */
  ogImage?: string;
  themeColor?: string;

  /** GitHub "owner/repo" for edit links. */
  repo?: string;
  /** Path prefix within the repo for edit links. */
  editPath?: string;

  /** Top navigation (right side of header). */
  topNav?: NavItem[];
  /** In-docs tab strip (Documentation / Cookbooks / ...). */
  tabs?: NavItem[];
  /** Optional products dropdown. */
  products?: ProductItem[];
  /** Primary CTA button. */
  cta?: CallToAction;

  /** The docs navigation tree. */
  sitemap?: Sitemap;

  social?: { discord?: string; github?: string; twitter?: string; [k: string]: string | undefined };
  favicon?: FaviconConfig;
  organization?: OrganizationConfig;
  analytics?: AnalyticsConfig;
  search?: SearchConfig;
}

declare module "virtual:rivet-docs/config" {
  const config: SiteConfig;
  export default config;
}
