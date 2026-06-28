"use client";
import { useMobileNavigationStore } from "./MobileNavigation";
import { NavigationStateProvider } from "../providers/NavigationStateProvider";
import { Toaster, toast } from "@rivet-gg/components";
import { Suspense, useEffect, useState } from "react";

function PageViewTracker() {
	useEffect(() => {
		// Dynamically import posthog to avoid SSR issues
		import("posthog-js").then(({ default: posthog }) => {
			const searchParams = new URLSearchParams(window.location.search);
			let url = window.origin + window.location.pathname;
			if (searchParams.toString()) {
				url = url + `?${searchParams.toString()}`;
			}
			posthog.capture("$pageview", {
				$current_url: url,
			});
		});
	}, []);

	return null;
}

function RouteChangeObserver() {
	useEffect(() => {
		useMobileNavigationStore.getState().close();
	}, []);

	return null;
}

function CopyCodeListener() {
	useEffect(() => {
		const handleCopySuccess = () => {
			toast.success("Copied to clipboard");
		};

		window.addEventListener('rivet:copy-success', handleCopySuccess);
		return () => window.removeEventListener('rivet:copy-success', handleCopySuccess);
	}, []);

	return null;
}

function PostHogInit({ posthogKey }) {
	useEffect(() => {
		// PostHog is config-driven: only initialize when the consumer's SiteConfig
		// provides `analytics.posthogKey`. The host is the shared Rivet instance.
		if (!posthogKey) return;
		// Initialize PostHog on client only
		import("posthog-js").then(({ default: posthog }) => {
			if (!posthog.__loaded) {
				posthog.init(posthogKey, {
					api_host: "https://ph.rivet.gg",
					loaded: (posthog) => {
						if (process.env.NODE_ENV === "development") posthog.debug();
					},
				});
			}
		});
	}, [posthogKey]);

	return null;
}

export function Providers({ children, posthogKey }) {
	return (
		<NavigationStateProvider>
			{children}
			<PostHogInit posthogKey={posthogKey} />
			<Suspense fallback={null}>
				<PageViewTracker />
			</Suspense>
			<RouteChangeObserver />
			<CopyCodeListener />
			<Toaster theme="dark" />
		</NavigationStateProvider>
	);
}
