import { m as e } from "./src-chZT6PF3.js";
import { Dt as t, E as n, Et as r, St as i, Tt as a, k as o, wt as s } from "./src-CPZKB3Ky.js";
import { t as c } from "./settings-config-BCjrUec9.js";
//#region ../../projects/object.ts/src/wrap/AssignObject.ts
var l = class {
	constructor() {}
	deleteProperty(e, t) {
		return Reflect.deleteProperty(e, t);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	has(e, t) {
		return Reflect.has(e, t);
	}
	set(t, n, r) {
		return e(t, r, n), !0;
	}
	get(e, t, n) {
		return typeof t == "symbol" ? e?.[t] ?? e : Reflect.get(e, t, n);
	}
}, u = (e) => {
	if (e?.[t] || a.has(e)) return e;
	let n = new Proxy(e, new l());
	return a.set(n, e), n;
}, d = (e) => {
	if (typeof globalThis?.requestAnimationFrame == "function") {
		globalThis.requestAnimationFrame(e);
		return;
	}
	globalThis.setTimeout(e, 0);
}, f = "cw::workspace::speed-dial", p = `${f}::meta`, m = (e) => typeof structuredClone == "function" ? structuredClone(r(e)) : o.parse(o.stringify(e)), h = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `sd-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e3)}`, g = [
	{
		id: "shortcut-docs",
		cell: i([0, 1]),
		icon: "book-open-text",
		label: "Docs",
		action: "open-link",
		meta: {
			href: "https://github.com/fest-live",
			description: "Project documentation"
		}
	},
	{
		id: "shortcut-roadmap",
		cell: i([1, 1]),
		icon: "signpost",
		label: "Roadmap",
		action: "open-link",
		meta: {
			href: "https://github.com/u2re-space/unite-2.man",
			description: "Manifest notes"
		}
	},
	{
		id: "shortcut-fest-live",
		cell: i([2, 1]),
		icon: "github-logo",
		label: "Fest Live",
		action: "open-link",
		meta: {
			href: "https://github.com/fest-live",
			description: "Fest Live Organization"
		}
	},
	{
		id: "shortcut-l2ne-dev",
		cell: i([3, 1]),
		icon: "user",
		label: "L2NE Dev",
		action: "open-link",
		meta: {
			href: "https://github.com/L2NE-dev",
			description: "L2NE Developer Profile"
		}
	},
	{
		id: "shortcut-u2re-space",
		cell: i([0, 2]),
		icon: "planet",
		label: "U2RE Space",
		action: "open-link",
		meta: {
			href: "https://github.com/u2re-space/",
			description: "U2RE Space Organization"
		}
	},
	{
		id: "shortcut-telegram",
		cell: i([1, 2]),
		icon: "telegram-logo",
		label: "Telegram",
		action: "open-link",
		meta: {
			href: "https://t.me/u2re_space",
			description: "U2RE Space Telegram"
		}
	}
], _ = [
	{
		id: "shortcut-explorer",
		cell: i([2, 0]),
		icon: "books",
		label: "Explorer",
		action: "open-view",
		meta: { view: "explorer" }
	},
	{
		id: "shortcut-settings",
		cell: i([3, 0]),
		icon: "gear-six",
		label: "Settings",
		action: "open-view",
		meta: { view: "settings" }
	},
	...g
], { records: v, metaEntries: y } = ((e) => {
	let t = [], n = [];
	return e.forEach((e) => {
		let { meta: r, ...i } = e;
		t.push(i);
		let a = {
			action: e.action,
			...r || {}
		};
		n.push([e.id, a]);
	}), {
		records: t,
		metaEntries: n
	};
})(_), b = [], x = (e) => e && Array.isArray(e) && e.length >= 2 ? i([Number(e[0]) || 0, Number(e[1]) || 0]) : i([0, 0]), S = (e = {}) => u(i({
	action: e.action || "open-view",
	view: e.view || "",
	href: e.href || "",
	description: e.description || "",
	entityType: e.entityType || "",
	tags: Array.isArray(e.tags) ? [...e.tags] : [],
	...e
})), C = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of e) t.set(n, S(r));
	return t;
}, w = (e) => e ? e instanceof Map ? Array.from(e.entries()) : Array.isArray(e) ? e.map((e) => e && typeof e == "object" && "id" in e ? [e.id, e.meta || e] : null).filter(Boolean) : typeof e == "object" ? Object.entries(e) : [] : [], T = (e) => {
	let t = {};
	return e?.forEach((e, n) => {
		t[n] = m(e ?? {});
	}), t;
}, E = () => C(y), D = (e) => {
	let t = w(e);
	return C(t.length ? t : y);
}, O = (e, t) => e && typeof e == "object" && "value" in e ? e.value ?? t : e ?? t, k = (e) => ({
	id: e.id,
	cell: i([e.cell?.[0] ?? 0, e.cell?.[1] ?? 0]),
	icon: O(e.icon, "sparkle"),
	label: O(e.label, "Shortcut"),
	action: e.action
}), A = (e) => i({
	id: e.id || h(),
	cell: i(x(e.cell)),
	icon: s(e.icon || "sparkle"),
	label: s(e.label || "Shortcut"),
	action: e.action || "open-view"
}), j = () => i(v.map(A)), M = (e) => i((Array.isArray(e) && e.length ? e : _).map((e) => {
	let { meta: t, ...n } = e;
	return t ? b.push([e.id, {
		action: e.action,
		...t
	}]) : b.push([e.id, { action: e.action }]), n;
}).map(A)), N = (e) => e.map(k), P = n(p, E, D, T), F = n(f, j, M, N), I = () => F?.$save?.(), L = () => P?.$save?.(), R = (e) => e ? P?.get?.(e) ?? null : null, z = (e, t = {}) => {
	let n = P?.get?.(e);
	return n || (n = S(t), P?.set?.(e, n), L()), t?.action && n.action !== t.action && (n.action = t.action), n;
}, B = (e) => {
	if (!e) return !1;
	let t = e.action || "open-view", n = z(e.id, { action: t });
	return n.action === t ? !1 : (n.action = t, !0);
};
b.length && (b.forEach(([e, t]) => {
	let n = z(e, t);
	Object.assign(n, t);
}), b.length = 0, L()), (() => {
	let e = !1;
	F?.forEach?.((t) => {
		B(t) && (e = !0);
	}), e && L();
})(), (() => {
	let e = !1;
	g.forEach((t) => {
		if (F?.find?.((e) => e?.id === t.id)) {
			let n = R(t.id);
			t.meta && n ? (t.meta.href !== n.href && (n.href = t.meta.href, e = !0), t.meta.description !== n.description && (n.description = t.meta.description, e = !0)) : t.meta && !n && (z(t.id, t.meta), e = !0);
		} else {
			let n = A(t);
			t.label && n.label && typeof n.label == "object" && "value" in n.label && (n.label.value = t.label), t.icon && n.icon && typeof n.icon == "object" && "value" in n.icon && (n.icon.value = t.icon), F.push(i(n)), z(n.id, t.meta), e = !0;
		}
	}), e && (I(), L());
})(), n("cw::workspace::wallpaper", () => i({
	src: "/assets/wallpaper.jpg",
	opacity: 1,
	blur: 0
}), (e) => i(e || {
	src: "/assets/wallpaper.jpg",
	opacity: 1,
	blur: 0
}), (e) => ({ ...e }));
var V = n("cw::workspace::grid-layout", () => i({
	columns: 4,
	rows: 8,
	shape: "square"
}), (e) => i(e || {
	columns: 4,
	rows: 8,
	shape: "square"
}), (e) => ({ ...e })), H = () => V?.$save?.(), U = (e) => {
	let t = e?.grid || V, n = t?.columns ?? 4, r = t?.rows ?? 8, i = t?.shape ?? "square";
	V && (V.columns = n, V.rows = r, V.shape = i, H()), !(typeof document > "u") && (document.querySelectorAll(".speed-dial-grid").forEach((e) => {
		let t = e;
		t.dataset.gridColumns = String(n), t.dataset.gridRows = String(r), t.dataset.gridShape = i;
	}), document.documentElement.dataset.gridColumns = String(n), document.documentElement.dataset.gridRows = String(r), document.documentElement.dataset.gridShape = i);
};
typeof globalThis < "u" && typeof document < "u" && d(() => U());
//#endregion
//#region ../../projects/subsystem/src/other/utils/Theme.ts
var W = (e) => {
	let t = e.trim();
	if (!t || t === "transparent") return null;
	let n = t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
	if (n) {
		let e = n[1];
		return e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), `#${e.toLowerCase()}`;
	}
	let r = t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i);
	if (!r) return null;
	let i = r[4] === void 0 ? 1 : Number(r[4]);
	return !Number.isFinite(i) || i < .98 ? null : `#${[
		Math.max(0, Math.min(255, Math.round(Number(r[1])))),
		Math.max(0, Math.min(255, Math.round(Number(r[2])))),
		Math.max(0, Math.min(255, Math.round(Number(r[3]))))
	].map((e) => e.toString(16).padStart(2, "0")).join("")}`;
}, G = () => {
	if (typeof document > "u") return null;
	let e = document.querySelectorAll("[data-shell]");
	for (let t of e) {
		let e = t.shadowRoot;
		if (!e) continue;
		let n = e.querySelector(".app-shell__nav, .app-shell__toolbar");
		if (!n) continue;
		let r = getComputedStyle(n).backgroundColor, i = W(r);
		if (i) return i;
	}
	return null;
}, K = (e) => e === "dark" || e === "light" ? e : globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light", q = (e) => {
	switch (e) {
		case "small": return "14px";
		case "large": return "18px";
		default: return "16px";
	}
}, J = (e) => {
	try {
		document.querySelectorAll("[data-shell]").forEach((t) => {
			let n = t;
			n.dataset.theme = e, n.style.colorScheme = e;
			let r = n.shadowRoot?.querySelector?.(".app-shell");
			r && (r.dataset.theme = e, r.style.colorScheme = e);
		});
	} catch {}
}, Y = (e, t) => {
	if (typeof document > "u") return;
	let n = document.documentElement, r = t === "dark" ? "dark" : t === "light" ? "light" : "auto";
	n.setAttribute("data-scheme", r), n.setAttribute("data-theme", e), n.style.colorScheme = e;
	try {
		let t = document.body;
		t && (t.style.colorScheme = e);
	} catch {}
	try {
		document.querySelectorAll("[data-shell='content']").forEach((t) => {
			t.style.colorScheme = e;
		});
	} catch {}
	if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ !== !0) {
		let t = () => {
			if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ === !0) return;
			let t = document.querySelector("meta[name=\"theme-color\"]");
			if (!t) return;
			let n = G(), r = e === "dark" ? "#0f1419" : "#007acc";
			t.setAttribute("content", n ?? r);
		};
		t(), requestAnimationFrame(t);
	}
	J(e);
}, X = (e) => {
	if (typeof document > "u") return;
	let t = document.documentElement, n = e.appearance?.theme || "auto";
	Y(K(n), n), t.style.fontSize = q(e.appearance?.fontSize), e.appearance?.color && (document.body.style.setProperty("--current", e.appearance.color), document.body.style.setProperty("--primary", e.appearance.color), t.style.setProperty("--current", e.appearance.color), t.style.setProperty("--primary", e.appearance.color)), e.grid && U(e);
}, Z = () => {
	if (typeof document > "u") return;
	let e = async () => {
		try {
			X(await c());
		} catch {}
		try {
			document.documentElement.offsetHeight;
		} catch {}
	};
	(async () => {
		await e(), queueMicrotask(() => {
			e();
		}), requestAnimationFrame(() => {
			e();
			try {
				document.documentElement.dispatchEvent(new CustomEvent("u2-theme-change", { bubbles: !0 }));
			} catch {}
			requestAnimationFrame(() => {
				e();
				let t = globalThis.requestIdleCallback;
				typeof t == "function" ? t(() => {
					e();
				}, { timeout: 200 }) : globalThis.setTimeout(() => {
					e();
				}, 50);
			});
		});
	})();
}, Q = async () => {
	try {
		if (typeof document > "u") return;
		X(await c()), globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener?.("change", async () => {
			X(await c());
		});
	} catch (e) {
		console.warn("Failed to init theme", e);
	}
};
//#endregion
export { G as a, Z as i, W as n, Y as o, Q as r, X as t };
