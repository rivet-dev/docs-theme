"use client";
import { usePathname } from "../hooks/usePathname";
import { Button } from "./Button";
import routes from "../generated/routes.json";
import clsx from "clsx";
import config from "virtual:rivet-docs/config";

import {
	Icon,
	faBluesky,
	faDiscord,
	faGithub,
	faLinkedin,
	faTwitter,
	faYoutube,
} from "@rivet-gg/icons";

// Map config social `icon` strings to the imported icon objects. Unknown
// names are skipped gracefully (see SmallPrint).
const SOCIAL_ICONS = {
	bluesky: faBluesky,
	discord: faDiscord,
	github: faGithub,
	linkedin: faLinkedin,
	twitter: faTwitter,
	x: faTwitter,
	youtube: faYoutube,
};

function PageLink({ label, page, previous = false }) {
	const title = routes.pages[page.href]?.title ?? page.title ?? label;
	return (
		<>
			<Button
				href={page.href}
				aria-label={`${label}: ${page.title}`}
				variant="secondary"
				arrow={previous ? "left" : "right"}
			>
				{title}
			</Button>
		</>
	);
}

export function PageNextPrevious({ navigation }) {
	const pathname = usePathname();
	const allPages = navigation.sidebar.groups.flatMap((group) => group.pages);
	const currentPageIndex = allPages.findIndex(
		(page) => page.href === pathname,
	);

	if (currentPageIndex === -1) {
		return null;
	}

	const previousPage = allPages[currentPageIndex - 1];
	const nextPage = allPages[currentPageIndex + 1];

	if (!previousPage && !nextPage) {
		return null;
	}

	return (
		<div className={clsx("mb-4 flex", "mx-auto max-w-5xl")}>
			{previousPage && (
				<div className="flex flex-col items-start gap-3">
					<PageLink label="Previous" page={previousPage} previous />
				</div>
			)}
			{nextPage && (
				<div className="ml-auto flex flex-col items-end gap-3">
					<PageLink label="Next" page={nextPage} />
				</div>
			)}
		</div>
	);
}

function SmallPrint() {
	const footerConfig = config.footer ?? {};
	const columns = footerConfig.columns ?? {};
	const social = footerConfig.social ?? [];
	const columnEntries = Object.entries(columns);

	return (
		<div className="mx-auto max-w-7xl w-full py-16">
			<div className="grid grid-cols-1 min-[440px]:grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
				{/* Brand column */}
				<div className="col-span-1 min-[440px]:col-span-2 md:col-span-4 lg:col-span-1 space-y-6">
					{config.productLogo && (
						<img className="h-8 w-8" src={config.productLogo} alt={config.product} />
					)}
					<div className="flex gap-4">
						{social.map((item) => {
							const icon = SOCIAL_ICONS[item.icon];
							if (!icon) return null;
							return (
								<a
									key={item.href}
									href={item.href}
									className="text-ink-faint hover:text-ink transition-colors"
								>
									<span className="sr-only">{item.label ?? item.icon}</span>
									<Icon icon={icon} aria-hidden="true" />
								</a>
							);
						})}
					</div>
				</div>

				{/* Configured link columns */}
				{columnEntries.map(([title, links]) => (
					<div key={title}>
						<h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint mb-4">{title}</h3>
						<ul className="space-y-3">
							{(links ?? []).map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										target={item.target}
										className="text-sm text-ink-soft hover:text-ink transition-colors"
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			{/* Copyright */}
			{footerConfig.copyright && (
				<div className="mt-12 border-t border-ink/10 pt-8">
					<p className="text-xs text-ink-faint">{footerConfig.copyright}</p>
				</div>
			)}
		</div>
	);
}

// The footer is light by default to match the porcelain surfaces (marketing
// and docs). Only the Learn section keeps its dark shell, so that path applies
// a dark override wrapper instead.
const DARK_THEMED_PATH_PREFIXES = ['/learn'];

export function Footer({ initialPathname = "" }) {
	// usePathname returns "" during SSR; fall back to the server-provided path
	// so docs pages do not flash a light footer before hydration.
	const pathname = usePathname() || initialPathname;
	const isDark = DARK_THEMED_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + '/'));

	return (
		<div
			className={
				isDark
					? '[&_*]:!border-white/10 [&_a]:!text-zinc-400 [&_a:hover]:!text-white [&_h3]:!text-zinc-500 [&_p]:!text-zinc-600 [&_span]:!text-zinc-500'
					: 'bg-paper [&_.footer-invert]:invert'
			}
		>
			<hr className={isDark ? 'mb-8 border-white/10' : 'mb-8 border-ink/10'} />

			<footer
				aria-labelledby="footer-heading"
				className="mx-auto max-w-screen-2xl px-6 lg:px-12"
			>
				<h2 id="footer-heading" className="sr-only">
					Footer
				</h2>
				<SmallPrint />
			</footer>
		</div>
	);
}
