import * as shiki from "shiki";
import { transformerNotationFocus } from "@shikijs/transformers";
import theme from "./textmate-code-theme";

/**
 * Standalone code highlighter that matches the docs code blocks exactly — same
 * ayu-dark TextMate theme + Shiki output (`<pre class="shiki ayu-dark">`) the
 * rehype pipeline uses. Consume this for code outside MDX (e.g. registry pages)
 * so colors are identical to the docs.
 */
let highlighter: shiki.Highlighter | undefined;

export async function highlightCode(code: string, lang = "ts"): Promise<string> {
	highlighter ??= await shiki.getSingletonHighlighter({
		themes: [theme],
		langs: [
			"ts",
			"tsx",
			"js",
			"jsx",
			"json",
			"bash",
			"sh",
			"shell",
			"yaml",
			"toml",
			"rust",
			"python",
			"html",
			"css",
		],
	});
	const language = highlighter.getLoadedLanguages().includes(lang as never)
		? lang
		: "ts";
	return highlighter.codeToHtml(code, {
		lang: language,
		theme: (theme as { name: string }).name,
		transformers: [transformerNotationFocus()],
	});
}
