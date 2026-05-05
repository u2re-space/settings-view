import { t as e } from "./settings-config-B63LTZR8.js";
//#region ../../projects/subsystem/runtime/theme.ts
function t(e) {
	try {
		document.querySelectorAll("[data-shell='content']").forEach((t) => {
			t.style.colorScheme = e;
		});
	} catch {}
}
function n(e) {
	try {
		document.querySelectorAll("[data-shell]").forEach((t) => {
			let n = t;
			n.dataset.theme = e, n.style.colorScheme = e;
			let r = n.shadowRoot?.querySelector?.(".app-shell");
			r && (r.dataset.theme = e, r.style.colorScheme = e);
		});
	} catch {}
}
function r(e) {
	if (typeof document > "u") return;
	let r = document.documentElement, i = "auto", a, o;
	if (typeof e == "string") i = e;
	else if (e && typeof e == "object") {
		let t = e;
		i = t.appearance?.theme ?? "auto", a = t.appearance?.fontSize, o = t.appearance?.color;
	}
	let s = i === "dark" ? "dark" : i === "light" ? "light" : "auto", c = i === "dark" ? "dark" : i === "light" ? "light" : globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
	r.setAttribute("data-scheme", s), r.setAttribute("data-theme", c), r.style.colorScheme = c;
	try {
		document.body && (document.body.style.colorScheme = c);
	} catch {}
	if (t(c), n(c), a) {
		let e = a === "small" ? "14px" : a === "large" ? "18px" : "16px";
		r.style.fontSize = e;
	}
	if (o && typeof o == "string") {
		try {
			document.body?.style?.setProperty?.("--current", o), document.body?.style?.setProperty?.("--primary", o);
		} catch {}
		r.style.setProperty("--current", o), r.style.setProperty("--primary", o);
	}
}
function i() {
	if (!(typeof document > "u")) {
		try {
			r(e());
		} catch {
			r("auto");
		}
		globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener?.("change", () => {
			try {
				let t = e();
				if ((t?.appearance?.theme ?? "auto") !== "auto") return;
				r(t);
			} catch {
				r("auto");
			}
		});
	}
}
//#endregion
export { i as n, r as t };
