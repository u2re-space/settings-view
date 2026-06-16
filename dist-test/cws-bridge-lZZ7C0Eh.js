import { i as e, n as t, r as n } from "./src-chZT6PF3.js";
import { t as r } from "./UniformInterop-DICKsic6.js";
//#region ../../../node_modules/@capacitor/core/dist/index.js
var i;
(function(e) {
	e.Unimplemented = "UNIMPLEMENTED", e.Unavailable = "UNAVAILABLE";
})(i ||= {});
var a = class extends Error {
	constructor(e, t, n) {
		super(e), this.message = e, this.code = t, this.data = n;
	}
}, o = (e) => e?.androidBridge ? "android" : e?.webkit?.messageHandlers?.bridge ? "ios" : "web", s = (e) => {
	let t = e.CapacitorCustomPlatform || null, n = e.Capacitor || {}, r = n.Plugins = n.Plugins || {}, s = () => t === null ? o(e) : t.name, c = () => s() !== "web", l = (e) => !!(f.get(e)?.platforms.has(s()) || u(e)), u = (e) => n.PluginHeaders?.find((t) => t.name === e), d = (t) => e.console.error(t), f = /* @__PURE__ */ new Map();
	return n.convertFileSrc ||= (e) => e, n.getPlatform = s, n.handleError = d, n.isNativePlatform = c, n.isPluginAvailable = l, n.registerPlugin = (e, o = {}) => {
		let c = f.get(e);
		if (c) return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`), c.proxy;
		let l = s(), d = u(e), p, m = async () => (!p && l in o ? p = p = typeof o[l] == "function" ? await o[l]() : o[l] : t !== null && !p && "web" in o && (p = p = typeof o.web == "function" ? await o.web() : o.web), p), h = (t, r) => {
			if (d) {
				let i = d?.methods.find((e) => r === e.name);
				if (i) return i.rtype === "promise" ? (t) => n.nativePromise(e, r.toString(), t) : (t, i) => n.nativeCallback(e, r.toString(), t, i);
				if (t) return t[r]?.bind(t);
			} else if (t) return t[r]?.bind(t);
			else throw new a(`"${e}" plugin is not implemented on ${l}`, i.Unimplemented);
		}, g = (t) => {
			let n, r = (...r) => {
				let o = m().then((o) => {
					let s = h(o, t);
					if (s) {
						let e = s(...r);
						return n = e?.remove, e;
					} else throw new a(`"${e}.${t}()" is not implemented on ${l}`, i.Unimplemented);
				});
				return t === "addListener" && (o.remove = async () => n()), o;
			};
			return r.toString = () => `${t.toString()}() { [capacitor code] }`, Object.defineProperty(r, "name", {
				value: t,
				writable: !1,
				configurable: !1
			}), r;
		}, _ = g("addListener"), v = g("removeListener"), y = (e, t) => {
			let n = _({ eventName: e }, t), r = async () => {
				v({
					eventName: e,
					callbackId: await n
				}, t);
			}, i = new Promise((e) => n.then(() => e({ remove: r })));
			return i.remove = async () => {
				console.warn("Using addListener() without 'await' is deprecated."), await r();
			}, i;
		}, b = new Proxy({}, { get(e, t) {
			switch (t) {
				case "$$typeof": return;
				case "toJSON": return () => ({});
				case "addListener": return d ? y : _;
				case "removeListener": return v;
				default: return g(t);
			}
		} });
		return r[e] = b, f.set(e, {
			name: e,
			proxy: b,
			platforms: new Set([...Object.keys(o), ...d ? [l] : []])
		}), b;
	}, n.Exception = a, n.DEBUG = !!n.DEBUG, n.isLoggingEnabled = !!n.isLoggingEnabled, n;
}, c = /* @__PURE__ */ ((e) => e.Capacitor = s(e))(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), l = c.registerPlugin, u = class {
	constructor() {
		this.listeners = {}, this.retainedEventArguments = {}, this.windowListeners = {};
	}
	addListener(e, t) {
		let n = !1;
		this.listeners[e] || (this.listeners[e] = [], n = !0), this.listeners[e].push(t);
		let r = this.windowListeners[e];
		return r && !r.registered && this.addWindowListener(r), n && this.sendRetainedArgumentsForEvent(e), Promise.resolve({ remove: async () => this.removeListener(e, t) });
	}
	async removeAllListeners() {
		this.listeners = {};
		for (let e in this.windowListeners) this.removeWindowListener(this.windowListeners[e]);
		this.windowListeners = {};
	}
	notifyListeners(e, t, n) {
		let r = this.listeners[e];
		if (!r) {
			if (n) {
				let n = this.retainedEventArguments[e];
				n ||= [], n.push(t), this.retainedEventArguments[e] = n;
			}
			return;
		}
		r.forEach((e) => e(t));
	}
	hasListeners(e) {
		return !!this.listeners[e]?.length;
	}
	registerWindowListener(e, t) {
		this.windowListeners[t] = {
			registered: !1,
			windowEventName: e,
			pluginEventName: t,
			handler: (e) => {
				this.notifyListeners(t, e);
			}
		};
	}
	unimplemented(e = "not implemented") {
		return new c.Exception(e, i.Unimplemented);
	}
	unavailable(e = "not available") {
		return new c.Exception(e, i.Unavailable);
	}
	async removeListener(e, t) {
		let n = this.listeners[e];
		if (!n) return;
		let r = n.indexOf(t);
		this.listeners[e].splice(r, 1), this.listeners[e].length || this.removeWindowListener(this.windowListeners[e]);
	}
	addWindowListener(e) {
		window.addEventListener(e.windowEventName, e.handler), e.registered = !0;
	}
	removeWindowListener(e) {
		e && (window.removeEventListener(e.windowEventName, e.handler), e.registered = !1);
	}
	sendRetainedArgumentsForEvent(e) {
		let t = this.retainedEventArguments[e];
		t && (delete this.retainedEventArguments[e], t.forEach((t) => {
			this.notifyListeners(e, t);
		}));
	}
}, d = (e) => encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), f = (e) => e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent), p = class extends u {
	async getCookies() {
		let e = document.cookie, t = {};
		return e.split(";").forEach((e) => {
			if (e.length <= 0) return;
			let [n, r] = e.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
			n = f(n).trim(), r = f(r).trim(), t[n] = r;
		}), t;
	}
	async setCookie(e) {
		try {
			let t = d(e.key), n = d(e.value), r = e.expires ? `; expires=${e.expires.replace("expires=", "")}` : "", i = (e.path || "/").replace("path=", ""), a = e.url != null && e.url.length > 0 ? `domain=${e.url}` : "";
			document.cookie = `${t}=${n || ""}${r}; path=${i}; ${a};`;
		} catch (e) {
			return Promise.reject(e);
		}
	}
	async deleteCookie(e) {
		try {
			document.cookie = `${e.key}=; Max-Age=0`;
		} catch (e) {
			return Promise.reject(e);
		}
	}
	async clearCookies() {
		try {
			let e = document.cookie.split(";") || [];
			for (let t of e) document.cookie = t.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
		} catch (e) {
			return Promise.reject(e);
		}
	}
	async clearAllCookies() {
		try {
			await this.clearCookies();
		} catch (e) {
			return Promise.reject(e);
		}
	}
};
l("CapacitorCookies", { web: () => new p() });
var m = async (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => {
		let e = r.result;
		t(e.indexOf(",") >= 0 ? e.split(",")[1] : e);
	}, r.onerror = (e) => n(e), r.readAsDataURL(e);
}), h = (e = {}) => {
	let t = Object.keys(e);
	return Object.keys(e).map((e) => e.toLocaleLowerCase()).reduce((n, r, i) => (n[r] = e[t[i]], n), {});
}, g = (e, t = !0) => e ? Object.entries(e).reduce((e, n) => {
	let [r, i] = n, a, o;
	return Array.isArray(i) ? (o = "", i.forEach((e) => {
		a = t ? encodeURIComponent(e) : e, o += `${r}=${a}&`;
	}), o.slice(0, -1)) : (a = t ? encodeURIComponent(i) : i, o = `${r}=${a}`), `${e}&${o}`;
}, "").substr(1) : null, _ = (e, t = {}) => {
	let n = Object.assign({
		method: e.method || "GET",
		headers: e.headers
	}, t), r = h(e.headers)["content-type"] || "";
	if (typeof e.data == "string") n.body = e.data;
	else if (r.includes("application/x-www-form-urlencoded")) {
		let t = new URLSearchParams();
		for (let [n, r] of Object.entries(e.data || {})) t.set(n, r);
		n.body = t.toString();
	} else if (r.includes("multipart/form-data") || e.data instanceof FormData) {
		let t = new FormData();
		if (e.data instanceof FormData) e.data.forEach((e, n) => {
			t.append(n, e);
		});
		else for (let n of Object.keys(e.data)) t.append(n, e.data[n]);
		n.body = t;
		let r = new Headers(n.headers);
		r.delete("content-type"), n.headers = r;
	} else (r.includes("application/json") || typeof e.data == "object") && (n.body = JSON.stringify(e.data));
	return n;
}, v = class extends u {
	async request(e) {
		let t = _(e, e.webFetchExtra), n = g(e.params, e.shouldEncodeUrlParams), r = n ? `${e.url}?${n}` : e.url, i = await fetch(r, t), a = i.headers.get("content-type") || "", { responseType: o = "text" } = i.ok ? e : {};
		a.includes("application/json") && (o = "json");
		let s, c;
		switch (o) {
			case "arraybuffer":
			case "blob":
				c = await i.blob(), s = await m(c);
				break;
			case "json":
				s = await i.json();
				break;
			default: s = await i.text();
		}
		let l = {};
		return i.headers.forEach((e, t) => {
			l[t] = e;
		}), {
			data: s,
			headers: l,
			status: i.status,
			url: i.url
		};
	}
	async get(e) {
		return this.request(Object.assign(Object.assign({}, e), { method: "GET" }));
	}
	async post(e) {
		return this.request(Object.assign(Object.assign({}, e), { method: "POST" }));
	}
	async put(e) {
		return this.request(Object.assign(Object.assign({}, e), { method: "PUT" }));
	}
	async patch(e) {
		return this.request(Object.assign(Object.assign({}, e), { method: "PATCH" }));
	}
	async delete(e) {
		return this.request(Object.assign(Object.assign({}, e), { method: "DELETE" }));
	}
};
l("CapacitorHttp", { web: () => new v() });
var y;
(function(e) {
	e.Dark = "DARK", e.Light = "LIGHT", e.Default = "DEFAULT";
})(y ||= {});
var b;
(function(e) {
	e.StatusBar = "StatusBar", e.NavigationBar = "NavigationBar";
})(b ||= {});
var x = class extends u {
	async setStyle() {
		this.unavailable("not available for web");
	}
	async setAnimation() {
		this.unavailable("not available for web");
	}
	async show() {
		this.unavailable("not available for web");
	}
	async hide() {
		this.unavailable("not available for web");
	}
};
l("SystemBars", { web: () => new x() });
//#endregion
//#region ../../projects/subsystem/src/routing/native/cws-bridge.ts
var S = class extends u {
	async getShellInfo() {
		return {
			shell: "browser",
			bridge: "cws-bridge",
			native: !1,
			platform: globalThis.navigator === void 0 ? "unknown" : "web"
		};
	}
	async invoke(e) {
		let t = w(e.channel, e.payload, e.envelope);
		return {
			ok: !0,
			channel: e.channel,
			echo: { ...e.payload ?? {} },
			envelope: t
		};
	}
}, C = l("CwsBridge", { web: () => new S() }), w = (i, a, o) => o && n(o) ? e(o) : t({
	...r({
		purpose: "invoke",
		protocol: "service",
		transport: "service-worker",
		type: "invoke",
		op: "invoke",
		source: "webview",
		destination: "native",
		srcChannel: "webview",
		dstChannel: "native",
		payload: a ?? {},
		data: a ?? {}
	}),
	path: ["cws-bridge", i]
}), T = (i, a, o) => o?.envelope && n(o.envelope) ? e(o.envelope) : t({
	...r({
		purpose: "invoke",
		protocol: "service",
		transport: "service-worker",
		type: o.ok ? "response" : "ack",
		op: "invoke",
		source: "native",
		destination: "webview",
		srcChannel: "native",
		dstChannel: "webview",
		payload: a,
		data: a
	}),
	path: ["cws-bridge", i]
}), E = () => {
	try {
		let e = globalThis.Capacitor;
		return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
	} catch {
		return !1;
	}
}, D = () => {
	try {
		return !!globalThis.window?.electronBridge?.invoke;
	} catch {
		return !1;
	}
}, O = () => {
	if (D()) return !0;
	if (!E()) return !1;
	try {
		return !!globalThis.window?.__CWS_SHELL_INFO__?.native;
	} catch {
		return !0;
	}
};
async function k(e) {
	let t = (e.channel || "").trim() || (Array.isArray(e.envelope?.path) && e.envelope?.path.length ? String(e.envelope.path[e.envelope.path.length - 1] || "").trim() : "") || "default", n = e.payload && typeof e.payload == "object" ? e.payload : {}, r = w(t, n, e.envelope), i = globalThis.window?.electronBridge?.invoke;
	if (typeof i == "function") {
		let e = await i({
			channel: t,
			payload: n,
			envelope: r
		});
		return {
			...e,
			envelope: T(t, n, e)
		};
	}
	if (!O()) {
		let e = await C.invoke({
			channel: t,
			payload: n,
			envelope: r
		});
		return {
			...e,
			envelope: T(t, n, e)
		};
	}
	let a = await C.invoke({
		channel: t,
		payload: n,
		envelope: r
	});
	return {
		...a,
		envelope: T(t, n, a)
	};
}
async function A() {
	try {
		let e = await k({ channel: "settings:get" });
		return e?.ok && e.appSettings && typeof e.appSettings == "object" ? e.appSettings : null;
	} catch {
		return null;
	}
}
async function j(e) {
	try {
		return !!(await k({
			channel: "settings:patch",
			payload: { appSettings: e }
		}))?.ok;
	} catch {
		return !1;
	}
}
//#endregion
export { A as getNativeUnifiedSettings, O as isCwsNativeIpcAvailable, j as patchNativeUnifiedSettings };
