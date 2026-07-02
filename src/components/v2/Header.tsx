"use client";
import { usePathname } from "../../hooks/usePathname";
import { ActiveLink } from "../ActiveLink";
import { Tree } from "../DocsNavigation";
import { NavigationStateProvider } from "../../providers/NavigationStateProvider";
import type { SidebarItem } from "../../lib/sitemap";
import config from "virtual:rivet-docs/config";
import type { NavItem, ProductItem } from "../../site-config";
import { cn } from "@rivet-gg/components";
import { Header as RivetHeader } from "@rivet-gg/components/header";
import { Icon, faDiscord } from "@rivet-gg/icons";
import React, { type ReactNode, useEffect, useRef, useState } from "react";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@rivet-gg/components";
import { faChevronDown } from "@rivet-gg/icons";
import { ArrowRight } from "lucide-react";
import { GitHubDropdown } from "./GitHubDropdown";
import { HeaderSearch } from "./HeaderSearch";
import { LogoContextMenu } from "./LogoContextMenu";
import { DocsTabs } from "../DocsTabs";

/** Where the brand logo links to. */
const productHome = config.productHome || "/";

/** The shared Rivet sub-brand mark (links to rivet.dev). */
function RivetMark() {
	return (
		<a href="https://rivet.dev" aria-label="Rivet" className="flex items-center shrink-0">
			<svg width="28" height="28" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="rounded-[7px]">
				<rect x="1" y="1" width="126" height="126" rx="44" fill="#0F0F0F" />
				<rect x="18.25" y="18.25" width="91.5" height="91.5" rx="25.75" stroke="#F0F0F0" strokeWidth="8.5" />
				<path fillRule="evenodd" clipRule="evenodd" d="M57.694 43.098c0-.622-.505-1.126-1.127-1.126h-8.444a5.114 5.114 0 0 0-5.112 5.111v33.824a5.114 5.114 0 0 0 5.112 5.112h8.444c.622 0 1.127-.505 1.127-1.127V43.098Zm24.424 27.869c-1.238-2.222-4.047-4.026-6.27-4.026H62.923c-.684 0-.93.555-.549 1.239l7.703 13.822c1.239 2.223 4.048 4.026 6.27 4.026h12.927c.683 0 .93-.555.548-1.239l-7.703-13.822Zm.538-18.718c0-5.672-4.605-10.277-10.277-10.277H63.31a1.21 1.21 0 0 0-1.209 1.209v18.137c0 .667.542 1.209 1.21 1.209h9.068c5.672 0 10.277-4.605 10.277-10.278Z" fill="#F0F0F0" />
			</svg>
		</a>
	);
}

/**
 * Brand logo lockup, driven by config: the shared Rivet mark, a hairline
 * divider, then the product wordmark (config.productLogo) or product name.
 * Mirrors the rivet.dev / docs-theme "[Rivet mark] | [product]" lockup.
 */
function BrandLogo({ className, alt }: { className?: string; alt?: string }) {
	return (
		<div className="flex items-center gap-2">
			<RivetMark />
			<span aria-hidden="true" className="h-5 w-px bg-ink/20" />
			<a href={productHome} aria-label={`${config.product} home`} className="flex items-center">
				{config.productLogo ? (
					<img
						src={config.productLogo}
						className={cn("h-[18px] w-auto", className)}
						alt={alt ?? config.product}
						loading="eager"
						decoding="async"
					/>
				) : (
					<span className={cn("whitespace-nowrap text-base font-semibold text-ink", className)}>
						{config.product}
					</span>
				)}
			</a>
		</div>
	);
}

interface TextNavItemProps {
	href: string;
	children: ReactNode;
	className?: string;
	ariaCurrent?: boolean | "page" | "step" | "location" | "date" | "time";
	external?: boolean;
}

function TextNavItem({
	href,
	children,
	className,
	ariaCurrent,
	external,
}: TextNavItemProps) {
	return (
		<div className={cn("px-2.5 py-2", className)}>
			<RivetHeader.NavItem asChild>
				<a
					href={href}
					target={external ? "_blank" : undefined}
					rel={external ? "noopener noreferrer" : undefined}
					className={cn(
						"text-zinc-400 hover:text-white transition-colors duration-200",
						ariaCurrent === "page" && "text-white",
					)}
					aria-current={ariaCurrent}
				>
					{children}
				</a>
			</RivetHeader.NavItem>
		</div>
	);
}

