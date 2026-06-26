"use client";
import { cn } from "@rivet-gg/components";
import { Icon, faGithub } from "@rivet-gg/icons";
import { useEffect, useState } from "react";
import config from "virtual:rivet-docs/config";

type GitHubDropdownProps = React.HTMLAttributes<HTMLAnchorElement>;

function formatNumber(num: number): string {
	if (num >= 1000) {
		return `${(num / 1000).toFixed(1)}k`;
	}
	return num.toString();
}

// Star count is for the consumer's single repo (config.repo), NOT an aggregate
// of multiple repos. Falls back to config.social.github if repo isn't set.
const cfg = config as any;
const REPO: string =
	cfg?.repo ||
	(cfg?.social?.github || "").replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, "") ||
	"";

export function GitHubDropdown({ className, ...props }: GitHubDropdownProps) {
	const [state, setState] = useState<{ stars: number; loading: boolean }>({
		stars: 0,
		loading: true,
	});

	useEffect(() => {
		if (!REPO) {
			setState({ stars: 0, loading: false });
			return;
		}
		const cacheKey = `github-stars-${REPO}`;
		const cachedData = sessionStorage.getItem(cacheKey);
		if (cachedData) {
			const { stars: cachedStars, timestamp } = JSON.parse(cachedData);
			if (Date.now() - timestamp < 5 * 60 * 1000) {
				setState({ stars: cachedStars, loading: false });
				return;
			}
		}

		fetch(`https://api.github.com/repos/${REPO}`)
			.then((res) => (res.ok ? res.json() : null))
			.then((data) => {
				const stars = data?.stargazers_count ?? 0;
				setState({ stars, loading: false });
				sessionStorage.setItem(
					cacheKey,
					JSON.stringify({ stars, timestamp: Date.now() }),
				);
			})
			.catch(() => setState({ stars: 0, loading: false }));
	}, []);

	return (
		<a
			href={REPO ? `https://github.com/${REPO}` : "#"}
			target="_blank"
			rel="noreferrer"
			className={cn(
				"flex items-center gap-2 transition-colors",
				className?.includes("text-white")
					? "text-white/90 hover:text-white"
					: "text-muted-foreground hover:text-foreground",
				className,
			)}
			{...props}
		>
			<Icon icon={faGithub} />
			<span className="hidden md:inline">
				{state.loading || !REPO ? "GitHub" : `${formatNumber(state.stars)} stars`}
			</span>
		</a>
	);
}
