"use client";
import {
	createContext,
	useContext,
	type ReactNode,
	type AnchorHTMLAttributes,
} from "react";
import { normalizePath } from "../lib/normalizePath";
import { usePathname } from "../hooks/usePathname";

// SSR seed for the active-link state: the server renders islands with no
// `window`, so without this the highlight only appears after hydration (and
// never in `astro dev`, where docs islands don't hydrate). A parent (e.g.
// DocsNavigation) provides the current path so aria-current is correct at
// render time; the client `usePathname` effect then keeps it live.
export const SsrPathnameContext = createContext("");

export interface ActiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	isActive?: boolean;
	children?: ReactNode;
	tree?: ReactNode;
	includeChildren?: boolean;
}

export function ActiveLink({
	isActive: isActiveOverride,
	tree,
	includeChildren,
	children,
	...props
}: ActiveLinkProps) {
	const ssrPathname = useContext(SsrPathnameContext);
	const pathname = usePathname(ssrPathname);

	const isActive =
		isActiveOverride ||
		normalizePath(pathname) === normalizePath(String(props.href || "")) ||
		(includeChildren &&
			normalizePath(pathname).startsWith(
				normalizePath(String(props.href || "")),
			));
	return (
		<>
			<a {...props} aria-current={isActive ? "page" : undefined}>
				{children}
			</a>
			{isActive && tree ? tree : null}
		</>
	);
}