function ProductsDropdown({
	active,
	lightTheme = false,
	align = "center",
}: {
	active?: boolean;
	lightTheme?: boolean;
	align?: "center" | "start";
}) {
	const [isOpen, setIsOpen] = useState(false);
	const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const isHoveringRef = useRef(false);

	const products: ProductItem[] = config.products ?? [];

	const cancelClose = () => {
		if (closeTimeoutRef.current) {
			clearTimeout(closeTimeoutRef.current);
			closeTimeoutRef.current = null;
		}
	};

	const scheduleClose = () => {
		cancelClose();
		closeTimeoutRef.current = setTimeout(() => {
			setIsOpen(false);
		}, 150);
	};

	const handleMouseEnter = () => {
		isHoveringRef.current = true;
		cancelClose();
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		isHoveringRef.current = false;
		scheduleClose();
	};

	const handleOpenChange = (open: boolean) => {
		if (!open) {
			cancelClose();
			setIsOpen(false);
		}
	};

	const handlePointerDown = (e: React.PointerEvent) => {
		e.preventDefault();
		cancelClose();
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		return () => cancelClose();
	}, []);

	// No products configured -> omit the dropdown entirely.
	if (!products.length) return null;

	if (lightTheme) {
		return (
			<div
				className={cn("group/products px-2.5 py-2", align === "start" && "relative")}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<RivetHeader.NavItem asChild>
					<button
						type="button"
						aria-expanded={isOpen}
						className={cn(
							"cursor-default flex items-center gap-1 relative transition-colors duration-200",
							"!text-zinc-600 hover:!text-zinc-900",
							active && "!text-zinc-900",
							// Invisible hover bridge spanning the visual gap down to the
							// dropdown panel so moving the mouse from the trigger to the
							// panel does not cross a dead zone and close the menu.
							"after:absolute after:left-0 after:right-0 after:top-full after:h-7 after:content-['']",
						)}
						onMouseEnter={handleMouseEnter}
					>
						Products
						<Icon
							aria-hidden="true"
							icon={faChevronDown}
							className={cn(
								"h-3 w-3 ml-0.5 transition-transform duration-200",
								isOpen && "rotate-180",
							)}
						/>
					</button>
				</RivetHeader.NavItem>
				<div
					className={cn(
						"z-50 -translate-y-1 overflow-hidden rounded-2xl border border-ink/10 bg-paper/80 p-1.5 opacity-0 shadow-[0_18px_50px_-32px_rgba(27,25,22,0.42)] backdrop-blur-[18px] backdrop-saturate-[1.35] transition-all duration-150 pointer-events-none group-hover/products:pointer-events-auto group-hover/products:translate-y-0 group-hover/products:opacity-100",
						align === "start"
							? "absolute left-0 top-full mt-3 w-80"
							: "fixed left-1/2 top-[63px] w-[min(912px,calc(100vw-3rem))] -translate-x-1/2",
						isOpen
							? "pointer-events-auto translate-y-0 opacity-100"
							: "pointer-events-none -translate-y-1 opacity-0",
					)}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<div className="flex flex-col">
						{products.map((product) => (
							<a
								key={product.href}
								href={product.href}
								target={product.external ? "_blank" : undefined}
								rel={product.external ? "noopener noreferrer" : undefined}
								className="group/product-row flex items-center gap-2.5 rounded-xl px-3 py-1 text-ink transition-colors hover:bg-ink/[0.07]"
							>
								{product.logo && (
									<img
										src={product.logo}
										alt={product.label}
										width={18}
										height={18}
										className="h-[18px] w-[18px] shrink-0 invert opacity-85"
										loading="lazy"
										decoding="async"
									/>
								)}
								<div className="min-w-0 flex-1">
									<div className="text-sm font-medium leading-tight text-ink">
										{product.label}
									</div>
									{product.description && (
										<div className="text-xs leading-tight text-ink-faint">
											{product.description}
										</div>
									)}
								</div>
								<ArrowRight
									aria-hidden="true"
									className="invisible h-4 w-4 text-ink-faint opacity-0 transition-all duration-150 group-hover/product-row:visible group-hover/product-row:translate-x-0.5 group-hover/product-row:opacity-100 group-hover/product-row:text-ink"
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			className="px-2.5 py-2"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<DropdownMenu open={isOpen} onOpenChange={handleOpenChange} modal={false}>
				<DropdownMenuTrigger asChild>
					<RivetHeader.NavItem asChild>
						<button
							type="button"
							className={cn(
								"cursor-pointer flex items-center gap-1 relative transition-colors duration-200",
								lightTheme ? "!text-zinc-600 hover:!text-zinc-900" : "!text-zinc-400 hover:!text-white",
								active && !lightTheme && "!text-white",
								"after:absolute after:left-0 after:right-0 after:top-full after:h-4 after:content-['']",
							)}
							onPointerDown={handlePointerDown}
							onMouseEnter={handleMouseEnter}
						>
							Products
							<Icon icon={faChevronDown} className="h-3 w-3 ml-0.5" />
						</button>
					</RivetHeader.NavItem>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="start"
					className={cn(
						"min-w-[280px] p-4 rounded-xl shadow-xl",
						lightTheme
							? "bg-white/95 backdrop-blur-lg border border-zinc-200"
							: "bg-black/95 backdrop-blur-lg border border-white/10",
					)}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					sideOffset={0}
					alignOffset={0}
					side="bottom"
				>
					<div className="flex flex-col gap-1">
						{products.map((product) => (
							<a
								key={product.href}
								href={product.href}
								target={product.external ? "_blank" : undefined}
								rel={product.external ? "noopener noreferrer" : undefined}
								className={cn(
									"group flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer",
									lightTheme ? "hover:bg-zinc-100" : "hover:bg-white/5",
								)}
							>
								{product.logo && (
									<img
										src={product.logo}
										alt={product.label}
										width={24}
										height={24}
										className="h-6 w-6"
										loading="lazy"
										decoding="async"
									/>
								)}
								<div className="flex flex-col">
									<div className={cn(
										"font-medium text-sm transition-colors",
										lightTheme ? "text-zinc-900" : "text-white group-hover:text-white",
									)}>
										{product.label}
									</div>
									{product.description && (
										<div className={cn(
											"text-xs transition-colors leading-relaxed",
											lightTheme ? "text-zinc-500 group-hover:text-zinc-700" : "text-zinc-400 group-hover:text-zinc-300",
										)}>
											{product.description}
										</div>
									)}
								</div>
							</a>
						))}
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

interface HeaderProps {
	active?:
	| "product"
	| "docs"
	| "cookbook"
	| "blog"
	| "pricing"
	| "learn";
	subnav?: ReactNode;
	mobileSidebar?: ReactNode;
	sidebarData?: SidebarItem[];
	variant?: "floating" | "full-width";
	learnMode?: boolean;
	showDocsTabs?: boolean;
	light?: boolean;
	initialPathname?: string;
}

export function Header({
	active,
	subnav,
	mobileSidebar,
	sidebarData,
	variant = "full-width",
	learnMode = false,
	showDocsTabs = false,
	light = false,
	initialPathname = "",
}: HeaderProps) {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		if (variant === "floating") {
			const handleScroll = () => {
				setIsScrolled(window.scrollY > 20);
			};

			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}
	}, [variant]);

	const clientPathname = usePathname();
	const pathname = clientPathname || initialPathname;
	// The floating variant only renders on marketing pages, which are all
	// porcelain. The full-width variant is porcelain for docs (light=true) and
	// stays dark for the Learn section.
	const isLightTheme = variant === "floating" || light;

	// Use DocsTabs as subnav if showDocsTabs is true
	const effectiveSubnav = showDocsTabs ? <DocsTabs light={isLightTheme} initialPathname={pathname} /> : subnav;

	// Set body attribute for global CSS targeting (e.g., mobile sheet styling)
	useEffect(() => {
		if (isLightTheme) {
			document.body.setAttribute('data-light-theme', 'true');
		} else {
			document.body.removeAttribute('data-light-theme');
		}
		return () => {
			document.body.removeAttribute('data-light-theme');
		};
	}, [isLightTheme]);

	if (variant === "floating") {
		const headerStyles = cn(
			"border-transparent static bg-transparent rounded-2xl max-w-[960px] md:max-w-[1200px] [&>div:first-child]:px-3 backdrop-blur-none transition-all hover:opacity-100",
			isScrolled ? "opacity-100" : "opacity-100 md:opacity-80",
		);

		return (
			<div
				className={cn(
					"fixed top-2 z-50 w-full max-w-[960px] px-3 md:left-1/2 md:top-4 md:-translate-x-1/2 md:px-6",
					isLightTheme && "selection:bg-orange-200 selection:text-orange-900"
				)}
				data-light-theme={isLightTheme ? "true" : undefined}
			>
				<div
					className={cn(
						"hero-bg-exclude",
						'relative before:pointer-events-none before:absolute before:inset-[-1px] before:z-20 before:block before:rounded-2xl before:border before:border-ink/10 before:content-[""] before:transition-colors before:duration-300 before:ease-in-out',
					)}
				>
					{/* White glass pill: frosted fill with a soft top sheen. The pill's
						outline is the ink/10 hairline on the parent's ::before, so this
						layer carries no border of its own. */}
					<div className="absolute inset-0 -z-[1] overflow-hidden rounded-2xl bg-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-[18px] backdrop-saturate-[1.4]" />
					<RivetHeader
						className={headerStyles}
						logo={
							<>
								{/* Mobile logo */}
								<div className="md:hidden ml-1">
									<a href={productHome}>
										<BrandLogo className="w-20 shrink-0" />
									</a>
								</div>
								{/* Desktop logo */}
								<div className="hidden md:block">
									<LogoContextMenu>
										<a href={productHome}>
											<BrandLogo className="ml-1 w-20 shrink-0" />
										</a>
									</LogoContextMenu>
								</div>
							</>
						}
						subnav={effectiveSubnav}
						support={null}
						links={
							<div className="flex flex-row items-center">
								{variant === "full-width" && <HeaderSearch />}
								{config.social?.discord && (
									<RivetHeader.NavItem asChild className="p-2 mr-4 hidden md:flex">
										<a href={config.social.discord} className="!text-ink-soft hover:!text-ink transition-colors">
											<Icon icon={faDiscord} />
										</a>
									</RivetHeader.NavItem>
								)}
								<GitHubDropdown className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 h-10 text-sm mr-2 transition-colors border-ink/15 text-ink-soft hover:border-ink/30 hover:text-ink" />
								{config.cta && (
									<a
										href={config.cta.href}
										className="font-v2 subpixel-antialiased inline-flex items-center justify-center whitespace-nowrap rounded-md bg-ink px-4 py-2 text-sm text-cream hover:bg-ink/85 transition-colors"
									>
										{config.cta.label}
									</a>
								)}
							</div>
						}
						mobileBreadcrumbs={
							<DocsMobileNavigation
								tree={mobileSidebar}
								sidebarData={sidebarData}
								isLightTheme={isLightTheme}
							/>
						}
						sheetClassName="!bg-paper [&>button]:!bg-paper [&>button]:!text-ink [&>button]:!border-ink/15"
						lightTheme={isLightTheme}
						breadcrumbs={
							<div className="flex items-center font-v2 subpixel-antialiased [&_a]:!text-ink-soft [&_a:hover]:!text-ink [&_a[aria-current=page]]:!text-ink [&_button]:!text-ink-soft">
								<ProductsDropdown active={active === "product"} lightTheme />
								{(config.topNav ?? []).map((item) => (
									<TextNavItem
										key={item.href}
										href={item.href}
										external={item.external}
										ariaCurrent={item.match && pathname.startsWith(item.match) ? "page" : undefined}
									>
										{item.label}
									</TextNavItem>
								))}
							</div>
						}
					/>
				</div>
			</div>
		);
	}

	// Full-width variant
	return (
		<RivetHeader
			className={cn(
				"sticky top-0 z-50 backdrop-blur-lg",
				isLightTheme
					? "bg-paper/95 border-b border-ink/10 [&_button[data-mobile-menu-trigger]]:text-ink"
					: "bg-neutral-950/80",
				"[&>div:first-child]:px-3 md:[&>div:first-child]:max-w-none md:[&>div:first-child]:px-0 md:px-8",
				// 0 padding on bottom for larger screens when subnav is showing
				effectiveSubnav ? "pb-2 md:pb-0 md:pt-3 md:[&>div:first-child>div:first-child]:min-h-12 md:[&>div:first-child>div:first-child]:mb-3" : "md:py-4",
				// Learn mode styling
				!isLightTheme && learnMode && "bg-[#1c1917] border-b border-[#44403c]",
			)}
			logo={
				<div className="hidden md:block">
					<LogoContextMenu>
						<a href={productHome}>
							<BrandLogo className="ml-1 w-20 shrink-0" />
						</a>
					</LogoContextMenu>
				</div>
			}
			subnav={effectiveSubnav}
			support={<></>}
			links={
				<div className="flex flex-row items-center">
					{!learnMode && (
						<div className="mr-4">
							<HeaderSearch light={isLightTheme} />
						</div>
					)}
					{config.social?.discord && (
						<RivetHeader.NavItem asChild className="p-2 mr-4">
							<a
								href={config.social.discord}
								className={isLightTheme ? "!text-ink-soft hover:!text-ink transition-colors" : "text-white/90"}
							>
								<Icon icon={faDiscord} className="drop-shadow-md" />
							</a>
						</RivetHeader.NavItem>
					)}
					<GitHubDropdown
						className={cn(
							"inline-flex items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 h-10 text-sm mr-2 transition-colors",
							isLightTheme
								? "border-ink/15 text-ink-soft hover:border-ink/30 hover:text-ink"
								: "border-white/10 hover:border-white/20 text-white/90 hover:text-white",
						)}
					/>
					{config.cta && (
						<a
							href={config.cta.href}
							className={cn(
								"font-v2 subpixel-antialiased inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm transition-colors",
								isLightTheme
									? "bg-ink text-cream hover:bg-ink/85"
									: "border border-white/10 bg-white/5 text-white shadow-sm hover:border-white/20",
							)}
						>
							{config.cta.label}
						</a>
					)}
				</div>
			}
			lightTheme={isLightTheme}
			sheetClassName={isLightTheme ? "!bg-paper [&>button]:!bg-paper [&>button]:!text-ink [&>button]:!border-ink/15" : undefined}
			mobileBreadcrumbs={<DocsMobileNavigation tree={mobileSidebar} sidebarData={sidebarData} isLightTheme={isLightTheme} />}
			breadcrumbs={
				<div className={cn(
					"flex items-center font-v2 subpixel-antialiased",
					isLightTheme && "[&_a]:!text-ink-soft [&_a:hover]:!text-ink [&_a[aria-current=page]]:!text-ink [&_button]:!text-ink-soft",
				)}>
					<ProductsDropdown active={active === "product"} lightTheme={isLightTheme} align="start" />
					{(config.topNav ?? []).map((item) => (
						<TextNavItem
							key={item.href}
							href={item.href}
							external={item.external}
							ariaCurrent={item.match && pathname.startsWith(item.match) ? "page" : undefined}
						>
							{item.label}
						</TextNavItem>
					))}
				</div>
			}
		/>
	);
}

function DocsMobileNavigation({
	tree,
	sidebarData,
	isLightTheme = false,
}: {
	tree?: ReactNode;
	sidebarData?: SidebarItem[];
	isLightTheme?: boolean;
}) {
	const pathname = usePathname() || "";
	const isDocsPage = pathname.startsWith("/docs");

	// The in-docs section dropdown is driven by the configured tab strip; the
	// main link list and products come from the same config the header uses.
	const sections: NavItem[] = config.tabs ?? [];
	const mainLinks: NavItem[] = config.topNav ?? [];
	const products: ProductItem[] = config.products ?? [];

	// Current section = the configured tab whose match/href prefix is the
	// longest match against the current path.
	const currentSection = [...sections]
		.filter((s) => pathname.startsWith(s.match ?? s.href))
		.sort((a, b) => (b.match ?? b.href).length - (a.match ?? a.href).length)[0];

	if (isLightTheme) {
		return (
			<div className="flex flex-col gap-2 font-v2 subpixel-antialiased text-sm">
				{/* Home logo */}
				<a href={productHome} className="py-3 px-2">
					<BrandLogo className="w-20" />
				</a>

				{/* Products section */}
				{products.length > 0 && (
					<div className="text-ink-faint py-2 px-2 text-xs uppercase tracking-wide">
						Products
					</div>
				)}
				{products.map((product) => (
					<a
						key={product.href}
						href={product.href}
						target={product.external ? "_blank" : undefined}
						rel={product.external ? "noopener noreferrer" : undefined}
						className="text-ink py-2 px-2 pl-4 hover:bg-ink/5 rounded-sm transition-colors flex items-center gap-2"
					>
						{product.logo && (
							<img
								src={product.logo}
								alt={product.label}
								width={16}
								height={16}
								className="h-4 w-4 invert opacity-85"
								loading="lazy"
								decoding="async"
							/>
						)}
						{product.label}
					</a>
				))}

				{/* Main navigation links */}
				{mainLinks.map((item) => (
					<a
						key={item.href}
						href={item.href}
						target={item.external ? "_blank" : undefined}
						rel={item.external ? "noopener noreferrer" : undefined}
						className="text-ink py-2 px-2 hover:bg-ink/5 rounded-sm transition-colors"
					>
						{item.label}
					</a>
				))}

				{/* Docs section dropdown + sidebar tree */}
				{isDocsPage && (
					<>
						<div className="border-t-2 border-ink/10 my-2" />

						{/* Section dropdown (only with 2+ tabs) */}
						{sections.length > 1 && (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="outline"
										className="w-full justify-between h-9 text-sm border-ink/15 bg-white/55 text-ink hover:bg-white/70 hover:border-ink/30"
									>
										{currentSection?.label || "Select Section"}
										<Icon icon={faChevronDown} className="h-3.5 w-3.5 ml-2" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-[calc(100vw-3rem)] bg-white border border-ink/10 text-ink [&_[role=menuitem]]:text-ink [&_[role=menuitem][data-highlighted]]:bg-ink/[0.06] [&_[role=menuitem][data-highlighted]]:text-ink">
									{sections.map((s) => (
										<DropdownMenuItem key={s.href} asChild>
											<a href={s.href}>{s.label}</a>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						)}

						{/* Tree/sidebar content */}
						{tree && <div className="mt-1">{tree}</div>}
						{!tree && sidebarData && (
							<NavigationStateProvider>
								<div className="mt-1">
									<Tree pages={sidebarData} />
								</div>
							</NavigationStateProvider>
						)}
					</>
				)}

				{/* Primary CTA button */}
				{config.cta && (
					<div className="mt-4 pt-4 border-t border-ink/10">
						<a
							href={config.cta.href}
							className="flex items-center justify-center w-full rounded-md bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-ink/85"
						>
							{config.cta.label}
						</a>
					</div>
				)}
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-2 font-v2 subpixel-antialiased text-sm">
			{/* Home logo */}
			<a href={productHome} className="py-3 px-2">
				<BrandLogo className="w-20" />
			</a>

			{/* Products section */}
			{products.length > 0 && (
				<div className="text-zinc-500 py-2 px-2 text-xs uppercase tracking-wide">
					Products
				</div>
			)}
			{products.map((product) => (
				<a
					key={product.href}
					href={product.href}
					target={product.external ? "_blank" : undefined}
					rel={product.external ? "noopener noreferrer" : undefined}
					className="text-white py-2 px-2 pl-4 hover:bg-white/5 rounded-sm transition-colors flex items-center gap-2"
				>
					{product.logo && (
						<img
							src={product.logo}
							alt={product.label}
							width={16}
							height={16}
							className="h-4 w-4"
							loading="lazy"
							decoding="async"
						/>
					)}
					{product.label}
				</a>
			))}

			{/* Main navigation links */}
			{mainLinks.map((item) => (
				<a
					key={item.href}
					href={item.href}
					target={item.external ? "_blank" : undefined}
					rel={item.external ? "noopener noreferrer" : undefined}
					className="text-white py-2 px-2 hover:bg-white/5 rounded-sm transition-colors"
				>
					{item.label}
				</a>
			))}

			{/* Separator and docs content */}
			{isDocsPage && (
				<>
					<div className="border-t-2 border-white/10 my-2" />

					{/* Section dropdown (only with 2+ tabs) */}
					{sections.length > 1 && (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="outline"
									className="w-full justify-between h-9 text-sm border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
								>
									{currentSection?.label || "Select Section"}
									<Icon icon={faChevronDown} className="h-3.5 w-3.5 ml-2" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-[calc(100vw-3rem)] bg-black/95 backdrop-blur-lg border-white/10">
								{sections.map((s) => (
									<DropdownMenuItem
										key={s.href}
										asChild
										className="text-white hover:bg-white/5 focus:bg-white/5"
									>
										<a href={s.href}>{s.label}</a>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					)}

					{/* Tree/sidebar content */}
					{tree && <div className="mt-1">{tree}</div>}
					{!tree && sidebarData && (
						<NavigationStateProvider>
							<div className="mt-1">
								<Tree pages={sidebarData} />
							</div>
						</NavigationStateProvider>
					)}
				</>
			)}

			{/* Primary CTA button */}
			{config.cta && (
				<div className="mt-4 pt-4 border-t border-white/10">
					<a
						href={config.cta.href}
						className="flex items-center justify-center w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
					>
						{config.cta.label}
					</a>
				</div>
			)}
		</div>
	);
}
