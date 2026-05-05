import { n as e, t } from "./settings-config-B63LTZR8.js";
import { t as n } from "./theme-BmeOLH_g.js";
//#region \0rolldown/runtime.js
var r = Object.defineProperty, i = (e, t) => {
	let n = {};
	for (var i in e) r(n, i, {
		get: e[i],
		enumerable: !0
	});
	return t || r(n, Symbol.toStringTag, { value: "Module" }), n;
}, a = Symbol.for("@fix"), o = (e) => Array.isArray(e) || e instanceof Set || e instanceof Map, s = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint" || e === void 0 || e == null, c = (e, t) => s(e) ? t == "number" ? Number(e) || 0 : t == "string" ? String(e) || "" : t == "boolean" ? !!e : e : null, l = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), u = (e) => l(e, "value"), d = (e) => s(e) ? e : u(e) ? e?.value : e, f = (e, t) => e?.[a] ?? e ?? t ?? t, p = (e) => e != null && (typeof e == "object" || typeof e == "function") && (e instanceof WeakRef || typeof e?.deref == "function") ? p(e?.deref?.()) : e, m = (e) => {
	if (typeof e == "function" || e == null) return e;
	let t = function() {};
	return t[a] = e, t;
}, h = (e, t, n) => (e = p(e), e != null && (typeof e == "object" || typeof e == "function") ? e[t] = d(n = p(n)) : e), g = (e) => crypto?.getRandomValues ? crypto?.getRandomValues?.(e) : (() => {
	let t = new Uint8Array(e.length);
	for (let n = 0; n < e.length; n++) t[n] = Math.floor(Math.random() * 256);
	return t;
})(), _ = () => crypto?.randomUUID ? crypto?.randomUUID?.() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (e ^ g?.(new Uint8Array(1))?.[0] & 15 >> e / 4).toString(16)), v = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), y = (e) => e && e?.replace?.(/-([a-z])/g, (e, t) => t.toUpperCase()), b = (e) => typeof CSSStyleValue < "u" && e instanceof CSSStyleValue, x = (e) => e != null && (typeof e == "boolean" ? e !== !1 : !0) && typeof e != "object" && typeof e != "function", S = (e) => typeof e == "boolean" ? e ? "" : null : typeof e == "number" ? String(e) : e, ee = Symbol.for("@trigger-lock"), C = (e, t, n = "value") => {
	l(e, n) && (e[ee] = !0);
	let r;
	try {
		r = t?.();
	} finally {
		l(e, n) && delete e[ee];
	}
	return r;
}, w = (e) => {
	if (typeof e != "string") return null;
	let t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
	if (t?.length != 1) return null;
	let n = parseFloat(t[0][0]);
	return !Number.isNaN(n) && Number.isFinite(n) ? n : null;
}, te = /^\d+$/g, T = (e) => {
	if (typeof e != "string" || (e = e?.trim?.(), e == "" || e == null)) return null;
	let t = [...e?.matchAll?.(te)];
	if (t?.length != 1) return null;
	let n = parseInt(t[0][0]);
	return !Number.isNaN(n) && Number.isInteger(n) ? n : null;
}, E = (e) => typeof e == "string" ? T(e) != null : typeof e == "number" && Number.isInteger(e) && e >= 0, ne = (e) => Array.isArray(e) || typeof e == "object" && !!e && typeof e[Symbol.iterator] == "function", re = (e, t, n) => {
	e = e instanceof WeakRef ? e.deref() : e;
	let r = [...Object.entries(n)]?.map?.(([n, r]) => e?.[t]?.call?.(e, n, r));
	return () => {
		r?.forEach?.((e) => e?.());
	};
}, D = (e) => e instanceof WeakRef || typeof e?.deref == "function", O = (e) => e == null || D(e) ? e : typeof e == "function" || typeof e == "object" ? new WeakRef(e) : e, ie = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), ae = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), oe = function(e) {
	return (t) => {
		e[ee] = !0;
		let n;
		try {
			n = t?.();
		} finally {
			e[ee] = !1;
		}
		return n;
	};
}, se = (e) => Array.isArray(e) ? e?.flatMap?.((e) => Array.isArray(e) ? se(e) : e) : e, k = (e) => se(e)?.every?.(A), A = (e) => s(e) || typeof SharedArrayBuffer == "function" && e instanceof SharedArrayBuffer || ce(e) || Array.isArray(e) && k(e), ce = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), le = (e) => s(e) || typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || typeof MessagePort == "function" && e instanceof MessagePort || typeof ReadableStream == "function" && e instanceof ReadableStream || typeof WritableStream == "function" && e instanceof WritableStream || typeof TransformStream == "function" && e instanceof TransformStream || typeof ImageBitmap == "function" && e instanceof ImageBitmap || typeof VideoFrame == "function" && e instanceof VideoFrame || typeof OffscreenCanvas == "function" && e instanceof OffscreenCanvas || typeof RTCDataChannel == "function" && e instanceof RTCDataChannel || typeof AudioData == "function" && e instanceof AudioData || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream || typeof WebTransportSendStream == "function" && e instanceof WebTransportSendStream || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream, ue = (e) => {
	switch (typeof e) {
		case "number": return 0;
		case "string": return "";
		case "boolean": return !1;
		case "object": return null;
		case "function": return null;
		case "symbol": return null;
		case "bigint": return 0n;
	}
}, de = (e) => typeof e?.[Symbol.iterator] == "function", j = (e) => [
	"symbol",
	"string",
	"number"
].indexOf(typeof e) >= 0, fe = (e, t) => he.getOrInsert(e, /* @__PURE__ */ new WeakMap()).getOrInsert(t, t?.bind?.(e)), M = (e, t) => (typeof t == "function" ? fe(e, t) : t) ?? t, pe = (e, t, n, r) => {
	if (t == Symbol.iterator) return me(e, n, r);
	if (t == null || typeof t == "symbol" || typeof t == "object" || typeof t == "function") return;
	let i = (e, ...t) => {
		if (e != null) return n?.(e, ...t);
	};
	if (e instanceof Map || e instanceof WeakMap) {
		if (e.has(t)) return i?.(e.get(t), t, null, "@set");
	} else if (e instanceof Set || e instanceof WeakSet) {
		if (e.has(t)) return i?.(t, t, null, "@add");
	} else if (Array.isArray(e) && typeof t == "string" && [...t?.matchAll?.(/^\d+$/g)]?.length == 1 && Number.isInteger(typeof t == "string" ? parseInt(t) : t)) {
		let n = typeof t == "string" ? parseInt(t) : t;
		return i?.(e?.[n], n, null, "@add");
	} else if (typeof e == "function" || typeof e == "object") return i?.(e?.[t], t, null, "@set");
}, me = (e, t, n) => {
	if (e == null) return;
	let r = [];
	if (e instanceof Set || e instanceof Map || typeof e?.keys == "function") return [...e?.keys?.() || r]?.forEach?.((r) => pe(e, r, t, n));
	if (Array.isArray(e) || de(e)) return [...e]?.forEach?.((r, i) => pe(e, i, t, n));
	if (typeof e == "object" || typeof e == "function") return [...Object.keys(e) || r]?.forEach?.((r) => pe(e, r, t, n));
}, N = (e, t) => e == null && t == null ? !1 : e == null || t == null ? !0 : typeof e == "boolean" && typeof t == "boolean" ? e != t : typeof e == "number" && typeof t == "number" ? !(e == t || Math.abs(e - t) < 1e-9) : typeof e == "string" && typeof t == "string" ? e != "" && t != "" && e != t || e !== t : typeof e == typeof t && e && t && e != t || e !== t, he = /* @__PURE__ */ new WeakMap(), P = (e, t) => {
	let n = e == null || e < 0 || typeof e != "number" || e == Symbol.iterator || (t == null ? !1 : e >= (t?.length || 0));
	return t == null ? !1 : Array.isArray(t) && n;
}, ge = (e, t, n) => {
	if (Array.isArray(e)) return e.every(A) ? e.map(t) : e.map((n, r) => ge(n, t, [e, r]));
	if (e instanceof Map) {
		let n = Array.from(e.entries());
		return n.map(([e, t]) => t).every(A) ? new Map(n.map(([n, r]) => [n, t(r, n, e)])) : new Map(n.map(([n, r]) => [n, ge(r, t, [e, n])]));
	}
	if (e instanceof Set) {
		let n = Array.from(e.entries()), r = n.map(([e, t]) => t);
		return n.every(A) ? new Set(r.map(t)) : new Set(r.map((n) => ge(n, t, [e, n])));
	}
	if (typeof e == "object" && e?.constructor == Object && Object.prototype.toString.call(e) == "[object Object]") {
		let n = Array.from(Object.entries(e));
		return n.map(([e, t]) => t).every(A) ? Object.fromEntries(n.map(([n, r]) => [n, t(r, n, e)])) : Object.fromEntries(n.map(([n, r]) => [n, ge(r, t, [e, n])]));
	}
	return t(e, n?.[1] ?? "", n?.[0] ?? null);
}, _e = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), ye = (e, t) => e instanceof Promise || typeof e?.then == "function" ? _e?.has?.(e) ? t(_e?.get?.(e)) : Promise.try?.(async () => {
	let t = await e;
	return _e?.set?.(e, t), t;
})?.then?.(t) : t(e), be = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = t;
	}
	defineProperty(e, t, n) {
		return f(e) instanceof Promise ? Reflect.defineProperty(e, t, n) : ye(f(e), (e) => Reflect.defineProperty(e, t, n));
	}
	deleteProperty(e, t) {
		return f(e) instanceof Promise ? Reflect.deleteProperty(e, t) : ye(f(e), (e) => Reflect.deleteProperty(e, t));
	}
	getPrototypeOf(e) {
		return f(e) instanceof Promise ? Reflect.getPrototypeOf(e) : ye(f(e), (e) => Reflect.getPrototypeOf(e));
	}
	setPrototypeOf(e, t) {
		return f(e) instanceof Promise ? Reflect.setPrototypeOf(e, t) : ye(f(e), (e) => Reflect.setPrototypeOf(e, t));
	}
	isExtensible(e) {
		return f(e) instanceof Promise ? Reflect.isExtensible(e) : ye(f(e), (e) => Reflect.isExtensible(e));
	}
	preventExtensions(e) {
		return f(e) instanceof Promise ? Reflect.ownKeys(e) : ye(f(e), (e) => Reflect.preventExtensions(e));
	}
	ownKeys(e) {
		let t = f(e);
		return t instanceof Promise ? Object.keys(t) : ye(t, (e) => (typeof e == "object" || typeof e == "function") && e != null ? Object.keys(e) : []) ?? [];
	}
	getOwnPropertyDescriptor(e, t) {
		return f(e) instanceof Promise ? Reflect.getOwnPropertyDescriptor(e, t) : ye(f(e), (e) => Reflect.getOwnPropertyDescriptor(e, t));
	}
	construct(e, t, n) {
		return ye(f(e), (e) => Reflect.construct(e, t, n));
	}
	has(e, t) {
		return f(e) instanceof Promise ? Reflect.has(e, t) : ye(f(e), (e) => Reflect.has(e, t));
	}
	get(e, t, n) {
		if (e = f(e), t == "promise") return e;
		if (t == "resolve" && this.#e) return (...e) => {
			let t = this.#e?.(...e);
			return this.#e = null, t;
		};
		if (t == "reject" && this.#t) return (...e) => {
			let t = this.#t?.(...e);
			return this.#t = null, t;
		};
		if (t == "then" || t == "catch" || t == "finally") {
			if (e instanceof Promise) return e?.[t]?.bind?.(e);
			{
				let n = Promise.try(() => e);
				return n?.[t]?.bind?.(n);
			}
		}
		let r;
		return r = _e?.has?.(e) && (r = _e?.get?.(e))?.[t] != null ? _e?.get?.(e)?.[t] : xe(ye(e, async (r) => {
			if (f(r) instanceof Promise) return Reflect.get(r, t, n);
			if (s(r)) return t == Symbol.toPrimitive || t == Symbol.toStringTag ? r : void 0;
			let i;
			try {
				i = Reflect.get(r, t, n);
			} catch {
				i = e?.[t];
			}
			return typeof i == "function" ? i?.bind?.(r) : i;
		})), t == Symbol.toStringTag ? s(r) ? String(r ?? "") || "" : r?.[Symbol.toStringTag]?.() || String(r ?? "") || "" : t == Symbol.toPrimitive ? (e) => {
			if (s(r)) return c(r, e);
		} : r;
	}
	set(e, t, n) {
		return ye(f(e), (e) => Reflect.set(e, t, n));
	}
	apply(e, t, n) {
		if (this.#e) {
			let e = this.#e?.(...n);
			return this.#e = null, e;
		}
		return ye(f(e, this.#e), (e) => {
			if (typeof e == "function") return f(e) instanceof Promise, Reflect.apply(e, t, n);
		});
	}
};
function xe(e, t, n) {
	return e instanceof Promise || typeof e?.then == "function" ? _e?.has?.(e) ? _e?.get?.(e) : (ve?.has?.(e) || e?.then?.((t) => _e?.set?.(e, t)), ve?.getOrInsertComputed?.(e, () => new Proxy(m(e), new be(t, n)))) : e;
}
Symbol.observable ||= Symbol.for("observable"), Symbol.subscribe ||= Symbol.for("subscribe"), Symbol.unsubscribe ||= Symbol.for("unsubscribe");
var F = Symbol.for("@value"), I = Symbol.for("@extract"), Se = Symbol.for("@origin"), Ce = Symbol.for("@registry"), we = Symbol.for("@behavior"), Te = Symbol.for("@promise"), Ee = Symbol.for("@trigger-less"), L = Symbol.for("@trigger-lock"), De = Symbol.for("@trigger-control"), Oe = Symbol.for("@trigger"), ke = Symbol.for("@subscribe"), Ae = Symbol.for("@isNotEqual"), je = Symbol.for("@realProp"), Me = (e) => e?.[I] ?? e?.["@target"] ?? e, Ne = (e, t = !1) => {
	let n = e;
	if (s(e) || typeof e == "symbol") return e;
	if (e != null && (e instanceof WeakRef || "deref" in e && typeof e?.deref == "function") && (e = e?.deref?.()), e != null && (typeof e == "object" || typeof e == "function")) {
		e = Me(e);
		let r = t && u(e) && e?.value;
		if (r != null && (typeof r == "object" || typeof r == "function") && (e = r), n != e) return Ne(e, t);
	}
	return e;
}, Pe = (e) => e != null && typeof e.then == "function", Fe = (e, t) => s(e) || typeof e == "function" ? t?.(e) : Pe(e) ? e.then(t) : e?.promise && Pe(e.promise) ? e.promise.then(t) : t?.(e), Ie = /* @__PURE__ */ new WeakMap(), Le = new FinalizationRegistry((e) => {
	e?.forEach?.((e) => e?.());
});
function R(e, t, n) {
	!n || typeof n != "function" || typeof e != "object" && typeof e != "function" || (t == Symbol.dispose ? Ie?.getOrInsertComputed?.(e, () => {
		let t = /* @__PURE__ */ new Set();
		return (typeof e == "object" || typeof e == "function") && (Le.register(e, t), Ie.set(e, t), e[Symbol.dispose] ??= () => t.forEach((e) => {
			e?.();
		})), t;
	})?.add?.(n) : e[t] = function(...r) {
		let i = e?.[t];
		typeof i == "function" && i.apply(this, r), n.apply(this, r);
	});
}
//#endregion
//#region ../../projects/object.ts/src/core/Subscript.ts
var Re = /* @__PURE__ */ new WeakMap(), ze = (e, t, n) => Re.getOrInsert(e, () => {
	let r = t?.deref?.();
	r?.affected?.(n);
	let i = e?.complete?.bind?.(e), a = () => {
		let e = i?.();
		return r?.unaffected?.(n), e;
	};
	return e.complete = a, {
		unaffected: a,
		[Symbol.dispose]: a,
		[Symbol.asyncDispose]: a
	};
}), z = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new WeakMap(), He = (e, t) => {
	let n = e?.[I] ?? e, r = z.get(n);
	return r ? r.bindSource(n) : (r = new tt(n), z.set(n, r)), t;
}, Ue = (e, t) => (e = Ne(e?.[I] ?? e), typeof e == "symbol" || !(typeof e == "object" || typeof e == "function") || e == null ? e : Ve.getOrInsertComputed(e, () => new Proxy(e, He(e, t)))), We = Symbol.for("@allProps"), Ge = new Set(["*", "all"]), Ke = new Map([
	["set", ["setter", "@set"]],
	["add", ["@add"]],
	["delete", ["@delete"]],
	["invalidate", ["@invalidate"]],
	["manual", ["@manual"]],
	["custom", ["@custom"]],
	["setAll", ["@setAll"]],
	["addAll", ["@addAll"]],
	["deleteAll", ["@deleteAll", "@clear"]]
]), qe = new Map(Array.from(Ke.entries()).flatMap(([e, t]) => t.map((t) => [t, e]))), Je = (e = "set") => {
	if (e == null) return e;
	let t = String(e || "set");
	return qe.get(t) ?? t;
}, Ye = (e) => {
	let t = e == null ? "all" : String(Je(e) ?? "all");
	return [t, ...Ke.get(t) ?? []];
}, Xe = (e = ["*"]) => new Set([...Ze(e)].flatMap((e) => [e, ...Ke.get(e) ?? []])), Ze = (e = ["*"]) => {
	let t = typeof e == "string" ? [e] : Array.from(e ?? ["*"]), n = new Set(t.map((e) => {
		let t = String(e || "*");
		return Ge.has(t) ? t : String(Je(t) ?? t);
	}));
	return n.size ? n : new Set(["*"]);
}, Qe = (e, t) => {
	let n = e instanceof Set ? e : Ze(e);
	return [...Ge].some((e) => n.has(e)) || Ye(t).some((e) => n.has(e));
}, $e = (e) => !!e && typeof e == "object" && !Array.isArray(e) && ("affectTypes" in e || "triggers" in e || "triggerImmediately" in e), et = (e = ["*"]) => {
	if ($e(e)) return {
		affectTypes: Ze(e.affectTypes ?? e.triggers ?? ["*"]),
		triggerImmediately: e.triggerImmediately !== !1
	};
	let t = Ze(e);
	return {
		affectTypes: t,
		triggerImmediately: Qe(t, "initial")
	};
}, tt = class {
	compatible;
	#e;
	#t;
	#n = /* @__PURE__ */ new WeakSet();
	#r;
	#i;
	#a = /* @__PURE__ */ new Set();
	#o = /* @__PURE__ */ new Set();
	#s;
	#c = /* @__PURE__ */ new Map();
	#l = !1;
	constructor(e) {
		this.#e = e, this.#t = /* @__PURE__ */ new Map(), this.#n = /* @__PURE__ */ new WeakSet(), this.#s = {
			enable: (e = ["*"], t) => t ? this.withTriggers(e, !0, t) : this.setTriggersEnabled(e, !0),
			disable: (e = ["*"], t) => t ? this.withTriggers(e, !1, t) : this.setTriggersEnabled(e, !1),
			set: (e, t) => this.setTriggersEnabled(e, t),
			with: (e, t) => this.withTriggers(e, !0, t),
			without: (e, t) => this.withTriggers(e, !1, t),
			isEnabled: (e) => this.isTriggerEnabled(e)
		}, this.#i = { next: (e) => {
			e && (Array.isArray(e) ? this.#u(...e) : this.#u(e));
		} };
		let t = new WeakRef(this);
		this.#r = typeof Observable < "u" ? new Observable(function(e) {
			let n = e?.next?.bind?.(e);
			return ze(e, t, n);
		}) : null, this.compatible = () => this.#r;
	}
	bindSource(e) {
		return this.#e ??= e, this;
	}
	$safeExec(e, ...t) {
		if (!(!e || this.#n.has(e))) {
			this.#n.add(e);
			try {
				let n = e(...t);
				return n && typeof n.then == "function" ? n.catch(console.warn) : n;
			} catch (e) {
				console.warn(e);
			} finally {
				this.#n.delete(e);
			}
		}
	}
	#u(e, t = null, n, r = "all", ...i) {
		r = Je(r) ?? r;
		let a = this.#t, o = a?.size ? Array.from(a.entries()).map(([a, o]) => {
			if ((o.prop === e || o.prop === We || o.prop === null) && Qe(o.triggers, r)) return this.$safeExec(a, t, e, n, r, ...i);
		}).filter((e) => e && typeof e.then == "function") : [];
		if (Be.size) {
			let a = {
				source: this.#e,
				target: this.#e,
				value: t,
				prop: e,
				name: e,
				oldValue: n,
				trigger: r,
				args: i
			};
			for (let [e, t] of Be.entries()) if (Qe(t, r)) {
				let t = this.$safeExec(e, a);
				t && typeof t.then == "function" && o.push(t);
			}
		}
		return o.length ? Promise.allSettled(o) : void 0;
	}
	wrap(e) {
		return Array.isArray(e) ? Ue(e, this) : e;
	}
	get triggerControl() {
		return this.#s;
	}
	isTriggerEnabled(e) {
		return !Qe(this.#o, "all") && !Ye(e).some((e) => this.#o.has(e));
	}
	setTriggersEnabled(e = ["*"], t = !0) {
		let n = Xe(e);
		for (let e of n) t ? this.#o.delete(e) : this.#o.add(e);
	}
	withTriggers(e, t, n) {
		let r = [...Xe(e)], i = new Map(r.map((e) => [e, this.#o.has(e)])), a = () => {
			i.forEach((e, t) => {
				e ? this.#o.add(t) : this.#o.delete(t);
			});
		};
		this.setTriggersEnabled(r, t);
		try {
			let e = n?.();
			return e && typeof e.finally == "function" ? e.finally(a) : (a(), e);
		} catch (e) {
			throw a(), e;
		}
	}
	affected(e, t, n = ["*"]) {
		if (e == null || typeof e != "function") return;
		let r = et(n);
		return this.#t.set(e, {
			prop: t || We,
			triggers: r.affectTypes
		}), () => this.unaffected(e, t || We);
	}
	unaffected(e, t) {
		if (e != null && typeof e == "function") {
			let n = this.#t, r = n?.get(e);
			if (r && (r.prop == t || t == null || t == We)) return n.delete(e), () => this.affected(e, t || We, r.triggers);
		}
		return this.#t.clear();
	}
	trigger(e, t, n, r = "set", ...i) {
		if (typeof e == "symbol" || (r === void 0 && (r = "set"), r = Je(r) ?? r, !this.isTriggerEnabled(r))) return;
		let a = `${r ?? "all"}`, o = this.#c.get(e);
		o || (o = /* @__PURE__ */ new Map(), this.#c.set(e, o)), o.set(a, [
			e,
			t,
			n,
			r,
			i
		]), !this.#l && (this.#l = !0, queueMicrotask(() => {
			this.#l = !1;
			let e = this.#c;
			this.#c = /* @__PURE__ */ new Map();
			for (let [t, n] of e) if (!(t != null && this.#a.has(t))) {
				t != null && this.#a.add(t);
				try {
					for (let [, e] of n) {
						let [t, n, r, i, a] = e;
						try {
							this.#u(t, n, r, i, ...a ?? []);
						} catch (e) {
							console.warn(e);
						}
					}
				} finally {
					t != null && this.#a.delete(t);
				}
			}
		}));
	}
	get iterator() {
		return this.#i;
	}
}, nt = new Set([
	Symbol.toStringTag,
	Symbol.iterator,
	Symbol.asyncIterator,
	Symbol.toPrimitive,
	"toString",
	"valueOf",
	"inspect",
	"constructor",
	"__proto__",
	"prototype",
	"then",
	"catch",
	"finally",
	"next"
]), rt = (e, t) => {
	if (!nt.has(t)) return null;
	let n = B(e, t);
	return typeof n == "function" ? M(e, n) : n;
}, it = /* @__PURE__ */ new WeakMap();
function at(e, t) {
	let n = !0;
	try {
		it?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), it?.get?.(e)?.has?.(t) && (n = !0), n = typeof Reflect.getOwnPropertyDescriptor(e, t)?.get == "function";
	} catch {
		n = !0;
	} finally {
		it?.get?.(e)?.delete?.(t);
	}
	return n;
}
var ot = (e, t) => {
	if (s(e)) return e;
	let n = B(e, t);
	if (n == null && t != "value") {
		let r = B(e, "value");
		return r != null && !s(r) ? ot(r, t) : n;
	} else if (t == "value" && n != null && !s(n) && typeof n != "function") return ot(n, t) ?? n ?? e;
	return n ?? e;
}, st = (e, t, n) => {
	if (e == null) return !1;
	let r = __safeSetGuard.getOrInsert(e, /* @__PURE__ */ new Set());
	return r?.has?.(t) ? !1 : (r?.add?.(t), Reflect.set(e, t, n));
}, B = (e, t, n) => {
	let r;
	if (e == null) return e;
	let i = it.getOrInsert(e, /* @__PURE__ */ new Set());
	if (i?.has?.(t)) return null;
	if (!at(e, t)) r ??= Reflect.get(e, t, n ?? e);
	else {
		i?.add?.(t);
		try {
			r = Reflect.get(e, t, n ?? e);
		} catch {
			r = void 0;
		} finally {
			i.delete(t), i?.size === 0 && it?.delete?.(e);
		}
	}
	return typeof r == "function" ? M(e, r) : r;
}, ct = (e, t) => Object.prototype.hasOwnProperty.call(e, t), lt = (e, t = !1) => !!e && typeof e == "object" && !Array.isArray(e) && (ct(e, "key") || ct(e, "name") || ct(e, "oldValue") || ct(e, "old") || ct(e, "op") || ct(e, "trigger") || t && ct(e, "value")), ut = (e, t, n) => ct(e, t) ? e[t] : t == "oldValue" && ct(e, "old") ? e.old : n(), dt = (e, t = "manual") => Je(e.trigger ?? e.op ?? t), ft = (e) => typeof e == "string" || typeof e == "number" || typeof e == "symbol", pt = (e) => {
	let t = B(e, je) ?? B(e, "realProp");
	return ft(t) ? t : null;
}, mt = (e, t) => t == "value" ? pt(e) ?? t : t, ht = (e, t) => {
	let n = pt(e);
	return n != null && t == n ? B(e, "value") ?? B(e, F) ?? B(e, t) : t == null ? void 0 : B(e, t);
}, gt = (e, t) => {
	let n = (e, n, r) => (lt(n) || (r ??= n), t(lt(e) ? e : lt(n, !0) ? {
		key: e,
		trigger: r,
		...n
	} : {
		key: e,
		trigger: r ?? n
	})), r = e?.triggerControl;
	return r && Object.assign(n, r), n.custom = (e, t, r, i) => n({
		key: t,
		trigger: e,
		value: r,
		oldValue: i
	}), n;
}, _t = (e, t, n) => {
	if (e == null || s(e)) return e;
	if (([
		"deref",
		"bind",
		"@target",
		Se,
		I,
		Ce
	]?.indexOf(t) < 0 ? B(e, t)?.bind?.(e) : null) != null) return null;
	if ([I, Se].indexOf(t) >= 0) return B(e, t) ?? e;
	if (t == F) return B(e, t) ?? B(e, "value");
	if (t == Ce) return n;
	if (t == De) return n?.triggerControl;
	if (t == Symbol.observable) return n?.compatible;
	if (t == Symbol.subscribe) return (t, n, r) => V(n == null ? e : [e, n], t, r);
	if (t == Symbol.iterator || t == Symbol.asyncIterator) return B(e, t);
	if (t == Symbol.dispose) return (t) => {
		B(e, Symbol.dispose)?.(t), rn(t == null ? e : [e, t]);
	};
	if (t == Symbol.asyncDispose) return (t) => {
		B(e, Symbol.asyncDispose)?.(t), rn(t == null ? e : [e, t]);
	};
	if (t == Symbol.unsubscribe) return (t) => rn(t == null ? e : [e, t]);
	if (typeof t == "symbol" && (t in e || B(e, t) != null)) return B(e, t);
}, vt = (e, t, n) => {
	if (t == "subscribe") return n?.compatible?.[t] ?? ((t) => {
		if (typeof t == "function") return V(e, t);
		if ("next" in t && t?.next != null) {
			let n = V(e, t?.next), r = t?.complete;
			return t.complete = (...e) => (n?.(), r?.(...e)), t.complete;
		}
	});
}, yt = class {
	#e;
	#t;
	#n;
	constructor(e, t, n) {
		this.#e = e, this.#t = t, this.#n = n;
	}
	get(e, t, n) {
		return rt(e, t) ?? Reflect.get(e, t, n);
	}
	apply(e, t, n) {
		let r = [], i = [], a = [], o = [...this.#t], s = -1, c = Reflect.apply(e, t || this.#t, n);
		if (this.#n?.[L]) return Array.isArray(c) ? Et(c) : c;
		switch (this.#e) {
			case "push":
				s = o?.length, r = n;
				break;
			case "unshift":
				s = 0, r = n;
				break;
			case "pop":
				s = o?.length - 1, o.length > 0 && (i = [[
					s - 1,
					o[s - 1],
					null
				]]);
				break;
			case "shift":
				s = 0, o.length > 0 && (i = [[
					s,
					o[s],
					null
				]]);
				break;
			case "splice":
				let [e, t, ...c] = n;
				if (s = e, r = t > 0 ? c.slice(t) : [], i = t > 0 ? o?.slice?.(c?.length + e, e + (t - (c?.length || 0))) : [], s += (t || 0) - (c?.length || 1), t > 0 && c?.length > 0) for (let n = 0; n < Math.min(t, c?.length ?? 0); n++) a.push([
					e + n,
					c[n],
					o?.[e + n] ?? null
				]);
				break;
			case "sort":
			case "fill":
			case "reverse":
			case "copyWithin":
				s = 0;
				for (let e = 0; e < o.length; e++) N(o[e], this.#t[e]) && a.push([
					s + e,
					this.#t[e],
					o[e]
				]);
				break;
			case "set":
				s = n[1], a.push([
					s,
					n[0],
					o?.[s] ?? null
				]);
				break;
		}
		let l = z.get(this.#t);
		return r?.length == 1 ? l?.trigger?.(s, r[0], null, r[0] == null ? "add" : "set") : r?.length > 1 && (l?.trigger?.(s, r, null, "addAll"), r.forEach((e, t) => l?.trigger?.(s + t, e, null, e == null ? "add" : "set"))), a?.length == 1 ? l?.trigger?.(a[0]?.[0] ?? s, a[0]?.[1], a[0]?.[2], a[0]?.[2] == null ? "add" : "set") : a?.length > 1 && (l?.trigger?.(s, a, o, "setAll"), a.forEach((e, t) => l?.trigger?.(e?.[0] ?? s + t, e?.[1], e?.[2], e?.[2] == null ? "add" : "set"))), i?.length == 1 ? l?.trigger?.(s, null, i[0], i[0] == null ? "add" : "delete") : i?.length > 1 && (l?.trigger?.(s, null, i, "deleteAll"), i.forEach((e, t) => l?.trigger?.(s + t, null, e, e == null ? "add" : "delete"))), c == e ? new Proxy(c, this.#n) : Array.isArray(c) ? Et(c) : c;
	}
}, bt = (e, t, n, r) => {
	let i = Number.isInteger(n) && Number.isInteger(r) && r < n ? t.slice(r, n) : [];
	if (!e[L] && n !== r) {
		let e = z.get(t);
		i.length === 1 ? e?.trigger?.(r, null, i[0], "delete") : i.length > 1 && (e?.trigger?.(r, null, i, "deleteAll"), i.forEach((t, n) => e?.trigger?.(r + n, null, t, "delete")));
		let a = Number.isInteger(n) && Number.isInteger(r) && r > n ? r - n : 0;
		if (a === 1) e?.trigger?.(n, void 0, null, "add");
		else if (a > 1) {
			let t = Array(a).fill(void 0);
			e?.trigger?.(n, t, null, "addAll"), t.forEach((t, r) => e?.trigger?.(n + r, void 0, null, "add"));
		}
	}
}, xt = class {
	[L];
	constructor() {}
	has(e, t) {
		return Reflect.has(e, t);
	}
	get(e, t, n) {
		let r = rt(e, t);
		if (r != null) return r;
		if ([
			I,
			Se,
			"@target",
			"deref"
		].indexOf(t) >= 0 && B(e, t) != null && B(e, t) != e) return typeof B(e, t) == "function" ? B(e, t)?.bind?.(e) : B(e, t);
		let i = z?.get?.(e), a = _t(e, t, i);
		if (a != null) return a;
		let o = vt(e, t, i);
		if (o != null) return o;
		if (t == Ee) return oe.call(this, this);
		if (t == Oe) return gt(i, (t) => {
			let n = t.key ?? t.name ?? 0, r = ut(t, "value", () => B(e, n)), a = ut(t, "oldValue", () => void 0);
			return i?.trigger?.(n, r, a, dt(t, "manual"));
		});
		if (t == "@target" || t == I) return e;
		if (t == "x") return () => e?.x ?? e?.[0];
		if (t == "y") return () => e?.y ?? e?.[1];
		if (t == "z") return () => e?.z ?? e?.[2];
		if (t == "w") return () => e?.w ?? e?.[3];
		if (t == "r") return () => e?.r ?? e?.[0];
		if (t == "g") return () => e?.g ?? e?.[1];
		if (t == "b") return () => e?.b ?? e?.[2];
		if (t == "a") return () => e?.a ?? e?.[3];
		let s = B(e, t) ?? (t == "value" ? B(e, F) : null);
		return typeof s == "function" ? new Proxy(typeof s == "function" ? s?.bind?.(e) : s, new yt(t, e, this)) : s;
	}
	set(e, t, n) {
		if (typeof t != "symbol" && Number.isInteger(parseInt(t)) && (t = parseInt(t) ?? t), t == L && n) return this[L] = !!n, !0;
		if (t == L && !n) return delete this[L], !0;
		let r = B(e, t), i = [
			"x",
			"y",
			"z",
			"w"
		], a = [
			"r",
			"g",
			"b",
			"a"
		], o = i.indexOf(t), s = a.indexOf(t), c = !1;
		return c = o >= 0 ? Reflect.set(e, o, n) : s >= 0 ? Reflect.set(e, s, n) : Reflect.set(e, t, n), t == "length" && N(r, n) && bt(this, e, r, n), !this[L] && typeof t != "symbol" && N(r, n) && z?.get?.(e)?.trigger?.(t, n, r, "set"), c;
	}
	deleteProperty(e, t) {
		if (typeof t != "symbol" && Number.isInteger(parseInt(t)) && (t = parseInt(t) ?? t), t == L) return delete this[L], !0;
		let n = B(e, t), r = Reflect.deleteProperty(e, t);
		return !this[L] && t != "length" && t != L && typeof t != "symbol" && n != null && z.get(e)?.trigger?.(t, t, n, "delete"), r;
	}
}, St = class {
	[L];
	constructor() {}
	get(e, t, n) {
		if ([
			I,
			Se,
			"@target",
			"deref",
			"then",
			"catch",
			"finally"
		].indexOf(t) >= 0 && B(e, t) != null && B(e, t) != e) return typeof B(e, t) == "function" ? M(e, B(e, t)) : B(e, t);
		let r = z.get(e) ?? z.get(B(e, "value") ?? e);
		return _t(e, t, r) ?? (B(e, t) == null && t != "value" && u(e) && B(e, "value") != null && (typeof B(e, "value") == "object" || typeof B(e, "value") == "function") && B(B(e, "value"), t) != null && (e = B(e, "value") ?? e), vt(e, t, r) ?? (t == Ee ? oe.call(this, this) : t == Oe ? gt(r, (t) => {
			let n = mt(e, t.key ?? t.name ?? pt(e) ?? "value"), i = ut(t, "value", () => ht(e, n)), a = ut(t, "oldValue", () => n == "value" || n == pt(e) ? B(e, F) : void 0);
			return r?.trigger?.(n, i, a, dt(t, "manual"));
		}) : t == Symbol.toPrimitive ? (n) => {
			let r = ot(e, t);
			return B(r, t) ? B(r, t)?.(n) : s(r) ? c(r, n) : s(B(r, "value")) ? c(B(r, "value"), n) : c(B(r, "value") ?? r, n);
		} : t == Symbol.toStringTag ? () => {
			let n = ot(e, t);
			return B(n, t) ? B(n, t)?.() : s(n) ? String(n ?? "") || "" : s(B(n, "value")) ? String(B(n, "value") ?? "") || "" : String(B(n, "value") ?? n ?? "") || "";
		} : t == "toString" ? () => {
			let n = ot(e, t);
			return B(n, t) ? B(n, t)?.() : B(n, Symbol.toStringTag) ? B(n, Symbol.toStringTag)?.() : s(n) ? String(n ?? "") || "" : s(B(n, "value")) ? String(B(n, "value") ?? "") || "" : String(B(n, "value") ?? n ?? "") || "";
		} : t == "valueOf" ? () => {
			let n = ot(e, t);
			return B(n, t) ? B(n, t)?.() : B(n, Symbol.toPrimitive) ? B(n, Symbol.toPrimitive)?.() : s(n) ? n : s(B(n, "value")) ? B(n, "value") : B(n, "value") ?? n;
		} : typeof t == "symbol" && (t in e || B(e, t) != null) ? B(e, t) : ot(e, t)));
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	ownKeys(e) {
		return Reflect.ownKeys(e);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	isExtensible(e) {
		return Reflect.isExtensible(e);
	}
	getOwnPropertyDescriptor(e, t) {
		let n;
		try {
			it?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), it?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			it?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	has(e, t) {
		return t in e;
	}
	set(e, t, n) {
		return rt(e, t) ?? ie(n, (r) => {
			let i = rt(r, t);
			if (i != null) return i;
			if (t == L && n) return this[L] = !!n, !0;
			if (t == L && !n) return delete this[L], !0;
			let a = e;
			if (B(e, t) == null && t != "value" && u(e) && B(e, "value") != null && (typeof B(e, "value") == "object" || typeof B(e, "value") == "function") && B(B(e, "value"), t) != null && (e = B(e, "value") ?? e), typeof t == "symbol" && !(B(e, t) != null && t in e)) return;
			let o = mt(e, t), s = t == "value" ? B(e, F) ?? B(e, t) : B(e, t);
			e[t] = r;
			let c = B(e, t) ?? r;
			return !this[L] && typeof t != "symbol" && (B(e, Ae) ?? N)?.(s, c) && (z.get(e) ?? z.get(a))?.trigger?.(o, r, s), !0;
		});
	}
	defineProperty(e, t, n) {
		let r = rt(e, t);
		if (r != null) return r;
		if (t == L && n.value) return this[L] = !!n.value, !0;
		if (t == L && !n.value) return delete this[L], !0;
		if (B(e, t) == null && t != "value" && u(e) && B(e, "value") != null && (typeof B(e, "value") == "object" || typeof B(e, "value") == "function") && B(B(e, "value"), t) != null && (e = B(e, "value") ?? e), n.get == null && n.set == null) return Reflect.defineProperty(e, t, n);
		let i = B(e, t), a = Reflect.defineProperty(e, t, {
			get: n.get,
			set: n.set,
			enumerable: n.enumerable ?? !0,
			configurable: n.configurable ?? !0
		});
		return st(e, t, i), a;
	}
	deleteProperty(e, t) {
		if (t == L) return delete this[L], !0;
		B(e, t) == null && t != "value" && u(e) && B(e, "value") != null && (typeof B(e, "value") == "object" || typeof B(e, "value") == "function") && B(B(e, "value"), t) != null && (e = B(e, "value") ?? e);
		let n = B(e, t), r = Reflect.deleteProperty(e, t);
		return !this[L] && t != L && typeof t != "symbol" && z.get(e)?.trigger?.(t, null, n, "delete"), r;
	}
}, Ct = class {
	[L];
	constructor() {}
	get(e, t, n) {
		if ([
			I,
			Se,
			"@target",
			"deref"
		].indexOf(t) >= 0 && B(e, t) != null && B(e, t) != e) return typeof B(e, t) == "function" ? M(e, B(e, t)) : B(e, t);
		let r = z.get(e), i = _t(e, t, r);
		if (i != null) return i;
		let a = vt(e, t, r);
		if (a != null) return a;
		e = B(e, I) ?? B(e, Se) ?? e;
		let o = M(e, B(e, t));
		return typeof t == "symbol" && (t in e || B(e, t) != null) ? o : t == Ee ? oe.call(this, this) : t == Oe ? gt(r, (t) => {
			let n = t.key ?? t.name;
			if (n == null) return;
			let i = ut(t, "value", () => e.get(n));
			if (i == null && !ct(t, "value")) return;
			let a = ut(t, "oldValue", () => void 0);
			return r?.trigger?.(n, i, a, dt(t, "manual"));
		}) : t == "clear" ? () => {
			let t = Array.from(e?.entries?.() || []), n = o();
			return t.forEach(([t, n]) => {
				!this[L] && n && z.get(e)?.trigger?.(t, null, n, "delete");
			}), n;
		} : t == "delete" ? (t, n = null) => {
			let r = e.get(t), i = o(t);
			return !this[L] && r && z.get(e)?.trigger?.(t, null, r, "delete"), i;
		} : t == "set" ? (t, n) => ae(n, (r) => {
			let i = e.get(t), a = o(t, n);
			return N(i, a) && (this[L] || z.get(e)?.trigger?.(t, a, i, i == null ? "add" : "set")), a;
		}) : o;
	}
	set(e, t, n) {
		return t == L ? (this[L] = !!n, !0) : t == L && !n ? (delete this[L], !0) : Reflect.set(e, t, n);
	}
	has(e, t) {
		return Reflect.has(e, t);
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	ownKeys(e) {
		return Reflect.ownKeys(e);
	}
	isExtensible(e) {
		return Reflect.isExtensible(e);
	}
	getOwnPropertyDescriptor(e, t) {
		let n;
		try {
			it?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), it?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			it?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	deleteProperty(e, t) {
		return t == L ? (delete this[L], !0) : Reflect.deleteProperty(e, t);
	}
}, wt = class {
	[L] = !1;
	constructor() {}
	get(e, t, n) {
		if ([
			I,
			Se,
			"@target",
			"deref"
		].indexOf(t) >= 0 && B(e, t) != null && B(e, t) != e) return typeof B(e, t) == "function" ? M(e, B(e, t)) : B(e, t);
		let r = z.get(e), i = _t(e, t, r);
		if (i != null) return i;
		let a = vt(e, t, r);
		if (a != null) return a;
		e = B(e, I) ?? B(e, Se) ?? e;
		let o = M(e, B(e, t));
		return typeof t == "symbol" && (t in e || B(e, t) != null) ? o : t == Ee ? oe.call(this, this) : t == Oe ? gt(r, (t) => {
			let n = t.key ?? t.name;
			if (n == null) return;
			let i = ut(t, "value", () => e.has(n)), a = ut(t, "oldValue", () => void 0);
			return r?.trigger?.(n, i, a, dt(t, "manual"));
		}) : t == "clear" ? () => {
			let t = Array.from(e?.values?.() || []), n = o();
			return t.forEach((t) => {
				!this[L] && t && z.get(e)?.trigger?.(null, null, t, "delete");
			}), n;
		} : t == "delete" ? (t) => {
			let n = e.has(t) ? t : null, r = o(t);
			return !this[L] && n && z.get(e)?.trigger?.(t, null, n, "delete"), r;
		} : t == "add" ? (t) => {
			let n = e.has(t) ? t : null, r = o(t);
			return N(n, t) && !this[L] && !n && z.get(e)?.trigger?.(t, t, n, "add"), r;
		} : o;
	}
	set(e, t, n) {
		return t == L && n ? (this[L] = !!n, !0) : t == L && !n ? (delete this[L], !0) : Reflect.set(e, t, n);
	}
	has(e, t) {
		return Reflect.has(e, t);
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	ownKeys(e) {
		return Reflect.ownKeys(e);
	}
	isExtensible(e) {
		return Reflect.isExtensible(e);
	}
	getOwnPropertyDescriptor(e, t) {
		let n;
		try {
			it?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), it?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			it?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	deleteProperty(e, t) {
		return t == L ? (delete this[L], !0) : Reflect.deleteProperty(e, t);
	}
}, Tt = (e) => !!((typeof e == "object" || typeof e == "function") && e != null && (e?.[I] || e?.[ke])), Et = (e) => Tt(e) ? e : Ue(e, new xt()), Dt = (e) => Tt(e) ? e : Ue(e, new St()), Ot = (e) => Tt(e) ? e : Ue(e, new Ct()), kt = (e) => Tt(e) ? e : Ue(e, new wt()), At = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = Rt({
		[Te]: n ? e : null,
		[F]: n ? 0 : Number(Ne(e) || 0) || 0,
		[we]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[F] ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return c((typeof this?.[F] == "object" ? this?.[F]?.value || 0 : this?.[F]) ?? 0, e);
		},
		set value(e) {
			this[F] = (e != null && !Number.isNaN(e) ? Number(e) : this[F]) || 0;
		},
		get value() {
			return Number(this[F] || 0) || 0;
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, jt = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = Rt({
		[Te]: n ? e : null,
		[F]: (n ? "" : String(Ne(typeof e == "number" ? String(e) : e || ""))) ?? "",
		[we]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[F] ?? "") ?? "";
		},
		[Symbol?.toPrimitive](e) {
			return c(this?.[F] ?? "", e);
		},
		set value(e) {
			this[F] = String(typeof e == "number" ? String(e) : e || "") ?? "";
		},
		get value() {
			return String(this[F] ?? "") ?? "";
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, Mt = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = Rt({
		[Te]: n ? e : null,
		[F]: (n ? !1 : (Ne(e) == null ? !1 : typeof Ne(e) == "string" ? !0 : !!Ne(e)) || !1) || !1,
		[we]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[F] ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return c(!!this?.[F] || !1, e);
		},
		set value(e) {
			this[F] = (e == null ? this[F] : typeof e == "string" ? !0 : !!e) || !1;
		},
		get value() {
			return this[F] || !1;
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, Nt = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = Rt({
		[Te]: n ? e : null,
		[we]: t,
		[Symbol?.toStringTag]() {
			return String(this.value ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return c(this.value, e);
		},
		value: n ? null : Ne(e)
	});
	return e?.then?.((e) => r.value = e), V(e, (e) => {
		r?.[Oe]?.();
	}), r;
}, Pt = (e, t) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	try {
		Object.defineProperty(e, je, {
			value: t,
			writable: !0,
			configurable: !0
		});
	} catch {
		try {
			e[je] = t;
		} catch {}
	}
	try {
		Object.defineProperty(e, "realProp", {
			value: t,
			writable: !0,
			configurable: !0
		});
	} catch {
		try {
			e.realProp = t;
		} catch {}
	}
	return e;
}, Ft = (e, t = "value", n, r) => {
	if (s(e) || !e) return e;
	if (Array.isArray(e) && !P(e?.[1], e) && (Array.isArray(e?.[0]) || typeof e?.[0] == "object" || typeof e?.[0] == "function") && (e = e?.[0]), (t ??= Array.isArray(e) ? null : "value") == null || P(t, e)) return;
	if (t && u(e?.[t]) && zt(e?.[t])) return Pt(Bt(e?.[t]), t);
	if (t && typeof e?.getProperty == "function" && zt(e?.getProperty?.(t))) return Pt(e?.getProperty?.(t), t);
	let i = Rt({
		[F]: e[t] ??= n ?? e[t],
		[we]: r,
		[Symbol?.toStringTag]() {
			return String(e?.[t] ?? this[F] ?? "") || "";
		},
		[Symbol?.toPrimitive](n) {
			return c(e?.[t], n);
		},
		set value(n) {
			i[ee] = !0, e[t] = this[F] = n ?? ue(e[t]), i[ee] = !1;
		},
		get value() {
			return this[F] = e?.[t] ?? this[F];
		}
	});
	Pt(i, t);
	let a = V(e, (e, n, r, a) => {
		n === t && i?.[Oe]?.({
			key: t,
			value: e,
			oldValue: r,
			trigger: a
		});
	});
	return R(i, Symbol.dispose, a), i;
}, It = (e, t) => {
	switch (typeof e) {
		case "boolean": return Mt(e, t);
		case "number": return At(e, t);
		case "string": return jt(e, t);
		case "object": if (e != null) return Nt(Rt(e), t);
		default: return Nt(e, t);
	}
}, Lt = (e, t = "value", n) => {
	let r = zt(e) ? e : It(e, n);
	return t == null ? r : Ft(r, t, n);
};
function Rt(e, t) {
	if (e == null || typeof e == "symbol" || !(typeof e == "object" || typeof e == "function") || Tt(e) || (e = Ne?.(e)) == null || e instanceof Promise || e instanceof WeakRef || Tt(e)) return e;
	let n = e;
	if (n == null || typeof n == "symbol" || !(typeof n == "object" || typeof n == "function") || n instanceof Promise || n instanceof WeakRef) return n;
	let r = n;
	return Array.isArray(n) ? (r = Et(n), r) : n instanceof Map ? (r = Ot(n), r) : n instanceof Set ? (r = kt(n), r) : ((typeof n == "function" || typeof n == "object") && (r = Dt(n)), r);
}
var zt = (e) => typeof HTMLInputElement < "u" && e instanceof HTMLInputElement ? !0 : !!((typeof e == "object" || typeof e == "function") && e != null && (e?.[I] || e?.[ke] || z?.has?.(e))), Bt = (e) => zt(e) ? Rt(e) : null, Vt = /* @__PURE__ */ new WeakMap(), Ht = (e) => {
	if (!(typeof e == "symbol" || e == null || !(typeof e == "object" || typeof e == "function"))) return e;
}, Ut = "initial", Wt = (e) => {
	let t = e?.[je] ?? e?.realProp;
	return j(t) ? t : null;
}, Gt = (e, t) => {
	let n = Wt(e);
	return n != null && (t == null || t == "value") ? n : t;
}, Kt = (e, t) => t != null && t == Wt(e) ? e?.value : e?.[t], qt = (e, t, n, r) => {
	if (t != null && t == Wt(e)) {
		let r = Kt(e, t);
		if (r != null) return n?.(r, t, null, "set");
	}
	return pe(e, t, n, r);
}, Jt = (e, t, n) => {
	let r = et(t);
	if (n == Ut) {
		if (!r.triggerImmediately) return;
	} else if (!Qe(r.affectTypes, n)) return;
	return (t, r, i, ...a) => e?.(t, r, i, n, ...a);
}, Yt = (e, t, n, r = ["*"]) => {
	if (!e || !Ht(e)) return;
	let i = t == Symbol.iterator ? null : Gt(e, t), a = e?.[Ce] ?? z.get(e);
	e = e?.[I] ?? e, queueMicrotask(() => {
		let t = Jt(n, r, Ut);
		t && (i != null && i != Symbol.iterator ? qt(e, i, t, null) : me(e, t, null));
	});
	let o = a?.affected?.(n, i, r);
	return e?.[Symbol.dispose] ? o : (R(o, Symbol.dispose, o), R(o, Symbol.asyncDispose, o), R(e, Symbol.dispose, o), R(e, Symbol.asyncDispose, o), o);
}, Xt = (e, t, n, r = ["*"]) => {
	let i = et(r).affectTypes, a = {}, o = e?.value, s = (e) => {
		let t = e?.target?.value;
		Qe(i, "set") && n?.(t, "value", o, "set", e), o = t;
	};
	return e?.addEventListener?.("change", s, a), () => e?.removeEventListener?.("change", s, a);
}, Zt = (e) => Array.isArray(e) && e?.length == 2 && Ht(e?.[0]) && (j(e?.[1]) || e?.[1] == Symbol.iterator), Qt = (e, t, n, r = ["*"]) => {
	let i = j(e?.[1]) ? e?.[1] : null;
	return V(e?.[0], i, n, r);
}, $t = (e, t, n, r = ["*"]) => e?.then?.((e) => V?.(e, t, n, r))?.catch?.((e) => (console.warn(e), null)), V = (e, t, n = () => {}, r) => {
	if (typeof t == "function" ? (r = n, n = t, t = null) : t = Gt(e, t), (typeof n == "object" || Array.isArray(n)) && (r = n, n = () => {}), (s(e) || typeof e == "symbol") && et(r).triggerImmediately) return xe(globalThis?.Promise?.try?.(() => n?.(e, null, null, null, Ut)));
	if (typeof e?.[ke] == "function") return e?.[ke]?.(n, t, r);
	if (Ht(e)) {
		let i = e;
		if (Vt?.has?.(e = e?.[I] ?? e)) return Vt?.get?.(e)?.(i, t, n, r);
		if (zt(i) || Zt(e) && zt(e?.[0])) return Pe(e) ? Vt?.getOrInsert?.(e, $t)?.(e, t, n, r) : Zt(e) ? Vt?.getOrInsert?.(e, Qt)?.(e, t, n, r) : typeof HTMLInputElement < "u" && e instanceof HTMLInputElement ? Vt?.getOrInsert?.(e, Xt)?.(e, t, n, r) : Vt?.getOrInsert?.(e, Yt)?.(i, t, n, r);
		{
			let i = Jt(n, r, Ut);
			return i ? xe(globalThis?.Promise?.try?.(() => Zt(e) ? qt?.(e?.[0], e?.[1], i, null) : t != null && t != Symbol.iterator ? qt?.(e, t, i, null) : me?.(e, i, null))) : void 0;
		}
	}
}, en = class {
	#e = /* @__PURE__ */ new WeakMap();
	#t(e) {
		let t = this.#e.get(e);
		return t || (t = /* @__PURE__ */ new WeakMap(), this.#e.set(e, t)), t;
	}
	#n(e) {
		return !Array.isArray(e) || e.length !== 2 ? [null, null] : e;
	}
	hasL1(e) {
		return this.#e.has(e);
	}
	set(e, t) {
		let [n, r] = this.#n(e);
		return this.#t(n).set(r, t), this;
	}
	get(e) {
		let [t, n] = this.#n(e);
		return this.#e.get(t)?.get(n);
	}
	has(e) {
		let [t, n] = this.#n(e);
		return this.#e.get(t)?.has(n) ?? !1;
	}
	delete(e) {
		let [t, n] = this.#n(e), r = this.#e.get(t);
		return r ? r.delete(n) : !1;
	}
	deleteTop(e) {
		return this.#e.delete(e);
	}
	getOrCreate(e, t) {
		let [n, r] = this.#n(e), i = this.#t(n);
		if (i.has(r)) return i.get(r);
		let a = t();
		return i.set(r, a), a;
	}
	getOrInsert(e, t) {
		let [n, r] = this.#n(e), i = this.#t(n);
		return i.has(r) ? i.get(r) : (i.set(r, t), t);
	}
	getOrInsertComputed(e, t) {
		let [n, r] = this.#n(e), i = this.#t(n);
		if (i.has(r)) return i.get(r);
		let a = t([n, r]);
		return i.set(r, a), a;
	}
}, tn = new en();
function nn(e, t, n = ["*"]) {
	if (!e) return;
	if (tn.has([e, t])) return tn.get([e, t]);
	let r = (r, i, a, o) => {
		if (i == "value") {
			let i = (a?.value ?? a)?.entries?.(), o = e?.value ?? r?.value ?? r;
			if (i) for (let [e, n] of i) {
				let r = n ?? (a?.value ?? a)?.[e] ?? null, i = o?.[e];
				r == null && i != null ? t(i, e, null, "add") : r != null && i == null ? t(null, e, r, "delete") : N(r, i) && t(i, e, r, "set");
			}
			return nn(r ?? e?.value, t, n);
		}
		return i == null ? void 0 : e[i];
	};
	return tn.getOrInsertComputed([e, t], () => e instanceof Set ? V([an(e), Symbol.iterator], t, n) : e instanceof Map ? V(e, t, n) : u(e) ? V(e, r, n) : Array.isArray(e) && !(e?.length == 2 && j(e?.[1]) && zt(e?.[0])) ? V([e, Symbol.iterator], t, n) : V(e, t, n));
}
function rn(e, t) {
	return Fe(e, (e) => {
		let n = Array.isArray(e) && e?.length == 2 && ["object", "function"].indexOf(typeof e?.[0]) >= 0 && j(e?.[1]), r = n ? e?.[1] : null;
		e = n && r != null ? e?.[0] ?? e : e;
		let i = typeof e == "object" || typeof e == "function" ? e?.[I] ?? e : e;
		(e?.[Ce] ?? z.get(i))?.unaffected?.(t, r);
	});
}
//#endregion
//#region ../../projects/object.ts/src/core/Assigned.ts
var an = (e) => {
	let t = Rt([]);
	return t.push(...Array.from(e?.values?.() || [])), R(t, Symbol.dispose, V(e, (e, n, r) => {
		if (N(e, r)) if (r == null && e != null) t.push(e);
		else if (r != null && e == null) {
			let e = t.indexOf(r);
			e >= 0 && t.splice(e, 1);
		} else {
			let n = t.indexOf(r);
			n >= 0 && N(t[n], e) && (t[n] = e);
		}
	})), t;
}, on = /* @__PURE__ */ new Set();
[
	{
		name: "--screen-width",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--screen-height",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--visual-width",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--visual-height",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--clip-ampl",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--clip-freq",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--avail-width",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--avail-height",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--pixel-ratio",
		syntax: "<number>",
		inherits: !0,
		initialValue: "1"
	},
	{
		name: "--percent",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--percent-x",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--percent-y",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--scroll-left",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--scroll-top",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--drag-x",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--drag-y",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--resize-x",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--resize-y",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--shift-x",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--shift-y",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--cs-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cs-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cs-p-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cs-p-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--os-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--os-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--rv-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--rv-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cell-x",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cell-y",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	}
].forEach((e) => {
	if (typeof CSS > "u" || typeof CSS?.registerProperty != "function") return;
	let t = String(e?.name || "").trim();
	if (!(!t || on.has(t))) try {
		CSS.registerProperty(e);
	} catch (e) {
		String(e?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(e);
	} finally {
		on.add(t);
	}
});
//#endregion
//#region ../../projects/dom.ts/src/agate/Utils.ts
var sn = () => {
	let e = {
		canceled: !1,
		rAFs: /* @__PURE__ */ new Set(),
		last: null,
		cancel() {
			return this.canceled = !0, cancelAnimationFrame(this.last), this;
		},
		shedule(e) {
			return this.rAFs.add(e), this;
		}
	};
	return (async () => {
		for (; !e?.canceled;) await Promise.all((e?.rAFs?.values?.() ?? [])?.map?.((e) => Promise.try(e)?.catch?.(console.warn.bind(console)))), e.rAFs?.clear?.(), typeof requestAnimationFrame < "u" ? await new Promise((t) => {
			e.last = requestAnimationFrame(t);
		}) : await new Promise((e) => {
			setTimeout(e, 16);
		});
	})(), e;
};
typeof document < "u" && document?.documentElement;
var cn = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
	for (;;) cn.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var ln = (e, t, n) => {
	t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
		bubbles: !0,
		cancelable: !0
	}))));
}, H = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, un = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, dn = (e) => {
	if (e == ":fragment:") return document.createDocumentFragment();
	let t = document.createElement.bind(document);
	for (var n = t("div"), r, i = ""; e && (r = e.match("^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)([\"'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]"));) r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
	return i && (n.className = i.slice(1)), n;
}, fn = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, pn = {};
function mn(e, t, n, r = pn) {
	e?.addEventListener?.(t, n, r);
	let i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
	return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
var hn = (e, t) => {
	if (t) {
		let n = t;
		return n = t instanceof Map ? [...t.entries()] : [...Object.entries(t)], n.map(([t, n]) => ((ne(n) ? [...n] : n) ?? [])?.map?.((n) => mn(e, t, n)));
	}
}, gn = (e, t, n) => {
	if (t == null || !(t instanceof Node) && t?.element == null) return !1;
	if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
	if (n?.composedPath && typeof n.composedPath == "function") {
		let r = n.composedPath(), i = e?.element ?? e, a = t?.element ?? t;
		if (r.includes(i) && r.includes(a)) {
			let e = r.indexOf(i), t = r.indexOf(a);
			if (t >= 0 && e >= 0 && t < e) return !0;
		}
	}
	return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, _n = (e, t, n) => {
	if (n?.composedPath && typeof n.composedPath == "function") {
		let e = n.composedPath();
		for (let n of e) if ((n instanceof HTMLElement || n instanceof Element) && n.matches?.(t)) return n;
	}
	let r = e?.matches?.(t) ? e : null, i = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host, a = i?.matches?.(t) ? i : null, o = e?.closest?.(t) ?? r?.closest?.(t) ?? a?.closest?.(t) ?? null;
	return r ?? o ?? a;
}, vn = /* @__PURE__ */ new WeakMap(), yn = (e = document.documentElement) => vn.getOrInsertComputed(e, () => {
	let t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
	if (t?.zoom) return t?.zoom || 1;
	if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), bn = (e = document.documentElement) => (e?.currentCSSZoom == null ? yn(e) : 1) || 1;
(() => {
	let e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = t ? {
		"--vv-width": `${t.width}px`,
		"--vv-height": `${t.height}px`,
		"--vv-offset-left": `${t.offsetLeft}px`,
		"--vv-offset-top": `${t.offsetTop}px`,
		"--vv-scale": String(t.scale ?? 1)
	} : {
		"--vv-width": typeof window < "u" ? `${window.innerWidth}px` : "0px",
		"--vv-height": typeof window < "u" ? `${window.innerHeight}px` : "0px",
		"--vv-offset-left": "0px",
		"--vv-offset-top": "0px",
		"--vv-scale": "1"
	};
	if (typeof screen < "u") {
		let t = screen?.availWidth + "px", r = screen?.availHeight + "px";
		return {
			"--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
			"--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
			"--avail-width": e ? r : t,
			"--avail-height": e ? t : r,
			"--view-height": Math.min(screen?.availHeight, window?.innerHeight) + "px",
			"--pixel-ratio": String(devicePixelRatio || 1),
			...n
		};
	}
	return {
		"--screen-width": "0px",
		"--screen-height": "0px",
		"--avail-width": "0px",
		"--avail-height": "0px",
		"--view-height": "0px",
		"--pixel-ratio": "1",
		...n
	};
})(), new OffscreenCanvas(1, 1).getContext("2d");
//#endregion
//#region ../../projects/dom.ts/src/mixin/Observer.ts
var xn = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Sn = (e, t, n) => {
	if (typeof e?.selector == "string") return Cn(e, e?.selector, t, n);
	let r = new Set((t.split(",") || [t]).map((e) => e.trim())), i = new MutationObserver((e, t) => {
		for (let i of e) i.attributeName && r.has(i.attributeName) && n(i, t);
	});
	return (e?.element ?? e) instanceof Node && i.observe(e = xn(e), {
		attributes: !0,
		attributeOldValue: !0,
		attributeFilter: [...r]
	}), r.forEach((t) => n({
		target: e,
		type: "attributes",
		attributeName: t,
		oldValue: e?.getAttribute?.(t)
	}, i)), i;
}, Cn = (e, t, n, r) => {
	let i = new Set([...n.split(",") || [n]].map((e) => e.trim())), a = new MutationObserver((e, n) => {
		for (let a of e) if (a.type == "childList") {
			let e = Array.from(a.addedNodes) || [], o = Array.from(a.removedNodes) || [];
			e.push(...Array.from(a.addedNodes || []).flatMap((e) => Array.from(e?.querySelectorAll?.(t) || []))), o.push(...Array.from(a.removedNodes || []).flatMap((e) => Array.from(e?.querySelectorAll?.(t) || []))), [...new Set(e)]?.filter((e) => e?.matches?.(t))?.map?.((e) => {
				i.forEach((t) => {
					r({
						target: e,
						type: "attributes",
						attributeName: t,
						oldValue: e?.getAttribute?.(t)
					}, n);
				});
			});
		} else a.target?.matches?.(t) && a.attributeName && i.has(a.attributeName) && r(a, n);
	});
	return a.observe(e = xn(e), {
		attributeOldValue: !0,
		attributes: !0,
		attributeFilter: [...i],
		childList: !0,
		subtree: !0,
		characterData: !0
	}), [...e.querySelectorAll(t)].map((e) => i.forEach((t) => r({
		target: e,
		type: "attributes",
		attributeName: t,
		oldValue: e?.getAttribute?.(t)
	}, a))), a;
}, wn = (e, t = "*", n = (e, t) => {}) => {
	let r = (e) => {
		let n = Array.from(e || []) || [];
		return n.push(...Array.from(e || []).flatMap((e) => Array.from(e?.querySelectorAll?.(t) || []))), [...Array.from(new Set(n).values())].filter((e) => e?.matches?.(t));
	}, i = (e) => {
		let t = u?.deref?.(), i = r(e.addedNodes), a = r(e.removedNodes);
		(i.length > 0 || a.length > 0) && n?.({
			type: e.type,
			target: e.target,
			attributeName: e.attributeName,
			attributeNamespace: e.attributeNamespace,
			nextSibling: e.nextSibling,
			oldValue: e.oldValue,
			previousSibling: e.previousSibling,
			addedNodes: i,
			removedNodes: a
		}, t);
	}, a = (e) => {
		i({
			addedNodes: [e?.target].filter((e) => !!e),
			removedNodes: [e?.relatedTarget].filter((e) => !!e),
			type: "childList",
			target: e?.currentTarget
		});
	}, o = (e) => {
		i({
			addedNodes: [e?.relatedTarget].filter((e) => !!e),
			removedNodes: [e?.target].filter((e) => !!e),
			type: "childList",
			target: e?.currentTarget
		});
	}, s = (e) => {
		i({
			addedNodes: [e?.target].filter((e) => !!e),
			removedNodes: [e?.relatedTarget || document?.activeElement].filter((e) => !!e),
			type: "childList",
			target: e?.currentTarget
		});
	}, c = {
		passive: !0,
		capture: !1
	};
	if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", a, c), e.addEventListener("pointerout", o, c), e.addEventListener("pointerdown", a, c), e.addEventListener("pointerup", o, c), e.addEventListener("pointercancel", o, c), { disconnect: () => {
		e.removeEventListener("pointerover", a, c), e.removeEventListener("pointerout", o, c), e.removeEventListener("pointerdown", a, c), e.removeEventListener("pointerup", o, c), e.removeEventListener("pointercancel", o, c);
	} };
	if (t?.includes?.(":hover")) return e.addEventListener("pointerover", a, c), e.addEventListener("pointerout", o, c), { disconnect: () => {
		e.removeEventListener("pointerover", a, c), e.removeEventListener("pointerout", o, c);
	} };
	if (t?.includes?.(":active")) return e.addEventListener("pointerdown", a, c), e.addEventListener("pointerup", o, c), e.addEventListener("pointercancel", o, c), { disconnect: () => {
		e.removeEventListener("pointerdown", a, c), e.removeEventListener("pointerup", o, c), e.removeEventListener("pointercancel", o, c);
	} };
	if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", a, c), e.addEventListener("focusout", o, c), e.addEventListener("click", s, c), { disconnect: () => {
		e.removeEventListener("focusin", a, c), e.removeEventListener("focusout", o, c), e.removeEventListener("click", s, c);
	} };
	let l = new MutationObserver((e, t) => {
		for (let t of e) t.type == "childList" && i(t);
	}), u = new WeakRef(l);
	(e?.element ?? e) instanceof Node && l.observe(e = xn(e), {
		childList: !0,
		subtree: !0
	});
	let d = Array.from(e.querySelectorAll(t));
	return d.length > 0 && n?.({ addedNodes: d }, l), l;
}, Tn = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", En = (e) => typeof e == "string" && /@import\b/i.test(e), Dn = "DOM", On = typeof document < "u" ? document.createElement("style") : null;
On && (typeof document < "u" && document.querySelector("head")?.appendChild?.(On), On.dataset.owner = Dn);
var kn = (e, t, n = "") => {
	e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, An = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", jn = (e) => An && e instanceof CSSStyleValue, Mn = (e) => An && e instanceof CSSUnitValue, Nn = (e, t, n, r = "") => {
	if (!(!e || !t)) {
		if (n == null) {
			e.getPropertyValue(t) !== "" && e.removeProperty(t);
			return;
		}
		e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
	}
}, Pn = (e, t, n, r = "") => {
	if (!e || !t) return e;
	let i = v(t), a = e.style, o = e.attributeStyleMap ?? e.styleMap;
	if (!An || !o) return Fn(e, t, n, r);
	let s = u(n) && !(jn(n) || Mn(n)) ? n?.value : n;
	if (s == null) return o.delete?.(i), a && Nn(a, i, null, r), e;
	if (jn(s)) {
		let t = o.get(i);
		if (Mn(s) && Mn(t)) {
			if (t.value === s.value && t.unit === s.unit) return e;
		} else if (t === s) return e;
		return o.set(i, s), e;
	}
	if (typeof s == "number") if (CSS?.number && !i.startsWith("--")) {
		let t = CSS.number(s), n = o.get(i);
		return Mn(n) && n.value === t.value && n.unit === t.unit || o.set(i, t), e;
	} else return Nn(a, i, String(s), r), e;
	if (typeof s == "string" && !jn(s)) {
		let t = w(s);
		if (typeof t == "number" && CSS?.number && !i.startsWith("--")) {
			let n = CSS.number(t), r = o.get(i);
			return Mn(r) && r.value === n.value && r.unit === n.unit || o.set(i, n), e;
		} else return Nn(a, i, s, r), e;
	}
	return Nn(a, i, String(s), r), e;
}, Fn = (e, t, n, r = "") => {
	if (!e || !t) return e;
	let i = v(t), a = e.style;
	if (!a) return e;
	let o = u(n) && !(jn(n) || Mn(n)) ? n?.value : n;
	return typeof o == "string" && !jn(o) && (o = w(o) ?? o), o == null ? (Nn(a, i, null, r), e) : (jn(o), Nn(a, i, String(o), r), e);
}, In = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), Ln = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new Map(), zn = (e) => {
	if (!e) return null;
	if (Rn.has(e)) return Rn.get(e);
	if (e instanceof Blob || e instanceof File) {
		if (Ln.has(e)) return Ln.get(e);
		let t = URL.createObjectURL(e);
		return Ln.set(e, t), Rn.set(t, t), t;
	}
	if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
		let t = fetch(e?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (t) => {
			let n = await t.blob(), r = URL.createObjectURL(n);
			return Ln.set(n, r), Rn.set(e, r), Rn.set(r, r), r;
		});
		return Rn.set(e, t), t;
	}
	if (typeof e == "string") {
		let t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
		return Ln.set(t, n), Rn.set(n, n), n;
	}
	return e;
}, Bn = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new WeakMap(), Hn = (e) => {
	if (!e) return "";
	if (Bn.has(e)) return Bn.get(e) ?? "";
	if (e instanceof Blob || e instanceof File) {
		if (Vn.has(e)) return Vn.get(e) ?? "";
		let t = e?.text?.()?.then?.((t) => (Vn.set(e, t), t));
		return Vn.set(e, t), t;
	}
	if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
		let t = fetch(e?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (t) => {
			let n = await t.text();
			return Bn.set(e, n), n;
		});
		return Bn.set(e, t), t;
	}
	return typeof e == "string" && Bn.set(e, e), e;
}, Un = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new WeakMap(), qn = (e, t = "ux-query", n = null) => {
	if (!e || !Tn()) return null;
	let r = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, i = r instanceof ShadowRoot, a = i ? r.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
	if (!a) return null;
	let o = `${t || ""}:${e}`, s;
	if (i) {
		let e = Wn.get(r);
		e || (e = /* @__PURE__ */ new Map(), Wn.set(r, e)), s = e.get(o), s || (s = new CSSStyleSheet(), e.set(o, s), a.includes(s) || a.push(s));
	} else s = Un.get(o), s || (s = new CSSStyleSheet(), Un.set(o, s), a.includes(s) || a.push(s));
	if (t) {
		let n;
		if (i) {
			let e = Kn.get(r);
			e || (e = /* @__PURE__ */ new Map(), Kn.set(r, e)), n = e.get(t);
		} else n = Gn.get(t);
		if (!n) {
			let e = Array.from(s.cssRules || []), a = e.findIndex((e) => e instanceof CSSLayerBlockRule && e.name === t);
			if (a === -1) try {
				s.insertRule(`@layer ${t} {}`, s.cssRules.length);
				let e = s.cssRules[s.cssRules.length - 1];
				e instanceof CSSLayerBlockRule && (n = e);
			} catch {
				n = void 0;
			}
			else n = e[a];
			if (n) if (i) {
				let e = Kn.get(r);
				e || (e = /* @__PURE__ */ new Map(), Kn.set(r, e)), e.set(t, n);
			} else Gn.set(t, n);
		}
		if (n) {
			let t = Array.from(n.cssRules || []).findIndex((t) => t instanceof CSSStyleRule && t.selectorText?.trim?.() === e?.trim?.());
			if (t === -1) try {
				t = n.insertRule(`${e} {}`, n.cssRules.length);
			} catch {
				return null;
			}
			return n.cssRules[t];
		}
	}
	let c = Array.from(s.cssRules || []).findIndex((t) => t instanceof CSSStyleRule && t.selectorText?.trim?.() === e?.trim?.());
	if (c === -1) try {
		c = s.insertRule(`${e} {}`, s.cssRules.length);
	} catch {
		return null;
	}
	let l = s.cssRules[c];
	return l instanceof CSSStyleRule ? l : null;
}, Jn = (e, t, n, r = "") => An ? Pn(e, t, n, r) : Fn(e, t, n, r), Yn = (e, t, n = "", r) => {
	let i = zn(e), a = typeof e == "string" && URL.canParse(e) ? e : i;
	return t?.[0] && (t[0].fetchPriority = "high"), t && a && typeof a == "string" && kn(t, a, n), t?.[0] && (!URL.canParse(e) || r) && t?.[0] instanceof HTMLLinkElement, In(i, (e) => {
		t?.[0] && e && (kn(t, e, n), t?.[0].setAttribute("loaded", ""));
	})?.catch?.((e) => {
		console.warn("Failed to load style sheet:", e);
	});
}, Xn = (e) => {
	let t = typeof document < "u" ? document.createElement("link") : null;
	return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
		rel: "stylesheet",
		type: "text/css",
		crossOrigin: "same-origin"
	}), t.dataset.owner = Dn, Yn(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, Zn = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
	let r = t?.querySelector?.("head") ?? t;
	if (typeof HTMLHeadElement < "u" && r instanceof HTMLHeadElement) return Xn(e);
	let i = typeof document < "u" ? document.createElement("style") : null;
	return i ? (i.dataset.owner = Dn, Yn(e, [i, "innerHTML"], n), r?.prepend?.(i), i) : null;
}, Qn = /* @__PURE__ */ new Map(), $n = /* @__PURE__ */ new WeakMap(), er = (e, t) => {
	if (!e || !t) return !1;
	try {
		return e.replaceSync(t), !0;
	} catch (e) {
		let t = String(e?.message || "").toLowerCase();
		return t.includes("@import rules are not allowed") || t.includes("@import") && t.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", e), !1;
	}
}, tr = (e, t = null) => {
	if (!Tn()) return typeof e == "string" && Zn(e, void 0, t || ""), null;
	if (typeof e == "string" && En(e)) return Zn(e, void 0, t || ""), null;
	if (typeof e == "string" && Qn?.has?.(e)) {
		let t = Qn.get(e);
		return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(t) && document.adoptedStyleSheets.push(t), t;
	}
	if ((e instanceof Blob || e instanceof File) && $n?.has?.(e)) {
		let t = $n.get(e);
		return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(t) && document.adoptedStyleSheets.push(t), t;
	}
	if (!e) return null;
	let n = typeof e == "string" ? Qn.getOrInsertComputed(e, (e) => new CSSStyleSheet()) : $n.getOrInsertComputed(e, (e) => new CSSStyleSheet());
	if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
		let r = t ? `@layer ${t} { ${e} }` : e;
		return Qn.set(e, n), er(n, r) || (nr(n), Qn.delete(e), Zn(e)), n;
	} else In(Hn(e), (r) => {
		if (Qn.set(r, n), r) return En(r) ? (nr(n), Qn.delete(r), $n.delete(e), Zn(r, void 0, t || ""), n) : (er(n, t ? `@layer ${t} { ${r} }` : r) || (nr(n), Qn.delete(r), $n.delete(e), Zn(r, void 0, t || "")), n);
	});
	return n;
}, nr = (e) => {
	if (!e) return !1;
	let t = typeof e == "string" ? Qn.get(e) : e;
	if (!t || typeof document > "u") return !1;
	let n = document.adoptedStyleSheets, r = n.indexOf(t);
	return r === -1 ? !1 : (n.splice(r, 1), !0);
}, rr = /* @__PURE__ */ new WeakMap(), ir = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), ar = (e, t) => {
	if (e) {
		if (t) {
			let n = rr.getOrInsert(e, /* @__PURE__ */ new Set());
			[...t?.values?.() || []].map((t) => ir(e, n, t));
		}
		return e;
	}
}, or = /* @__PURE__ */ new Map(), sr = (e, t) => {
	let n = [...e.entries() || []];
	return new Map(n?.map?.(([e, n]) => [e, n?.get?.(t)])?.filter?.(([e, t]) => !!t) || []);
}, cr = (e, t, n) => {
	let r = or.get(t);
	return r || (r = /* @__PURE__ */ new WeakMap(), or.set(t, r)), r.has(e) || r.set(e, n), e;
}, lr = (e, t) => {
	if (!(!e || !t)) {
		for (let [n, r] of t.entries()) cr(e, n, r);
		return e;
	}
}, ur = (e, t) => {
	if (e) {
		if (t) {
			let n = pr?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
			pr?.has?.(e) || pr?.set?.(e, n), [...t?.values?.() || []].map((t) => fr(e, t, n));
		}
		return e;
	}
}, dr = (e) => ({
	storeSet: sr(or, e),
	mixinSet: pr?.get?.(e),
	behaviorSet: rr?.get?.(e)
}), fr = (e, t, n) => {
	let r = new WeakRef(e);
	return n ||= pr?.get?.(e), n?.has?.(t) || (n?.add?.(t), mr?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((e) => !!e).join(" ")), t?.connect?.(r, t, dr(e))), e;
}, pr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new WeakMap(), _r = (e, t) => {
	typeof t == "string" && (t = hr?.get?.(t));
	let n = new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((e) => hr?.get?.(e)).filter((e) => !!e)), i = pr?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
	mr?.has?.(t) || mr?.set?.(t, /* @__PURE__ */ new WeakSet()), pr?.has?.(e) || pr?.set?.(e, i);
	let a = new WeakRef(e);
	i?.has?.(t) || (r.has(t) || t?.disconnect?.(a, t, dr(e)), (r.has(t) || !mr?.get?.(t)?.has?.(e)) && (t?.connect?.(a, t, dr(e)), n.add(gr?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((e) => !!e).join(" "))), mr?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(a, t, dr(e))));
}, vr = /* @__PURE__ */ new Set(), yr = (e = typeof document < "u" ? document : null) => {
	if (e) return vr?.has?.(e) || (vr?.add?.(e), Cn(e, "*", "data-mixin", (e) => br(e.target)), wn(e, "[data-mixin]", (e) => {
		for (let t of e.addedNodes) t instanceof HTMLElement && br(t);
	})), e;
}, br = (e) => {
	let t = new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
	[...new Set([...t].map((e) => hr?.get?.(e)).filter((e) => !!e))]?.map?.((t) => _r(e, t));
}, xr = (e, t) => {
	e.forEach((e) => t ? _r(e, t) : br(e));
}, Sr = (e) => {
	for (let t of vr) xr(t?.querySelectorAll?.("[data-mixin]"), e);
}, Cr = new FinalizationRegistry((e) => {
	hr?.delete?.(e);
}), wr = (e, t) => {
	if (!gr?.has?.(t)) {
		let n = e?.trim?.();
		n && (gr?.set?.(t, n), hr?.set?.(n, t), Cr?.register?.(t, n), Sr(t));
	}
};
yr(typeof document < "u" ? document : null);
var Tr = class {
	constructor(e = null) {
		e && wr(e, this);
	}
	connect(e, t, n) {
		return this;
	}
	disconnect(e, t, n) {
		return this;
	}
	storeForElement(e) {
		return or.get(this.name || "")?.get?.(e);
	}
	relatedForElement(e) {
		return dr(e);
	}
	get elements() {
		return mr?.get?.(this);
	}
	get storage() {
		return or?.get?.(this.name || "");
	}
	get name() {
		return gr?.get?.(this);
	}
}, Er = (e, t, n) => {
	let r = n;
	u(n) && (n = n.value);
	let i = (n = S(n)) != null && n !== !1;
	return C(r, () => {
		e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
	}), e;
}, Dr = (e, t, n) => {
	if (!(t = typeof t == "string" ? y(t) : t) || !e || [
		"style",
		"dataset",
		"attributeStyleMap",
		"styleMap",
		"computedStyleMap"
	].indexOf(t || "") != -1) return e;
	let r = n;
	return u(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && C(r, () => {
		n == null ? delete e[t] : e[t] = n;
	}), e;
}, Or = (e, t, n) => {
	let r = e?.dataset;
	if (!t || !e || !r) return e;
	let i = n;
	return u(n) && (n = n?.value), t = y(t), r?.[t] === (n = S(n)) || (n == null || n === !1 ? delete r[t] : C(i, () => {
		typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
	})), e;
}, kr = (e, t) => e.style.removeProperty(v(t)), Ar = (e, t, n) => {
	let r = e?.style;
	return !t || typeof t != "string" || !e || !r || C(n, () => {
		x(n) || u(n) || b(n) ? Jn(e, t, n) : n ?? kr(e, t);
	}), e;
}, jr = (e, t, n) => {
	if (!t || !e) return e;
	let r = n;
	return u(n) && (n = n.value), t = v(t), e?.getAttribute?.(t) === (n = S(n)) || C(r, () => {
		typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == 1) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
	}), e;
};
//#endregion
//#region ../../projects/dom.ts/src/mixin/junction/types.ts
function Mr(e, t) {
	let n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x, t.x), a = Math.max(e.y, t.y);
	return {
		left: n,
		top: r,
		right: i,
		bottom: a,
		width: i - n,
		height: a - r
	};
}
var Nr = {
	start: "junction-select:start",
	move: "junction-select:move",
	end: "junction-select:end",
	cancel: "junction-select:cancel"
}, Pr = {
	start: "junction-drag:start",
	move: "junction-drag:move",
	end: "junction-drag:end"
}, Fr = {
	start: "junction-resize:start",
	move: "junction-resize:move",
	end: "junction-resize:end"
}, Ir = /* @__PURE__ */ new WeakMap(), Lr = (e, t, n) => {
	let r = Ir.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
	i.push(n), r.set(t, i), Ir.set(e, r);
}, Rr = (e, t) => {
	let n = Ir.get(e), r = n?.get(t);
	if (r) {
		for (let e of r) try {
			e();
		} catch {}
		n.delete(t), n.size === 0 && Ir.delete(e);
	}
}, zr = (e, t) => {
	let n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
	return Number.isFinite(r) ? r : 0;
}, Br = (e, t, n) => {
	let r = e.getAttribute(t)?.trim();
	if (!r) return n;
	let i = e.querySelector(r);
	return i instanceof HTMLElement ? i : n;
}, Vr = class extends Tr {
	constructor() {
		super("ui-junction-select");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		let n = document.createElement("div");
		n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
		let r = !1, i = {
			x: 0,
			y: 0
		}, a = {
			x: 0,
			y: 0
		}, o = (e) => {
			let n = t.getBoundingClientRect();
			return {
				x: e.clientX - n.left,
				y: e.clientY - n.top
			};
		}, s = () => {
			let e = Mr(i, a);
			if (e.width < 1 && e.height < 1) {
				n.style.display = "none";
				return;
			}
			n.style.display = "block", n.style.left = `${e.left}px`, n.style.top = `${e.top}px`, n.style.width = `${e.width}px`, n.style.height = `${e.height}px`;
		}, c = (e) => {
			e.button === 0 && (e.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (e.target === t || t.contains(e.target)) && (r = !0, i = o(e), a = { ...i }, t.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(Nr.start, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					host: t
				}
			})), s()));
		}, l = (e) => {
			if (!r) return;
			a = o(e), s();
			let n = Mr(i, a);
			t.dispatchEvent(new CustomEvent(Nr.move, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					box: n,
					host: t
				}
			}));
		}, u = (e) => {
			if (!r) return;
			r = !1;
			try {
				t.releasePointerCapture(e.pointerId);
			} catch {}
			let n = Mr(i, a);
			t.dispatchEvent(new CustomEvent(Nr.end, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					box: n,
					host: t
				}
			}));
		};
		return Lr(t, "ui-junction-select", () => {
			n.remove();
		}), Lr(t, "ui-junction-select", mn(t, "pointerdown", c)), Lr(t, "ui-junction-select", mn(t, "pointermove", l)), Lr(t, "ui-junction-select", mn(t, "pointerup", (e) => {
			r && u(e);
		})), Lr(t, "ui-junction-select", mn(t, "pointercancel", (e) => {
			if (r) {
				r = !1, n.style.display = "none";
				try {
					t.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(Nr.cancel, {
					bubbles: !0,
					detail: { host: t }
				}));
			}
		})), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && Rr(t, "ui-junction-select"), this;
	}
}, Hr = class extends Tr {
	constructor() {
		super("ui-junction-drag");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		Jn(t, "--jx-drag-x", zr(t, "--jx-drag-x")), Jn(t, "--jx-drag-y", zr(t, "--jx-drag-y"));
		let n = t.style.transform;
		(!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
		let r = Br(t, "data-junction-drag-handle", t), i = !1, a = 0, o = 0, s = 0, c = 0, l = (e) => {
			e.button === 0 && (e.target !== r && !r.contains(e.target) || (i = !0, a = e.clientX, o = e.clientY, s = zr(t, "--jx-drag-x"), c = zr(t, "--jx-drag-y"), r.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(Pr.start, {
				bubbles: !0,
				detail: {
					host: t,
					clientX: e.clientX,
					clientY: e.clientY,
					baseX: s,
					baseY: c
				}
			}))));
		}, u = (e) => {
			if (!i) return;
			let n = e.clientX - a, r = e.clientY - o, l = s + n, u = c + r;
			Jn(t, "--jx-drag-x", l), Jn(t, "--jx-drag-y", u), t.dispatchEvent(new CustomEvent(Pr.move, {
				bubbles: !0,
				detail: {
					host: t,
					dx: n,
					dy: r,
					x: l,
					y: u
				}
			}));
		}, d = (e) => {
			if (i) {
				i = !1;
				try {
					r.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(Pr.end, {
					bubbles: !0,
					detail: {
						host: t,
						x: zr(t, "--jx-drag-x"),
						y: zr(t, "--jx-drag-y")
					}
				}));
			}
		};
		return Lr(t, "ui-junction-drag", () => {
			t.style.transform = n;
		}), Lr(t, "ui-junction-drag", mn(r, "pointerdown", l)), Lr(t, "ui-junction-drag", mn(r, "pointermove", u)), Lr(t, "ui-junction-drag", mn(r, "pointerup", d)), Lr(t, "ui-junction-drag", mn(r, "pointercancel", d)), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && Rr(t, "ui-junction-drag"), this;
	}
}, Ur = class extends Tr {
	constructor() {
		super("ui-junction-resize");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		let n = Br(t, "data-junction-resize-handle", t), r = !1, i = 0, a = 0, o = 0, s = 0, c = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), l = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), u = (e) => {
			e.button === 0 && (e.target !== n && !n.contains(e.target) || (r = !0, i = e.clientX, a = e.clientY, o = t.offsetWidth, s = t.offsetHeight, n.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(Fr.start, {
				bubbles: !0,
				detail: {
					host: t,
					width: o,
					height: s
				}
			}))));
		}, d = (e) => {
			if (!r) return;
			let n = Math.max(c, o + (e.clientX - i)), u = Math.max(l, s + (e.clientY - a));
			t.style.width = `${n}px`, t.style.height = `${u}px`, t.dispatchEvent(new CustomEvent(Fr.move, {
				bubbles: !0,
				detail: {
					host: t,
					width: n,
					height: u
				}
			}));
		}, f = (e) => {
			if (r) {
				r = !1;
				try {
					n.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(Fr.end, {
					bubbles: !0,
					detail: {
						host: t,
						width: t.offsetWidth,
						height: t.offsetHeight
					}
				}));
			}
		};
		return Lr(t, "ui-junction-resize", mn(n, "pointerdown", u)), Lr(t, "ui-junction-resize", mn(n, "pointermove", d)), Lr(t, "ui-junction-resize", mn(n, "pointerup", f)), Lr(t, "ui-junction-resize", mn(n, "pointercancel", f)), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && Rr(t, "ui-junction-resize"), this;
	}
};
new Vr(), new Hr(), new Ur();
//#endregion
//#region ../../projects/subsystem/src/routing/api/channel-actions.ts
var Wr = {
	ViewerPushToWorkcenter: "viewer.attach-to-workcenter",
	WorkcenterAttach: "attach-files",
	WorkcenterFileAttach: "file-attach",
	WorkcenterShare: "content-share"
}, Gr = {
	WallpaperSet: "workspace.wallpaper-set",
	WallpaperFromFile: "workspace.wallpaper-from-file",
	SpeedDialPinHref: "workspace.speed-dial-pin-href",
	SpeedDialPinFile: "workspace.speed-dial-pin-file"
};
Wr.ViewerPushToWorkcenter;
var Kr = {
	Patch: "patch",
	SettingsUpdate: "settings-update"
};
({ ...Gr });
//#endregion
//#region src/scss/Settings.scss?inline
var qr = "@charset \"UTF-8\";@function --hsv(--src-color <color>) returns <color>{result: hsl(from var(--src-color, black) h calc((l*.01 - (l*.01*(1 - (s/200))))/clamp(.0001,min(calc(l*.01*(1 - (s/200))),calc(1 - (l*.01*(1 - (s/200))))),1)*100) calc(l*1*(1 - (s/200))) / alpha);}@layer tokens,base,layout,utilities,shells,shell,views,view,viewer,components,ux-layer,markdown,essentials,print,print-breaks,overrides;@layer tokens{:root,:host,:scope{color-scheme:light dark;--color-primary: #5a7fff;--color-on-primary: #ffffff;--color-secondary: #6b7280;--color-on-secondary: #ffffff;--color-tertiary: #64748b;--color-on-tertiary: #ffffff;--color-error: #ef4444;--color-on-error: #ffffff;--color-success: #4caf50;--color-warning: #ff9800;--color-info: #2196f3;--color-background: #fafbfc;--color-on-background: #1e293b;--color-surface: #fafbfc;--color-on-surface: #1e293b;--color-surface-variant: #f1f5f9;--color-on-surface-variant: #64748b;--color-outline: #cbd5e1;--color-outline-variant: #94a3b8;--color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);--color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);--color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);--color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);--color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);--space-xs: .25rem;--space-sm: .5rem;--space-md: .75rem;--space-lg: 1rem;--space-xl: 1.25rem;--space-2xl: 1.5rem;--padding-xs: var(--space-xs);--padding-sm: var(--space-sm);--padding-md: var(--space-md);--padding-lg: var(--space-lg);--padding-xl: var(--space-xl);--padding-2xl: var(--space-2xl);--padding-3xl: 2rem;--padding-4xl: 2.5rem;--padding-5xl: 3rem;--padding-6xl: 4rem;--padding-7xl: 5rem;--padding-8xl: 6rem;--padding-9xl: 8rem;--gap-xs: var(--space-xs);--gap-sm: var(--space-sm);--gap-md: var(--space-md);--gap-lg: var(--space-lg);--gap-xl: var(--space-xl);--gap-2xl: var(--space-2xl);--radius-none: 0;--radius-sm: .25rem;--radius-default: .25rem;--radius-md: .375rem;--radius-lg: .5rem;--radius-xl: .75rem;--radius-2xl: 1rem;--radius-3xl: 1.5rem;--radius-full: 9999px;--elev-0: none;--elev-1: 0 1px 1px rgba(0, 0, 0, .06), 0 1px 3px rgba(0, 0, 0, .1);--elev-2: 0 2px 6px rgba(0, 0, 0, .12), 0 8px 24px rgba(0, 0, 0, .08);--elev-3: 0 6px 16px rgba(0, 0, 0, .14), 0 18px 48px rgba(0, 0, 0, .1);--shadow-xs: 0 1px 2px rgba(0, 0, 0, .05);--shadow-sm: 0 1px 3px rgba(0, 0, 0, .1);--shadow-md: 0 4px 6px rgba(0, 0, 0, .1);--shadow-lg: 0 10px 15px rgba(0, 0, 0, .1);--shadow-xl: 0 20px 25px rgba(0, 0, 0, .1);--shadow-2xl: 0 25px 50px rgba(0, 0, 0, .1);--shadow-inset: inset 0 2px 4px rgba(0, 0, 0, .06);--shadow-inset-strong: inset 0 4px 8px rgba(0, 0, 0, .12);--shadow-none: 0 0 #0000;--text-xs: .8rem;--text-sm: .9rem;--text-base: 1rem;--text-lg: 1.1rem;--text-xl: 1.25rem;--text-2xl: 1.6rem;--text-3xl: 2rem;--font-size-xs: .75rem;--font-size-sm: .875rem;--font-size-base: 1rem;--font-size-lg: 1.125rem;--font-size-xl: 1.25rem;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--font-family: \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;--font-family-mono: \"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;--font-sans: var(--font-family);--font-mono: var(--font-family-mono);--leading-tight: 1.2;--leading-normal: 1.5;--leading-relaxed: 1.8;--transition-fast: .12s cubic-bezier(.2, 0, 0, 1);--transition-normal: .16s cubic-bezier(.2, 0, 0, 1);--transition-slow: .2s cubic-bezier(.2, 0, 0, 1);--motion-fast: var(--transition-fast);--motion-normal: var(--transition-normal);--motion-slow: var(--transition-slow);--focus-ring: 0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);--z-base: 0;--z-dropdown: 100;--z-sticky: 200;--z-fixed: 300;--z-modal-backdrop: 400;--z-modal: 500;--z-popover: 600;--z-tooltip: 700;--z-toast: 800;--z-max: 9999;--view-bg: var(--color-surface);--view-fg: var(--color-on-surface);--view-border: var(--color-outline-variant);--view-input-bg: light-dark(#ffffff, var(--color-surface-container-high));--view-files-bg: light-dark(rgba(0, 0, 0, .02), var(--color-surface-container-low));--view-file-bg: light-dark(rgba(0, 0, 0, .03), var(--color-surface-container-lowest, var(--color-surface-container-low)));--view-results-bg: light-dark(rgba(0, 0, 0, .01), var(--color-surface-container-low));--view-result-bg: light-dark(rgba(0, 0, 0, .03), var(--color-surface-container-lowest, var(--color-surface-container-low)));--color-surface-elevated: var(--color-surface-container);--color-surface-hover: var(--color-surface-container-low);--color-surface-active: var(--color-surface-container-high);--color-on-surface-muted: var(--color-on-surface-variant);--color-background-alt: var(--color-surface-variant);--color-primary-hover: color-mix(in oklab, var(--color-primary) 80%, black);--color-primary-active: color-mix(in oklab, var(--color-primary) 65%, black);--color-accent: var(--color-secondary);--color-accent-hover: color-mix(in oklab, var(--color-secondary) 80%, black);--color-on-accent: var(--color-on-secondary);--color-border-hover: var(--color-outline-variant);--color-border-strong: var(--color-outline);--color-border-focus: var(--color-primary);--color-text: var(--color-on-surface);--color-text-secondary: var(--color-on-surface-variant);--color-text-muted: color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));--color-text-disabled: color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));--color-text-inverse: var(--color-on-primary);--color-link: var(--color-primary);--color-link-hover: color-mix(in oklab, var(--color-primary) 80%, black);--color-success-light: color-mix(in oklab, var(--color-success) 60%, white);--color-success-dark: color-mix(in oklab, var(--color-success) 70%, black);--color-warning-light: color-mix(in oklab, var(--color-warning) 60%, white);--color-warning-dark: color-mix(in oklab, var(--color-warning) 70%, black);--color-error-light: color-mix(in oklab, var(--color-error) 60%, white);--color-error-dark: color-mix(in oklab, var(--color-error) 70%, black);--color-info-light: color-mix(in oklab, var(--color-info) 60%, white);--color-info-dark: color-mix(in oklab, var(--color-info) 70%, black);--color-bg: var(--color-surface, var(--color-surface));--color-bg-alt: var(--color-surface-variant, var(--color-surface-variant));--color-fg: var(--color-on-surface, var(--color-on-surface));--color-fg-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));--btn-height-sm: 2rem;--btn-height-md: 2.5rem;--btn-height-lg: 3rem;--btn-padding-x-sm: var(--space-md);--btn-padding-x-md: var(--space-lg);--btn-padding-x-lg: 1.5rem;--btn-radius: var(--radius-md);--btn-font-weight: var(--font-weight-medium);--input-height-sm: 2rem;--input-height-md: 2.5rem;--input-height-lg: 3rem;--input-padding-x: var(--space-md);--input-radius: var(--radius-md);--input-border-color: var(--color-border, var(--color-border));--input-focus-ring-color: var(--color-primary);--input-focus-ring-width: 2px;--card-padding: var(--space-lg);--card-radius: var(--radius-lg);--card-shadow: var(--shadow-sm);--card-border-color: var(--color-border, var(--color-border));--modal-backdrop-bg: light-dark(rgb(0 0 0 / .5), rgb(0 0 0 / .7));--modal-bg: var(--color-surface, var(--color-surface));--modal-radius: var(--radius-xl);--modal-shadow: var(--shadow-xl);--modal-padding: 1.5rem;--toast-font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);--toast-font-size: var(--font-size-base, 1rem);--toast-font-weight: var(--font-weight-medium, 500);--toast-letter-spacing: .01em;--toast-line-height: 1.4;--toast-white-space: nowrap;--toast-pointer-events: auto;--toast-user-select: none;--toast-cursor: default;--toast-opacity: 0;--toast-transform: translateY(100%) scale(.9);--toast-transition: opacity .16s ease-out, transform .16s cubic-bezier(.16, 1, .3, 1), background-color .1s ease;--toast-text: var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));--toast-bg: color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));--toast-radius: var(--radius-lg);--toast-shadow: var(--shadow-lg);--toast-padding: var(--space-lg);--sidebar-width: 280px;--sidebar-collapsed-width: 64px;--nav-height: 56px;--nav-height-compact: 48px;--status-height: 24px;--status-bg: var(--color-surface-elevated, var(--color-surface-container-high));--status-font-size: var(--text-xs)}@media(prefers-color-scheme:dark){:root,:host,:scope{--color-primary: #7ca7ff;--color-on-primary: #0f172a;--color-secondary: #94a3b8;--color-on-secondary: #1e293b;--color-tertiary: #94a3b8;--color-on-tertiary: #0f172a;--color-error: #f87171;--color-on-error: #450a0a;--color-success: #66bb6a;--color-warning: #ffa726;--color-info: #42a5f5;--color-background: #0f1419;--color-on-background: #f1f5f9;--color-surface: #0f1419;--color-on-surface: #f1f5f9;--color-surface-variant: #1e293b;--color-on-surface-variant: #cbd5e1;--color-outline: #475569;--color-outline-variant: #334155;--color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);--color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);--color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);--color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);--color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent)}}[data-theme=light]{color-scheme:light;--color-primary: #5a7fff;--color-on-primary: #ffffff;--color-secondary: #6b7280;--color-on-secondary: #ffffff;--color-tertiary: #64748b;--color-on-tertiary: #ffffff;--color-error: #ef4444;--color-on-error: #ffffff;--color-success: #4caf50;--color-warning: #ff9800;--color-info: #2196f3;--color-background: #fafbfc;--color-on-background: #1e293b;--color-surface: #fafbfc;--color-on-surface: #1e293b;--color-surface-variant: #f1f5f9;--color-on-surface-variant: #64748b;--color-outline: #cbd5e1;--color-outline-variant: #94a3b8;--color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);--color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);--color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);--color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);--color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent)}[data-theme=dark]{color-scheme:dark;--color-primary: #7ca7ff;--color-on-primary: #0f172a;--color-secondary: #94a3b8;--color-on-secondary: #1e293b;--color-tertiary: #94a3b8;--color-on-tertiary: #0f172a;--color-error: #f87171;--color-on-error: #450a0a;--color-success: #66bb6a;--color-warning: #ffa726;--color-info: #42a5f5;--color-background: #0f1419;--color-on-background: #f1f5f9;--color-surface: #0f1419;--color-on-surface: #f1f5f9;--color-surface-variant: #1e293b;--color-on-surface-variant: #cbd5e1;--color-outline: #475569;--color-outline-variant: #334155;--color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);--color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);--color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);--color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);--color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent)}@media(prefers-reduced-motion:reduce){:root{--transition-fast: 0ms;--transition-normal: 0ms;--transition-slow: 0ms;--motion-fast: 0ms;--motion-normal: 0ms;--motion-slow: 0ms}}@media(prefers-contrast:high){:root{--color-border: var(--color-border, var(--color-outline));--color-border-hover: color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));--color-text-secondary: var(--color-on-surface, var(--color-on-surface));--color-text-muted: var(--color-on-surface-variant, var(--color-on-surface-variant))}}@media print{:root{--view-padding: 0;--view-content-max-width: 100%;--view-bg: white;--view-fg: black;--view-heading-color: black;--view-link-color: black}:root:has([data-view=viewer]){--view-code-bg: #f5f5f5;--view-code-fg: black;--view-blockquote-bg: #f5f5f5}}}@layer utilities{.m-0{margin:0}.mb-0{margin-block:0}.mi-0{margin-inline:0}.p-0{padding:0}.pb-0{padding-block:0}.pi-0{padding-inline:0}.gap-0{gap:0}.inset-0{inset:0}.m-xs{margin:.25rem}.mb-xs{margin-block:.25rem}.mi-xs{margin-inline:.25rem}.p-xs{padding:.25rem}.pb-xs{padding-block:.25rem}.pi-xs{padding-inline:.25rem}.gap-xs{gap:.25rem}.inset-xs{inset:.25rem}.m-sm{margin:.5rem}.mb-sm{margin-block:.5rem}.mi-sm{margin-inline:.5rem}.p-sm{padding:.5rem}.pb-sm{padding-block:.5rem}.pi-sm{padding-inline:.5rem}.gap-sm{gap:.5rem}.inset-sm{inset:.5rem}.m-md{margin:.75rem}.mb-md{margin-block:.75rem}.mi-md{margin-inline:.75rem}.p-md{padding:.75rem}.pb-md{padding-block:.75rem}.pi-md{padding-inline:.75rem}.gap-md{gap:.75rem}.inset-md{inset:.75rem}.m-lg{margin:1rem}.mb-lg{margin-block:1rem}.mi-lg{margin-inline:1rem}.p-lg{padding:1rem}.pb-lg{padding-block:1rem}.pi-lg{padding-inline:1rem}.gap-lg{gap:1rem}.inset-lg{inset:1rem}.m-xl{margin:1.25rem}.mb-xl{margin-block:1.25rem}.mi-xl{margin-inline:1.25rem}.p-xl{padding:1.25rem}.pb-xl{padding-block:1.25rem}.pi-xl{padding-inline:1.25rem}.gap-xl{gap:1.25rem}.inset-xl{inset:1.25rem}.m-2xl{margin:1.5rem}.mb-2xl{margin-block:1.5rem}.mi-2xl{margin-inline:1.5rem}.p-2xl{padding:1.5rem}.pb-2xl{padding-block:1.5rem}.pi-2xl{padding-inline:1.5rem}.gap-2xl{gap:1.5rem}.inset-2xl{inset:1.5rem}.m-3xl{margin:2rem}.mb-3xl{margin-block:2rem}.mi-3xl{margin-inline:2rem}.p-3xl{padding:2rem}.pb-3xl{padding-block:2rem}.pi-3xl{padding-inline:2rem}.gap-3xl{gap:2rem}.inset-3xl{inset:2rem}.text-xs{font-size:.75rem;font-weight:400;line-height:1.5;letter-spacing:0}.text-sm{font-size:.875rem;font-weight:400;line-height:1.5;letter-spacing:0}.text-base{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}.text-lg{font-size:1.125rem;font-weight:400;line-height:1.5;letter-spacing:0}.text-xl{font-size:1.25rem;font-weight:400;line-height:1.5;letter-spacing:0}.text-2xl{font-size:1.5rem;font-weight:400;line-height:1.5;letter-spacing:0}.font-thin{font-weight:100}.font-light{font-weight:300}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.text-start{text-align:start}.text-center{text-align:center}.text-end{text-align:end}.text-primary{color:#1e293b,#f1f5f9}.text-secondary{color:#64748b,#94a3b8}.text-muted{color:#94a3b8,#64748b}.text-disabled{color:#cbd5e1,#475569}.block,.vu-block{display:block}.inline,.vu-inline{display:inline}.inline-block{display:inline-block}.flex,.vu-flex{display:flex}.inline-flex{display:inline-flex}.grid,.vu-grid{display:grid}.hidden,.vu-hidden{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-center{align-items:center}.items-end{align-items:flex-end}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.h-auto,.block-size-auto{block-size:auto}.h-full,.block-size-full{block-size:100%}.h-screen{block-size:100vh}.w-auto,.inline-size-auto{inline-size:auto}.w-full,.inline-size-full{inline-size:100%}.w-screen{inline-size:100vw}.min-h-0,.min-block-size-0{min-block-size:0}.min-w-0,.min-inline-size-0{min-inline-size:0}.max-h-full,.max-block-size-full{max-block-size:100%}.max-w-full,.max-inline-size-full{max-inline-size:100%}.static{position:static}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.sticky{position:sticky}.bg-surface{background-color:#fafbfc,#0f1419}.bg-surface-container{background-color:#f1f5f9,#1e293b}.bg-surface-container-high{background-color:#e2e8f0,#334155}.bg-primary{background-color:#5a7fff,#7ca7ff}.bg-secondary{background-color:#6b7280,#94a3b8}.border{border:1px solid #cbd5e1,#475569}.border-2{border:2px solid #cbd5e1,#475569}.border-primary{border:1px solid #5a7fff,#7ca7ff}.border-secondary{border:1px solid #6b7280,#94a3b8}.rounded-none{border-radius:0}.rounded-sm{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-full{border-radius:9999px}.shadow-xs{box-shadow:0 1px 2px #0000000d}.shadow-sm{box-shadow:0 1px 3px #0000001a}.shadow-md{box-shadow:0 4px 6px -1px #0000001a}.shadow-lg{box-shadow:0 10px 15px -3px #0000001a}.shadow-xl{box-shadow:0 20px 25px -5px #0000001a}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.select-none{user-select:none}.select-text{user-select:text}.select-all{user-select:all}.visible{visibility:visible}.invisible{visibility:hidden}.collapse,.vs-collapsed{visibility:collapse}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-100{opacity:1}@container (max-width: 320px){.hidden\\@xs{display:none}}@container (max-width: 640px){.hidden\\@sm{display:none}}@container (max-width: 768px){.hidden\\@md{display:none}}@container (max-width: 1024px){.hidden\\@lg{display:none}}@container (min-width: 320px){.block\\@xs{display:block}}@container (min-width: 640px){.block\\@sm{display:block}}@container (min-width: 768px){.block\\@md{display:block}}@container (min-width: 1024px){.block\\@lg{display:block}}@container (max-width: 320px){.text-sm\\@xs{font-size:.875rem;font-weight:400;line-height:1.5;letter-spacing:0}}@container (min-width: 640px){.text-base\\@sm{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}}.icon-xs{--icon-size: .75rem}.icon-sm{--icon-size: .875rem}.icon-md{--icon-size: 1rem}.icon-lg{--icon-size: 1.25rem}.icon-xl{--icon-size: 1.5rem}.center-absolute{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.center-flex{display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:nowrap}.interactive{cursor:pointer;touch-action:manipulation;user-select:none;-webkit-tap-highlight-color:transparent}.interactive:focus-visible{outline:2px solid #dbeafe,#1e40af;outline-offset:2px}.interactive:disabled,.interactive[aria-disabled=true]{cursor:not-allowed;opacity:.6;pointer-events:none}.focus-ring:focus-visible{outline:2px solid #dbeafe,#1e40af;outline-offset:2px}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.truncate-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.truncate-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.aspect-square{aspect-ratio:1}.aspect-video{aspect-ratio:16 / 9}.margin-block-0{margin-block:0}.margin-block-sm{margin-block:var(--space-sm)}.margin-block-md{margin-block:var(--space-md)}.margin-block-lg{margin-block:var(--space-lg)}.margin-inline-0{margin-inline:0}.margin-inline-sm{margin-inline:var(--space-sm)}.margin-inline-md{margin-inline:var(--space-md)}.margin-inline-lg{margin-inline:var(--space-lg)}.margin-inline-auto{margin-inline:auto}.padding-block-0{padding-block:0}.padding-block-sm{padding-block:var(--space-sm)}.padding-block-md{padding-block:var(--space-md)}.padding-block-lg{padding-block:var(--space-lg)}.padding-inline-0{padding-inline:0}.padding-inline-sm{padding-inline:var(--space-sm)}.padding-inline-md{padding-inline:var(--space-md)}.padding-inline-lg{padding-inline:var(--space-lg)}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.line-clamp-1{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.vs-active{--state-active: 1}.vs-disabled{pointer-events:none;opacity:.5}.vs-loading{cursor:wait}.vs-error{color:var(--color-error, #dc3545)}.vs-success{color:var(--color-success, #28a745)}.vs-hidden{display:none!important}.vl-container,.container{inline-size:100%;max-inline-size:var(--container-max, 1200px);margin-inline:auto}.vl-container{padding-inline:var(--space-md)}.container{padding-inline:var(--space-lg)}.vl-grid{display:grid;gap:var(--gap-md)}.vl-stack{display:flex;flex-direction:column;gap:var(--gap-md)}.vl-cluster{display:flex;flex-wrap:wrap;gap:var(--gap-sm);align-items:center}.vl-center{display:flex;align-items:center;justify-content:center}.vu-sr-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.vc-surface{background-color:var(--color-surface);color:var(--color-on-surface)}.vc-surface-variant{background-color:var(--color-surface-variant);color:var(--color-on-surface-variant)}.vc-primary{background-color:var(--color-primary);color:var(--color-on-primary)}.vc-secondary{background-color:var(--color-secondary);color:var(--color-on-secondary)}.vc-elevated{box-shadow:var(--elev-1)}.vc-elevated-2{box-shadow:var(--elev-2)}.vc-elevated-3{box-shadow:var(--elev-3)}.vc-rounded{border-radius:var(--radius-md)}.vc-rounded-sm{border-radius:var(--radius-sm)}.vc-rounded-lg{border-radius:var(--radius-lg)}.vc-rounded-full{border-radius:var(--radius-full, 9999px)}.card{background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:var(--space-lg);box-shadow:var(--shadow-sm)}.stack>*+*{margin-block-start:var(--space-md)}.stack-sm>*+*{margin-block-start:var(--space-sm)}.stack-lg>*+*{margin-block-start:var(--space-lg)}@media print{.print-hidden{display:none!important}.print-visible{display:block!important}.print-break-before{page-break-before:always}.print-break-after{page-break-after:always}.print-break-inside-avoid{page-break-inside:avoid}}@media(prefers-reduced-motion:reduce){.transition-fast,.transition-normal,.transition-slow{transition:none}*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}@media(prefers-contrast:high){.text-primary{color:var(--color-on-surface)}.text-secondary,.text-muted,.text-disabled{color:var(--color-on-surface-variant)}.border{border-width:2px}.border-top{border-top-width:2px}.border-bottom{border-bottom-width:2px}.border-left{border-left-width:2px}.border-right{border-right-width:2px}}}@property --value{syntax: \"<number>\"; initial-value: 0; inherits: true;}@property --relate{syntax: \"<number>\"; initial-value: 0; inherits: true;}@property --drag-x{syntax: \"<number>\"; initial-value: 0; inherits: false;}@property --drag-y{syntax: \"<number>\"; initial-value: 0; inherits: false;}@property --order{syntax: \"<integer>\"; initial-value: 1; inherits: true;}@property --content-inline-size{syntax: \"<length-percentage>\"; initial-value: 100%; inherits: true;}@property --content-block-size{syntax: \"<length-percentage>\"; initial-value: 100%; inherits: true;}@property --icon-size{syntax: \"<length-percentage>\"; initial-value: 16px; inherits: true;}@property --icon-color{syntax: \"<color>\"; initial-value: rgba(0,0,0,0); inherits: true;}@property --icon-padding{syntax: \"<length-percentage>\"; initial-value: 0px; inherits: true;}@property --icon-image{syntax: \"<image>\"; initial-value: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)); inherits: true;}@layer ux-classes{.grid-rows>::slotted(*){display:grid;grid-auto-flow:column}.grid-rows>::slotted(*){place-content:center;place-items:center}.grid-rows>::slotted(*){--order: sibling-index();grid-column:1/-1;grid-row:var(--order, 1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0px,max-content)}:host(.grid-rows) ::slotted(::slotted(*)){display:grid;grid-auto-flow:column}:host(.grid-rows) ::slotted(::slotted(*)){place-content:center;place-items:center}:host(.grid-rows) ::slotted(::slotted(*)){--order: sibling-index();grid-column:1/-1;grid-row:var(--order, 1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0px,max-content)}.grid-rows>*{display:grid;grid-auto-flow:column}.grid-rows>*{place-content:center;place-items:center}.grid-rows>*{--order: sibling-index();grid-column:1/-1;grid-row:var(--order, 1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0px,max-content)}:host(.grid-rows) ::slotted(*){display:grid;grid-auto-flow:column}:host(.grid-rows) ::slotted(*){place-content:center;place-items:center}:host(.grid-rows) ::slotted(*){--order: sibling-index();grid-column:1/-1;grid-row:var(--order, 1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0px,max-content)}.grid-rows{--display: inline-grid;--flow: column;--items: center;--content: center;display:var(--display, inline-block);flex-direction:var(--flow, row);place-items:var(--items, center);place-content:var(--content, center);box-sizing:border-box}.grid-rows{inline-size:auto;block-size:auto;--i-size: auto;--b-size: auto;inline-size:var(--i-size, 100%);block-size:var(--b-size, 100%);aspect-ratio:var(--ar, auto)}.grid-rows{grid-auto-rows:minmax(0px,max-content);grid-template-columns:minmax(0px,max-content) minmax(0px,1fr) minmax(0px,max-content);margin:0;padding:0;list-style-type:none;list-style-position:inside}:host(.grid-rows){--display: inline-grid;--flow: column;--items: center;--content: center;display:var(--display, inline-block);flex-direction:var(--flow, row);place-items:var(--items, center);place-content:var(--content, center);box-sizing:border-box}:host(.grid-rows){inline-size:auto;block-size:auto;--i-size: auto;--b-size: auto;inline-size:var(--i-size, 100%);block-size:var(--b-size, 100%);aspect-ratio:var(--ar, auto)}:host(.grid-rows){grid-auto-rows:minmax(0px,max-content);grid-template-columns:minmax(0px,max-content) minmax(0px,1fr) minmax(0px,max-content);margin:0;padding:0;list-style-type:none;list-style-position:inside}.grid-columns>::slotted(*){display:grid;grid-auto-flow:row}.grid-columns>::slotted(*){place-content:center;place-items:center}.grid-columns>::slotted(*){--order: sibling-index();grid-column:var(--order, 1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0px,1fr);grid-template-rows:subgrid}:host(.grid-columns) ::slotted(::slotted(*)){display:grid;grid-auto-flow:row}:host(.grid-columns) ::slotted(::slotted(*)){place-content:center;place-items:center}:host(.grid-columns) ::slotted(::slotted(*)){--order: sibling-index();grid-column:var(--order, 1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0px,1fr);grid-template-rows:subgrid}.grid-columns>*{display:grid;grid-auto-flow:row}.grid-columns>*{place-content:center;place-items:center}.grid-columns>*{--order: sibling-index();grid-column:var(--order, 1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0px,1fr);grid-template-rows:subgrid}:host(.grid-columns) ::slotted(*){display:grid;grid-auto-flow:row}:host(.grid-columns) ::slotted(*){place-content:center;place-items:center}:host(.grid-columns) ::slotted(*){--order: sibling-index();grid-column:var(--order, 1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0px,1fr);grid-template-rows:subgrid}.grid-columns{--display: inline-grid;--flow: row;--items: center;--content: center;display:var(--display, inline-block);flex-direction:var(--flow, row);place-items:var(--items, center);place-content:var(--content, center);box-sizing:border-box}.grid-columns{inline-size:auto;block-size:auto;--i-size: auto;--b-size: auto;inline-size:var(--i-size, 100%);block-size:var(--b-size, 100%);aspect-ratio:var(--ar, auto)}.grid-columns{grid-auto-columns:minmax(0px,1fr);grid-template-rows:minmax(0px,1fr);margin:0;padding:0;list-style-type:none;list-style-position:inside}:host(.grid-columns){--display: inline-grid;--flow: row;--items: center;--content: center;display:var(--display, inline-block);flex-direction:var(--flow, row);place-items:var(--items, center);place-content:var(--content, center);box-sizing:border-box}:host(.grid-columns){inline-size:auto;block-size:auto;--i-size: auto;--b-size: auto;inline-size:var(--i-size, 100%);block-size:var(--b-size, 100%);aspect-ratio:var(--ar, auto)}:host(.grid-columns){grid-auto-columns:minmax(0px,1fr);grid-template-rows:minmax(0px,1fr);margin:0;padding:0;list-style-type:none;list-style-position:inside}.flex-columns>::slotted(*){--order: sibling-index();order:var(--order, auto);flex:1 1 max-content}.flex-columns>::slotted(*){place-content:center;place-items:center}:host(.flex-columns) ::slotted(::slotted(*)){--order: sibling-index();order:var(--order, auto);flex:1 1 max-content}:host(.flex-columns) ::slotted(::slotted(*)){place-content:center;place-items:center}.flex-columns>*{--order: sibling-index();order:var(--order, auto);flex:1 1 max-content}.flex-columns>*{place-content:center;place-items:center}:host(.flex-columns) ::slotted(*){--order: sibling-index();order:var(--order, auto);flex:1 1 max-content}:host(.flex-columns) ::slotted(*){place-content:center;place-items:center}.flex-columns{--display: inline-flex;--flow: column;--items: center;--content: center;display:var(--display, inline-block);flex-direction:var(--flow, row);place-items:var(--items, center);place-content:var(--content, center);box-sizing:border-box}.flex-columns{inline-size:max-content;block-size:max-content;--i-size: max-content;--b-size: max-content;inline-size:var(--i-size, 100%);block-size:var(--b-size, 100%);aspect-ratio:var(--ar, auto)}:host(.flex-columns){--display: inline-flex;--flow: column;--items: center;--content: center;display:var(--display, inline-block);flex-direction:var(--flow, row);place-items:var(--items, center);place-content:var(--content, center);box-sizing:border-box}:host(.flex-columns){inline-size:max-content;block-size:max-content;--i-size: max-content;--b-size: max-content;inline-size:var(--i-size, 100%);block-size:var(--b-size, 100%);aspect-ratio:var(--ar, auto)}.grid-layered>::slotted(*){grid-template-columns:minmax(0px,1fr);grid-template-rows:minmax(0px,1fr)}.grid-layered>::slotted(*)>*{grid-column:1/-1;grid-row:1/-1}:host(.grid-layered) ::slotted(::slotted(*)){grid-template-columns:minmax(0px,1fr);grid-template-rows:minmax(0px,1fr)}:host(.grid-layered) ::slotted(::slotted(*))>*{grid-column:1/-1;grid-row:1/-1}.grid-layered>*{grid-template-columns:minmax(0px,1fr);grid-template-rows:minmax(0px,1fr)}.grid-layered>*>*{grid-column:1/-1;grid-row:1/-1}:host(.grid-layered) ::slotted(*){grid-template-columns:minmax(0px,1fr);grid-template-rows:minmax(0px,1fr)}:host(.grid-layered) ::slotted(*)>*{grid-column:1/-1;grid-row:1/-1}.grid-layered{grid-template-columns:minmax(0px,1fr);grid-template-rows:minmax(0px,1fr)}.grid-layered>*{grid-column:1/-1;grid-row:1/-1}.grid-layered{--display: inline-grid;--flow: column;--items: center;--content: center;display:var(--display, inline-block);flex-direction:var(--flow, row);place-items:var(--items, center);place-content:var(--content, center);box-sizing:border-box}.grid-layered{inline-size:max-content;block-size:max-content;--i-size: max-content;--b-size: max-content;inline-size:var(--i-size, 100%);block-size:var(--b-size, 100%);aspect-ratio:var(--ar, auto)}:host(.grid-layered){grid-template-columns:minmax(0px,1fr);grid-template-rows:minmax(0px,1fr)}:host(.grid-layered)>*{grid-column:1/-1;grid-row:1/-1}:host(.grid-layered){--display: inline-grid;--flow: column;--items: center;--content: center;display:var(--display, inline-block);flex-direction:var(--flow, row);place-items:var(--items, center);place-content:var(--content, center);box-sizing:border-box}:host(.grid-layered){inline-size:max-content;block-size:max-content;--i-size: max-content;--b-size: max-content;inline-size:var(--i-size, 100%);block-size:var(--b-size, 100%);aspect-ratio:var(--ar, auto)}.grid-rows-3c>::slotted(*){grid-template-columns:minmax(0px,max-content) minmax(0px,1fr) minmax(0px,max-content)}:host(.grid-rows-3c) ::slotted(::slotted(*)){grid-template-columns:minmax(0px,max-content) minmax(0px,1fr) minmax(0px,max-content)}.grid-rows-3c>*{grid-template-columns:minmax(0px,max-content) minmax(0px,1fr) minmax(0px,max-content)}:host(.grid-rows-3c) ::slotted(*){grid-template-columns:minmax(0px,max-content) minmax(0px,1fr) minmax(0px,max-content)}.grid-rows-3c{grid-template-columns:minmax(0px,max-content) minmax(0px,1fr) minmax(0px,max-content)}:host(.grid-rows-3c){grid-template-columns:minmax(0px,max-content) minmax(0px,1fr) minmax(0px,max-content)}.grid-rows-3c>::slotted(*:last-child){grid-column:var(--order, 1)/3 span}:host(.grid-rows-3c) ::slotted(::slotted(*:last-child)){grid-column:var(--order, 1)/3 span}.grid-rows-3c>*:last-child{grid-column:var(--order, 1)/3 span}:host(.grid-rows-3c) ::slotted(*:last-child){grid-column:var(--order, 1)/3 span}.grid-rows-3c{--order: sibling-index()}.grid-rows-3c{grid-column:var(--order, 1)/var(--order, 1) span}.grid-rows-3c{inline-size:auto;block-size:auto;--i-size: auto;--b-size: auto;inline-size:var(--i-size, 100%);block-size:var(--b-size, 100%);aspect-ratio:var(--ar, auto)}:host(.grid-rows-3c){--order: sibling-index()}:host(.grid-rows-3c){grid-column:var(--order, 1)/var(--order, 1) span}:host(.grid-rows-3c){inline-size:auto;block-size:auto;--i-size: auto;--b-size: auto;inline-size:var(--i-size, 100%);block-size:var(--b-size, 100%);aspect-ratio:var(--ar, auto)}.stretch-inline{inline-size:100%;inline-size:-webkit-fill-available;inline-size:stretch}:host(.stretch-inline){inline-size:100%;inline-size:-webkit-fill-available;inline-size:stretch}.stretch-block{block-size:100%;block-size:-webkit-fill-available;block-size:stretch}:host(.stretch-block){block-size:100%;block-size:-webkit-fill-available;block-size:stretch}.content-inline-size{padding-inline:max(100% - (100% - var(--content-inline-size, 100%) * .5),0px)}:host(.content-inline-size){padding-inline:max(100% - (100% - var(--content-inline-size, 100%) * .5),0px)}.content-block-size{padding-block:max(100% - (100% - var(--content-block-size, 100%) * .5),0px)}:host(.content-block-size){padding-block:max(100% - (100% - var(--content-block-size, 100%) * .5),0px)}.ux-anchor{inset-inline-start:max(var(--client-x, 0px),0px);inset-block-start:max(var(--client-y, 0px),0px);inset-inline-end:auto;inset-block-end:auto;direction:ltr;writing-mode:horizontal-tb;translate:0% 0% 0%;transform:none}.ux-anchor{--translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;--translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important}@supports (position-anchor: --example){.ux-anchor{position-anchor:var(--anchor-group);inset-inline-start:anchor(var(--anchor-group) start);inset-block-start:anchor(var(--anchor-group) end);inline-size:anchor-size(var(--anchor-group) self-inline)}}:host(.ux-anchor){inset-inline-start:max(var(--client-x, 0px),0px);inset-block-start:max(var(--client-y, 0px),0px);inset-inline-end:auto;inset-block-end:auto;direction:ltr;writing-mode:horizontal-tb;translate:0% 0% 0%;transform:none}:host(.ux-anchor){--translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;--translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important}@supports (position-anchor: --example){:host(.ux-anchor){position-anchor:var(--anchor-group);inset-inline-start:anchor(var(--anchor-group) start);inset-block-start:anchor(var(--anchor-group) end);inline-size:anchor-size(var(--anchor-group) self-inline)}}.ux-anchor{--shift-x: var(--client-x, 0px);--shift-y: var(--client-y, 0px);--translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;--translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;inset-inline-start:max(var(--shift-x),0px);inset-block-start:max(var(--shift-y),var(--status-bar-padding, 0px));inset-inline-end:auto;inset-block-end:auto;direction:ltr;translate:0% 0% 0%;writing-mode:horizontal-tb;transform:none}:host(.ux-anchor){--shift-x: var(--client-x, 0px);--shift-y: var(--client-y, 0px);--translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;--translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;inset-inline-start:max(var(--shift-x),0px);inset-block-start:max(var(--shift-y),var(--status-bar-padding, 0px));inset-inline-end:auto;inset-block-end:auto;direction:ltr;translate:0% 0% 0%;writing-mode:horizontal-tb;transform:none}.layered-wrap{background-color:transparent;display:inline grid;inline-size:max-content;block-size:max-content;grid-template-columns:minmax(0px,1fr);grid-template-rows:minmax(0px,1fr);z-index:calc(var(--z-index, 0) + 1);overflow:visible}.layered-wrap>*{grid-column:1/-1;grid-row:1/-1}:host(.layered-wrap){background-color:transparent;display:inline grid;inline-size:max-content;block-size:max-content;grid-template-columns:minmax(0px,1fr);grid-template-rows:minmax(0px,1fr);z-index:calc(var(--z-index, 0) + 1);overflow:visible}:host(.layered-wrap)>*{grid-column:1/-1;grid-row:1/-1}}@layer components{ui-icon{--icon-color: currentColor;--icon-size: 1rem;--icon-padding: .125rem;display:inline-grid;place-content:center;place-items:center;color:var(--icon-color);aspect-ratio:1}ui-icon{vertical-align:middle;margin-inline-end:.125rem}ui-icon:last-child{margin-inline-end:0}}@layer tokens,base,layout,utilities,shells,shell,views,view,viewer,components,ux-layer,markdown,essentials,print,print-breaks,overrides;@layer tokens,base,layout,utilities,shells,shell,views,view,viewer,components,ux-layer,markdown,essentials,print,print-breaks,overrides;@layer tokens{:root:has([data-view=settings]),html:has([data-view=settings]){--view-layout: \"flex\";--view-sidebar-visible: true;--view-padding: var(--space-6);--view-content-max-width: none;--view-section-gap: var(--space-8);--view-field-gap: var(--space-4);--view-bg: var(--color-surface);--view-fg: var(--color-on-surface);--view-label-color: var(--color-text-muted, var(--color-on-surface-variant));--settings-divider: color-mix(in oklab, var(--color-outline-variant) 32%, transparent);--settings-card-surface: color-mix(in oklab, var(--color-surface-container) 92%, var(--color-surface));--settings-card-edge: color-mix(in oklab, var(--color-outline-variant) 16%, transparent);--settings-card-shadow: 0 2px 20px color-mix(in oklab, var(--color-on-surface) 5%, transparent);--settings-chip-edge: color-mix(in oklab, var(--color-outline-variant) 12%, transparent)}}@layer components{.view-settings{display:grid;grid-template-rows:auto minmax(0,1fr) auto;grid-template-columns:minmax(0,1fr);align-content:stretch;justify-items:stretch;gap:0;row-gap:0;inline-size:100%;block-size:100%;max-block-size:100%;min-block-size:0;margin-inline:0;padding:.25rem;overflow:hidden;background-color:var(--view-bg, var(--color-surface));color:var(--view-fg, var(--color-on-surface));text-align:start}.view-settings [data-action=save]{justify-self:start}.view-settings :where(select,input,textarea,option){pointer-events:auto}.view-settings textarea{container-type:inline-size;resize:block;inline-size:stretch;max-inline-size:stretch;box-sizing:border-box}.view-settings h2{margin:0;font-size:var(--text-xl, 20px);font-weight:var(--font-weight-bold, 700);letter-spacing:-.02em;color:var(--color-on-surface)}.view-settings h3{text-align:start}.view-settings .card{display:flex;flex-direction:column;gap:var(--spacing-md, 12px);padding:var(--spacing-md, 16px);inline-size:stretch;border:none;border-radius:var(--radius-xl, 16px);background:var(--settings-card-surface, color-mix(in oklab, var(--color-surface-container) 92%, var(--color-surface)));box-shadow:var(--settings-card-shadow, 0 2px 20px color-mix(in oklab, var(--color-on-surface) 5%, transparent)),0 0 0 1px var(--settings-card-edge, color-mix(in oklab, var(--color-outline-variant) 16%, transparent))}@container (max-inline-size: 480px){.view-settings .card{gap:var(--spacing-sm, 10px);padding:var(--spacing-md, 14px);border-radius:var(--radius-lg, 14px)}}.view-settings .card h3{margin:0;font-size:var(--text-base, 15px);font-weight:var(--font-weight-semibold, 600);letter-spacing:-.01em;color:var(--color-on-surface)}.view-settings .card .form-select{inline-size:stretch}.view-settings .field{display:grid;grid-auto-flow:row;gap:var(--spacing-xs, 6px);inline-size:stretch;font-size:var(--text-xs, 12px);flex-direction:column}.view-settings .field>span{font-size:var(--text-xs, 12px);color:var(--color-on-surface-variant);opacity:.85}.view-settings .field.checkbox{grid-auto-flow:column;grid-auto-columns:max-content 1fr;align-items:center;gap:var(--spacing-sm, 10px)}.view-settings .mcp-actions{margin-block-start:var(--space-xs, 8px);display:flex;justify-content:flex-start;flex-direction:row;flex-wrap:wrap}.view-settings .mcp-section{display:flex;flex-direction:column;gap:var(--space-sm, 8px)}.view-settings .mcp-row{display:grid;gap:var(--space-sm, 8px);padding:var(--space-md, 12px);border:none;border-radius:var(--radius-lg, 14px);background:color-mix(in oklab,var(--color-surface-container-low) 88%,var(--color-surface));box-shadow:inset 0 0 0 1px var(--settings-card-edge, color-mix(in oklab, var(--color-outline-variant) 14%, transparent))}.view-settings .mcp-row .field{margin:0}.view-settings .mcp-empty-note{margin:0;color:var(--color-on-surface-variant);font-size:var(--text-xs, 12px);opacity:.85}.view-settings .settings-screen__top{display:flex;flex-direction:column;align-items:stretch;gap:var(--space-sm);padding-block-end:var(--space-md);border-block-end:1px solid var(--settings-divider, color-mix(in oklab, var(--color-outline-variant) 32%, transparent));flex-shrink:0;min-inline-size:0}.view-settings .settings-screen__title{font-weight:var(--font-weight-semibold, 600);letter-spacing:-.015em}@media(min-width:720px){.view-settings .settings-screen__top{flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-between}.view-settings .settings-screen__top .settings-tab-actions{flex:1;justify-content:flex-end}}.view-settings .settings-screen__body{min-block-size:0;min-inline-size:0;overflow:auto;overflow-block:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;display:flex;flex-direction:column;gap:var(--space-lg);padding-block:var(--space-md);scrollbar-width:thin;scrollbar-color:var(--color-outline-variant) transparent}.view-settings .settings-screen__body::-webkit-scrollbar{inline-size:6px}.view-settings .settings-screen__body::-webkit-scrollbar-thumb{background:color-mix(in oklab,var(--color-outline-variant) 45%,transparent);border-radius:99px}.view-settings .settings-screen__body::-webkit-scrollbar-thumb:hover{background:color-mix(in oklab,var(--color-outline) 55%,transparent)}.view-settings .settings-screen__footer{inline-size:stretch;display:flex;align-items:center;justify-content:start;gap:var(--space-sm);flex-wrap:wrap;flex-shrink:0;padding-block:var(--space-md, .25rem);padding-inline:var(--space-lg, .5rem);margin-block-start:0;border-block-start:1px solid var(--settings-divider, color-mix(in oklab, var(--color-outline-variant) 32%, transparent));background:color-mix(in oklab,var(--color-surface-container-low, var(--color-surface-container)) 72%,var(--color-surface));box-shadow:0 -12px 28px color-mix(in oklab,var(--color-on-surface) 4%,transparent)}.view-settings .settings-tab-actions{display:flex;flex-wrap:nowrap;gap:var(--space-xs, 6px);align-items:center;container-type:inline-size;justify-content:flex-start;inline-size:stretch;max-inline-size:stretch;overflow-x:auto;scrollbar-width:thin;scrollbar-color:var(--color-outline-variant) transparent}.view-settings .settings-tab-btn{padding:.5rem .875rem;min-block-size:2.5rem;border:none;border-radius:var(--radius-full, 999px);background:color-mix(in oklab,var(--color-surface-container-low) 94%,transparent);color:var(--color-on-surface-variant);font-size:var(--text-xs, 12px);font-weight:var(--font-weight-medium, 500);cursor:pointer;transition:background-color var(--motion-fast),color var(--motion-fast),box-shadow var(--motion-fast);box-shadow:0 0 0 1px var(--settings-chip-edge, color-mix(in oklab, var(--color-outline-variant) 12%, transparent))}.view-settings .settings-tab-btn:hover{background:color-mix(in oklab,var(--color-surface-container) 92%,transparent);color:var(--color-on-surface)}.view-settings .settings-tab-btn.is-active{background:var(--color-primary);color:var(--color-on-primary);box-shadow:0 2px 12px color-mix(in oklab,var(--color-primary) 28%,transparent),0 0 0 1px color-mix(in oklab,var(--color-primary) 40%,transparent)}.view-settings .settings-tab-panel{display:none}.view-settings .settings-tab-panel.is-active{display:flex}.view-settings .btn{padding:.5rem 1.125rem;min-block-size:2.5rem;border:none;border-radius:var(--radius-full, 999px);background:color-mix(in oklab,var(--color-surface-container) 88%,transparent);color:var(--color-on-surface);font-family:inherit;font-size:var(--text-sm, 13px);font-weight:var(--font-weight-medium, 500);cursor:pointer;transition:background-color var(--motion-fast),box-shadow var(--motion-fast),filter var(--motion-fast);box-shadow:0 0 0 1px var(--settings-chip-edge, color-mix(in oklab, var(--color-outline-variant) 12%, transparent))}.view-settings .btn:hover{background:color-mix(in oklab,var(--color-on-surface) 6%,transparent)}.view-settings .btn.primary{background:var(--color-primary);border-color:transparent;color:var(--color-on-primary, #fff);box-shadow:0 2px 14px color-mix(in oklab,var(--color-primary) 32%,transparent),0 0 0 1px color-mix(in oklab,var(--color-primary) 55%,transparent)}.view-settings .btn.primary:hover{filter:brightness(1.06)}.view-settings .note,.view-settings .ext-note{font-size:var(--text-xs, 12px);color:var(--color-on-surface-variant);opacity:.9;flex-grow:0;max-inline-size:stretch;display:block;flex-shrink:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none}.view-settings .ext-note{opacity:.8}.view-settings .ext-note code{padding:2px 4px;background:var(--color-surface-container-highest);border-radius:var(--radius-xs, 4px);font-size:var(--text-xs, 11px)}@container (max-inline-size: 1024px){.view-settings{padding:var(--space-md)}}@container (max-inline-size: 768px){.view-settings{padding:var(--space-sm)}.view-settings .settings-screen__title{font-size:var(--text-lg, 17px)}.view-settings .settings-screen__top{gap:var(--space-md)}}@container (max-inline-size: 560px){.view-settings .settings-tab-actions{gap:.375rem}.view-settings .settings-tab-btn{min-block-size:2.75rem;padding-inline:.75rem}}@container (max-inline-size: 480px){.view-settings{padding:var(--space-sm)}.view-settings .settings-screen__title{display:none}.view-settings .settings-screen__body{padding-block:var(--space-sm);gap:var(--space-md)}.view-settings .settings-screen__footer{inline-size:stretch;flex-direction:column-reverse;align-items:stretch;gap:var(--space-sm);box-shadow:0 -8px 24px color-mix(in oklab,var(--color-on-surface) 5%,transparent);padding-block:var(--space-md, .25rem);padding-inline:var(--space-lg, .5rem)}.view-settings .settings-screen__footer .btn.primary{display:inline-flex;align-items:center;justify-content:center;min-block-size:2.75rem;inline-size:100%}.view-settings .settings-screen__footer .note{text-align:center;white-space:normal}}.view-settings__content{inline-size:100%;max-inline-size:clamp(640px,90%,800px)}.view-settings__title{margin:0 0 2rem;font-size:1.75rem;font-weight:var(--font-weight-bold, 700)}.view-settings__section{display:flex;flex-direction:column;margin-block-end:2rem;padding-block-end:2rem;border-block-end:1px solid var(--view-border, rgba(0, 0, 0, .1))}.view-settings__section:last-of-type{border-block-end:none}.view-settings__section h2{margin:0 0 1rem;font-size:1.125rem;font-weight:var(--font-weight-semibold, 600);color:var(--view-fg)}.view-settings__group{display:flex;flex-direction:column;gap:1rem}.view-settings__label{display:flex;flex-direction:column;gap:.375rem}.view-settings__label>span{font-size:var(--text-sm, .875rem);font-weight:var(--font-weight-medium, 500)}.view-settings__actions{display:flex;gap:.75rem;margin-block-start:2rem}.view-settings__btn{padding:.625rem 1.25rem;border:1px solid var(--view-border, rgba(0, 0, 0, .15));border-radius:var(--radius-sm, 6px);background:transparent;color:var(--view-fg);font-size:var(--text-sm, .875rem);font-weight:var(--font-weight-medium, 500);cursor:pointer;transition:background-color var(--motion-fast)}.view-settings__btn:hover{background-color:#0000000d}.view-settings__btn--primary{background-color:var(--color-primary, #007acc);border-color:var(--color-primary, #007acc);color:#fff}.view-settings__btn--primary:hover{filter:brightness(1.1)}.settings-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:var(--space-lg)}.settings-section{position:relative;overflow:hidden;padding:var(--space-xl);background:var(--color-surface-container-high);border-radius:var(--radius-xl);box-shadow:var(--elev-2);transition:all var(--motion-normal)}@container (max-inline-size: 1024px){.settings-section{padding:var(--space-lg);border-radius:var(--radius-lg)}}@container (max-inline-size: 768px){.settings-section{padding:var(--space-md)}}@container (max-inline-size: 480px){.settings-section{padding:var(--space-sm);border-radius:var(--radius-md)}}.settings-section:hover{box-shadow:var(--elev-3);transform:translateY(-2px)}@media(prefers-reduced-motion:reduce){.settings-section:hover{transform:none}}.settings-section:before{content:\"\";position:absolute;inset:0;background:linear-gradient(135deg,color-mix(in oklab,var(--color-tertiary) 2%,transparent) 0%,transparent 100%);border-radius:inherit;pointer-events:none}.settings-section>*{position:relative;z-index:1}.settings-section .settings-header{margin-block-end:var(--space-lg);padding-block-end:var(--space-md)}.settings-section .settings-header h3{display:flex;align-items:start;gap:var(--space-sm);margin:0;font-size:var(--text-lg);font-weight:var(--font-weight-semibold);color:var(--color-on-surface)}@container (max-inline-size: 768px){.settings-section .settings-header h3{font-size:var(--text-base)}}.settings-section .settings-header h3 ui-icon{margin-inline-end:var(--space-sm);opacity:.7}.settings-section .form-group{margin-block-end:var(--space-lg)}.settings-section .form-group:last-child{margin-block-end:0}.settings-section .form-group label{display:block;margin-block-end:var(--space-sm);font-size:var(--text-sm);font-weight:var(--font-weight-medium);color:var(--color-on-surface)}.settings-section .form-group textarea{min-block-size:100px;resize:vertical;font-family:var(--font-family-mono)}.settings-section .settings-actions{display:flex;justify-content:flex-end;gap:var(--space-md);margin-block-start:var(--space-xl);padding-block-start:var(--space-lg);flex-wrap:nowrap}@container (max-inline-size: 768px){.settings-section .settings-actions{flex-direction:column;gap:var(--space-sm)}}.settings-section .settings-actions .action-btn{min-block-size:44px;padding-inline:var(--space-sm);padding-block:var(--space-xl);border:none;border-radius:var(--radius-lg);background:var(--color-surface-container-high);color:var(--color-on-surface);font-size:var(--text-sm);font-weight:var(--font-weight-semibold);cursor:pointer;transition:all var(--motion-fast)}.settings-section .settings-actions .action-btn:hover{background:var(--color-surface-container-highest);transform:translateY(-1px);box-shadow:var(--elev-1)}.settings-section .settings-actions .action-btn:active{transform:translateY(0);box-shadow:none}.settings-section .settings-actions .action-btn.primary{background:var(--color-tertiary);color:var(--color-on-tertiary)}.settings-section .settings-actions .action-btn.primary:hover{background:color-mix(in oklab,var(--color-tertiary) 85%,black)}}@layer view.settings{.settings-panel{border-radius:var(--radius-lg, 12px);border:1px solid var(--surface-opacity-emphasis, rgba(0, 0, 0, .12))}.settings-panel{place-content:center;place-items:center;justify-content:start;block-size:stretch;inline-size:stretch;aspect-ratio:auto;display:flex;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:var(--surface-opacity-emphasis) transparent;flex-direction:column;flex-wrap:nowrap;align-items:center;grid-row:1/-1;max-block-size:none;border-width:0px;border-radius:0}.settings-panel{background-color:oklch(from --c2-surface(.15,var(--current, currentColor)) l c h/.9);backdrop-filter:blur(1rem)}.settings-panel,.settings-panel :where(button,input,textarea,select){touch-action:pan-y}.settings-panel [data-shape]{pointer-events:none;touch-action:pan-y}.settings-panel .panel-header{display:grid;gap:var(--gap-xs);min-inline-size:0;inline-size:stretch;max-inline-size:stretch;text-align:start;padding:var(--padding-sm);position:relative;place-content:center;place-items:center}.settings-panel .panel-header h2{margin:0;font-size:var(--font-xl)}.settings-panel .panel-header p{margin:0;font-size:var(--font-sm);color:color-mix(in oklch,var(--on-surface, currentColor) var(--text-tint-secondary, 74%),transparent)}.settings-panel .settings-group{background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111)}.settings-panel .settings-group{display:flex;flex-direction:column;border:none 0 transparent;border-width:0;line-height:normal;flex-wrap:nowrap;border-radius:var(--radius-lg);justify-content:start;min-inline-size:fit-content;inline-size:stretch;block-size:max-content;max-block-size:none;overflow:visible;max-inline-size:stretch;padding-inline:var(--padding-xl, 1.5rem);place-content:center;place-items:center;text-align:center}.settings-panel .settings-group:not(.is-collapsible){padding:var(--padding-lg);gap:var(--gap-md);display:flex;flex-direction:column;flex-wrap:nowrap;block-size:max-content;max-block-size:none;inline-size:stretch;padding-inline:var(--padding-xl, 1.5rem)}.settings-panel .settings-group.is-collapsible{padding:0}.settings-panel .settings-group.is-collapsible summary{display:flex;flex-direction:column;gap:var(--gap-xs);padding:var(--padding-lg);cursor:pointer;list-style:none;outline:none}.settings-panel .settings-group.is-collapsible .group-body{inline-size:stretch;max-inline-size:stretch;min-inline-size:0px;block-size:fit-content;padding:0 var(--padding-lg) var(--padding-lg);display:grid;grid-template-columns:minmax(0px,1fr);gap:var(--gap-md);place-content:center;place-items:center;text-align:center}.settings-panel .settings-group .group-header{display:flex;flex-direction:column;gap:var(--gap-xs);block-size:max-content;min-inline-size:0;line-height:normal;flex-wrap:nowrap;position:relative;place-content:center;place-items:center;text-align:center}.settings-panel .settings-group .group-header h3{margin:0;font-size:var(--font-md);text-align:center;line-height:normal;block-size:max-content;max-block-size:none}.settings-panel .settings-group .group-header p{margin:0;font-size:var(--font-sm);color:color-mix(in oklch,var(--on-surface, currentColor) var(--text-tint-muted, 60%),transparent);line-height:normal;block-size:max-content;max-block-size:none}.settings-panel .settings-group .group-title{font-size:var(--font-base);font-weight:var(--font-weight-semibold)}.settings-panel .settings-group .group-note{font-size:var(--font-sm);color:color-mix(in oklch,var(--on-surface, currentColor) var(--text-tint-muted, 60%),transparent)}.settings-panel .settings-group .group-body{display:grid;grid-template-columns:minmax(0px,1fr);inline-size:stretch;max-inline-size:stretch;min-inline-size:0px;block-size:fit-content;gap:var(--gap-md);place-content:center;place-items:center;text-align:center}.settings-actions{gap:var(--gap-md);margin-block-start:var(--gap-sm);padding:var(--padding-sm);grid-column:1/-1;overflow:visible;display:flex;align-items:center;justify-content:space-between}.settings-actions .btn.save{border:1px solid var(--surface-opacity-emphasis, rgba(0, 0, 0, .12));border-radius:var(--radius-md, 10px);background:transparent;color:inherit}.settings-actions .save-status{font-size:var(--font-sm);color:color-mix(in oklch,var(--on-surface, currentColor) var(--text-tint-muted, 60%),transparent)}.view-settings{display:grid;grid-template-rows:auto minmax(0,1fr) auto;grid-template-columns:minmax(0,1fr);align-content:stretch;justify-items:stretch;gap:0;row-gap:0;padding:.25rem;border-radius:0;min-inline-size:0;min-block-size:0;aspect-ratio:auto;inline-size:stretch;block-size:stretch;max-block-size:100%;background-color:transparent;overflow:hidden;-webkit-overflow-scrolling:touch;contain:layout paint}.view-settings header{line-height:normal;block-size:max-content;min-inline-size:0;padding:0;margin:0}.view-settings header h2,.view-settings header h1,.view-settings header span,.view-settings header p{line-height:normal;block-size:max-content}.view-settings span{block-size:max-content;line-height:normal}.settings-form{display:flex;flex-direction:column;gap:var(--gap-xl);grid-template-rows:minmax(0px,1fr) minmax(0px,max-content);block-size:max-content;inline-size:fit-content;min-inline-size:min(100%,40rem);aspect-ratio:auto;max-inline-size:stretch;padding:var(--padding-lg);box-shadow:none;contain:inline-size layout paint style;place-content:center;place-items:center;border-width:.5px;border-style:solid;border-radius:var(--radius-lg)}.settings-form .settings-panels{display:grid;gap:var(--gap-xl);min-inline-size:0;inline-size:stretch;max-inline-size:stretch}.settings-form>*{inline-size:stretch;max-inline-size:stretch;min-inline-size:fit-content;box-sizing:border-box}.settings-hero{display:grid;grid-template-columns:auto 1fr;gap:var(--gap-lg);align-items:center;padding:var(--padding-xl);border-radius:var(--radius-lg);background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111)}.settings-hero .hero-icon{inline-size:clamp(3rem,4vw,3.5rem);block-size:clamp(3rem,4vw,3.5rem);border-radius:50%;display:grid;place-items:center;background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111)}.settings-hero .hero-icon ui-icon{--icon-size: clamp(1.6rem, 2.4vw, 1.9rem);--icon-color: currentColor}.settings-hero .hero-body{display:grid;gap:var(--gap-sm);min-inline-size:0}.settings-hero .hero-body h1{margin:0;font-size:var(--font-2xl);font-weight:var(--font-weight-bold)}.settings-hero .hero-body p{margin:0;font-size:var(--font-base);color:color-mix(in oklch,var(--on-surface, currentColor) var(--text-tint-secondary, 74%),transparent)}.settings-nav{display:flex;gap:var(--gap-md);padding:var(--padding-xs);border-radius:var(--radius-lg);overflow-inline:auto;overflow-block:hidden;scrollbar-width:thin;scrollbar-color:oklch(from --c2-on-surface(var(--scrollbar-tint),var(--current, var(--color-on-surface, var(--md-on-surface, #1c1b1f)))) l c h/var(--scrollbar-opacity)) transparent;-webkit-overflow-scrolling:touch}.settings-nav::-webkit-scrollbar{inline-size:6px;block-size:6px}.settings-nav::-webkit-scrollbar-thumb{background-color:oklch(from --c2-on-surface(var(--scrollbar-tint),var(--current, var(--color-on-surface, var(--md-on-surface, #1c1b1f)))) l c h/var(--scrollbar-opacity));border-radius:var(--radius-full)}.settings-nav::-webkit-scrollbar-track{background-color:transparent}.settings-nav{scrollbar-width:none;background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111)}.settings-nav .settings-tab{gap:var(--gap-sm);padding:var(--padding-sm) var(--padding-lg);border-radius:var(--radius-full);background:transparent;cursor:pointer;transition:var(--transition-colors);font-size:var(--font-sm);white-space:nowrap;display:flex;align-items:center;justify-content:center}.settings-nav .settings-tab ui-icon{--icon-size: var(--icon-size-md)}.settings-nav .settings-tab.is-active{background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111)}.settings-nav .settings-tab:where(:hover,:focus-visible):not(.is-active){background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111)}.settings-actions-group{display:flex;gap:var(--gap-sm);padding:var(--padding-sm);border-radius:var(--radius-md);background:linear-gradient(135deg,var(--surface-opacity-subtle),var(--surface-opacity-muted));border:0px none transparent;place-content:center;place-items:center;text-align:center;overflow:visible}.settings-actions-group header,.settings-actions-group p{place-content:center;place-items:center;text-align:center;line-height:normal;block-size:max-content;max-block-size:none;min-inline-size:0;inline-size:max-content}.mcp-actions{display:flex;gap:var(--gap-sm);padding:var(--padding-sm);border-radius:var(--radius-md);background:linear-gradient(135deg,var(--surface-opacity-subtle),var(--surface-opacity-muted));border:0px none transparent;order:99;place-content:center;place-items:center;text-align:center;overflow:visible}.mcp-actions header,.mcp-actions p{place-content:center;place-items:center;text-align:center;line-height:normal;block-size:max-content;max-block-size:none;min-inline-size:0;inline-size:max-content}.mcp-actions .add-mcp{border:1px solid var(--surface-opacity-emphasis, rgba(0, 0, 0, .12));border-radius:var(--radius-md, 10px);background:transparent;color:inherit}.mcp-actions .add-mcp:active{transform:translateY(0)}.mcp-actions .add-mcp ui-icon{--icon-size: var(--icon-size-md);transition:transform var(--transition-colors)}.mcp-actions .add-mcp:where(:hover,:focus-visible) ui-icon{transform:rotate(90deg)}.color-option{--current: attr(data-color type(<color>));background-color:attr(data-color type(<color>))!important;min-inline-size:fit-content;min-block-size:fit-content;inline-size:2.5rem;block-size:2.5rem;max-inline-size:2.5rem;max-block-size:2.5rem;border-radius:50%;border:2px solid transparent;cursor:pointer;aspect-ratio:1/1;box-shadow:0 2px 4px #0000001a;font-size:0;line-height:0;padding:1rem;margin:0;outline:none;appearance:none}.shape-palette-grid{display:flex;gap:var(--gap-sm);flex-wrap:wrap;justify-content:flex-start;align-items:center;padding:var(--padding-xs)}.shape-option{display:flex;flex-direction:column;align-items:center;gap:var(--gap-xs);padding:var(--padding-sm);border-radius:var(--radius-md);border:2px solid transparent;cursor:pointer;background:transparent;transition:all var(--transition-fast) ease-out;min-inline-size:4.5rem;aspect-ratio:1/1.2;block-size:max-content;background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111)}.shape-option:hover{background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111);transform:translateY(-2px)}.shape-option.is-selected{border-color:var(--primary, currentColor);background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111)}.shape-option .shape-preview{inline-size:2.5rem;block-size:2.5rem;background-color:var(--on-surface, currentColor);opacity:.7;transition:all var(--transition-fast) ease-out;aspect-ratio:1/1}.shape-option.is-selected .shape-preview{opacity:1;background-color:var(--primary, currentColor)}.shape-option:hover .shape-preview{opacity:1}.shape-option .shape-label{font-size:var(--font-xs);color:var(--on-surface, currentColor);opacity:.7;text-align:center;white-space:nowrap}.shape-option.is-selected .shape-label{opacity:1;font-weight:var(--font-weight-medium)}.mcp-config{border-radius:var(--radius-lg);padding:var(--padding-lg);margin-block-end:var(--gap-md);position:relative;overflow:hidden;transition:all var(--transition-colors) ease-in-out;order:calc(1 + sibling-index());border:none 0 transparent;background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111)}.mcp-config:before{content:\"\";position:absolute;inset:0;background:linear-gradient(135deg,var(--primary-opacity-subtle) 0%,transparent 50%,var(--secondary-opacity-subtle) 100%);opacity:0;transition:opacity var(--transition-colors);pointer-events:none}.mcp-config:where(:hover,:focus-visible,:focus-within){border-color:var(--primary-opacity-default);border-width:0}.mcp-config:where(:hover,:focus-visible,:focus-within):before{opacity:1}.mcp-config .mcp-header{display:flex;justify-content:space-between;align-items:center;margin-block-end:var(--gap-md);position:relative;z-index:1}.mcp-config .mcp-header h4{margin:0;font-size:var(--font-md);font-weight:var(--font-weight-semibold);color:color-mix(in oklch,var(--on-surface, currentColor) var(--text-tint-secondary, 74%),transparent);display:flex;align-items:center;gap:var(--gap-xs)}.mcp-config .mcp-header h4:before{content:\"🔌\";font-size:var(--font-sm);opacity:.7}.mcp-config .mcp-header .remove-mcp{padding:var(--padding-xs) var(--padding-sm);font-size:var(--font-xs);gap:var(--gap-xs);border-radius:var(--radius-full);transition:all var(--transition-colors) ease-in-out;position:relative;overflow:hidden}.mcp-config .mcp-header .remove-mcp:before{content:\"\";position:absolute;inset:0;background:radial-gradient(circle,var(--danger-opacity-muted) 0%,transparent 70%);transform:scale(0);transition:transform var(--transition-colors)}.mcp-config .mcp-header .remove-mcp:where(:hover,:focus-visible){background-color:var(--fl-surface, #fff);color:var(--fl-on-surface, #111);transform:scale(1.05)}.mcp-config .mcp-header .remove-mcp:where(:hover,:focus-visible):before{transform:scale(1)}.mcp-config .mcp-header .remove-mcp:active{transform:scale(.95)}.mcp-config .mcp-header .remove-mcp ui-icon{--icon-size: var(--icon-size-sm);transition:transform var(--transition-colors)}.mcp-config .mcp-header .remove-mcp:where(:hover,:focus-visible) ui-icon{transform:rotate(180deg)}.mcp-config .mcp-fields{display:grid;gap:var(--gap-md);position:relative;z-index:1}.mcp-config.mcp-config-new{animation:slideInUp .3s ease-out}.view-settings .settings-screen__footer{justify-content:start;flex-direction:column-reverse;align-items:stretch;overflow:visible;gap:var(--space-sm)}.view-settings .settings-screen__footer .btn.primary{display:inline-flex;align-items:center;justify-content:center;inline-size:100%}.settings-hero{grid-template-columns:1fr;text-align:center;justify-items:center}.settings-nav .settings-tab{flex:1 0 auto}.settings-panel{padding:var(--padding-lg)}.settings-panel,.settings-form{place-content:start!important;place-items:stretch!important;justify-content:flex-start!important;align-content:flex-start!important;align-items:stretch!important;text-align:start!important}.view-settings{text-align:start!important}.view-settings :where(input:not([type=checkbox]):not([type=radio]),select,textarea,button){min-block-size:2rem;font-size:.875rem;line-height:1.25}.view-settings :where(input[type=checkbox],input[type=radio]){min-block-size:unset;min-inline-size:unset;box-sizing:border-box}.view-settings .form-checkbox input[type=checkbox],.view-settings label.field.checkbox input[type=checkbox]{inline-size:1.25rem;block-size:1.25rem;min-block-size:1.25rem;aspect-ratio:1;flex-shrink:0;align-self:center;border-radius:var(--radius-xs, 4px)}.view-settings .settings-tab-actions{flex-wrap:nowrap}}@layer tokens{:root:has([data-view=settings]),html:has([data-view=settings]){--view-layout: \"flex\";--view-sidebar-visible: true;--view-padding: var(--space-6);--view-content-max-width: none;--view-section-gap: var(--space-8);--view-field-gap: var(--space-4);--view-bg: var(--color-surface);--view-fg: var(--color-on-surface);--view-label-color: var(--color-text-muted, var(--color-on-surface-variant));--settings-divider: color-mix(in oklab, var(--color-outline-variant) 32%, transparent);--settings-card-surface: color-mix(in oklab, var(--color-surface-container) 92%, var(--color-surface));--settings-card-edge: color-mix(in oklab, var(--color-outline-variant) 16%, transparent);--settings-card-shadow: 0 2px 20px color-mix(in oklab, var(--color-on-surface) 5%, transparent);--settings-chip-edge: color-mix(in oklab, var(--color-outline-variant) 12%, transparent)}}@layer components{.view-settings{display:grid;grid-template-rows:auto minmax(0,1fr) auto;grid-template-columns:minmax(0,1fr);align-content:stretch;justify-items:stretch;gap:0;row-gap:0;inline-size:100%;block-size:100%;max-block-size:100%;min-block-size:0;margin-inline:0;padding:var(--space-lg);overflow:hidden;background-color:var(--view-bg, var(--color-surface));color:var(--view-fg, var(--color-on-surface));text-align:start}.view-settings :where(select,input,textarea,option){pointer-events:auto}.view-settings textarea{container-type:inline-size;resize:block;inline-size:stretch;max-inline-size:stretch;box-sizing:border-box}.view-settings h2{margin:0;font-size:var(--text-xl, 20px);font-weight:var(--font-weight-bold, 700);letter-spacing:-.02em;color:var(--color-on-surface)}.view-settings h3{text-align:start}.view-settings .card{display:flex;flex-direction:column;gap:var(--spacing-md, 12px);padding:var(--spacing-md, 16px);inline-size:stretch;border:none;border-radius:var(--radius-xl, 16px);background:var(--settings-card-surface, color-mix(in oklab, var(--color-surface-container) 92%, var(--color-surface)));box-shadow:var(--settings-card-shadow, 0 2px 20px color-mix(in oklab, var(--color-on-surface) 5%, transparent)),0 0 0 1px var(--settings-card-edge, color-mix(in oklab, var(--color-outline-variant) 16%, transparent))}@container (max-inline-size: 480px){.view-settings .card{gap:var(--spacing-sm, 10px);padding:var(--spacing-md, 14px);border-radius:var(--radius-lg, 14px)}}.view-settings .card h3{margin:0;font-size:var(--text-base, 15px);font-weight:var(--font-weight-semibold, 600);letter-spacing:-.01em;color:var(--color-on-surface)}.view-settings .card .form-select{inline-size:stretch}.view-settings .field{display:grid;grid-auto-flow:row;gap:var(--spacing-xs, 6px);inline-size:stretch;font-size:var(--text-xs, 12px);flex-direction:column}.view-settings .field>span{font-size:var(--text-xs, 12px);color:var(--color-on-surface-variant);opacity:.85}.view-settings .field.checkbox{grid-auto-flow:column;grid-auto-columns:max-content 1fr;align-items:center;gap:var(--spacing-sm, 10px)}.view-settings .mcp-actions{margin-block-start:var(--space-xs, 8px);display:flex;justify-content:flex-start;flex-direction:row;flex-wrap:wrap}.view-settings .mcp-section{display:flex;flex-direction:column;gap:var(--space-sm, 8px)}.view-settings .mcp-row{display:grid;gap:var(--space-sm, 8px);padding:var(--space-md, 12px);border:none;border-radius:var(--radius-lg, 14px);background:color-mix(in oklab,var(--color-surface-container-low) 88%,var(--color-surface));box-shadow:inset 0 0 0 1px var(--settings-card-edge, color-mix(in oklab, var(--color-outline-variant) 14%, transparent))}.view-settings .mcp-row .field{margin:0}.view-settings .mcp-empty-note{margin:0;color:var(--color-on-surface-variant);font-size:var(--text-xs, 12px);opacity:.85}.view-settings .settings-screen__top{display:flex;flex-direction:column;align-items:stretch;gap:var(--space-sm);padding-block-end:var(--space-md);border-block-end:1px solid var(--settings-divider, color-mix(in oklab, var(--color-outline-variant) 32%, transparent));flex-shrink:0;min-inline-size:0}.view-settings .settings-screen__title{font-weight:var(--font-weight-semibold, 600);letter-spacing:-.015em}@media(min-width:720px){.view-settings .settings-screen__top{flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-between}.view-settings .settings-screen__top .settings-tab-actions{flex:1;justify-content:flex-end}}.view-settings .settings-screen__body{min-block-size:0;min-inline-size:0;overflow:auto;overflow-block:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;display:flex;flex-direction:column;gap:var(--space-lg);padding-block:var(--space-md);scrollbar-width:thin;scrollbar-color:var(--color-outline-variant) transparent}.view-settings .settings-screen__body::-webkit-scrollbar{inline-size:6px}.view-settings .settings-screen__body::-webkit-scrollbar-thumb{background:color-mix(in oklab,var(--color-outline-variant) 45%,transparent);border-radius:99px}.view-settings .settings-screen__body::-webkit-scrollbar-thumb:hover{background:color-mix(in oklab,var(--color-outline) 55%,transparent)}.view-settings .settings-screen__footer{inline-size:stretch;display:flex;align-items:center;justify-content:start;gap:var(--space-sm);flex-wrap:wrap;flex-shrink:0;padding-block:var(--space-md, .25rem);padding-inline:var(--space-lg, .5rem);margin-block-start:0;border-block-start:1px solid var(--settings-divider, color-mix(in oklab, var(--color-outline-variant) 32%, transparent));background:color-mix(in oklab,var(--color-surface-container-low, var(--color-surface-container)) 72%,var(--color-surface));box-shadow:0 -12px 28px color-mix(in oklab,var(--color-on-surface) 4%,transparent)}.view-settings .settings-tab-actions{display:flex;flex-wrap:nowrap;gap:var(--space-xs, 6px);align-items:center;inline-size:stretch;container-type:inline-size;justify-content:flex-start}.view-settings .settings-tab-btn{padding:.5rem .875rem;min-block-size:2.5rem;border:none;border-radius:var(--radius-full, 999px);background:color-mix(in oklab,var(--color-surface-container-low) 94%,transparent);color:var(--color-on-surface-variant);font-size:var(--text-xs, 12px);font-weight:var(--font-weight-medium, 500);cursor:pointer;transition:background-color var(--motion-fast),color var(--motion-fast),box-shadow var(--motion-fast);box-shadow:0 0 0 1px var(--settings-chip-edge, color-mix(in oklab, var(--color-outline-variant) 12%, transparent))}.view-settings .settings-tab-btn:hover{background:color-mix(in oklab,var(--color-surface-container) 92%,transparent);color:var(--color-on-surface)}.view-settings .settings-tab-btn.is-active{background:var(--color-primary);color:var(--color-on-primary);box-shadow:0 2px 12px color-mix(in oklab,var(--color-primary) 28%,transparent),0 0 0 1px color-mix(in oklab,var(--color-primary) 40%,transparent)}.view-settings .settings-tab-panel{display:none}.view-settings .settings-tab-panel.is-active{display:flex}.view-settings .btn{padding:.5rem 1.125rem;min-block-size:2.5rem;border:none;border-radius:var(--radius-full, 999px);background:color-mix(in oklab,var(--color-surface-container) 88%,transparent);color:var(--color-on-surface);font-family:inherit;font-size:var(--text-sm, 13px);font-weight:var(--font-weight-medium, 500);cursor:pointer;transition:background-color var(--motion-fast),box-shadow var(--motion-fast),filter var(--motion-fast);box-shadow:0 0 0 1px var(--settings-chip-edge, color-mix(in oklab, var(--color-outline-variant) 12%, transparent))}.view-settings .btn:hover{background:color-mix(in oklab,var(--color-on-surface) 6%,transparent)}.view-settings .btn.primary{background:var(--color-primary);border-color:transparent;color:var(--color-on-primary, #fff);box-shadow:0 2px 14px color-mix(in oklab,var(--color-primary) 32%,transparent),0 0 0 1px color-mix(in oklab,var(--color-primary) 55%,transparent)}.view-settings .btn.primary:hover{filter:brightness(1.06)}.view-settings .note,.view-settings .ext-note{font-size:var(--text-xs, 12px);color:var(--color-on-surface-variant);opacity:.9;flex-grow:0;max-inline-size:stretch;display:block;flex-shrink:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none}.view-settings .ext-note{opacity:.8}.view-settings .ext-note code{padding:2px 4px;background:var(--color-surface-container-highest);border-radius:var(--radius-xs, 4px);font-size:var(--text-xs, 11px)}@container (max-inline-size: 1024px){.view-settings{padding:var(--space-md)}}@container (max-inline-size: 768px){.view-settings{padding:var(--space-sm)}.view-settings .settings-screen__title{font-size:var(--text-lg, 17px)}.view-settings .settings-screen__top{gap:var(--space-md)}}@container (max-inline-size: 560px){.view-settings .settings-tab-actions{gap:.375rem}.view-settings .settings-tab-btn{min-block-size:2.75rem;padding-inline:.75rem}}@container (max-inline-size: 480px){.view-settings{padding:var(--space-sm)}.view-settings .settings-screen__title{display:none}.view-settings .settings-screen__body{padding-block:var(--space-sm);gap:var(--space-md)}.view-settings .settings-screen__footer{inline-size:stretch;flex-direction:column-reverse;align-items:stretch;gap:var(--space-sm);padding-block:var(--space-sm);box-shadow:0 -8px 24px color-mix(in oklab,var(--color-on-surface) 5%,transparent)}.view-settings .settings-screen__footer .btn.primary{display:inline-flex;align-items:center;justify-content:center;min-block-size:2.75rem;inline-size:100%}.view-settings .settings-screen__footer .note{text-align:center;white-space:normal}}.view-settings__content{inline-size:100%;max-inline-size:clamp(640px,90%,800px)}.view-settings__title{margin:0 0 2rem;font-size:1.75rem;font-weight:var(--font-weight-bold, 700)}.view-settings__section{display:flex;flex-direction:column;margin-block-end:2rem;padding-block-end:2rem;border-block-end:1px solid var(--view-border, rgba(0, 0, 0, .1))}.view-settings__section:last-of-type{border-block-end:none}.view-settings__section h2{margin:0 0 1rem;font-size:1.125rem;font-weight:var(--font-weight-semibold, 600);color:var(--view-fg)}.view-settings__group{display:flex;flex-direction:column;gap:1rem}.view-settings__label{display:flex;flex-direction:column;gap:.375rem}.view-settings__label>span{font-size:var(--text-sm, .875rem);font-weight:var(--font-weight-medium, 500)}.view-settings__actions{display:flex;gap:.75rem;margin-block-start:2rem}.view-settings__btn{padding:.625rem 1.25rem;border:1px solid var(--view-border, rgba(0, 0, 0, .15));border-radius:var(--radius-sm, 6px);background:transparent;color:var(--view-fg);font-size:var(--text-sm, .875rem);font-weight:var(--font-weight-medium, 500);cursor:pointer;transition:background-color var(--motion-fast)}.view-settings__btn:hover{background-color:#0000000d}.view-settings__btn--primary{background-color:var(--color-primary, #007acc);border-color:var(--color-primary, #007acc);color:#fff}.view-settings__btn--primary:hover{filter:brightness(1.1)}.settings-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:var(--space-lg)}.settings-section{position:relative;overflow:hidden;padding:var(--space-xl);background:var(--color-surface-container-high);border-radius:var(--radius-xl);box-shadow:var(--elev-2);transition:all var(--motion-normal)}@container (max-inline-size: 1024px){.settings-section{padding:var(--space-lg);border-radius:var(--radius-lg)}}@container (max-inline-size: 768px){.settings-section{padding:var(--space-md)}}@container (max-inline-size: 480px){.settings-section{padding:var(--space-sm);border-radius:var(--radius-md)}}.settings-section:hover{box-shadow:var(--elev-3);transform:translateY(-2px)}@media(prefers-reduced-motion:reduce){.settings-section:hover{transform:none}}.settings-section:before{content:\"\";position:absolute;inset:0;background:linear-gradient(135deg,color-mix(in oklab,var(--color-tertiary) 2%,transparent) 0%,transparent 100%);border-radius:inherit;pointer-events:none}.settings-section>*{position:relative;z-index:1}.settings-section .settings-header{margin-block-end:var(--space-lg);padding-block-end:var(--space-md)}.settings-section .settings-header h3{display:flex;align-items:start;gap:var(--space-sm);margin:0;font-size:var(--text-lg);font-weight:var(--font-weight-semibold);color:var(--color-on-surface)}@container (max-inline-size: 768px){.settings-section .settings-header h3{font-size:var(--text-base)}}.settings-section .settings-header h3 ui-icon{margin-inline-end:var(--space-sm);opacity:.7}.settings-section .form-group{margin-block-end:var(--space-lg)}.settings-section .form-group:last-child{margin-block-end:0}.settings-section .form-group label{display:block;margin-block-end:var(--space-sm);font-size:var(--text-sm);font-weight:var(--font-weight-medium);color:var(--color-on-surface)}.settings-section .form-group textarea{min-block-size:100px;resize:vertical;font-family:var(--font-family-mono)}.settings-section .settings-actions{display:flex;justify-content:flex-end;gap:var(--space-md);margin-block-start:var(--space-xl);padding-block-start:var(--space-lg);flex-wrap:nowrap}@container (max-inline-size: 768px){.settings-section .settings-actions{flex-direction:column;gap:var(--space-sm)}}.settings-section .settings-actions .action-btn{min-block-size:44px;padding-inline:var(--space-sm);padding-block:var(--space-xl);border:none;border-radius:var(--radius-lg);background:var(--color-surface-container-high);color:var(--color-on-surface);font-size:var(--text-sm);font-weight:var(--font-weight-semibold);cursor:pointer;transition:all var(--motion-fast)}.settings-section .settings-actions .action-btn:hover{background:var(--color-surface-container-highest);transform:translateY(-1px);box-shadow:var(--elev-1)}.settings-section .settings-actions .action-btn:active{transform:translateY(0);box-shadow:none}.settings-section .settings-actions .action-btn.primary{background:var(--color-tertiary);color:var(--color-on-tertiary)}.settings-section .settings-actions .action-btn.primary:hover{background:color-mix(in oklab,var(--color-tertiary) 85%,black)}}";
Rt({
	index: 0,
	length: 0,
	action: "MANUAL",
	view: "",
	canBack: !1,
	canForward: !1,
	entries: []
}), typeof history < "u" && history.pushState.bind(history), typeof history < "u" && history.replaceState.bind(history), typeof history < "u" && history.go.bind(history), typeof history < "u" && history.forward.bind(history), typeof history < "u" && history.back.bind(history);
//#endregion
//#region ../../projects/lur.e/src/utils/math/Operations.ts
var Jr = (e) => {
	let t = [], n = (e) => {
		e && typeof e == "object" && "value" in e ? t.push(e) : Array.isArray(e) ? e.forEach(n) : e && typeof e == "object" && Object.values(e).forEach(n);
	};
	return n(e), t;
}, Yr = (e, t) => {
	let n = () => e.map((e) => e && typeof e == "object" && "value" in e ? e.value : e), r = t(...n());
	if (typeof r == "number") {
		let i = At(r), a = () => {
			i.value = t(...n());
		};
		return Jr(e).forEach((e) => V(e, a)), i;
	}
	let i = r, a = () => {
		i = t(...n());
	};
	return Jr(e).forEach((e) => V(e, a)), i;
}, Xr = class {
	static add(e, t, n = "px") {
		return Yr([e, t], () => `calc(${e.value}${n} + ${t.value}${n})`);
	}
	static subtract(e, t, n = "px") {
		return Yr([e, t], () => `calc(${e.value}${n} - ${t.value}${n})`);
	}
	static multiply(e, t) {
		return Yr([e, t], () => `calc(${e.value} * ${t.value})`);
	}
	static divide(e, t) {
		return Yr([e, t], () => `calc(${e.value} / ${t.value})`);
	}
	static clamp(e, t, n, r = "px") {
		return Yr([
			e,
			t,
			n
		], () => `clamp(${t.value}${r}, ${e.value}${r}, ${n.value}${r})`);
	}
	static min(e, t, n = "px") {
		return Yr([e, t], () => `min(${e.value}${n}, ${t.value}${n})`);
	}
	static max(e, t, n = "px") {
		return Yr([e, t], () => `max(${e.value}${n}, ${t.value}${n})`);
	}
};
(class {
	static width = At(typeof window < "u" ? window?.innerWidth : 0);
	static height = At(typeof window < "u" ? window?.innerHeight : 0);
	static init() {
		typeof window < "u" && window?.addEventListener?.("resize", () => {
			this.width.value = window?.innerWidth, this.height.value = window?.innerHeight;
		});
	}
	static center() {
		return {
			x: Xr.divide(this.width, At(2)),
			y: Xr.divide(this.height, At(2))
		};
	}
}).init();
//#endregion
//#region ../../projects/lur.e/src/lure/core/Binding.ts
var Zr = new en(), Qr = new FinalizationRegistry((e) => e?.()), $r = Symbol.for("@mapped"), ei = Symbol.for("@virtual"), ti = Symbol.for("@behavior"), ni = (e) => !!e && typeof e == "object" && "ref" in e && typeof e?.unbind == "function", ri = (e, t) => {
	if (ni(t)) {
		t.bind?.();
		let n = () => t.unbind?.();
		return R(e, Symbol.dispose, n), n;
	}
	let n = {
		click: t,
		input: t,
		change: t
	};
	t?.({ target: e });
	let r = re?.(e, "addEventListener", n);
	return R(e, Symbol.dispose, r), r;
}, ii = (e, t) => {
	if (t) for (let n of t) ri(e, n);
	return e;
}, ai = (e, t, n = "value") => {
	let r = O(e), i = O(t), a = (e) => {
		h(i, "value", p(r)?.[n ?? "value"] ?? d(p(i)));
	}, o = {
		click: a,
		input: a,
		change: a
	};
	return a?.({ target: e }), re?.(e, "addEventListener", o), h(i, "value", e?.[n ?? "value"] ?? d(p(t))), () => re?.(e, "removeEventListener", o);
}, oi = (e, t, n = "") => {
	O(e);
	let r = O(t), i = v(n);
	return Sn(e, i, (e) => {
		if (e.type == "attributes" && e.attributeName == i) {
			let t = e?.target?.getAttribute?.(e.attributeName), n = p(r), i = d(n);
			N(e.oldValue, t) && n != null && (typeof n == "object" || typeof n == "function") && (N(i, t) || i == null) && h(n, "value", t);
		}
	});
}, si = (e, t, n) => {
	let r = Zr.get([e, t]);
	if (r) {
		let e = r[n]?.[1];
		delete r[n], e?.();
	}
}, ci = (e, t, n, r) => {
	let i = Zr.getOrInsertComputed([e, t], () => ({}));
	return i?.[n]?.[1]?.(), i[n] = r, !0;
}, li = (e, t, n, r, i, a) => {
	let o = ni(t) ? t : null;
	o && (o.bind?.(), t = o.ref);
	let s = O(e);
	if (e = p(s), !e || !(e instanceof Node || e?.element instanceof Node)) return;
	let c;
	c && c?.abort?.(), c = new AbortController();
	let l = O(t);
	r?.(e, n, t);
	let u = V?.([t, "value"], (e, t, a) => {
		let o = p(l), u = p(i), f = p(s), m = d(o) ?? d(e);
		(!u || u?.[n] == o) && (typeof o?.[ti] == "function" ? o?.[ti]?.((t = e) => r(f, n, m), [
			e,
			n,
			a
		], [
			c?.signal,
			n,
			s
		]) : r(f, n, m));
	}), f = null;
	typeof a == "boolean" && a && (r == jr && (f = oi(e, t, n)), r == Dr && (f = ai(e, t, n))), typeof a == "function" && (f = a(e, n, t));
	let m = () => {
		f?.disconnect?.(), f != null && typeof f == "function" && f?.(), o?.unbind?.(), u?.(), c?.abort?.(), si?.(e, r, n);
	};
	if (R(t, Symbol.dispose, m), Qr.register(e, m), !ci(e, r, n, [t, m])) return m;
}, ui = (e, t, n, r, i, a) => (r(e, t, ni(n) ? n.ref : n), li(e, n, t, r, i, a)), di = (e) => {
	let t = typeof e == "string" ? e.trim() : "";
	if (!t) return !0;
	for (let e of t.split(";")) {
		let t = e.trim();
		if (!t) continue;
		let n = t.indexOf(":");
		if (n < 0 || t.slice(n + 1).trim().length > 0) return !1;
	}
	return !0;
}, fi = (e) => {
	if (e == null) return;
	let t = e.getAttribute("style");
	t != null && di(t) && (e.removeAttribute("style"), e.style.cssText = "");
}, pi = (e, t) => {
	di(t) ? (e.style.cssText = "", e.removeAttribute("style")) : e.style.cssText = t;
}, mi = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), gi = {
	logAll(e) {
		return () => console.log("attributes:", [...e?.attributes].map((e) => ({
			name: e.name,
			value: e.value
		})));
	},
	append(e) {
		return (...t) => e?.append?.(...[...t || []]?.map?.((e) => e?.element ?? e) || t);
	},
	current(e) {
		return e;
	}
}, _i = class {
	direction = "children";
	selector;
	index = 0;
	_eventMap = /* @__PURE__ */ new WeakMap();
	constructor(e, t = 0, n = "children") {
		this.index = t, this.selector = e, this.direction = n;
	}
	_observeDOMChange(e, t, n) {
		return typeof t == "string" ? wn(e, t, n) : null;
	}
	_observeAttributes(e, t, n) {
		return typeof this.selector == "string" ? Cn(e, this.selector, t, n) : Sn(e ?? this.selector, t, n);
	}
	_getArray(e) {
		if (typeof e == "function" && (e = this.selector || e?.(this.selector)), !this.selector) return [e];
		if (typeof this.selector == "string") {
			let t = typeof e?.matches == "function" && e?.element != null && e?.matches?.(this.selector) ? [e] : [];
			if (this.direction == "children") {
				let n = typeof e?.querySelectorAll == "function" && e?.element != null ? [...e?.querySelectorAll?.(this.selector)] : [];
				return n?.length >= 1 ? [...n] : t;
			} else if (this.direction == "parent") {
				let n = e?.closest?.(this.selector);
				return n ? [n] : t;
			}
			return t;
		}
		return Array.isArray(this.selector) ? this.selector : [this.selector];
	}
	_getSelected(e) {
		let t = e?.self ?? e, n = this._selector(e);
		if (typeof n == "string") {
			if (this.direction == "children") return t?.matches?.(n) ? t : t?.querySelector?.(n);
			if (this.direction == "parent") return t?.matches?.(n) ? t : t?.closest?.(n);
		}
		return t == (n?.element ?? n) ? n?.element ?? n : null;
	}
	_redirectToBubble(e) {
		return typeof this._selector() == "string" && {
			pointerenter: "pointerover",
			pointerleave: "pointerout",
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			focus: "focusin",
			blur: "focusout"
		}?.[e] || e;
	}
	_addEventListener(e, t, n, r) {
		let i = this._selector(e);
		if (typeof i != "string") return i?.addEventListener?.(t, n, r), n;
		let a = this._redirectToBubble(t), o = e?.self ?? e, s = (t) => {
			let r = this._selector(e), i = t?.currentTarget ?? o, a = null;
			if (t?.composedPath && typeof t.composedPath == "function") {
				let e = t.composedPath();
				for (let n of e) if (n instanceof HTMLElement || n instanceof Element) {
					let e = n?.element ?? n;
					if (typeof r == "string") {
						if (_n(e, r, t)) {
							a = e;
							break;
						}
					} else if (gn(r, e, t)) {
						a = e;
						break;
					}
				}
			}
			a ||= (a = t?.target ?? this._getSelected(e) ?? i, a?.element ?? a), typeof r == "string" ? gn(i, _n(a, r, t), t) && n?.call?.(a, t) : gn(i, r, t) && gn(r, a, t) && n?.call?.(a, t);
		};
		return o?.addEventListener?.(a, s, r), this._eventMap.getOrInsert(o, /* @__PURE__ */ new Map()).getOrInsert(a, /* @__PURE__ */ new WeakMap()).set(n, {
			wrap: s,
			option: r
		}), s;
	}
	_removeEventListener(e, t, n, r) {
		let i = this._selector(e);
		if (typeof i != "string") return i?.removeEventListener?.(t, n, r), n;
		let a = e?.self ?? e, o = this._redirectToBubble(t), s = this._eventMap.get(a);
		if (!s) return;
		let c = s.get(o), l = c?.get?.(n);
		a?.removeEventListener?.(o, l?.wrap ?? n, r ?? l?.option ?? {}), c?.delete?.(n), c?.size == 0 && s?.delete?.(o), s.size == 0 && this._eventMap.delete(a);
	}
	_selector(e) {
		return typeof this.selector == "string" && typeof e?.selector == "string" ? ((e?.selector || "") + " " + this.selector)?.trim?.() : this.selector;
	}
	get(e, t, n) {
		let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
		if (t in gi) return gi?.[t]?.(i);
		if (t == "length" && r?.length != null) return r?.length;
		if (t == "_updateSelector") return (e) => this.selector = e || this.selector;
		if (["style", "attributeStyleMap"].indexOf(t) >= 0) {
			let n = e?.self ?? e, r = this._selector(e), a = typeof r == "string" ? qn(r, "ux-query", n) : i;
			return t == "attributeStyleMap" ? a?.styleMap ?? a?.attributeStyleMap : a?.[t];
		}
		if (t == "self") return e?.self ?? e;
		if (t == "selector") return this._selector(e);
		if (t == "observeAttr") return (t, n) => this._observeAttributes(e, t, n);
		if (t == "DOMChange") return (t) => this._observeDOMChange(e, this.selector, t);
		if (t == "addEventListener") return (t, n, r) => this._addEventListener(e, t, n, r);
		if (t == "removeEventListener") return (t, n, r) => this._removeEventListener(e, t, n, r);
		if (t == "getAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = mi?.get?.(e)?.get?.(this.selector) ?? r;
			return Zr?.get?.(i)?.get?.(jr)?.has?.(t) ? Zr?.get?.(i)?.get?.(jr)?.get?.(t)?.[0] : r?.getAttribute?.(t);
		};
		if (t == "setAttribute") return (t, n) => {
			let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
			return typeof n == "object" && (n?.value != null || "value" in n) ? ui(i, t, n, jr, null, !0) : i?.setAttribute?.(t, n);
		};
		if (t == "removeAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = mi?.get?.(e)?.get?.(this.selector) ?? r;
			return Zr?.get?.(i)?.get?.(jr)?.has?.(t) ? Zr?.get?.(i)?.get?.(jr)?.get?.(t)?.[1]?.() : r?.removeAttribute?.(t);
		};
		if (t == "hasAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = mi?.get?.(e)?.get?.(this.selector) ?? r;
			return Zr?.get?.(i)?.get?.(jr)?.has?.(t) ? !0 : r?.hasAttribute?.(t);
		};
		if (t == "element") {
			if (r?.length <= 1) return i?.element ?? i;
			let e = document.createDocumentFragment();
			return e.append(...r), e;
		}
		if (t == Symbol.toPrimitive && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (e) => e == "number" ? (i?.element ?? i)?.valueAsNumber ?? parseFloat((i?.element ?? i)?.value) : e == "string" ? String((i?.element ?? i)?.value ?? i?.element ?? i) : e == "boolean" ? (i?.element ?? i)?.checked : (i?.element ?? i)?.checked ?? (i?.element ?? i)?.value ?? i?.element ?? i;
		if (t == "checked" && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (i?.element ?? i)?.checked;
		if (t == "value" && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (i?.element ?? i)?.valueAsNumber ?? (i?.element ?? i)?.valueAsDate ?? (i?.element ?? i)?.value ?? (i?.element ?? i)?.checked;
		if (t == ke && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (t) => {
			let n = i?.value, r = [(e) => {
				let r = this._getSelected(e?.target);
				t?.(r?.value, "value", n), n = r?.value;
			}, { passive: !0 }];
			return this._addEventListener(e, "change", ...r), () => this._removeEventListener(e, "change", ...r);
		};
		if (t == "deref" && (typeof i == "object" || typeof i == "function") && i != null) {
			let e = new WeakRef(i);
			return () => e?.deref?.()?.element ?? e?.deref?.();
		}
		if (typeof t == "string" && /^\d+$/.test(t)) return r[parseInt(t)];
		let a = i;
		return a?.[t] == null ? r?.[t] == null ? typeof e?.[t] == "function" ? e?.[t].bind(a) : e?.[t] : typeof r[t] == "function" ? r[t].bind(r) : r[t] : typeof a[t] == "function" ? a[t].bind(a) : a[t];
	}
	set(e, t, n) {
		let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
		return typeof t == "string" && /^\d+$/.test(t) || r[t] != null ? !1 : (i && (i[t] = n), !0);
	}
	has(e, t) {
		let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e);
		return typeof t == "string" && /^\d+$/.test(t) && n[parseInt(t)] != null || n[t] != null || r && t in r;
	}
	deleteProperty(e, t) {
		let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e);
		return r && t in r ? (delete r[t], !0) : !1;
	}
	ownKeys(e) {
		let t = this._getArray(e), n = t.length > 0 ? t[this.index] : this._getSelected(e), r = /* @__PURE__ */ new Set();
		return t.forEach((e, t) => r.add(t.toString())), Object.getOwnPropertyNames(t).forEach((e) => r.add(e)), n && Object.getOwnPropertyNames(n).forEach((e) => r.add(e)), Array.from(r);
	}
	defineProperty(e, t, n) {
		let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
		return i ? (Object.defineProperty(i, t, n), !0) : !1;
	}
	apply(e, t, n) {
		return n[0] ||= this.selector, this.selector = e?.apply?.(t, n) || this.selector, new Proxy(e, this);
	}
}, vi = (e, t = document.documentElement, n = 0, r = "children") => {
	if ((e?.element ?? e) instanceof HTMLElement) {
		let t = e?.element ?? e;
		return hi.getOrInsert(t, new Proxy(t, new _i("", n, r)));
	}
	if (typeof e == "function") {
		let t = e;
		return hi.getOrInsert(t, new Proxy(t, new _i("", n, r)));
	}
	return t == null || typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || t === void 0 ? null : mi?.get?.(t)?.has?.(e) ? mi?.get?.(t)?.get?.(e) : mi?.getOrInsert?.(t, /* @__PURE__ */ new Map())?.getOrInsertComputed?.(e, () => new Proxy(t, new _i(e, n, r)));
}, yi = (e) => s(e) ? [] : Array.isArray(e) ? e.map((e, t) => [t, e]) : e instanceof Map ? Array.from(e.entries()) : e instanceof Set ? Array.from(e.values()) : Array.from(Object.entries(e)), bi = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		yi(t).forEach(([e, t]) => {
			jr(r?.deref?.(), e, t);
		});
		let i = V(t, (e, t) => {
			jr(r?.deref?.(), t, e), li(r?.deref?.(), e, t, jr, n, !0);
		});
		R(t, Symbol.dispose, i), R(e, Symbol.dispose, i);
	} else console.warn("Invalid attributes object:", t);
}, xi = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		yi(t).forEach(([e, t]) => {
			jr(r?.deref?.(), "aria-" + (e?.toString?.() || e || ""), t);
		});
		let i = V(t, (e, t) => {
			jr(r?.deref?.(), "aria-" + (t?.toString?.() || t || ""), e, !0), li(r, e, t, jr, n, !0);
		});
		R(t, Symbol.dispose, i), R(e, Symbol.dispose, i);
	} else console.warn("Invalid ARIA object:", t);
	return e;
}, Si = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		yi(t).forEach(([e, t]) => {
			Or(r?.deref?.(), e, t);
		});
		let i = V(t, (e, t) => {
			Or(r?.deref?.(), t, e), li(r?.deref?.(), e, t, Or, n);
		});
		R(t, Symbol.dispose, i), R(e, Symbol.dispose, i);
	} else console.warn("Invalid dataset object:", t);
	return e;
}, Ci = (e, t) => {
	if (!t) return e;
	if (typeof t == "string") pi(e, t);
	else if (typeof t?.value == "string") V([t, "value"], (t) => {
		pi(e, t ?? "");
	});
	else if (typeof t == "object" || typeof t == "function") {
		let n = new WeakRef(t), r = new WeakRef(e);
		yi(t).forEach(([e, t]) => {
			Ar(r?.deref?.(), e, t);
		});
		let i = V(t, (e, t) => {
			Ar(r?.deref?.(), t, e), li(r?.deref?.(), e, t, Ar, n?.deref?.());
		});
		R(t, Symbol.dispose, i), R(e, Symbol.dispose, i);
	} else console.warn("Invalid styles object:", t);
	return e;
}, wi = async (e, t) => Ci(e, await t?.(e)), Ti = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e), i = (e) => {
		let n = vi("input", e?.target);
		n?.value != null && N(n?.value, t?.value) && (t.value = n?.value), n?.valueAsNumber != null && N(n?.valueAsNumber, t?.valueAsNumber) && (t.valueAsNumber = n?.valueAsNumber), n?.checked != null && N(n?.checked, t?.checked) && (t.checked = n?.checked);
	};
	yi(t).forEach(([e, t]) => {
		Dr(r?.deref?.(), e, t);
	});
	let a = V(t, (e, t) => {
		let i = r.deref();
		i && (t == "checked" ? ln(i, e) : ui(i, t, e, Dr, n?.deref?.(), !0));
	});
	return R(t, Symbol.dispose, a), R(e, Symbol.dispose, a), e.addEventListener("change", i), e;
}, Ei = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(e);
	yi(t).forEach(([t, n]) => {
		let r = e;
		n === void 0 || n == null ? r.classList.contains(n) && r.classList.remove(n) : r.classList.contains(n) || r.classList.add(n);
	});
	let r = nn(t, (e) => {
		let t = n?.deref?.();
		t && (e === void 0 || e == null ? t.classList.contains(e) && t.classList.remove(e) : t.classList.contains(e) || t.classList.add(e));
	});
	return R(t, Symbol.dispose, r), R(e, Symbol.dispose, r), e;
}, Di = (e = null, t, n = !0) => {
	let r = [], i = () => {
		r?.forEach?.(([e, t]) => e?.(...t)), r?.splice?.(0, r?.length);
	};
	return (a, o, s, c, l = null) => {
		let u = H(l) ?? H(e), d = U(a, t, o, u), f = U(s, t, o, u), p = H(d?.parentElement ?? f?.parentElement) ?? u;
		if (!p) return;
		e != p && (e = p);
		let m = un(p, f);
		([
			"add",
			"set",
			"delete"
		].indexOf(c || "") >= 0 || !c) && (d == null && f != null || c == "delete" ? r?.push?.([ea, [
			p,
			f,
			null,
			m >= 0 ? m : o
		]]) : d != null && f == null || c == "add" ? r?.push?.([Xi, [
			p,
			d,
			null,
			o
		]]) : (d != null && f != null || c == "set") && r?.push?.([$i, [
			p,
			d,
			null,
			m >= 0 ? m : o,
			f
		]])), (c && c != "get" && [
			"add",
			"set",
			"delete"
		].indexOf(c) >= 0 || !c && !n) && i?.();
	};
}, Oi = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), ki = (e, t = [], n) => {
	if (!t || !e) return e;
	n = (t?.[$r] ? t?.mapper : n) ?? n, t = (t?.[$r] ? t?.children : t) ?? t;
	let r = Array.from(t?.keys?.() || []), i = Oi(t)?.map?.((t, i) => U(t, n, r?.[i] ?? i, e));
	return ta(e, i), i?.forEach?.((t) => Xi(e, t)), e;
}, Ai = class {
	#e = document.createComment("");
	#t;
	#n;
	#r = null;
	#i = null;
	#a = {};
	#o;
	#s = null;
	#c = null;
	#l = null;
	makeUpdater(e = null) {
		e && (this.#i?.(), this.#i = null, this.#r = null, this.#r ??= Di(e, null, !1), this.#i ??= V?.([this.#t, "value"], this._onUpdate.bind(this)));
	}
	get boundParent() {
		return this.#l;
	}
	set boundParent(e) {
		e instanceof HTMLElement && H(e) && e != this.#l && (this.#l = e, this.makeUpdater(e), this.#o &&= (this.#o?.parentNode != null && this.#o?.remove?.(), null), this.element);
	}
	constructor(e, t = (e) => e, n = null) {
		this.#e = document.createComment(""), u(t) && (typeof e == "function" || typeof e == "object") && !u(e) && ([e, t] = [t, e]), !n && typeof t == "object" && t && !u(t) && (n = t), this.#s = (t == null ? null : typeof t == "function" ? t : typeof t == "object" ? t?.mapper : null) ?? ((e) => e), this.#o = null, this.#t = (u(e) ? e : t?.(e, -1)) ?? e, this.#n = document.createDocumentFragment();
		let r = {
			removeNotExistsWhenHasPrimitives: !0,
			uniquePrimitives: !0,
			preMap: !0
		}, i = (H(n) ? null : n) || {};
		this.#a = Object.assign(r, i), this.boundParent = H(this.#a?.boundParent) ?? H(n) ?? null;
	}
	$getNodeBy(e, t) {
		let n = s(u(t) ? t?.value : t) ? this.#c ??= na(t) : U(t, t == e ? null : this.#s, -1, e);
		return this.#c != null && (s(t) || u(t)) && (this.#c.textContent = "" + (t?.value ?? (s(t) ? t : ""))), n;
	}
	$getNode(e, t = !0) {
		let n = s(this.#t?.value) ? this.#c ??= na(this.#t) : U(this.#t?.value, e == this.#t?.value ? null : this.#s, -1, e);
		return this.#c != null && (s(this.#t) || u(this.#t)) && (this.#c.textContent = "" + (s(this.#t) ? this.#t : this.#t?.value ?? "")), n != null && t && (this.#o = n), n;
	}
	get [$r]() {
		return !0;
	}
	elementForPotentialParent(e) {
		return Promise.try(() => {
			let t = this.$getNode(e);
			if (!(!t || !e || t?.contains?.(e) || e == t) && e instanceof HTMLElement && H(e)) if (Array.from(e?.children).find((e) => e === t)) this.boundParent = e;
			else {
				let n = new MutationObserver((r) => {
					for (let i of r) i.type === "childList" && i.addedNodes.length > 0 && Array.from(i.addedNodes || []).find((e) => e === t) && (this.boundParent = e, n.disconnect());
				});
				n.observe(e, { childList: !0 });
			}
		})?.catch?.(console.warn.bind(console)), this.element;
	}
	get self() {
		let e = this.$getNode(this.boundParent) ?? this.#e, t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= H(t) ?? this.boundParent, queueMicrotask(() => {
			let t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= H(t) ?? this.boundParent;
		}), t ?? this.boundParent ?? e;
	}
	get element() {
		let e = this.$getNode(this.boundParent) ?? this.#e, t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= H(t) ?? this.boundParent, queueMicrotask(() => {
			let t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= H(t) ?? this.boundParent;
		}), e;
	}
	_onUpdate(e, t, n, r) {
		if (s(n) && s(e)) return;
		let i = s(n) ? this.#o : this.$getNodeBy(this.boundParent, n), a = this.$getNode(this.boundParent, !1) ?? this.#e;
		(i && !i?.parentNode || this.#o?.parentNode) && (i = this.#o ?? i);
		let o = this.#r?.(a, un(this.boundParent, i), i, r, this.boundParent);
		return a != null && a != this.#o ? this.#o = a : a == null && i != this.#o && (this.#o = i), o;
	}
}, ji = (e) => (typeof e == "object" || typeof e == "function" || typeof e == "symbol") && e != null, Mi = (e, t, n = null) => {
	let r = null;
	if (e instanceof HTMLElement) return vi(e);
	if (e == null) return document.createComment(":NULL:");
	let i = (typeof t == "function" ? t(e, -1) : e) ?? e;
	if (s(i)) return r ??= na(i);
	if (r != null && s(i) && (r.textContent = "" + i), i != null && u(i)) {
		if (s(i?.value)) return i?.value == null ? document.createComment(":NULL:") : r ??= na(i?.value);
		if (typeof i == "object" || typeof i == "function") return Fi.getOrInsertComputed(ji(e) ? e : i, () => new Ai(e, t, n));
	}
	return U(i, null, -1, n);
}, Ni = (e, t) => (t && t != e && !e?.contains?.(t) && H(t) ? e?.elementForPotentialParent?.(t) : null) ?? e?.element, Pi = (e, t) => Ni(e, t) ?? (u(e) && fn(e?.value) ? e?.value : e), Fi = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ new WeakMap(), Li = (e) => s(e) ? e : u(e) && s(e?.value) ? Ii?.get(e) : Fi?.get?.(e), Ri = /* @__PURE__ */ new WeakMap(), zi = (e, t) => {
	if (Ri?.has?.(e)) return Ri?.get?.(e);
	let n = document.createComment(":PROMISE:");
	return e?.then?.((r) => {
		let i = typeof t == "function" ? t(r) : r;
		Ri?.set?.(e, i), queueMicrotask(() => {
			try {
				if (typeof n?.replaceWith == "function") {
					if (!n?.isConnected) return;
					fn(i) && n?.replaceWith?.(i);
				} else n?.isConnected && fn(i) && n?.parentNode?.replaceChild?.(n, i);
			} catch {
				if (!n?.isConnected) return;
				n?.remove?.();
			}
		});
	}), n;
}, Bi = (e, t, n = -1, r) => t == null ? ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function" ? zi(e, (e) => Bi(e, t, n, r)) : fn(e) && !e?.element || fn(e?.element) ? e : u(e) ? (e instanceof HTMLElement ? vi : Mi)(e) : typeof e == "object" && e ? Li(e) : typeof e == "function" ? Bi(e?.(), t, n, r) : s(e) && e != null ? na(e) : document.createComment(":NULL:")) : e = Bi(t?.(e, n), null, -1, r), Vi = (e, t) => Pi(e, t) ?? fn(e), Hi = (e, t, n = -1, r) => t == null ? ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function" ? zi(e, (e) => U(e, t, n, r)) : fn(e) && !e?.element ? e : fn(e?.element) ? Pi(e, r) : u(e) ? (e instanceof HTMLElement ? vi : Mi)(e)?.element : typeof e == "object" && e ? Li(e) : typeof e == "function" ? U(e?.(), t, n, r) : s(e) && e != null ? na(e) : document.createComment(":NULL:")) : e = U(t?.(e, n), null, -1, r), Ui = (e) => (typeof e == "object" || typeof e == "function" || typeof e == "symbol") && e != null, Wi = /* @__PURE__ */ new WeakSet(), Gi = (e, t, n = -1, r) => {
	if ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function") return zi(e, (e) => Gi(e, t, n, r));
	if (Ui(e) && !fn(e)) {
		if (Fi.has(e)) {
			let i = Li(e) ?? Bi(e, t, n, r);
			return Vi(i instanceof WeakRef ? i?.deref?.() : i, r);
		}
		let i = Bi(e, t, n, r);
		return !t && i != null && i != e && Ui(e) && !fn(e) && Fi.set(e, i), Vi(i, r);
	}
	return Hi(e, t, n, r);
}, U = (e, t, n = -1, r) => {
	if (Ui(e) && Wi.has(e)) return Li(e) ?? fn(e);
	Ui(e) && Wi.add(e);
	let i = Gi(e, t, n, r);
	return Ui(e) && Wi.delete(e), i;
}, Ki = (e, t, n = -1) => {
	fn(t) && t != null && t?.parentNode != e && (Number.isInteger(n) && n >= 0 && n < e?.childNodes?.length ? e?.insertBefore?.(t, e?.childNodes?.[n]) : e?.append?.(t));
}, qi = (e, t, n = -1) => {
	if (!(!fn(t) || e == t || t?.parentNode == e)) {
		if (t = t?._onUpdate ? Ni(t, e) : t, !t?.parentNode && fn(t)) {
			Ki(e, t, n);
			return;
		}
		e?.parentNode != t?.parentNode && fn(t) && Ki(e, t, n);
	}
}, Ji = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), Yi = (e, t, n, r = -1) => {
	let i = t?.length ?? 0;
	if (Array.isArray(Me(t)) || t instanceof Map || t instanceof Set) {
		let i = Ji(t)?.map?.((t, r) => U(t, n, r, e))?.filter?.((e) => e != null), a = document.createDocumentFragment();
		i?.forEach?.((e) => qi(a, e)), qi(e, a, r);
	} else {
		let a = U(t, n, i, e);
		a != null && qi(e, a, r);
	}
}, Xi = (e, t, n, r = -1) => {
	n != null && (t = n?.(t, r)), t?.children && Array.isArray(Me(t?.children)) && (t?.[ei] || t?.[$r]) ? Yi(e, t?.children, null, r) : Yi(e, t, null, r);
}, Zi = (e, t, n = -1) => !e || t?.parentNode == e && t?.parentNode != null ? t : t?.parentNode != e && !H(t?.parentNode) && Number.isInteger(n) && n >= 0 && Array.from(e?.childNodes || [])?.length > n ? e.childNodes?.[n] : t, Qi = (e, t, n) => {
	if (t?.parentNode) if (t?.parentNode == n?.parentNode) if (e = t?.parentNode ?? e, t.nextSibling === n) e.insertBefore(n, t);
	else if (n.nextSibling === t) e.insertBefore(t, n);
	else {
		let r = t.nextSibling;
		e.replaceChild(n, t), e.insertBefore(t, r);
	}
	else t?.replaceWith?.(n);
}, $i = (e, t, n, r = -1, i) => {
	n != null && (t = n?.(t, r)), e ||= i?.parentNode;
	let a = Zi(e, U(i, n, r), r);
	if (a instanceof Text && typeof t == "string") a.textContent = t;
	else if (t != null) {
		let n = U(t);
		a?.parentNode == e && a != n && a instanceof Text && n instanceof Text ? a?.textContent != n?.textContent && (a.textContent = n?.textContent?.trim?.() ?? "") : a?.parentNode == e && a != n && a != null && a?.parentNode != null ? Qi(e, a, n) : (a?.parentNode != e || a?.parentNode == null) && Xi(e, n, null, r);
	}
}, ea = (e, t, n, r = -1) => {
	let i = U(t, n);
	if (e ||= i?.parentNode, Array.from(e?.childNodes ?? [])?.length < 1) return;
	let a = Zi(e, i, r);
	return a?.parentNode == e && a?.remove?.(), e;
}, ta = (e, t, n) => {
	let r = Array.from(Me(t) || [])?.map?.((e, t) => U(e, n, t));
	return Array.from(e.childNodes).forEach((e) => {
		r?.find?.((t) => !N?.(t, e)) || e?.remove?.();
	}), e;
}, na = (e) => s(e) && e != null ? document.createTextNode(e) : e == null ? document.createComment(":NULL:") : Ii.getOrInsertComputed(e, () => {
	let t = document.createTextNode(((u(e) ? e?.value : e) ?? "")?.trim?.() ?? "");
	return V([e, "value"], (e) => {
		t.textContent = ("" + (e?.innerText ?? e?.textContent ?? e?.value ?? e ?? ""))?.trim?.() ?? "";
	}), t;
}), ra = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), ia = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = {};
	#c = document.createComment("");
	#l = /* @__PURE__ */ new Map();
	#u = null;
	makeUpdater(e = null) {
		e && (this.#o?.(), this.#o = null, this.#a = null, this.#a ??= Di(e, this.mapper.bind(this), Array.isArray(this.#e)), this.#o ??= nn?.(this.#e, this._onUpdate.bind(this)));
	}
	get boundParent() {
		return this.#u;
	}
	set boundParent(e) {
		e instanceof HTMLElement && H(e) && e != this.#u && (this.#u = e, this.makeUpdater(e), this.element);
	}
	constructor(e, t = (e) => e, n = null) {
		o(t) && (typeof e == "function" || typeof e == "object") && !o(e) && ([e, t] = [t, e]), !n && typeof t == "object" && t && !o(t) && (n = t), this.#c = document.createComment(""), this.#r = /* @__PURE__ */ new WeakMap(), this.#i = /* @__PURE__ */ new Map(), this.#n = (t == null ? null : typeof t == "function" ? t : typeof t == "object" ? t?.mapper : null) ?? ((e) => e), this.#e = (o(e) ? e : e?.iterator ?? t?.iterator ?? e) ?? [], this.#t = document.createDocumentFragment();
		let r = {
			removeNotExistsWhenHasPrimitives: !0,
			uniquePrimitives: !0,
			preMap: !0
		}, i = (H(n) ? null : n) || {};
		this.#s = Object.assign(r, i), this.boundParent = H(this.#s?.boundParent) ?? H(n) ?? null, this.boundParent || this.#s.preMap && (ki(this.#t, this.#e, this.mapper.bind(this)), this.#t.childNodes.length === 0 && this.#t.appendChild(this.#c));
	}
	get [$r]() {
		return !0;
	}
	elementForPotentialParent(e) {
		return Promise.try(() => {
			let t = U(this.#e?.[0], this.mapper.bind(this), 0);
			if (!(!t || !e || t?.contains?.(e) || e == t) && e instanceof HTMLElement && H(e)) if (Array.from(e?.children).find((e) => e === t)) this.boundParent = e;
			else {
				let n = new MutationObserver((r) => {
					for (let i of r) i.type === "childList" && i.addedNodes.length > 0 && Array.from(i.addedNodes || []).find((e) => e === t) && (this.boundParent = e, n.disconnect());
				});
				n.observe(e, { childList: !0 });
			}
		})?.catch?.(console.warn.bind(console)), this.element;
	}
	get children() {
		return ra(this.#e);
	}
	get self() {
		let e = U(this.#e?.[0], this.mapper.bind(this), 0), t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= H(t) ?? this.boundParent, queueMicrotask(() => {
			let t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= H(t) ?? this.boundParent;
		}), t ?? this.boundParent ?? ki(this.#t, this.#e, this.mapper.bind(this));
	}
	get element() {
		let e = this.#t?.childNodes?.length > 0 ? this.#t : U(this.#e?.[0], this.mapper.bind(this), 0), t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= H(t) ?? this.boundParent, queueMicrotask(() => {
			let t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= H(t) ?? this.boundParent;
		}), e;
	}
	get mapper() {
		return (...e) => {
			if (e?.[0] == null) return null;
			if (e?.[0] instanceof Node) return e?.[0];
			if (e?.[0] instanceof Promise || typeof e?.[0]?.then == "function") return null;
			if (!((e?.[1] == null || e?.[1] < 0 || typeof e?.[1] != "number" || !E(e?.[1])) && (Array.isArray(this.#e) || this.#e instanceof Set))) {
				if (e?.[0] != null && (typeof e?.[0] == "object" || typeof e?.[0] == "function" || typeof e?.[0] == "symbol")) return this.#r.getOrInsert(e?.[0], this.#n(...e));
				if (e?.[0] != null && this.#e instanceof Set) return this.#i.getOrInsert(e?.[0], this.#n(...e));
				if (e?.[0] != null && this.#e instanceof Map) return typeof e?.[0] == "object" || typeof e?.[0] == "function" || typeof e?.[0] == "symbol" ? this.#r.getOrInsert(e?.[0], this.#n(...e)) : typeof e?.[1] == "object" || typeof e?.[1] == "function" || typeof e?.[1] == "symbol" ? this.#r.getOrInsert(e?.[1], this.#n(...e)) : this.#i.getOrInsert(e?.[1], this.#n(...e));
				if (e?.[0] != null) return this.#s?.uniquePrimitives && s(e?.[0]) ? this.#i.getOrInsert(e?.[0], this.#n(...e)) : this.#n(...e);
			}
		};
	}
	_onUpdate(e, t, n, r = "") {
		if (r == "add" || e != null && n == null) {
			if (this.#l.has(t)) return;
			let e = Mi(Lt(this.#e, t), (...e) => ((e?.[1] == null || e?.[1] < 0) && (e[1] = t ?? e?.[1]), this.mapper(...e)));
			this.#l.set(t, e), Xi(this.boundParent, e, null, t);
		}
		if (r == "delete" || e == null && n != null) {
			let e = this.#l.get(t);
			e && ea(this.boundParent, e, null, t), this.#l.delete(t);
		}
	}
	*[Symbol.iterator]() {
		let e = 0;
		if (this.#e) for (let t of this.#e) yield this.mapper(t, e++);
	}
}, aa = (e, t, n = null) => new ia(e, t, n), oa = (e, t = document.documentElement) => {
	if (e?.value == null) return vi(e, t);
	let n = vi(e?.value, t);
	return V(e, (e, t) => n?._updateSelector(e)), n;
}, sa = (e) => {
	if (typeof e == "string") {
		let t = oa(dn(e));
		return t?.element ?? t;
	} else if (e instanceof HTMLElement || e instanceof Element || e instanceof DocumentFragment || e instanceof Document || e instanceof Node) return e;
	else return null;
}, ca = (e, t = {}, n) => {
	let r = U(typeof e == "string" ? sa(e) : e, null, -1);
	return r && n && aa(n, (e) => e, r), r && t && (t.ctrls != null && ii(r, t.ctrls), t.attributes != null && bi(r, t.attributes), t.properties != null && Ti(r, t.properties), t.classList != null && Ei(r, t.classList), t.behaviors != null && ar(r, t.behaviors), t.dataset != null && Si(r, t.dataset), t.stores != null && lr(r, t.stores), t.mixins != null && ur(r, t.mixins), t.style != null && Ci(r, t.style), t.aria != null && xi(r, t.aria), "value" in t && ui(r, "value", t.value, Dr, t, !0), "placeholder" in t && ui(r, "placeholder", t.placeholder, Dr, t, !0), t.is != null && ui(r, "is", t.is, jr, t, !0), t.role != null && ui(r, "role", t.role, Dr, t), t.slot != null && ui(r, "slot", t.slot, Dr, t), t.part != null && ui(r, "part", t.part, jr, t, !0), t.name != null && ui(r, "name", t.name, jr, t, !0), t.type != null && ui(r, "type", t.type, jr, t, !0), t.icon != null && ui(r, "icon", t.icon, jr, t, !0), t.inert != null && ui(r, "inert", t.inert, jr, t, !0), t.hidden != null && ui(r, "hidden", t.visible ?? t.hidden, Er, t), t.on != null && hn(r, t.on), t.rules != null && t.rules.forEach?.((e) => wi(r, e))), vi(r);
};
//#endregion
//#region ../../projects/lur.e/src/lure/misc/Normalizer.ts
function la(e, t = 4) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i === " ") n += 1;
		else if (i === "	") n += t - n % t;
		else break;
	}
	return n;
}
function ua(e, t, n = 4) {
	let r = 0, i = 0;
	for (; i < e.length && r < t;) {
		let t = e[i];
		if (t === " ") r += 1, i++;
		else if (t === "	") r += n - r % n, i++;
		else break;
	}
	return e.slice(i);
}
function da(e) {
	return e.includes("\r\n") ? "\r\n" : e.includes("\r") ? "\r" : "\n";
}
function fa(e, t) {
	for (e = Math.abs(e), t = Math.abs(t); t;) [e, t] = [t, e % t];
	return e;
}
function pa(e, { ignoreFirstLine: t = !0, tabWidth: n = 4 } = {}) {
	let r = e.split(/\r\n|\n|\r/), i = +!!t, a = [];
	for (let e = i; e < r.length; e++) {
		let t = r[e];
		t.trim() !== "" && a.push(la(t, n));
	}
	if (a.length === 0) return {
		min: 0,
		step: 0,
		allEven: !0,
		allDiv4: !0
	};
	let o = Math.min(...a), s = a.map((e) => e - o).filter((e) => e > 0), c = 0;
	for (let e of s) c = c ? fa(c, e) : e;
	let l = a.every((e) => e % 2 == 0), u = a.every((e) => e % 4 == 0);
	return c = c === 0 ? u ? 4 : l ? 2 : 1 : c % 4 == 0 ? 4 : c % 2 == 0 ? 2 : 1, {
		min: o,
		step: c,
		allEven: l,
		allDiv4: u
	};
}
function ma(e, t, n = "floor", r = 4) {
	if (!t || t <= 1) return e;
	let i = la(e, r);
	if (i === 0) return e;
	let a;
	a = n === "nearest" ? Math.round(i / t) * t : n === "ceil" ? Math.ceil(i / t) * t : Math.floor(i / t) * t;
	let o = i - a;
	return o > 0 ? ua(e, o, r) : o < 0 ? " ".repeat(-o) + e : e;
}
function ha(e, { scope: t = "void-only" } = {}) {
	if (!e || typeof e != "string") return e;
	let n = new Set([
		"area",
		"base",
		"br",
		"col",
		"embed",
		"hr",
		"img",
		"input",
		"link",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	]), r = "", i = 0, a = e.length;
	for (; i < a;) {
		let o = e[i];
		if (o !== "<") {
			r += o, i++;
			continue;
		}
		if (e.startsWith("<!--", i)) {
			let t = e.indexOf("-->", i + 4);
			if (t === -1) {
				r += e.slice(i);
				break;
			}
			r += e.slice(i, t + 3), i = t + 3;
			continue;
		}
		if (e[i + 1] === "!" || e[i + 1] === "?") {
			let t = e.indexOf(">", i + 2);
			if (t === -1) {
				r += e.slice(i);
				break;
			}
			r += e.slice(i, t + 1), i = t + 1;
			continue;
		}
		if (e[i + 1] === "/") {
			let t = e.indexOf(">", i + 2);
			if (t === -1) {
				r += e.slice(i);
				break;
			}
			r += e.slice(i, t + 1), i = t + 1;
			continue;
		}
		let s = i + 1;
		for (; s < a && /\s/.test(e[s]);) s++;
		let c = s;
		for (; s < a && /[A-Za-z0-9:-]/.test(e[s]);) s++;
		let l = e.slice(c, s).toLowerCase(), u = s, d = null;
		for (; u < a;) {
			let t = e[u];
			if (d) t === d && (d = null), u++;
			else if (t === "\"" || t === "'") d = t, u++;
			else if (t === ">") break;
			else u++;
		}
		if (u >= a) {
			r += e.slice(i);
			break;
		}
		let f = e.slice(i, u + 1);
		if (!(t === "all" || t === "input-only" && l === "input" || t === "void-only" && n.has(l))) {
			r += f, i = u + 1;
			continue;
		}
		let p = "", m = null, h = !1;
		for (let e = 0; e < f.length; e++) {
			let t = f[e];
			if (m) {
				p += t, t === m && (m = null);
				continue;
			}
			if (t === "\"" || t === "'") {
				m = t, p += t, h = !1;
				continue;
			}
			if (t === "\n" || t === "\r" || t === "	" || t === " ") {
				h ||= (p += " ", !0);
				continue;
			}
			p += t, h = !1;
		}
		p = p.replace(/\s*(\/?)\s*>$/, "$1>"), r += p, i = u + 1;
	}
	return r;
}
function ga(e, { preserveCommentGaps: t = !0 } = {}) {
	if (!e || typeof e != "string") return e;
	if (!t) return e.replace(/>\s+</g, "><");
	let n = e;
	return n = n.replace(/-->([^\S\r\n]+)<!--/g, "--><!--").replace(/-->([^\S\r\n]+)</g, "--><").replace(/>([^\S\r\n]+)<!--/g, "><!--"), n = n.replace(/>\s+</g, "><"), n = n.replace(RegExp("", "g"), " "), n;
}
function _a(e, { normalizeIndent: t = !0, ignoreFirstLine: n = !0, tabWidth: r = 4, alignStep: i = "auto", quantize: a = "none" } = {}) {
	if (!e || typeof e != "string" || e.indexOf("<") === -1) return e;
	e = e?.trim?.();
	let o = [], s = e.replace(/<(pre|textarea|script|style)\b[\s\S]*?<\/\1>/gi, (e) => `\u0000${o.push(e) - 1}\u0000`), c = da(s), l = s.split(/\r\n|\n|\r/), u = +!!n, { min: d, step: f } = pa(s, {
		ignoreFirstLine: n,
		tabWidth: r
	});
	if (t && d > 0) for (let e = u; e < l.length; e++) {
		let t = l[e];
		t.trim() !== "" && (l[e] = ua(t, d, r));
	}
	let p = i === "auto" ? f : i;
	if (a !== "none" && p > 1) for (let e = u; e < l.length; e++) {
		let t = l[e];
		t.trim() !== "" && (l[e] = ma(t, p, a, r));
	}
	let m = l.join(c);
	return m = ha(m, { scope: "void-only" }), m = ga(m), m.replace(/\u0000(\d+)\u0000/g, (e, t) => o[+t])?.trim?.();
}
function va(e, ...t) {
	let n = t?.[0] ?? "", r = e.indexOf(n);
	if (r < 0) {
		let e = t?.join?.("") ?? "";
		return /<([A-Za-z\/!?])[\w\W]*$/.test(e) && !/>[\w\W]*$/.test(e);
	}
	let i = e.slice(0, r + 1).join(""), a = !1, o = !1, s = !1;
	for (let e = 0; e < i.length; e++) {
		let t = i[e], n = i[e + 1] ?? "";
		if (!a) {
			t === "<" && /[A-Za-z\/!?]/.test(n) && (a = !0, o = !1, s = !1);
			continue;
		}
		if (!o && !s) {
			if (t === "\"") {
				s = !0;
				continue;
			}
			if (t === "'") {
				o = !0;
				continue;
			}
			if (t === ">") {
				a = !1;
				continue;
			}
		} else if (s) {
			if (t === "\"") {
				s = !1;
				continue;
			}
		} else if (o && t === "'") {
			o = !1;
			continue;
		}
	}
	return a;
}
//#endregion
//#region ../../projects/lur.e/src/lure/misc/Syntax.ts
var ya = /* @__PURE__ */ new WeakMap(), ba = (e) => {
	let t = e.match(/^([a-zA-Z0-9\-]+)?(?:#([a-zA-Z0-9\-_]+))?((?:\.[a-zA-Z0-9\-_]+)*)$/);
	if (!t) return {
		tag: e,
		id: null,
		className: null
	};
	let [, n = "div", r, i] = t;
	return {
		tag: n,
		id: r,
		className: i ? i.replace(/\./g, " ").trim() : null
	};
}, xa = (e) => {
	if (typeof e != "string" || !e?.trim?.()) return -1;
	let t = e.match(/^#\{(\d+)\}$/);
	if (t) return parseInt(t[1] ?? "-1", 10);
	let n = e.match(/#\{(\d+)\}/);
	return n ? parseInt(n[1] ?? "-1", 10) : -1;
}, Sa = (e, t, n, r) => {
	if (!e) return e;
	if (e != null) {
		let n = [], r = (t) => {
			let r = Array.from(e?.attributes || []).find((e) => e.name == t && e.value?.includes?.("#{"));
			if (r) {
				let e = [t, xa(r?.value) ?? -1];
				return n.push(e), e;
			}
			return [t, -1];
		};
		[
			"dataset",
			"style",
			"classList",
			"visible",
			"aria",
			"value",
			"placeholder",
			"ref"
		].forEach((e) => r(e));
		let i = (t, n) => {
			let r = [];
			for (let i of Array.from(e?.attributes || [])) {
				let e = Array.isArray(t) ? t?.some?.((e) => e == "") : t == "", a = (Array.isArray(t) ? t.find((e) => i.name?.startsWith?.(e)) : t = i.name?.startsWith?.(t) ? t : "") ?? "", o = i.name.trim()?.replace?.(a, ""), s = i.value?.includes?.("#{") && i.value?.includes?.("}"), c = xa(i?.value), l = Array.isArray(n) ? n?.some?.((e) => o?.startsWith?.(e)) : n == o;
				s && (a == "" && e || a != "") && c >= 0 && !l && r.push([o, c]);
			}
			return r;
		}, a = (t, n, r = "") => {
			let i = /* @__PURE__ */ new Map();
			for (let a of Array.from(e?.attributes || [])) {
				let e = Array.isArray(t) ? t?.some?.((e) => e == "") : t == "", o = (Array.isArray(t) ? t.find((e) => a.name?.startsWith?.(e)) : t = a.name?.startsWith?.(t) ? t : "") ?? "", s = a.name.trim()?.replace?.(o, ""), c = a.value?.includes?.("#{") && a.value?.includes?.("}"), l = xa(a?.value) ?? -1, u = Array.isArray(n) ? n?.some?.((e) => s?.startsWith?.(e)) : n == s, d = (Array.isArray(r) ? r?.some?.((e) => a.name === e) : a.name === r) && r !== "";
				if (c && (o == "" && e || o != "" || d) && l >= 0 && !u) {
					let e = d ? a.name : s;
					i.has(e) || i.set(e, []), i.get(e)?.push(l);
				}
			}
			return Array.from(i.entries());
		}, o = i(["attr:", ""], [
			"ref",
			"value",
			"placeholder"
		]), s = i(["prop:"], []), c = a(["on:", "@"], [], ""), l = a(["ref:"], [], ["ref"]), u = Object.fromEntries(n?.filter?.((e) => e[1] >= 0)?.map?.((e) => [e[0], t?.[e[1]] ?? null]) ?? []);
		u.attributes = Object.fromEntries(o?.filter?.((e) => e[1] >= 0)?.map?.((e) => [e[0], t?.[e[1]] ?? null]) ?? []), u.properties = Object.fromEntries(s?.filter?.((e) => e[1] >= 0)?.map?.((e) => [e[0], t?.[e[1]] ?? null]) ?? []), u.on = Object.fromEntries(c?.filter?.((e) => e[1]?.some?.((e) => e >= 0))?.map?.((e) => [e[0], e[1]?.map?.((e) => t?.[e]).filter((e) => e != null)]) ?? []);
		let d = n?.find?.((e) => e[0] == "ref" && e[1] >= 0)?.[1];
		if (d != null && d >= 0) {
			let n = t?.[d];
			typeof n == "function" ? n?.(e) : typeof n == "object" && n && (n.value = e);
		}
		l?.forEach?.((n) => {
			(n?.[1]?.filter?.((e) => e != null && e >= 0)?.map?.((e) => t?.[e])?.filter?.((e) => e != null))?.forEach?.((t) => {
				typeof t == "function" ? t?.(e) : typeof t == "object" && t && (t.value = e);
			});
		}), ((e) => {
			if (e == null) return;
			let t = (e) => o?.some?.((t) => t[0] == e) || n?.some?.((t) => t[0] == e) || e?.startsWith?.("ref:") || e == "ref";
			for (let n of Array.from(e?.attributes || [])) (n.value?.includes?.("#{") && n.value?.includes?.("}") && t(n.name) || n.value?.startsWith?.("#{") && n.value?.endsWith?.("}") || n.name?.includes?.(":") || n.name?.includes?.("ref:") || n.name == "ref") && e?.removeAttribute?.(n.name);
			for (let t of Array.from(e?.attributes || [])) typeof t.value == "string" && /#\{\d+\}/.test(t.value) && e?.removeAttribute?.(t.name);
		})(e), fi(e), ya?.has?.(e) || ya?.set?.(e, ca(e, u));
	}
	return ya?.get?.(e) ?? e;
}, Ca = (e, ...t) => {
	let n = [];
	for (let r = 0; r < e?.length; r++) {
		let i = e?.[r], a = t?.[r];
		n.push(W(i)), n.push(a);
	}
	if (n?.length <= 1) return U(n?.[0], null, 0);
	let r = document.createDocumentFragment();
	return r.append(...n?.filter?.((e) => e != null)?.map?.((e, t) => U(e, null, t))?.filter?.((e) => e != null)), r;
};
function wa(e, ...t) {
	return e?.at?.(0)?.trim?.()?.startsWith?.("<") && e?.at?.(-1)?.trim?.()?.endsWith?.(">") ? Da({ createElement: null })(e, ...t) : Ca(e, ...t);
}
var Ta = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement && e != document.body), Ea = (e, t, n) => {
	n != null && (n.boundParent = e);
	let r = U(n, null, -1, e);
	fn(r) ? r?.parentNode != e && !r?.contains?.(e) && r != null && t?.replaceWith?.(u(r) && (typeof r?.value == "object" || typeof r?.value == "function") && fn(r?.value) ? r?.value : r) : t?.remove?.();
};
function Da({ createElement: e = null } = {}) {
	return function(e, ...t) {
		let n = [], r = [], i = [];
		for (let a = 0; a < e.length; a++) if (n.push(e?.[a] || ""), a < t.length) if (e[a]?.trim()?.endsWith?.("<")) {
			let e = ba(t?.[a]);
			n.push(e.tag || "div"), e.id && n.push(` id="${e.id}"`), e.className && n.push(` class="${e.className}"`);
		} else {
			let o = va(e, e?.[a] || "", e?.[a + 1] || ""), c = /[\w:\-\.\]]\s*=\s*$/.test(e[a]?.trim?.() ?? "") || e[a]?.trim?.()?.endsWith?.("="), l = e[a]?.trim?.()?.match?.(/['"]$/), u = e[a + 1]?.trim?.()?.match?.(/^['"]/) ?? l, d = l && u, f = c;
			if ((f || d) && o) {
				let e = f && !d, r = i.length;
				n.push((typeof t?.[a] == "string" ? t?.[a]?.trim?.() != "" : t?.[a] != null) ? e ? `"#{${r}}"` : `#{${r}}` : ""), i.push(t?.[a]);
			} else if (!o) {
				let e = r.length;
				n.push((typeof t?.[a] == "string" ? t?.[a]?.trim?.() != "" : t?.[a] != null) ? s(t?.[a]) ? String(t?.[a])?.trim?.() : `<!--o:${e}-->` : ""), r.push(t?.[a]);
			}
		}
		let a = _a(n.join("").trim()), o = /* @__PURE__ */ new WeakMap(), c = new DOMParser().parseFromString(a, "text/html"), l = (c instanceof HTMLTemplateElement || c?.matches?.("template") ? c : c.querySelector("template"))?.content ?? c.body ?? c, u = document.createDocumentFragment(), d = Array.from(l.childNodes)?.filter((e) => e instanceof Node).map((e) => (!Ta(e?.parentNode) && e?.parentNode != u && (e?.remove?.(), e != null && u?.append?.(e)), e)), f = [];
		return d.forEach((e) => {
			let t = e ? document.createTreeWalker(e, NodeFilter.SHOW_ALL, null) : null;
			do {
				let e = t?.currentNode;
				f.push(e);
			} while (t?.nextNode?.());
		}), f?.filter?.((e) => e?.nodeType == Node.COMMENT_NODE)?.forEach?.((e) => {
			if (e?.nodeValue?.trim?.()?.includes?.("o:") && Number.isInteger(parseInt(e?.nodeValue?.trim?.()?.slice?.(2) ?? "-1"))) {
				let t = r?.[parseInt(e?.nodeValue?.trim?.()?.slice?.(2) ?? "-1") ?? -1];
				if (t == null || t === void 0 || (typeof t == "string" ? t : null)?.trim?.() == "") e?.remove?.();
				else {
					let n = e?.parentNode;
					Array.isArray(t) || t instanceof Map || t instanceof Set ? Ea?.(n, e, t = aa(t, null, n)) : t != null && Ea?.(n, e, t);
				}
			}
			e?.isConnected && e?.remove?.();
		}), f?.filter((e) => e.nodeType == Node.ELEMENT_NODE)?.map?.((e) => {
			Sa(e, i, r, o);
		}), Array.from(u?.childNodes)?.length > 1 ? u : u?.childNodes?.[0];
	};
}
var W = (e, ...t) => {
	if (typeof e == "string") {
		if (e?.trim?.()?.startsWith?.("<") && e?.trim?.()?.endsWith?.(">")) {
			let t = new DOMParser().parseFromString(_a(e?.trim?.()), "text/html"), n = t.querySelector("template")?.content ?? t.body;
			if (n instanceof HTMLBodyElement) {
				let e = document.createDocumentFragment();
				return e.append(...Array.from(n.childNodes ?? [])), Array.from(e.childNodes)?.length > 1 ? e : e?.childNodes?.[0];
			}
			if (n instanceof DocumentFragment) return n;
			if (n?.childNodes?.length > 1) {
				let e = document.createDocumentFragment();
				return e.append(...Array.from(n?.childNodes ?? [])), e;
			}
			return n?.childNodes?.[0] ?? new Text(e);
		}
		return new Text(e);
	} else if (typeof e == "function") return W(e?.());
	else if (Array.isArray(e) && t) return wa(e, ...t);
	else if (e instanceof Node) return e;
	return U(e);
}, Oa = typeof document < "u" ? document?.createElement?.("style") : null;
Oa && typeof document < "u" && document.querySelector?.("head")?.appendChild?.(Oa), Oa && (Oa.innerHTML = "@layer ux-preload {\n        :host { display: none; }\n    }");
//#endregion
//#region ../../projects/lur.e/src/interactive/controllers/LazyEvents.ts
var ka = /* @__PURE__ */ new WeakMap(), Aa = (e, t) => `${e}|c:${t?.capture ? "1" : "0"}|p:${t?.passive ? "1" : "0"}`, ja = (e, t, n, r = {}) => {
	if (!e || typeof e.addEventListener != "function") return () => {};
	let i = {
		capture: !!r.capture,
		passive: !!r.passive
	}, a = Aa(t, i), o = ka.get(e);
	o || (o = /* @__PURE__ */ new Map(), ka.set(e, o));
	let s = o.get(a);
	if (!s) {
		let n = /* @__PURE__ */ new Set(), r = (e) => {
			for (let t of Array.from(n)) try {
				t(e);
			} catch (e) {
				console.warn(e);
			}
		};
		o.set(a, s = {
			handlers: n,
			listener: r,
			options: i
		}), e.addEventListener(t, r, i);
	}
	return s.handlers.add(n), () => {
		let r = ka.get(e), i = r?.get(a);
		i && (i.handlers.delete(n), !(i.handlers.size > 0) && (e.removeEventListener(t, i.listener, i.options), r?.delete(a), r && r.size === 0 && ka.delete(e)));
	};
}, Ma = /* @__PURE__ */ new WeakMap(), Na = (e) => {
	let t = e?.element ?? e;
	return t instanceof HTMLElement ? t : null;
}, Pa = (e, t, n) => e ? e === "handled" ? n : t : !1;
typeof document < "u" && document?.documentElement, typeof document < "u" && document?.documentElement && ((e, t, n = {
	capture: !0,
	passive: !1
}, r = {}) => {
	let i = e;
	if (!i || typeof i.addEventListener != "function") return (e, t) => () => {};
	let a = {
		capture: !!n.capture,
		passive: !!n.passive
	}, o = r.strategy ?? "closest", s = `${t}|c:${a.capture ? "1" : "0"}|p:${a.passive ? "1" : "0"}|s:${o}|pd:${String(r.preventDefault ?? "")}|sp:${String(r.stopPropagation ?? "")}|sip:${String(r.stopImmediatePropagation ?? "")}`, c = Ma.get(i);
	c || (c = /* @__PURE__ */ new Map(), Ma.set(i, c));
	let l = c.get(s);
	if (!l) {
		let e = /* @__PURE__ */ new Map();
		l = {
			targets: e,
			unbindGlobal: null,
			options: a,
			strategy: o,
			config: r,
			dispatch: (t) => {
				let n = !1, i = !1, a = (e) => {
					if (!(!e || e.size === 0)) {
						n = !0;
						for (let n of Array.from(e)) n(t) && (i = !0);
					}
				}, s = t?.composedPath?.();
				if (Array.isArray(s)) if (o === "closest") for (let t of s) {
					let n = Na(t);
					if (!n) continue;
					let r = e.get(n);
					if (r) {
						a(r);
						break;
					}
				}
				else for (let t of s) {
					let n = Na(t);
					n && a(e.get(n));
				}
				else {
					let n = Na(t?.target);
					for (; n;) {
						let t = e.get(n);
						if (t && (a(t), o === "closest")) break;
						let r = n.getRootNode?.();
						n = n.parentElement || (r instanceof ShadowRoot ? r.host : null);
					}
				}
				Pa(r.preventDefault, n, i) && t?.preventDefault?.(), Pa(r.stopImmediatePropagation, n, i) && t?.stopImmediatePropagation?.(), Pa(r.stopPropagation, n, i) && t?.stopPropagation?.();
			}
		}, c.set(s, l);
	}
	return (e, n) => {
		let r = Na(e);
		if (!r) return () => {};
		l.targets.size === 0 && !l.unbindGlobal && (l.unbindGlobal = ja(i, t, l.dispatch, l.options));
		let a = l.targets.get(r);
		return a || (a = /* @__PURE__ */ new Set(), l.targets.set(r, a)), a.add(n), () => {
			let t = Ma.get(i), r = t?.get(s);
			if (!r) return;
			let a = Na(e);
			if (!a) return;
			let o = r.targets.get(a);
			o && (o.delete(n), o.size === 0 && r.targets.delete(a), r.targets.size === 0 && (r.unbindGlobal?.(), r.unbindGlobal = null, t?.delete(s), t && t.size === 0 && Ma.delete(i)));
		};
	};
})(document.documentElement, "contextmenu", {
	capture: !0,
	passive: !1
}, {
	strategy: "closest",
	preventDefault: "handled",
	stopImmediatePropagation: "handled"
}), Promise.resolve();
//#endregion
//#region ../../../node_modules/jsox/lib/jsox.mjs
var Fa = JSON, G = {};
G.JSOX = G, G.version = "1.2.125";
var Ia = typeof BigInt == "function", La = -1, K = 0, Ra = 1, za = 2, Ba = 3, Va = 4, Ha = 5, Ua = 6, Wa = 7, Ga = 8, Ka = 9, qa = 10, Ja = 12, Ya = 13, Xa = [
	"ab",
	"u8",
	"cu8",
	"s8",
	"u16",
	"s16",
	"u32",
	"s32",
	"u64",
	"s64",
	"f32",
	"f64"
], Za = null, Qa = null, $a = [
	ArrayBuffer,
	Uint8Array,
	Uint8ClampedArray,
	Int8Array,
	Uint16Array,
	Int16Array,
	Uint32Array,
	Int32Array,
	null,
	null,
	Float32Array,
	Float64Array
], q = 0, eo = 1, to = 2, no = 3, ro = 5, io = 6, ao = 7, oo = 8, so = 9, co = 10, lo = 11, uo = 12, fo = 13, po = 14, mo = 15, ho = 16, go = 17, _o = 18, vo = 19, yo = 20, bo = 21, xo = 22, So = 23, Co = 24, wo = 25, To = 26, Eo = 27, Do = 28, Oo = 29, ko = 30, J = 31, Ao = 32, Y = 0, jo = 1, Mo = 2, No = 3, Po = 4, Fo = 5, Io = 6, Lo = {
	true: !0,
	false: !1,
	null: null,
	NaN: NaN,
	Infinity: Infinity,
	undefined: void 0
}, Ro = class extends Date {
	constructor(e, t) {
		super(e), this.ns = t || 0;
	}
};
G.DateNS = Ro;
var zo = [];
function Bo() {
	let e = zo.pop();
	return e ||= {
		context: Y,
		current_proto: null,
		current_class: null,
		current_class_field: 0,
		arrayType: -1,
		valueType: K,
		elements: null
	}, e;
}
function Vo(e) {
	zo.push(e);
}
G.updateContext = function() {};
var Ho = [];
function Uo() {
	let e = Ho.pop();
	return e ? e.n = 0 : e = {
		buf: null,
		n: 0
	}, e;
}
function Wo(e) {
	Ho.push(e);
}
G.escape = function(e) {
	let t, n = "";
	if (!e) return e;
	for (t = 0; t < e.length; t++) (e[t] == "\"" || e[t] == "\\" || e[t] == "`" || e[t] == "'") && (n += "\\"), n += e[t];
	return n;
};
var X = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new Map(), Ko = /* @__PURE__ */ new Map(), qo = [];
G.reset = function() {
	X = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new Map(), Ko = /* @__PURE__ */ new Map(), qo = [];
}, G.begin = function(e, t) {
	let n = {
		name: null,
		value_type: K,
		string: "",
		contains: null,
		className: null
	}, r = {
		line: 1,
		col: 1
	}, i = 0, a, o = /* @__PURE__ */ new Map(), s = q, c = !0, l = !1, u = !1, d = null, f = null, p, m = {
		first: null,
		last: null,
		saved: null,
		push(e) {
			let t = this.saved;
			t ? (this.saved = t.next, t.node = e, t.next = null, t.prior = this.last) : t = {
				node: e,
				next: null,
				prior: this.last
			}, this.last ? this.last.next = t : this.first = t, this.last = t, this.length++;
		},
		pop() {
			let e = this.last;
			return (this.last = e.prior) || (this.first = null), e.next = this.saved, this.last && (this.last.next = null), e.next || (e.first = null), this.saved = e, this.length--, e.node;
		},
		length: 0
	}, h = [], g = {}, _ = null, v = null, y = 0, b = -1, x = Y, S = 0, ee = !1, C = !1, w = !1, te = !1, T = !1, E = {
		first: null,
		last: null,
		saved: null,
		push(e) {
			let t = this.saved;
			t ? (this.saved = t.next, t.node = e, t.next = null, t.prior = this.last) : t = {
				node: e,
				next: null,
				prior: this.last
			}, this.last ? this.last.next = t : this.first = t, this.last = t;
		},
		shift() {
			let e = this.first;
			return e ? ((this.first = e.next) || (this.last = null), e.next = this.saved, this.saved = e, e.node) : null;
		},
		unshift(e) {
			let t = this.saved;
			this.saved = t.next, t.node = e, t.next = this.first, t.prior = null, this.first || (this.last = t), this.first = t;
		}
	}, ne = null, re = !1, D = !1, O = !1, ie = !1, ae = !1, oe = !1, se = !1, k = 0, A = 0, ce = !1, le = !1, ue = !1;
	function de(e) {
		throw Error(`${e} at ${i} [${r.line}:${r.col}]`);
	}
	return {
		fromJSOX(e, t, n) {
			if (o.get(e)) throw Error("Existing fromJSOX has been registered for prototype");
			function r() {}
			if (t ||= r, t && !("constructor" in t)) throw Error("Please pass a prototype like thing...");
			o.set(e, {
				protoCon: t.prototype.constructor,
				cb: n
			});
		},
		registerFromJSOX(e, t) {
			throw Error("registerFromJSOX is deprecated, please update to use fromJSOX instead:" + e + t.toString());
		},
		finalError() {
			S !== 0 && (S === 1 && de("Comment began at end of document"), S === 3 && de("Open comment '/*' is missing close at end of document"), S === 4 && de("Incomplete '/* *' close at end of document")), re && de("Incomplete string");
		},
		value() {
			this.finalError();
			let e = d;
			return d = void 0, e;
		},
		reset() {
			s = q, c = !0, E.last && (E.last.next = E.save), E.save = E.first, E.first = E.last = null, m.last && (m.last.next = m.save), m.length = 0, m.save = E.first, m.first = m.last = null, p = void 0, x = Y, h = [], g = {}, _ = null, v = null, y = 0, n.value_type = K, n.name = null, n.string = "", n.className = null, r.line = 1, r.col = 1, u = !1, S = 0, ce = !1, re = !1, O = !1, ie = !1, le = !1;
		},
		usePrototype(e, t) {
			g[e] = t;
		},
		write(n) {
			let r;
			if (typeof n != "string" && n !== void 0 && (n = String(n)), !c) throw Error("Parser is still in an error state, please reset before resuming");
			for (r = this._write(n, !1); r > 0 && (typeof t == "function" && (function e(n, r) {
				let i, a, o = n[r];
				if (o && typeof o == "object") for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (a = e(o, i), a === void 0 ? delete o[i] : o[i] = a);
				return t.call(n, r, o);
			})({ "": d }, ""), d = e(d), !(r < 2)); r = this._write());
		},
		parse(e, t) {
			typeof e != "string" && (e = String(e)), this.reset();
			let n = this._write(e, !0);
			if (n > 0) {
				let e = this.value();
				if (e === void 0 && n > 1) throw Error("Pending value could not complete");
				return e = typeof t == "function" ? function e(n, r) {
					let i, a, o = n[r];
					if (o && typeof o == "object") for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (a = e(o, i), a === void 0 ? delete o[i] : o[i] = a);
					return t.call(n, r, o);
				}({ "": e }, "") : e, e;
			}
			this.finalError();
		},
		_write(e, t) {
			let g, de, j, fe = 0;
			function M(e, t) {
				throw Error(`${e} '${String.fromCodePoint(t)}' unexpected at ${i} (near '${j.substr(i > 4 ? i - 4 : 0, i > 4 ? 3 : i - 1)}[${String.fromCodePoint(t)}]${j.substr(i, 10)}') [${r.line}:${r.col}]`);
			}
			function pe() {
				n.value_type = K, n.string = "", n.contains = null;
			}
			function me() {
				let e = null;
				switch (n.value_type) {
					case Ha:
						if ((n.string.length > 13 || n.string.length == 13 && n[0] > "2") && !le && !T && !te && !C && (ue = !0), ue) {
							if (Ia) return BigInt(n.string);
							throw Error("no builtin BigInt()", 0);
						}
						if (le) {
							let e = n.string.match(/\.(\d\d\d\d*)/), t = e ? e[1] : null;
							if (!t || t.length < 4) {
								let e = new Date(n.string);
								return isNaN(e.getTime()) && M("Bad Date format", g), e;
							} else {
								let e = t.substr(3);
								for (; e.length < 6;) e += "0";
								let r = new Ro(n.string, Number(e));
								return isNaN(r.getTime()) && M("Bad DateNS format" + r + r.getTime(), g), r;
							}
						}
						return (u ? -1 : 1) * Number(n.string);
					case Va:
						if (n.className) {
							if (e = o.get(n.className), e ||= Ko.get(n.className), e && e.cb) return n.className = null, e.cb.call(n.string);
							throw Error("Double string error, no constructor for: new " + n.className + "(" + n.string + ")");
						}
						return n.string;
					case za: return !0;
					case Ba: return !1;
					case Wa: return NaN;
					case Ga: return NaN;
					case Ka: return -Infinity;
					case qa: return Infinity;
					case Ra: return null;
					case La: return;
					case Ja: return;
					case Ua: return n.className && (e = o.get(n.className), e ||= Ko.get(n.className), n.className = null, e && e.cb) ? n.contains = e.cb.call(n.contains) : n.contains;
					case Ya:
						if (b >= 0) {
							let e;
							if (e = n.contains.length ? es(n.contains[0]) : es(n.string), b === 0) return b = -1, e;
							{
								let t = new $a[b](e);
								return b = -1, t;
							}
						} else if (b === -2) {
							let e = f, t, r = n.contains.length;
							for (t = 0; t < r; t++) {
								let i = n.contains[t], a = e[i];
								if (!a) {
									let i = m.first, o = 0;
									for (; i && o < r && o < m.length;) {
										let r = n.contains[o];
										if (!i.next || r !== i.next.node.name) break;
										if (i.next) if (typeof r == "number") {
											let t = i.next.node.elements;
											if (t && r >= t.length) if (o === m.length - 1) {
												console.log("This is actually at the current object so use that", o, n.contains, p), a = p, o++, i = i.next;
												break;
											} else {
												if (i.next.next && r === t.length) {
													a = i.next.next.node.elements, i = i.next, o++, e = a;
													continue;
												}
												a = p, o++;
												break;
											}
										} else if (r !== i.next.node.name) {
											a = i.next.node.elements[r], t = o;
											break;
										} else a = i.next.next ? i.next.next.node.elements : p;
										else a = a[r];
										i = i.next, o++;
									}
									t = o < r ? o - 1 : o;
								}
								if (typeof a == "object" && !a) throw Error("Path did not resolve properly:" + n.contains + " at " + i + "(" + t + ")");
								e = a;
							}
							return b = -3, e;
						}
						return n.className && (e = o.get(n.className), e ||= Ko.get(n.className), n.className = null, e && e.cb) ? e.cb.call(n.contains) : n.contains;
					default:
						console.log("Unhandled value conversion.", n);
						break;
				}
			}
			function N() {
				if (b == -3) {
					n.value_type === Ua && p.push(n.contains), b = -1;
					return;
				}
				switch (n.value_type) {
					case Ja:
						p.push(void 0), delete p[p.length - 1];
						break;
					default:
						p.push(me());
						break;
				}
				pe();
			}
			function he() {
				if (b === -3 && n.value_type === Ya) {
					pe(), b = -1;
					return;
				}
				if (n.value_type === Ja) return;
				!n.name && v && (n.name = v.fields[y++]);
				let e = me();
				_ && _.protoDef && _.protoDef.cb ? (e = _.protoDef.cb.call(p, n.name, e), e && (p[n.name] = e)) : p[n.name] = e, pe();
			}
			function P(e) {
				if (s !== q) {
					switch (u && M("Negative outside of quotes, being converted to a string (would lose count of leading '-' characters)", e), s) {
						case J:
							switch (n.value_type) {
								case za:
									n.string += "true";
									break;
								case Ba:
									n.string += "false";
									break;
								case Ra:
									n.string += "null";
									break;
								case qa:
									n.string += "Infinity";
									break;
								case Ka:
									n.string += "-Infinity", M("Negative outside of quotes, being converted to a string", e);
									break;
								case Ga:
									n.string += "NaN";
									break;
								case Wa:
									n.string += "-NaN", M("Negative outside of quotes, being converted to a string", e);
									break;
								case La:
									n.string += "undefined";
									break;
								case Va: break;
								case K: break;
								default: console.log("Value of type " + n.value_type + " is not restored...");
							}
							break;
						case eo:
							n.string += "t";
							break;
						case to:
							n.string += "tr";
							break;
						case no:
							n.string += "tru";
							break;
						case ro:
							n.string += "f";
							break;
						case io:
							n.string += "fa";
							break;
						case ao:
							n.string += "fal";
							break;
						case oo:
							n.string += "fals";
							break;
						case so:
							n.string += "n";
							break;
						case co:
							n.string += "nu";
							break;
						case lo:
							n.string += "nul";
							break;
						case uo:
							n.string += "u";
							break;
						case fo:
							n.string += "un";
							break;
						case po:
							n.string += "und";
							break;
						case mo:
							n.string += "unde";
							break;
						case ho:
							n.string += "undef";
							break;
						case go:
							n.string += "undefi";
							break;
						case _o:
							n.string += "undefin";
							break;
						case vo:
							n.string += "undefine";
							break;
						case yo:
							n.string += "N";
							break;
						case bo:
							n.string += "Na";
							break;
						case xo:
							n.string += "I";
							break;
						case So:
							n.string += "In";
							break;
						case Co:
							n.string += "Inf";
							break;
						case wo:
							n.string += "Infi";
							break;
						case To:
							n.string += "Infin";
							break;
						case Eo:
							n.string += "Infini";
							break;
						case Do:
							n.string += "Infinit";
							break;
						case q: break;
						case Oo: break;
						case ko: break;
						case Ao:
							M("String-keyword recovery fail (after whitespace)", e);
							break;
						default:
					}
					n.value_type = Va, s < Oo && (s = J);
				} else s = J, n.value_type = Va;
				if (e == 123) ve();
				else if (e == 91) ye();
				else if (e != 44) {
					if (e == 32 || e == 13 || e == 10 || e == 9 || e == 65279 || e == 8232 || e == 8233) return;
					e == 44 || e == 125 || e == 93 || e == 58 || (n.string += a);
				}
			}
			function ge(e) {
				let t = 0;
				for (; t == 0 && i < j.length;) {
					a = j.charAt(i);
					let o = j.codePointAt(i++);
					if (o >= 65536 && (a += j.charAt(i), i++), r.col++, o == e) O ? (se ? M("Incomplete hexidecimal sequence", o) : oe ? M("Incomplete long unicode sequence", o) : ae && M("Incomplete unicode sequence", o), ie ? (ie = !1, t = 1) : n.string += a, O = !1) : t = 1;
					else if (O) {
						if (ae) {
							if (o == 125) {
								n.string += String.fromCodePoint(k), ae = !1, oe = !1, O = !1;
								continue;
							}
							if (k *= 16, o >= 48 && o <= 57) k += o - 48;
							else if (o >= 65 && o <= 70) k += o - 65 + 10;
							else if (o >= 97 && o <= 102) k += o - 97 + 10;
							else {
								M("(escaped character, parsing hex of \\u)", o), t = -1, ae = !1, O = !1;
								continue;
							}
							continue;
						} else if (se || oe) {
							if (A === 0 && o === 123) {
								ae = !0;
								continue;
							}
							if (A < 2 || oe && A < 4) {
								if (k *= 16, o >= 48 && o <= 57) k += o - 48;
								else if (o >= 65 && o <= 70) k += o - 65 + 10;
								else if (o >= 97 && o <= 102) k += o - 97 + 10;
								else {
									M(oe ? "(escaped character, parsing hex of \\u)" : "(escaped character, parsing hex of \\x)", o), t = -1, se = !1, O = !1;
									continue;
								}
								A++, oe ? A == 4 && (n.string += String.fromCodePoint(k), oe = !1, O = !1) : A == 2 && (n.string += String.fromCodePoint(k), se = !1, O = !1);
								continue;
							}
						}
						switch (o) {
							case 13:
								ie = !0, r.col = 1;
								continue;
							case 8232:
							case 8233: r.col = 1;
							case 10:
								ie ? ie = !1 : r.col = 1, r.line++;
								break;
							case 116:
								n.string += "	";
								break;
							case 98:
								n.string += "\b";
								break;
							case 110:
								n.string += "\n";
								break;
							case 114:
								n.string += "\r";
								break;
							case 102:
								n.string += "\f";
								break;
							case 118:
								n.string += "\v";
								break;
							case 48:
								n.string += "\0";
								break;
							case 120:
								se = !0, A = 0, k = 0;
								continue;
							case 117:
								oe = !0, A = 0, k = 0;
								continue;
							default:
								n.string += a;
								break;
						}
						O = !1;
					} else o === 92 ? O ? (n.string += "\\", O = !1) : (O = !0, k = 0, A = 0) : (ie && (ie = !1, r.line++, r.col = 2), n.string += a);
				}
				return t;
			}
			function _e() {
				let e;
				for (; (e = i) < j.length;) {
					a = j.charAt(e);
					let o = j.codePointAt(i++);
					if (o >= 256) {
						r.col -= i - e, i = e;
						break;
					} else {
						if (o == 95) continue;
						if (r.col++, o >= 48 && o <= 57) w && (T = !0), n.string += a;
						else if (o == 45 || o == 43) n.string.length == 0 || w && !te && !T ? (o == 45 && !w && (u = !u), n.string += a, te = !0) : (u &&= (n.string = "-" + n.string, !1), n.string += a, le = !0);
						else if (o == 78) {
							if (s == q) {
								D = !1, s = yo;
								return;
							}
							M("fault while parsing number;", o);
							break;
						} else if (o == 73) {
							if (s == q) {
								D = !1, s = xo;
								return;
							}
							M("fault while parsing number;", o);
							break;
						} else if (o == 58 && le) u &&= (n.string = "-" + n.string, !1), n.string += a, le = !0;
						else if (o == 84 && le) u &&= (n.string = "-" + n.string, !1), n.string += a, le = !0;
						else if (o == 90 && le) u &&= (n.string = "-" + n.string, !1), n.string += a, le = !0;
						else if (o == 46) if (!C && !ee && !w) n.string += a, C = !0;
						else {
							c = !1, M("fault while parsing number;", o);
							break;
						}
						else if (o == 110) {
							ue = !0;
							break;
						} else if (ee && (o >= 95 && o <= 102 || o >= 65 && o <= 70)) n.string += a;
						else if (o == 120 || o == 98 || o == 111 || o == 88 || o == 66 || o == 79) if (!ee && n.string == "0") ee = !0, n.string += a;
						else {
							c = !1, M("fault while parsing number;", o);
							break;
						}
						else if (o == 101 || o == 69) if (!w) n.string += a, w = !0;
						else {
							c = !1, M("fault while parsing number;", o);
							break;
						}
						else if (o == 32 || o == 13 || o == 10 || o == 9 || o == 47 || o == 35 || o == 44 || o == 125 || o == 93 || o == 123 || o == 91 || o == 34 || o == 39 || o == 96 || o == 58) {
							r.col -= i - e, i = e;
							break;
						} else {
							t && (c = !1, M("fault while parsing number;", o));
							break;
						}
					}
				}
				!t && i == j.length ? D = !0 : (D = !1, n.value_type = Ha, x == Y && (ce = !0));
			}
			function ve() {
				let e = Mo, t = null, r = {};
				s > q && s < Oo && P(123);
				let i;
				if (i = be(), x == Y) if (s == Oo || s == J && (i || n.string.length)) {
					if (i && i.protoDef && i.protoDef.protoCon && (r = new i.protoDef.protoCon()), !i || !i.protoDef && n.string) {
						if (t = h.find((e) => e.name === n.string), t) l ? (t.fields.length = 0, e = Po) : (r = new t.protoCon(), e = Fo);
						else {
							function r() {}
							h.push(t = {
								name: n.string,
								protoCon: i && i.protoDef && i.protoDef.protoCon || r.constructor,
								fields: []
							}), e = Po;
						}
						l = !1;
					}
					v = t, s = q;
				} else s = Oo;
				else if (s == Oo || x === jo || x === No || x == Fo) if (s != q || n.value_type == Va) {
					if (i && i.protoDef) r = new i.protoDef.protoCon();
					else if (t = h.find((e) => e.name === n.string), t) e = Fo, r = {};
					else {
						function e() {}
						o.set(n.string, {
							protoCon: e.prototype.constructor,
							cb: null
						}), r = new e();
					}
					s = q;
				} else s = q;
				else if (x == Mo && s == q) return M("fault while parsing; getting field name unexpected ", g), c = !1, !1;
				let a = Bo();
				return n.value_type = Ua, x === Y ? p = r : x == jo ? n.name = p.length : (x == No || x == Fo) && (!n.name && v && (n.name = v.fields[y++]), p[n.name] = r), a.context = x, a.elements = p, a.name = n.name, a.current_proto = _, a.current_class = v, a.current_class_field = y, a.valueType = n.value_type, a.arrayType = b, a.className = n.className, n.className = null, n.name = null, _ = i, v = t, y = 0, p = r, f ||= p, m.push(a), pe(), x = e, !0;
			}
			function ye() {
				if (s > q && s < Oo && P(91), s == J && n.string.length) {
					let e = Xa.findIndex((e) => e === n.string);
					s = q, e >= 0 ? (b = e, n.className = n.string, n.string = null) : n.string === "ref" ? (n.className = null, b = -2) : o.get(n.string) || Ko.get(n.string) ? n.className = n.string : M(`Unknown type '${n.string}' specified for array`, g);
				} else if (x == Mo || s == Oo || s == ko) return M("Fault while parsing; while getting field name unexpected", g), c = !1, !1;
				{
					let e = Bo();
					n.value_type = Ya;
					let t = [];
					if (x == Y) p = t;
					else if (x == jo) b == -1 && p.push(t), n.name = p.length;
					else if (x == No) if (n.name || (console.log("This says it's resolved......."), b = -3), _ && _.protoDef) if (_.protoDef.cb) {
						let e = _.protoDef.cb.call(p, n.name, t);
						e !== void 0 && (t = p[n.name] = e);
					} else p[n.name] = t;
					else p[n.name] = t;
					e.context = x, e.elements = p, e.name = n.name, e.current_proto = _, e.current_class = v, e.current_class_field = y, e.valueType = n.value_type, e.arrayType = b == -1 ? -3 : b, e.className = n.className, b = -1, n.className = null, n.name = null, _ = null, v = null, y = 0, p = t, f ||= t, m.push(e), pe(), x = jo;
				}
				return !0;
			}
			function be() {
				let e = {
					protoDef: null,
					cls: null
				};
				return ((e.protoDef = o.get(n.string)) || (e.protoDef = Ko.get(n.string))) && (n.className || (n.className = n.string, n.string = null)), n.string && (e.cls = h.find((e) => e.name === n.string), !e.protoDef && e.cls), e.protoDef || e.cls ? e : null;
			}
			if (!c) return -1;
			for (e && e.length ? (de = Uo(), de.buf = e, E.push(de)) : (D && (D = !1, n.value_type = Ha, x == Y && (ce = !0), fe = 1), x !== Y && M("Unclosed object at end of stream.", g)); c && (de = E.shift());) {
				if (i = de.n, j = de.buf, re) {
					let e = ge(ne);
					e < 0 ? c = !1 : e > 0 && (re = !1, c && (n.value_type = Va));
				}
				for (D && _e(); !ce && c && i < j.length;) {
					if (a = j.charAt(i), g = j.codePointAt(i++), g >= 65536 && (a += j.charAt(i), i++), r.col++, S) {
						if (S == 1) if (g == 42) S = 3;
						else if (g != 47) return M("fault while parsing;", g);
						else S = 2;
						else S == 2 ? (g == 10 || g == 13) && (S = 0) : S == 3 ? g == 42 && (S = 4) : S = g == 47 ? 0 : 3;
						continue;
					}
					switch (g) {
						case 35:
							S = 2;
							break;
						case 47:
							S = 1;
							break;
						case 123:
							ve();
							break;
						case 91:
							ye();
							break;
						case 58:
							if (x == Fo) s = q, n.name = n.string, n.string = "", n.value_type = K;
							else if (x == Mo || x == Po) if (x == Po) {
								if (!Object.keys(p).length) {
									console.log("This is a full object, not a class def...", n.className);
									let e = () => {};
									o.set(m.last.node.current_class.name, {
										protoCon: e.prototype.constructor,
										cb: null
									}), p = new e(), x = No, n.name = n.string, s = q, n.string = "", n.value_type = K, console.log("don't do default;s do a revive...");
								}
							} else s != q && s != J && s != Oo && s != ko && P(32), s = q, n.name = n.string, n.string = "", x = x === Mo ? No : Io, n.value_type = K;
							else if (x == Y) {
								console.log("Override colon found, allow class redefinition", x), l = !0;
								break;
							} else M(x == jo ? "(in array, got colon out of string):parsing fault;" : x == No ? "String unexpected" : "(outside any object, got colon out of string):parsing fault;", g), c = !1;
							break;
						case 125:
							if (s == J && (s = q), x == Po) if (v) {
								n.string && v.fields.push(n.string), pe();
								let e = m.pop();
								x = Y, s = q, n.name = e.name, p = e.elements, v = e.current_class, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, n.className = e.className, f = null, Vo(e);
							} else M("State error; gathering class fields, and lost the class", g);
							else if (x == Mo || x == Fo) {
								n.value_type != K && (v && (n.name = v.fields[y++]), he()), n.value_type = Ua, _ && _.protoDef && (console.log("SOMETHING SHOULD AHVE BEEN REPLACED HERE??", _), console.log("The other version only revives on init"), p = new _.protoDef.cb(p, void 0, void 0)), n.contains = p, n.string = "";
								let e = m.pop();
								x = e.context, n.name = e.name, p = e.elements, v = e.current_class, _ = e.current_proto, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, n.className = e.className, Vo(e), x == Y && (ce = !0);
							} else if (x == No) {
								n.value_type === K && (s == q ? M("Fault while parsing; unexpected", g) : P(g)), he(), n.value_type = Ua, n.contains = p, s = q;
								let e = m.pop();
								x = e.context, n.name = e.name, p = e.elements, _ = e.current_proto, v = e.current_class, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, n.className = e.className, Vo(e), x == Y && (ce = !0);
							} else M("Fault while parsing; unexpected", g), c = !1;
							u = !1;
							break;
						case 93:
							if (s >= ko && (s = q), x == jo) {
								n.value_type == K ? s !== q && (P(g), N()) : N(), n.contains = p;
								{
									let e = m.pop();
									n.name = e.name, n.className = e.className, x = e.context, p = e.elements, _ = e.current_proto, v = e.current_class, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, Vo(e);
								}
								n.value_type = Ya, x == Y && (ce = !0);
							} else M(`bad context ${x}; fault while parsing`, g), c = !1;
							u = !1;
							break;
						case 44:
							s < ko && s != q && P(g), (s == J || s == Oo) && (s = q), x == Po ? v ? (v.fields.push(n.string), n.string = "", s = Oo) : M("State error; gathering class fields, and lost the class", g) : x == Mo ? v ? (n.name = v.fields[y++], n.value_type != K && (he(), pe())) : (n.string || n.value_type) && M("State error; comma in field name and/or lost the class", g) : x == Fo ? (v ? (b != -3 && !n.name && (n.name = v.fields[y++]), n.value_type != K && (b != -3 && he(), pe())) : n.value_type != K && (he(), pe()), n.name = null) : x == jo ? (n.value_type == K && (n.value_type = Ja), N(), pe(), s = q) : x == No && n.value_type != K ? (x = Mo, n.value_type != K && (he(), pe()), s = q) : (c = !1, M("bad context; excessive commas while parsing;", g)), u = !1;
							break;
						default:
							switch (g) {
								default:
									if (x == Y || x == No && s == Oo || x == Mo || s == Oo || x == Po) switch (g) {
										case 96:
										case 34:
										case 39:
											s == q || s == Oo ? (n.string.length && (console.log("IN ARRAY AND FIXING?"), n.className = n.string, n.string = ""), ge(g) ? n.value_type = Va : (ne = g, re = !0)) : M("fault while parsing; quote not at start of field name", g);
											break;
										case 10: r.line++, r.col = 1;
										case 13:
										case 32:
										case 8232:
										case 8233:
										case 9:
										case 65279:
											if (x === Y && s === J) {
												s = q, x === Y && (ce = !0);
												break;
											}
											if (s === q || s === ko) {
												x == Y && n.value_type && (ce = !0);
												break;
											} else if (s === Oo) {
												if (x === Y) {
													s = q, ce = !0;
													break;
												}
												n.string.length && console.log("STEP TO NEXT TOKEN."), s = ko;
											} else c = !1, M("fault while parsing; whitepsace unexpected", g);
											break;
										default:
											if (s == q && (g >= 48 && g <= 57 || g == 43 || g == 46 || g == 45)) {
												ee = !1, w = !1, le = !1, ue = !1, te = !1, T = !1, C = !1, n.string = a, de.n = i, _e();
												break;
											}
											if (s === ko && (c = !1, M("fault while parsing; character unexpected", g)), s === q) {
												s = Oo, n.value_type = Va, n.string += a;
												break;
											}
											if (n.value_type == K) s !== q && s !== J && P(g);
											else {
												if (s === J || s === Oo) {
													n.string += a;
													break;
												}
												if (x == Mo) {
													if (s == Oo) {
														n.string += a;
														break;
													}
													M("Multiple values found in field name", g);
												}
												x == No && M("String unexpected", g);
											}
											break;
									}
									else {
										if (s == q && (g >= 48 && g <= 57 || g == 43 || g == 46 || g == 45)) ee = !1, w = !1, le = !1, ue = !1, te = !1, T = !1, C = !1, n.string = a, de.n = i, _e();
										else if (n.value_type == K) s == q ? (s = J, n.string += a, n.value_type = Va) : P(g);
										else if (x == Mo) M("Multiple values found in field name", g);
										else if (x == No) n.value_type != Va && ((n.value_type == Ua || n.value_type == Ya) && M("String unexpected", g), P(g)), s == ko ? be() ? n.string = a : M("String unexpected", g) : s == J ? n.string += a : M("String unexpected", g);
										else if (x == jo) if (s == ko) {
											n.className || (n.className = n.string, n.string = ""), n.string += a;
											break;
										} else s == J && (n.string += a);
										break;
									}
									break;
								case 96:
								case 34:
								case 39:
									n.string && (n.className = n.string), n.string = "", ge(g) ? (n.value_type = Va, s = J) : (ne = g, re = !0);
									break;
								case 10: r.line++, r.col = 1;
								case 32:
								case 9:
								case 13:
								case 8232:
								case 8233:
								case 65279:
									if (s == J) {
										if (x == Y) {
											s = q, ce = !0;
											break;
										} else if (x == No) {
											s = Ao;
											break;
										} else if (x == Mo) {
											s = ko;
											break;
										} else if (x == jo) {
											s = ko;
											break;
										}
									}
									if (s == q || s == ko) break;
									s == Oo ? n.string.length && (s = ko) : s < J && P(g);
									break;
								case 116:
									s == q ? s = eo : s == Eo ? s = Do : P(g);
									break;
								case 114:
									s == eo ? s = to : P(g);
									break;
								case 117:
									s == to ? s = no : s == so ? s = co : s == q ? s = uo : P(g);
									break;
								case 101:
									s == no ? (n.value_type = za, s = J) : s == oo ? (n.value_type = Ba, s = J) : s == po ? s = mo : s == _o ? s = vo : P(g);
									break;
								case 110:
									s == q ? s = so : s == uo ? s = fo : s == go ? s = _o : s == xo ? s = So : s == wo ? s = To : P(g);
									break;
								case 100:
									s == fo ? s = po : s == vo ? (n.value_type = La, s = J) : P(g);
									break;
								case 105:
									s == ho ? s = go : s == Co ? s = wo : s == To ? s = Eo : P(g);
									break;
								case 108:
									s == co ? s = lo : s == lo ? (n.value_type = Ra, s = J) : s == io ? s = ao : P(g);
									break;
								case 102:
									s == q ? s = ro : s == mo ? s = ho : s == So ? s = Co : P(g);
									break;
								case 97:
									s == ro ? s = io : s == yo ? s = bo : P(g);
									break;
								case 115:
									s == ao ? s = oo : P(g);
									break;
								case 73:
									s == q ? s = xo : P(g);
									break;
								case 78:
									s == q ? s = yo : s == bo ? (n.value_type = u ? Wa : Ga, u = !1, s = J) : P(g);
									break;
								case 121:
									s == Do ? (n.value_type = u ? Ka : qa, u = !1, s = J) : P(g);
									break;
								case 45:
									s == q ? u = !u : P(g);
									break;
								case 43:
									s !== q && P(g);
									break;
							}
							break;
					}
					if (ce) {
						s == J && (s = q);
						break;
					}
				}
				if (i == j.length ? (Wo(de), n.value_type == K && t && s != q && P(32), re || D || x == Mo ? fe = 0 : x == Y && (n.value_type != K || d) && (ce = !0, fe = 1)) : (de.n = i, E.unshift(de), fe = 2), ce) {
					f = null;
					break;
				}
			}
			return c ? (ce && n.value_type != K && (s = q, d = me(), u = !1, n.string = "", n.value_type = K), ce = !1, fe) : -1;
		}
	};
};
var Jo = [Object.freeze(G.begin())], Yo = 0;
G.parse = function(e, t) {
	let n = Yo++, r;
	Jo.length <= n && Jo.push(Object.freeze(G.begin())), r = Jo[n], typeof e != "string" && (e = String(e)), r.reset();
	let i = r._write(e, !0);
	if (i > 0) {
		let e = r.value();
		if (e === void 0 && i > 1) throw Error("Pending value could not complete");
		return e = typeof t == "function" ? function e(n, r) {
			let i, a, o = n[r];
			if (o && typeof o == "object") for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (a = e(o, i), a === void 0 ? delete o[i] : o[i] = a);
			return t.call(n, r, o);
		}({ "": e }, "") : e, Yo--, e;
	}
	r.finalError();
};
function Xo() {
	return this && this.valueOf();
}
G.defineClass = function(e, t) {
	let n, r = Object.keys(t);
	for (let e = 1; e < r.length; e++) {
		let t, n;
		(t = r[e - 1]) > (n = r[e]) && (r[e - 1] = n, r[e] = t, e ? e -= 2 : e--);
	}
	qo.push(n = {
		name: e,
		tag: r.toString(),
		proto: Object.getPrototypeOf(t),
		fields: Object.keys(t)
	});
	for (let e = 1; e < n.fields.length; e++) if (n.fields[e] < n.fields[e - 1]) {
		let t = n.fields[e - 1];
		n.fields[e - 1] = n.fields[e], n.fields[e] = t, e > 1 && (e -= 2);
	}
	n.proto === Object.getPrototypeOf({}) && (n.proto = null);
}, G.registerToJSOX = function(e, t, n) {
	throw Error("registerToJSOX deprecated; please use toJSOX:" + prototypeName + prototype.toString());
}, G.toJSOX = function(e, t, n) {
	if (!t.prototype || t.prototype !== Object.prototype) {
		if (X.get(t.prototype)) throw Error("Existing toJSOX has been registered for prototype");
		X.set(t.prototype, {
			external: !0,
			name: e || n.constructor.name,
			cb: n
		});
	} else {
		let r = Object.keys(t).toString();
		if (Go.get(r)) throw Error("Existing toJSOX has been registered for object type");
		Go.set(r, {
			external: !0,
			name: e,
			cb: n
		});
	}
}, G.fromJSOX = function(e, t, n) {
	function r() {}
	if (t ||= r.prototype, Ko.get(e)) throw Error("Existing fromJSOX has been registered for prototype");
	if (t && !("constructor" in t)) throw Error("Please pass a prototype like thing...");
	Ko.set(e, {
		protoCon: t.prototype.constructor,
		cb: n
	});
}, G.registerFromJSOX = function(e, t) {
	throw Error("deprecated; please adjust code to use fromJSOX:" + e + t.toString());
}, G.addType = function(e, t, n, r) {
	G.toJSOX(e, t, n), G.fromJSOX(e, t, r);
}, G.registerToFrom = function(e, t) {
	throw Error("registerToFrom deprecated; please use addType:" + e + t.toString());
}, G.stringifier = function() {
	let e = [], t = "\"", n = /* @__PURE__ */ new WeakMap(), r = [], i = [], a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new Map(), s = null, c = [], l = !1;
	function u(e) {
		return typeof e == "string" && e === "" ? "\"\"" : typeof e == "number" && !isNaN(e) ? [
			"'",
			e.toString(),
			"'"
		].join("") : e.includes("﻿") || e in Lo || /[0-9\-]/.test(e[0]) || /[\n\r\t #\[\]{}()<>\~!+*/.:,\-"'`]/.test(e) ? t + G.escape(e) + t : e;
	}
	X.get(Object.prototype) || (X.set(Object.prototype, {
		external: !1,
		name: Object.prototype.constructor.name,
		cb: null
	}), X.set(Date.prototype, {
		external: !1,
		name: "Date",
		cb: function() {
			if (this.getTime() === -621672192e5) return "0000-01-01T00:00:00.000Z";
			let e = -this.getTimezoneOffset(), t = e >= 0 ? "+" : "-", n = function(e) {
				let t = Math.floor(Math.abs(e));
				return (t < 10 ? "0" : "") + t;
			};
			return [
				this.getFullYear(),
				"-",
				n(this.getMonth() + 1),
				"-",
				n(this.getDate()),
				"T",
				n(this.getHours()),
				":",
				n(this.getMinutes()),
				":",
				n(this.getSeconds()),
				"." + function(e) {
					let t = Math.floor(Math.abs(e));
					return (t < 100 ? "0" : "") + (t < 10 ? "0" : "") + t;
				}(this.getMilliseconds()) + t,
				n(e / 60),
				":",
				n(e % 60)
			].join("");
		}
	}), X.set(Ro.prototype, {
		external: !1,
		name: "DateNS",
		cb: function() {
			let e = -this.getTimezoneOffset(), t = e >= 0 ? "+" : "-", n = function(e) {
				let t = Math.floor(Math.abs(e));
				return (t < 10 ? "0" : "") + t;
			};
			return [
				this.getFullYear(),
				"-",
				n(this.getMonth() + 1),
				"-",
				n(this.getDate()),
				"T",
				n(this.getHours()),
				":",
				n(this.getMinutes()),
				":",
				n(this.getSeconds()),
				"." + function(e) {
					let t = Math.floor(Math.abs(e));
					return (t < 100 ? "0" : "") + (t < 10 ? "0" : "") + t;
				}(this.getMilliseconds()) + function(e) {
					let t = Math.floor(Math.abs(e));
					return (t < 1e5 ? "0" : "") + (t < 1e4 ? "0" : "") + (t < 1e3 ? "0" : "") + (t < 100 ? "0" : "") + (t < 10 ? "0" : "") + t;
				}(this.ns) + t,
				n(e / 60),
				":",
				n(e % 60)
			].join("");
		}
	}), X.set(Boolean.prototype, {
		external: !1,
		name: "Boolean",
		cb: Xo
	}), X.set(Number.prototype, {
		external: !1,
		name: "Number",
		cb: function() {
			return isNaN(this) ? "NaN" : isFinite(this) ? String(this) : this < 0 ? "-Infinity" : "Infinity";
		}
	}), X.set(String.prototype, {
		external: !1,
		name: "String",
		cb: function() {
			return "\"" + G.escape(Xo.apply(this)) + "\"";
		}
	}), typeof BigInt == "function" && X.set(BigInt.prototype, {
		external: !1,
		name: "BigInt",
		cb: function() {
			return this + "n";
		}
	}), X.set(ArrayBuffer.prototype, {
		external: !0,
		name: "ab",
		cb: function() {
			return "[" + u($o(this)) + "]";
		}
	}), X.set(Uint8Array.prototype, {
		external: !0,
		name: "u8",
		cb: function() {
			return "[" + u($o(this.buffer)) + "]";
		}
	}), X.set(Uint8ClampedArray.prototype, {
		external: !0,
		name: "uc8",
		cb: function() {
			return "[" + u($o(this.buffer)) + "]";
		}
	}), X.set(Int8Array.prototype, {
		external: !0,
		name: "s8",
		cb: function() {
			return "[" + u($o(this.buffer)) + "]";
		}
	}), X.set(Uint16Array.prototype, {
		external: !0,
		name: "u16",
		cb: function() {
			return "[" + u($o(this.buffer)) + "]";
		}
	}), X.set(Int16Array.prototype, {
		external: !0,
		name: "s16",
		cb: function() {
			return "[" + u($o(this.buffer)) + "]";
		}
	}), X.set(Uint32Array.prototype, {
		external: !0,
		name: "u32",
		cb: function() {
			return "[" + u($o(this.buffer)) + "]";
		}
	}), X.set(Int32Array.prototype, {
		external: !0,
		name: "s32",
		cb: function() {
			return "[" + u($o(this.buffer)) + "]";
		}
	}), X.set(Float32Array.prototype, {
		external: !0,
		name: "f32",
		cb: function() {
			return "[" + u($o(this.buffer)) + "]";
		}
	}), X.set(Float64Array.prototype, {
		external: !0,
		name: "f64",
		cb: function() {
			return "[" + u($o(this.buffer)) + "]";
		}
	}), X.set(Float64Array.prototype, {
		external: !0,
		name: "f64",
		cb: function() {
			return "[" + u($o(this.buffer)) + "]";
		}
	}), X.set(RegExp.prototype, Qa = {
		external: !0,
		name: "regex",
		cb: function(e, t) {
			return "'" + escape(this.source) + "'";
		}
	}), Ko.set("regex", {
		protoCon: RegExp,
		cb: function(e, t) {
			return new RegExp(this);
		}
	}), X.set(Map.prototype, Qa = {
		external: !0,
		name: "map",
		cb: null
	}), Ko.set("map", {
		protoCon: Map,
		cb: function(e, t) {
			if (e) {
				this.set(e, t);
				return;
			}
			return this;
		}
	}), X.set(Array.prototype, Za = {
		external: !1,
		name: Array.prototype.constructor.name,
		cb: null
	}));
	let d = {
		defineClass(t, n) {
			let r, i = Object.keys(n);
			for (let e = 1; e < i.length; e++) {
				let t, n;
				(t = i[e - 1]) > (n = i[e]) && (i[e - 1] = n, i[e] = t, e ? e -= 2 : e--);
			}
			e.push(r = {
				name: t,
				tag: i.toString(),
				proto: Object.getPrototypeOf(n),
				fields: Object.keys(n)
			});
			for (let e = 1; e < r.fields.length; e++) if (r.fields[e] < r.fields[e - 1]) {
				let t = r.fields[e - 1];
				r.fields[e - 1] = r.fields[e], r.fields[e] = t, e > 1 && (e -= 2);
			}
			r.proto === Object.getPrototypeOf({}) && (r.proto = null);
		},
		setDefaultObjectToJSOX(e) {
			s = e;
		},
		isEncoding(e) {
			return !!i.find((t, n) => t === e && n < i.length - 1);
		},
		encodeObject(e) {
			return s ? s.apply(e, [this]) : e;
		},
		stringify(e, t, n) {
			return m(e, t, n);
		},
		setQuote(e) {
			t = e;
		},
		registerToJSOX(e, t, n) {
			return this.toJSOX(e, t, n);
		},
		toJSOX(e, t, n) {
			if (t.prototype && t.prototype !== Object.prototype) {
				if (a.get(t.prototype)) throw Error("Existing toJSOX has been registered for prototype");
				a.set(t.prototype, {
					external: !0,
					name: e || n.constructor.name,
					cb: n
				});
			} else {
				let r = Object.keys(t).toString();
				if (o.get(r)) throw Error("Existing toJSOX has been registered for object type");
				o.set(r, {
					external: !0,
					name: e,
					cb: n
				});
			}
		},
		get ignoreNonEnumerable() {
			return l;
		},
		set ignoreNonEnumerable(e) {
			l = e;
		}
	};
	return d;
	function f(e) {
		if (e === null) return;
		let t = n.get(e);
		if (!t) {
			n.set(e, Fa.stringify(r));
			return;
		}
		return "ref" + t;
	}
	function p(t, n) {
		let r, i, a = Object.getPrototypeOf(t);
		if (i = e.find((e) => {
			if (e.proto && e.proto === a) return !0;
		}), i) return i;
		if (e.length || qo.length) {
			if (n) n = n.map((e) => {
				if (typeof e == "string") return e;
			}), r = n.toString();
			else {
				let e = Object.keys(t);
				for (let t = 1; t < e.length; t++) {
					let n, r;
					(n = e[t - 1]) > (r = e[t]) && (e[t - 1] = r, e[t] = n, t ? t -= 2 : t--);
				}
				r = e.toString();
			}
			i = e.find((e) => {
				if (e.tag === r) return !0;
			}), i ||= qo.find((e) => {
				if (e.tag === r) return !0;
			});
		}
		return i;
	}
	function m(t, m, h) {
		if (t === void 0) return "undefined";
		if (t === null) return;
		let g, _, v, y, b = typeof h, x = typeof m;
		if (g = "", _ = "", b === "number") for (y = 0; y < h; y += 1) _ += " ";
		else b === "string" && (_ = h);
		if (v = m, m && x !== "function" && (x !== "object" || typeof m.length != "number")) throw Error("JSOX.stringify");
		r.length = 0, n = /* @__PURE__ */ new WeakMap();
		let S = ee("", { "": t });
		return qo.length = 0, S;
		function ee(t, n) {
			var m = g;
			let h = Za.cb, y = Qa.cb;
			Za.cb = x, Qa.cb = S;
			let b = C(t, n);
			return Za.cb = h, Qa.cb = y, b;
			function x() {
				let e, t = [], n = r.length;
				for (let e = 0; e < this.length; e += 1) r[n] = e, t[e] = ee(e, this) || "null";
				return r.length = n, i.length = n, e = t.length === 0 ? "[]" : g ? [
					"[\n",
					g,
					t.join(",\n" + g),
					"\n",
					m,
					"]"
				].join("") : "[" + t.join(",") + "]", e;
			}
			function S() {
				let e = { tmp: null }, t = "{", n = !0;
				for (let [i, a] of this) {
					e.tmp = a;
					let o = r.length;
					r[o] = i, t += (n ? "" : ",") + u(i) + ":" + ee("tmp", e), r.length = o, n = !1;
				}
				return t += "}", t;
			}
			function C(t, n) {
				let h, y, b, x, S, C, w = r.length, te = !0, T = n[t], E = typeof T == "object", ne;
				E && T !== null && s && (c.find((e) => e === T) || (c.push(T), i[w] = T, te = !1, T = s.apply(T, [d]), E = typeof T == "object", c.pop(), i.length = w, E = typeof T == "object"));
				let re = T != null && Object.getPrototypeOf(T), D = re && (a.get(re) || X.get(re) || null), O = !D && T != null && (o.get(Object.keys(T).toString()) || Go.get(Object.keys(T).toString()) || null);
				typeof v == "function" && (te = !1, T = v.call(n, t, T));
				let ie = D && D.cb || O && O.cb;
				if (typeof T == "object" && T && typeof ie == "function") if (c.find((e) => e === T)) b = f(T);
				else {
					if (typeof T == "object" && (b = f(T), b)) return b;
					c.push(T), i[w] = T, T = ie.call(T, d), te = !1, c.pop(), D && D.name && typeof T == "string" && T[0] !== "-" && (T[0] < "0" || T[0] > "9") && T[0] !== "\"" && T[0] !== "'" && T[0] !== "`" && T[0] !== "[" && T[0] !== "{" && (T = " " + T), i.length = w;
				}
				else if (typeof T == "object" && (b = f(T), b)) return b;
				switch (typeof T) {
					case "bigint": return T + "n";
					case "string": {
						T = te ? u(T) : T;
						let n = "";
						return t === "" && (n = e.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "") + qo.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "") + (g ? "\n" : "")), D && D.external ? n + D.name + T : O && O.external ? n + O.name + T : n + T;
					}
					case "number":
					case "boolean":
					case "null": return String(T);
					case "object":
						if (b) return b;
						if (!T) return "null";
						if (g += _, S = null, C = [], v && typeof v == "object") {
							for (x = v.length, S = p(T, v), h = 0; h < x; h += 1) typeof v[h] == "string" && (y = v[h], r[w] = y, b = ee(y, T), b !== void 0 && (S ? C.push(b) : C.push(u(y) + (g ? ": " : ":") + b)));
							r.splice(w, 1);
						} else {
							S = p(T);
							let e = [];
							for (y in T) if (!(l && !Object.prototype.propertyIsEnumerable.call(T, y)) && Object.prototype.hasOwnProperty.call(T, y)) {
								let t;
								for (t = 0; t < e.length; t++) if (e[t] > y) {
									e.splice(t, 0, y);
									break;
								}
								t == e.length && e.push(y);
							}
							for (let t = 0; t < e.length; t++) y = e[t], Object.prototype.hasOwnProperty.call(T, y) && (r[w] = y, b = ee(y, T), b !== void 0 && (S ? C.push(b) : C.push(u(y) + (g ? ": " : ":") + b)));
							r.splice(w, 1);
						}
						ne = t === "" ? (e.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "") || qo.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "")) + (g ? "\n" : "") : "", D && D.external && (ne += u(D.name));
						let n = null;
						return S && (n = u(S.name)), b = ne + (C.length === 0 ? "{}" : g ? (S ? n : "") + "{\n" + g + C.join(",\n" + g) + "\n" + m + "}" : (S ? n : "") + "{" + C.join(",") + "}"), g = m, b;
				}
			}
		}
	}
};
var Zo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_", Qo = {
	"~": -1,
	"=": -1,
	$: 62,
	_: 63,
	"+": 62,
	"-": 62,
	".": 62,
	"/": 63,
	",": 63
};
for (let e = 0; e < 64; e++) Qo[Zo[e]] = e;
Object.freeze(Qo);
function $o(e) {
	let t = "", n = new Uint8Array(e), r = n.byteLength, i = r % 3, a = r - i, o, s, c, l, u;
	for (let e = 0; e < a; e += 3) u = n[e] << 16 | n[e + 1] << 8 | n[e + 2], o = (u & 16515072) >> 18, s = (u & 258048) >> 12, c = (u & 4032) >> 6, l = u & 63, t += Zo[o] + Zo[s] + Zo[c] + Zo[l];
	return i == 1 ? (u = n[a], o = (u & 252) >> 2, s = (u & 3) << 4, t += Zo[o] + Zo[s] + "==") : i == 2 && (u = n[a] << 8 | n[a + 1], o = (u & 64512) >> 10, s = (u & 1008) >> 4, c = (u & 15) << 2, t += Zo[o] + Zo[s] + Zo[c] + "="), t;
}
function es(e) {
	let t;
	t = e.length % 4 == 1 ? ((e.length + 3) / 4 | 0) * 3 - 3 : e.length % 4 == 2 ? ((e.length + 3) / 4 | 0) * 3 - 2 : e.length % 4 == 3 ? ((e.length + 3) / 4 | 0) * 3 - 1 : Qo[e[e.length - 3]] == -1 ? ((e.length + 3) / 4 | 0) * 3 - 3 : Qo[e[e.length - 2]] == -1 ? ((e.length + 3) / 4 | 0) * 3 - 2 : Qo[e[e.length - 1]] == -1 ? ((e.length + 3) / 4 | 0) * 3 - 1 : ((e.length + 3) / 4 | 0) * 3;
	let n = new ArrayBuffer(t), r = new Uint8Array(n), i, a = e.length + 3 >> 2;
	for (i = 0; i < a; i++) {
		let t = Qo[e[i * 4]], n = i * 4 + 1 < e.length ? Qo[e[i * 4 + 1]] : -1, a = n >= 0 && i * 4 + 2 < e.length ? Qo[e[i * 4 + 2]] : -1, o = a >= 0 && i * 4 + 3 < e.length ? Qo[e[i * 4 + 3]] : -1;
		n >= 0 && (r[i * 3 + 0] = t << 2 | n >> 4), a >= 0 && (r[i * 3 + 1] = n << 4 | a >> 2 & 15), o >= 0 && (r[i * 3 + 2] = a << 6 | o & 63);
	}
	return n;
}
//#endregion
//#region ../../projects/lur.e/src/interactive/modules/ScrollBar.ts
G.stringify = function(e, t, n) {
	return G.stringifier().stringify(e, t, n);
}, [[
	0,
	256,
	[
		16767487,
		16739071,
		130048,
		3670016,
		0,
		16777208,
		16777215,
		8388607
	]
]].map((e) => ({
	firstChar: e[0],
	lastChar: e[1],
	bits: e[2]
})), sn();
try {
	CSS.registerProperty({
		name: "--percent-x",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--percent-y",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--scroll-coef",
		syntax: "<number>",
		inherits: !0,
		initialValue: "1"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--determinant",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--scroll-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--content-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--clamped-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--thumb-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--max-offset",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--max-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
//#endregion
//#region ../../projects/lur.e/src/design/color/DynamicEngine.ts
var ts = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
	didTimeout: !1,
	timeRemaining: () => 0
}), 0);
function ns(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	if (t === "transparent") return 0;
	if (t.startsWith("#")) {
		let e = t;
		if (e.length === 4 || e.length === 7) return 1;
		if (e.length === 5) {
			let t = e[4], n = t + t;
			return is(parseInt(n, 16) / 255, 0, 1);
		}
		if (e.length === 9) {
			let t = e.slice(7, 9);
			return is(parseInt(t, 16) / 255, 0, 1);
		}
		return null;
	}
	let n = t.match(/^([a-z-]+)\((.*)\)$/i);
	if (!n) return null;
	n[1];
	let r = n[2].trim();
	{
		let e = r.lastIndexOf("/");
		if (e !== -1) {
			let t = rs(r.slice(e + 1).trim());
			return t == null ? null : is(t, 0, 1);
		}
	}
	if (r.includes(",")) {
		let e = r.split(",").map((e) => e.trim());
		if (e.length >= 4) {
			let t = rs(e[3]);
			return t == null ? null : is(t, 0, 1);
		}
		return 1;
	}
	return 1;
}
function rs(e) {
	if (!e) return null;
	if (e.endsWith("%")) {
		let t = parseFloat(e);
		return Number.isNaN(t) ? null : t / 100;
	}
	let t = parseFloat(e);
	return Number.isNaN(t) ? null : t;
}
function is(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
var as = (e) => !e || e == null ? 0 : (ns?.(e) || 0) > .1, os = (e, t = 1e3, ...n) => {
	ts(async () => {
		if (!(!e || typeof e != "function")) for (;;) await Promise.try(e, ...n), await new Promise((e) => setTimeout(e, t)), await new Promise((e) => ts(e, 100)), await new Promise((e) => requestAnimationFrame(e));
	}, 1e3);
}, ss = () => {
	if (typeof document > "u") return null;
	try {
		let e = document.querySelectorAll("[data-shell]");
		for (let t of e) {
			let e = t.shadowRoot;
			if (!e) continue;
			let n = e.querySelector(".app-shell__nav, .app-shell__toolbar");
			if (!n) continue;
			let r = getComputedStyle(n).backgroundColor;
			if (as(r)) return r;
		}
	} catch {}
	return null;
}, cs = () => {
	if (typeof document > "u" || !globalThis.matchMedia?.("(display-mode: window-controls-overlay)")?.matches) return null;
	let e = document.createElement("div");
	e.setAttribute("data-wco-theme-probe", "true"), e.style.cssText = [
		"position:fixed",
		"visibility:hidden",
		"pointer-events:none",
		"z-index:-2147483648",
		"left:env(titlebar-area-x,0px)",
		"top:env(titlebar-area-y,0px)",
		"width:env(titlebar-area-width,0px)",
		"height:env(titlebar-area-height,0px)"
	].join(";"), document.documentElement.appendChild(e);
	try {
		let t = e.getBoundingClientRect();
		if (t.width < 1 || t.height < 1) return null;
		let n = ls(Math.floor(t.left + Math.min(40, t.width * .2)), Math.floor(t.top + t.height * .5));
		return as(n) ? n : null;
	} finally {
		e.remove();
	}
}, ls = (e, t, n = null) => {
	let r = Array.from(document.elementsFromPoint(e, t))?.filter?.((e) => e instanceof HTMLElement && e != n && (e?.dataset?.alpha == null ? !0 : parseFloat(e?.dataset?.alpha) > .01) && e?.checkVisibility?.({
		contentVisibilityAuto: !0,
		opacityProperty: !0,
		visibilityProperty: !0
	}) && e?.matches?.(":not([data-hidden])") && e?.style?.getPropertyValue("display") != "none").map((e) => {
		let t = getComputedStyle?.(e);
		return {
			element: e,
			zIndex: parseInt(t?.zIndex || "0", 10) || 0,
			color: t?.backgroundColor || "transparent"
		};
	}).sort((e, t) => Math.sign(t.zIndex - e.zIndex)).filter(({ color: e }) => as(e));
	return r?.[0]?.element instanceof HTMLElement && r?.[0]?.color || "transparent";
}, us = (e) => {
	let t = e?.getBoundingClientRect();
	if (t) {
		let n = .5 * (bn?.() || 1);
		return ls((t.left + t.right) * n, (t.top + t.bottom) * n, e);
	}
}, ds = (e = document.documentElement) => {
	let t = e?.querySelector?.("meta[data-theme-color]") ?? e?.querySelector?.("meta[name=\"theme-color\"]");
	!t && e == document.documentElement && (t = document.createElement("meta"), t.setAttribute("name", "theme-color"), t.setAttribute("data-theme-color", ""), t.setAttribute("content", "transparent"), document.head.appendChild(t));
	let n = ss(), r = n ? null : cs(), i = Math.max(8, Math.floor(globalThis.innerWidth * .12)), a = !n && !r ? ls(i, 20) : null, o = n || r || (a && as(a) ? a : null);
	o && o !== "transparent" && (t || window?.electronBridge) && e == document.documentElement && t?.setAttribute?.("content", o);
}, fs = (e = document.documentElement) => {
	e.querySelectorAll("body, body > *, body > * > *").forEach((e) => {
		e && us(e);
	});
}, ps = (e = document.documentElement) => {
	let t = "__LURE_DYNAMIC_THEME_STARTED__";
	if (globalThis?.[t]) return;
	globalThis[t] = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({}) => fs(e));
	let n = () => {
		ds(e), fs(e);
	};
	mn(e, "u2-appear", () => ts(n, 100)), mn(e, "u2-hidden", () => ts(n, 100)), mn(e, "u2-theme-change", () => ts(n, 100)), mn(window, "load", () => ts(n, 100)), mn(document, "visibilitychange", () => ts(n, 100)), os(n, 500);
}, ms = async () => {
	ds(), fs();
};
typeof document > "u" || globalThis?.__LURE_AUTO_THEME_ENGINE__ === !0 && (requestAnimationFrame(() => ms?.()), ps?.());
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/types/Interface.ts
var Z = /* @__PURE__ */ function(e) {
	return e.GET = "get", e.SET = "set", e.CALL = "call", e.APPLY = "apply", e.CONSTRUCT = "construct", e.DELETE = "delete", e.DELETE_PROPERTY = "deleteProperty", e.HAS = "has", e.OWN_KEYS = "ownKeys", e.GET_OWN_PROPERTY_DESCRIPTOR = "getOwnPropertyDescriptor", e.GET_PROPERTY_DESCRIPTOR = "getPropertyDescriptor", e.GET_PROTOTYPE_OF = "getPrototypeOf", e.SET_PROTOTYPE_OF = "setPrototypeOf", e.IS_EXTENSIBLE = "isExtensible", e.PREVENT_EXTENSIONS = "preventExtensions", e.TRANSFER = "transfer", e.IMPORT = "import", e.DISPOSE = "dispose", e;
}({}), hs = {
	ws: "websocket",
	socket: "websocket",
	socketio: "socket-io",
	service: "service-worker",
	sw: "service-worker",
	"service-worker-client": "service-worker",
	"service-worker-host": "service-worker",
	"ring-buffer": "atomics"
};
function gs(e) {
	let t = String(e ?? "").trim().toLowerCase();
	return t ? hs[t] ?? t : "internal";
}
function _s(e) {
	return typeof e == "string" ? gs(e) : typeof Worker < "u" && e instanceof Worker ? "worker" : typeof SharedWorker < "u" && e instanceof SharedWorker ? "shared-worker" : typeof MessagePort < "u" && e instanceof MessagePort ? "message-port" : typeof BroadcastChannel < "u" && e instanceof BroadcastChannel ? "broadcast" : typeof WebSocket < "u" && e instanceof WebSocket ? "websocket" : typeof RTCDataChannel < "u" && e instanceof RTCDataChannel ? "rtc-data" : typeof chrome < "u" && e && typeof e == "object" && typeof e.postMessage == "function" && e.onMessage?.addListener ? "chrome-port" : "internal";
}
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/observable/Observable.ts
var vs = class {
	_closed = !1;
	constructor(e) {
		this._unsubscribe = e;
	}
	get closed() {
		return this._closed;
	}
	unsubscribe() {
		this._closed || (this._closed = !0, this._unsubscribe());
	}
}, ys = class {
	constructor(e) {
		this._producer = e;
	}
	subscribe(e, t) {
		let n = typeof e == "function" ? { next: e } : e ?? {}, r = new AbortController();
		t?.signal?.addEventListener("abort", () => r.abort());
		let i = !0, a, o = () => {
			i = !1, r.abort(), a?.();
		}, s = {
			next: (e) => i && n.next?.(e),
			error: (e) => {
				i && (n.error?.(e), o());
			},
			complete: () => {
				i && (n.complete?.(), o());
			},
			signal: r.signal,
			get active() {
				return i && !r.signal.aborted;
			}
		};
		try {
			a = this._producer(s);
		} catch (e) {
			s.error(e);
		}
		return new vs(o);
	}
	pipe(...e) {
		return e.reduce((e, t) => t(e), this);
	}
}, bs = class {
	_subs = /* @__PURE__ */ new Set();
	_buffer = [];
	_maxBuffer;
	_replay;
	constructor(e = {}) {
		this._maxBuffer = e.bufferSize ?? 0, this._replay = e.replayOnSubscribe ?? !1;
	}
	next(e) {
		this._maxBuffer > 0 && (this._buffer.push(e), this._buffer.length > this._maxBuffer && this._buffer.shift());
		for (let t of this._subs) try {
			t.next?.(e);
		} catch (e) {
			t.error?.(e);
		}
	}
	error(e) {
		for (let t of this._subs) t.error?.(e);
	}
	complete() {
		for (let e of this._subs) e.complete?.();
		this._subs.clear();
	}
	subscribe(e) {
		let t = typeof e == "function" ? { next: e } : e;
		if (this._subs.add(t), this._replay) for (let e of this._buffer) try {
			t.next?.(e);
		} catch (e) {
			t.error?.(e);
		}
		return new vs(() => {
			this._subs.delete(t);
		});
	}
	getValue() {
		return this._buffer.at(-1);
	}
	getBuffer() {
		return [...this._buffer];
	}
	get subscriberCount() {
		return this._subs.size;
	}
}, xs = (e) => (t) => new ys((n) => {
	let r = t.subscribe({
		next: (t) => e(t) && n.next(t),
		error: (e) => n.error(e),
		complete: () => n.complete()
	});
	return () => r.unsubscribe();
});
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/proxy/Invoker.ts
function Ss() {
	if (globalThis.Deno !== void 0) return "deno";
	if (globalThis.process !== void 0 && globalThis.process?.versions?.node) return "node";
	let e = globalThis.ServiceWorkerGlobalScope, t = globalThis.SharedWorkerGlobalScope, n = globalThis.DedicatedWorkerGlobalScope;
	if (e && self instanceof e) return "service-worker";
	if (t && self instanceof t) return "shared-worker";
	if (n && self instanceof n) return "worker";
	if (typeof chrome < "u" && chrome.runtime?.id) {
		if (typeof chrome.runtime.getBackgroundPage == "function" || chrome.runtime.getManifest?.()?.background?.service_worker) return "chrome-background";
		if (chrome.devtools !== void 0) return "chrome-devtools";
		if (typeof document < "u" && globalThis?.location?.protocol === "chrome-extension:" && (chrome.extension?.getViews?.({ type: "popup" }) ?? []).includes(globalThis)) return "chrome-popup";
		if (typeof document < "u" && globalThis?.location?.protocol !== "chrome-extension:") return "chrome-content";
	}
	return typeof globalThis < "u" && typeof document < "u" ? "window" : "unknown";
}
function Cs(e) {
	if (typeof RTCDataChannel < "u" && e instanceof RTCDataChannel) return "rtc-data";
	let t = _s(e);
	return t && t !== "internal" ? t : e === self || e === globalThis || e === "self" ? "self" : "internal";
}
function ws(e) {
	if (!e) return "unknown";
	if (e.contextType) return e.contextType;
	let t = e.sender ?? "";
	return t.includes("worker") ? "worker" : t.includes("sw") || t.includes("service") ? "service-worker" : t.includes("chrome") || t.includes("crx") ? "chrome-content" : t.includes("background") ? "chrome-background" : "unknown";
}
var Ts = {
	get: (e, t) => Reflect.get(e, t),
	set: (e, t, n) => Reflect.set(e, t, n),
	has: (e, t) => Reflect.has(e, t),
	apply: (e, t, n) => Reflect.apply(e, t, n),
	construct: (e, t) => Reflect.construct(e, t),
	deleteProperty: (e, t) => Reflect.deleteProperty(e, t),
	ownKeys: (e) => Reflect.ownKeys(e),
	getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e, t),
	getPrototypeOf: (e) => Reflect.getPrototypeOf(e),
	setPrototypeOf: (e, t) => Reflect.setPrototypeOf(e, t),
	isExtensible: (e) => Reflect.isExtensible(e),
	preventExtensions: (e) => Reflect.preventExtensions(e)
}, Es = Symbol.for("uniform.proxy"), Ds = Symbol.for("uniform.proxy.internals"), Os = class {
	_config;
	_childCache = /* @__PURE__ */ new Map();
	constructor(e, t) {
		this._invoker = e, this._config = {
			channel: t.channel,
			basePath: t.basePath ?? [],
			invoker: e,
			cache: t.cache ?? !0,
			timeout: t.timeout ?? 3e4
		};
	}
	get(e, t, n) {
		let r = String(t);
		if (t === Es) return !0;
		if (t === Ds) return this._config;
		if (t === Hs) return !0;
		if (t === Us) return this._getDescriptor();
		if (t === "then" || t === "catch" || t === "finally" || typeof t == "symbol") return;
		if (t === "$path") return this._config.basePath;
		if (t === "$channel") return this._config.channel;
		if (t === "$descriptor") return this._getDescriptor();
		if (t === "$invoke") return this._invoker;
		let i = [...this._config.basePath, r];
		if (this._config.cache && this._childCache.has(r)) return this._childCache.get(r);
		let a = ks(this._invoker, {
			...this._config,
			basePath: i
		});
		return this._config.cache && this._childCache.set(r, a), a;
	}
	set(e, t, n, r) {
		return typeof t == "symbol" || this._invoker(Z.SET, [...this._config.basePath, String(t)], [n]), !0;
	}
	apply(e, t, n) {
		return this._invoker(Z.APPLY, this._config.basePath, [n]);
	}
	construct(e, t, n) {
		return this._invoker(Z.CONSTRUCT, this._config.basePath, [t]);
	}
	has(e, t) {
		return typeof t == "symbol" ? !1 : this._invoker(Z.HAS, this._config.basePath, [t]);
	}
	deleteProperty(e, t) {
		return typeof t == "symbol" ? !0 : this._invoker(Z.DELETE_PROPERTY, [...this._config.basePath, String(t)], []);
	}
	ownKeys(e) {
		return [];
	}
	getOwnPropertyDescriptor(e, t) {
		return {
			configurable: !0,
			enumerable: !0,
			writable: !0
		};
	}
	getPrototypeOf(e) {
		return Function.prototype;
	}
	setPrototypeOf(e, t) {
		return this._invoker(Z.SET_PROTOTYPE_OF, this._config.basePath, [t]);
	}
	isExtensible(e) {
		return !0;
	}
	preventExtensions(e) {
		return this._invoker(Z.PREVENT_EXTENSIONS, this._config.basePath, []);
	}
	_getDescriptor() {
		return {
			path: this._config.basePath,
			channel: this._config.channel,
			primitive: !1
		};
	}
};
function ks(e, t) {
	let n = function() {}, r = new Os(e, t);
	return new Proxy(n, r);
}
function As(e, t, n) {
	if (!e || typeof e != "object" || e.primitive) return e;
	let r = Bs.get(e);
	if (r) return r;
	let i = ks(t, {
		channel: n ?? e.channel ?? "unknown",
		basePath: e.path ?? []
	});
	return Bs.set(e, i), zs.set(i, e), i;
}
var js = As;
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/channel/internal/ConnectionModel.ts
function Ms(e) {
	return [
		e.localChannel,
		e.remoteChannel,
		e.sender,
		e.transportType,
		e.direction
	].join("::");
}
function Ns(e, t = {}) {
	let n = t.includeClosed ?? !1, r = t.status ?? (n ? void 0 : "active");
	return [...e].filter((e) => !(r && e.status !== r || t.channel && e.localChannel !== t.channel && e.remoteChannel !== t.channel || t.localChannel && e.localChannel !== t.localChannel || t.remoteChannel && e.remoteChannel !== t.remoteChannel || t.sender && e.sender !== t.sender || t.transportType && e.transportType !== t.transportType || t.direction && e.direction !== t.direction)).sort((e, t) => t.updatedAt - e.updatedAt);
}
var Ps = class {
	_connections = /* @__PURE__ */ new Map();
	constructor(e, t) {
		this._createId = e, this._emitEvent = t;
	}
	register(e) {
		let t = Ms(e), n = Date.now(), r = this._connections.get(t);
		if (r) return r.updatedAt = n, r.status = "active", r.metadata = {
			...r.metadata,
			...e.metadata
		}, r;
		let i = {
			id: this._createId(),
			localChannel: e.localChannel,
			remoteChannel: e.remoteChannel,
			sender: e.sender,
			transportType: e.transportType,
			direction: e.direction,
			status: "active",
			createdAt: n,
			updatedAt: n,
			metadata: e.metadata
		};
		return this._connections.set(t, i), this._emitEvent?.({
			type: "connected",
			connection: i,
			timestamp: n
		}), i;
	}
	markNotified(e, t) {
		let n = Date.now();
		e.lastNotifyAt = n, e.updatedAt = n, this._emitEvent?.({
			type: "notified",
			connection: e,
			timestamp: n,
			payload: t
		});
	}
	closeByChannel(e) {
		let t = Date.now();
		for (let n of this._connections.values()) n.localChannel !== e && n.remoteChannel !== e || n.status !== "closed" && (n.status = "closed", n.updatedAt = t, this._emitEvent?.({
			type: "disconnected",
			connection: n,
			timestamp: t
		}));
	}
	closeAll() {
		let e = Date.now();
		for (let t of this._connections.values()) t.status !== "closed" && (t.status = "closed", t.updatedAt = e, this._emitEvent?.({
			type: "disconnected",
			connection: t,
			timestamp: e
		}));
	}
	query(e = {}) {
		return Ns(this._connections.values(), e);
	}
	values() {
		return [...this._connections.values()];
	}
	clear() {
		this._connections.clear();
	}
}, Fs = class {
	_name;
	_contextType;
	_config;
	_transports = /* @__PURE__ */ new Map();
	_defaultTransport = null;
	_connectionEvents = new bs({ bufferSize: 200 });
	_connectionRegistry = new Ps(() => _(), (e) => this._connectionEvents.next(e));
	_pending = /* @__PURE__ */ new Map();
	_subscriptions = [];
	_inbound = new bs({ bufferSize: 100 });
	_outbound = new bs({ bufferSize: 100 });
	_invocations = new bs({ bufferSize: 100 });
	_responses = new bs({ bufferSize: 100 });
	_exposed = /* @__PURE__ */ new Map();
	_proxyCache = /* @__PURE__ */ new WeakMap();
	__getPrivate(e) {
		return this[e];
	}
	__setPrivate(e, t) {
		this[e] = t;
	}
	constructor(e) {
		let t = typeof e == "string" ? { name: e } : e;
		this._name = t.name, this._contextType = t.autoDetect === !1 ? "unknown" : Ss(), this._config = {
			name: t.name,
			autoDetect: t.autoDetect ?? !0,
			timeout: t.timeout ?? 3e4,
			reflect: t.reflect ?? Ts,
			bufferSize: t.bufferSize ?? 100,
			autoListen: t.autoListen ?? !0
		}, this._config.autoListen && this._isWorkerContext() && this.listen(self);
	}
	connect(e, t = {}) {
		let n = Cs(e), r = t.targetChannel ?? this._inferTargetChannel(e, n), i = this._createTransportBinding(e, n, r, t);
		this._transports.set(r, i), this._defaultTransport ||= i;
		let a = this._registerConnection({
			localChannel: this._name,
			remoteChannel: r,
			sender: this._name,
			transportType: n,
			direction: "outgoing",
			metadata: { phase: "connect" }
		});
		return this._emitConnectionSignal(i, "connect", {
			connectionId: a.id,
			from: this._name,
			to: r
		}), this;
	}
	listen(e, t = {}) {
		let n = Cs(e), r = t.targetChannel ?? this._inferTargetChannel(e, n), i = (e) => this._handleIncoming(e), a = this._registerConnection({
			localChannel: this._name,
			remoteChannel: r,
			sender: r,
			transportType: n,
			direction: "incoming",
			metadata: { phase: "listen" }
		});
		switch (n) {
			case "worker":
			case "message-port":
			case "broadcast":
				t.autoStart !== !1 && e.start && e.start(), e.addEventListener?.("message", ((e) => i(e.data)));
				break;
			case "websocket":
				e.addEventListener?.("message", ((e) => {
					try {
						i(JSON.parse(e.data));
					} catch {}
				}));
				break;
			case "chrome-runtime":
				chrome.runtime.onMessage?.addListener?.((e, t, n) => (i(e), !0));
				break;
			case "chrome-tabs":
				chrome.runtime.onMessage?.addListener?.((e, n) => t.tabId != null && n?.tab?.id !== t.tabId ? !1 : (i(e), !0));
				break;
			case "chrome-port":
				e?.onMessage?.addListener?.((e) => {
					i(e);
				});
				break;
			case "chrome-external":
				chrome.runtime.onMessageExternal?.addListener?.((e) => (i(e), !0));
				break;
			case "self":
				addEventListener?.("message", ((e) => i(e.data)));
				break;
			default: t.onMessage && t.onMessage(i);
		}
		return this._sendSignalToTarget(e, n, {
			connectionId: a.id,
			from: this._name,
			to: r,
			tabId: t.tabId,
			externalId: t.externalId
		}, "notify"), this;
	}
	attach(e, t = {}) {
		return this.connect(e, t);
	}
	expose(e, t) {
		let n = [e];
		return Ys(n, t), this._exposed.set(e, {
			name: e,
			obj: t,
			path: n
		}), this;
	}
	exposeAll(e) {
		for (let [t, n] of Object.entries(e)) this.expose(t, n);
		return this;
	}
	async import(e, t) {
		return this.invoke(t ?? this._getDefaultTarget(), Z.IMPORT, [], [e]);
	}
	invoke(e, t, n, r = []) {
		let i = _(), a = Promise.withResolvers();
		this._pending.set(i, a);
		let o = setTimeout(() => {
			this._pending.has(i) && (this._pending.delete(i), a.reject(/* @__PURE__ */ Error(`Request timeout: ${t} on ${n.join(".")}`)));
		}, this._config.timeout), s = {
			id: i,
			channel: e,
			sender: this._name,
			type: "request",
			payload: {
				channel: e,
				sender: this._name,
				action: t,
				path: n,
				args: r
			},
			timestamp: Date.now()
		};
		return this._send(e, s), this._outbound.next(s), a.promise.finally(() => clearTimeout(o));
	}
	get(e, t, n) {
		return this.invoke(e, Z.GET, t, [n]);
	}
	set(e, t, n, r) {
		return this.invoke(e, Z.SET, t, [n, r]);
	}
	call(e, t, n = []) {
		return this.invoke(e, Z.APPLY, t, [n]);
	}
	construct(e, t, n = []) {
		return this.invoke(e, Z.CONSTRUCT, t, [n]);
	}
	proxy(e, t = []) {
		let n = e ?? this._getDefaultTarget();
		return this._createProxy(n, t);
	}
	remote(e, t) {
		return this.proxy(t, [e]);
	}
	wrapDescriptor(e, t) {
		return As(e, (n, r, i) => {
			let a = t ?? e?.channel ?? this._getDefaultTarget();
			return this.invoke(a, n, r, i);
		}, t ?? e?.channel ?? this._getDefaultTarget());
	}
	subscribe(e) {
		return this._inbound.subscribe(e);
	}
	next(e) {
		this._send(e.channel, e), this._outbound.next(e);
	}
	emit(e, t, n) {
		let r = {
			id: _(),
			channel: e,
			sender: this._name,
			type: "event",
			payload: {
				type: t,
				data: n
			},
			timestamp: Date.now()
		};
		this.next(r);
	}
	notify(e, t = {}, n = "notify") {
		let r = this._transports.get(e);
		return r ? (this._emitConnectionSignal(r, n, {
			from: this._name,
			to: e,
			...t
		}), !0) : !1;
	}
	get onMessage() {
		return this._inbound;
	}
	get onOutbound() {
		return this._outbound;
	}
	get onInvocation() {
		return this._invocations;
	}
	get onResponse() {
		return this._responses;
	}
	get onConnection() {
		return this._connectionEvents;
	}
	subscribeConnections(e) {
		return this._connectionEvents.subscribe(e);
	}
	queryConnections(e = {}) {
		return this._connectionRegistry.query(e);
	}
	notifyConnections(e = {}, t = {}) {
		let n = 0, r = this.queryConnections({
			...t,
			status: "active",
			includeClosed: !1
		});
		for (let t of r) {
			let r = this._transports.get(t.remoteChannel);
			r && (this._emitConnectionSignal(r, "notify", {
				connectionId: t.id,
				from: this._name,
				to: t.remoteChannel,
				...e
			}), n++);
		}
		return n;
	}
	get name() {
		return this._name;
	}
	get contextType() {
		return this._contextType;
	}
	get config() {
		return this._config;
	}
	get connectedChannels() {
		return [...this._transports.keys()];
	}
	get exposedModules() {
		return [...this._exposed.keys()];
	}
	close() {
		this._subscriptions.forEach((e) => e.unsubscribe()), this._subscriptions = [], this._pending.clear(), this._markAllConnectionsClosed();
		for (let e of this._transports.values()) {
			try {
				e.cleanup?.();
			} catch {}
			if (e.transportType === "message-port" || e.transportType === "broadcast") try {
				e.target?.close?.();
			} catch {}
		}
		this._transports.clear(), this._defaultTransport = null, this._connectionRegistry.clear(), this._inbound.complete(), this._outbound.complete(), this._invocations.complete(), this._responses.complete(), this._connectionEvents.complete();
	}
	_handleIncoming(e) {
		if (!(!e || typeof e != "object")) switch (this._inbound.next(e), e.type) {
			case "request":
				e.channel === this._name && this._handleRequest(e);
				break;
			case "response":
				this._handleResponse(e);
				break;
			case "event": break;
			case "signal":
				this._handleSignal(e);
				break;
		}
	}
	_handleResponse(e) {
		let t = e.reqId ?? e.id, n = this._pending.get(t);
		if (n) {
			if (this._pending.delete(t), e.payload?.error) n.reject(Error(e.payload.error));
			else {
				let t = e.payload?.result, r = e.payload?.descriptor;
				t == null ? r ? n.resolve(this.wrapDescriptor(r, e.sender)) : n.resolve(void 0) : n.resolve(t);
			}
			this._responses.next({
				id: t,
				channel: e.channel,
				sender: e.sender,
				result: e.payload?.result,
				descriptor: e.payload?.descriptor,
				timestamp: Date.now()
			});
		}
	}
	async _handleRequest(e) {
		let t = e.payload;
		if (!t) return;
		let { action: n, path: r, args: i, sender: a } = t, o = e.reqId ?? e.id;
		this._invocations.next({
			id: o,
			channel: this._name,
			sender: a,
			action: n,
			path: r,
			args: i ?? [],
			timestamp: Date.now(),
			contextType: ws(e)
		});
		let { result: s, toTransfer: c, newPath: l } = await this._executeAction(n, r, i ?? [], a);
		await this._sendResponse(o, n, a, l, s, c);
	}
	async _executeAction(e, t, n, r) {
		let { result: i, toTransfer: a, path: o } = tc(e, t, n, {
			channel: this._name,
			sender: r,
			reflect: this._config.reflect
		});
		return {
			result: await i,
			toTransfer: a,
			newPath: o
		};
	}
	async _sendResponse(e, t, n, r, i, a) {
		let { response: o, transfer: s } = await nc(e, t, this._name, n, r, i, a), c = {
			id: e,
			...o,
			timestamp: Date.now(),
			transferable: s
		};
		this._send(n, c, s);
	}
	_handleSignal(e) {
		let t = e?.payload ?? {}, n = t.from ?? e.sender ?? "unknown", r = e.transportType ?? this._transports.get(e.channel)?.transportType ?? "internal", i = this._registerConnection({
			localChannel: this._name,
			remoteChannel: n,
			sender: e.sender ?? n,
			transportType: r,
			direction: "incoming"
		});
		this._markConnectionNotified(i, t);
	}
	_registerConnection(e) {
		return this._connectionRegistry.register(e);
	}
	_markConnectionNotified(e, t) {
		this._connectionRegistry.markNotified(e, t);
	}
	_emitConnectionSignal(e, t, n = {}) {
		let r = {
			id: _(),
			type: "signal",
			channel: e.targetChannel,
			sender: this._name,
			transportType: e.transportType,
			payload: {
				type: t,
				from: this._name,
				to: e.targetChannel,
				...n
			},
			timestamp: Date.now()
		};
		(e?.sender ?? e?.postMessage)?.call(e, r);
		let i = this._registerConnection({
			localChannel: this._name,
			remoteChannel: e.targetChannel,
			sender: this._name,
			transportType: e.transportType,
			direction: "outgoing"
		});
		this._markConnectionNotified(i, r.payload);
	}
	_sendSignalToTarget(e, t, n, r) {
		let i = {
			id: _(),
			type: "signal",
			channel: n.to ?? this._name,
			sender: this._name,
			transportType: t,
			payload: {
				type: r,
				...n
			},
			timestamp: Date.now()
		};
		try {
			if (t === "websocket") {
				e?.send?.(JSON.stringify(i));
				return;
			}
			if (t === "chrome-runtime") {
				chrome.runtime?.sendMessage?.(i);
				return;
			}
			if (t === "chrome-tabs") {
				let e = n.tabId;
				e != null && chrome.tabs?.sendMessage?.(e, i);
				return;
			}
			if (t === "chrome-port") {
				e?.postMessage?.(i);
				return;
			}
			if (t === "chrome-external") {
				n.externalId && chrome.runtime?.sendMessage?.(n.externalId, i);
				return;
			}
			e?.postMessage?.(i, { transfer: [] });
		} catch {}
	}
	_markAllConnectionsClosed() {
		this._connectionRegistry.closeAll();
	}
	_createTransportBinding(e, t, n, r) {
		let i, a;
		switch (t) {
			case "worker":
			case "message-port":
			case "broadcast":
				r.autoStart !== !1 && e.start && e.start(), i = (t, n) => e.postMessage(t, { transfer: n });
				{
					let t = ((e) => this._handleIncoming(e.data));
					e.addEventListener?.("message", t), a = () => e.removeEventListener?.("message", t);
				}
				break;
			case "websocket":
				i = (t) => e.send(JSON.stringify(t));
				{
					let t = ((e) => {
						try {
							this._handleIncoming(JSON.parse(e.data));
						} catch {}
					});
					e.addEventListener?.("message", t), a = () => e.removeEventListener?.("message", t);
				}
				break;
			case "chrome-runtime":
				i = (e) => chrome.runtime.sendMessage(e);
				{
					let e = (e) => this._handleIncoming(e);
					chrome.runtime.onMessage?.addListener?.(e), a = () => chrome.runtime.onMessage?.removeListener?.(e);
				}
				break;
			case "chrome-tabs":
				i = (e) => {
					r.tabId != null && chrome.tabs?.sendMessage?.(r.tabId, e);
				};
				{
					let e = (e, t) => r.tabId != null && t?.tab?.id !== r.tabId ? !1 : (this._handleIncoming(e), !0);
					chrome.runtime.onMessage?.addListener?.(e), a = () => chrome.runtime.onMessage?.removeListener?.(e);
				}
				break;
			case "chrome-port":
				if (e?.postMessage && e?.onMessage?.addListener) {
					i = (t) => e.postMessage(t);
					let t = (e) => this._handleIncoming(e);
					e.onMessage.addListener(t), a = () => {
						try {
							e.onMessage.removeListener(t);
						} catch {}
						try {
							e.disconnect?.();
						} catch {}
					};
				} else {
					let e = r.portName ?? n, t = r.tabId != null && chrome.tabs?.connect ? chrome.tabs.connect(r.tabId, { name: e }) : chrome.runtime.connect({ name: e });
					i = (e) => t.postMessage(e);
					let o = (e) => this._handleIncoming(e);
					t.onMessage.addListener(o), a = () => {
						try {
							t.onMessage.removeListener(o);
						} catch {}
						try {
							t.disconnect();
						} catch {}
					};
				}
				break;
			case "chrome-external":
				i = (e) => {
					r.externalId && chrome.runtime.sendMessage(r.externalId, e);
				};
				{
					let e = (e) => (this._handleIncoming(e), !0);
					chrome.runtime.onMessageExternal?.addListener?.(e), a = () => chrome.runtime.onMessageExternal?.removeListener?.(e);
				}
				break;
			case "self":
				i = (e, t) => globalThis.postMessage?.(e, { transfer: t ?? [] });
				{
					let e = ((e) => this._handleIncoming(e.data));
					globalThis.addEventListener?.("message", e), a = () => globalThis.removeEventListener?.("message", e);
				}
				break;
			default: r.onMessage && (a = r.onMessage((e) => this._handleIncoming(e))), i = (t) => e?.postMessage?.(t);
		}
		return {
			target: e,
			targetChannel: n,
			transportType: t,
			sender: i,
			cleanup: a,
			postMessage: (e, t) => i?.(e, t),
			start: () => e?.start?.(),
			close: () => e?.close?.()
		};
	}
	_send(e, t, n) {
		let r = this._transports.get(e) ?? this._defaultTransport;
		(r?.sender ?? r?.postMessage)?.call(r, t, n);
	}
	_getDefaultTarget() {
		return this._defaultTransport ? this._defaultTransport.targetChannel : "worker";
	}
	_inferTargetChannel(e, t) {
		return t === "worker" ? "worker" : t === "broadcast" && e.name ? e.name : t === "self" ? "self" : `${t}-${_().slice(0, 8)}`;
	}
	_createProxy(e, t) {
		return ks((t, n, r) => this.invoke(e, t, n, r), {
			channel: e,
			basePath: t,
			cache: !0,
			timeout: this._config.timeout
		});
	}
	_isWorkerContext() {
		return [
			"worker",
			"shared-worker",
			"service-worker"
		].includes(this._contextType);
	}
}, Is = {
	rjb: "rejectBy",
	rvb: "resolveBy",
	rj: "reject",
	rv: "resolve",
	cr: "create",
	cs: "createSync",
	a: "array",
	ta: "typedarray",
	udf: "undefined"
};
[
	typeof ArrayBuffer == Is.udf ? null : ArrayBuffer,
	typeof MessagePort == Is.udf ? null : MessagePort,
	typeof ReadableStream == Is.udf ? null : ReadableStream,
	typeof WritableStream == Is.udf ? null : WritableStream,
	typeof TransformStream == Is.udf ? null : TransformStream,
	typeof WebTransportReceiveStream == Is.udf ? null : WebTransportReceiveStream,
	typeof WebTransportSendStream == Is.udf ? null : WebTransportSendStream,
	typeof AudioData == Is.udf ? null : AudioData,
	typeof ImageBitmap == Is.udf ? null : ImageBitmap,
	typeof VideoFrame == Is.udf ? null : VideoFrame,
	typeof OffscreenCanvas == Is.udf ? null : OffscreenCanvas,
	typeof RTCDataChannel == Is.udf ? null : RTCDataChannel
].filter((e) => e != null);
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/channel/Channels.ts
var Ls = {
	name: "unknown",
	instance: null
}, Rs = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Vs = (e, t = Ls?.name, n) => typeof e == "object" && e || typeof e == "function" && e != null ? zs.has(e) ? zs.get(e) : Rs.has(e) ? Rs.get(e) : k(e) || n?.includes?.(e) || t == Ls?.name ? e : {
	$isDescriptor: !0,
	path: Ks.get(e) ?? (() => {
		let t = [_()];
		return Ys(t, e), t;
	})(),
	owner: Ls?.name,
	channel: t,
	primitive: s(e),
	writable: !0,
	enumerable: !0,
	configurable: !0,
	argumentCount: e instanceof Function ? e.length : -1
} : A(e) ? e : null, Hs = Symbol.for("@requestHandler"), Us = Symbol.for("@descriptor"), Ws = (e) => A(e) || e?.[Us] ? e : e?.$isDescriptor ? js(e, async () => void 0) : k(e) ? e : null, Gs = /* @__PURE__ */ new Map(), Ks = /* @__PURE__ */ new WeakMap(), qs = (e, t) => {
	if (t != null && !Array.isArray(t) && (t = [t]), t == null || t?.length < 1) return e;
	let n = e?.[Us] ?? (e?.$isDescriptor ? e : null);
	if (n && n?.owner == Ls?.name && (e = Js(n?.path) ?? e), s(e)) return e;
	for (let n of t) if (e = e?.[n], e == null) return e;
	return e;
}, Js = (e) => {
	if (e != null && !Array.isArray(e) && (e = [e]), e == null || e?.length < 1) return null;
	let t = Gs?.get?.(e?.[0]) ?? null;
	return t == null ? null : qs(t, e?.slice?.(1));
}, Ys = (e, t) => {
	let n = t?.[Us] ?? (t?.$isDescriptor ? t : null);
	if (n && n?.owner == Ls?.name && (t = Js(n?.path) ?? t), e != null && !Array.isArray(e) && (e = [e]), e == null || e?.length < 1) return null;
	let r = Gs?.get?.(e?.[0]) ?? null;
	return e?.length > 1 ? qs(r, e?.slice?.(1, -1))[e?.[e?.length - 1]] = t : Gs?.set?.(e?.[0], t), (typeof t == "object" || typeof t == "function") && Ks?.set?.(t, e), t;
}, Xs = (e) => (e != null && !Array.isArray(e) && (e = [e]), e == null || e?.length < 1 ? !1 : !(Gs?.get?.(e?.[0]) ?? null) && e?.length <= 1 ? (Gs?.delete?.(e?.[0]), !0) : !1), Zs = (e) => {
	let t = e?.[Us] ?? (e?.$isDescriptor ? e : null);
	t && t?.owner == Ls?.name && (e = Js(t?.path) ?? e);
	let n = Ks?.get?.(e) ?? t?.path;
	return n == null || n?.length < 1 ? !1 : (Xs(n), (typeof e == "object" || typeof e == "function") && Ks?.delete?.(e), !0);
}, Qs = (e) => {
	let t = e?.[Us] ?? (e?.$isDescriptor ? e : null);
	return (Ks?.get?.(e) ?? t?.path) == null;
}, $s = (e) => (typeof e == "object" || typeof e == "function") && e != null, ec = {
	get: (e, t) => e?.[t],
	set: (e, t, n) => (e[t] = n, !0),
	has: (e, t) => t in e,
	apply: (e, t, n) => e.apply(t, n),
	construct: (e, t) => new e(...t),
	deleteProperty: (e, t) => delete e[t],
	ownKeys: (e) => Object.keys(e),
	getOwnPropertyDescriptor: (e, t) => Object.getOwnPropertyDescriptor(e, t),
	getPrototypeOf: (e) => Object.getPrototypeOf(e),
	setPrototypeOf: (e, t) => Object.setPrototypeOf(e, t),
	isExtensible: (e) => Object.isExtensible(e),
	preventExtensions: (e) => Object.preventExtensions(e)
};
function tc(e, t, n, r = {}) {
	let { channel: i = "", sender: a = "", reflect: o = ec } = r, s = r.target ?? Js(t), c = [], l = null, u = t;
	switch (String(e).toLowerCase()) {
		case "import":
		case Z.IMPORT:
			l = import(
				/* @vite-ignore */
				n?.[0]
);
			break;
		case "transfer":
		case Z.TRANSFER:
			le(s) && i !== a && c.push(s), l = s;
			break;
		case "get":
		case Z.GET: {
			let e = n?.[0], r = o.get?.(s, e) ?? s?.[e];
			l = typeof r == "function" && s != null ? r.bind(s) : r, u = [...t, String(e)];
			break;
		}
		case "set":
		case Z.SET: {
			let [e, i] = n, a = ge(i, Ws);
			l = r.target ? o.set?.(s, e, a) ?? (s[e] = a, !0) : o.set?.(s, e, a) ?? Ys([...t, String(e)], a);
			break;
		}
		case "apply":
		case "call":
		case Z.APPLY:
		case Z.CALL:
			if (typeof s == "function") {
				let e = r.context ?? (r.target ? void 0 : Js(t.slice(0, -1))), u = ge(n?.[0] ?? n ?? [], Ws);
				l = o.apply?.(s, e, u) ?? s.apply(e, u), le(l) && t?.at(-1) === "transfer" && i !== a && c.push(l);
			}
			break;
		case "construct":
		case Z.CONSTRUCT:
			if (typeof s == "function") {
				let e = ge(n?.[0] ?? n ?? [], Ws);
				l = o.construct?.(s, e) ?? new s(...e);
			}
			break;
		case "delete":
		case "deleteproperty":
		case "dispose":
		case Z.DELETE:
		case Z.DELETE_PROPERTY:
		case Z.DISPOSE:
			if (r.target) {
				let e = t[t.length - 1];
				l = o.deleteProperty?.(s, e) ?? delete s[e];
			} else l = t?.length > 0 ? Xs(t) : Zs(s), l && (u = Ks.get(s) ?? []);
			break;
		case "has":
		case Z.HAS:
			l = o.has?.(s, n?.[0]) ?? ($s(s) ? n?.[0] in s : !1);
			break;
		case "ownkeys":
		case Z.OWN_KEYS:
			l = o.ownKeys?.(s) ?? ($s(s) ? Object.keys(s) : []);
			break;
		case "getownpropertydescriptor":
		case "getpropertydescriptor":
		case Z.GET_OWN_PROPERTY_DESCRIPTOR:
		case Z.GET_PROPERTY_DESCRIPTOR:
			l = o.getOwnPropertyDescriptor?.(s, n?.[0] ?? t?.at(-1) ?? "") ?? ($s(s) ? Object.getOwnPropertyDescriptor(s, n?.[0] ?? t?.at(-1) ?? "") : void 0);
			break;
		case "getprototypeof":
		case Z.GET_PROTOTYPE_OF:
			l = o.getPrototypeOf?.(s) ?? ($s(s) ? Object.getPrototypeOf(s) : null);
			break;
		case "setprototypeof":
		case Z.SET_PROTOTYPE_OF:
			l = o.setPrototypeOf?.(s, n?.[0]) ?? ($s(s) ? Object.setPrototypeOf(s, n?.[0]) : !1);
			break;
		case "isextensible":
		case Z.IS_EXTENSIBLE:
			l = o.isExtensible?.(s) ?? ($s(s) ? Object.isExtensible(s) : !0);
			break;
		case "preventextensions":
		case Z.PREVENT_EXTENSIONS:
			l = o.preventExtensions?.(s) ?? ($s(s) ? Object.preventExtensions(s) : !1);
			break;
	}
	return {
		result: l,
		toTransfer: c,
		path: u
	};
}
async function nc(e, t, n, r, i, a, o) {
	let c = await a, l = le(c) && o.includes(c) || A(c), u = i;
	!l && t !== "get" && t !== Z.GET && (typeof c == "object" || typeof c == "function") && (Qs(c) ? (u = [_()], Ys(u, c)) : u = Ks.get(c) ?? []);
	let d = Js(u), f = t === "get" || t === Z.GET ? u?.at(-1) : void 0, p = Js(i), m = ge(c, (e) => Vs(e, n, o)) ?? c;
	return {
		response: {
			channel: r,
			sender: n,
			reqId: e,
			action: t,
			type: "response",
			payload: {
				result: l ? m : null,
				type: typeof c,
				channel: r,
				sender: n,
				descriptor: {
					$isDescriptor: !0,
					path: u,
					owner: n,
					channel: n,
					primitive: s(c),
					writable: !0,
					enumerable: !0,
					configurable: !0,
					argumentCount: p instanceof Function ? p.length : -1,
					...$s(d) && f != null ? Object.getOwnPropertyDescriptor(d, f) : {}
				}
			}
		},
		transfer: o
	};
}
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/channel/Connection.ts
var rc = class {
	_id = _();
	_state = "disconnected";
	_inbound = new bs({ bufferSize: 1e3 });
	_outbound = new bs({ bufferSize: 1e3 });
	_stateChanges = new bs();
	_connectedPeers = /* @__PURE__ */ new Map();
	_subs = [];
	_stats = {
		messagesSent: 0,
		messagesReceived: 0,
		bytesTransferred: 0,
		latencyMs: 0,
		uptime: 0,
		reconnectCount: 0
	};
	_startTime = 0;
	_pending = /* @__PURE__ */ new Map();
	_buffer = [];
	_opts;
	constructor(e, t = "internal", n = {}) {
		this._name = e, this._transportType = t, this._opts = {
			timeout: 3e4,
			autoReconnect: !0,
			reconnectInterval: 1e3,
			maxReconnectAttempts: 5,
			bufferMessages: !0,
			bufferSize: 1e3,
			metadata: {},
			...n
		}, this._setupSubscriptions();
	}
	subscribe(e, t) {
		return (t ? xs((e) => e.sender === t)(this._inbound) : this._inbound).subscribe(typeof e == "function" ? { next: e } : e);
	}
	next(e) {
		if (this._state !== "connected") {
			this._opts.bufferMessages && this._buffer.length < this._opts.bufferSize && this._buffer.push(e);
			return;
		}
		this._outbound.next(e), this._stats.messagesSent++;
	}
	async request(e, t, n = {}) {
		let r = _(), i = Promise.withResolvers();
		this._pending.set(r, i);
		let a = setTimeout(() => {
			this._pending.has(r) && (this._pending.delete(r), i.reject(/* @__PURE__ */ Error("Request timeout")));
		}, n.timeout ?? this._opts.timeout);
		return this.next({
			id: _(),
			channel: e,
			sender: this._name,
			type: "request",
			reqId: r,
			payload: {
				...t,
				action: n.action,
				path: n.path
			},
			timestamp: Date.now()
		}), i.promise.finally(() => clearTimeout(a));
	}
	respond(e, t) {
		this.next({
			id: _(),
			channel: e.sender,
			sender: this._name,
			type: "response",
			reqId: e.reqId,
			payload: t,
			timestamp: Date.now()
		});
	}
	emit(e, t, n) {
		this.next({
			id: _(),
			channel: e,
			sender: this._name,
			type: "event",
			payload: {
				type: t,
				data: n
			},
			timestamp: Date.now()
		});
	}
	subscribeOutbound(e) {
		return this._outbound.subscribe(typeof e == "function" ? { next: e } : e);
	}
	pushInbound(e) {
		if (this._stats.messagesReceived++, e.type === "response" && e.reqId) {
			let t = this._pending.get(e.reqId);
			if (t) {
				this._pending.delete(e.reqId), t.resolve(e.payload);
				return;
			}
		}
		this._inbound.next(e);
	}
	async connect() {
		this._state !== "connected" && (this._setState("connecting"), this._startTime = Date.now(), this._setState("connected"), this._flushBuffer());
	}
	disconnect() {
		this._state === "disconnected" || this._state === "closed" || (this._setState("disconnected"), this._subs.forEach((e) => e.unsubscribe()), this._subs = []);
	}
	close() {
		this.disconnect(), this._setState("closed"), this._inbound.complete(), this._outbound.complete(), this._stateChanges.complete();
	}
	markConnected() {
		this._setState("connected"), this._flushBuffer();
	}
	markDisconnected() {
		this._setState("disconnected");
	}
	_setState(e) {
		this._state !== e && (this._state = e, this._stateChanges.next(e));
	}
	_flushBuffer() {
		for (let e of this._buffer) this._outbound.next(e);
		this._buffer = [];
	}
	_setupSubscriptions() {
		this._subs.push(this._inbound.subscribe({ next: (e) => {
			e.type === "signal" && e.payload?.type === "connect" && this._connectedPeers.set(e.sender, {
				name: e.sender,
				state: "connected",
				isHost: !1
			});
		} }));
	}
	get id() {
		return this._id;
	}
	get name() {
		return this._name;
	}
	get state() {
		return this._state;
	}
	get transportType() {
		return this._transportType;
	}
	get stats() {
		return {
			...this._stats,
			uptime: this._startTime ? Date.now() - this._startTime : 0
		};
	}
	get stateChanges() {
		return this._stateChanges;
	}
	get connectedPeers() {
		return [...this._connectedPeers.keys()];
	}
	get meta() {
		return {
			id: this._id,
			name: this._name,
			state: this._state,
			isHost: !1,
			connectedChannels: new Set(this._connectedPeers.keys())
		};
	}
}, ic = class e {
	_connections = /* @__PURE__ */ new Map();
	static _instance = null;
	static getInstance() {
		return e._instance ||= new e(), e._instance;
	}
	getOrCreate(e, t = "internal", n = {}) {
		return this._connections.has(e) || this._connections.set(e, new rc(e, t, n)), this._connections.get(e);
	}
	get(e) {
		return this._connections.get(e);
	}
	has(e) {
		return this._connections.has(e);
	}
	delete(e) {
		return this._connections.get(e)?.close(), this._connections.delete(e);
	}
	clear() {
		this._connections.forEach((e) => e.close()), this._connections.clear();
	}
	get size() {
		return this._connections.size;
	}
	get names() {
		return [...this._connections.keys()];
	}
}, ac = () => ic.getInstance(), oc = (e, t, n) => ac().getOrCreate(e, t, n), sc = "uniform_channels", cc = 1, Q = {
	MESSAGES: "messages",
	MAILBOX: "mailbox",
	PENDING: "pending",
	EXCHANGE: "exchange",
	TRANSACTIONS: "transactions"
}, lc = class {
	_db = null;
	_isOpen = !1;
	_openPromise = null;
	_channelName;
	_messageUpdates = new bs();
	_exchangeUpdates = new bs();
	constructor(e) {
		this._channelName = e;
	}
	async open() {
		return this._db && this._isOpen ? this._db : (this._openPromise ||= new Promise((e, t) => {
			let n = indexedDB.open(sc, cc);
			n.onerror = () => {
				this._openPromise = null, t(/* @__PURE__ */ Error("Failed to open IndexedDB"));
			}, n.onsuccess = () => {
				this._db = n.result, this._isOpen = !0, this._openPromise = null, e(this._db);
			}, n.onupgradeneeded = (e) => {
				let t = e.target.result;
				this._createStores(t);
			};
		}), this._openPromise);
	}
	close() {
		this._db && (this._db.close(), this._db = null, this._isOpen = !1);
	}
	_createStores(e) {
		if (!e.objectStoreNames.contains(Q.MESSAGES)) {
			let t = e.createObjectStore(Q.MESSAGES, { keyPath: "id" });
			t.createIndex("channel", "channel", { unique: !1 }), t.createIndex("status", "status", { unique: !1 }), t.createIndex("recipient", "recipient", { unique: !1 }), t.createIndex("createdAt", "createdAt", { unique: !1 }), t.createIndex("channel_status", ["channel", "status"], { unique: !1 });
		}
		if (!e.objectStoreNames.contains(Q.MAILBOX)) {
			let t = e.createObjectStore(Q.MAILBOX, { keyPath: "id" });
			t.createIndex("channel", "channel", { unique: !1 }), t.createIndex("priority", "priority", { unique: !1 }), t.createIndex("expiresAt", "expiresAt", { unique: !1 });
		}
		if (!e.objectStoreNames.contains(Q.PENDING)) {
			let t = e.createObjectStore(Q.PENDING, { keyPath: "id" });
			t.createIndex("channel", "channel", { unique: !1 }), t.createIndex("createdAt", "createdAt", { unique: !1 });
		}
		if (!e.objectStoreNames.contains(Q.EXCHANGE)) {
			let t = e.createObjectStore(Q.EXCHANGE, { keyPath: "id" });
			t.createIndex("key", "key", { unique: !0 }), t.createIndex("owner", "owner", { unique: !1 });
		}
		e.objectStoreNames.contains(Q.TRANSACTIONS) || e.createObjectStore(Q.TRANSACTIONS, { keyPath: "id" }).createIndex("createdAt", "createdAt", { unique: !1 });
	}
	async defer(e, t = {}) {
		let n = await this.open(), r = {
			id: _(),
			channel: e.channel,
			sender: e.sender ?? this._channelName,
			recipient: e.channel,
			type: e.type,
			payload: e.payload,
			status: "pending",
			priority: t.priority ?? 0,
			createdAt: Date.now(),
			updatedAt: Date.now(),
			expiresAt: t.expiresIn ? Date.now() + t.expiresIn : null,
			retryCount: 0,
			maxRetries: t.maxRetries ?? 3,
			metadata: t.metadata
		};
		return new Promise((e, t) => {
			let i = n.transaction([Q.MESSAGES, Q.MAILBOX], "readwrite"), a = i.objectStore(Q.MESSAGES), o = i.objectStore(Q.MAILBOX);
			a.add(r), o.add(r), i.oncomplete = () => {
				this._messageUpdates.next(r), e(r.id);
			}, i.onerror = () => t(/* @__PURE__ */ Error("Failed to defer message"));
		});
	}
	async getDeferredMessages(e, t = {}) {
		let n = await this.open();
		return new Promise((r, i) => {
			let a = n.transaction(Q.MESSAGES, "readonly").objectStore(Q.MESSAGES), o = t.status ? a.index("channel_status") : a.index("channel"), s = t.status ? IDBKeyRange.only([e, t.status]) : IDBKeyRange.only(e), c = o.getAll(s, t.limit);
			c.onsuccess = () => {
				let e = c.result;
				t.offset && (e = e.slice(t.offset)), r(e);
			}, c.onerror = () => i(/* @__PURE__ */ Error("Failed to get deferred messages"));
		});
	}
	async processNextPending(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction(Q.MESSAGES, "readwrite").objectStore(Q.MESSAGES).index("channel_status").openCursor(IDBKeyRange.only([e, "pending"]));
			i.onsuccess = () => {
				let e = i.result;
				if (e) {
					let t = e.value;
					t.status = "processing", t.updatedAt = Date.now(), e.update(t), this._messageUpdates.next(t), n(t);
				} else n(null);
			}, i.onerror = () => r(/* @__PURE__ */ Error("Failed to process pending message"));
		});
	}
	async markDelivered(e) {
		await this._updateMessageStatus(e, "delivered");
	}
	async markFailed(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction(Q.MESSAGES, "readwrite").objectStore(Q.MESSAGES), a = i.get(e);
			a.onsuccess = () => {
				let e = a.result;
				if (!e) {
					n(!1);
					return;
				}
				e.retryCount++, e.updatedAt = Date.now(), e.retryCount < e.maxRetries ? e.status = "pending" : e.status = "failed", i.put(e), this._messageUpdates.next(e), n(e.status === "pending");
			}, a.onerror = () => r(/* @__PURE__ */ Error("Failed to mark message as failed"));
		});
	}
	async _updateMessageStatus(e, t) {
		let n = await this.open();
		return new Promise((r, i) => {
			let a = n.transaction(Q.MESSAGES, "readwrite").objectStore(Q.MESSAGES), o = a.get(e);
			o.onsuccess = () => {
				let e = o.result;
				e && (e.status = t, e.updatedAt = Date.now(), a.put(e), this._messageUpdates.next(e)), r();
			}, o.onerror = () => i(/* @__PURE__ */ Error("Failed to update message status"));
		});
	}
	async getMailbox(e, t = {}) {
		let n = await this.open();
		return new Promise((r, i) => {
			let a = n.transaction(Q.MAILBOX, "readonly").objectStore(Q.MAILBOX).index("channel").getAll(IDBKeyRange.only(e), t.limit);
			a.onsuccess = () => {
				let e = a.result;
				t.sortBy === "priority" ? e.sort((e, t) => t.priority - e.priority) : e.sort((e, t) => t.createdAt - e.createdAt), r(e);
			}, a.onerror = () => i(/* @__PURE__ */ Error("Failed to get mailbox"));
		});
	}
	async getMailboxStats(e) {
		let t = await this.getDeferredMessages(e), n = {
			total: t.length,
			pending: 0,
			processing: 0,
			delivered: 0,
			failed: 0,
			expired: 0
		}, r = Date.now();
		for (let e of t) e.expiresAt && e.expiresAt < r ? n.expired++ : n[e.status]++;
		return n;
	}
	async clearMailbox(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction(Q.MAILBOX, "readwrite"), a = i.objectStore(Q.MAILBOX).index("channel"), o = 0, s = a.openCursor(IDBKeyRange.only(e));
			s.onsuccess = () => {
				let e = s.result;
				e && (e.delete(), o++, e.continue());
			}, i.oncomplete = () => n(o), i.onerror = () => r(/* @__PURE__ */ Error("Failed to clear mailbox"));
		});
	}
	async registerPending(e) {
		let t = await this.open(), n = {
			id: _(),
			channel: this._channelName,
			type: e.type,
			data: e.data,
			metadata: e.metadata,
			createdAt: Date.now(),
			status: "pending"
		};
		return new Promise((e, r) => {
			let i = t.transaction(Q.PENDING, "readwrite");
			i.objectStore(Q.PENDING).add(n), i.oncomplete = () => e(n.id), i.onerror = () => r(/* @__PURE__ */ Error("Failed to register pending operation"));
		});
	}
	async getPendingOperations() {
		let e = await this.open();
		return new Promise((t, n) => {
			let r = e.transaction(Q.PENDING, "readonly").objectStore(Q.PENDING).index("channel").getAll(IDBKeyRange.only(this._channelName));
			r.onsuccess = () => t(r.result), r.onerror = () => n(/* @__PURE__ */ Error("Failed to get pending operations"));
		});
	}
	async completePending(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction(Q.PENDING, "readwrite");
			i.objectStore(Q.PENDING).delete(e), i.oncomplete = () => n(), i.onerror = () => r(/* @__PURE__ */ Error("Failed to complete pending operation"));
		});
	}
	async awaitPending(e, t = {}) {
		let n = t.timeout ?? 3e4, r = t.pollInterval ?? 100, i = Date.now();
		for (; Date.now() - i < n;) {
			let t = await this._getPendingById(e);
			if (!t) return null;
			if (t.status === "completed") return await this.completePending(e), t.result;
			await new Promise((e) => setTimeout(e, r));
		}
		throw Error(`Pending operation ${e} timed out`);
	}
	async _getPendingById(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction(Q.PENDING, "readonly").objectStore(Q.PENDING).get(e);
			i.onsuccess = () => n(i.result ?? null), i.onerror = () => r(/* @__PURE__ */ Error("Failed to get pending operation"));
		});
	}
	async exchangePut(e, t, n = {}) {
		let r = await this.open(), i = {
			id: _(),
			key: e,
			value: t,
			owner: this._channelName,
			sharedWith: n.sharedWith ?? ["*"],
			version: 1,
			createdAt: Date.now(),
			updatedAt: Date.now()
		};
		return new Promise((t, n) => {
			let a = r.transaction(Q.EXCHANGE, "readwrite"), o = a.objectStore(Q.EXCHANGE), s = o.index("key").get(e);
			s.onsuccess = () => {
				let e = s.result;
				e && (i.id = e.id, i.version = e.version + 1, i.createdAt = e.createdAt), o.put(i);
			}, a.oncomplete = () => {
				this._exchangeUpdates.next(i), t(i.id);
			}, a.onerror = () => n(/* @__PURE__ */ Error("Failed to put exchange data"));
		});
	}
	async exchangeGet(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction(Q.EXCHANGE, "readonly").objectStore(Q.EXCHANGE).index("key").get(e);
			i.onsuccess = () => {
				let e = i.result;
				if (!e) {
					n(null);
					return;
				}
				if (!this._canAccessExchange(e)) {
					n(null);
					return;
				}
				n(e.value);
			}, i.onerror = () => r(/* @__PURE__ */ Error("Failed to get exchange data"));
		});
	}
	async exchangeDelete(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction(Q.EXCHANGE, "readwrite"), a = i.objectStore(Q.EXCHANGE), o = a.index("key").get(e);
			o.onsuccess = () => {
				let e = o.result;
				if (!e) {
					n(!1);
					return;
				}
				if (e.owner !== this._channelName) {
					n(!1);
					return;
				}
				a.delete(e.id);
			}, i.oncomplete = () => n(!0), i.onerror = () => r(/* @__PURE__ */ Error("Failed to delete exchange data"));
		});
	}
	async exchangeLock(e, t = {}) {
		let n = await this.open(), r = t.timeout ?? 3e4;
		return new Promise((t, i) => {
			let a = n.transaction(Q.EXCHANGE, "readwrite"), o = a.objectStore(Q.EXCHANGE), s = o.index("key").get(e);
			s.onsuccess = () => {
				let e = s.result;
				if (!e) {
					t(!1);
					return;
				}
				if (e.lock && e.lock.holder !== this._channelName && e.lock.expiresAt > Date.now()) {
					t(!1);
					return;
				}
				e.lock = {
					holder: this._channelName,
					acquiredAt: Date.now(),
					expiresAt: Date.now() + r
				}, e.updatedAt = Date.now(), o.put(e);
			}, a.oncomplete = () => t(!0), a.onerror = () => i(/* @__PURE__ */ Error("Failed to acquire lock"));
		});
	}
	async exchangeUnlock(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction(Q.EXCHANGE, "readwrite"), a = i.objectStore(Q.EXCHANGE), o = a.index("key").get(e);
			o.onsuccess = () => {
				let e = o.result;
				e && e.lock?.holder === this._channelName && (delete e.lock, e.updatedAt = Date.now(), a.put(e));
			}, i.oncomplete = () => n(), i.onerror = () => r(/* @__PURE__ */ Error("Failed to release lock"));
		});
	}
	_canAccessExchange(e) {
		return e.owner === this._channelName || e.sharedWith.includes("*") ? !0 : e.sharedWith.includes(this._channelName);
	}
	async beginTransaction() {
		return new uc(this);
	}
	async executeTransaction(e) {
		let t = await this.open(), n = new Set(e.map((e) => e.store));
		return new Promise((r, i) => {
			let a = t.transaction(Array.from(n), "readwrite");
			for (let t of e) {
				let e = a.objectStore(t.store);
				switch (t.type) {
					case "put":
						t.value !== void 0 && e.put(t.value);
						break;
					case "delete":
						t.key !== void 0 && e.delete(t.key);
						break;
					case "update":
						if (t.key !== void 0) {
							let n = e.get(t.key);
							n.onsuccess = () => {
								n.result && t.value && e.put({
									...n.result,
									...t.value
								});
							};
						}
						break;
				}
			}
			a.oncomplete = () => r(), a.onerror = () => i(/* @__PURE__ */ Error("Transaction failed"));
		});
	}
	onMessageUpdate(e) {
		return this._messageUpdates.subscribe({ next: e });
	}
	onExchangeUpdate(e) {
		return this._exchangeUpdates.subscribe({ next: e });
	}
	async cleanupExpired() {
		let e = await this.open(), t = Date.now();
		return new Promise((n, r) => {
			let i = e.transaction([Q.MESSAGES, Q.MAILBOX], "readwrite"), a = i.objectStore(Q.MESSAGES), o = i.objectStore(Q.MAILBOX), s = 0, c = a.openCursor();
			c.onsuccess = () => {
				let e = c.result;
				if (e) {
					let n = e.value;
					n.expiresAt && n.expiresAt < t && (e.delete(), s++), e.continue();
				}
			};
			let l = o.openCursor();
			l.onsuccess = () => {
				let e = l.result;
				if (e) {
					let n = e.value;
					n.expiresAt && n.expiresAt < t && (e.delete(), s++), e.continue();
				}
			}, i.oncomplete = () => n(s), i.onerror = () => r(/* @__PURE__ */ Error("Failed to cleanup expired"));
		});
	}
}, uc = class {
	_operations = [];
	_isCommitted = !1;
	_isRolledBack = !1;
	constructor(e) {
		this._storage = e;
	}
	put(e, t) {
		return this._checkState(), this._operations.push({
			id: _(),
			type: "put",
			store: e,
			value: t,
			timestamp: Date.now()
		}), this;
	}
	delete(e, t) {
		return this._checkState(), this._operations.push({
			id: _(),
			type: "delete",
			store: e,
			key: t,
			timestamp: Date.now()
		}), this;
	}
	update(e, t, n) {
		return this._checkState(), this._operations.push({
			id: _(),
			type: "update",
			store: e,
			key: t,
			value: n,
			timestamp: Date.now()
		}), this;
	}
	async commit() {
		if (this._checkState(), this._operations.length === 0) {
			this._isCommitted = !0;
			return;
		}
		await this._storage.executeTransaction(this._operations), this._isCommitted = !0;
	}
	rollback() {
		this._operations = [], this._isRolledBack = !0;
	}
	get operationCount() {
		return this._operations.length;
	}
	_checkState() {
		if (this._isCommitted) throw Error("Transaction already committed");
		if (this._isRolledBack) throw Error("Transaction already rolled back");
	}
}, dc = /* @__PURE__ */ new Map();
function fc(e) {
	return dc.has(e) || dc.set(e, new lc(e)), dc.get(e);
}
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/channel/ChannelContext.ts
var pc = new URL("data:video/mp2t;base64,LyoqCiAqIFdvcmtlciBFbnRyeSBQb2ludCAtIE11bHRpLUNoYW5uZWwgU3VwcG9ydAogKgogKiBUaGlzIHdvcmtlciBjb250ZXh0IHN1cHBvcnRzOgogKiAtIE11bHRpcGxlIGNoYW5uZWwgY3JlYXRpb24vaW5pdGlhbGl6YXRpb24KICogLSBPYnNlcnZpbmcgbmV3IGluY29taW5nIGNoYW5uZWwgY29ubmVjdGlvbnMKICogLSBEeW5hbWljIGNoYW5uZWwgYWRkaXRpb24gYWZ0ZXIgaW5pdGlhbGl6YXRpb24KICogLSBDb25uZWN0aW9uIGZyb20gcmVtb3RlL2hvc3QgY29udGV4dHMKICovCgppbXBvcnQgeyBVVUlEdjQgfSBmcm9tICJmZXN0L2NvcmUiOwppbXBvcnQgewogICAgQ2hhbm5lbENvbnRleHQsCiAgICBjcmVhdGVDaGFubmVsQ29udGV4dCwKICAgIHR5cGUgQ2hhbm5lbEVuZHBvaW50LAogICAgdHlwZSBDaGFubmVsQ29udGV4dE9wdGlvbnMsCiAgICB0eXBlIFF1ZXJ5Q29ubmVjdGlvbnNPcHRpb25zLAogICAgdHlwZSBDb250ZXh0Q29ubmVjdGlvbkluZm8KfSBmcm9tICIuLi9jaGFubmVsL0NoYW5uZWxDb250ZXh0IjsKaW1wb3J0IHsgQ2hhbm5lbFN1YmplY3QsIHR5cGUgU3Vic2NyaXB0aW9uIH0gZnJvbSAiLi4vb2JzZXJ2YWJsZS9PYnNlcnZhYmxlIjsKCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KLy8gVFlQRVMKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKLyoqIEluY29taW5nIGNvbm5lY3Rpb24gZXZlbnQgKi8KZXhwb3J0IGludGVyZmFjZSBJbmNvbWluZ0Nvbm5lY3Rpb24gewogICAgLyoqIENvbm5lY3Rpb24gSUQgKi8KICAgIGlkOiBzdHJpbmc7CiAgICAvKiogQ2hhbm5lbCBuYW1lICovCiAgICBjaGFubmVsOiBzdHJpbmc7CiAgICAvKiogU2VuZGVyIGNvbnRleHQgbmFtZSAqLwogICAgc2VuZGVyOiBzdHJpbmc7CiAgICAvKiogQ29ubmVjdGlvbiB0eXBlICovCiAgICB0eXBlOiAiY2hhbm5lbCIgfCAicG9ydCIgfCAiYnJvYWRjYXN0IiB8ICJzb2NrZXQiOwogICAgLyoqIE1lc3NhZ2VQb3J0IGlmIHByb3ZpZGVkICovCiAgICBwb3J0PzogTWVzc2FnZVBvcnQ7CiAgICAvKiogVGltZXN0YW1wICovCiAgICB0aW1lc3RhbXA6IG51bWJlcjsKICAgIC8qKiBDb25uZWN0aW9uIG9wdGlvbnMgKi8KICAgIG9wdGlvbnM/OiBhbnk7Cn0KCi8qKiBDaGFubmVsIGNyZWF0ZWQgZXZlbnQgKi8KZXhwb3J0IGludGVyZmFjZSBDaGFubmVsQ3JlYXRlZEV2ZW50IHsKICAgIC8qKiBDaGFubmVsIG5hbWUgKi8KICAgIGNoYW5uZWw6IHN0cmluZzsKICAgIC8qKiBFbmRwb2ludCByZWZlcmVuY2UgKi8KICAgIGVuZHBvaW50OiBDaGFubmVsRW5kcG9pbnQ7CiAgICAvKiogUmVtb3RlIHNlbmRlciAqLwogICAgc2VuZGVyOiBzdHJpbmc7CiAgICAvKiogVGltZXN0YW1wICovCiAgICB0aW1lc3RhbXA6IG51bWJlcjsKfQoKLyoqIFdvcmtlciBjb250ZXh0IGNvbmZpZ3VyYXRpb24gKi8KZXhwb3J0IGludGVyZmFjZSBXb3JrZXJDb250ZXh0Q29uZmlnIGV4dGVuZHMgQ2hhbm5lbENvbnRleHRPcHRpb25zIHsKICAgIC8qKiBXb3JrZXIgbmFtZS9pZGVudGlmaWVyICovCiAgICB3b3JrZXJOYW1lPzogc3RyaW5nOwogICAgLyoqIEF1dG8tYWNjZXB0IGluY29taW5nIGNoYW5uZWxzICovCiAgICBhdXRvQWNjZXB0Q2hhbm5lbHM/OiBib29sZWFuOwogICAgLyoqIENoYW5uZWwgd2hpdGVsaXN0IChpZiBzZXQsIG9ubHkgdGhlc2UgY2hhbm5lbHMgYXJlIGFjY2VwdGVkKSAqLwogICAgYWxsb3dlZENoYW5uZWxzPzogc3RyaW5nW107CiAgICAvKiogTWF4aW11bSBjb25jdXJyZW50IGNoYW5uZWxzICovCiAgICBtYXhDaGFubmVscz86IG51bWJlcjsKfQoKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQovLyBXT1JLRVIgQ09OVEVYVAovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgovKioKICogV29ya2VyQ29udGV4dCAtIE1hbmFnZXMgY2hhbm5lbHMgd2l0aGluIGEgV29ya2VyCiAqCiAqIFN1cHBvcnRzIG9ic2VydmluZyBuZXcgaW5jb21pbmcgY29ubmVjdGlvbnMgZnJvbSBob3N0L3JlbW90ZSBjb250ZXh0cy4KICovCmV4cG9ydCBjbGFzcyBXb3JrZXJDb250ZXh0IHsKICAgIHByaXZhdGUgX2NvbnRleHQ6IENoYW5uZWxDb250ZXh0OwogICAgcHJpdmF0ZSBfY29uZmlnOiBSZXF1aXJlZDxXb3JrZXJDb250ZXh0Q29uZmlnPjsKICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107CgogICAgLy8gT2JzZXJ2YWJsZSBzdHJlYW1zIGZvciBpbmNvbWluZyBjb25uZWN0aW9ucwogICAgcHJpdmF0ZSBfaW5jb21pbmdDb25uZWN0aW9ucyA9IG5ldyBDaGFubmVsU3ViamVjdDxJbmNvbWluZ0Nvbm5lY3Rpb24+KHsgYnVmZmVyU2l6ZTogMTAwIH0pOwogICAgcHJpdmF0ZSBfY2hhbm5lbENyZWF0ZWQgPSBuZXcgQ2hhbm5lbFN1YmplY3Q8Q2hhbm5lbENyZWF0ZWRFdmVudD4oeyBidWZmZXJTaXplOiAxMDAgfSk7CiAgICBwcml2YXRlIF9jaGFubmVsQ2xvc2VkID0gbmV3IENoYW5uZWxTdWJqZWN0PHsgY2hhbm5lbDogc3RyaW5nOyB0aW1lc3RhbXA6IG51bWJlciB9PigpOwoKICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogV29ya2VyQ29udGV4dENvbmZpZyA9IHt9KSB7CiAgICAgICAgdGhpcy5fY29uZmlnID0gewogICAgICAgICAgICBuYW1lOiBjb25maWcubmFtZSA/PyAid29ya2VyIiwKICAgICAgICAgICAgd29ya2VyTmFtZTogY29uZmlnLndvcmtlck5hbWUgPz8gYHdvcmtlci0ke1VVSUR2NCgpLnNsaWNlKDAsIDgpfWAsCiAgICAgICAgICAgIGF1dG9BY2NlcHRDaGFubmVsczogY29uZmlnLmF1dG9BY2NlcHRDaGFubmVscyA/PyB0cnVlLAogICAgICAgICAgICBhbGxvd2VkQ2hhbm5lbHM6IGNvbmZpZy5hbGxvd2VkQ2hhbm5lbHMgPz8gW10sCiAgICAgICAgICAgIG1heENoYW5uZWxzOiBjb25maWcubWF4Q2hhbm5lbHMgPz8gMTAwLAogICAgICAgICAgICBhdXRvQ29ubmVjdDogY29uZmlnLmF1dG9Db25uZWN0ID8/IHRydWUsCiAgICAgICAgICAgIHVzZUdsb2JhbFNlbGY6IHRydWUsCiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiBjb25maWcuZGVmYXVsdE9wdGlvbnMgPz8ge30sCiAgICAgICAgICAgIGlzb2xhdGVkU3RvcmFnZTogY29uZmlnLmlzb2xhdGVkU3RvcmFnZSA/PyBmYWxzZSwKICAgICAgICAgICAgLi4uY29uZmlnCiAgICAgICAgfTsKCiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNyZWF0ZUNoYW5uZWxDb250ZXh0KHsKICAgICAgICAgICAgbmFtZTogdGhpcy5fY29uZmlnLm5hbWUsCiAgICAgICAgICAgIHVzZUdsb2JhbFNlbGY6IHRydWUsCiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiBjb25maWcuZGVmYXVsdE9wdGlvbnMKICAgICAgICB9KTsKCiAgICAgICAgdGhpcy5fc2V0dXBNZXNzYWdlTGlzdGVuZXIoKTsKICAgIH0KCiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgIC8vIElOQ09NSU5HIENPTk5FQ1RJT04gT0JTRVJWQUJMRVMKICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKICAgIC8qKgogICAgICogT2JzZXJ2YWJsZTogTmV3IGluY29taW5nIGNvbm5lY3Rpb24gcmVxdWVzdHMKICAgICAqLwogICAgZ2V0IG9uQ29ubmVjdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdDb25uZWN0aW9uczsKICAgIH0KCiAgICAvKioKICAgICAqIE9ic2VydmFibGU6IENoYW5uZWwgY3JlYXRlZCBldmVudHMKICAgICAqLwogICAgZ2V0IG9uQ2hhbm5lbENyZWF0ZWQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5uZWxDcmVhdGVkOwogICAgfQoKICAgIC8qKgogICAgICogT2JzZXJ2YWJsZTogQ2hhbm5lbCBjbG9zZWQgZXZlbnRzCiAgICAgKi8KICAgIGdldCBvbkNoYW5uZWxDbG9zZWQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5uZWxDbG9zZWQ7CiAgICB9CgogICAgLyoqCiAgICAgKiBTdWJzY3JpYmUgdG8gaW5jb21pbmcgY29ubmVjdGlvbnMKICAgICAqLwogICAgc3Vic2NyaWJlQ29ubmVjdGlvbnMoCiAgICAgICAgaGFuZGxlcjogKGNvbm46IEluY29taW5nQ29ubmVjdGlvbikgPT4gdm9pZAogICAgKTogU3Vic2NyaXB0aW9uIHsKICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdDb25uZWN0aW9ucy5zdWJzY3JpYmUoaGFuZGxlcik7CiAgICB9CgogICAgLyoqCiAgICAgKiBTdWJzY3JpYmUgdG8gY2hhbm5lbCBjcmVhdGlvbgogICAgICovCiAgICBzdWJzY3JpYmVDaGFubmVsQ3JlYXRlZCgKICAgICAgICBoYW5kbGVyOiAoZXZlbnQ6IENoYW5uZWxDcmVhdGVkRXZlbnQpID0+IHZvaWQKICAgICk6IFN1YnNjcmlwdGlvbiB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5uZWxDcmVhdGVkLnN1YnNjcmliZShoYW5kbGVyKTsKICAgIH0KCiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgIC8vIENIQU5ORUwgTUFOQUdFTUVOVAogICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgogICAgLyoqCiAgICAgKiBBY2NlcHQgYW4gaW5jb21pbmcgY29ubmVjdGlvbiBhbmQgY3JlYXRlIHRoZSBjaGFubmVsCiAgICAgKi8KICAgIGFjY2VwdENvbm5lY3Rpb24oY29ubmVjdGlvbjogSW5jb21pbmdDb25uZWN0aW9uKTogQ2hhbm5lbEVuZHBvaW50IHwgbnVsbCB7CiAgICAgICAgaWYgKCF0aGlzLl9jYW5BY2NlcHRDaGFubmVsKGNvbm5lY3Rpb24uY2hhbm5lbCkpIHsKICAgICAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgICAgfQoKICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuX2NvbnRleHQuY3JlYXRlQ2hhbm5lbChjb25uZWN0aW9uLmNoYW5uZWwsIGNvbm5lY3Rpb24ub3B0aW9ucyk7CgogICAgICAgIC8vIFNldHVwIHJlbW90ZSBjb25uZWN0aW9uCiAgICAgICAgaWYgKGNvbm5lY3Rpb24ucG9ydCkgewogICAgICAgICAgICBjb25uZWN0aW9uLnBvcnQuc3RhcnQ/LigpOwogICAgICAgICAgICBlbmRwb2ludC5oYW5kbGVyLmNyZWF0ZVJlbW90ZUNoYW5uZWwoCiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnNlbmRlciwKICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ub3B0aW9ucywKICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucG9ydAogICAgICAgICAgICApOwogICAgICAgIH0KCiAgICAgICAgdGhpcy5fY2hhbm5lbENyZWF0ZWQubmV4dCh7CiAgICAgICAgICAgIGNoYW5uZWw6IGNvbm5lY3Rpb24uY2hhbm5lbCwKICAgICAgICAgICAgZW5kcG9pbnQsCiAgICAgICAgICAgIHNlbmRlcjogY29ubmVjdGlvbi5zZW5kZXIsCiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKQogICAgICAgIH0pOwoKICAgICAgICAvLyBOb3RpZnkgc2VuZGVyCiAgICAgICAgdGhpcy5fcG9zdENoYW5uZWxDcmVhdGVkKGNvbm5lY3Rpb24uY2hhbm5lbCwgY29ubmVjdGlvbi5zZW5kZXIsIGNvbm5lY3Rpb24uaWQpOwoKICAgICAgICByZXR1cm4gZW5kcG9pbnQ7CiAgICB9CgogICAgLyoqCiAgICAgKiBDcmVhdGUgYSBuZXcgY2hhbm5lbCBpbiB0aGlzIHdvcmtlciBjb250ZXh0CiAgICAgKi8KICAgIGNyZWF0ZUNoYW5uZWwobmFtZTogc3RyaW5nLCBvcHRpb25zPzogYW55KTogQ2hhbm5lbEVuZHBvaW50IHsKICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dC5jcmVhdGVDaGFubmVsKG5hbWUsIG9wdGlvbnMpOwogICAgfQoKICAgIC8qKgogICAgICogR2V0IGFuIGV4aXN0aW5nIGNoYW5uZWwKICAgICAqLwogICAgZ2V0Q2hhbm5lbChuYW1lOiBzdHJpbmcpOiBDaGFubmVsRW5kcG9pbnQgfCB1bmRlZmluZWQgewogICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldENoYW5uZWwobmFtZSk7CiAgICB9CgogICAgLyoqCiAgICAgKiBDaGVjayBpZiBjaGFubmVsIGV4aXN0cwogICAgICovCiAgICBoYXNDaGFubmVsKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4gewogICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0Lmhhc0NoYW5uZWwobmFtZSk7CiAgICB9CgogICAgLyoqCiAgICAgKiBHZXQgYWxsIGNoYW5uZWwgbmFtZXMKICAgICAqLwogICAgZ2V0Q2hhbm5lbE5hbWVzKCk6IHN0cmluZ1tdIHsKICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRDaGFubmVsTmFtZXMoKTsKICAgIH0KCiAgICAvKioKICAgICAqIFF1ZXJ5IGN1cnJlbnRseSB0cmFja2VkIGNoYW5uZWwgY29ubmVjdGlvbnMgaW4gdGhpcyB3b3JrZXIuCiAgICAgKi8KICAgIHF1ZXJ5Q29ubmVjdGlvbnMocXVlcnk6IFF1ZXJ5Q29ubmVjdGlvbnNPcHRpb25zID0ge30pOiBDb250ZXh0Q29ubmVjdGlvbkluZm9bXSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQucXVlcnlDb25uZWN0aW9ucyhxdWVyeSk7CiAgICB9CgogICAgLyoqCiAgICAgKiBOb3RpZnkgYWN0aXZlIGNvbm5lY3Rpb25zICh1c2VmdWwgZm9yIHdvcmtlcjwtPmhvc3Qgc3luYykuCiAgICAgKi8KICAgIG5vdGlmeUNvbm5lY3Rpb25zKHBheWxvYWQ6IGFueSA9IHt9LCBxdWVyeTogUXVlcnlDb25uZWN0aW9uc09wdGlvbnMgPSB7fSk6IG51bWJlciB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQubm90aWZ5Q29ubmVjdGlvbnMocGF5bG9hZCwgcXVlcnkpOwogICAgfQoKICAgIC8qKgogICAgICogQ2xvc2UgYSBzcGVjaWZpYyBjaGFubmVsCiAgICAgKi8KICAgIGNsb3NlQ2hhbm5lbChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHsKICAgICAgICBjb25zdCBjbG9zZWQgPSB0aGlzLl9jb250ZXh0LmNsb3NlQ2hhbm5lbChuYW1lKTsKICAgICAgICBpZiAoY2xvc2VkKSB7CiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxDbG9zZWQubmV4dCh7IGNoYW5uZWw6IG5hbWUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9KTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGNsb3NlZDsKICAgIH0KCiAgICAvKioKICAgICAqIEdldCB0aGUgdW5kZXJseWluZyBjb250ZXh0CiAgICAgKi8KICAgIGdldCBjb250ZXh0KCk6IENoYW5uZWxDb250ZXh0IHsKICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDsKICAgIH0KCiAgICAvKioKICAgICAqIEdldCB3b3JrZXIgY29uZmlndXJhdGlvbgogICAgICovCiAgICBnZXQgY29uZmlnKCk6IFJlYWRvbmx5PFJlcXVpcmVkPFdvcmtlckNvbnRleHRDb25maWc+PiB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZzsKICAgIH0KCiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgIC8vIFBSSVZBVEUgTUVUSE9EUwogICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgogICAgcHJpdmF0ZSBfc2V0dXBNZXNzYWdlTGlzdGVuZXIoKTogdm9pZCB7CiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsICgoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4gewogICAgICAgICAgICB0aGlzLl9oYW5kbGVJbmNvbWluZ01lc3NhZ2UoZXZlbnQpOwogICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpOwogICAgfQoKICAgIHByaXZhdGUgX2hhbmRsZUluY29taW5nTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KTogdm9pZCB7CiAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGE7CiAgICAgICAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSAib2JqZWN0IikgcmV0dXJuOwoKICAgICAgICBzd2l0Y2ggKGRhdGEudHlwZSkgewogICAgICAgICAgICBjYXNlICJjcmVhdGVDaGFubmVsIjoKICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNyZWF0ZUNoYW5uZWwoZGF0YSk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGNhc2UgImNvbm5lY3RDaGFubmVsIjoKICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3RDaGFubmVsKGRhdGEpOwogICAgICAgICAgICAgICAgYnJlYWs7CgogICAgICAgICAgICBjYXNlICJhZGRQb3J0IjoKICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUFkZFBvcnQoZGF0YSk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGNhc2UgImxpc3RDaGFubmVscyI6CiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVMaXN0Q2hhbm5lbHMoZGF0YSk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGNhc2UgImNsb3NlQ2hhbm5lbCI6CiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVDbG9zZUNoYW5uZWwoZGF0YSk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGNhc2UgInBpbmciOgogICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyB0eXBlOiAicG9uZyIsIGlkOiBkYXRhLmlkLCB0aW1lc3RhbXA6IERhdGUubm93KCkgfSk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAgICAgICAvLyBQYXNzIHRvIGV4aXN0aW5nIGhhbmRsZXIgb3IgbG9nCiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jaGFubmVsICYmIHRoaXMuX2NvbnRleHQuaGFzQ2hhbm5lbChkYXRhLmNoYW5uZWwpKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gUm91dGUgdG8gc3BlY2lmaWMgY2hhbm5lbAogICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5fY29udGV4dC5nZXRDaGFubmVsKGRhdGEuY2hhbm5lbCk7CiAgICAgICAgICAgICAgICAgICAgKGVuZHBvaW50Py5oYW5kbGVyIGFzIGFueSk/LmhhbmRsZUFuZFJlc3BvbnNlPy4oZGF0YS5wYXlsb2FkLCBkYXRhLnJlcUlkKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9CgogICAgcHJpdmF0ZSBfaGFuZGxlQ3JlYXRlQ2hhbm5lbChkYXRhOiBhbnkpOiB2b2lkIHsKICAgICAgICBjb25zdCBjb25uZWN0aW9uOiBJbmNvbWluZ0Nvbm5lY3Rpb24gPSB7CiAgICAgICAgICAgIGlkOiBkYXRhLnJlcUlkID8/IFVVSUR2NCgpLAogICAgICAgICAgICBjaGFubmVsOiBkYXRhLmNoYW5uZWwsCiAgICAgICAgICAgIHNlbmRlcjogZGF0YS5zZW5kZXIgPz8gInVua25vd24iLAogICAgICAgICAgICB0eXBlOiAiY2hhbm5lbCIsCiAgICAgICAgICAgIHBvcnQ6IGRhdGEubWVzc2FnZVBvcnQsCiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwKICAgICAgICAgICAgb3B0aW9uczogZGF0YS5vcHRpb25zCiAgICAgICAgfTsKCiAgICAgICAgLy8gRW1pdCB0byBvYnNlcnZlcnMKICAgICAgICB0aGlzLl9pbmNvbWluZ0Nvbm5lY3Rpb25zLm5leHQoY29ubmVjdGlvbik7CgogICAgICAgIC8vIEF1dG8tYWNjZXB0IGlmIGNvbmZpZ3VyZWQKICAgICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9BY2NlcHRDaGFubmVscykgewogICAgICAgICAgICB0aGlzLmFjY2VwdENvbm5lY3Rpb24oY29ubmVjdGlvbik7CiAgICAgICAgfQogICAgfQoKICAgIHByaXZhdGUgX2hhbmRsZUNvbm5lY3RDaGFubmVsKGRhdGE6IGFueSk6IHZvaWQgewogICAgICAgIGNvbnN0IGNvbm5lY3Rpb246IEluY29taW5nQ29ubmVjdGlvbiA9IHsKICAgICAgICAgICAgaWQ6IGRhdGEucmVxSWQgPz8gVVVJRHY0KCksCiAgICAgICAgICAgIGNoYW5uZWw6IGRhdGEuY2hhbm5lbCwKICAgICAgICAgICAgc2VuZGVyOiBkYXRhLnNlbmRlciA/PyAidW5rbm93biIsCiAgICAgICAgICAgIHR5cGU6IGRhdGEucG9ydFR5cGUgPz8gImNoYW5uZWwiLAogICAgICAgICAgICBwb3J0OiBkYXRhLnBvcnQsCiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwKICAgICAgICAgICAgb3B0aW9uczogZGF0YS5vcHRpb25zCiAgICAgICAgfTsKCiAgICAgICAgdGhpcy5faW5jb21pbmdDb25uZWN0aW9ucy5uZXh0KGNvbm5lY3Rpb24pOwoKICAgICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9BY2NlcHRDaGFubmVscyAmJiB0aGlzLl9jYW5BY2NlcHRDaGFubmVsKGRhdGEuY2hhbm5lbCkpIHsKICAgICAgICAgICAgLy8gQ29ubmVjdCB0byBleGlzdGluZyBjaGFubmVsIG9yIGNyZWF0ZSBuZXcKICAgICAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLl9jb250ZXh0LmdldE9yQ3JlYXRlQ2hhbm5lbChkYXRhLmNoYW5uZWwsIGRhdGEub3B0aW9ucyk7CgogICAgICAgICAgICBpZiAoZGF0YS5wb3J0KSB7CiAgICAgICAgICAgICAgICBkYXRhLnBvcnQuc3RhcnQ/LigpOwogICAgICAgICAgICAgICAgZW5kcG9pbnQuaGFuZGxlci5jcmVhdGVSZW1vdGVDaGFubmVsKGRhdGEuc2VuZGVyLCBkYXRhLm9wdGlvbnMsIGRhdGEucG9ydCk7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICAgIHR5cGU6ICJjaGFubmVsQ29ubmVjdGVkIiwKICAgICAgICAgICAgICAgIGNoYW5uZWw6IGRhdGEuY2hhbm5lbCwKICAgICAgICAgICAgICAgIHJlcUlkOiBkYXRhLnJlcUlkCiAgICAgICAgICAgIH0pOwogICAgICAgIH0KICAgIH0KCiAgICBwcml2YXRlIF9oYW5kbGVBZGRQb3J0KGRhdGE6IGFueSk6IHZvaWQgewogICAgICAgIGlmICghZGF0YS5wb3J0IHx8ICFkYXRhLmNoYW5uZWwpIHJldHVybjsKCiAgICAgICAgY29uc3QgY29ubmVjdGlvbjogSW5jb21pbmdDb25uZWN0aW9uID0gewogICAgICAgICAgICBpZDogZGF0YS5yZXFJZCA/PyBVVUlEdjQoKSwKICAgICAgICAgICAgY2hhbm5lbDogZGF0YS5jaGFubmVsLAogICAgICAgICAgICBzZW5kZXI6IGRhdGEuc2VuZGVyID8/ICJ1bmtub3duIiwKICAgICAgICAgICAgdHlwZTogInBvcnQiLAogICAgICAgICAgICBwb3J0OiBkYXRhLnBvcnQsCiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwKICAgICAgICAgICAgb3B0aW9uczogZGF0YS5vcHRpb25zCiAgICAgICAgfTsKCiAgICAgICAgdGhpcy5faW5jb21pbmdDb25uZWN0aW9ucy5uZXh0KGNvbm5lY3Rpb24pOwoKICAgICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9BY2NlcHRDaGFubmVscykgewogICAgICAgICAgICB0aGlzLmFjY2VwdENvbm5lY3Rpb24oY29ubmVjdGlvbik7CiAgICAgICAgfQogICAgfQoKICAgIHByaXZhdGUgX2hhbmRsZUxpc3RDaGFubmVscyhkYXRhOiBhbnkpOiB2b2lkIHsKICAgICAgICBwb3N0TWVzc2FnZSh7CiAgICAgICAgICAgIHR5cGU6ICJjaGFubmVsTGlzdCIsCiAgICAgICAgICAgIGNoYW5uZWxzOiB0aGlzLmdldENoYW5uZWxOYW1lcygpLAogICAgICAgICAgICByZXFJZDogZGF0YS5yZXFJZAogICAgICAgIH0pOwogICAgfQoKICAgIHByaXZhdGUgX2hhbmRsZUNsb3NlQ2hhbm5lbChkYXRhOiBhbnkpOiB2b2lkIHsKICAgICAgICBpZiAoZGF0YS5jaGFubmVsKSB7CiAgICAgICAgICAgIHRoaXMuY2xvc2VDaGFubmVsKGRhdGEuY2hhbm5lbCk7CiAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICAgIHR5cGU6ICJjaGFubmVsQ2xvc2VkIiwKICAgICAgICAgICAgICAgIGNoYW5uZWw6IGRhdGEuY2hhbm5lbCwKICAgICAgICAgICAgICAgIHJlcUlkOiBkYXRhLnJlcUlkCiAgICAgICAgICAgIH0pOwogICAgICAgIH0KICAgIH0KCiAgICBwcml2YXRlIF9jYW5BY2NlcHRDaGFubmVsKGNoYW5uZWw6IHN0cmluZyk6IGJvb2xlYW4gewogICAgICAgIC8vIENoZWNrIG1heCBjaGFubmVscwogICAgICAgIGlmICh0aGlzLl9jb250ZXh0LnNpemUgPj0gdGhpcy5fY29uZmlnLm1heENoYW5uZWxzKSB7CiAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CgogICAgICAgIC8vIENoZWNrIHdoaXRlbGlzdAogICAgICAgIGlmICh0aGlzLl9jb25maWcuYWxsb3dlZENoYW5uZWxzLmxlbmd0aCA+IDApIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5hbGxvd2VkQ2hhbm5lbHMuaW5jbHVkZXMoY2hhbm5lbCk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBwcml2YXRlIF9wb3N0Q2hhbm5lbENyZWF0ZWQoY2hhbm5lbDogc3RyaW5nLCBzZW5kZXI6IHN0cmluZywgcmVxSWQ/OiBzdHJpbmcpOiB2b2lkIHsKICAgICAgICBwb3N0TWVzc2FnZSh7CiAgICAgICAgICAgIHR5cGU6ICJjaGFubmVsQ3JlYXRlZCIsCiAgICAgICAgICAgIGNoYW5uZWwsCiAgICAgICAgICAgIHNlbmRlciwKICAgICAgICAgICAgcmVxSWQsCiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKQogICAgICAgIH0pOwogICAgfQoKICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICAgLy8gTElGRUNZQ0xFCiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KCiAgICBjbG9zZSgpOiB2b2lkIHsKICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpOwogICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbXTsKICAgICAgICB0aGlzLl9pbmNvbWluZ0Nvbm5lY3Rpb25zLmNvbXBsZXRlKCk7CiAgICAgICAgdGhpcy5fY2hhbm5lbENyZWF0ZWQuY29tcGxldGUoKTsKICAgICAgICB0aGlzLl9jaGFubmVsQ2xvc2VkLmNvbXBsZXRlKCk7CiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZSgpOwogICAgfQp9CgovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ci8vIEdMT0JBTCBXT1JLRVIgQ09OVEVYVCAoU2luZ2xldG9uKQovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgpsZXQgV09SS0VSX0NPTlRFWFQ6IFdvcmtlckNvbnRleHQgfCBudWxsID0gbnVsbDsKCi8qKgogKiBHZXQgb3IgY3JlYXRlIHRoZSB3b3JrZXIgY29udGV4dCBzaW5nbGV0b24KICovCmV4cG9ydCBmdW5jdGlvbiBnZXRXb3JrZXJDb250ZXh0KGNvbmZpZz86IFdvcmtlckNvbnRleHRDb25maWcpOiBXb3JrZXJDb250ZXh0IHsKICAgIGlmICghV09SS0VSX0NPTlRFWFQpIHsKICAgICAgICBXT1JLRVJfQ09OVEVYVCA9IG5ldyBXb3JrZXJDb250ZXh0KGNvbmZpZyk7CiAgICB9CiAgICByZXR1cm4gV09SS0VSX0NPTlRFWFQ7Cn0KCi8qKgogKiBJbml0aWFsaXplIHdvcmtlciBjb250ZXh0IHdpdGggY29uZmlnCiAqLwpleHBvcnQgZnVuY3Rpb24gaW5pdFdvcmtlckNvbnRleHQoY29uZmlnPzogV29ya2VyQ29udGV4dENvbmZpZyk6IFdvcmtlckNvbnRleHQgewogICAgV09SS0VSX0NPTlRFWFQ/LmNsb3NlKCk7CiAgICBXT1JLRVJfQ09OVEVYVCA9IG5ldyBXb3JrZXJDb250ZXh0KGNvbmZpZyk7CiAgICByZXR1cm4gV09SS0VSX0NPTlRFWFQ7Cn0KCi8qKgogKiBTdWJzY3JpYmUgdG8gaW5jb21pbmcgY29ubmVjdGlvbnMgaW4gdGhlIGdsb2JhbCB3b3JrZXIgY29udGV4dAogKi8KZXhwb3J0IGZ1bmN0aW9uIG9uV29ya2VyQ29ubmVjdGlvbigKICAgIGhhbmRsZXI6IChjb25uOiBJbmNvbWluZ0Nvbm5lY3Rpb24pID0+IHZvaWQKKTogU3Vic2NyaXB0aW9uIHsKICAgIHJldHVybiBnZXRXb3JrZXJDb250ZXh0KCkuc3Vic2NyaWJlQ29ubmVjdGlvbnMoaGFuZGxlcik7Cn0KCi8qKgogKiBTdWJzY3JpYmUgdG8gY2hhbm5lbCBjcmVhdGlvbiBpbiB0aGUgZ2xvYmFsIHdvcmtlciBjb250ZXh0CiAqLwpleHBvcnQgZnVuY3Rpb24gb25Xb3JrZXJDaGFubmVsQ3JlYXRlZCgKICAgIGhhbmRsZXI6IChldmVudDogQ2hhbm5lbENyZWF0ZWRFdmVudCkgPT4gdm9pZAopOiBTdWJzY3JpcHRpb24gewogICAgcmV0dXJuIGdldFdvcmtlckNvbnRleHQoKS5zdWJzY3JpYmVDaGFubmVsQ3JlYXRlZChoYW5kbGVyKTsKfQoKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQovLyBJTlZPS0VSIElOVEVHUkFUSU9OCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KCmltcG9ydCB7CiAgICBSZXNwb25kZXIsCiAgICBCaWRpcmVjdGlvbmFsSW52b2tlciwKICAgIGNyZWF0ZVJlc3BvbmRlciwKICAgIGNyZWF0ZUludm9rZXIsCiAgICBkZXRlY3RDb250ZXh0VHlwZSwKICAgIGRldGVjdFRyYW5zcG9ydFR5cGUsCiAgICB0eXBlIENvbnRleHRUeXBlLAogICAgdHlwZSBJbmNvbWluZ0ludm9jYXRpb24KfSBmcm9tICIuLi9wcm94eS9JbnZva2VyIjsKCmxldCBXT1JLRVJfUkVTUE9OREVSOiBSZXNwb25kZXIgfCBudWxsID0gbnVsbDsKbGV0IFdPUktFUl9JTlZPS0VSOiBCaWRpcmVjdGlvbmFsSW52b2tlciB8IG51bGwgPSBudWxsOwoKLyoqCiAqIEdldCB0aGUgd29ya2VyJ3MgUmVzcG9uZGVyIChmb3IgaGFuZGxpbmcgaW5jb21pbmcgaW52b2NhdGlvbnMpCiAqLwpleHBvcnQgZnVuY3Rpb24gZ2V0V29ya2VyUmVzcG9uZGVyKGNoYW5uZWw/OiBzdHJpbmcpOiBSZXNwb25kZXIgewogICAgaWYgKCFXT1JLRVJfUkVTUE9OREVSKSB7CiAgICAgICAgV09SS0VSX1JFU1BPTkRFUiA9IGNyZWF0ZVJlc3BvbmRlcihjaGFubmVsID8/ICJ3b3JrZXIiKTsKICAgICAgICBXT1JLRVJfUkVTUE9OREVSLmxpc3RlbihzZWxmKTsKICAgIH0KICAgIHJldHVybiBXT1JLRVJfUkVTUE9OREVSOwp9CgovKioKICogR2V0IHRoZSB3b3JrZXIncyBiaWRpcmVjdGlvbmFsIEludm9rZXIKICovCmV4cG9ydCBmdW5jdGlvbiBnZXRXb3JrZXJJbnZva2VyKGNoYW5uZWw/OiBzdHJpbmcpOiBCaWRpcmVjdGlvbmFsSW52b2tlciB7CiAgICBpZiAoIVdPUktFUl9JTlZPS0VSKSB7CiAgICAgICAgV09SS0VSX0lOVk9LRVIgPSBjcmVhdGVJbnZva2VyKGNoYW5uZWwgPz8gIndvcmtlciIpOwogICAgICAgIFdPUktFUl9JTlZPS0VSLmNvbm5lY3Qoc2VsZik7CiAgICB9CiAgICByZXR1cm4gV09SS0VSX0lOVk9LRVI7Cn0KCi8qKgogKiBFeHBvc2UgYW4gb2JqZWN0IGZvciByZW1vdGUgaW52b2NhdGlvbiBmcm9tIHRoZSB3b3JrZXIKICovCmV4cG9ydCBmdW5jdGlvbiBleHBvc2VGcm9tV29ya2VyKG5hbWU6IHN0cmluZywgb2JqOiBhbnkpOiB2b2lkIHsKICAgIGdldFdvcmtlclJlc3BvbmRlcigpLmV4cG9zZShuYW1lLCBvYmopOwp9CgovKioKICogU3Vic2NyaWJlIHRvIGluY29taW5nIGludm9jYXRpb25zIGluIHRoZSB3b3JrZXIKICovCmV4cG9ydCBmdW5jdGlvbiBvbldvcmtlckludm9jYXRpb24oCiAgICBoYW5kbGVyOiAoaW52OiBJbmNvbWluZ0ludm9jYXRpb24pID0+IHZvaWQKKTogU3Vic2NyaXB0aW9uIHsKICAgIHJldHVybiBnZXRXb3JrZXJSZXNwb25kZXIoKS5zdWJzY3JpYmVJbnZvY2F0aW9ucyhoYW5kbGVyKTsKfQoKLyoqCiAqIENyZWF0ZSBhIHByb3h5IHRvIGludm9rZSBtZXRob2RzIG9uIHRoZSBob3N0IGZyb20gdGhlIHdvcmtlcgogKi8KZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvc3RQcm94eTxUID0gYW55Pihob3N0Q2hhbm5lbDogc3RyaW5nID0gImhvc3QiLCBiYXNlUGF0aDogc3RyaW5nW10gPSBbXSk6IFQgewogICAgcmV0dXJuIGdldFdvcmtlckludm9rZXIoKS5jcmVhdGVQcm94eTxUPihob3N0Q2hhbm5lbCwgYmFzZVBhdGgpOwp9CgovKioKICogSW1wb3J0IGEgbW9kdWxlIGluIHRoZSBob3N0IGNvbnRleHQgZnJvbSB0aGUgd29ya2VyCiAqLwpleHBvcnQgZnVuY3Rpb24gaW1wb3J0SW5Ib3N0PFQgPSBhbnk+KHVybDogc3RyaW5nLCBob3N0Q2hhbm5lbDogc3RyaW5nID0gImhvc3QiKTogUHJvbWlzZTxUPiB7CiAgICByZXR1cm4gZ2V0V29ya2VySW52b2tlcigpLmltcG9ydE1vZHVsZTxUPihob3N0Q2hhbm5lbCwgdXJsKTsKfQoKLy8gUmUtZXhwb3J0IGRldGVjdGlvbiB1dGlsaXRpZXMKZXhwb3J0IHsgZGV0ZWN0Q29udGV4dFR5cGUsIGRldGVjdFRyYW5zcG9ydFR5cGUgfTsKZXhwb3J0IHR5cGUgeyBDb250ZXh0VHlwZSwgSW5jb21pbmdJbnZvY2F0aW9uIH07CgovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ci8vIEFVVE8tSU5JVElBTElaRSAoQ29tcGF0aWJsZSB3aXRoIGxlZ2FjeSB1c2FnZSkKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKLy8gSW5pdGlhbGl6ZSB0aGUgd29ya2VyIGNvbnRleHQKY29uc3QgY3R4ID0gZ2V0V29ya2VyQ29udGV4dCh7IG5hbWU6ICJ3b3JrZXIiIH0pOwoKLy8gRXhwb3J0IGZvciBkaXJlY3QgYWNjZXNzCmV4cG9ydCB7IGN0eCBhcyB3b3JrZXJDb250ZXh0IH07Cg==", "" + import.meta.url), mc = class {
	_connection;
	_storage;
	constructor(e, t, n = {}) {
		this._channel = e, this._context = t, this._options = n, this._connection = oc(e), this._storage = fc(e);
	}
	async request(e, t, n, r = {}) {
		let i = typeof e == "string" ? [e] : e, a = t, o = n;
		return Array.isArray(t) && _c(e) && (r = n, o = t, a = e, i = []), this._context.getHost()?.request(i, a, o, r, this._channel);
	}
	async doImportModule(e, t = {}) {
		return this.request([], Z.IMPORT, [e], t);
	}
	async deferMessage(e, t = {}) {
		return this._storage.defer({
			channel: this._channel,
			sender: this._context.hostName,
			type: "request",
			payload: e
		}, t);
	}
	async getPendingMessages() {
		return this._storage.getDeferredMessages(this._channel, { status: "pending" });
	}
	get connection() {
		return this._connection;
	}
	get channelName() {
		return this._channel;
	}
	get context() {
		return this._context;
	}
}, hc = class {
	_connection;
	_unified;
	get _forResolves() {
		return this._unified.__getPrivate("_pending");
	}
	get _subscriptions() {
		return this._unified.__getPrivate("_subscriptions");
	}
	get _broadcasts() {
		return this._unified.__getPrivate("_transports");
	}
	constructor(e, t, n = {}) {
		this._channel = e, this._context = t, this._options = n, this._connection = ac().getOrCreate(e, "internal", n), this._unified = new Fs({
			name: e,
			autoListen: !1,
			timeout: n?.timeout
		});
	}
	createRemoteChannel(e, t = {}, n) {
		let r = vc(n ?? this._context.$createOrUseExistingRemote(e, t, n ?? null)?.messageChannel?.port1), i = bc(r?.target ?? r);
		return this._unified.listen(r?.target, { targetChannel: e }), r && (this._broadcasts?.set?.(e, r), i === "self" && typeof postMessage > "u" || this._unified.connect(r, { targetChannel: e }), this._context.$registerConnection({
			localChannel: this._channel,
			remoteChannel: e,
			sender: this._channel,
			direction: "outgoing",
			transportType: i
		}), this.notifyChannel(e, {
			contextId: this._context.id,
			contextName: this._context.hostName
		}, "connect")), new mc(e, this._context, t);
	}
	getChannel() {
		return this._channel;
	}
	get connection() {
		return this._connection;
	}
	request(e, t, n, r = {}, i = "worker") {
		let a = typeof e == "string" ? [e] : e, o = n;
		return Array.isArray(t) && _c(e) && (i = r, r = n, o = t, t = e, a = []), this._unified.invoke(i, t, a ?? [], Array.isArray(o) ? o : [o]);
	}
	resolveResponse(e, t) {
		this._forResolves.get(e)?.resolve?.(t);
		let n = this._forResolves.get(e)?.promise;
		return this._forResolves.delete(e), n;
	}
	async handleAndResponse(e, t, n) {}
	notifyChannel(e, t = {}, n = "notify") {
		return this._unified.notify(e, {
			...t,
			from: this._channel,
			to: e
		}, n);
	}
	getConnectedChannels() {
		return this._unified.connectedChannels;
	}
	close() {
		this._subscriptions.forEach((e) => e.unsubscribe()), this._forResolves.clear(), this._broadcasts?.values?.()?.forEach((e) => e.close?.()), this._broadcasts?.clear?.(), this._unified.close();
	}
	get unified() {
		return this._unified;
	}
}, gc = class {
	_id = _();
	_hostName;
	_host = null;
	_endpoints = /* @__PURE__ */ new Map();
	_unifiedByChannel = /* @__PURE__ */ new Map();
	_unifiedConnectionSubs = /* @__PURE__ */ new Map();
	_remoteChannels = /* @__PURE__ */ new Map();
	_deferredChannels = /* @__PURE__ */ new Map();
	_connectionEvents = new bs({ bufferSize: 200 });
	_connectionRegistry = new Ps(() => _(), (e) => this._emitConnectionEvent(e));
	_closed = !1;
	_globalSelf = null;
	constructor(e = {}) {
		this._options = e, this._hostName = e.name ?? `ctx-${this._id.slice(0, 8)}`, e.useGlobalSelf !== !1 && (this._globalSelf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : null);
	}
	initHost(e) {
		if (this._host && !e) return this._host;
		let t = e ?? this._hostName;
		if (this._hostName = t, this._endpoints.has(t)) return this._host = this._endpoints.get(t).handler, this._host;
		this._host = new hc(t, this, this._options.defaultOptions);
		let n = {
			name: t,
			handler: this._host,
			connection: this._host.connection,
			subscriptions: [],
			ready: Promise.resolve(null),
			unified: this._host.unified
		};
		return this._endpoints.set(t, n), this._registerUnifiedChannel(t, this._host.unified), this._host;
	}
	getHost() {
		return this._host ?? this.initHost();
	}
	get hostName() {
		return this._hostName;
	}
	get id() {
		return this._id;
	}
	get onConnection() {
		return this._connectionEvents;
	}
	subscribeConnections(e) {
		return this._connectionEvents.subscribe(e);
	}
	notifyConnections(e = {}, t = {}) {
		let n = 0;
		for (let r of this._endpoints.values()) {
			let i = r.handler.getConnectedChannels();
			for (let a of i) {
				if (t.localChannel && t.localChannel !== r.name || t.remoteChannel && t.remoteChannel !== a) continue;
				let i = this.queryConnections({
					localChannel: r.name,
					remoteChannel: a,
					status: "active"
				})[0];
				t.sender && i?.sender !== t.sender || t.transportType && i?.transportType !== t.transportType || t.channel && t.channel !== r.name && t.channel !== a || r.handler.notifyChannel(a, e, "notify") && n++;
			}
		}
		return n;
	}
	queryConnections(e = {}) {
		return this._connectionRegistry.query(e).map((e) => ({
			...e,
			contextId: this._id
		}));
	}
	createChannel(e, t = {}) {
		if (this._endpoints.has(e)) return this._endpoints.get(e);
		let n = new hc(e, this, {
			...this._options.defaultOptions,
			...t
		}), r = {
			name: e,
			handler: n,
			connection: n.connection,
			subscriptions: [],
			ready: Promise.resolve(null),
			unified: n.unified
		};
		return this._endpoints.set(e, r), this._registerUnifiedChannel(e, n.unified), r;
	}
	createChannels(e, t = {}) {
		let n = /* @__PURE__ */ new Map();
		for (let r of e) n.set(r, this.createChannel(r, t));
		return n;
	}
	getChannel(e) {
		return this._endpoints.get(e);
	}
	getOrCreateChannel(e, t = {}) {
		return this._endpoints.get(e) ?? this.createChannel(e, t);
	}
	hasChannel(e) {
		return this._endpoints.has(e);
	}
	getChannelNames() {
		return [...this._endpoints.keys()];
	}
	get size() {
		return this._endpoints.size;
	}
	defer(e, t) {
		this._deferredChannels.set(e, t);
	}
	async initDeferred(e) {
		let t = this._deferredChannels.get(e);
		if (!t) return null;
		let n = await t();
		return this._endpoints.set(e, n), this._deferredChannels.delete(e), n;
	}
	isDeferred(e) {
		return this._deferredChannels.has(e);
	}
	async getChannelAsync(e) {
		return this._endpoints.has(e) ? this._endpoints.get(e) : this._deferredChannels.has(e) ? this.initDeferred(e) : null;
	}
	async addWorker(e, t, n = {}) {
		let r = xc(t);
		if (!r) throw Error(`Failed to create worker for channel: ${e}`);
		let i = new hc(e, this, {
			...this._options.defaultOptions,
			...n
		}), a = i.createRemoteChannel(e, n, r), o = {
			name: e,
			handler: i,
			connection: i.connection,
			subscriptions: [],
			transportType: "worker",
			ready: Promise.resolve(a),
			unified: i.unified
		};
		return this._endpoints.set(e, o), this._registerUnifiedChannel(e, i.unified), this._remoteChannels.set(e, {
			channel: e,
			context: this,
			remote: Promise.resolve(a),
			transport: r,
			transportType: "worker"
		}), o;
	}
	async addPort(e, t, n = {}) {
		let r = new hc(e, this, {
			...this._options.defaultOptions,
			...n
		});
		t.start?.();
		let i = r.createRemoteChannel(e, n, t), a = {
			name: e,
			handler: r,
			connection: r.connection,
			subscriptions: [],
			transportType: "message-port",
			ready: Promise.resolve(i),
			unified: r.unified
		};
		return this._endpoints.set(e, a), this._registerUnifiedChannel(e, r.unified), this._remoteChannels.set(e, {
			channel: e,
			context: this,
			remote: Promise.resolve(i),
			transport: t,
			transportType: "message-port"
		}), a;
	}
	async addBroadcast(e, t, n = {}) {
		let r = new BroadcastChannel(t ?? e), i = new hc(e, this, {
			...this._options.defaultOptions,
			...n
		}), a = i.createRemoteChannel(e, n, r), o = {
			name: e,
			handler: i,
			connection: i.connection,
			subscriptions: [],
			transportType: "broadcast",
			ready: Promise.resolve(a),
			unified: i.unified
		};
		return this._endpoints.set(e, o), this._registerUnifiedChannel(e, i.unified), this._remoteChannels.set(e, {
			channel: e,
			context: this,
			remote: Promise.resolve(a),
			transport: r,
			transportType: "broadcast"
		}), o;
	}
	addSelfChannel(e, t = {}) {
		let n = new hc(e, this, {
			...this._options.defaultOptions,
			...t
		}), r = this._globalSelf ?? (typeof self < "u" ? self : null), i = {
			name: e,
			handler: n,
			connection: n.connection,
			subscriptions: [],
			transportType: "self",
			ready: Promise.resolve(r ? n.createRemoteChannel(e, t, r) : null),
			unified: n.unified
		};
		return this._endpoints.set(e, i), this._registerUnifiedChannel(e, n.unified), i;
	}
	async addTransport(e, t) {
		let n = t.options ?? {};
		switch (t.type) {
			case "worker":
				if (!t.worker) throw Error("Worker required for worker transport");
				return this.addWorker(e, t.worker, n);
			case "message-port":
				if (!t.port) throw Error("Port required for message-port transport");
				return this.addPort(e, t.port, n);
			case "broadcast":
				let r = typeof t.broadcast == "string" ? t.broadcast : void 0;
				return this.addBroadcast(e, r, n);
			case "self": return this.addSelfChannel(e, n);
			default: return this.createChannel(e, n);
		}
	}
	createChannelPair(e, t, n = {}) {
		let r = new MessageChannel(), i = new hc(e, this, {
			...this._options.defaultOptions,
			...n
		}), a = new hc(t, this, {
			...this._options.defaultOptions,
			...n
		});
		r.port1.start(), r.port2.start();
		let o = Promise.resolve(i.createRemoteChannel(t, n, r.port1)), s = Promise.resolve(a.createRemoteChannel(e, n, r.port2)), c = {
			name: e,
			handler: i,
			connection: i.connection,
			subscriptions: [],
			transportType: "message-port",
			ready: o,
			unified: i.unified
		}, l = {
			name: t,
			handler: a,
			connection: a.connection,
			subscriptions: [],
			transportType: "message-port",
			ready: s,
			unified: a.unified
		};
		return this._endpoints.set(e, c), this._endpoints.set(t, l), this._registerUnifiedChannel(e, i.unified), this._registerUnifiedChannel(t, a.unified), {
			channel1: c,
			channel2: l,
			messageChannel: r
		};
	}
	get globalSelf() {
		return this._globalSelf;
	}
	async connectRemote(e, t = {}, n) {
		return this.initHost(), this._host.createRemoteChannel(e, t, n);
	}
	async importModuleInChannel(e, t, n = {}, r) {
		return (await this.connectRemote(e, n.channelOptions, r))?.doImportModule?.(t, n.importOptions);
	}
	$createOrUseExistingRemote(e, t = {}, n) {
		if (e == null || n) return null;
		if (this._remoteChannels.has(e)) return this._remoteChannels.get(e);
		let r = new MessageChannel(), i = xe(new Promise((n) => {
			let i = xc(pc);
			i?.addEventListener?.("message", (e) => {
				e.data.type === "channelCreated" && (r.port1?.start?.(), n(new mc(e.data.channel, this, t)));
			}), i?.postMessage?.({
				type: "createChannel",
				channel: e,
				sender: this._hostName,
				options: t,
				messagePort: r.port2
			}, { transfer: [r.port2] });
		})), a = {
			channel: e,
			context: this,
			messageChannel: r,
			remote: i
		};
		return this._remoteChannels.set(e, a), a;
	}
	$registerConnection(e) {
		return {
			...this._connectionRegistry.register(e),
			contextId: this._id
		};
	}
	$markNotified(e) {
		let t = this._connectionRegistry.register({
			localChannel: e.localChannel,
			remoteChannel: e.remoteChannel,
			sender: e.sender,
			direction: e.direction,
			transportType: e.transportType
		});
		this._connectionRegistry.markNotified(t, e.payload);
	}
	$observeSignal(e) {
		e.payload?.type, this.$markNotified({
			localChannel: e.localChannel,
			remoteChannel: e.remoteChannel,
			sender: e.sender,
			direction: "incoming",
			transportType: e.transportType,
			payload: e.payload
		});
	}
	$forwardUnifiedConnectionEvent(e, t) {
		let n = t.connection.transportType ?? "internal", r = this._connectionRegistry.register({
			localChannel: t.connection.localChannel || e,
			remoteChannel: t.connection.remoteChannel,
			sender: t.connection.sender,
			direction: t.connection.direction,
			transportType: n,
			metadata: t.connection.metadata
		});
		t.type === "notified" ? this._connectionRegistry.markNotified(r, t.payload) : t.type === "disconnected" && this._connectionRegistry.closeByChannel(t.connection.localChannel);
	}
	closeChannel(e) {
		let t = this._endpoints.get(e);
		return t ? (t.subscriptions.forEach((e) => e.unsubscribe()), t.handler.close(), t.transport?.detach(), this._unifiedConnectionSubs.get(e)?.unsubscribe(), this._unifiedConnectionSubs.delete(e), this._unifiedByChannel.delete(e), this._endpoints.delete(e), e === this._hostName && (this._host = null), this._connectionRegistry.closeByChannel(e), !0) : !1;
	}
	close() {
		if (!this._closed) {
			this._closed = !0;
			for (let [e] of this._endpoints) this.closeChannel(e);
			this._remoteChannels.clear(), this._host = null, this._unifiedConnectionSubs.forEach((e) => e.unsubscribe()), this._unifiedConnectionSubs.clear(), this._unifiedByChannel.clear(), this._connectionRegistry.clear(), this._connectionEvents.complete();
		}
	}
	get closed() {
		return this._closed;
	}
	_registerUnifiedChannel(e, t) {
		this._unifiedByChannel.set(e, t), this._unifiedConnectionSubs.get(e)?.unsubscribe();
		let n = t.subscribeConnections((t) => {
			this.$forwardUnifiedConnectionEvent(e, t);
		});
		this._unifiedConnectionSubs.set(e, n);
	}
	_emitConnectionEvent(e) {
		this._connectionEvents.next({
			...e,
			connection: {
				...e.connection,
				contextId: this._id
			}
		});
	}
};
function _c(e) {
	return [...Object.values(Z)].includes(e);
}
function vc(e) {
	if (!e) return null;
	if (yc(e)) return e;
	let t = e, n = bc(t);
	return {
		target: t,
		targetChannel: "unknown",
		transportType: n === "internal" ? "self" : n,
		sender: (e, n) => {
			if (typeof WebSocket < "u" && t instanceof WebSocket) {
				t.send(JSON.stringify(e));
				return;
			}
			t.postMessage?.(e, n?.length ? { transfer: n } : void 0);
		},
		postMessage: (e, n) => {
			t.postMessage?.(e, n);
		},
		addEventListener: t.addEventListener?.bind(t),
		removeEventListener: t.removeEventListener?.bind(t),
		start: t.start?.bind(t),
		close: t.close?.bind(t)
	};
}
function yc(e) {
	return !!e && typeof e == "object" && "target" in e && typeof e.postMessage == "function";
}
function bc(e) {
	let t = yc(e) ? e.target : e;
	return t ? t === "chrome-runtime" ? "chrome-runtime" : t === "chrome-tabs" ? "chrome-tabs" : t === "chrome-port" ? "chrome-port" : t === "chrome-external" ? "chrome-external" : typeof MessagePort < "u" && t instanceof MessagePort ? "message-port" : typeof BroadcastChannel < "u" && t instanceof BroadcastChannel ? "broadcast" : typeof Worker < "u" && t instanceof Worker ? "worker" : typeof WebSocket < "u" && t instanceof WebSocket ? "websocket" : typeof chrome < "u" && typeof t == "object" && t && typeof t.postMessage == "function" && t.onMessage?.addListener ? "chrome-port" : typeof self < "u" && t === self ? "self" : "internal" : "internal";
}
function xc(e) {
	if (e instanceof Worker) return e;
	if (e instanceof URL) return new Worker(e.href, { type: "module" });
	if (typeof e == "function") try {
		return new e({ type: "module" });
	} catch {
		return e({ type: "module" });
	}
	return typeof e == "string" ? e.startsWith("/") ? new Worker(new URL(e.replace(/^\//, "./"), import.meta.url).href, { type: "module" }) : URL.canParse(e) || e.startsWith("./") ? new Worker(new URL(e, import.meta.url).href, { type: "module" }) : new Worker(URL.createObjectURL(new Blob([e], { type: "application/javascript" })), { type: "module" }) : e instanceof Blob || e instanceof File ? new Worker(URL.createObjectURL(e), { type: "module" }) : e ?? (typeof self < "u" ? self : null);
}
var Sc = /* @__PURE__ */ new Map();
function Cc(e = {}) {
	let t = new gc(e);
	return e.name && Sc.set(e.name, t), t;
}
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/transport/Worker.ts
var wc = class {
	_context;
	_config;
	_subscriptions = [];
	_incomingConnections = new bs({ bufferSize: 100 });
	_channelCreated = new bs({ bufferSize: 100 });
	_channelClosed = new bs();
	constructor(e = {}) {
		this._config = {
			name: e.name ?? "worker",
			workerName: e.workerName ?? `worker-${_().slice(0, 8)}`,
			autoAcceptChannels: e.autoAcceptChannels ?? !0,
			allowedChannels: e.allowedChannels ?? [],
			maxChannels: e.maxChannels ?? 100,
			autoConnect: e.autoConnect ?? !0,
			useGlobalSelf: !0,
			defaultOptions: e.defaultOptions ?? {},
			isolatedStorage: e.isolatedStorage ?? !1,
			...e
		}, this._context = Cc({
			name: this._config.name,
			useGlobalSelf: !0,
			defaultOptions: e.defaultOptions
		}), this._setupMessageListener();
	}
	get onConnection() {
		return this._incomingConnections;
	}
	get onChannelCreated() {
		return this._channelCreated;
	}
	get onChannelClosed() {
		return this._channelClosed;
	}
	subscribeConnections(e) {
		return this._incomingConnections.subscribe(e);
	}
	subscribeChannelCreated(e) {
		return this._channelCreated.subscribe(e);
	}
	acceptConnection(e) {
		if (!this._canAcceptChannel(e.channel)) return null;
		let t = this._context.createChannel(e.channel, e.options);
		return e.port && (e.port.start?.(), t.handler.createRemoteChannel(e.sender, e.options, e.port)), this._channelCreated.next({
			channel: e.channel,
			endpoint: t,
			sender: e.sender,
			timestamp: Date.now()
		}), this._postChannelCreated(e.channel, e.sender, e.id), t;
	}
	createChannel(e, t) {
		return this._context.createChannel(e, t);
	}
	getChannel(e) {
		return this._context.getChannel(e);
	}
	hasChannel(e) {
		return this._context.hasChannel(e);
	}
	getChannelNames() {
		return this._context.getChannelNames();
	}
	queryConnections(e = {}) {
		return this._context.queryConnections(e);
	}
	notifyConnections(e = {}, t = {}) {
		return this._context.notifyConnections(e, t);
	}
	closeChannel(e) {
		let t = this._context.closeChannel(e);
		return t && this._channelClosed.next({
			channel: e,
			timestamp: Date.now()
		}), t;
	}
	get context() {
		return this._context;
	}
	get config() {
		return this._config;
	}
	_setupMessageListener() {
		addEventListener("message", ((e) => {
			this._handleIncomingMessage(e);
		}));
	}
	_handleIncomingMessage(e) {
		let t = e.data;
		if (!(!t || typeof t != "object")) switch (t.type) {
			case "createChannel":
				this._handleCreateChannel(t);
				break;
			case "connectChannel":
				this._handleConnectChannel(t);
				break;
			case "addPort":
				this._handleAddPort(t);
				break;
			case "listChannels":
				this._handleListChannels(t);
				break;
			case "closeChannel":
				this._handleCloseChannel(t);
				break;
			case "ping":
				postMessage({
					type: "pong",
					id: t.id,
					timestamp: Date.now()
				});
				break;
			default: t.channel && this._context.hasChannel(t.channel) && (this._context.getChannel(t.channel)?.handler)?.handleAndResponse?.(t.payload, t.reqId);
		}
	}
	_handleCreateChannel(e) {
		let t = {
			id: e.reqId ?? _(),
			channel: e.channel,
			sender: e.sender ?? "unknown",
			type: "channel",
			port: e.messagePort,
			timestamp: Date.now(),
			options: e.options
		};
		this._incomingConnections.next(t), this._config.autoAcceptChannels && this.acceptConnection(t);
	}
	_handleConnectChannel(e) {
		let t = {
			id: e.reqId ?? _(),
			channel: e.channel,
			sender: e.sender ?? "unknown",
			type: e.portType ?? "channel",
			port: e.port,
			timestamp: Date.now(),
			options: e.options
		};
		if (this._incomingConnections.next(t), this._config.autoAcceptChannels && this._canAcceptChannel(e.channel)) {
			let t = this._context.getOrCreateChannel(e.channel, e.options);
			e.port && (e.port.start?.(), t.handler.createRemoteChannel(e.sender, e.options, e.port)), postMessage({
				type: "channelConnected",
				channel: e.channel,
				reqId: e.reqId
			});
		}
	}
	_handleAddPort(e) {
		if (!e.port || !e.channel) return;
		let t = {
			id: e.reqId ?? _(),
			channel: e.channel,
			sender: e.sender ?? "unknown",
			type: "port",
			port: e.port,
			timestamp: Date.now(),
			options: e.options
		};
		this._incomingConnections.next(t), this._config.autoAcceptChannels && this.acceptConnection(t);
	}
	_handleListChannels(e) {
		postMessage({
			type: "channelList",
			channels: this.getChannelNames(),
			reqId: e.reqId
		});
	}
	_handleCloseChannel(e) {
		e.channel && (this.closeChannel(e.channel), postMessage({
			type: "channelClosed",
			channel: e.channel,
			reqId: e.reqId
		}));
	}
	_canAcceptChannel(e) {
		return this._context.size >= this._config.maxChannels ? !1 : this._config.allowedChannels.length > 0 ? this._config.allowedChannels.includes(e) : !0;
	}
	_postChannelCreated(e, t, n) {
		postMessage({
			type: "channelCreated",
			channel: e,
			sender: t,
			reqId: n,
			timestamp: Date.now()
		});
	}
	close() {
		this._subscriptions.forEach((e) => e.unsubscribe()), this._subscriptions = [], this._incomingConnections.complete(), this._channelCreated.complete(), this._channelClosed.complete(), this._context.close();
	}
}, Tc = null;
function Ec(e) {
	return Tc ||= new wc(e), Tc;
}
Ec({ name: "worker" });
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/transport/PortTransport.ts
var Dc = class {
	_port;
	_subs = /* @__PURE__ */ new Set();
	_pending = /* @__PURE__ */ new Map();
	_listening = !1;
	_cleanup = null;
	_portId = _();
	_state = new bs();
	_keepAliveTimer = null;
	constructor(e, t, n = {}) {
		this._channelName = t, this._config = n, this._port = e, this._setupPort(), n.autoStart !== !1 && this.start();
	}
	_setupPort() {
		let e = (e) => {
			let t = e.data;
			if (t.type === "response" && t.reqId) {
				let e = this._pending.get(t.reqId);
				if (e) {
					this._pending.delete(t.reqId), t.payload?.error ? e.reject(Error(t.payload.error)) : e.resolve(t.payload?.result ?? t.payload);
					return;
				}
			}
			if (t.type === "signal" && t.payload?.action === "ping") {
				this.send({
					id: _(),
					channel: this._channelName,
					sender: this._portId,
					type: "signal",
					payload: { action: "pong" }
				});
				return;
			}
			t.portId = t.portId ?? this._portId;
			for (let e of this._subs) try {
				e.next?.(t);
			} catch (t) {
				e.error?.(t);
			}
		}, t = () => {
			this._state.next("error");
			let e = /* @__PURE__ */ Error("Port error");
			for (let t of this._subs) t.error?.(e);
		};
		this._port.addEventListener("message", e), this._port.addEventListener("messageerror", t), this._cleanup = () => {
			this._port.removeEventListener("message", e), this._port.removeEventListener("messageerror", t);
		};
	}
	start() {
		this._listening || (this._port.start(), this._listening = !0, this._state.next("ready"), this._config.keepAlive && this._startKeepAlive());
	}
	send(e, t) {
		let { transferable: n, ...r } = e;
		this._port.postMessage({
			...r,
			portId: this._portId
		}, t ?? []);
	}
	request(e) {
		let t = e.reqId ?? _();
		return new Promise((n, r) => {
			let i = setTimeout(() => {
				this._pending.delete(t), r(/* @__PURE__ */ Error("Request timeout"));
			}, this._config.timeout ?? 3e4);
			this._pending.set(t, {
				resolve: (e) => {
					clearTimeout(i), n(e);
				},
				reject: (e) => {
					clearTimeout(i), r(e);
				},
				timestamp: Date.now()
			}), this.send({
				...e,
				reqId: t,
				type: "request"
			});
		});
	}
	subscribe(e) {
		let t = typeof e == "function" ? { next: e } : e;
		return this._subs.add(t), {
			closed: !1,
			unsubscribe: () => {
				this._subs.delete(t);
			}
		};
	}
	_startKeepAlive() {
		this._keepAliveTimer = setInterval(() => {
			this.send({
				id: _(),
				channel: this._channelName,
				sender: this._portId,
				type: "signal",
				payload: { action: "ping" }
			});
		}, this._config.keepAliveInterval ?? 3e4);
	}
	close() {
		this._keepAliveTimer &&= (clearInterval(this._keepAliveTimer), null), this._cleanup?.(), this._subs.forEach((e) => e.complete?.()), this._subs.clear(), this._port.close(), this._state.next("closed");
	}
	get port() {
		return this._port;
	}
	get portId() {
		return this._portId;
	}
	get isListening() {
		return this._listening;
	}
	get state() {
		return this._state;
	}
	get channelName() {
		return this._channelName;
	}
};
function Oc(e, t) {
	let n = new MessageChannel();
	return {
		local: new Dc(n.port1, e, t),
		remote: n.port2,
		transfer: () => n.port2
	};
}
(class {
	_transport = null;
	_state = new bs();
	_handshakeComplete = !1;
	constructor(e, t, n = {}) {
		this._target = e, this._channelName = t, this._config = n;
	}
	async connect() {
		if (this._transport && this._handshakeComplete) return this._transport;
		this._state.next("connecting");
		let { local: e, remote: t } = Oc(this._channelName, this._config);
		return this._target.postMessage({
			type: "port-connect",
			channelName: this._channelName,
			portId: e.portId
		}, this._config.targetOrigin ?? "*", [t]), new Promise((t, n) => {
			let r = setTimeout(() => {
				n(/* @__PURE__ */ Error("Handshake timeout")), this._state.next("error");
			}, this._config.handshakeTimeout ?? 1e4), i = e.subscribe({ next: (n) => {
				n.type === "signal" && n.payload?.action === "handshake-ack" && (clearTimeout(r), this._handshakeComplete = !0, this._transport = e, this._state.next("connected"), i.unsubscribe(), t(e));
			} });
		});
	}
	static listen(e, t, n) {
		let r = (r) => {
			if (r.data?.type !== "port-connect" || r.data?.channelName !== e || !r.ports[0]) return;
			let i = new Dc(r.ports[0], e, n);
			i.send({
				id: _(),
				channel: e,
				sender: i.portId,
				type: "signal",
				payload: { action: "handshake-ack" }
			}), t(i);
		};
		return globalThis.addEventListener("message", r), () => globalThis.removeEventListener("message", r);
	}
	disconnect() {
		this._transport?.close(), this._transport = null, this._handshakeComplete = !1, this._state.next("disconnected");
	}
	get isConnected() {
		return this._handshakeComplete;
	}
	get state() {
		return this._state;
	}
	get transport() {
		return this._transport;
	}
}).listen, typeof ServiceWorkerGlobalScope < "u" && self instanceof ServiceWorkerGlobalScope;
var kc = typeof Image < "u" ? new Image() : null;
if (kc) {
	kc.decoding = "async", kc.width = 24, kc.height = 24;
	try {
		kc.src = URL.createObjectURL(new Blob(["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 384 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z\"/></svg>"], { type: "image/svg+xml" }));
	} catch {}
}
//#endregion
//#region ../../projects/lur.e/src/utils/opfs/FsWatch.ts
var Ac = (e = "", t = "") => {
	let n = t.endsWith("/") ? t : `${t}/`;
	return e.startsWith(n);
}, jc = new BroadcastChannel("rs-fs"), Mc = /* @__PURE__ */ new Map();
jc.addEventListener("close", () => Mc.clear()), jc.addEventListener("message", (e) => {
	let t = e?.data;
	if (!t || t.type !== "commit-result" && t.type !== "commit-to-clipboard") return;
	let n = t?.results ?? [];
	if (!(!Array.isArray(n) || !n.length)) {
		for (let [e, t] of Mc.entries()) if (t.size && n.some((t) => Ac(t?.path, e))) for (let e of t) try {
			e();
		} catch (e) {
			console.warn(e);
		}
	}
});
//#endregion
//#region ../../projects/subsystem/runtime/app-settings.ts
var Nc = [
	"gpt-5.5-high",
	"claude-4.6-sonnet-high-thinking",
	"gemini-3.1-pro"
];
//#endregion
//#region ../../projects/subsystem/runtime/admin-doors.ts
function Pc() {
	let e = globalThis.location?.origin ?? "";
	return {
		http: e.replace(/^https:/, "http:"),
		https: e.replace(/^http:/, "https:")
	};
}
function Fc() {
	let e = Pc().https || Pc().http;
	e && globalThis.open?.(e, "_blank", "noopener,noreferrer");
}
//#endregion
//#region ../../projects/subsystem/runtime/messaging.ts
async function Ic(e) {
	return globalThis.dispatchEvent?.(new CustomEvent("view:message", { detail: e })), !0;
}
//#endregion
//#region ../../projects/subsystem/runtime/storage.ts
var Lc = {
	EXPLORER_PATH: "rs-explorer-path",
	SETTINGS: "rs-settings"
}, Rc = () => {
	try {
		return globalThis.localStorage ?? null;
	} catch {
		return null;
	}
};
function zc(e, t) {
	Rc()?.setItem(String(e), t);
}
//#endregion
//#region ../../projects/subsystem/runtime/boot.ts
async function Bc(e, t) {
	globalThis.dispatchEvent?.(new CustomEvent("view:navigate", { detail: {
		viewId: e,
		options: t
	} }));
}
//#endregion
//#region ../airpad-view/src/config/config.ts
var Vc = "airpad.remote.connection.v1", Hc = (e) => typeof e == "number" ? Number.isFinite(e) ? String(e) : "" : typeof e == "string" ? e.trim() : "", Uc = (e) => {
	let t = e.trim();
	if (!t) return !1;
	let n = t.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0], r = n.lastIndexOf(":");
	if (r <= 0) return !1;
	let i = n.slice(r + 1);
	return /^\d{1,5}$/.test(i);
}, Wc = (e, t) => {
	let n = e.trim();
	if (!n) return "";
	let r = t.trim();
	return !r || Uc(n) ? n : `${n}:${r}`;
}, Gc = (e) => {
	let t = Hc(e);
	if (!t) return "";
	try {
		let e = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `https://${t}`);
		return `${e.protocol}//${e.host}/`;
	} catch {
		return t;
	}
}, Kc = (...e) => Array.from(new Set(e.map((e) => Gc(e)).filter(Boolean))).join(", ");
function qc() {
	try {
		let e = globalThis?.localStorage?.getItem?.(Vc);
		if (!e) return {};
		let t = JSON.parse(e);
		if (!t || typeof t != "object") return {};
		let n = t, r = Hc(n.host), i = Hc(n.tunnelHost), a = Hc(n.port);
		if (!(a !== "" || i !== "")) return t;
		let o = [], s = /* @__PURE__ */ new Set(), c = (e) => {
			let t = (a ? Wc(e, a) : e).trim();
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
function Jc() {
	try {
		globalThis?.localStorage?.setItem?.(Vc, JSON.stringify({
			quickConnectValue: $.quickConnectValue,
			endpointUrl: $.endpointUrl,
			directUrl: $.directUrl,
			destinationId: $.destinationId,
			accessToken: $.accessToken,
			clientId: $.clientId,
			peerInstanceId: $.peerInstanceId
		}));
	} catch {}
}
var Yc = () => globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `ap-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`, $ = {
	quickConnectValue: "",
	endpointUrl: "",
	directUrl: "",
	accessToken: "",
	destinationId: "",
	clientId: "",
	peerInstanceId: ""
}, Xc = !0, Zc = !0, Qc = !1, $c = !1, el = !0, tl = !0, nl = !0, rl = () => {
	Kc($.directUrl, $.endpointUrl);
};
function il(e) {
	let t = Hc(e.host), n = Hc(e.routeTarget), r = Gc(e.endpointUrl) || (n ? Gc(t) : ""), i = Gc(e.directUrl) || (n ? "" : Gc(t)), a = Hc(e.quickConnectValue);
	$.endpointUrl = r, $.directUrl = i, $.accessToken = Hc(e.accessToken) || Hc(e.authToken) || "", $.destinationId = Hc(e.destinationId) || n, $.quickConnectValue = a || $.destinationId || $.directUrl, $.clientId = Hc(e.clientId);
	let o = Hc(e.peerInstanceId);
	o ? $.peerInstanceId = o : $.peerInstanceId ||= Yc(), rl();
}
var al = qc();
il(al), Hc(al.peerInstanceId) || ($.peerInstanceId = $.peerInstanceId || Yc());
var ol = Hc(al.accessToken), sl = Hc(al.authToken);
(al._legacyMigrated === !0 || !al.peerInstanceId || sl && !ol) && Jc();
function cl(e, t) {
	e.endpointUrl === void 0 ? e.host !== void 0 && ($.endpointUrl = Gc(e.host)) : $.endpointUrl = Gc(e.endpointUrl), e.directUrl !== void 0 && ($.directUrl = Gc(e.directUrl)), e.accessToken === void 0 ? e.authToken !== void 0 && ($.accessToken = e.authToken || "") : $.accessToken = e.accessToken || "", e.destinationId === void 0 ? e.routeTarget !== void 0 && ($.destinationId = (e.routeTarget || "").trim()) : $.destinationId = (e.destinationId || "").trim(), e.clientId !== void 0 && ($.clientId = (e.clientId || "").trim()), rl(), t?.persist !== !1 && Jc();
}
var ll = (e) => {
	try {
		let t = new URL(e);
		return `${t.protocol}//${t.host}`;
	} catch {
		return "";
	}
};
function ul(e) {
	let t = e.core, n = e.shell, r = t?.socket, i = t?.interop;
	(t?.userId || "").trim(), (t?.userKey || "").trim(), t?.useCoreIdentityForAirPad, Xc = (n?.enableRemoteClipboardBridge ?? !0) !== !1, Zc = (n?.applyRemoteClipboardToDevice ?? !0) !== !1, Qc = !!n?.pushLocalClipboardToLan, Number(n?.clipboardPushIntervalMs), (n?.clipboardBroadcastTargets || "").trim(), $c = (n?.maintainHubSocketConnection ?? !0) !== !1, el = (n?.preferNativeWebsocket ?? i?.preferNativeWebsocket ?? !0) !== !1, tl = (n?.enableNativeSms ?? !0) !== !1, nl = (n?.enableNativeContacts ?? !0) !== !1, n?.acceptInboundClipboardData, (n?.clipboardInboundAllowIds || "").trim(), (n?.clipboardShareDestinationIds || "").trim(), n?.accessTokenBypassesClipboardAllowlist, n?.acceptContactsBridgeData, n?.acceptSmsBridgeData, (r?.protocol === "http" || r?.protocol === "https") && r.protocol, (r?.routeTarget || "").trim(), (r?.selfId || "").trim(), (r?.accessToken || r?.airpadAuthToken || "").trim(), (r?.clientAccessToken || "").trim(), r?.transportMode, (r?.transportSecret || "").trim(), (r?.signingSecret || "").trim(), (r?.connectionType || "").trim(), (r?.archetype || "").trim(), (r?.protocolLanesJson || "").trim();
	let a = {};
	if (t?.endpointUrl?.trim()) {
		let e = ll(t.endpointUrl.trim());
		e && (a.endpointUrl = e);
	}
	Object.keys(a).length && cl(a, { persist: !1 });
	try {
		globalThis.__CWS_SHELL_FEATURES__ = {
			clipboardBridge: Xc,
			applyRemoteClipboard: Zc,
			pushLocalClipboard: Qc,
			maintainHubSocket: $c,
			preferNativeWebsocket: el,
			sms: tl,
			contacts: nl
		};
	} catch {}
}
//#endregion
//#region src/ts/settings-utils.ts
var dl = [
	"en",
	"ru",
	"en-GB",
	"en-US"
], fl = (e) => e === "en" ? "English (generic)" : e === "ru" ? "Russian" : e === "en-GB" ? "English (UK)" : "English (US)", pl = (e) => {
	let t = (e || "").trim();
	return t ? t === "ru" || t.startsWith("ru-") ? "ru" : t === "en-GB" ? "en-GB" : t === "en-US" ? "en-US" : t === "en" || t.startsWith("en-") ? "en" : null : null;
}, ml = () => {
	let e = /* @__PURE__ */ new Set(), t = typeof navigator < "u" ? [...navigator.languages || [], navigator.language] : [];
	for (let n of t) {
		let t = pl(n);
		t && e.add(t);
	}
	for (let t of dl) e.add(t);
	return Array.from(e);
}, hl = () => {
	let e = new Set(["ru", "en"]), t = typeof navigator < "u" ? [...navigator.languages || [], navigator.language] : [];
	for (let n of t) {
		let t = (n || "").trim();
		!t || t === "en" || t === "ru" || e.add(t);
	}
	return Array.from(e);
}, gl = (e, t) => {
	let n = Number((e || "").trim());
	return Number.isFinite(n) ? n : t;
}, _l = (e, t, n, r) => {
	let i = Number.parseFloat((e || "").trim());
	return Number.isFinite(i) ? Math.max(n, Math.min(r, i)) : t;
}, vl = (e, t = "") => e ? e.value.trim() : t, yl = (e, t) => e ? !!e.checked : t, bl = (e) => {
	let t = {
		id: (e?.id || `mcp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`).trim(),
		serverLabel: (e?.serverLabel || "").trim(),
		origin: (e?.origin || "").trim(),
		clientKey: (e?.clientKey || "").trim(),
		secretKey: (e?.secretKey || "").trim()
	};
	return W`<div class="field mcp-row" data-mcp-id=${t.id}>
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
}, xl = (e) => {
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
}, Sl = (e, t) => {
	if (!e) return;
	e.replaceChildren();
	let n = Array.isArray(t) ? t : [];
	if (!n.length) {
		e.appendChild(W`<p class="mcp-empty-note">No MCP servers configured.</p>`);
		return;
	}
	n.forEach((t) => e.appendChild(bl(t)));
}, Cl = () => W`<footer class="settings-screen__footer">
        <button class="btn primary" type="button" data-action="save">Save</button>
        <span class="note" data-note></span>
    </footer>`, wl = () => W`<header class="settings-screen__top">
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
    </header>`, Tl = () => W`<section class="card settings-tab-panel" data-tab-panel="appearance">
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
    </section>`, El = () => W`<section class="card settings-tab-panel" data-tab-panel="markdown">
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
    </section>`, Dl = () => W`<section class="card settings-tab-panel is-active" data-tab-panel="ai">
      <h3>AI</h3>
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
    </section>`, Ol = () => W`<section class="card settings-tab-panel" data-tab-panel="mcp">
      <h3>MCP</h3>
      <div class="mcp-section" data-mcp-section></div>
      <div class="mcp-actions">
        <button class="btn" type="button" data-action="add-mcp-server">Add MCP server</button>
      </div>
    </section>`, kl = () => W`<section class="card settings-tab-panel" data-tab-panel="server">
      <h3>Server</h3>
      <p class="field-hint" style="margin: 0 0 0.75rem; opacity: 0.88; font-size: 0.9em;">
        Connect to the hub with server URL and client id. Optional client identifier token and TLS options below.
      </p>
      <h4>Endpoint and identity</h4>
      <label class="field">
        <span>Server URL</span>
        <input class="form-input" type="url" inputmode="url" autocomplete="off" placeholder="https://192.168.0.200:8443" data-field="core.endpointUrl" />
      </label>
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
    </section>`, Al = [];
function jl() {
	return [...Al];
}
function Ml(e) {
	Al.push(e);
}
function Nl(e) {
	e.forEach(Ml);
}
function Pl(e, t) {
	let n = Al.find((t) => t.id === e);
	n && Object.assign(n, t);
}
function Fl(e) {
	let t = Al.findIndex((t) => t.id === e);
	t >= 0 && Al.splice(t, 1);
}
//#endregion
//#region ../../projects/subsystem/runtime/instruction-templates.ts
var Il = [{
	id: "default",
	title: "Default",
	content: "Process the provided content clearly and concisely.",
	enabled: !0
}], Ll = (e = {}) => {
	let t = Rt({
		instructions: [],
		activeId: "",
		editingId: null,
		newLabel: "",
		newInstruction: "",
		isAdding: !1
	}), n = W`<div class="custom-instructions-editor">
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
    </div>`, r = n.querySelector("[data-list]"), i = n.querySelector("[data-action='select-active']"), a = n.querySelector("[data-add-form]"), o = n.querySelector("[data-field='label']"), s = n.querySelector("[data-field='instruction']"), c = () => {
		if (r.replaceChildren(), !t.instructions.length) {
			r.append(W`<div class="ci-empty">No custom instructions. Add one or use templates.</div>`);
			return;
		}
		for (let n of t.instructions) {
			let i = t.editingId === n.id, a = t.activeId === n.id, o = W`<div class="ci-item ${a ? "active" : ""}" data-id="${n.id}">
                <div class="ci-item-header">
                    <span class="ci-item-label">${n.label}</span>
                    <div class="ci-item-actions">
                        ${a ? W`<span class="ci-badge active">Active</span>` : W`<button class="btn tiny" type="button" data-action="activate">Use</button>`}
                        <button class="btn tiny" type="button" data-action="edit">Edit</button>
                        <button class="btn tiny danger" type="button" data-action="delete">×</button>
                    </div>
                </div>
                ${i ? W`<div class="ci-edit-form">
                        <input type="text" class="ci-input" data-edit-field="label" value="${n.label}" />
                        <textarea class="ci-textarea" data-edit-field="instruction" rows="4">${n.instruction}</textarea>
                        <div class="ci-edit-actions">
                            <button class="btn small primary" type="button" data-action="save-edit">Save</button>
                            <button class="btn small" type="button" data-action="cancel-edit">Cancel</button>
                        </div>
                    </div>` : W`<div class="ci-item-preview">${u(n.instruction, 120)}</div>`}
            </div>`;
			o.addEventListener("click", (r) => {
				let i = r.target.closest("[data-action]")?.getAttribute("data-action");
				if (i === "activate" && (n.id, void 0).then(d).then(() => e.onUpdate?.()), i === "edit" && (t.editingId = n.id, c()), i === "delete" && confirm(`Delete "${n.label}"?`) && Fl(n.id).then(d).then(() => e.onUpdate?.()), i === "save-edit") {
					let r = o.querySelector("[data-edit-field='label']"), i = o.querySelector("[data-edit-field='instruction']");
					Pl(n.id, {
						label: r.value.trim() || n.label,
						instruction: i.value.trim()
					}).then(() => (t.editingId = null, d())).then(() => e.onUpdate?.());
				}
				i === "cancel-edit" && (t.editingId = null, c());
			}), r.append(o);
		}
	}, l = () => {
		i.replaceChildren(), i.append(W`<option value="">None (use default)</option>`);
		for (let e of t.instructions) {
			let n = W`<option value="${e.id}">${e.label}</option>`;
			e.id === t.activeId && (n.selected = !0), i.append(n);
		}
	}, u = (e, t) => !e || e.length <= t ? e || "" : e.slice(0, t).trim() + "…", d = async () => {
		let e = await jl();
		t.instructions = e.instructions, t.activeId = e.activeId, c(), l();
	};
	return n.addEventListener("click", (n) => {
		let r = n.target.closest("[data-action]")?.getAttribute("data-action");
		if (r === "add" && (t.isAdding = !0, a.hidden = !1, o.value = "", s.value = "", o.focus()), r === "cancel-add" && (t.isAdding = !1, a.hidden = !0), r === "save-new") {
			let n = o.value.trim(), r = s.value.trim();
			if (!r) {
				s.focus();
				return;
			}
			Ml(n || "Custom", r).then((e) => {
				if (e) return t.isAdding = !1, a.hidden = !0, d();
			}).then(() => e.onUpdate?.());
		}
		if (r === "add-templates") {
			let n = new Set(t.instructions.map((e) => e.label.trim().toLowerCase())), r = Il.filter((e) => !n.has(e.label.trim().toLowerCase()));
			if (!r.length) {
				alert("All templates are already added.");
				return;
			}
			Nl(r.map((e) => ({
				label: e.label,
				instruction: e.instruction,
				enabled: e.enabled
			}))).then(d).then(() => e.onUpdate?.());
		}
	}), i.addEventListener("change", () => {
		(i.value, void 0).then(d).then(() => e.onUpdate?.());
	}), d(), n;
}, Rl = (e) => W`<section class="card settings-tab-panel" data-tab-panel="instructions" data-section="instructions">
      <h3>Recognition Instructions</h3>
      <div data-custom-instructions="editor">
        ${Ll({ onUpdate: () => e("Instructions updated.") })}
      </div>
    </section>`, zl = () => W`<section class="card settings-tab-panel" data-tab-panel="extension" data-section="extension" hidden>
      <h3>Extension</h3>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="core.ntpEnabled" />
        <span>Enable New Tab Page (offline Basic)</span>
      </label>
    </section>`, Bl = (r) => {
	tr(qr);
	let i = null, a = (e) => {
		i && (i.textContent = e, e && setTimeout(() => i && (i.textContent = ""), 1500));
	}, o = W`<div class="view-settings">
    ${wl()}
    <div class="settings-screen__body">
      ${Tl()}
      ${El()}
      ${Dl()}
      ${Ol()}
      ${kl()}
      ${Rl(a)}
      ${zl()}
    </div>
    ${Cl()}
  </div>`, s = (e) => o.querySelector(e);
	i = o.querySelector("[data-note]");
	let c = s("[data-field=\"ai.baseUrl\"]"), l = s("[data-field=\"ai.apiKey\"]"), u = s("[data-field=\"ui.showKey\"]"), d = s("[data-field=\"ai.model\"]"), f = s("[data-field=\"ai.customModel\"]"), p = o.querySelector("[data-field-group=\"ai.customModel\"]"), m = s("[data-field=\"ai.defaultReasoningEffort\"]"), h = s("[data-field=\"ai.defaultVerbosity\"]"), g = s("[data-field=\"ai.maxOutputTokens\"]"), _ = s("[data-field=\"ai.contextTruncation\"]"), v = s("[data-field=\"ai.promptCacheRetention\"]"), y = s("[data-field=\"ai.maxToolCalls\"]"), b = s("[data-field=\"ai.parallelToolCalls\"]"), x = s("[data-field=\"ai.requestTimeout.low\"]"), S = s("[data-field=\"ai.requestTimeout.medium\"]"), ee = s("[data-field=\"ai.requestTimeout.high\"]"), C = s("[data-field=\"ai.maxRetries\"]"), w = s("[data-field=\"ai.shareTargetMode\"]"), te = () => {
		let e = (d?.value || "").trim() === "custom";
		p && (p.hidden = !e), f && (f.disabled = !e);
	};
	if (d) {
		d.replaceChildren();
		for (let e of Nc) {
			let t = document.createElement("option");
			t.value = e, t.textContent = e, d.append(t);
		}
		let e = document.createElement("option");
		e.value = "custom", e.textContent = "Custom...", d.append(e), d.addEventListener("change", te);
	}
	f?.addEventListener("focus", () => {
		d && (d.value = "custom", te());
	});
	let T = s("[data-field=\"ai.autoProcessShared\"]"), E = s("[data-field=\"ai.responseLanguage\"]"), ne = s("[data-field=\"ai.translateResults\"]"), re = s("[data-field=\"ai.generateSvgGraphics\"]"), D = s("[data-field=\"speech.language\"]"), O = s("[data-field=\"appearance.theme\"]"), ie = s("[data-field=\"appearance.fontSize\"]"), ae = s("[data-field=\"appearance.markdown.preset\"]"), oe = s("[data-field=\"appearance.markdown.fontFamily\"]"), se = s("[data-field=\"appearance.markdown.fontSizePx\"]"), k = s("[data-field=\"appearance.markdown.lineHeight\"]"), A = s("[data-field=\"appearance.markdown.contentMaxWidthPx\"]"), ce = s("[data-field=\"appearance.markdown.printScale\"]"), le = s("[data-field=\"appearance.markdown.page.size\"]"), ue = s("[data-field=\"appearance.markdown.page.orientation\"]"), de = s("[data-field=\"appearance.markdown.page.marginMm\"]"), j = s("[data-field=\"appearance.markdown.modules.typography\"]"), fe = s("[data-field=\"appearance.markdown.modules.lists\"]"), M = s("[data-field=\"appearance.markdown.modules.tables\"]"), pe = s("[data-field=\"appearance.markdown.modules.codeBlocks\"]"), me = s("[data-field=\"appearance.markdown.modules.blockquotes\"]"), N = s("[data-field=\"appearance.markdown.modules.media\"]"), he = s("[data-field=\"appearance.markdown.modules.printBreaks\"]"), P = s("[data-field=\"appearance.markdown.plugins.smartTypography\"]"), ge = s("[data-field=\"appearance.markdown.plugins.softBreaksAsBr\"]"), _e = s("[data-field=\"appearance.markdown.plugins.externalLinksNewTab\"]"), ve = o.querySelector("[data-field=\"appearance.markdown.customCss\"]"), ye = o.querySelector("[data-field=\"appearance.markdown.printCss\"]"), be = o.querySelector("[data-field=\"appearance.markdown.extensions\"]"), xe = s("[data-field=\"core.ntpEnabled\"]"), F = s("[data-field=\"core.mode\"]"), I = s("[data-field=\"core.endpointUrl\"]"), Se = s("[data-field=\"core.userId\"]"), Ce = s("[data-field=\"core.userKey\"]"), we = s("[data-field=\"core.preferBackendSync\"]"), Te = s("[data-field=\"core.encrypt\"]"), Ee = s("[data-field=\"core.appClientId\"]"), L = s("[data-field=\"core.allowInsecureTls\"]"), De = s("[data-field=\"core.ops.allowUnencrypted\"]"), Oe = s("[data-field=\"core.admin.httpsOrigin\"]"), ke = s("[data-field=\"core.admin.httpOrigin\"]"), Ae = s("[data-field=\"core.admin.path\"]"), je = s("[data-field=\"core.useCoreIdentityForAirPad\"]"), Me = s("[data-field=\"core.socket.accessToken\"]"), Ne = s("[data-field=\"core.socket.routeTarget\"]"), Pe = s("[data-field=\"core.socket.clientAccessToken\"]"), Fe = s("[data-field=\"core.socket.allowAccessTokenWithoutUserKey\"]"), Ie = s("[data-field=\"shell.maintainHubSocketConnection\"]"), Le = s("[data-field=\"shell.clipboardBroadcastTargets\"]"), R = s("[data-field=\"shell.pushLocalClipboardToLan\"]"), Re = s("[data-field=\"shell.clipboardPushIntervalMs\"]"), ze = s("[data-field=\"shell.enableRemoteClipboardBridge\"]"), z = s("[data-field=\"shell.acceptInboundClipboardData\"]"), Be = s("[data-field=\"shell.clipboardInboundAllowIds\"]"), Ve = s("[data-field=\"shell.accessTokenBypassesClipboardAllowlist\"]"), He = s("[data-field=\"shell.clipboardShareDestinationIds\"]"), Ue = s("[data-field=\"shell.applyRemoteClipboardToDevice\"]"), We = s("[data-field=\"shell.acceptContactsBridgeData\"]"), Ge = s("[data-field=\"shell.acceptSmsBridgeData\"]"), Ke = s("[data-field=\"shell.enableNativeSms\"]"), qe = s("[data-field=\"shell.enableNativeContacts\"]"), Je = o.querySelector("[data-admin-preview]"), Ye = o.querySelector("[data-mcp-section]"), Xe = o.querySelector("[data-section=\"extension\"]"), Ze = o.querySelector("[data-extension-tab]");
	if (E) {
		E.replaceChildren();
		let e = document.createElement("option");
		e.value = "auto", e.textContent = "Auto-detect", E.append(e);
		let t = document.createElement("option");
		t.value = "follow", t.textContent = "Follow source/context", E.append(t);
		for (let e of hl()) {
			let t = document.createElement("option");
			t.value = e, t.textContent = e === "ru" ? "Russian" : e === "en" ? "English" : e, E.append(t);
		}
	}
	if (D) {
		D.replaceChildren();
		for (let e of ml()) {
			let t = document.createElement("option");
			t.value = e, t.textContent = fl(e), D.append(t);
		}
	}
	o.addEventListener("input", (e) => {
		e.target?.matches?.("[data-field^=\"core.\"]") && tt();
	}), o.addEventListener("change", (e) => {
		e.target?.matches?.("[data-field^=\"core.\"]") && tt();
	});
	let Qe = (e) => {
		let t = e || "ai";
		o.querySelector("[data-settings-tabs]")?.setAttribute("data-active-tab", t);
		let n = o.querySelectorAll("[data-action=\"switch-settings-tab\"][data-tab]");
		for (let e of Array.from(n)) {
			let n = e, r = n.getAttribute("data-tab") === t;
			n.classList.toggle("is-active", r), n.setAttribute("aria-selected", String(r));
		}
		let r = o.querySelectorAll("[data-tab-panel]");
		for (let e of Array.from(r)) {
			let n = e, r = n.getAttribute("data-tab-panel") === t;
			n.hidden && r || n.classList.toggle("is-active", r);
		}
	}, $e = (e) => {
		let t = (e || "").trim().toLowerCase();
		return t ? t === "style" || t === "styles" || t === "styling" ? "markdown" : new Set([
			"appearance",
			"markdown",
			"ai",
			"mcp",
			"server",
			"instructions",
			"extension"
		]).has(t) ? t : "ai" : "ai";
	}, et = () => ({
		mode: F?.value || "native",
		endpointUrl: I?.value?.trim() || "",
		userId: Se?.value?.trim() || "",
		userKey: Ce?.value?.trim() || "",
		encrypt: !!Te?.checked,
		preferBackendSync: (we?.checked ?? !0) !== !1,
		appClientId: Ee?.value?.trim() || "",
		allowInsecureTls: !!L?.checked,
		useCoreIdentityForAirPad: (je?.checked ?? !0) !== !1,
		socket: {
			accessToken: Me?.value?.trim() || "",
			routeTarget: Ne?.value?.trim() || "",
			selfId: "",
			clientAccessToken: Pe?.value?.trim() || "",
			allowAccessTokenWithoutUserKey: !!Fe?.checked
		},
		admin: {
			httpsOrigin: Oe?.value?.trim() || "",
			httpOrigin: ke?.value?.trim() || "",
			path: Ae?.value?.trim() || "/"
		},
		ops: { allowUnencrypted: !!De?.checked }
	}), tt = () => {
		if (!Je) return;
		let e = Pc(et());
		Je.textContent = `Resolved: ${e.https} · ${e.http}`;
	}, nt = (e) => {
		try {
			zc(Lc.EXPLORER_PATH, e), Bc("explorer"), Ic({
				type: "content-explorer",
				destination: "explorer",
				data: {
					action: "view",
					path: e
				},
				metadata: { source: "settings" }
			}), a(`Explorer: ${e}`);
		} catch (e) {
			console.warn("[Settings] Failed to open explorer path:", e), a("Failed to open Explorer path.");
		}
	};
	if (t().then((e) => {
		c && (c.value = (e?.ai?.baseUrl || "").trim()), l && (l.value = (e?.ai?.apiKey || "").trim());
		let t = (e?.ai?.model || "gpt-5.4").trim(), i = (e?.ai?.customModel || "").trim();
		if (d) {
			let e = Nc.includes(t);
			t === "custom" || !e && t ? (d.value = "custom", f && (f.value = i || t)) : (d.value = e ? t : "gpt-5.4", f && (f.value = i)), te();
		}
		if (m && (m.value = e?.ai?.defaultReasoningEffort || "medium"), h && (h.value = e?.ai?.defaultVerbosity || "medium"), g && (g.value = String(e?.ai?.maxOutputTokens ?? 4e5)), _ && (_.value = e?.ai?.contextTruncation || "disabled"), v && (v.value = e?.ai?.promptCacheRetention || "in-memory"), y && (y.value = String(e?.ai?.maxToolCalls ?? 8)), b && (b.checked = (e?.ai?.parallelToolCalls ?? !0) !== !1), x && (x.value = String(e?.ai?.requestTimeout?.low ?? 6e4)), S && (S.value = String(e?.ai?.requestTimeout?.medium ?? 3e5)), ee && (ee.value = String(e?.ai?.requestTimeout?.high ?? 9e5)), C && (C.value = String(e?.ai?.maxRetries ?? 2)), w && (w.value = e?.ai?.shareTargetMode || "recognize"), T && (T.checked = (e?.ai?.autoProcessShared ?? !0) !== !1), E && (E.value = e?.ai?.responseLanguage || "auto"), ne && (ne.checked = !!e?.ai?.translateResults), re && (re.checked = !!e?.ai?.generateSvgGraphics), D && (D.value = e?.speech?.language || "en-US"), O && (O.value = e?.appearance?.theme || "auto"), ie && (ie.value = e?.appearance?.fontSize || "medium"), ae && (ae.value = e?.appearance?.markdown?.preset || "default"), oe && (oe.value = e?.appearance?.markdown?.fontFamily || "system"), se && (se.value = String(e?.appearance?.markdown?.fontSizePx ?? 16)), k && (k.value = String(e?.appearance?.markdown?.lineHeight ?? 1.7)), A && (A.value = String(e?.appearance?.markdown?.contentMaxWidthPx ?? 860)), ce && (ce.value = String(e?.appearance?.markdown?.printScale ?? 1)), le && (le.value = e?.appearance?.markdown?.page?.size || "auto"), ue && (ue.value = e?.appearance?.markdown?.page?.orientation || "portrait"), de && (de.value = String(e?.appearance?.markdown?.page?.marginMm ?? 12)), j && (j.checked = (e?.appearance?.markdown?.modules?.typography ?? !0) !== !1), fe && (fe.checked = (e?.appearance?.markdown?.modules?.lists ?? !0) !== !1), M && (M.checked = (e?.appearance?.markdown?.modules?.tables ?? !0) !== !1), pe && (pe.checked = (e?.appearance?.markdown?.modules?.codeBlocks ?? !0) !== !1), me && (me.checked = (e?.appearance?.markdown?.modules?.blockquotes ?? !0) !== !1), N && (N.checked = (e?.appearance?.markdown?.modules?.media ?? !0) !== !1), he && (he.checked = (e?.appearance?.markdown?.modules?.printBreaks ?? !0) !== !1), P && (P.checked = !!e?.appearance?.markdown?.plugins?.smartTypography), ge && (ge.checked = !!e?.appearance?.markdown?.plugins?.softBreaksAsBr), _e && (_e.checked = (e?.appearance?.markdown?.plugins?.externalLinksNewTab ?? !0) !== !1), ve && (ve.value = (e?.appearance?.markdown?.customCss || "").trim()), ye && (ye.value = (e?.appearance?.markdown?.printCss || "").trim()), be) {
			let t = Array.isArray(e?.appearance?.markdown?.extensions) ? e.appearance?.markdown?.extensions : [];
			be.value = t.length > 0 ? JSON.stringify(t, null, 2) : "";
		}
		if (xe && (xe.checked = !!e?.core?.ntpEnabled), F && (F.value = e?.core?.mode || "native"), I && (I.value = (e?.core?.endpointUrl || "").trim()), Se && (Se.value = (e?.core?.userId || "").trim()), Ce && (Ce.value = (e?.core?.userKey || "").trim()), we && (we.checked = (e?.core?.preferBackendSync ?? !0) !== !1), Te && (Te.checked = !!e?.core?.encrypt), Ee && (Ee.value = (e?.core?.appClientId || "").trim()), je && (je.checked = (e?.core?.useCoreIdentityForAirPad ?? !0) !== !1), Me && (Me.value = (e?.core?.socket?.accessToken || e?.core?.socket?.airpadAuthToken || "").trim()), Ne && (Ne.value = (e?.core?.socket?.routeTarget || e?.core?.socket?.selfId || "").trim()), Pe && (Pe.value = (e?.core?.socket?.clientAccessToken || "").trim()), Fe && (Fe.checked = (e?.core?.socket?.allowAccessTokenWithoutUserKey ?? !1) === !0), L && (L.checked = !!e?.core?.allowInsecureTls), De && (De.checked = !!e?.core?.ops?.allowUnencrypted), Oe && (Oe.value = (e?.core?.admin?.httpsOrigin || "").trim()), ke && (ke.value = (e?.core?.admin?.httpOrigin || "").trim()), Ae && (Ae.value = (e?.core?.admin?.path || "/").trim() || "/"), Ie && (Ie.checked = !!e?.shell?.maintainHubSocketConnection), Le && (Le.value = (e?.shell?.clipboardBroadcastTargets || "").trim()), R && (R.checked = !!e?.shell?.pushLocalClipboardToLan), Re) {
			let t = Number(e?.shell?.clipboardPushIntervalMs);
			Re.value = String(Number.isFinite(t) && t >= 800 ? Math.min(Math.round(t), 6e4) : 2e3);
		}
		ze && (ze.checked = (e?.shell?.enableRemoteClipboardBridge ?? !0) !== !1), z && (z.checked = (e?.shell?.acceptInboundClipboardData ?? !0) !== !1), Be && (Be.value = (e?.shell?.clipboardInboundAllowIds || "").trim()), Ve && (Ve.checked = (e?.shell?.accessTokenBypassesClipboardAllowlist ?? !1) === !0), He && (He.value = (e?.shell?.clipboardShareDestinationIds || "").trim()), Ue && (Ue.checked = (e?.shell?.applyRemoteClipboardToDevice ?? !0) !== !1), We && (We.checked = (e?.shell?.acceptContactsBridgeData ?? !1) === !0), Ge && (Ge.checked = (e?.shell?.acceptSmsBridgeData ?? !1) === !0), Ke && (Ke.checked = (e?.shell?.enableNativeSms ?? !0) !== !1), qe && (qe.checked = (e?.shell?.enableNativeContacts ?? !0) !== !1), tt(), Sl(Ye, Array.isArray(e?.ai?.mcp) ? e.ai.mcp : []), ul(e), n(e), r.onTheme?.(e?.appearance?.theme || "auto");
	}).catch(() => {
		Sl(Ye, []);
	}), u?.addEventListener("change", () => {
		!l || !u || (l.type = u.checked ? "text" : "password");
	}), O?.addEventListener("change", () => {
		let e = O.value || "auto";
		(async () => {
			try {
				let r = await t();
				n({
					...r,
					appearance: {
						...r.appearance || {},
						theme: e
					}
				});
			} catch {
				n({ appearance: {
					theme: e,
					fontSize: "medium"
				} });
			}
			r.onTheme?.(e);
		})();
	}), o.addEventListener("click", (i) => {
		let o = i.target, s = o?.closest?.("button[data-action=\"switch-settings-tab\"]");
		if (s) {
			Qe(s.getAttribute("data-tab") || "ai");
			return;
		}
		if (o?.closest?.("button[data-action=\"add-mcp-server\"]") && Ye) {
			Ye.querySelector(".mcp-empty-note")?.remove(), Ye.appendChild(bl({
				id: `mcp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
				serverLabel: "",
				origin: "",
				clientKey: "",
				secretKey: ""
			}));
			return;
		}
		let u = o?.closest?.("button[data-action=\"remove-mcp-server\"]");
		if (u) {
			u.closest(".mcp-row")?.remove(), Ye && !Ye.querySelector("[data-mcp-id]") && Sl(Ye, []);
			return;
		}
		if (o?.closest?.("button[data-action=\"open-user-styles\"]")) {
			nt("/user/styles/");
			return;
		}
		if (o?.closest?.("button[data-action=\"open-assets-readonly\"]")) {
			nt("/assets/");
			return;
		}
		if (o?.closest?.("button[data-action=\"open-admin-https\"]")) {
			Fc(et(), "https");
			return;
		}
		if (o?.closest?.("button[data-action=\"open-admin-http\"]")) {
			Fc(et(), "http");
			return;
		}
		if (o?.closest?.("button[data-action=\"copy-admin-https\"]")) {
			let e = Pc(et());
			navigator.clipboard?.writeText?.(e.https).then(() => a("HTTPS admin URL copied."), () => a("Copy failed."));
			return;
		}
		if (o?.closest?.("button[data-action=\"copy-admin-http\"]")) {
			let e = Pc(et());
			navigator.clipboard?.writeText?.(e.http).then(() => a("HTTP admin URL copied."), () => a("Copy failed."));
			return;
		}
		if (o?.closest?.("button[data-action=\"open-native-app-settings\"]")) {
			import("./clipboard-device-ChwC_AGH.js").then((e) => e.openAppClipboardRelatedSettings()).then(() => a("App settings opened (native shell only).")).catch(() => a("Native settings unavailable in this context."));
			return;
		}
		if (o?.closest?.("button[data-action=\"open-native-notification-settings\"]")) {
			import("./clipboard-device-ChwC_AGH.js").then((e) => e.openNativeNotificationSettings?.()).then(() => a("Notification settings opened (native shell only).")).catch(() => a("Native settings unavailable in this context."));
			return;
		}
		o?.closest?.("button[data-action=\"save\"]") && (async () => {
			let i = await t(), o = [], s = be?.value?.trim() || "";
			if (s) try {
				let e = JSON.parse(s);
				if (!Array.isArray(e)) throw Error("Markdown extensions JSON must be an array.");
				o = e;
			} catch (e) {
				Qe("markdown"), a(e?.message || "Invalid Markdown extensions JSON.");
				return;
			}
			let u = await e({
				ai: {
					baseUrl: c?.value?.trim?.() || "",
					apiKey: l?.value?.trim?.() || "",
					model: d?.value || "gpt-5.4",
					customModel: d?.value === "custom" && f?.value?.trim?.() || "",
					defaultReasoningEffort: m?.value || "medium",
					defaultVerbosity: h?.value || "medium",
					maxOutputTokens: gl(g?.value, 4e5),
					contextTruncation: _?.value || "disabled",
					promptCacheRetention: v?.value || "in-memory",
					maxToolCalls: gl(y?.value, 8),
					parallelToolCalls: (b?.checked ?? !0) !== !1,
					requestTimeout: {
						low: gl(x?.value, 6e4),
						medium: gl(S?.value, 3e5),
						high: gl(ee?.value, 9e5)
					},
					maxRetries: gl(C?.value, 2),
					shareTargetMode: w?.value || "recognize",
					autoProcessShared: (T?.checked ?? !0) !== !1,
					responseLanguage: E?.value || "auto",
					translateResults: !!ne?.checked,
					generateSvgGraphics: !!re?.checked,
					mcp: xl(Ye)
				},
				speech: { language: D?.value || "en-US" },
				core: {
					...i.core,
					ntpEnabled: yl(xe, !!i.core?.ntpEnabled),
					mode: vl(F, i.core?.mode || "native") || "native",
					endpointUrl: vl(I, i.core?.endpointUrl || ""),
					userId: vl(Se, i.core?.userId || ""),
					userKey: vl(Ce, i.core?.userKey || ""),
					encrypt: yl(Te, !!i.core?.encrypt),
					preferBackendSync: yl(we, (i.core?.preferBackendSync ?? !0) !== !1),
					appClientId: vl(Ee, i.core?.appClientId || ""),
					allowInsecureTls: yl(L, !!i.core?.allowInsecureTls),
					useCoreIdentityForAirPad: yl(je, (i.core?.useCoreIdentityForAirPad ?? !0) !== !1),
					socket: (() => {
						let e = { ...i.core?.socket || {} };
						return delete e.airpadAuthToken, {
							...e,
							accessToken: vl(Me, i.core?.socket?.accessToken || i.core?.socket?.airpadAuthToken || ""),
							routeTarget: vl(Ne, i.core?.socket?.routeTarget || ""),
							selfId: "",
							clientAccessToken: vl(Pe, i.core?.socket?.clientAccessToken || ""),
							allowAccessTokenWithoutUserKey: yl(Fe, !!i.core?.socket?.allowAccessTokenWithoutUserKey)
						};
					})(),
					admin: {
						...i.core?.admin || {},
						httpsOrigin: vl(Oe, i.core?.admin?.httpsOrigin || ""),
						httpOrigin: vl(ke, i.core?.admin?.httpOrigin || ""),
						path: vl(Ae, i.core?.admin?.path || "/") || "/"
					},
					ops: {
						...i.core?.ops || {},
						allowUnencrypted: yl(De, !!i.core?.ops?.allowUnencrypted)
					}
				},
				shell: {
					...i.shell || {},
					maintainHubSocketConnection: yl(Ie, !!i.shell?.maintainHubSocketConnection),
					clipboardBroadcastTargets: vl(Le, i.shell?.clipboardBroadcastTargets || ""),
					pushLocalClipboardToLan: yl(R, !!i.shell?.pushLocalClipboardToLan),
					clipboardPushIntervalMs: (() => {
						let e = Re?.value, t = gl(e, i.shell?.clipboardPushIntervalMs ?? 2e3);
						return Math.min(6e4, Math.max(800, Math.round(t)));
					})(),
					enableRemoteClipboardBridge: yl(ze, (i.shell?.enableRemoteClipboardBridge ?? !0) !== !1),
					acceptInboundClipboardData: yl(z, (i.shell?.acceptInboundClipboardData ?? !0) !== !1),
					clipboardInboundAllowIds: vl(Be, i.shell?.clipboardInboundAllowIds || ""),
					accessTokenBypassesClipboardAllowlist: yl(Ve, !!i.shell?.accessTokenBypassesClipboardAllowlist),
					clipboardShareDestinationIds: vl(He, i.shell?.clipboardShareDestinationIds || ""),
					applyRemoteClipboardToDevice: yl(Ue, (i.shell?.applyRemoteClipboardToDevice ?? !0) !== !1),
					acceptContactsBridgeData: yl(We, !!i.shell?.acceptContactsBridgeData),
					acceptSmsBridgeData: yl(Ge, !!i.shell?.acceptSmsBridgeData),
					enableNativeSms: yl(Ke, (i.shell?.enableNativeSms ?? !0) !== !1),
					enableNativeContacts: yl(qe, (i.shell?.enableNativeContacts ?? !0) !== !1)
				},
				appearance: {
					theme: O?.value || "auto",
					fontSize: ie?.value || "medium",
					markdown: {
						preset: ae?.value || "default",
						fontFamily: oe?.value || "system",
						fontSizePx: gl(se?.value, 16),
						lineHeight: _l(k?.value, 1.7, 1.1, 2.2),
						contentMaxWidthPx: gl(A?.value, 860),
						printScale: _l(ce?.value, 1, .5, 1.5),
						page: {
							size: le?.value || "auto",
							orientation: ue?.value || "portrait",
							marginMm: gl(de?.value, 12)
						},
						modules: {
							typography: (j?.checked ?? !0) !== !1,
							lists: (fe?.checked ?? !0) !== !1,
							tables: (M?.checked ?? !0) !== !1,
							codeBlocks: (pe?.checked ?? !0) !== !1,
							blockquotes: (me?.checked ?? !0) !== !1,
							media: (N?.checked ?? !0) !== !1,
							printBreaks: (he?.checked ?? !0) !== !1
						},
						plugins: {
							smartTypography: !!P?.checked,
							softBreaksAsBr: !!ge?.checked,
							externalLinksNewTab: (_e?.checked ?? !0) !== !1
						},
						customCss: ve?.value || "",
						printCss: ye?.value || "",
						extensions: o || []
					}
				}
			});
			import("./hub-socket-boot-C6ehiu8c.js").then((e) => e.applyHubSocketFromSettings(u)), n(u), r.onTheme?.(u.appearance?.theme || "auto"), a("Saved.");
		})().catch((e) => a(String(e)));
	}), r.isExtension) {
		Xe && (Xe.hidden = !1), Ze && (Ze.hidden = !1);
		let e = W`<div class="ext-note">Extension mode: settings are stored in <code>chrome.storage.local</code>.</div>`;
		o.append(e);
	}
	return Qe($e(r.initialTab)), te(), o;
}, Vl = /* @__PURE__ */ i({
	SettingsView: () => Ul,
	createView: () => Wl,
	default: () => Wl
}), Hl = {
	appearance: {
		theme: "auto",
		fontSize: "medium"
	},
	ai: { autoProcess: !0 },
	general: {
		autosave: !0,
		notifications: !0
	}
}, Ul = class {
	id = "settings";
	name = "Settings";
	icon = "gear";
	options;
	shellContext;
	element = null;
	settings = Lt(Hl);
	_sheet = null;
	lifecycle = {
		onMount: () => {
			this._sheet ??= tr(qr);
		},
		onUnmount: () => {
			nr(this._sheet);
		},
		onShow: () => {
			this._sheet ??= tr(qr);
		}
	};
	constructor(e = {}) {
		this.options = e, this.shellContext = e.shellContext;
	}
	render(e) {
		return e && (this.options = {
			...this.options,
			...e
		}, this.shellContext = e.shellContext || this.shellContext), this._sheet = tr(qr), this.loadSettings(), this.element = Bl({
			isExtension: !1,
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
		this.settings.value = { ...Hl };
	}
	saveSettings() {
		this.options.onSettingsChange?.(this.settings.value);
	}
	resetSettings() {
		this.settings.value = { ...Hl }, this.updateUI();
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
		if (e === Kr.Patch || e === Kr.SettingsUpdate) return this.handleMessage({ data: t }), (async () => {
			try {
				let [{ loadSettings: e }, { applyTheme: n }] = await Promise.all([import("./settings-config-DFzQedgk.js"), import("./theme-cdnKIk0j.js")]), r = await e(), i = t;
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
function Wl(e) {
	return new Ul(e);
}
//#endregion
//#region ../../projects/subsystem/types.ts
function Gl(e) {
	if (typeof e != "function" || typeof HTMLElement > "u") return !1;
	let t = e.prototype;
	return !!(t && HTMLElement.prototype.isPrototypeOf(t));
}
function Kl(e) {
	return !!(e && typeof e == "object" && typeof e.render == "function");
}
function ql(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Jl(e, t = {}) {
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
		if (Kl(e) || ql(e)) return e;
		if (Gl(e)) return new e();
		if (typeof e == "function") return e(t);
	}
	throw Error("View module must export default/createView or a named create*View factory");
}
function Yl(e, t = {}) {
	if (typeof HTMLElement < "u" && e instanceof HTMLElement) {
		let n = e;
		if (typeof n.render == "function") {
			let e = n.render(t);
			if (e instanceof HTMLElement) return e;
		}
		return e;
	}
	if (Kl(e)) return e.render(t);
	throw Error("renderViewInstance: unsupported view");
}
//#endregion
//#region ../../projects/subsystem/test/module-smoke.ts
var Xl = Vl;
if (!Xl.default && !Xl.createView) throw Error("settings-view must export default or createView");
if (typeof document < "u" && !(Yl(Jl(Xl, { id: "settings-view" }), { id: "settings-view" }) instanceof HTMLElement)) throw Error("settings-view did not render an HTMLElement");
//#endregion
