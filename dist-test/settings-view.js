import { t as e } from "./src-chZT6PF3.js";
import { Ct as t, N as n, St as r, k as i, t as a, vt as o, yt as s } from "./src-CPZKB3Ky.js";
import { t as c } from "./theme-DFOEfplM.js";
import { n as l, t as u } from "./settings-config-BCjrUec9.js";
import { a as d, i as f, n as p, r as m } from "./UniformInterop-DICKsic6.js";
//#region \0rolldown/runtime.js
var h = Object.defineProperty, ee = (e, t) => {
	let n = {};
	for (var r in e) h(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || h(n, Symbol.toStringTag, { value: "Module" }), n;
}, te = {
	ViewerPushToWorkcenter: "viewer.attach-to-workcenter",
	WorkcenterAttach: "attach-files",
	WorkcenterFileAttach: "file-attach",
	WorkcenterShare: "content-share"
}, ne = {
	WallpaperSet: "workspace.wallpaper-set",
	WallpaperFromFile: "workspace.wallpaper-from-file",
	SpeedDialPinHref: "workspace.speed-dial-pin-href",
	SpeedDialPinFile: "workspace.speed-dial-pin-file"
};
te.ViewerPushToWorkcenter;
var re = {
	Patch: "patch",
	SettingsUpdate: "settings-update"
};
({ ...ne });
//#endregion
//#region src/scss/Settings.scss?inline
var ie = "@charset \"UTF-8\";@layer settings-view{.view-settings{color-scheme:inherit;--sv-bg: var(--color-surface, light-dark(#eef1f6, #0f1318));--sv-fg: var(--color-on-surface, light-dark(#12151a, #e8edf2));--sv-muted: var(--color-on-surface-variant, light-dark(#5c6570, #a8b0bc));--sv-outline: var(--color-outline-variant, light-dark(#c5cdd8, #3d4755));--sv-surface-1: var(--color-surface-container-low, light-dark(#ffffff, #171c24));--sv-surface-2: var(--color-surface-container, light-dark(#f4f6fa, #1c232d));--sv-primary: var(--color-primary, #007acc);--sv-on-primary: var(--color-on-primary, #ffffff);--sv-danger: var(--color-error, #d32f2f);--sv-divider: color-mix(in oklab, var(--sv-outline) 35%, transparent);--sv-ring: color-mix(in oklab, var(--sv-outline) 55%, transparent);--sv-elev: 0 2px 14px color-mix(in oklab, var(--sv-fg) 5%, transparent);box-sizing:border-box;display:grid;grid-template-rows:auto minmax(0,1fr) auto;grid-template-columns:minmax(0,1fr);gap:0;inline-size:100%;block-size:100%;max-block-size:100%;min-block-size:0;margin:0;padding:clamp(.5rem,2cqi,1rem);overflow:hidden;text-align:start;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background-color:var(--sv-bg);color:var(--sv-fg)}.view-settings *,.view-settings *:before,.view-settings *:after{box-sizing:border-box}.view-settings :where(select,input,textarea,option,button){pointer-events:auto;font-family:inherit}.view-settings textarea{container-type:inline-size;resize:vertical;inline-size:100%;max-inline-size:100%}.view-settings h2,.view-settings h3{margin:0;text-align:start;color:var(--sv-fg)}.view-settings h2{font-size:1.25rem;font-weight:700;letter-spacing:-.02em}.view-settings h3{font-size:.94rem;font-weight:600;letter-spacing:-.01em}.view-settings .settings-screen__top{display:flex;flex-direction:column;align-items:stretch;gap:.75rem;padding-block-end:.875rem;border-block-end:1px solid var(--sv-divider);flex-shrink:0;min-inline-size:0}.view-settings .settings-screen__title{font-weight:600;letter-spacing:-.015em;font-size:clamp(1.05rem,2.5cqi,1.35rem)}@media(min-width:720px){.view-settings .settings-screen__top{flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-between}.view-settings .settings-screen__top .settings-tab-actions{flex:1;justify-content:flex-end}}.view-settings .settings-screen__body{min-block-size:0;min-inline-size:0;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;display:flex;flex-direction:column;gap:1rem;padding-block:.75rem;scrollbar-width:thin;scrollbar-color:var(--sv-outline) transparent}.view-settings .settings-screen__body::-webkit-scrollbar{inline-size:6px}.view-settings .settings-screen__body::-webkit-scrollbar-thumb{background:color-mix(in oklab,var(--sv-outline) 45%,transparent);border-radius:99px}.view-settings .settings-screen__footer{inline-size:stretch;display:flex;align-items:center;justify-content:flex-start;gap:.5rem;flex-wrap:wrap;flex-shrink:0;padding-block:.75rem;padding-inline:.25rem;border-block-start:1px solid var(--sv-divider);background:color-mix(in oklab,var(--sv-surface-1) 85%,var(--sv-bg));box-shadow:0 -10px 28px color-mix(in oklab,var(--sv-fg) 4%,transparent)}.view-settings .settings-tab-actions{display:flex;flex-wrap:nowrap;gap:.375rem;align-items:center;inline-size:stretch;max-inline-size:stretch;overflow-x:auto;scrollbar-width:thin;scrollbar-color:var(--sv-outline) transparent;container-type:inline-size;pointer-events:auto;position:relative;z-index:1}.view-settings .settings-tab-btn{pointer-events:auto;cursor:pointer;padding:.5rem .875rem;min-block-size:2.5rem;border:none;border-radius:999px;background:color-mix(in oklab,var(--sv-surface-2) 94%,transparent);color:var(--sv-muted);font-size:.75rem;font-weight:500;transition:background-color .12s ease,color .12s ease,box-shadow .12s ease;box-shadow:0 0 0 1px color-mix(in oklab,var(--sv-outline) 14%,transparent);white-space:nowrap}.view-settings .settings-tab-btn:hover{background:color-mix(in oklab,var(--sv-surface-2) 100%,transparent);color:var(--sv-fg)}.view-settings .settings-tab-btn.is-active{background:var(--sv-primary);color:var(--sv-on-primary);box-shadow:0 2px 12px color-mix(in oklab,var(--sv-primary) 28%,transparent),0 0 0 1px color-mix(in oklab,var(--sv-primary) 40%,transparent)}.view-settings .settings-tab-panel{display:none}.view-settings .settings-tab-panel.is-active{display:flex;flex-direction:column;align-items:stretch;gap:.75rem;min-inline-size:0}.view-settings .card{display:flex;flex-direction:column;gap:.75rem;padding:1rem;inline-size:stretch;border:none;border-radius:16px;background:color-mix(in oklab,var(--sv-surface-2) 92%,var(--sv-bg));box-shadow:var(--sv-elev),0 0 0 1px color-mix(in oklab,var(--sv-outline) 14%,transparent)}@container (max-inline-size: 480px){.view-settings .card{padding:.875rem;border-radius:14px}}.view-settings .settings-panel-form{display:flex;flex-direction:column;gap:.75rem;inline-size:stretch}.view-settings .field{display:grid;grid-auto-flow:row;gap:.375rem;inline-size:stretch;font-size:.75rem;margin:0}.view-settings .field>span{font-size:.75rem;font-weight:500;color:var(--sv-muted)}.view-settings .field.checkbox{grid-auto-flow:column;grid-auto-columns:max-content 1fr;align-items:center;gap:.625rem}.view-settings .field-hint{margin:0 0 .75rem;font-size:.85em;line-height:1.45;color:var(--sv-muted);opacity:.95}.view-settings .form-input,.view-settings .form-select{display:block;inline-size:100%;min-block-size:2.5rem;padding:.5rem .65rem;border-radius:10px;border:1px solid color-mix(in oklab,var(--sv-outline) 45%,transparent);background:var(--sv-surface-1);color:var(--sv-fg);font-size:.875rem;line-height:1.25;outline:none;transition:border-color .12s ease,box-shadow .12s ease}.view-settings .form-input:focus-visible,.view-settings .form-select:focus-visible{border-color:color-mix(in oklab,var(--sv-primary) 55%,var(--sv-outline));box-shadow:0 0 0 3px color-mix(in oklab,var(--sv-primary) 22%,transparent)}.view-settings select.form-select,.view-settings select.form-input{appearance:none;padding-inline-end:2rem;background-image:linear-gradient(45deg,transparent 50%,var(--sv-muted) 50%),linear-gradient(135deg,var(--sv-muted) 50%,transparent 50%);background-position:calc(100% - 14px) calc(50% - 2px),calc(100% - 9px) calc(50% - 2px);background-size:5px 5px;background-repeat:no-repeat}.view-settings .btn{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;padding:.5rem 1.125rem;min-block-size:2.5rem;border:none;border-radius:999px;background:color-mix(in oklab,var(--sv-surface-2) 90%,transparent);color:var(--sv-fg);font-size:.8125rem;font-weight:500;cursor:pointer;transition:background-color .12s ease,box-shadow .12s ease,filter .12s ease;box-shadow:0 0 0 1px color-mix(in oklab,var(--sv-outline) 12%,transparent)}.view-settings .btn:hover{background:color-mix(in oklab,var(--sv-fg) 6%,var(--sv-surface-2))}.view-settings .btn.primary{background:var(--sv-primary);color:var(--sv-on-primary);box-shadow:0 2px 12px color-mix(in oklab,var(--sv-primary) 26%,transparent),0 0 0 1px color-mix(in oklab,var(--sv-primary) 45%,transparent)}.view-settings .btn.primary:hover{filter:brightness(1.06)}.view-settings .btn.btn-sm,.view-settings .btn.small{padding:.35rem .65rem;min-block-size:2rem;font-size:.75rem}.view-settings .btn.btn-danger{color:var(--sv-on-primary);background:color-mix(in oklab,var(--sv-danger) 92%,#000);box-shadow:0 0 0 1px color-mix(in oklab,var(--sv-danger) 35%,transparent)}.view-settings .btn.btn-danger:hover{filter:brightness(1.08)}.view-settings .btn.tiny{min-block-size:2rem;padding:.3rem .5rem;font-size:.72rem}.view-settings .note,.view-settings .ext-note{font-size:.75rem;color:var(--sv-muted);opacity:.92;flex:0 1 auto;max-inline-size:100%;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none}.view-settings .ext-note{line-height:1.4}.view-settings .ext-note code{padding:2px 6px;border-radius:4px;font-size:.68rem;background:color-mix(in oklab,var(--sv-surface-2) 80%,var(--sv-bg));color:var(--sv-fg)}.view-settings .form-checkbox input[type=checkbox],.view-settings label.field.checkbox input[type=checkbox]{inline-size:1.15rem;block-size:1.15rem;accent-color:var(--sv-primary);flex-shrink:0}.view-settings .mcp-section{display:flex;flex-direction:column;gap:.5rem}.view-settings .mcp-actions{margin-block-start:.5rem;display:flex;flex-wrap:wrap;gap:.5rem}.view-settings .mcp-row{display:grid;gap:.5rem;padding:.75rem;border-radius:12px;background:color-mix(in oklab,var(--sv-surface-2) 88%,var(--sv-bg));box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--sv-outline) 12%,transparent)}.view-settings .mcp-row .field{margin:0}.view-settings .mcp-empty-note{margin:0;color:var(--sv-muted);font-size:.75rem}.view-settings .settings-spoiler{border-radius:12px;border:1px solid color-mix(in oklab,var(--sv-outline) 22%,transparent);background:color-mix(in oklab,var(--sv-surface-1) 55%,transparent);padding:.25rem .5rem}.view-settings .settings-spoiler summary{cursor:pointer;font-size:.8rem;font-weight:600;padding:.35rem .25rem;color:var(--sv-fg)}.view-settings .settings-spoiler .settings-panel-form{padding-block-end:.25rem}.view-settings .view-settings__content{inline-size:100%;max-inline-size:clamp(640px,90%,800px)}.view-settings .view-settings__section{display:flex;flex-direction:column;margin-block-end:2rem;padding-block-end:2rem;border-block-end:1px solid var(--sv-divider)}.view-settings .view-settings__section:last-of-type{border-block-end:none}.view-settings .view-settings__group{display:flex;flex-direction:column;gap:1rem}.view-settings .view-settings__label{display:flex;flex-direction:column;gap:.375rem}.view-settings .view-settings__label>span{font-size:.8125rem;font-weight:500}.view-settings .view-settings__select,.view-settings .view-settings__input{min-block-size:2.5rem;padding:.45rem .6rem;border-radius:10px;border:1px solid color-mix(in oklab,var(--sv-outline) 45%,transparent);background:var(--sv-surface-1);color:var(--sv-fg);font-size:.875rem}.view-settings .view-settings__checkbox{display:flex;align-items:center;gap:.5rem;font-size:.8125rem}.view-settings .view-settings__actions{display:flex;gap:.75rem;margin-block-start:1.5rem}.view-settings .view-settings__btn{padding:.55rem 1.1rem;border-radius:8px;border:1px solid color-mix(in oklab,var(--sv-outline) 40%,transparent);background:transparent;color:var(--sv-fg);cursor:pointer}.view-settings .view-settings__btn--primary{background:var(--sv-primary);border-color:color-mix(in oklab,var(--sv-primary) 30%,#000);color:var(--sv-on-primary)}.view-settings .view-settings__btn--primary:hover{filter:brightness(1.06)}.view-settings .custom-instructions-panel,.view-settings .custom-instructions-editor{display:flex;flex-direction:column;gap:.75rem}.view-settings .cip-select-row,.view-settings .ci-row{display:flex;flex-direction:column;gap:.35rem}.view-settings .ci-header{margin-block-end:.25rem}.view-settings .ci-header h4{margin:0 0 .25rem;font-size:.88rem}.view-settings .ci-desc{margin:0;font-size:.78rem;color:var(--sv-muted);line-height:1.45}.view-settings .ci-active-select{display:flex;flex-direction:column;gap:.25rem}.view-settings .ci-select,.view-settings .cip-select{min-block-size:2.35rem;padding:.4rem .55rem;border-radius:10px;border:1px solid color-mix(in oklab,var(--sv-outline) 40%,transparent);background:var(--sv-surface-1);color:var(--sv-fg);font-size:.8rem}.view-settings .cip-list,.view-settings .ci-list{display:flex;flex-direction:column;gap:.5rem}.view-settings .cip-item,.view-settings .ci-item{padding:.65rem .75rem;border-radius:12px;background:var(--sv-surface-1);border:1px solid color-mix(in oklab,var(--sv-outline) 16%,transparent)}.view-settings .cip-item.is-active,.view-settings .cip-item.active,.view-settings .ci-item.is-active,.view-settings .ci-item.active{border-color:color-mix(in oklab,var(--sv-primary) 35%,transparent);box-shadow:0 0 0 1px color-mix(in oklab,var(--sv-primary) 18%,transparent)}.view-settings .cip-item-header,.view-settings .ci-item-header{display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem}.view-settings .cip-item-label,.view-settings .ci-item-label{font-weight:600;font-size:.8rem}.view-settings .cip-item-actions,.view-settings .ci-item-actions{display:flex;flex-wrap:wrap;gap:.35rem;justify-content:flex-end}.view-settings .cip-badge,.view-settings .ci-badge{font-size:.65rem;padding:.15rem .4rem;border-radius:999px;background:color-mix(in oklab,var(--sv-primary) 16%,transparent);color:var(--sv-fg)}.view-settings .cip-item-preview,.view-settings .ci-item-preview{font-size:.75rem;color:var(--sv-muted);margin-block-start:.35rem;line-height:1.45}.view-settings .cip-edit-form,.view-settings .ci-edit-form{display:flex;flex-direction:column;gap:.5rem;margin-block-start:.5rem}.view-settings .cip-form-actions,.view-settings .cip-toolbar,.view-settings .ci-actions,.view-settings .ci-add-actions,.view-settings .ci-edit-actions{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}.view-settings .cip-input,.view-settings .cip-textarea,.view-settings .ci-input,.view-settings .ci-textarea,.view-settings .field-control{inline-size:100%;border-radius:10px;border:1px solid color-mix(in oklab,var(--sv-outline) 40%,transparent);background:var(--sv-surface-1);color:var(--sv-fg);padding:.45rem .55rem;font-size:.8125rem}.view-settings .cip-textarea,.view-settings .ci-textarea{min-block-size:5rem}.view-settings .cip-empty,.view-settings .ci-empty{font-size:.8rem;color:var(--sv-muted);padding:.75rem;text-align:center}.view-settings .field-label{font-size:.72rem;font-weight:600;color:var(--sv-muted);text-transform:uppercase;letter-spacing:.04em}@container (max-inline-size: 1024px){.view-settings{padding:.65rem}}@container (max-inline-size: 560px){.view-settings .settings-tab-actions{gap:.3rem}.view-settings .settings-tab-btn{min-block-size:2.65rem;padding-inline:.7rem}}@container (max-inline-size: 480px){.view-settings{padding:.45rem}.view-settings .settings-screen__title{display:none}.view-settings .settings-screen__body{padding-block:.5rem;gap:.75rem}.view-settings .settings-screen__footer{flex-direction:column-reverse;align-items:stretch;gap:.5rem}.view-settings .settings-screen__footer .btn.primary{inline-size:100%;justify-content:center;min-block-size:2.75rem}.view-settings .settings-screen__footer .note{white-space:normal;text-align:center}}}", ae = {
	viewer: "viewer",
	editor: "editor",
	workcenter: "workcenter",
	explorer: "explorer",
	settings: "settings",
	history: "history",
	home: "home",
	print: "print",
	airpad: "airpad"
}, oe = (() => {
	let e = "";
	try {
		let t = globalThis?.location?.search;
		if (t) {
			let n = new URLSearchParams(t);
			e = String(n.get("views") || n.get("enabledViews") || "");
		}
	} catch {}
	if (!e) try {
		e = String(globalThis?.localStorage?.getItem?.("rs-enabled-views") ?? "");
	} catch {}
	if (!e) try {
		e = "";
	} catch {}
	if (!e) try {
		e = String(globalThis?.process?.env?.VITE_ENABLED_VIEWS ?? "");
	} catch {}
	let t = e.split(/[\s,;]+/).map((e) => e.trim().toLowerCase()).filter(Boolean);
	if (!t.length) return null;
	t.push("settings");
	try {
		let e = globalThis?.location?.search;
		e && new URLSearchParams(e).get("views") && globalThis?.localStorage?.setItem?.("rs-enabled-views", Array.from(new Set(t)).join(","));
	} catch {}
	return new Set(t);
})(), se = {
	viewer: typeof __RS_VIEW_VIEWER__ < "u" ? __RS_VIEW_VIEWER__ : void 0,
	editor: typeof __RS_VIEW_EDITOR__ < "u" ? __RS_VIEW_EDITOR__ : void 0,
	workcenter: typeof __RS_VIEW_WORKCENTER__ < "u" ? __RS_VIEW_WORKCENTER__ : void 0,
	explorer: typeof __RS_VIEW_EXPLORER__ < "u" ? __RS_VIEW_EXPLORER__ : void 0,
	settings: typeof __RS_VIEW_SETTINGS__ < "u" ? __RS_VIEW_SETTINGS__ : void 0,
	history: typeof __RS_VIEW_HISTORY__ < "u" ? __RS_VIEW_HISTORY__ : void 0,
	home: typeof __RS_VIEW_HOME__ < "u" ? __RS_VIEW_HOME__ : void 0,
	print: typeof __RS_VIEW_PRINT__ < "u" ? __RS_VIEW_PRINT__ : void 0,
	airpad: typeof __RS_VIEW_AIRPAD__ < "u" ? __RS_VIEW_AIRPAD__ : void 0
}, ce = (e) => se[String(e).toLowerCase()] !== !1, le = (e) => !oe || oe.has(String(e).toLowerCase()), ue = (e) => ce(e) && le(e);
Object.entries(ae).filter(([e, t]) => !!t && ue(e)).map(([e]) => e);
var de = (e) => !!ae[e] && ue(e), fe = [
	"gpt-5.1",
	"gpt-5.2",
	"gpt-5.3",
	"gpt-5.4",
	"gpt-5.2-chat-latest",
	"gpt-5.3-chat-latest",
	"gpt-5.4-chat-latest",
	"gpt-5.3-instant"
], g = {
	core: {
		mode: "native",
		endpointUrl: "http://localhost:6065",
		userId: "",
		userKey: "",
		encrypt: !1,
		preferBackendSync: !0,
		ntpEnabled: !1,
		appClientId: "",
		useCoreIdentityForAirPad: !0,
		allowInsecureTls: !1,
		network: {
			listenPortHttps: 8443,
			listenPortHttp: 8080,
			bridgeEnabled: !0,
			reconnectMs: 3e3,
			destinations: []
		},
		socket: {
			protocol: "auto",
			routeTarget: "",
			selfId: "",
			accessToken: "",
			clientAccessToken: "",
			allowAccessTokenWithoutUserKey: !1,
			transportMode: "plaintext",
			transportSecret: "",
			signingSecret: "",
			connectionType: "",
			archetype: "",
			protocolLanesJson: ""
		},
		interop: {
			ipcProtocol: "uniform",
			platformInterop: !0,
			preferNativeIpc: !0,
			preferNativeWebsocket: !0
		},
		admin: {
			httpsOrigin: "https://localhost:8443",
			httpOrigin: "http://localhost:8080",
			path: "/"
		},
		ops: {
			allowUnencrypted: !1,
			httpTargets: [],
			wsTargets: [],
			syncTargets: []
		}
	},
	shell: {
		preferNativeWebsocket: !0,
		maintainHubSocketConnection: !1,
		enableRemoteClipboardBridge: !0,
		applyRemoteClipboardToDevice: !0,
		pushLocalClipboardToLan: !1,
		clipboardPushIntervalMs: 2e3,
		clipboardBroadcastTargets: "",
		enableNativeSms: !0,
		enableNativeContacts: !0,
		acceptInboundClipboardData: !0,
		clipboardInboundAllowIds: "",
		clipboardShareDestinationIds: "",
		accessTokenBypassesClipboardAllowlist: !1,
		acceptContactsBridgeData: !1,
		acceptSmsBridgeData: !1
	},
	ai: {
		apiKey: "",
		baseUrl: "",
		model: "gpt-5.2",
		customModel: "",
		defaultReasoningEffort: "medium",
		defaultVerbosity: "medium",
		maxOutputTokens: 4e5,
		contextTruncation: "disabled",
		promptCacheRetention: "in-memory",
		maxToolCalls: 8,
		parallelToolCalls: !0,
		mcp: [],
		shareTargetMode: "recognize",
		autoProcessShared: !0,
		customInstructions: [],
		activeInstructionId: "",
		responseLanguage: "auto",
		translateResults: !1,
		generateSvgGraphics: !1,
		requestTimeout: {
			low: 60,
			medium: 300,
			high: 900
		},
		maxRetries: 2
	},
	webdav: {
		url: "http://localhost:6065",
		username: "",
		password: "",
		token: ""
	},
	timeline: { source: "" },
	appearance: {
		theme: "auto",
		fontSize: "medium",
		color: "",
		markdown: {
			customCss: "",
			printCss: "",
			extensions: [],
			preset: "default",
			fontFamily: "system",
			fontSizePx: 16,
			lineHeight: 1.7,
			contentMaxWidthPx: 860,
			printScale: 1,
			page: {
				size: "auto",
				orientation: "portrait",
				marginMm: 12
			},
			modules: {
				typography: !0,
				lists: !0,
				tables: !0,
				codeBlocks: !0,
				blockquotes: !0,
				media: !0,
				printBreaks: !0
			},
			plugins: {
				smartTypography: !1,
				softBreaksAsBr: !1,
				externalLinksNewTab: !0
			}
		}
	},
	speech: { language: (() => {
		let e = "en-US";
		if (typeof navigator > "u") return e;
		let t = (navigator.language || "").trim();
		return t === "ru" || t.startsWith("ru-") ? "ru" : t === "en-GB" ? "en-GB" : t === "en-US" ? "en-US" : t === "en" || t.startsWith("en-") ? "en" : e;
	})() },
	grid: {
		columns: 4,
		rows: 8,
		shape: "square"
	}
};
//#endregion
//#region ../../projects/subsystem/runtime/admin-doors.ts
function pe() {
	let e = globalThis.location?.origin ?? "";
	return {
		http: e.replace(/^https:/, "http:"),
		https: e.replace(/^http:/, "https:")
	};
}
function me() {
	let e = pe().https || pe().http;
	e && globalThis.open?.(e, "_blank", "noopener,noreferrer");
}
//#endregion
//#region ../../projects/subsystem/src/service/instructions/core.ts
var _ = {
	SOLVE_AND_ANSWER: "\nSolve equations, answer questions, and explain mathematical or logical problems from the provided content.\n\nFor equations and math problems:\n- Show step-by-step solutions\n- Provide final answers clearly marked\n- Explain reasoning for each step\n\nFor general questions:\n- Provide accurate, well-reasoned answers\n- Include relevant context and explanations\n- If multiple interpretations possible, address them\n\nFor quizzes and tests:\n- Show the correct answer with explanation\n- Explain why other options are incorrect\n\nAlways respond in the specified language and format results clearly.\n",
	WRITE_CODE: "\nWrite clean, efficient, and well-documented code based on the provided description, requirements, or image.\n\nCode requirements:\n- Use appropriate programming language for the task\n- Follow language-specific best practices and conventions\n- Include proper error handling\n- Add meaningful comments and documentation\n- Make code readable and maintainable\n\nIf generating from an image or visual description:\n- Analyze the visual elements and requirements\n- Implement the described functionality\n- Ensure code compiles and runs correctly\n\nAlways respond in the specified language and provide complete, working code.\n",
	EXTRACT_CSS: "\nExtract and generate clean, modern CSS from the provided content, image, or description.\n\nCSS requirements:\n- Use modern CSS features and best practices\n- Generate semantic, maintainable stylesheets\n- Include responsive design considerations\n- Use appropriate selectors and specificity\n- Follow CSS naming conventions\n- Optimize for performance and maintainability\n\nIf extracting from an image:\n- Analyze the visual design and layout\n- Generate corresponding CSS rules\n- Identify colors, fonts, spacing, and layout\n- Create reusable CSS classes and components\n\nAlways respond in the specified language and provide complete, working CSS.\n",
	RECOGNIZE_CONTENT: "\nRecognize and extract information from images, documents, or other visual content.\n\nRecognition requirements:\n- Identify text content accurately\n- Extract structured information\n- Recognize tables, forms, and structured data\n- Preserve formatting where possible\n- Handle different languages and scripts\n- Provide confidence scores for extracted content\n\nFor document analysis:\n- Extract key information and metadata\n- Identify document type and structure\n- Recognize important sections and headings\n\nFor image analysis:\n- Describe visual content\n- Extract text from images (OCR)\n- Identify objects, scenes, and visual elements\n\nAlways respond in the specified language and format extracted information clearly.\n",
	CONVERT_DATA: "\nConvert data between different formats while preserving structure and meaning.\n\nConversion requirements:\n- Maintain data integrity and relationships\n- Preserve formatting and structure where possible\n- Handle different data types appropriately\n- Provide clear mapping between source and target formats\n- Validate conversion accuracy\n\nSupported conversions:\n- CSV ↔ JSON ↔ XML\n- Markdown ↔ HTML\n- Text ↔ Structured data\n- Image data ↔ Text representations\n\nEnsure accurate, lossless conversion where possible.\n",
	EXTRACT_ENTITIES: "\nExtract named entities, keywords, and structured information from content.\n\nEntity extraction requirements:\n- Identify people, organizations, locations\n- Extract dates, numbers, and measurements\n- Find keywords and important terms\n- Recognize relationships and connections\n- Provide confidence scores and context\n\nOutput structured data with:\n- Entity types and values\n- Position and context information\n- Confidence scores\n- Relationship mappings\n\nFocus on accuracy and comprehensive coverage.\n",
	TRANSLATE_TO_LANGUAGE: "\nTranslate content to the specified target language while preserving meaning, tone, and formatting.\n\nTranslation requirements:\n- Maintain original meaning and intent\n- Preserve formatting, structure, and markdown syntax\n- Adapt cultural references appropriately\n- Use natural, fluent language in the target language\n- Handle technical terms, proper names, and brand names correctly\n- Maintain appropriate formality and tone\n- Preserve code blocks, mathematical expressions, and technical content\n\nFor content already in the target language:\n- Provide natural rephrasing or improvement\n- Enhance clarity and readability\n- Maintain professional quality\n\nSupported languages:\n- English (en)\n- Russian (ru)\n- Other languages as requested\n\nEnsure high-quality, natural translations that feel native to the target language.\n",
	GENERAL_PROCESSING: "\nProcess and analyze content using appropriate AI capabilities.\n\nGeneral processing requirements:\n- Understand context and intent\n- Provide relevant analysis or transformation\n- Use appropriate tools and methods\n- Maintain content quality and accuracy\n- Adapt to different content types and requirements\n\nFocus on providing useful, accurate results that meet user needs.\n",
	CRX_SOLVE_AND_ANSWER: "\nSolve the problem or answer the question presented in the content.\n\nAuto-detect the type of content:\n- Mathematical equation/expression → Solve step-by-step\n- Quiz/test question → Provide correct answer\n- Homework problem → Solve and explain\n- General question → Answer with explanation\n\nFormat output as:\n\n**Problem/Question:**\n<recognized content - use $KaTeX$ for math>\n\n**Solution/Answer:**\n<step-by-step solution or direct answer>\n\n**Explanation:**\n<clear explanation of the reasoning>\n\n---\n\nFor MATH problems:\n- Use single $ for inline math: $x = 5$\n- Use double $$ for display equations: $$\\int_0^1 f(x) dx$$\n- Show all intermediate steps\n- Simplify the final answer\n- For systems: solve all variables\n- For inequalities: use interval notation\n\nFor MULTIPLE CHOICE:\n- Identify correct option (A, B, C, D)\n- Explain why it's correct\n- Note why others are wrong\n\nFor TRUE/FALSE:\n- State True or False clearly\n- Provide justification\n\nFor SHORT ANSWER/ESSAY:\n- Provide concise, complete answer\n- Include key facts and reasoning\n\nFor CODING problems:\n- Write the solution code\n- Explain the logic\n\nIf multiple problems/questions present, solve each separately.\nIf unsolvable or unclear, explain why.\n",
	CRX_WRITE_CODE: "\nYou are an expert software developer. Analyze the provided content and generate high-quality, working code.\n\nCode Generation Requirements:\n- Choose the best programming language for the task\n- Write clean, efficient, and well-documented code\n- Include proper error handling and input validation\n- Add meaningful comments explaining complex logic\n- Follow language-specific best practices and conventions\n- Ensure code is readable, maintainable, and follows standard patterns\n\nFor each code generation task:\n1. **Analyze Requirements**: Understand what the code needs to do\n2. **Choose Language**: Select appropriate programming language\n3. **Design Solution**: Plan the code structure and logic\n4. **Write Code**: Provide complete, working code with comments\n5. **Explain Logic**: Describe how the code works and key decisions\n\nProvide complete, runnable code that solves the described problem.\n",
	CRX_EXTRACT_CSS: "\nYou are an expert CSS developer. Analyze the provided content and extract/generate the corresponding CSS styles.\n\nCSS Extraction Requirements:\n- Analyze visual elements, layout, and design patterns\n- Generate modern, clean CSS using current standards\n- Use semantic class names and proper CSS architecture\n- Include responsive design considerations\n- Optimize for performance and maintainability\n- Follow CSS best practices and conventions\n\nFor CSS extraction:\n1. **Analyze Design**: Identify colors, typography, spacing, layout\n2. **Generate Rules**: Create appropriate CSS rules and selectors\n3. **Organize Code**: Group related styles logically\n4. **Add Comments**: Explain complex or important style decisions\n5. **Ensure Compatibility**: Use widely supported CSS properties\n\nProvide complete, well-organized CSS that recreates the described design.\n"
};
_.SOLVE_AND_ANSWER, _.WRITE_CODE, _.EXTRACT_CSS, _.RECOGNIZE_CONTENT, _.CONVERT_DATA, _.EXTRACT_ENTITIES, _.TRANSLATE_TO_LANGUAGE, _.GENERAL_PROCESSING, _.CRX_SOLVE_AND_ANSWER, _.CRX_WRITE_CODE, _.CRX_EXTRACT_CSS, Object.fromEntries(Object.entries({
	"share-target": {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: !0
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"url"
		],
		defaultOverrideFactors: []
	},
	"launch-queue": {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: !0
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: []
	},
	"crx-snip": {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: !1
		},
		supportedContentTypes: ["text", "image"],
		defaultOverrideFactors: ["force-processing"]
	},
	paste: {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: !1
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			text: ["user-action"],
			markdown: ["user-action"]
		}
	},
	drop: {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: !1
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			file: ["user-action"],
			blob: ["user-action"]
		}
	},
	"button-attach-workcenter": {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-workcenter",
			doProcess: "manually",
			openApp: !1
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"file"
		],
		defaultOverrideFactors: ["explicit-workcenter"],
		associationOverrides: {
			markdown: ["explicit-workcenter"],
			text: ["explicit-workcenter"],
			image: ["explicit-workcenter"],
			file: ["explicit-workcenter"]
		}
	}
}).map(([e, t]) => [e, {
	processingUrl: t.processingUrl,
	contentAction: t.contentAction,
	...t.supportedContentTypes && { supportedContentTypes: t.supportedContentTypes }
}]));
//#endregion
//#region ../../projects/subsystem/src/routing/channel/UnifiedMessaging.ts
var he = {
	...d(),
	[f.WORKCENTER]: m.WORK_CENTER,
	[f.CLIPBOARD]: m.CLIPBOARD
}, v = null;
function ge() {
	return v ||= e({
		channelMappings: he,
		queueOptions: {
			dbName: "CrossWordMessageQueue",
			storeName: "messages",
			maxRetries: 3,
			defaultExpirationMs: 1440 * 60 * 1e3
		},
		pendingStoreOptions: {
			storageKey: "rs-unified-messaging-pending",
			maxMessages: 200,
			defaultTTLMs: 1440 * 60 * 1e3
		}
	}), v;
}
var _e = ge();
function ve(e) {
	return _e.sendMessage(p({
		...e,
		source: e.source ?? "unified-messaging"
	}));
}
//#endregion
//#region ../../projects/subsystem/runtime/storage.ts
var ye = {
	EXPLORER_PATH: "rs-explorer-path",
	SETTINGS: "rs-settings"
}, y = () => {
	try {
		return globalThis.localStorage ?? null;
	} catch {
		return null;
	}
};
function be(e, t) {
	y()?.setItem(String(e), t);
}
//#endregion
//#region ../../projects/subsystem/runtime/boot.ts
async function xe(e, t) {
	globalThis.dispatchEvent?.(new CustomEvent("view:navigate", { detail: {
		viewId: e,
		options: t
	} }));
}
//#endregion
//#region ../../projects/subsystem/runtime/cwsp-endpoint-resolve.ts
var b = [
	7443,
	9443,
	18443,
	8443,
	8444,
	8445,
	443
], Se = [
	8080,
	8081,
	8082,
	18080,
	80,
	8888
], x = (e) => typeof e == "string" ? e.trim() : "", Ce = (e) => /^\d{1,5}$/.test(e), we = (e) => x(e).replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0], S = (e) => {
	let t = x(e);
	if (!t) return null;
	let n, r = t, i = t.match(/^([a-z][a-z0-9+.-]*):\/\//i);
	if (i) {
		let e = i[1].toLowerCase();
		(e === "http" || e === "https") && (n = e), r = we(t);
	}
	if (r = r.split("/")[0]?.trim() || "", !r) return null;
	let a = r.lastIndexOf(":");
	if (a > 0) {
		let e = r.slice(0, a).trim(), i = r.slice(a + 1).trim();
		if (e && Ce(i)) return {
			raw: t,
			host: e,
			port: i,
			protocol: n
		};
	}
	return {
		raw: t,
		host: r,
		protocol: n
	};
}, Te = (e) => {
	let t = S(e);
	if (!t) return "";
	let { host: n, port: r, protocol: i } = t;
	return n ? r ? `${i || (b.some((e) => String(e) === r) ? "https" : Se.some((e) => String(e) === r) ? "http" : "https")}://${n}:${r}/` : i ? `${i}://${n}/` : n : "";
}, C = (e, t, n) => `${e}://${t}:${n}/`, Ee = (e, t = {}) => {
	let n = S(e);
	if (!n?.host) return [];
	let r = t.preferHttps !== !1, i = t.includeHttp !== !1, a = t.httpsPorts ?? b, o = t.httpPorts ?? Se, s = [], c = (e) => {
		e && !s.includes(e) && s.push(e);
	}, { host: l, port: u, protocol: d } = n;
	if (u) return d === "https" ? (c(C("https", l, u)), s) : d === "http" ? (c(C("http", l, u)), s) : (c(C("https", l, u)), i && c(C("http", l, u)), s);
	if (d === "https") {
		for (let e of a) c(C("https", l, e));
		return s;
	}
	if (d === "http") {
		for (let e of o) c(C("http", l, e));
		return s;
	}
	let f = r ? i ? ["https", "http"] : ["https"] : i ? ["http", "https"] : ["https"];
	for (let e of f) {
		let t = e === "https" ? a : o;
		for (let n of t) c(C(e, l, n));
	}
	return s;
}, De = () => {
	try {
		return typeof globalThis.fetch == "function" ? globalThis.fetch.bind(globalThis) : void 0;
	} catch {
		return;
	}
}, Oe = async (e, t = {}) => {
	let n = t.fetchFn ?? De();
	if (!n) return !1;
	let r = x(e).replace(/\/+$/, "");
	if (!r) return !1;
	let i = typeof AbortController < "u" ? new AbortController() : void 0, a = i && t.timeoutMs ? globalThis.setTimeout(() => i.abort(), t.timeoutMs) : void 0;
	try {
		return (await n(`${r}/lna-probe`, {
			method: "GET",
			mode: "cors",
			cache: "no-store",
			credentials: "omit",
			signal: i?.signal
		})).status === 204;
	} catch {
		return !1;
	} finally {
		a && clearTimeout(a);
	}
}, ke = (e) => {
	try {
		let t = new URL(e);
		return {
			origin: e,
			protocol: t.protocol === "http:" ? "http" : "https",
			port: t.port || (t.protocol === "http:" ? "80" : "443"),
			host: t.hostname
		};
	} catch {
		return null;
	}
}, Ae = async (e, t = {}) => {
	let n = S(e);
	if (!n?.host) return null;
	if (n.port) {
		let e = async (e) => {
			let r = C(e, n.host, n.port);
			return await Oe(r, t) ? ke(r) : null;
		};
		if (n.protocol === "https") {
			let t = await e("https");
			if (t) return t;
		} else if (n.protocol === "http") {
			let t = await e("http");
			if (t) return t;
		} else {
			let n = await e("https");
			if (n) return n;
			if (t.includeHttp !== !1) {
				let t = await e("http");
				if (t) return t;
			}
		}
	}
	for (let e of Ee(n.host, t)) {
		if (!await Oe(e, t)) continue;
		let n = ke(e);
		if (n) return n;
	}
	return null;
}, je = async (e, t = {}) => {
	let n = x(e);
	if (!n) return "";
	if (t.discover !== !1) {
		let e = await Ae(n, t);
		if (e?.origin) return e.origin;
	}
	return Te(n);
}, Me = async (e, t = {}) => {
	let n = {};
	return e.relayHttpsUrl !== void 0 && (n.relayHttpsUrl = await je(e.relayHttpsUrl, t)), e.directHttpsUrl !== void 0 && (n.directHttpsUrl = await je(e.directHttpsUrl, t)), n;
}, Ne = "airpad.remote.connection.v1", w = (e) => typeof e == "number" ? Number.isFinite(e) ? String(e) : "" : typeof e == "string" ? e.trim() : "", Pe = (e) => {
	let t = e.trim();
	if (!t) return !1;
	let n = t.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0], r = n.lastIndexOf(":");
	if (r <= 0) return !1;
	let i = n.slice(r + 1);
	return /^\d{1,5}$/.test(i);
}, Fe = (e, t) => {
	let n = e.trim();
	if (!n) return "";
	let r = t.trim();
	return !r || Pe(n) ? n : `${n}:${r}`;
}, T = (e) => Te(w(e)), E = (e) => {
	let t = w(e).toLowerCase();
	if (t && (t === "ws" || t === "wss" || t === "socket" || t === "socket.io" || t === "socketio")) return "ws";
}, Ie = (...e) => Array.from(new Set(e.map((e) => T(e)).filter(Boolean))).join(", "), D = (e) => {
	let t = w(e);
	if (!t || globalThis.location === void 0 || !globalThis.location.hostname) return t;
	try {
		let e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `https://${t}`, n = new URL(e.endsWith("/") ? e : `${e.replace(/\/+$/, "")}/`), r = globalThis.location;
		if (n.hostname === r.hostname && n.protocol === "https:" && n.port === "8443" && r.protocol === "https:" && (r.port === "" || r.port === "443")) return T(r.origin);
	} catch {}
	return t;
};
function Le() {
	try {
		let e = globalThis?.localStorage?.getItem?.(Ne);
		if (!e) return {};
		let t = JSON.parse(e);
		if (!t || typeof t != "object") return {};
		let n = t, r = w(n.host), i = w(n.tunnelHost), a = w(n.port);
		if (!(a !== "" || i !== "")) return t;
		let o = [], s = /* @__PURE__ */ new Set(), c = (e) => {
			let t = (a ? Fe(e, a) : e).trim();
			!t || s.has(t) || (s.add(t), o.push(t));
		};
		return r && c(r), i && c(i), !r && !i && a && location?.hostname && c(`${location.hostname}:${a}`), {
			...t,
			host: o.join(", "),
			_legacyMigrated: !0
		};
	} catch {
		return {};
	}
}
function Re() {
	try {
		let e = {
			v: 1,
			quickConnectValue: O.quickConnectValue,
			endpointUrl: O.endpointUrl,
			directUrl: O.directUrl,
			destinationId: O.destinationId,
			accessToken: O.accessToken,
			clientId: O.clientId,
			peerInstanceId: O.peerInstanceId,
			identificationToken: O.identificationToken.trim() || void 0,
			clientAccessToken: O.clientAccessToken.trim() || void 0
		}, t = E(O.wireTransport);
		t && (e.wireTransport = t), globalThis?.localStorage?.setItem?.(Ne, JSON.stringify(e));
	} catch {}
}
var ze = () => globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `ap-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`, O = {
	quickConnectValue: "",
	endpointUrl: "",
	directUrl: "",
	accessToken: "",
	destinationId: "",
	clientId: "",
	peerInstanceId: "",
	identificationToken: "",
	clientAccessToken: ""
}, k = !0, A = !0, j = !1, M = !1, N = !0, P = !0, F = !0, I = () => {
	Ie(O.directUrl, O.endpointUrl);
};
function Be(e) {
	let t = w(e.host), n = w(e.routeTarget), r = T(e.endpointUrl) || (n ? T(t) : ""), i = T(e.directUrl) || (n ? "" : T(t)), a = w(e.quickConnectValue);
	O.endpointUrl = D(r), O.directUrl = D(i), O.accessToken = w(e.accessToken) || w(e.authToken) || "", O.destinationId = w(e.destinationId) || n, O.quickConnectValue = a || O.destinationId || O.directUrl, O.clientId = w(e.clientId);
	let o = w(e.peerInstanceId);
	o ? O.peerInstanceId = o : O.peerInstanceId ||= ze(), O.identificationToken = w(e.identificationToken), O.clientAccessToken = w(e.clientAccessToken), O.wireTransport = E(e.wireTransport), I();
}
var L = Le();
Be(L), (async () => {
	let e = {};
	if (O.directUrl.trim()) {
		let t = await je(O.directUrl.trim());
		t && t !== O.directUrl.trim() && (e.directUrl = t);
	}
	if (O.endpointUrl.trim()) {
		let t = await je(O.endpointUrl.trim());
		t && t !== O.endpointUrl.trim() && (e.endpointUrl = t);
	}
	Object.keys(e).length && R(e, { persist: !0 });
})(), w(L.peerInstanceId) || (O.peerInstanceId = O.peerInstanceId || ze());
var Ve = w(L.accessToken), He = w(L.authToken);
(L._legacyMigrated === !0 || !L.peerInstanceId || He && !Ve || L.v !== 1) && Re();
function R(e, t) {
	e.endpointUrl === void 0 ? e.host !== void 0 && (O.endpointUrl = T(e.host)) : O.endpointUrl = T(e.endpointUrl), e.directUrl !== void 0 && (O.directUrl = T(e.directUrl)), e.accessToken === void 0 ? e.authToken !== void 0 && (O.accessToken = e.authToken || "") : O.accessToken = e.accessToken || "", e.destinationId === void 0 ? e.routeTarget !== void 0 && (O.destinationId = (e.routeTarget || "").trim()) : O.destinationId = (e.destinationId || "").trim(), e.clientId !== void 0 && (O.clientId = (e.clientId || "").trim()), e.identificationToken !== void 0 && (O.identificationToken = (e.identificationToken || "").trim()), e.clientAccessToken !== void 0 && (O.clientAccessToken = (e.clientAccessToken || "").trim());
	let n = E(e.wireTransport);
	n && (O.wireTransport = n), I(), t?.persist !== !1 && Re();
}
var Ue = (e) => {
	try {
		let t = new URL(e);
		return `${t.protocol}//${t.host}`;
	} catch {
		return "";
	}
};
function We(e) {
	let t = e.core, n = e.shell, r = t?.socket, i = t?.interop;
	(t?.userId || "").trim(), (t?.userKey || "").trim(), t?.useCoreIdentityForAirPad, k = (n?.enableRemoteClipboardBridge ?? !0) !== !1, A = (n?.applyRemoteClipboardToDevice ?? !0) !== !1, j = !!n?.pushLocalClipboardToLan, Number(n?.clipboardPushIntervalMs), (n?.clipboardBroadcastTargets || "").trim(), M = n?.maintainHubSocketConnection === !0, N = (n?.preferNativeWebsocket ?? i?.preferNativeWebsocket ?? !0) !== !1, P = (n?.enableNativeSms ?? !0) !== !1, F = (n?.enableNativeContacts ?? !0) !== !1, n?.acceptInboundClipboardData, (n?.clipboardInboundAllowIds || "").trim(), (n?.clipboardShareDestinationIds || "").trim(), n?.accessTokenBypassesClipboardAllowlist, n?.acceptContactsBridgeData, n?.acceptSmsBridgeData, (r?.protocol === "http" || r?.protocol === "https") && r.protocol, (r?.routeTarget || "").trim(), (r?.selfId || "").trim(), (r?.accessToken || r?.airpadAuthToken || "").trim(), (r?.clientAccessToken || "").trim(), r?.transportMode, (r?.transportSecret || "").trim(), (r?.signingSecret || "").trim(), (r?.connectionType || "").trim(), (r?.archetype || "").trim(), (r?.protocolLanesJson || "").trim();
	let a = {};
	if (t?.endpointUrl?.trim()) {
		let e = Ue(D(t.endpointUrl.trim()));
		e && (a.endpointUrl = e);
	}
	Object.keys(a).length && R(a, { persist: !1 });
	try {
		globalThis.__CWS_SHELL_FEATURES__ = {
			clipboardBridge: k,
			applyRemoteClipboard: A,
			pushLocalClipboard: j,
			maintainHubSocket: M,
			preferNativeWebsocket: N,
			sms: P,
			contacts: F
		};
	} catch {}
}
//#endregion
//#region src/ts/settings-utils.ts
var Ge = [
	"en",
	"ru",
	"en-GB",
	"en-US"
], Ke = (e) => e === "en" ? "English (generic)" : e === "ru" ? "Russian" : e === "en-GB" ? "English (UK)" : "English (US)", qe = (e) => {
	let t = (e || "").trim();
	return t ? t === "ru" || t.startsWith("ru-") ? "ru" : t === "en-GB" ? "en-GB" : t === "en-US" ? "en-US" : t === "en" || t.startsWith("en-") ? "en" : null : null;
}, Je = () => {
	let e = /* @__PURE__ */ new Set(), t = typeof navigator < "u" ? [...navigator.languages || [], navigator.language] : [];
	for (let n of t) {
		let t = qe(n);
		t && e.add(t);
	}
	for (let t of Ge) e.add(t);
	return Array.from(e);
}, Ye = () => {
	let e = new Set(["ru", "en"]), t = typeof navigator < "u" ? [...navigator.languages || [], navigator.language] : [];
	for (let n of t) {
		let t = (n || "").trim();
		!t || t === "en" || t === "ru" || e.add(t);
	}
	return Array.from(e);
}, z = (e, t) => {
	let n = Number((e || "").trim());
	return Number.isFinite(n) ? n : t;
}, Xe = (e, t, n, r) => {
	let i = Number.parseFloat((e || "").trim());
	return Number.isFinite(i) ? Math.max(n, Math.min(r, i)) : t;
}, B = (e, t = "") => e ? e.value.trim() : t, V = (e, t) => e ? !!e.checked : t, Ze = (e) => {
	if (typeof e.composedPath == "function") {
		for (let t of e.composedPath()) if (t instanceof Element) return t;
	}
	let t = e.target;
	return t instanceof Element ? t : t instanceof Text ? t.parentElement : null;
}, Qe = (e) => {
	let t = {
		id: (e?.id || `mcp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`).trim(),
		serverLabel: (e?.serverLabel || "").trim(),
		origin: (e?.origin || "").trim(),
		clientKey: (e?.clientKey || "").trim(),
		secretKey: (e?.secretKey || "").trim()
	};
	return n`<div class="field mcp-row" data-mcp-id=${t.id}>
            <label class="field">
              <span>Server Label</span>
              <input class="form-input" type="text" data-mcp-field="serverLabel" autocomplete="off" value="${t.serverLabel}" />
            </label>
            <label class="field">
              <span>Origin</span>
              <input class="form-input" type="url" data-mcp-field="origin" autocomplete="off" placeholder="https://server.example" value="${t.origin}" />
            </label>
            <label class="field">
              <span>Client Key</span>
              <input class="form-input" type="text" data-mcp-field="clientKey" autocomplete="off" value="${t.clientKey}" />
            </label>
            <label class="field">
              <span>Secret Key</span>
              <input class="form-input" type="password" data-mcp-field="secretKey" autocomplete="off" placeholder="sk-..." value="${t.secretKey}" />
            </label>
            <button class="btn btn-danger" type="button" data-action="remove-mcp-server">Remove</button>
          </div>`;
}, $e = (e) => {
	if (!e) return [];
	let t = Array.from(e.querySelectorAll("[data-mcp-id]")), n = [];
	for (let e of t) {
		let t = e.getAttribute("data-mcp-id") || `mcp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`, r = e.querySelector("[data-mcp-field=\"serverLabel\"]")?.value?.trim() || "", i = e.querySelector("[data-mcp-field=\"origin\"]")?.value?.trim() || "", a = e.querySelector("[data-mcp-field=\"clientKey\"]")?.value?.trim() || "", o = e.querySelector("[data-mcp-field=\"secretKey\"]")?.value?.trim() || "";
		r && n.push({
			id: t,
			serverLabel: r,
			origin: i,
			clientKey: a,
			secretKey: o
		});
	}
	return n;
}, et = (e, t) => {
	if (!e) return;
	e.replaceChildren();
	let r = Array.isArray(t) ? t : [];
	if (!r.length) {
		e.appendChild(n`<p class="mcp-empty-note">No MCP servers configured.</p>`);
		return;
	}
	r.forEach((t) => e.appendChild(Qe(t)));
}, tt = () => n`<footer class="settings-screen__footer">
        <button class="btn primary" type="button" data-action="save">Save</button>
        <span class="note" data-note></span>
    </footer>`, nt = () => n`<header class="settings-screen__top">
        <h2 class="settings-screen__title">Settings</h2>
        <div class="settings-tab-actions" data-settings-tabs data-active-tab="ai" role="tablist" aria-label="Settings categories">
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="appearance" aria-selected="false">Appearance</button>
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="markdown" aria-selected="false">Markdown</button>
        <button class="settings-tab-btn is-active" type="button" role="tab" data-action="switch-settings-tab" data-tab="ai" aria-selected="true">AI</button>
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="mcp" aria-selected="false">MCP</button>
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="server" aria-selected="false">Server</button>
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="instructions" aria-selected="false">Instructions</button>
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="extension" aria-selected="false" data-extension-tab hidden>Extension</button>
        </div>
    </header>`, rt = () => n`<section class="card settings-tab-panel" data-tab-panel="appearance">
      <h3>Appearance</h3>
      <label class="field">
        <span>Theme</span>
        <select class="form-select" data-field="appearance.theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
        <span>Font Size</span>
        <select class="form-select" data-field="appearance.fontSize">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
    </section>`, it = () => n`<section class="card settings-tab-panel" data-tab-panel="markdown">
      <h3>Markdown Viewer</h3>
      <label class="field">
        <span>Style preset</span>
        <select class="form-select" data-field="appearance.markdown.preset">
          <option value="default">Default</option>
          <option value="classic">Classic</option>
          <option value="compact">Compact</option>
          <option value="paper">Paper</option>
        </select>
      </label>
      <label class="field">
        <span>Font family</span>
        <select class="form-select" data-field="appearance.markdown.fontFamily">
          <option value="system">System UI</option>
          <option value="sans">Sans</option>
          <option value="serif">Serif</option>
          <option value="mono">Monospace</option>
        </select>
      </label>
      <label class="field">
        <span>Font size (px)</span>
        <input class="form-input" type="number" inputmode="numeric" min="12" max="26" step="1" data-field="appearance.markdown.fontSizePx" />
      </label>
      <label class="field">
        <span>Line height</span>
        <input class="form-input" type="number" inputmode="decimal" min="1.1" max="2.2" step="0.05" data-field="appearance.markdown.lineHeight" />
      </label>
      <label class="field">
        <span>Content max width (px)</span>
        <input class="form-input" type="number" inputmode="numeric" min="500" max="1400" step="10" data-field="appearance.markdown.contentMaxWidthPx" />
      </label>
      <label class="field">
        <span>Print scale</span>
        <input class="form-input" type="number" inputmode="decimal" min="0.5" max="1.5" step="0.05" data-field="appearance.markdown.printScale" />
      </label>
      <label class="field">
        <span>Page size</span>
        <select class="form-select" data-field="appearance.markdown.page.size">
          <option value="auto">Auto</option>
          <option value="A4">A4</option>
          <option value="Letter">Letter</option>
          <option value="Legal">Legal</option>
          <option value="A5">A5</option>
        </select>
      </label>
      <label class="field">
        <span>Page orientation</span>
        <select class="form-select" data-field="appearance.markdown.page.orientation">
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </select>
      </label>
      <label class="field">
        <span>Page margins (mm)</span>
        <input class="form-input" type="number" inputmode="numeric" min="5" max="40" step="1" data-field="appearance.markdown.page.marginMm" />
      </label>
      <h4>Style modules</h4>
      <p class="field-hint" style="margin: 0 0 0.5rem; opacity: 0.85; font-size: 0.9em;">Grouped by what they affect in the viewer. All are on by default.</p>
      <fieldset class="field-group" style="border: 0; padding: 0; margin: 0 0 1rem;">
        <legend class="field" style="font-weight: 600; margin-bottom: 0.35rem;">Type &amp; layout</legend>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.typography" />
          <span>Typography (paragraphs, headings)</span>
        </label>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.lists" />
          <span>Lists (bullets &amp; numbering)</span>
        </label>
      </fieldset>
      <fieldset class="field-group" style="border: 0; padding: 0; margin: 0 0 1rem;">
        <legend class="field" style="font-weight: 600; margin-bottom: 0.35rem;">Blocks &amp; media</legend>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.tables" />
          <span>Tables</span>
        </label>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.codeBlocks" />
          <span>Code blocks</span>
        </label>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.blockquotes" />
          <span>Blockquotes</span>
        </label>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.media" />
          <span>Images &amp; video</span>
        </label>
      </fieldset>
      <fieldset class="field-group" style="border: 0; padding: 0; margin: 0 0 1rem;">
        <legend class="field" style="font-weight: 600; margin-bottom: 0.35rem;">Print</legend>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.printBreaks" />
          <span>Print breaks (avoid splits inside headings, tables, …)</span>
        </label>
      </fieldset>
      <h4>Rendering plugins</h4>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="appearance.markdown.plugins.smartTypography" />
        <span>Smart typography</span>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="appearance.markdown.plugins.softBreaksAsBr" />
        <span>Soft line breaks as BR</span>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="appearance.markdown.plugins.externalLinksNewTab" />
        <span>Open external links in new tab</span>
      </label>
      <label class="field">
        <span>Custom CSS (screen/view)</span>
        <textarea class="form-input" rows="8" data-field="appearance.markdown.customCss" placeholder=".markdown-viewer-content h1 { color: var(--color-primary); }"></textarea>
      </label>
      <label class="field">
        <span>Custom CSS (print only)</span>
        <textarea class="form-input" rows="8" data-field="appearance.markdown.printCss" placeholder=".markdown-viewer-content { font-size: 12pt; line-height: 1.5; }"></textarea>
      </label>
      <label class="field">
        <span>Markdown extensions (JSON rules)</span>
        <textarea class="form-input" rows="10" data-field="appearance.markdown.extensions" placeholder='[
  {
    "id": "highlight",
    "pattern": "==(.+?)==",
    "replacement": "<mark>$1</mark>",
    "flags": "g",
    "enabled": true
  }
]'></textarea>
      </label>
      <div class="mcp-actions">
        <button class="btn" type="button" data-action="open-user-styles">Open <code>/user/styles/</code> in Explorer</button>
        <button class="btn" type="button" data-action="open-assets-readonly">Open <code>/assets/</code> (read-only) in Explorer</button>
      </div>
      <p class="mcp-empty-note">Rules are regex replacements applied before markdown parsing. Invalid JSON is rejected on save. Custom CSS supports explicit <code>@layer</code> blocks for advanced interop.</p>
    </section>`, at = () => n`<section class="card settings-tab-panel is-active" data-tab-panel="ai">
      <h3>AI</h3>
      <form class="settings-panel-form" novalidate onsubmit="return false">
      <label class="field">
        <span>Base URL</span>
        <input placeholder="https://api.proxyapi.ru/openai/v1" class="form-input" type="url" inputmode="url" autocomplete="off" data-field="ai.baseUrl" />
      </label>
      <label class="field">
        <span>API Key</span>
        <input placeholder="sk-..." class="form-input" type="password" autocomplete="off" data-field="ai.apiKey"/>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="ui.showKey" />
        <span>Show API key</span>
      </label>
      <label class="field">
        <span>Model</span>
        <select class="form-select" data-field="ai.model"></select>
      </label>
      <label class="field" data-field-group="ai.customModel">
        <span>Custom model identifier</span>
        <input placeholder="provider/model-or-id" class="form-input" type="text" autocomplete="off" data-field="ai.customModel"/>
      </label>
      <label class="field">
        <span>Default reasoning effort</span>
        <select class="form-select" data-field="ai.defaultReasoningEffort">
            <option value="none">None</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
      </label>
      <details class="settings-spoiler" data-advanced-ai-spoiler>
        <summary>Advanced AI settings</summary>
        <div>
          
          <label class="field">
            <span>Default verbosity</span>
            <select class="form-select" data-field="ai.defaultVerbosity">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <label class="field">
            <span>Max output tokens</span>
            <input placeholder="400000" class="form-input" type="number" inputmode="numeric" data-field="ai.maxOutputTokens" />
          </label>
          <label class="field">
            <span>Context truncation</span>
            <select class="form-select" data-field="ai.contextTruncation">
              <option value="disabled">Disabled</option>
              <option value="auto">Auto</option>
            </select>
          </label>
          <label class="field">
            <span>Prompt cache retention</span>
            <select class="form-select" data-field="ai.promptCacheRetention">
              <option value="in-memory">In-memory</option>
              <option value="24h">24h</option>
            </select>
          </label>
          <label class="field">
            <span>Max tool calls</span>
            <input placeholder="8" class="form-input" type="number" inputmode="numeric" data-field="ai.maxToolCalls" />
          </label>
          <label class="field checkbox form-checkbox">
            <input type="checkbox" data-field="ai.parallelToolCalls" />
            <span>Allow parallel tool calls</span>
          </label>
          <label class="field">
            <span>Timeout low (ms)</span>
            <input placeholder="60000" class="form-input" type="number" inputmode="numeric" data-field="ai.requestTimeout.low" />
          </label>
          <label class="field">
            <span>Timeout medium (ms)</span>
            <input placeholder="300000" class="form-input" type="number" inputmode="numeric" data-field="ai.requestTimeout.medium" />
          </label>
          <label class="field">
            <span>Timeout high (ms)</span>
            <input placeholder="900000" class="form-input" type="number" inputmode="numeric" data-field="ai.requestTimeout.high" />
          </label>
          <label class="field">
            <span>Max retries</span>
            <input placeholder="2" class="form-input" type="number" inputmode="numeric" data-field="ai.maxRetries" />
          </label>
        </div>
      </details>
      <label class="field">
        <span>Share target mode</span>
        <select class="form-select" data-field="ai.shareTargetMode">
          <option value="recognize">Recognize and copy</option>
          <option value="analyze">Analyze and store</option>
        </select>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="ai.autoProcessShared" />
        <span>Auto AI on Share Target / File Open (and copy to clipboard)</span>
      </label>
      <label class="field">
        <span>Response language</span>
        <select class="form-select" data-field="ai.responseLanguage"></select>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="ai.translateResults" />
        <span>Translate results</span>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="ai.generateSvgGraphics" />
        <span>Generate SVG graphics</span>
      </label>
      <label class="field">
        <span>Speech Recognition language</span>
        <select class="form-select" data-field="speech.language"></select>
      </label>
      </form>
    </section>`, ot = () => n`<section class="card settings-tab-panel" data-tab-panel="mcp">
      <h3>MCP</h3>
      <div class="mcp-section" data-mcp-section></div>
      <div class="mcp-actions">
        <button class="btn" type="button" data-action="add-mcp-server">Add MCP server</button>
      </div>
    </section>`, st = () => n`<section class="card settings-tab-panel" data-tab-panel="server">
      <h3>Server</h3>
      <p class="field-hint" style="margin: 0 0 0.75rem; opacity: 0.88; font-size: 0.9em;">
        Connect to the hub with server URL and client id. Optional client identifier token and TLS options below.
      </p>
      <h4>Endpoint and identity</h4>
      <form class="settings-panel-form" novalidate onsubmit="return false">
      <label class="field">
        <span>Server URL</span>
        <input class="form-input" type="text" inputmode="url" autocomplete="off" placeholder="192.168.0.200" data-field="core.endpointUrl" />
      </label>
      <p class="field-hint">IP or domain only — port and protocol are auto-discovered (8443, 443, 8080, …).</p>
      <label class="field">
        <span>Associated device / client ID</span>
        <input class="form-input" type="text" autocomplete="off" data-field="core.userId" placeholder="L-192.168.0.196" />
      </label>
      <label class="field">
        <span>Client identifier token</span>
        <input class="form-input" type="password" autocomplete="off" data-field="core.userKey" placeholder="Endpoint-issued key" />
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="core.socket.allowAccessTokenWithoutUserKey" />
        <span>Allow access / control token without associated client identifier token</span>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="core.allowInsecureTls" />
        <span>Allow self-signed / insecure TLS</span>
      </label>
      </form>
    </section>`, ct = "rs-settings", lt = "req-store", H = "settings", ut = null, dt = (e, t) => !t || typeof t != "object" ? e : {
	...e,
	...t,
	core: {
		...e.core || {},
		...t.core || {},
		network: {
			...e.core?.network || {},
			...t.core?.network || {}
		},
		socket: {
			...e.core?.socket || {},
			...t.core?.socket || {}
		},
		interop: {
			...e.core?.interop || {},
			...t.core?.interop || {}
		},
		ops: {
			...e.core?.ops || {},
			...t.core?.ops || {}
		},
		admin: {
			...e.core?.admin || {},
			...t.core?.admin || {}
		}
	},
	ai: {
		...e.ai || {},
		...t.ai || {},
		mcp: t.ai?.mcp ?? e.ai?.mcp ?? [],
		customInstructions: t.ai?.customInstructions ?? e.ai?.customInstructions ?? [],
		activeInstructionId: t.ai?.activeInstructionId ?? e.ai?.activeInstructionId ?? ""
	},
	webdav: {
		...e.webdav || {},
		...t.webdav || {}
	},
	timeline: {
		...e.timeline || {},
		...t.timeline || {}
	},
	appearance: {
		...e.appearance || {},
		...t.appearance || {},
		markdown: {
			...e.appearance?.markdown || {},
			...t.appearance?.markdown || {},
			page: {
				...e.appearance?.markdown?.page || {},
				...t.appearance?.markdown?.page || {}
			},
			modules: {
				...e.appearance?.markdown?.modules || {},
				...t.appearance?.markdown?.modules || {}
			},
			plugins: {
				...e.appearance?.markdown?.plugins || {},
				...t.appearance?.markdown?.plugins || {}
			}
		}
	},
	speech: {
		...e.speech || {},
		...t.speech || {}
	},
	grid: {
		...e.grid || {},
		...t.grid || {}
	},
	shell: {
		...e.shell || {},
		...t.shell || {}
	}
}, ft = async () => ut ?? null, U = () => {
	try {
		return typeof chrome > "u" || !chrome?.runtime ? !1 : !!(typeof window < "u" && globalThis?.location?.protocol?.startsWith("http"));
	} catch {
		return !1;
	}
}, pt = () => typeof chrome < "u" && chrome?.storage?.local;
async function mt() {
	if (typeof indexedDB > "u") throw Error("IndexedDB not available");
	if (U()) throw Error("IndexedDB not accessible in content script context");
	return new Promise((e, t) => {
		try {
			let n = indexedDB.open(lt, 1);
			n.onupgradeneeded = () => n.result.createObjectStore(H, { keyPath: "key" }), n.onsuccess = () => e(n.result), n.onerror = () => t(n.error);
		} catch (e) {
			t(e);
		}
	});
}
var ht = async (e = ct) => {
	try {
		if (pt()) return console.log("[Settings] Using chrome.storage.local for get"), new Promise((t) => {
			try {
				chrome.storage.local.get([e], (n) => {
					chrome.runtime.lastError ? (console.warn("[Settings] chrome.storage.local.get error:", chrome.runtime.lastError), t(null)) : (console.log("[Settings] chrome.storage.local.get success, has data:", !!n[e]), t(n[e]));
				});
			} catch (e) {
				console.warn("[Settings] chrome.storage access failed:", e), t(null);
			}
		});
		if (typeof indexedDB > "u") return console.warn("[Settings] IndexedDB not available"), null;
		console.log("[Settings] Using IndexedDB for get");
		let t = await mt();
		return new Promise((n, r) => {
			let i = t.transaction(H, "readonly").objectStore(H).get(e);
			i.onsuccess = () => {
				console.log("[Settings] IndexedDB get success, has data:", !!i.result?.value), n(i.result?.value), t.close();
			}, i.onerror = () => {
				console.warn("[Settings] IndexedDB get error:", i.error), r(i.error), t.close();
			};
		});
	} catch (e) {
		return console.warn("[Settings] Settings storage access failed:", e), null;
	}
}, gt = async (e, t = ct) => {
	try {
		if (pt()) return new Promise((n, r) => {
			try {
				chrome.storage.local.set({ [t]: e }, () => {
					chrome.runtime.lastError ? r(chrome.runtime.lastError) : n();
				});
			} catch (e) {
				console.warn("chrome.storage write failed:", e), r(e);
			}
		});
		if (typeof indexedDB > "u") {
			console.warn("IndexedDB not available");
			return;
		}
		let n = await mt();
		return new Promise((r, i) => {
			let a = n.transaction(H, "readwrite");
			a.objectStore(H).put({
				key: t,
				value: e
			}), a.oncomplete = () => {
				r(void 0), n.close();
			}, a.onerror = () => {
				i(a.error), n.close();
			};
		});
	} catch (e) {
		console.warn("Settings storage write failed:", e);
	}
}, W = async () => {
	try {
		let e = await ht(), t = typeof e == "string" ? i.parse(e) : e;
		if (console.log("[Settings] loadSettings - raw type:", typeof e, "stored type:", typeof t), t && typeof t == "object") {
			let e = {
				core: {
					...g.core,
					...t?.core,
					network: {
						...g.core?.network || {},
						...t?.core?.network || {}
					},
					socket: {
						...g.core?.socket || {},
						...t?.core?.socket || {}
					},
					interop: {
						...g.core?.interop || {},
						...t?.core?.interop || {}
					},
					ops: {
						...g.core?.ops || {},
						...t?.core?.ops || {}
					},
					admin: {
						...g.core?.admin || {},
						...t?.core?.admin || {}
					}
				},
				ai: {
					...g.ai,
					...t?.ai,
					mcp: t?.ai?.mcp || [],
					customInstructions: t?.ai?.customInstructions || [],
					activeInstructionId: t?.ai?.activeInstructionId || ""
				},
				webdav: {
					...g.webdav,
					...t?.webdav
				},
				timeline: {
					...g.timeline,
					...t?.timeline
				},
				appearance: {
					...g.appearance,
					...t?.appearance,
					markdown: {
						...g.appearance?.markdown || {},
						...t?.appearance?.markdown || {},
						page: {
							...g.appearance?.markdown?.page || {},
							...t?.appearance?.markdown?.page || {}
						},
						modules: {
							...g.appearance?.markdown?.modules || {},
							...t?.appearance?.markdown?.modules || {}
						},
						plugins: {
							...g.appearance?.markdown?.plugins || {},
							...t?.appearance?.markdown?.plugins || {}
						}
					}
				},
				speech: {
					...g.speech,
					...t?.speech
				},
				grid: {
					...g.grid,
					...t?.grid
				},
				shell: {
					...g.shell || {},
					...t?.shell || {}
				}
			};
			try {
				let { getNativeUnifiedSettings: t, isCwsNativeIpcAvailable: n } = await import("./cws-bridge-lZZ7C0Eh.js");
				if (n()) {
					let n = await t();
					n && typeof n == "object" && (e = dt(e, n));
				}
			} catch {}
			return console.log("[Settings] loadSettings result:", {
				hasApiKey: !!e.ai?.apiKey,
				instructionCount: e.ai?.customInstructions?.length || 0,
				activeInstructionId: e.ai?.activeInstructionId || "(none)"
			}), e;
		}
		console.log("[Settings] loadSettings - no stored data, returning defaults");
	} catch (e) {
		console.warn("[Settings] loadSettings error:", e);
	}
	return i.parse(i.stringify(g));
}, G = async (e) => {
	let t = await W(), n = () => e.ai?.mcp === void 0 ? t.ai?.mcp === void 0 ? [] : t.ai.mcp : e.ai.mcp, r = () => e.ai?.customInstructions === void 0 ? t.ai?.customInstructions === void 0 ? [] : t.ai.customInstructions : e.ai.customInstructions, i = () => Object.prototype.hasOwnProperty.call(e.ai || {}, "activeInstructionId") ? e.ai?.activeInstructionId ?? "" : t.ai?.activeInstructionId === void 0 ? "" : t.ai.activeInstructionId, a = {
		core: {
			...g.core || {},
			...t.core || {},
			...e.core || {},
			network: {
				...g.core?.network || {},
				...t.core?.network || {},
				...e.core?.network || {}
			},
			socket: {
				...g.core?.socket || {},
				...t.core?.socket || {},
				...e.core?.socket || {}
			},
			interop: {
				...g.core?.interop || {},
				...t.core?.interop || {},
				...e.core?.interop || {}
			},
			ops: {
				...g.core?.ops || {},
				...t.core?.ops || {},
				...e.core?.ops || {}
			},
			admin: {
				...g.core?.admin || {},
				...t.core?.admin || {},
				...e.core?.admin || {}
			}
		},
		ai: {
			...g.ai || {},
			...t.ai || {},
			...e.ai || {},
			mcp: n(),
			customInstructions: r(),
			activeInstructionId: i()
		},
		webdav: {
			...g.webdav || {},
			...t.webdav || {},
			...e.webdav || {}
		},
		timeline: {
			...g.timeline || {},
			...t.timeline || {},
			...e.timeline || {}
		},
		appearance: {
			...g.appearance || {},
			...t.appearance || {},
			...e.appearance || {},
			markdown: {
				...g.appearance?.markdown || {},
				...t.appearance?.markdown || {},
				...e.appearance?.markdown || {},
				page: {
					...g.appearance?.markdown?.page || {},
					...t.appearance?.markdown?.page || {},
					...e.appearance?.markdown?.page || {}
				},
				modules: {
					...g.appearance?.markdown?.modules || {},
					...t.appearance?.markdown?.modules || {},
					...e.appearance?.markdown?.modules || {}
				},
				plugins: {
					...g.appearance?.markdown?.plugins || {},
					...t.appearance?.markdown?.plugins || {},
					...e.appearance?.markdown?.plugins || {}
				}
			}
		},
		speech: {
			...g.speech || {},
			...t.speech || {},
			...e.speech || {}
		},
		grid: {
			...g.grid || {},
			...t.grid || {},
			...e.grid || {}
		},
		shell: {
			...g.shell || {},
			...t.shell || {},
			...e.shell || {}
		}
	};
	await gt(a);
	try {
		let { patchNativeUnifiedSettings: e, isCwsNativeIpcAvailable: t } = await import("./cws-bridge-lZZ7C0Eh.js");
		t() && e(a);
	} catch {}
	return Ct(a)?.catch?.(console.warn.bind(console)), a;
}, K = (e, t, n = !1) => {
	let r = (e || "/").replace(/\/+$/g, "") || "/", i = (t || "").replace(/^\/+/g, ""), a = r === "/" ? `/${i}` : `${r}/${i}`;
	return n && (a = a.replace(/\/?$/g, "/")), a.replace(/\/{2,}/g, "/");
}, _t = (e) => e?.kind === "directory", q = (e) => {
	let t = new Date(e).getTime();
	return Number.isFinite(t) ? t : 0;
}, vt = null, yt = () => (vt ||= import("./src-BhZ7_wUJ.js").then((e) => ({
	getDirectoryHandle: e.getDirectoryHandle,
	readFile: e.readFile
})), vt), bt = async (e, t = "/", n = {}, r = null) => {
	let { getDirectoryHandle: i, readFile: o } = await yt(), s = await e?.getDirectoryContents?.(t || "/")?.catch?.((e) => (console.warn(e), []));
	if (n.pruneLocal && s?.length > 0) try {
		let e = await i(r, t)?.catch?.(() => null);
		if (e?.entries) {
			let t = await Array.fromAsync(e.entries()), n = new Set(s?.map?.((e) => e?.basename).filter(Boolean));
			await Promise.all(t.filter(([e]) => !n.has(e)).map(([t]) => e.removeEntry(t, { recursive: !0 })?.catch?.(console.warn.bind(console))));
		}
	} catch (e) {
		console.warn(e);
	}
	return Promise.all(s.map(async (t) => {
		let i = t?.type === "directory", s = i ? K(t.filename, "", !0) : t.filename;
		if (i) return bt(e, s, n, r);
		if (t?.type === "file") {
			let n = q((await o(r, s).catch(() => null))?.lastModified);
			if (q(t?.lastmod) > n) {
				let n = await e.getFileContents(s).catch((e) => (console.warn(e), null));
				if (!n || n.byteLength === 0) return;
				let i = t?.mime || "application/octet-stream";
				return a(r, s, new File([n], t.basename, { type: i }));
			}
		}
	}));
}, xt = async (e, t = null, n = "/", r = {}) => {
	let { getDirectoryHandle: i } = await yt(), a = t ?? await i(null, n, { create: !0 })?.catch?.(console.warn.bind(console)), o = await Array.fromAsync(a?.entries?.() ?? []);
	if (n != "/" && r.pruneRemote && o?.length >= 0) {
		let t = await e.getDirectoryContents(n || "/").catch((e) => (console.warn(e), [])), r = new Set(o.map(([e]) => e.toLowerCase())), i = [...t.filter((e) => {
			let t = (e?.basename || "").toLowerCase();
			return t && !r.has(t);
		}).filter((e) => e.type !== "directory")];
		for (let t of i) {
			let r = t.filename || K(n, t.basename, t.type === "directory");
			try {
				await e.deleteFile(r);
			} catch (e) {
				console.warn("delete failed:", r, e);
			}
		}
	}
	await Promise.all(o.map(async ([t, i]) => {
		let a = _t(i), o = K(n, t, a);
		if (a) {
			let a = K(n, t, !1);
			return await e.exists(a).catch((e) => !1) || await e.createDirectory(a, { recursive: !0 }).catch(console.warn), xt(e, i, o, r);
		}
		let s = await i.getFile();
		if (!s || s.size === 0) return;
		let c = K(n, t, !1), l = await e.stat(c).catch(() => null), u = q(l?.lastmod), d = q(s.lastModified);
		(!l || d > u) && await e.putFileContents(c, await s.arrayBuffer(), { overwrite: !0 }).catch((e) => null);
	}));
}, J = (e) => {
	let t = new URL(e);
	return t.protocol + t.hostname + ":" + t.port;
}, St = async (e, t = {}) => {
	if (console.log("[Settings] WebDavSync", e, t), !e) return null;
	let n = await ft();
	if (!n) return null;
	let r = n(J(e), t);
	return {
		status: Y?.sync?.getDAVCompliance?.()?.catch?.(console.warn.bind(console)) ?? null,
		client: r,
		upload(e = !1) {
			if (this.status != null) return xt(r, null, "/", { pruneRemote: e })?.catch?.((e) => (console.warn(e), []));
		},
		download(e = !1) {
			if (this.status != null) return bt(r, "/", { pruneLocal: e })?.catch?.((e) => (console.warn(e), []));
		}
	};
}, Y = { sync: null };
U() || (async () => {
	try {
		let e = await W();
		if (e?.core?.mode === "endpoint" && e?.core?.preferBackendSync || !e?.webdav?.url) return;
		Y.sync = await St(e.webdav.url, {
			withCredentials: !0,
			username: e.webdav.username,
			password: e.webdav.password,
			token: e.webdav.token
		}) ?? Y.sync, await Y?.sync?.upload?.(!0), await Y?.sync?.download?.(!0);
	} catch {}
})();
var Ct = async (e) => {
	if (e ||= await W(), e?.core?.mode === "endpoint" && e?.core?.preferBackendSync) {
		Y.sync = null;
		return;
	}
	e?.webdav?.url && (Y.sync = await St(e.webdav.url, {
		withCredentials: !0,
		username: e.webdav.username,
		password: e.webdav.password,
		token: e.webdav.token
	}) ?? Y.sync, await Y?.sync?.upload?.(), await Y?.sync?.download?.(!0));
};
if (!U()) {
	try {
		typeof window < "u" && typeof addEventListener == "function" && (addEventListener("pagehide", () => {
			Y?.sync?.upload?.()?.catch?.(() => {});
		}), addEventListener("beforeunload", () => {
			Y?.sync?.upload?.()?.catch?.(() => {});
		}));
	} catch {}
	(async () => {
		try {
			for (;;) await Y?.sync?.upload?.()?.catch?.(() => {}), await new Promise((e) => setTimeout(e, 3e3));
		} catch {}
	})();
}
//#endregion
//#region ../../projects/subsystem/src/service/instructions/utils.ts
var wt = () => `ci_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, Tt = () => wt(), Et = (e, t) => {
	let n = Number.isFinite(e.order) ? e.order : 2 ** 53 - 1, r = Number.isFinite(t.order) ? t.order : 2 ** 53 - 1;
	return n === r ? (e.label || "").localeCompare(t.label || "") : n - r;
}, Dt = (e) => [...e || []].sort(Et), Ot = (e, t) => t && e.find((e) => e.id === t) || null, kt = async () => {
	let e = await W(), t = Dt(e?.ai?.customInstructions), n = Ot(t, e?.ai?.activeInstructionId);
	return {
		instructions: t,
		activeId: n?.id || "",
		activeInstruction: n
	};
}, At = async (e) => {
	let t = await W();
	await G({
		...t,
		ai: {
			...t.ai,
			activeInstructionId: e || ""
		}
	});
}, jt = async (e, t) => {
	let n = await W(), r = n?.ai?.customInstructions || [], i = {
		id: Tt(),
		label: e.trim() || "Untitled",
		instruction: t.trim(),
		enabled: !0,
		order: r.length
	};
	return await G({
		...n,
		ai: {
			...n.ai,
			customInstructions: [...r, i]
		}
	}), i;
}, Mt = async (e) => {
	if (!e.length) return [];
	let t = await W(), n = t?.ai?.customInstructions || [], r = e.map((e, t) => ({
		id: Tt(),
		label: e.label.trim() || "Untitled",
		instruction: e.instruction.trim(),
		enabled: e.enabled ?? !0,
		order: n.length + t
	}));
	return await G({
		...t,
		ai: {
			...t.ai,
			customInstructions: [...n, ...r]
		}
	}), r;
}, Nt = async (e, t) => {
	let n = await W(), r = n?.ai?.customInstructions || [], i = r.findIndex((t) => t.id === e);
	return i === -1 ? !1 : (r[i] = {
		...r[i],
		...t
	}, await G({
		...n,
		ai: {
			...n.ai,
			customInstructions: r
		}
	}), !0);
}, Pt = async (e) => {
	let t = await W(), n = t?.ai?.customInstructions || [], r = n.filter((t) => t.id !== e);
	if (r.length === n.length) return !1;
	let i = t.ai?.activeInstructionId === e ? "" : t.ai?.activeInstructionId || "";
	return await G({
		...t,
		ai: {
			...t.ai,
			customInstructions: r,
			activeInstructionId: i
		}
	}), !0;
}, Ft = [{
	id: "default",
	title: "Default",
	content: "Process the provided content clearly and concisely.",
	enabled: !0
}], It = (e = {}) => {
	let t = r({
		instructions: [],
		activeId: "",
		editingId: null,
		newLabel: "",
		newInstruction: "",
		isAdding: !1
	}), i = n`<div class="custom-instructions-editor">
        <div class="ci-row">
            <div class="ci-header">
                <h4>Custom Instructions</h4>
                <p class="ci-desc">Define custom instructions for AI operations. These can be activated for "Recognize & Copy" and selected in the Work Center.</p>
            </div>

            <div class="ci-active-select">
                <label>
                    <span>Active instruction:</span>
                    <select class="ci-select" data-action="select-active">
                        <option value="">None (use default)</option>
                    </select>
                </label>
            </div>
        </div>

        <div class="ci-list" data-list></div>

        <div class="ci-add-form" data-add-form hidden>
            <input type="text" class="ci-input" data-field="label" placeholder="Instruction label..." />
            <textarea class="ci-textarea" data-field="instruction" placeholder="Enter your custom instruction..." rows="4"></textarea>
            <div class="ci-add-actions">
                <button class="btn small primary" type="button" data-action="save-new">Add</button>
                <button class="btn small" type="button" data-action="cancel-add">Cancel</button>
            </div>
        </div>

        <div class="ci-actions">
            <button class="btn small" type="button" data-action="add">+ Add Instruction</button>
            <button class="btn small" type="button" data-action="add-templates">Add Templates</button>
        </div>
    </div>`, a = i.querySelector("[data-list]"), o = i.querySelector("[data-action='select-active']"), s = i.querySelector("[data-add-form]"), c = i.querySelector("[data-field='label']"), l = i.querySelector("[data-field='instruction']"), u = () => {
		a.replaceChildren();
		let r = t.instructions ?? [];
		if (!r.length) {
			a.append(n`<div class="ci-empty">No custom instructions. Add one or use templates.</div>`);
			return;
		}
		for (let i of r) {
			let r = t.editingId === i.id, o = t.activeId === i.id, s = n`<div class="ci-item ${o ? "active" : ""}" data-id="${i.id}">
                <div class="ci-item-header">
                    <span class="ci-item-label">${i.label}</span>
                    <div class="ci-item-actions">
                        ${o ? n`<span class="ci-badge active">Active</span>` : n`<button class="btn tiny" type="button" data-action="activate">Use</button>`}
                        <button class="btn tiny" type="button" data-action="edit">Edit</button>
                        <button class="btn tiny danger" type="button" data-action="delete">×</button>
                    </div>
                </div>
                ${r ? n`<div class="ci-edit-form">
                        <input type="text" class="ci-input" data-edit-field="label" value="${i.label}" />
                        <textarea class="ci-textarea" data-edit-field="instruction" rows="4">${i.instruction}</textarea>
                        <div class="ci-edit-actions">
                            <button class="btn small primary" type="button" data-action="save-edit">Save</button>
                            <button class="btn small" type="button" data-action="cancel-edit">Cancel</button>
                        </div>
                    </div>` : n`<div class="ci-item-preview">${f(i.instruction, 120)}</div>`}
            </div>`;
			s.addEventListener("click", (n) => {
				let r = n.target.closest("[data-action]")?.getAttribute("data-action");
				if (r === "activate" && At(i.id).then(p).then(() => e.onUpdate?.()), r === "edit" && (t.editingId = i.id, u()), r === "delete" && confirm(`Delete "${i.label}"?`) && Pt(i.id).then(p).then(() => e.onUpdate?.()), r === "save-edit") {
					let n = s.querySelector("[data-edit-field='label']"), r = s.querySelector("[data-edit-field='instruction']");
					Nt(i.id, {
						label: n.value.trim() || i.label,
						instruction: r.value.trim()
					}).then(() => (t.editingId = null, p())).then(() => e.onUpdate?.());
				}
				r === "cancel-edit" && (t.editingId = null, u());
			}), a.append(s);
		}
	}, d = () => {
		o.replaceChildren(), o.append(n`<option value="">None (use default)</option>`);
		for (let e of t.instructions ?? []) {
			let r = n`<option value="${e.id}">${e.label}</option>`;
			e.id === t.activeId && (r.selected = !0), o.append(r);
		}
	}, f = (e, t) => !e || e.length <= t ? e || "" : e.slice(0, t).trim() + "…", p = async () => {
		let e = await kt(), n = Array.isArray(e) ? {
			instructions: e,
			activeId: "",
			activeInstruction: null
		} : e;
		t.instructions = n?.instructions ?? [], t.activeId = n?.activeId ?? "", u(), d();
	};
	return i.addEventListener("click", (n) => {
		let r = n.target.closest("[data-action]")?.getAttribute("data-action");
		if (r === "add" && (t.isAdding = !0, s.hidden = !1, c.value = "", l.value = "", c.focus()), r === "cancel-add" && (t.isAdding = !1, s.hidden = !0), r === "save-new") {
			let n = c.value.trim(), r = l.value.trim();
			if (!r) {
				l.focus();
				return;
			}
			jt(n || "Custom", r).then((e) => {
				if (e) return t.isAdding = !1, s.hidden = !0, p();
			}).then(() => e.onUpdate?.());
		}
		if (r === "add-templates") {
			let n = new Set((t.instructions ?? []).map((e) => e.label.trim().toLowerCase())), r = Ft.filter((e) => !n.has(e.label.trim().toLowerCase()));
			if (!r.length) {
				alert("All templates are already added.");
				return;
			}
			Mt(r.map((e) => ({
				label: e.label,
				instruction: e.instruction,
				enabled: e.enabled
			}))).then(p).then(() => e.onUpdate?.());
		}
	}), o.addEventListener("change", () => {
		At(o.value || null).then(p).then(() => e.onUpdate?.());
	}), p(), i;
}, Lt = (e) => n`<section class="card settings-tab-panel" data-tab-panel="instructions" data-section="instructions">
      <h3>Recognition Instructions</h3>
      <div data-custom-instructions="editor">
        ${It({ onUpdate: () => e("Instructions updated.") })}
      </div>
    </section>`, Rt = () => n`<section class="card settings-tab-panel" data-tab-panel="extension" data-section="extension" hidden>
      <h3>Extension</h3>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="core.ntpEnabled" />
        <span>Enable New Tab Page (offline Basic)</span>
      </label>
    </section>`, zt = /* @__PURE__ */ new Map(), X = (e) => {
	let t = String(e?.id || "").trim();
	if (!t) return () => {};
	let n = {
		...e,
		id: t
	};
	return zt.set(t, n), () => {
		zt.get(t) === n && zt.delete(t);
	};
}, Bt = () => [...zt.values()].sort((e, t) => (e.order ?? 100) - (t.order ?? 100) || e.id.localeCompare(t.id)), Vt = (e, t) => {
	if (!(!e || !t)) return t.split(".").reduce((e, t) => e == null ? e : e[t], e);
}, Ht = (e, t, n) => {
	if (!e || !t) return;
	let r = t.split("."), i = e;
	for (let e = 0; e < r.length - 1; e += 1) {
		let t = r[e];
		(i[t] == null || typeof i[t] != "object") && (i[t] = {}), i = i[t];
	}
	i[r[r.length - 1]] = n;
}, Ut = (e) => {
	let t = e, n = (e.getAttribute("data-field-type") || "").toLowerCase();
	if (n === "boolean" || t.type === "checkbox") return !!t.checked;
	let r = "value" in e ? String(e.value ?? "") : "";
	if (n === "number" || t.type === "number") {
		let e = Number(r);
		return Number.isFinite(e) ? e : void 0;
	}
	if (n === "json") try {
		return r.trim() ? JSON.parse(r) : void 0;
	} catch {
		return;
	}
	return r;
}, Wt = (e, t) => {
	e.querySelectorAll("[data-field]").forEach((e) => {
		let n = e.getAttribute("data-field");
		if (!n) return;
		let r = Vt(t, n);
		if (r === void 0) return;
		let i = e;
		i.type === "checkbox" ? i.checked = !!r : i.getAttribute("data-field-type") === "json" ? i.value = (() => {
			try {
				return typeof r == "string" ? r : JSON.stringify(r, null, 2);
			} catch {
				return "";
			}
		})() : "value" in i && (i.value = String(r ?? ""));
	});
}, Gt = (e, t) => {
	e.querySelectorAll("[data-field]").forEach((e) => {
		let n = e.getAttribute("data-field");
		if (!n) return;
		let r = Ut(e);
		r !== void 0 && Ht(t, n, r);
	});
}, Kt = "[data-settings-tabs]", qt = ".settings-screen__body", Jt = () => {
	try {
		let e = globalThis;
		if (e?.chrome?.runtime?.id) return "crx";
		if (e?.Capacitor?.isNativePlatform?.()) return "capacitor";
		if (e?.__CWS_NATIVE__ === !0) return "native";
		if (typeof document < "u") return "web";
	} catch {}
	return "unknown";
}, Yt = () => Bt().filter((e) => !e.requiresView || de(e.requiresView)), Xt = (e, t) => {
	let r = e.querySelector(Kt), i = e.querySelector(qt);
	if (!(!r || !i)) for (let a of Yt()) {
		if (e.querySelector(`[data-tab-panel="${a.id}"]`)) continue;
		let o = n`<button class="settings-tab-btn" type="button" role="tab"
            data-action="switch-settings-tab" data-tab="${a.id}"
            data-contributed-tab aria-selected="false">${a.label}</button>`, s = r.querySelector("[data-extension-tab]");
		s ? r.insertBefore(o, s) : r.appendChild(o);
		let c = null;
		try {
			c = a.render(t);
		} catch (e) {
			console.warn(`[settings] contribution '${a.id}' render failed:`, e);
		}
		if (!c) continue;
		let l;
		c.matches?.("[data-tab-panel]") ? (l = c, l.classList.add("card", "settings-tab-panel"), l.setAttribute("data-tab-panel", a.id), l.setAttribute("data-contributed-panel", ""), l.hidden = !0) : (l = n`<section class="card settings-tab-panel" data-tab-panel="${a.id}" data-contributed-panel hidden></section>`, l.appendChild(c)), i.appendChild(l);
	}
}, Zt = (e, t) => {
	for (let n of Yt()) {
		let r = e.querySelector(`[data-tab-panel="${n.id}"]`);
		r && t(n, r);
	}
}, Qt = (e, t, n) => {
	Zt(e, (e, r) => {
		try {
			e.manualFields || Wt(r, t), e.load?.(t, r, n);
		} catch (t) {
			console.warn(`[settings] contribution '${e.id}' load failed:`, t);
		}
	});
}, $t = (e, t, n) => {
	Zt(e, (e, r) => {
		try {
			e.manualFields || Gt(r, t), e.save?.(t, r, n);
		} catch (t) {
			console.warn(`[settings] contribution '${e.id}' save failed:`, t);
		}
	});
}, en = () => Yt().map((e) => e.id), tn = async (e) => {
	let t = e.cwsp;
	if (!t || typeof t != "object") return;
	let n = typeof t.relayHttpsUrl == "string" ? t.relayHttpsUrl : "", r = typeof t.directHttpsUrl == "string" ? t.directHttpsUrl : "";
	if (!n.trim() && !r.trim()) return;
	let i = await Me({
		relayHttpsUrl: n,
		directHttpsUrl: r
	});
	i.relayHttpsUrl !== void 0 && (t.relayHttpsUrl = i.relayHttpsUrl), i.directHttpsUrl !== void 0 && (t.directHttpsUrl = i.directHttpsUrl);
}, Z = (e, t, r = "", i = "text") => n`<label class="field"><span>${e}</span><input class="form-input" type="${i}" autocomplete="off" data-field="${t}" placeholder="${r}" /></label>`, nn = (e, t, r = {}) => n`<label class="field"><span>${e}</span><input class="form-input" type="number" data-field="${t}" min="${r.min ?? ""}" max="${r.max ?? ""}" step="${r.step ?? ""}" placeholder="${r.placeholder ?? ""}" /></label>`, Q = (e, t) => n`<label class="field checkbox form-checkbox"><input type="checkbox" data-field="${t}" /><span>${e}</span></label>`, rn = (e, t, r) => {
	let i = document.createElement("select");
	i.className = "form-select", i.setAttribute("data-field", t);
	for (let [e, t] of r) {
		let n = document.createElement("option");
		n.value = e, n.textContent = t, i.appendChild(n);
	}
	return n`<label class="field"><span>${e}</span>${i}</label>`;
}, $ = (e) => n`<p class="field-hint">${e}</p>`, an = (e) => n`<h4>${e}</h4>`, on = (e, t, r) => {
	let i = n`<section class="card settings-tab-panel" data-tab-panel="${e}" hidden><h3>${t}</h3></section>`;
	for (let e of r) typeof e == "string" ? i.appendChild(an(e)) : i.appendChild(e);
	return i;
}, sn = !1, cn = () => {
	if (sn) return;
	sn = !0, X({
		id: "cwsp",
		label: "CWSP",
		order: 55,
		render: () => on("cwsp", "CWSP", [
			$("Connect to the CWSP endpoint; outbound clipboard/AirPad fan-out and inbound clipboard policy below."),
			"Connection",
			Z("Relay host (IP or domain)", "cwsp.relayHttpsUrl", "192.168.0.200"),
			$("Coordinator / gateway. Port is auto-discovered (8443, 443, 8080, …) when omitted."),
			Z("Direct host (IP or domain)", "cwsp.directHttpsUrl", "192.168.0.110"),
			$("Direct AirPad target. Omit https:// — protocol and port are resolved automatically."),
			Z("Client id", "cwsp.clientId", "L-192.168.0.196"),
			Z("Identification token", "cwsp.token", "token", "password"),
			Z("Destination node ids", "cwsp.destinationNodeIds", "* or L-…;L-…"),
			"Clipboard direction",
			Z("Write clipboard only from", "cwsp.clipboardWriteSourceId", "L-192.168.0.110"),
			$("Accept inbound clipboard writes only from this origin (incl. via relay). Use * for any."),
			Q("Accept inbound clipboard", "cwsp.acceptInboundClipboard"),
			Q("Share / context-menu broadcasts", "cwsp.shareBroadcast"),
			Q("Reverse (listener) mode", "cwsp.reverseServerMode"),
			"Transport",
			rn("Wire transport", "cwsp.wireTransport", [["ws", "Native WebSocket (/ws)"]]),
			rn("Connection role", "cwsp.connectionRole", [
				["initiator", "Initiator (connect-to)"],
				["listener", "Listener (connected-from)"],
				["exchanger", "Exchanger (both)"]
			])
		])
	}), X({
		id: "reader",
		label: "Reader",
		order: 60,
		requiresView: "viewer",
		render: () => on("reader", "Reader", [nn("Default zoom (%)", "views.reader.zoomPercent", {
			min: "50",
			max: "300",
			step: "10",
			placeholder: "100"
		}), Q("Wrap long lines", "views.reader.wrapLongLines")])
	}), X({
		id: "workcenter",
		label: "Work Center",
		order: 65,
		requiresView: "workcenter",
		render: () => on("workcenter", "Work Center", [Q("Auto-run pinned tasks", "views.workcenter.autoRunPinned"), Z("Default instruction id", "views.workcenter.defaultInstructionId", "(none)")])
	}), X({
		id: "airpad",
		label: "AirPad",
		order: 70,
		requiresView: "airpad",
		render: () => on("airpad", "AirPad", [
			nn("Pointer sensitivity", "views.airpad.pointerSensitivity", {
				min: "0.2",
				max: "5",
				step: "0.1",
				placeholder: "1.0"
			}),
			Q("Invert scroll", "views.airpad.invertScroll"),
			Q("Send haptics", "views.airpad.haptics")
		])
	});
	let e = Jt();
	if ((e === "capacitor" || e === "native") && X({
		id: "nativescript",
		label: "NativeScript",
		order: 58,
		render: () => on("nativescript", "NativeScript", [
			$("NativeScript runs as a native connector; the Capacitor WebView is the primary UI."),
			Q("Use native clipboard service", "cwsp.ns.nativeClipboard"),
			Q("Foreground daemon", "cwsp.ns.bridgeDaemonEnabled"),
			Q("Clipboard monitor (overlay)", "cwsp.ns.clipboardMonitor"),
			Q("Native AirPad input (touch/tilt)", "cwsp.ns.nativeAirpad"),
			rn("NS transport", "cwsp.ns.transport", [["ws", "Native WebSocket (/ws)"]]),
			rn("NS role", "cwsp.ns.role", [
				["initiator", "Initiator"],
				["listener", "Listener"],
				["exchanger", "Exchanger"]
			]),
			Q("Accept contacts data (future)", "cwsp.ns.acceptContactsData"),
			Q("Accept SMS data (future)", "cwsp.ns.acceptSmsData")
		])
	}), e === "capacitor" || e === "native" || e === "crx") {
		let t = e === "crx" ? "Extension" : "Device";
		X({
			id: "device",
			label: t,
			order: 80,
			render: () => on("device", `${t} preferences`, [
				Q("Start CWSP wire on launch", "views.device.autoConnect"),
				Q("Keep background daemon", "views.device.keepDaemon"),
				$("On Android, grant overlay / notifications when prompted at first launch.")
			])
		});
	}
}, ln = (e) => {
	let t = null, r = (e) => {
		t && (t.textContent = e, e && setTimeout(() => t && (t.textContent = ""), 1500));
	}, i = n`<div class="view-settings">
    ${nt()}
    <div class="settings-screen__body">
      ${rt()}
      ${it()}
      ${at()}
      ${ot()}
      ${st()}
      ${Lt(r)}
      ${Rt()}
    </div>
    ${tt()}
  </div>`;
	cn();
	let a = {
		isExtension: e.isExtension,
		surface: Jt()
	};
	Xt(i, a), de("viewer") || (i.querySelector("[data-tab-panel=\"markdown\"]")?.remove(), i.querySelector("[data-action=\"switch-settings-tab\"][data-tab=\"markdown\"]")?.remove());
	let o = (e) => i.querySelector(e);
	t = i.querySelector("[data-note]");
	let s = o("[data-field=\"ai.baseUrl\"]"), d = o("[data-field=\"ai.apiKey\"]"), f = o("[data-field=\"ui.showKey\"]"), p = o("[data-field=\"ai.model\"]"), m = o("[data-field=\"ai.customModel\"]"), h = i.querySelector("[data-field-group=\"ai.customModel\"]"), ee = o("[data-field=\"ai.defaultReasoningEffort\"]"), te = o("[data-field=\"ai.defaultVerbosity\"]"), ne = o("[data-field=\"ai.maxOutputTokens\"]"), re = o("[data-field=\"ai.contextTruncation\"]"), ie = o("[data-field=\"ai.promptCacheRetention\"]"), ae = o("[data-field=\"ai.maxToolCalls\"]"), oe = o("[data-field=\"ai.parallelToolCalls\"]"), se = o("[data-field=\"ai.requestTimeout.low\"]"), ce = o("[data-field=\"ai.requestTimeout.medium\"]"), le = o("[data-field=\"ai.requestTimeout.high\"]"), ue = o("[data-field=\"ai.maxRetries\"]"), g = o("[data-field=\"ai.shareTargetMode\"]"), _ = () => {
		let e = (p?.value || "").trim() === "custom";
		h && (h.hidden = !e), m && (m.disabled = !e);
	};
	if (p) {
		p.replaceChildren();
		for (let e of fe) {
			let t = document.createElement("option");
			t.value = e, t.textContent = e, p.append(t);
		}
		let e = document.createElement("option");
		e.value = "custom", e.textContent = "Custom...", p.append(e), p.addEventListener("change", _);
	}
	m?.addEventListener("focus", () => {
		p && (p.value = "custom", _());
	});
	let he = o("[data-field=\"ai.autoProcessShared\"]"), v = o("[data-field=\"ai.responseLanguage\"]"), ge = o("[data-field=\"ai.translateResults\"]"), _e = o("[data-field=\"ai.generateSvgGraphics\"]"), y = o("[data-field=\"speech.language\"]"), b = o("[data-field=\"appearance.theme\"]"), Se = o("[data-field=\"appearance.fontSize\"]"), x = o("[data-field=\"appearance.markdown.preset\"]"), Ce = o("[data-field=\"appearance.markdown.fontFamily\"]"), we = o("[data-field=\"appearance.markdown.fontSizePx\"]"), S = o("[data-field=\"appearance.markdown.lineHeight\"]"), Te = o("[data-field=\"appearance.markdown.contentMaxWidthPx\"]"), C = o("[data-field=\"appearance.markdown.printScale\"]"), Ee = o("[data-field=\"appearance.markdown.page.size\"]"), De = o("[data-field=\"appearance.markdown.page.orientation\"]"), Oe = o("[data-field=\"appearance.markdown.page.marginMm\"]"), ke = o("[data-field=\"appearance.markdown.modules.typography\"]"), Ae = o("[data-field=\"appearance.markdown.modules.lists\"]"), Me = o("[data-field=\"appearance.markdown.modules.tables\"]"), Ne = o("[data-field=\"appearance.markdown.modules.codeBlocks\"]"), w = o("[data-field=\"appearance.markdown.modules.blockquotes\"]"), Pe = o("[data-field=\"appearance.markdown.modules.media\"]"), Fe = o("[data-field=\"appearance.markdown.modules.printBreaks\"]"), T = o("[data-field=\"appearance.markdown.plugins.smartTypography\"]"), E = o("[data-field=\"appearance.markdown.plugins.softBreaksAsBr\"]"), Ie = o("[data-field=\"appearance.markdown.plugins.externalLinksNewTab\"]"), D = i.querySelector("[data-field=\"appearance.markdown.customCss\"]"), Le = i.querySelector("[data-field=\"appearance.markdown.printCss\"]"), Re = i.querySelector("[data-field=\"appearance.markdown.extensions\"]"), ze = o("[data-field=\"core.ntpEnabled\"]"), O = o("[data-field=\"core.mode\"]"), k = o("[data-field=\"core.endpointUrl\"]"), A = o("[data-field=\"core.userId\"]"), j = o("[data-field=\"core.userKey\"]"), M = o("[data-field=\"core.preferBackendSync\"]"), N = o("[data-field=\"core.encrypt\"]"), P = o("[data-field=\"core.appClientId\"]"), F = o("[data-field=\"core.allowInsecureTls\"]"), I = o("[data-field=\"core.ops.allowUnencrypted\"]"), Be = o("[data-field=\"core.admin.httpsOrigin\"]"), L = o("[data-field=\"core.admin.httpOrigin\"]"), Ve = o("[data-field=\"core.admin.path\"]"), He = o("[data-field=\"core.useCoreIdentityForAirPad\"]"), R = o("[data-field=\"core.socket.accessToken\"]"), Ue = o("[data-field=\"core.socket.routeTarget\"]"), Ge = o("[data-field=\"core.socket.clientAccessToken\"]"), qe = o("[data-field=\"core.socket.allowAccessTokenWithoutUserKey\"]"), ct = o("[data-field=\"shell.maintainHubSocketConnection\"]"), lt = o("[data-field=\"shell.clipboardBroadcastTargets\"]"), H = o("[data-field=\"shell.pushLocalClipboardToLan\"]"), ut = o("[data-field=\"shell.clipboardPushIntervalMs\"]"), dt = o("[data-field=\"shell.enableRemoteClipboardBridge\"]"), ft = o("[data-field=\"shell.acceptInboundClipboardData\"]"), U = o("[data-field=\"shell.clipboardInboundAllowIds\"]"), pt = o("[data-field=\"shell.accessTokenBypassesClipboardAllowlist\"]"), mt = o("[data-field=\"shell.clipboardShareDestinationIds\"]"), ht = o("[data-field=\"shell.applyRemoteClipboardToDevice\"]"), gt = o("[data-field=\"shell.acceptContactsBridgeData\"]"), W = o("[data-field=\"shell.acceptSmsBridgeData\"]"), G = o("[data-field=\"shell.enableNativeSms\"]"), K = o("[data-field=\"shell.enableNativeContacts\"]"), _t = i.querySelector("[data-admin-preview]"), q = i.querySelector("[data-mcp-section]"), vt = i.querySelector("[data-section=\"extension\"]"), yt = i.querySelector("[data-extension-tab]");
	if (v) {
		v.replaceChildren();
		let e = document.createElement("option");
		e.value = "auto", e.textContent = "Auto-detect", v.append(e);
		let t = document.createElement("option");
		t.value = "follow", t.textContent = "Follow source/context", v.append(t);
		for (let e of Ye()) {
			let t = document.createElement("option");
			t.value = e, t.textContent = e === "ru" ? "Russian" : e === "en" ? "English" : e, v.append(t);
		}
	}
	if (y) {
		y.replaceChildren();
		for (let e of Je()) {
			let t = document.createElement("option");
			t.value = e, t.textContent = Ke(e), y.append(t);
		}
	}
	i.addEventListener("input", (e) => {
		e.target?.matches?.("[data-field^=\"core.\"]") && St();
	}), i.addEventListener("change", (e) => {
		e.target?.matches?.("[data-field^=\"core.\"]") && St();
	});
	let bt = (e) => {
		let t = e || "ai";
		i.querySelector("[data-settings-tabs]")?.setAttribute("data-active-tab", t);
		let n = i.querySelectorAll("[data-action=\"switch-settings-tab\"][data-tab]");
		for (let e of Array.from(n)) {
			let n = e, r = n.getAttribute("data-tab") === t;
			n.classList.toggle("is-active", r), n.setAttribute("aria-selected", String(r));
		}
		let r = i.querySelectorAll("[data-tab-panel]");
		for (let e of Array.from(r)) {
			let n = e, r = n.getAttribute("data-tab-panel") === t;
			r && (n.hidden = !1), n.classList.toggle("is-active", r);
		}
	};
	for (let e of i.querySelectorAll("[data-settings-tabs] button[type=\"button\"][data-action=\"switch-settings-tab\"][data-tab]")) e.addEventListener("click", (t) => {
		t.preventDefault(), t.stopPropagation(), bt(e.getAttribute("data-tab") || "ai");
	});
	let xt = (e) => {
		let t = (e || "").trim().toLowerCase();
		return t ? t === "style" || t === "styles" || t === "styling" ? "markdown" : new Set([
			"appearance",
			"markdown",
			"ai",
			"mcp",
			"server",
			"instructions",
			"extension",
			...en()
		]).has(t) ? t : "ai" : "ai";
	}, J = () => ({
		mode: O?.value || "native",
		endpointUrl: k?.value?.trim() || "",
		userId: A?.value?.trim() || "",
		userKey: j?.value?.trim() || "",
		encrypt: !!N?.checked,
		preferBackendSync: (M?.checked ?? !0) !== !1,
		appClientId: P?.value?.trim() || "",
		allowInsecureTls: !!F?.checked,
		useCoreIdentityForAirPad: (He?.checked ?? !0) !== !1,
		socket: {
			accessToken: R?.value?.trim() || "",
			routeTarget: Ue?.value?.trim() || "",
			selfId: "",
			clientAccessToken: Ge?.value?.trim() || "",
			allowAccessTokenWithoutUserKey: !!qe?.checked
		},
		admin: {
			httpsOrigin: Be?.value?.trim() || "",
			httpOrigin: L?.value?.trim() || "",
			path: Ve?.value?.trim() || "/"
		},
		ops: { allowUnencrypted: !!I?.checked }
	}), St = () => {
		if (!_t) return;
		let e = pe(J());
		_t.textContent = `Resolved: ${e.https} · ${e.http}`;
	}, Y = (e) => {
		try {
			be(ye.EXPLORER_PATH, e), xe("explorer"), ve({
				type: "content-explorer",
				destination: "explorer",
				data: {
					action: "view",
					path: e
				},
				metadata: { source: "settings" }
			}), r(`Explorer: ${e}`);
		} catch (e) {
			console.warn("[Settings] Failed to open explorer path:", e), r("Failed to open Explorer path.");
		}
	};
	if (Promise.resolve(u()).then((t) => {
		s && (s.value = (t?.ai?.baseUrl || "").trim()), d && (d.value = (t?.ai?.apiKey || "").trim());
		let n = (t?.ai?.model || "gpt-5.4").trim(), r = (t?.ai?.customModel || "").trim();
		if (p) {
			let e = fe.includes(n);
			n === "custom" || !e && n ? (p.value = "custom", m && (m.value = r || n)) : (p.value = e ? n : "gpt-5.4", m && (m.value = r)), _();
		}
		if (ee && (ee.value = t?.ai?.defaultReasoningEffort || "medium"), te && (te.value = t?.ai?.defaultVerbosity || "medium"), ne && (ne.value = String(t?.ai?.maxOutputTokens ?? 4e5)), re && (re.value = t?.ai?.contextTruncation || "disabled"), ie && (ie.value = t?.ai?.promptCacheRetention || "in-memory"), ae && (ae.value = String(t?.ai?.maxToolCalls ?? 8)), oe && (oe.checked = (t?.ai?.parallelToolCalls ?? !0) !== !1), se && (se.value = String(t?.ai?.requestTimeout?.low ?? 6e4)), ce && (ce.value = String(t?.ai?.requestTimeout?.medium ?? 3e5)), le && (le.value = String(t?.ai?.requestTimeout?.high ?? 9e5)), ue && (ue.value = String(t?.ai?.maxRetries ?? 2)), g && (g.value = t?.ai?.shareTargetMode || "recognize"), he && (he.checked = (t?.ai?.autoProcessShared ?? !0) !== !1), v && (v.value = t?.ai?.responseLanguage || "auto"), ge && (ge.checked = !!t?.ai?.translateResults), _e && (_e.checked = !!t?.ai?.generateSvgGraphics), y && (y.value = t?.speech?.language || "en-US"), b && (b.value = t?.appearance?.theme || "auto"), Se && (Se.value = t?.appearance?.fontSize || "medium"), x && (x.value = t?.appearance?.markdown?.preset || "default"), Ce && (Ce.value = t?.appearance?.markdown?.fontFamily || "system"), we && (we.value = String(t?.appearance?.markdown?.fontSizePx ?? 16)), S && (S.value = String(t?.appearance?.markdown?.lineHeight ?? 1.7)), Te && (Te.value = String(t?.appearance?.markdown?.contentMaxWidthPx ?? 860)), C && (C.value = String(t?.appearance?.markdown?.printScale ?? 1)), Ee && (Ee.value = t?.appearance?.markdown?.page?.size || "auto"), De && (De.value = t?.appearance?.markdown?.page?.orientation || "portrait"), Oe && (Oe.value = String(t?.appearance?.markdown?.page?.marginMm ?? 12)), ke && (ke.checked = (t?.appearance?.markdown?.modules?.typography ?? !0) !== !1), Ae && (Ae.checked = (t?.appearance?.markdown?.modules?.lists ?? !0) !== !1), Me && (Me.checked = (t?.appearance?.markdown?.modules?.tables ?? !0) !== !1), Ne && (Ne.checked = (t?.appearance?.markdown?.modules?.codeBlocks ?? !0) !== !1), w && (w.checked = (t?.appearance?.markdown?.modules?.blockquotes ?? !0) !== !1), Pe && (Pe.checked = (t?.appearance?.markdown?.modules?.media ?? !0) !== !1), Fe && (Fe.checked = (t?.appearance?.markdown?.modules?.printBreaks ?? !0) !== !1), T && (T.checked = !!t?.appearance?.markdown?.plugins?.smartTypography), E && (E.checked = !!t?.appearance?.markdown?.plugins?.softBreaksAsBr), Ie && (Ie.checked = (t?.appearance?.markdown?.plugins?.externalLinksNewTab ?? !0) !== !1), D && (D.value = (t?.appearance?.markdown?.customCss || "").trim()), Le && (Le.value = (t?.appearance?.markdown?.printCss || "").trim()), Re) {
			let e = Array.isArray(t?.appearance?.markdown?.extensions) ? t.appearance?.markdown?.extensions : [];
			Re.value = e.length > 0 ? JSON.stringify(e, null, 2) : "";
		}
		if (ze && (ze.checked = !!t?.core?.ntpEnabled), O && (O.value = t?.core?.mode || "native"), k && (k.value = (t?.core?.endpointUrl || "").trim()), A && (A.value = (t?.core?.userId || "").trim()), j && (j.value = (t?.core?.userKey || "").trim()), M && (M.checked = (t?.core?.preferBackendSync ?? !0) !== !1), N && (N.checked = !!t?.core?.encrypt), P && (P.value = (t?.core?.appClientId || "").trim()), He && (He.checked = (t?.core?.useCoreIdentityForAirPad ?? !0) !== !1), R && (R.value = (t?.core?.socket?.accessToken || t?.core?.socket?.airpadAuthToken || "").trim()), Ue && (Ue.value = (t?.core?.socket?.routeTarget || t?.core?.socket?.selfId || "").trim()), Ge && (Ge.value = (t?.core?.socket?.clientAccessToken || "").trim()), qe && (qe.checked = (t?.core?.socket?.allowAccessTokenWithoutUserKey ?? !1) === !0), F && (F.checked = !!t?.core?.allowInsecureTls), I && (I.checked = !!t?.core?.ops?.allowUnencrypted), Be && (Be.value = (t?.core?.admin?.httpsOrigin || "").trim()), L && (L.value = (t?.core?.admin?.httpOrigin || "").trim()), Ve && (Ve.value = (t?.core?.admin?.path || "/").trim() || "/"), ct && (ct.checked = !!t?.shell?.maintainHubSocketConnection), lt && (lt.value = (t?.shell?.clipboardBroadcastTargets || "").trim()), H && (H.checked = !!t?.shell?.pushLocalClipboardToLan), ut) {
			let e = Number(t?.shell?.clipboardPushIntervalMs);
			ut.value = String(Number.isFinite(e) && e >= 800 ? Math.min(Math.round(e), 6e4) : 2e3);
		}
		dt && (dt.checked = (t?.shell?.enableRemoteClipboardBridge ?? !0) !== !1), ft && (ft.checked = (t?.shell?.acceptInboundClipboardData ?? !0) !== !1), U && (U.value = (t?.shell?.clipboardInboundAllowIds || "").trim()), pt && (pt.checked = (t?.shell?.accessTokenBypassesClipboardAllowlist ?? !1) === !0), mt && (mt.value = (t?.shell?.clipboardShareDestinationIds || "").trim()), ht && (ht.checked = (t?.shell?.applyRemoteClipboardToDevice ?? !0) !== !1), gt && (gt.checked = (t?.shell?.acceptContactsBridgeData ?? !1) === !0), W && (W.checked = (t?.shell?.acceptSmsBridgeData ?? !1) === !0), G && (G.checked = (t?.shell?.enableNativeSms ?? !0) !== !1), K && (K.checked = (t?.shell?.enableNativeContacts ?? !0) !== !1), St(), et(q, Array.isArray(t?.ai?.mcp) ? t.ai.mcp : []), We(t), c(t), Qt(i, t, a), e.onTheme?.(t?.appearance?.theme || "auto");
	}).catch(() => {
		et(q, []);
	}), f?.addEventListener("change", () => {
		!d || !f || (d.type = f.checked ? "text" : "password");
	}), b?.addEventListener("change", () => {
		let t = b.value || "auto";
		(async () => {
			try {
				let e = await u();
				c({
					...e,
					appearance: {
						...e.appearance || {},
						theme: t
					}
				});
			} catch {
				c({ appearance: {
					theme: t,
					fontSize: "medium"
				} });
			}
			e.onTheme?.(t);
		})();
	}), i.addEventListener("click", (t) => {
		let n = Ze(t);
		if (n?.closest?.("button[data-action=\"add-mcp-server\"]") && q) {
			q.querySelector(".mcp-empty-note")?.remove(), q.appendChild(Qe({
				id: `mcp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
				serverLabel: "",
				origin: "",
				clientKey: "",
				secretKey: ""
			}));
			return;
		}
		let o = n?.closest?.("button[data-action=\"remove-mcp-server\"]");
		if (o) {
			o.closest(".mcp-row")?.remove(), q && !q.querySelector("[data-mcp-id]") && et(q, []);
			return;
		}
		if (n?.closest?.("button[data-action=\"open-user-styles\"]")) {
			Y("/user/styles/");
			return;
		}
		if (n?.closest?.("button[data-action=\"open-assets-readonly\"]")) {
			Y("/assets/");
			return;
		}
		if (n?.closest?.("button[data-action=\"open-admin-https\"]")) {
			me(J(), "https");
			return;
		}
		if (n?.closest?.("button[data-action=\"open-admin-http\"]")) {
			me(J(), "http");
			return;
		}
		if (n?.closest?.("button[data-action=\"copy-admin-https\"]")) {
			let e = pe(J());
			navigator.clipboard?.writeText?.(e.https).then(() => r("HTTPS admin URL copied."), () => r("Copy failed."));
			return;
		}
		if (n?.closest?.("button[data-action=\"copy-admin-http\"]")) {
			let e = pe(J());
			navigator.clipboard?.writeText?.(e.http).then(() => r("HTTP admin URL copied."), () => r("Copy failed."));
			return;
		}
		if (n?.closest?.("button[data-action=\"open-native-app-settings\"]")) {
			import("./clipboard-device-Nn9-VGZF.js").then((e) => e.openAppClipboardRelatedSettings()).then(() => r("App settings opened (native shell only).")).catch(() => r("Native settings unavailable in this context."));
			return;
		}
		if (n?.closest?.("button[data-action=\"open-native-notification-settings\"]")) {
			import("./clipboard-device-Nn9-VGZF.js").then((e) => e.openNativeNotificationSettings?.()).then(() => r("Notification settings opened (native shell only).")).catch(() => r("Native settings unavailable in this context."));
			return;
		}
		n?.closest?.("button[data-action=\"save\"]") && (async () => {
			let t = await u(), n = [], o = Re?.value?.trim() || "";
			if (o) try {
				let e = JSON.parse(o);
				if (!Array.isArray(e)) throw Error("Markdown extensions JSON must be an array.");
				n = e;
			} catch (e) {
				bt("markdown"), r(e?.message || "Invalid Markdown extensions JSON.");
				return;
			}
			let f = {
				ai: {
					baseUrl: s?.value?.trim?.() || "",
					apiKey: d?.value?.trim?.() || "",
					model: p?.value || "gpt-5.4",
					customModel: p?.value === "custom" && m?.value?.trim?.() || "",
					defaultReasoningEffort: ee?.value || "medium",
					defaultVerbosity: te?.value || "medium",
					maxOutputTokens: z(ne?.value, 4e5),
					contextTruncation: re?.value || "disabled",
					promptCacheRetention: ie?.value || "in-memory",
					maxToolCalls: z(ae?.value, 8),
					parallelToolCalls: (oe?.checked ?? !0) !== !1,
					requestTimeout: {
						low: z(se?.value, 6e4),
						medium: z(ce?.value, 3e5),
						high: z(le?.value, 9e5)
					},
					maxRetries: z(ue?.value, 2),
					shareTargetMode: g?.value || "recognize",
					autoProcessShared: (he?.checked ?? !0) !== !1,
					responseLanguage: v?.value || "auto",
					translateResults: !!ge?.checked,
					generateSvgGraphics: !!_e?.checked,
					mcp: $e(q)
				},
				speech: { language: y?.value || "en-US" },
				core: {
					...t.core,
					ntpEnabled: V(ze, !!t.core?.ntpEnabled),
					mode: B(O, t.core?.mode || "native") || "native",
					endpointUrl: B(k, t.core?.endpointUrl || ""),
					userId: B(A, t.core?.userId || ""),
					userKey: B(j, t.core?.userKey || ""),
					encrypt: V(N, !!t.core?.encrypt),
					preferBackendSync: V(M, (t.core?.preferBackendSync ?? !0) !== !1),
					appClientId: B(P, t.core?.appClientId || ""),
					allowInsecureTls: V(F, !!t.core?.allowInsecureTls),
					useCoreIdentityForAirPad: V(He, (t.core?.useCoreIdentityForAirPad ?? !0) !== !1),
					socket: (() => {
						let e = { ...t.core?.socket || {} };
						return delete e.airpadAuthToken, {
							...e,
							accessToken: B(R, t.core?.socket?.accessToken || t.core?.socket?.airpadAuthToken || ""),
							routeTarget: B(Ue, t.core?.socket?.routeTarget || ""),
							selfId: "",
							clientAccessToken: B(Ge, t.core?.socket?.clientAccessToken || ""),
							allowAccessTokenWithoutUserKey: V(qe, !!t.core?.socket?.allowAccessTokenWithoutUserKey)
						};
					})(),
					admin: {
						...t.core?.admin || {},
						httpsOrigin: B(Be, t.core?.admin?.httpsOrigin || ""),
						httpOrigin: B(L, t.core?.admin?.httpOrigin || ""),
						path: B(Ve, t.core?.admin?.path || "/") || "/"
					},
					ops: {
						...t.core?.ops || {},
						allowUnencrypted: V(I, !!t.core?.ops?.allowUnencrypted)
					}
				},
				shell: {
					...t.shell || {},
					maintainHubSocketConnection: V(ct, !!t.shell?.maintainHubSocketConnection),
					clipboardBroadcastTargets: B(lt, t.shell?.clipboardBroadcastTargets || ""),
					pushLocalClipboardToLan: V(H, !!t.shell?.pushLocalClipboardToLan),
					clipboardPushIntervalMs: (() => {
						let e = ut?.value, n = z(e, t.shell?.clipboardPushIntervalMs ?? 2e3);
						return Math.min(6e4, Math.max(800, Math.round(n)));
					})(),
					enableRemoteClipboardBridge: V(dt, (t.shell?.enableRemoteClipboardBridge ?? !0) !== !1),
					acceptInboundClipboardData: V(ft, (t.shell?.acceptInboundClipboardData ?? !0) !== !1),
					clipboardInboundAllowIds: B(U, t.shell?.clipboardInboundAllowIds || ""),
					accessTokenBypassesClipboardAllowlist: V(pt, !!t.shell?.accessTokenBypassesClipboardAllowlist),
					clipboardShareDestinationIds: B(mt, t.shell?.clipboardShareDestinationIds || ""),
					applyRemoteClipboardToDevice: V(ht, (t.shell?.applyRemoteClipboardToDevice ?? !0) !== !1),
					acceptContactsBridgeData: V(gt, !!t.shell?.acceptContactsBridgeData),
					acceptSmsBridgeData: V(W, !!t.shell?.acceptSmsBridgeData),
					enableNativeSms: V(G, (t.shell?.enableNativeSms ?? !0) !== !1),
					enableNativeContacts: V(K, (t.shell?.enableNativeContacts ?? !0) !== !1)
				},
				appearance: {
					theme: b?.value || "auto",
					fontSize: Se?.value || "medium",
					markdown: {
						preset: x?.value || "default",
						fontFamily: Ce?.value || "system",
						fontSizePx: z(we?.value, 16),
						lineHeight: Xe(S?.value, 1.7, 1.1, 2.2),
						contentMaxWidthPx: z(Te?.value, 860),
						printScale: Xe(C?.value, 1, .5, 1.5),
						page: {
							size: Ee?.value || "auto",
							orientation: De?.value || "portrait",
							marginMm: z(Oe?.value, 12)
						},
						modules: {
							typography: (ke?.checked ?? !0) !== !1,
							lists: (Ae?.checked ?? !0) !== !1,
							tables: (Me?.checked ?? !0) !== !1,
							codeBlocks: (Ne?.checked ?? !0) !== !1,
							blockquotes: (w?.checked ?? !0) !== !1,
							media: (Pe?.checked ?? !0) !== !1,
							printBreaks: (Fe?.checked ?? !0) !== !1
						},
						plugins: {
							smartTypography: !!T?.checked,
							softBreaksAsBr: !!E?.checked,
							externalLinksNewTab: (Ie?.checked ?? !0) !== !1
						},
						customCss: D?.value || "",
						printCss: Le?.value || "",
						extensions: n || []
					}
				}
			};
			$t(i, f, a), await tn(f), f.core?.endpointUrl?.trim() && (f.core.endpointUrl = await je(f.core.endpointUrl.trim()));
			let h = await l(f);
			import("./hub-socket-boot-Getg8BWy.js").then((e) => e.applyHubSocketFromSettings(h)), c(h), e.onTheme?.(h.appearance?.theme || "auto"), r("Saved.");
		})().catch((e) => r(String(e)));
	}), e.isExtension) {
		vt && (vt.hidden = !1), yt && (yt.hidden = !1);
		let e = n`<div class="ext-note">Extension mode: settings are stored in <code>chrome.storage.local</code>.</div>`;
		i.append(e);
	}
	return bt(xt(e.initialTab)), _(), i;
}, un = /* @__PURE__ */ ee({
	SettingsView: () => fn,
	createSettingsView: () => ln,
	createView: () => pn,
	default: () => pn,
	getSettingsContributions: () => Bt,
	registerSettingsContribution: () => X
}), dn = {
	appearance: {
		theme: "auto",
		fontSize: "medium"
	},
	ai: { autoProcess: !0 },
	general: {
		autosave: !0,
		notifications: !0
	}
}, fn = class {
	id = "settings";
	name = "Settings";
	icon = "gear";
	options;
	shellContext;
	element = null;
	settings = t(dn);
	_sheet = null;
	_shadowSheet = null;
	_styleEl = null;
	lifecycle = {
		onUnmount: () => {
			this.clearSettingsStylesheet();
		},
		onShow: () => {
			this.applySettingsStylesheet();
		},
		onHide: () => {
			this.clearSettingsStylesheet();
		}
	};
	constructor(e = {}) {
		this.options = e, this.shellContext = e.shellContext;
	}
	render(e) {
		return e && (this.options = {
			...this.options,
			...e
		}, this.shellContext = e.shellContext || this.shellContext), this.loadSettings(), this.element = ln({
			isExtension: globalThis.chrome !== void 0 && !!globalThis.chrome?.runtime?.id,
			initialTab: e?.params?.tab || e?.params?.focus,
			onTheme: (e) => {
				this.options.onThemeChange?.(e);
			}
		}), this.element;
	}
	getToolbar() {
		return null;
	}
	setupEventHandlers() {}
	loadSettings() {
		this.settings.value = { ...dn };
	}
	saveSettings() {
		this.options.onSettingsChange?.(this.settings.value);
	}
	resetSettings() {
		this.settings.value = { ...dn }, this.updateUI();
	}
	updateUI() {
		if (!this.element) return;
		let e = this.element.querySelectorAll("[data-setting]");
		for (let t of e) {
			let [e, n] = t.dataset.setting.split("."), r = this.settings.value[e][n];
			t.type === "checkbox" ? t.checked = !!r : t.value = r || "";
		}
	}
	showMessage(e) {
		this.shellContext?.showMessage(e);
	}
	applySettingsStylesheet() {
		if (this._sheet || this._shadowSheet || this._styleEl) return;
		let e = this.element;
		if (!e?.isConnected) return;
		let t = "@charset \"UTF-8\";@layer settings-view{.view-settings{color-scheme:inherit;--sv-bg: var(--color-surface, light-dark(#eef1f6, #0f1318));--sv-fg: var(--color-on-surface, light-dark(#12151a, #e8edf2));--sv-muted: var(--color-on-surface-variant, light-dark(#5c6570, #a8b0bc));--sv-outline: var(--color-outline-variant, light-dark(#c5cdd8, #3d4755));--sv-surface-1: var(--color-surface-container-low, light-dark(#ffffff, #171c24));--sv-surface-2: var(--color-surface-container, light-dark(#f4f6fa, #1c232d));--sv-primary: var(--color-primary, #007acc);--sv-on-primary: var(--color-on-primary, #ffffff);--sv-danger: var(--color-error, #d32f2f);--sv-divider: color-mix(in oklab, var(--sv-outline) 35%, transparent);--sv-ring: color-mix(in oklab, var(--sv-outline) 55%, transparent);--sv-elev: 0 2px 14px color-mix(in oklab, var(--sv-fg) 5%, transparent);box-sizing:border-box;display:grid;grid-template-rows:auto minmax(0,1fr) auto;grid-template-columns:minmax(0,1fr);gap:0;inline-size:100%;block-size:100%;max-block-size:100%;min-block-size:0;margin:0;padding:clamp(.5rem,2cqi,1rem);overflow:hidden;text-align:start;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background-color:var(--sv-bg);color:var(--sv-fg)}.view-settings *,.view-settings *:before,.view-settings *:after{box-sizing:border-box}.view-settings :where(select,input,textarea,option,button){pointer-events:auto;font-family:inherit}.view-settings textarea{container-type:inline-size;resize:vertical;inline-size:100%;max-inline-size:100%}.view-settings h2,.view-settings h3{margin:0;text-align:start;color:var(--sv-fg)}.view-settings h2{font-size:1.25rem;font-weight:700;letter-spacing:-.02em}.view-settings h3{font-size:.94rem;font-weight:600;letter-spacing:-.01em}.view-settings .settings-screen__top{display:flex;flex-direction:column;align-items:stretch;gap:.75rem;padding-block-end:.875rem;border-block-end:1px solid var(--sv-divider);flex-shrink:0;min-inline-size:0}.view-settings .settings-screen__title{font-weight:600;letter-spacing:-.015em;font-size:clamp(1.05rem,2.5cqi,1.35rem)}@media(min-width:720px){.view-settings .settings-screen__top{flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-between}.view-settings .settings-screen__top .settings-tab-actions{flex:1;justify-content:flex-end}}.view-settings .settings-screen__body{min-block-size:0;min-inline-size:0;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;display:flex;flex-direction:column;gap:1rem;padding-block:.75rem;scrollbar-width:thin;scrollbar-color:var(--sv-outline) transparent}.view-settings .settings-screen__body::-webkit-scrollbar{inline-size:6px}.view-settings .settings-screen__body::-webkit-scrollbar-thumb{background:color-mix(in oklab,var(--sv-outline) 45%,transparent);border-radius:99px}.view-settings .settings-screen__footer{inline-size:stretch;display:flex;align-items:center;justify-content:flex-start;gap:.5rem;flex-wrap:wrap;flex-shrink:0;padding-block:.75rem;padding-inline:.25rem;border-block-start:1px solid var(--sv-divider);background:color-mix(in oklab,var(--sv-surface-1) 85%,var(--sv-bg));box-shadow:0 -10px 28px color-mix(in oklab,var(--sv-fg) 4%,transparent)}.view-settings .settings-tab-actions{display:flex;flex-wrap:nowrap;gap:.375rem;align-items:center;inline-size:stretch;max-inline-size:stretch;overflow-x:auto;scrollbar-width:thin;scrollbar-color:var(--sv-outline) transparent;container-type:inline-size;pointer-events:auto;position:relative;z-index:1}.view-settings .settings-tab-btn{pointer-events:auto;cursor:pointer;padding:.5rem .875rem;min-block-size:2.5rem;border:none;border-radius:999px;background:color-mix(in oklab,var(--sv-surface-2) 94%,transparent);color:var(--sv-muted);font-size:.75rem;font-weight:500;transition:background-color .12s ease,color .12s ease,box-shadow .12s ease;box-shadow:0 0 0 1px color-mix(in oklab,var(--sv-outline) 14%,transparent);white-space:nowrap}.view-settings .settings-tab-btn:hover{background:color-mix(in oklab,var(--sv-surface-2) 100%,transparent);color:var(--sv-fg)}.view-settings .settings-tab-btn.is-active{background:var(--sv-primary);color:var(--sv-on-primary);box-shadow:0 2px 12px color-mix(in oklab,var(--sv-primary) 28%,transparent),0 0 0 1px color-mix(in oklab,var(--sv-primary) 40%,transparent)}.view-settings .settings-tab-panel{display:none}.view-settings .settings-tab-panel.is-active{display:flex;flex-direction:column;align-items:stretch;gap:.75rem;min-inline-size:0}.view-settings .card{display:flex;flex-direction:column;gap:.75rem;padding:1rem;inline-size:stretch;border:none;border-radius:16px;background:color-mix(in oklab,var(--sv-surface-2) 92%,var(--sv-bg));box-shadow:var(--sv-elev),0 0 0 1px color-mix(in oklab,var(--sv-outline) 14%,transparent)}@container (max-inline-size: 480px){.view-settings .card{padding:.875rem;border-radius:14px}}.view-settings .settings-panel-form{display:flex;flex-direction:column;gap:.75rem;inline-size:stretch}.view-settings .field{display:grid;grid-auto-flow:row;gap:.375rem;inline-size:stretch;font-size:.75rem;margin:0}.view-settings .field>span{font-size:.75rem;font-weight:500;color:var(--sv-muted)}.view-settings .field.checkbox{grid-auto-flow:column;grid-auto-columns:max-content 1fr;align-items:center;gap:.625rem}.view-settings .field-hint{margin:0 0 .75rem;font-size:.85em;line-height:1.45;color:var(--sv-muted);opacity:.95}.view-settings .form-input,.view-settings .form-select{display:block;inline-size:100%;min-block-size:2.5rem;padding:.5rem .65rem;border-radius:10px;border:1px solid color-mix(in oklab,var(--sv-outline) 45%,transparent);background:var(--sv-surface-1);color:var(--sv-fg);font-size:.875rem;line-height:1.25;outline:none;transition:border-color .12s ease,box-shadow .12s ease}.view-settings .form-input:focus-visible,.view-settings .form-select:focus-visible{border-color:color-mix(in oklab,var(--sv-primary) 55%,var(--sv-outline));box-shadow:0 0 0 3px color-mix(in oklab,var(--sv-primary) 22%,transparent)}.view-settings select.form-select,.view-settings select.form-input{appearance:none;padding-inline-end:2rem;background-image:linear-gradient(45deg,transparent 50%,var(--sv-muted) 50%),linear-gradient(135deg,var(--sv-muted) 50%,transparent 50%);background-position:calc(100% - 14px) calc(50% - 2px),calc(100% - 9px) calc(50% - 2px);background-size:5px 5px;background-repeat:no-repeat}.view-settings .btn{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;padding:.5rem 1.125rem;min-block-size:2.5rem;border:none;border-radius:999px;background:color-mix(in oklab,var(--sv-surface-2) 90%,transparent);color:var(--sv-fg);font-size:.8125rem;font-weight:500;cursor:pointer;transition:background-color .12s ease,box-shadow .12s ease,filter .12s ease;box-shadow:0 0 0 1px color-mix(in oklab,var(--sv-outline) 12%,transparent)}.view-settings .btn:hover{background:color-mix(in oklab,var(--sv-fg) 6%,var(--sv-surface-2))}.view-settings .btn.primary{background:var(--sv-primary);color:var(--sv-on-primary);box-shadow:0 2px 12px color-mix(in oklab,var(--sv-primary) 26%,transparent),0 0 0 1px color-mix(in oklab,var(--sv-primary) 45%,transparent)}.view-settings .btn.primary:hover{filter:brightness(1.06)}.view-settings .btn.btn-sm,.view-settings .btn.small{padding:.35rem .65rem;min-block-size:2rem;font-size:.75rem}.view-settings .btn.btn-danger{color:var(--sv-on-primary);background:color-mix(in oklab,var(--sv-danger) 92%,#000);box-shadow:0 0 0 1px color-mix(in oklab,var(--sv-danger) 35%,transparent)}.view-settings .btn.btn-danger:hover{filter:brightness(1.08)}.view-settings .btn.tiny{min-block-size:2rem;padding:.3rem .5rem;font-size:.72rem}.view-settings .note,.view-settings .ext-note{font-size:.75rem;color:var(--sv-muted);opacity:.92;flex:0 1 auto;max-inline-size:100%;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none}.view-settings .ext-note{line-height:1.4}.view-settings .ext-note code{padding:2px 6px;border-radius:4px;font-size:.68rem;background:color-mix(in oklab,var(--sv-surface-2) 80%,var(--sv-bg));color:var(--sv-fg)}.view-settings .form-checkbox input[type=checkbox],.view-settings label.field.checkbox input[type=checkbox]{inline-size:1.15rem;block-size:1.15rem;accent-color:var(--sv-primary);flex-shrink:0}.view-settings .mcp-section{display:flex;flex-direction:column;gap:.5rem}.view-settings .mcp-actions{margin-block-start:.5rem;display:flex;flex-wrap:wrap;gap:.5rem}.view-settings .mcp-row{display:grid;gap:.5rem;padding:.75rem;border-radius:12px;background:color-mix(in oklab,var(--sv-surface-2) 88%,var(--sv-bg));box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--sv-outline) 12%,transparent)}.view-settings .mcp-row .field{margin:0}.view-settings .mcp-empty-note{margin:0;color:var(--sv-muted);font-size:.75rem}.view-settings .settings-spoiler{border-radius:12px;border:1px solid color-mix(in oklab,var(--sv-outline) 22%,transparent);background:color-mix(in oklab,var(--sv-surface-1) 55%,transparent);padding:.25rem .5rem}.view-settings .settings-spoiler summary{cursor:pointer;font-size:.8rem;font-weight:600;padding:.35rem .25rem;color:var(--sv-fg)}.view-settings .settings-spoiler .settings-panel-form{padding-block-end:.25rem}.view-settings .view-settings__content{inline-size:100%;max-inline-size:clamp(640px,90%,800px)}.view-settings .view-settings__section{display:flex;flex-direction:column;margin-block-end:2rem;padding-block-end:2rem;border-block-end:1px solid var(--sv-divider)}.view-settings .view-settings__section:last-of-type{border-block-end:none}.view-settings .view-settings__group{display:flex;flex-direction:column;gap:1rem}.view-settings .view-settings__label{display:flex;flex-direction:column;gap:.375rem}.view-settings .view-settings__label>span{font-size:.8125rem;font-weight:500}.view-settings .view-settings__select,.view-settings .view-settings__input{min-block-size:2.5rem;padding:.45rem .6rem;border-radius:10px;border:1px solid color-mix(in oklab,var(--sv-outline) 45%,transparent);background:var(--sv-surface-1);color:var(--sv-fg);font-size:.875rem}.view-settings .view-settings__checkbox{display:flex;align-items:center;gap:.5rem;font-size:.8125rem}.view-settings .view-settings__actions{display:flex;gap:.75rem;margin-block-start:1.5rem}.view-settings .view-settings__btn{padding:.55rem 1.1rem;border-radius:8px;border:1px solid color-mix(in oklab,var(--sv-outline) 40%,transparent);background:transparent;color:var(--sv-fg);cursor:pointer}.view-settings .view-settings__btn--primary{background:var(--sv-primary);border-color:color-mix(in oklab,var(--sv-primary) 30%,#000);color:var(--sv-on-primary)}.view-settings .view-settings__btn--primary:hover{filter:brightness(1.06)}.view-settings .custom-instructions-panel,.view-settings .custom-instructions-editor{display:flex;flex-direction:column;gap:.75rem}.view-settings .cip-select-row,.view-settings .ci-row{display:flex;flex-direction:column;gap:.35rem}.view-settings .ci-header{margin-block-end:.25rem}.view-settings .ci-header h4{margin:0 0 .25rem;font-size:.88rem}.view-settings .ci-desc{margin:0;font-size:.78rem;color:var(--sv-muted);line-height:1.45}.view-settings .ci-active-select{display:flex;flex-direction:column;gap:.25rem}.view-settings .ci-select,.view-settings .cip-select{min-block-size:2.35rem;padding:.4rem .55rem;border-radius:10px;border:1px solid color-mix(in oklab,var(--sv-outline) 40%,transparent);background:var(--sv-surface-1);color:var(--sv-fg);font-size:.8rem}.view-settings .cip-list,.view-settings .ci-list{display:flex;flex-direction:column;gap:.5rem}.view-settings .cip-item,.view-settings .ci-item{padding:.65rem .75rem;border-radius:12px;background:var(--sv-surface-1);border:1px solid color-mix(in oklab,var(--sv-outline) 16%,transparent)}.view-settings .cip-item.is-active,.view-settings .cip-item.active,.view-settings .ci-item.is-active,.view-settings .ci-item.active{border-color:color-mix(in oklab,var(--sv-primary) 35%,transparent);box-shadow:0 0 0 1px color-mix(in oklab,var(--sv-primary) 18%,transparent)}.view-settings .cip-item-header,.view-settings .ci-item-header{display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem}.view-settings .cip-item-label,.view-settings .ci-item-label{font-weight:600;font-size:.8rem}.view-settings .cip-item-actions,.view-settings .ci-item-actions{display:flex;flex-wrap:wrap;gap:.35rem;justify-content:flex-end}.view-settings .cip-badge,.view-settings .ci-badge{font-size:.65rem;padding:.15rem .4rem;border-radius:999px;background:color-mix(in oklab,var(--sv-primary) 16%,transparent);color:var(--sv-fg)}.view-settings .cip-item-preview,.view-settings .ci-item-preview{font-size:.75rem;color:var(--sv-muted);margin-block-start:.35rem;line-height:1.45}.view-settings .cip-edit-form,.view-settings .ci-edit-form{display:flex;flex-direction:column;gap:.5rem;margin-block-start:.5rem}.view-settings .cip-form-actions,.view-settings .cip-toolbar,.view-settings .ci-actions,.view-settings .ci-add-actions,.view-settings .ci-edit-actions{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}.view-settings .cip-input,.view-settings .cip-textarea,.view-settings .ci-input,.view-settings .ci-textarea,.view-settings .field-control{inline-size:100%;border-radius:10px;border:1px solid color-mix(in oklab,var(--sv-outline) 40%,transparent);background:var(--sv-surface-1);color:var(--sv-fg);padding:.45rem .55rem;font-size:.8125rem}.view-settings .cip-textarea,.view-settings .ci-textarea{min-block-size:5rem}.view-settings .cip-empty,.view-settings .ci-empty{font-size:.8rem;color:var(--sv-muted);padding:.75rem;text-align:center}.view-settings .field-label{font-size:.72rem;font-weight:600;color:var(--sv-muted);text-transform:uppercase;letter-spacing:.04em}@container (max-inline-size: 1024px){.view-settings{padding:.65rem}}@container (max-inline-size: 560px){.view-settings .settings-tab-actions{gap:.3rem}.view-settings .settings-tab-btn{min-block-size:2.65rem;padding-inline:.7rem}}@container (max-inline-size: 480px){.view-settings{padding:.45rem}.view-settings .settings-screen__title{display:none}.view-settings .settings-screen__body{padding-block:.5rem;gap:.75rem}.view-settings .settings-screen__footer{flex-direction:column-reverse;align-items:stretch;gap:.5rem}.view-settings .settings-screen__footer .btn.primary{inline-size:100%;justify-content:center;min-block-size:2.75rem}.view-settings .settings-screen__footer .note{white-space:normal;text-align:center}}}", n = e.getRootNode();
		if (n instanceof ShadowRoot) try {
			let e = new CSSStyleSheet();
			e.replaceSync(t), n.adoptedStyleSheets = [...n.adoptedStyleSheets, e], this._shadowSheet = {
				sheet: e,
				root: n
			};
		} catch (e) {
			console.warn("[SettingsView] Shadow stylesheet adoption failed; using <style> fallback", e);
			let r = document.createElement("style");
			r.setAttribute("data-settings-view-css", ""), r.textContent = t, n.appendChild(r), this._styleEl = r;
		}
		else this._sheet = o(ie);
	}
	clearSettingsStylesheet() {
		try {
			if (this._styleEl) {
				this._styleEl.remove(), this._styleEl = null;
				return;
			}
			if (this._shadowSheet) {
				let { sheet: e, root: t } = this._shadowSheet;
				t.adoptedStyleSheets = t.adoptedStyleSheets.filter((t) => t !== e), this._shadowSheet = null;
				return;
			}
			this._sheet &&= (s(this._sheet), null);
		} catch {}
	}
	canHandleMessage(e) {
		return e === "settings-update";
	}
	async handleMessage(e) {
		let t = e;
		t.data && (this.settings.value = {
			...this.settings.value,
			...t.data
		}, this.updateUI());
	}
	invokeChannelApi(e, t) {
		if (e === re.Patch || e === re.SettingsUpdate) return this.handleMessage({ data: t }), (async () => {
			try {
				let [{ loadSettings: e }, { applyTheme: n }] = await Promise.all([import("./settings-config-Dj6gv7Dg.js"), import("./theme-BqsB4wIz.js")]), r = await e(), i = t;
				n({
					...r,
					...i,
					appearance: {
						...r.appearance || {},
						...i.appearance || {}
					}
				});
			} catch (e) {
				console.warn("[SettingsView] channel applyTheme failed:", e);
			}
		})(), !0;
	}
};
function pn(e) {
	return new fn(e);
}
//#endregion
//#region ../../projects/subsystem/types.ts
function mn(e) {
	if (typeof e != "function" || typeof HTMLElement > "u") return !1;
	let t = e.prototype;
	return !!(t && HTMLElement.prototype.isPrototypeOf(t));
}
function hn(e) {
	return !!(e && typeof e == "object" && typeof e.render == "function");
}
function gn(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function _n(e, t = {}) {
	let n = [
		e.createView,
		e.createHomeView,
		e.createMarkdownViewer,
		e.createViewerView,
		e.createExplorerView,
		e.createEditorView,
		e.createHistoryView,
		e.createSettingsView,
		e.createWorkCenterView,
		e.createAirpadView,
		e.default
	];
	for (let e of n) if (e) {
		if (hn(e) || gn(e)) return e;
		if (mn(e)) return new e();
		if (typeof e == "function") return e(t);
	}
	throw Error("View module must export default/createView or a named create*View factory");
}
function vn(e, t = {}) {
	if (typeof HTMLElement < "u" && e instanceof HTMLElement) {
		let n = e;
		if (typeof n.render == "function") {
			let e = n.render(t);
			if (e instanceof HTMLElement) return e;
		}
		return e;
	}
	if (hn(e)) return e.render(t);
	throw Error("renderViewInstance: unsupported view");
}
//#endregion
//#region ../../projects/subsystem/test/module-smoke.ts
var yn = un;
if (!yn.default && !yn.createView) throw Error("settings-view must export default or createView");
if (typeof document < "u" && !(vn(_n(yn, { id: "settings-view" }), { id: "settings-view" }) instanceof HTMLElement)) throw Error("settings-view did not render an HTMLElement");
//#endregion
