/**
 * Shared icon catalog — backed by NATIVE Font Awesome (the same family the Rivet
 * docs use) instead of a hand-maintained SVG path table.
 *
 * Icons are sourced from `@fortawesome/free-solid-svg-icons` (the FREE Font
 * Awesome package, public npm, no token). To use Pro / custom-kit icons, install
 * the corresponding Font Awesome package (see `.npmrc` + README), import the icon
 * the same way below, and add it to the map.
 *
 * Public API is unchanged: callers reference an icon by a stable string key
 * (`sidebar.attrs.data-icon` / `sidebarGroupIcons` for the sidebar, `icon` on
 * landing cards) and get back `{ w, d }` — the glyph's intrinsic width and SVG
 * path. All Font Awesome 6 solid glyphs are 512 tall, so callers render with
 * `viewBox="0 0 {w} 512"`.
 *
 * A Font Awesome icon definition has the shape
 *   { iconName, prefix, icon: [width, height, ligatures, unicode, pathData] }
 * so we read width from `icon[0]` and the path from `icon[4]`.
 */
import {
	faRocket,
	faForwardFast,
	faTerminal,
	faRobot,
	faCode,
	faServer,
	faPuzzlePiece,
	faLayerGroup,
	faHexagonNodes,
	faGlobe,
	faMicrochip,
	faFileCode,
	faShield,
	faFolder,
	faFolderTree,
	faNetworkWired,
	faBox,
	faCube,
	faCubes,
	faBook,
	faScroll,
	faGauge,
	faCodeBranch,
	faCircleCheck,
	faCodeCompare,
	faDollarSign,
	faLock,
	faCircle,
	faCircleInfo,
	faLightbulb,
	faScaleBalanced,
	faComments,
	faKey,
	faWrench,
	faCloud,
	faDownload,
	faFloppyDisk,
	faClock,
	faHardDrive,
	faLink,
	faTowerBroadcast,
	faArrowRightArrowLeft,
	faDiagramNext,
	faEnvelope,
	faDatabase,
	faBolt,
	faPlay,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Maps each stable theme key to a Font Awesome icon definition. Keys are the
 * contract consumers depend on (`data-icon`, `sidebarGroupIcons`, landing
 * `icon`); the right-hand side can be swapped to a different FA glyph (free, Pro,
 * or custom-kit) without breaking consumer config.
 */
const FA = {
	// Products / agents / generic
	rocket: faRocket,
	fastForward: faForwardFast,
	terminal: faTerminal,
	bot: faRobot,
	code: faCode,
	server: faServer,
	puzzle: faPuzzlePiece,
	layers: faLayerGroup,
	hexagon: faHexagonNodes,
	globe: faGlobe,
	cpu: faMicrochip,
	fileCode: faFileCode,
	shield: faShield,
	folder: faFolder,
	folderTree: faFolderTree,
	network: faNetworkWired,
	package: faBox,
	box: faCube,
	blocks: faCubes,
	book: faBook,
	scroll: faScroll,
	gauge: faGauge,
	split: faCodeBranch,
	check: faCircleCheck,
	gitCompare: faCodeCompare,
	dollar: faDollarSign,
	lock: faLock,
	dot: faCircle,
	info: faCircleInfo,
	lightbulb: faLightbulb,
	scaleBalanced: faScaleBalanced,
	messages: faComments,
	key: faKey,
	wrench: faWrench,
	cloud: faCloud,
	download: faDownload,
	floppyDisk: faFloppyDisk,
	clock: faClock,
	hardDrive: faHardDrive,
	link: faLink,
	towerBroadcast: faTowerBroadcast,
	arrowsLeftRight: faArrowRightArrowLeft,
	diagramNext: faDiagramNext,
	mailbox: faEnvelope,
	database: faDatabase,
	zap: faBolt,
	play: faPlay,
	plus: faPlus,
};

/** Convert a Font Awesome icon definition to the theme's `{ w, d }` glyph shape. */
const glyph = (def) => ({ w: def.icon[0], d: def.icon[4] });

/**
 * Brand glyphs hardcoded as `{ w, d }` literals. Font Awesome ships brand icons
 * in a separate `@fortawesome/free-brands-svg-icons` package; rather than add
 * that dependency to every consumer (and to each preview tarball), we inline the
 * handful of brand paths we use. All FA6 glyphs are 512 tall, so callers render
 * with `viewBox="0 0 {w} 512"` exactly as for the solid set.
 */
const BRANDS = {
	// Font Awesome 6 "node-js" (fab), intrinsic 448×512.
	nodejs: {
		w: 448,
		d: "M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z",
	},
};

/** @type {Record<string, { w: number, d: string }>} */
export const ICONS = {
	...Object.fromEntries(Object.entries(FA).map(([key, def]) => [key, glyph(def)])),
	...BRANDS,
// Font Awesome 6 "python" (fab), intrinsic 448x512.
	python: {
		w: 448,
		d: "M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2l-40.1 0 0 47.4c0 36.8-31.2 67.8-66.8 67.8l-106.8 0c-29.2 0-53.4 25-53.4 54.3l0 101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3l0-40.7-106.7 0 0-13.6 160.2 0c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 444.7a20.4 20.4 0 1 1 0-40.7 20.4 20.4 0 1 1 0 40.7zM167.8 248.1l106.8 0c29.7 0 53.4-24.5 53.4-54.3l0-101.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6l0 40.7 106.9 0 0 13.6-147 0c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2l36.7 0 0-48.8c0-35.3 30.5-66.4 66.8-66.4zM161.2 64.7a20.4 20.4 0 1 1 0 40.8 20.4 20.4 0 1 1 0-40.8z",
	},
};
