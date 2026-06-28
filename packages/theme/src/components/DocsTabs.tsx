"use client";

import { usePathname } from "../hooks/usePathname";
import { cn } from "@rivet-gg/components";
import config from "virtual:rivet-docs/config";

const norm = (p: string) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);
const isUnder = (path: string, match: string) => {
	const a = norm(path);
	const m = norm(match);
	return a === m || a.startsWith(m + "/");
};

export function DocsTabs({
	light = false,
	initialPathname = "",
}: { light?: boolean; initialPathname?: string }) {
	// usePathname is empty during SSR and the first client render, so seed it
	// from the Astro-provided pathname so the active tab highlights at SSR time.
	const pathname = usePathname() || initialPathname;
	const normalizedPath = pathname.replace(/\/$/, "");
	const tabs = config.tabs ?? [];

	// A single tab is redundant with the product/Documentation link — only show
	// the secondary tab strip when there are 2+ tabs to switch between.
	if (tabs.length <= 1) return null;

	return (
		<div className="-mx-8 hidden h-14 items-center gap-4 bg-[#e9e9eb] px-8 empty:hidden md:flex">
			{tabs.map((tab) => {
				const isActive = tab.match
					? isUnder(normalizedPath, tab.match)
					: norm(normalizedPath) === norm(tab.href);
				return (
					<a
						key={tab.href}
						href={tab.href}
						target={tab.target}
						aria-current={isActive ? "page" : undefined}
						className={cn(
							"px-0 text-sm hover:bg-transparent flex items-center border-b-2 border-transparent rounded-none h-full transition-colors",
							light
								? "text-ink-faint aria-[current=page]:text-ink aria-[current=page]:border-pine"
								: "text-muted-foreground aria-[current=page]:text-foreground aria-[current=page]:border-primary",
						)}
					>
						{tab.label}
					</a>
				);
			})}
		</div>
	);
}
