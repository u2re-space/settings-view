import { A as e, C as t, D as n, E as r, F as i, I as a, L as o, M as s, N as c, O as l, P as u, S as d, T as f, _ as p, a as m, b as h, c as g, d as _, f as v, g as y, h as b, j as x, k as S, l as C, o as w, p as T, s as ee, u as E, v as te, w as D, x as ne, y as O } from "./src-chZT6PF3.js";
//#region ../../projects/core.ts/src/utils/UserPath.ts
var k = (e) => {
	let t = String(e ?? "").trim();
	return t ? (t.startsWith("/") ? t : `/${t}`).replace(/\/+/g, "/") : "/";
}, re = (e) => {
	let t = k(e);
	return t === "/user" ? "/" : t.startsWith("/user/") ? t.slice(5) || "/" : t;
};
Symbol.observable ||= Symbol.for("observable"), Symbol.subscribe ||= Symbol.for("subscribe"), Symbol.unsubscribe ||= Symbol.for("unsubscribe");
var A = Symbol.for("@value"), j = Symbol.for("@extract"), ie = Symbol.for("@origin"), M = Symbol.for("@registry"), ae = Symbol.for("@behavior"), N = Symbol.for("@promise"), oe = Symbol.for("@trigger-less"), P = Symbol.for("@trigger-lock"), se = Symbol.for("@trigger-control"), F = Symbol.for("@trigger"), ce = Symbol.for("@subscribe"), I = Symbol.for("@isNotEqual"), le = Symbol.for("@realProp"), ue = /* @__PURE__ */ new WeakMap(), de = (e) => {
	let t = typeof e == "object" || typeof e == "function" ? e?.[j] ?? e : e, n = (e) => de(e);
	return Array.isArray(t) ? t?.map?.(n) || Array.from(t || [])?.map?.(n) || [] : t instanceof Map || t instanceof WeakMap ? new Map(Array.from(t?.entries?.() || [])?.map?.(([e, t]) => [e, de(t)])) : t instanceof Set || t instanceof WeakSet ? new Set(Array.from(t?.values?.() || [])?.map?.(n)) : t != null && typeof t == "function" || typeof t == "object" ? Object.fromEntries(Array.from(Object.entries(t || {}) || [])?.filter?.(([e]) => e != j && e != ie && e != M)?.map?.(([e, t]) => [e, de(t)])) : t;
}, fe = (e) => e?.[j] ?? e?.["@target"] ?? e, L = (e, t = !1) => {
	let r = e;
	if (n(e) || typeof e == "symbol") return e;
	if (e != null && (e instanceof WeakRef || "deref" in e && typeof e?.deref == "function") && (e = e?.deref?.()), e != null && (typeof e == "object" || typeof e == "function")) {
		e = fe(e);
		let n = t && D(e) && e?.value;
		if (n != null && (typeof n == "object" || typeof n == "function") && (e = n), r != e) return L(e, t);
	}
	return e;
}, pe = (e) => e != null && typeof e.then == "function", me = (e, t) => n(e) || typeof e == "function" ? t?.(e) : pe(e) ? e.then(t) : e?.promise && pe(e.promise) ? e.promise.then(t) : t?.(e), he = /* @__PURE__ */ new WeakMap(), ge = new FinalizationRegistry((e) => {
	e?.forEach?.((e) => e?.());
});
function R(e, t, n) {
	!n || typeof n != "function" || typeof e != "object" && typeof e != "function" || (t == Symbol.dispose ? he?.getOrInsertComputed?.(e, () => {
		let t = /* @__PURE__ */ new Set();
		return (typeof e == "object" || typeof e == "function") && (ge.register(e, t), he.set(e, t), e[Symbol.dispose] ??= () => t.forEach((e) => {
			e?.();
		})), t;
	})?.add?.(n) : e[t] = function(...r) {
		let i = e?.[t];
		typeof i == "function" && i.apply(this, r), n.apply(this, r);
	});
}
//#endregion
//#region ../../projects/object.ts/src/core/Subscript.ts
var _e = /* @__PURE__ */ new WeakMap(), ve = (e, t, n) => _e.getOrInsert(e, () => {
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
}), z = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new WeakMap(), xe = (e, t) => {
	let n = e?.[j] ?? e, r = z.get(n);
	return r ? r.bindSource(n) : (r = new Pe(n), z.set(n, r)), t;
}, Se = (e, t) => (e = L(e?.[j] ?? e), typeof e == "symbol" || !(typeof e == "object" || typeof e == "function") || e == null ? e : be.getOrInsertComputed(e, () => new Proxy(e, xe(e, t)))), Ce = Symbol.for("@allProps"), we = new Set(["*", "all"]), Te = new Map([
	["set", ["setter", "@set"]],
	["add", ["@add"]],
	["delete", ["@delete"]],
	["invalidate", ["@invalidate"]],
	["manual", ["@manual"]],
	["custom", ["@custom"]],
	["setAll", ["@setAll"]],
	["addAll", ["@addAll"]],
	["deleteAll", ["@deleteAll", "@clear"]]
]), Ee = new Map(Array.from(Te.entries()).flatMap(([e, t]) => t.map((t) => [t, e]))), De = (e = "set") => {
	if (e == null) return e;
	let t = String(e || "set");
	return Ee.get(t) ?? t;
}, Oe = (e) => {
	let t = e == null ? "all" : String(De(e) ?? "all");
	return [t, ...Te.get(t) ?? []];
}, ke = (e = ["*"]) => new Set([...Ae(e)].flatMap((e) => [e, ...Te.get(e) ?? []])), Ae = (e = ["*"]) => {
	let t = typeof e == "string" ? [e] : Array.from(e ?? ["*"]), n = new Set(t.map((e) => {
		let t = String(e || "*");
		return we.has(t) ? t : String(De(t) ?? t);
	}));
	return n.size ? n : new Set(["*"]);
}, je = (e, t) => {
	let n = e instanceof Set ? e : Ae(e);
	return [...we].some((e) => n.has(e)) || Oe(t).some((e) => n.has(e));
}, Me = (e) => !!e && typeof e == "object" && !Array.isArray(e) && ("affectTypes" in e || "triggers" in e || "triggerImmediately" in e), Ne = (e = ["*"]) => {
	if (Me(e)) return {
		affectTypes: Ae(e.affectTypes ?? e.triggers ?? ["*"]),
		triggerImmediately: e.triggerImmediately !== !1
	};
	let t = Ae(e);
	return {
		affectTypes: t,
		triggerImmediately: je(t, "initial")
	};
}, Pe = class {
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
			return ve(e, t, n);
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
		r = De(r) ?? r;
		let a = this.#t, o = a?.size ? Array.from(a.entries()).map(([a, o]) => {
			if ((o.prop === e || o.prop === Ce || o.prop === null) && je(o.triggers, r)) return this.$safeExec(a, t, e, n, r, ...i);
		}).filter((e) => e && typeof e.then == "function") : [];
		if (ye.size) {
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
			for (let [e, t] of ye.entries()) if (je(t, r)) {
				let t = this.$safeExec(e, a);
				t && typeof t.then == "function" && o.push(t);
			}
		}
		return o.length ? Promise.allSettled(o) : void 0;
	}
	wrap(e) {
		return Array.isArray(e) ? Se(e, this) : e;
	}
	get triggerControl() {
		return this.#s;
	}
	isTriggerEnabled(e) {
		return !je(this.#o, "all") && !Oe(e).some((e) => this.#o.has(e));
	}
	setTriggersEnabled(e = ["*"], t = !0) {
		let n = ke(e);
		for (let e of n) t ? this.#o.delete(e) : this.#o.add(e);
	}
	withTriggers(e, t, n) {
		let r = [...ke(e)], i = new Map(r.map((e) => [e, this.#o.has(e)])), a = () => {
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
		let r = Ne(n);
		return this.#t.set(e, {
			prop: t || Ce,
			triggers: r.affectTypes
		}), () => this.unaffected(e, t || Ce);
	}
	unaffected(e, t) {
		if (e != null && typeof e == "function") {
			let n = this.#t, r = n?.get(e);
			if (r && (r.prop == t || t == null || t == Ce)) return n.delete(e), () => this.affected(e, t || Ce, r.triggers);
		}
		return this.#t.clear();
	}
	trigger(e, t, n, r = "set", ...i) {
		if (typeof e == "symbol" || (r === void 0 && (r = "set"), r = De(r) ?? r, !this.isTriggerEnabled(r))) return;
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
}, Fe = new Set([
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
]), Ie = (e, t) => {
	if (!Fe.has(t)) return null;
	let n = B(e, t);
	return typeof n == "function" ? g(e, n) : n;
}, Le = /* @__PURE__ */ new WeakMap();
function Re(e, t) {
	let n = !0;
	try {
		Le?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), Le?.get?.(e)?.has?.(t) && (n = !0), n = typeof Reflect.getOwnPropertyDescriptor(e, t)?.get == "function";
	} catch {
		n = !0;
	} finally {
		Le?.get?.(e)?.delete?.(t);
	}
	return n;
}
var ze = (e, t) => {
	if (n(e)) return e;
	let r = B(e, t);
	if (r == null && t != "value") {
		let i = B(e, "value");
		return i != null && !n(i) ? ze(i, t) : r;
	} else if (t == "value" && r != null && !n(r) && typeof r != "function") return ze(r, t) ?? r ?? e;
	return r ?? e;
}, Be = (e, t, n) => {
	if (e == null) return !1;
	let r = __safeSetGuard.getOrInsert(e, /* @__PURE__ */ new Set());
	return r?.has?.(t) ? !1 : (r?.add?.(t), Reflect.set(e, t, n));
}, B = (e, t, n) => {
	let r;
	if (e == null) return e;
	let i = Le.getOrInsert(e, /* @__PURE__ */ new Set());
	if (i?.has?.(t)) return null;
	if (!Re(e, t)) r ??= Reflect.get(e, t, n ?? e);
	else {
		i?.add?.(t);
		try {
			r = Reflect.get(e, t, n ?? e);
		} catch {
			r = void 0;
		} finally {
			i.delete(t), i?.size === 0 && Le?.delete?.(e);
		}
	}
	return typeof r == "function" ? g(e, r) : r;
}, Ve = (e, t) => Object.prototype.hasOwnProperty.call(e, t), He = (e, t = !1) => !!e && typeof e == "object" && !Array.isArray(e) && (Ve(e, "key") || Ve(e, "name") || Ve(e, "oldValue") || Ve(e, "old") || Ve(e, "op") || Ve(e, "trigger") || t && Ve(e, "value")), Ue = (e, t, n) => Ve(e, t) ? e[t] : t == "oldValue" && Ve(e, "old") ? e.old : n(), We = (e, t = "manual") => De(e.trigger ?? e.op ?? t), Ge = (e) => typeof e == "string" || typeof e == "number" || typeof e == "symbol", Ke = (e) => {
	let t = B(e, le) ?? B(e, "realProp");
	return Ge(t) ? t : null;
}, qe = (e, t) => t == "value" ? Ke(e) ?? t : t, Je = (e, t) => {
	let n = Ke(e);
	return n != null && t == n ? B(e, "value") ?? B(e, A) ?? B(e, t) : t == null ? void 0 : B(e, t);
}, Ye = (e, t) => {
	let n = (e, n, r) => (He(n) || (r ??= n), t(He(e) ? e : He(n, !0) ? {
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
}, Xe = (e, t, r) => {
	if (e == null || n(e)) return e;
	if (([
		"deref",
		"bind",
		"@target",
		ie,
		j,
		M
	]?.indexOf(t) < 0 ? B(e, t)?.bind?.(e) : null) != null) return null;
	if ([j, ie].indexOf(t) >= 0) return B(e, t) ?? e;
	if (t == A) return B(e, t) ?? B(e, "value");
	if (t == M) return r;
	if (t == se) return r?.triggerControl;
	if (t == Symbol.observable) return r?.compatible;
	if (t == Symbol.subscribe) return (t, n, r) => V(n == null ? e : [e, n], t, r);
	if (t == Symbol.iterator || t == Symbol.asyncIterator) return B(e, t);
	if (t == Symbol.dispose) return (t) => {
		B(e, Symbol.dispose)?.(t), It(t == null ? e : [e, t]);
	};
	if (t == Symbol.asyncDispose) return (t) => {
		B(e, Symbol.asyncDispose)?.(t), It(t == null ? e : [e, t]);
	};
	if (t == Symbol.unsubscribe) return (t) => It(t == null ? e : [e, t]);
	if (typeof t == "symbol" && (t in e || B(e, t) != null)) return B(e, t);
}, Ze = (e, t, n) => {
	if (t == "subscribe") return n?.compatible?.[t] ?? ((t) => {
		if (typeof t == "function") return V(e, t);
		if ("next" in t && t?.next != null) {
			let n = V(e, t?.next), r = t?.complete;
			return t.complete = (...e) => (n?.(), r?.(...e)), t.complete;
		}
	});
}, Qe = class {
	#e;
	#t;
	#n;
	constructor(e, t, n) {
		this.#e = e, this.#t = t, this.#n = n;
	}
	get(e, t, n) {
		return Ie(e, t) ?? Reflect.get(e, t, n);
	}
	apply(e, t, n) {
		let r = [], i = [], a = [], o = [...this.#t], s = -1, c = Reflect.apply(e, t || this.#t, n);
		if (this.#n?.[P]) return Array.isArray(c) ? at(c) : c;
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
				for (let e = 0; e < o.length; e++) T(o[e], this.#t[e]) && a.push([
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
		return r?.length == 1 ? l?.trigger?.(s, r[0], null, r[0] == null ? "add" : "set") : r?.length > 1 && (l?.trigger?.(s, r, null, "addAll"), r.forEach((e, t) => l?.trigger?.(s + t, e, null, e == null ? "add" : "set"))), a?.length == 1 ? l?.trigger?.(a[0]?.[0] ?? s, a[0]?.[1], a[0]?.[2], a[0]?.[2] == null ? "add" : "set") : a?.length > 1 && (l?.trigger?.(s, a, o, "setAll"), a.forEach((e, t) => l?.trigger?.(e?.[0] ?? s + t, e?.[1], e?.[2], e?.[2] == null ? "add" : "set"))), i?.length == 1 ? l?.trigger?.(s, null, i[0], i[0] == null ? "add" : "delete") : i?.length > 1 && (l?.trigger?.(s, null, i, "deleteAll"), i.forEach((e, t) => l?.trigger?.(s + t, null, e, e == null ? "add" : "delete"))), c == e ? new Proxy(c, this.#n) : Array.isArray(c) ? at(c) : c;
	}
}, $e = (e, t, n, r) => {
	let i = Number.isInteger(n) && Number.isInteger(r) && r < n ? t.slice(r, n) : [];
	if (!e[P] && n !== r) {
		let e = z.get(t);
		i.length === 1 ? e?.trigger?.(r, null, i[0], "delete") : i.length > 1 && (e?.trigger?.(r, null, i, "deleteAll"), i.forEach((t, n) => e?.trigger?.(r + n, null, t, "delete")));
		let a = Number.isInteger(n) && Number.isInteger(r) && r > n ? r - n : 0;
		if (a === 1) e?.trigger?.(n, void 0, null, "add");
		else if (a > 1) {
			let t = Array(a).fill(void 0);
			e?.trigger?.(n, t, null, "addAll"), t.forEach((t, r) => e?.trigger?.(n + r, void 0, null, "add"));
		}
	}
}, et = class {
	[P];
	constructor() {}
	has(e, t) {
		return Reflect.has(e, t);
	}
	get(e, t, n) {
		let r = Ie(e, t);
		if (r != null) return r;
		if ([
			j,
			ie,
			"@target",
			"deref"
		].indexOf(t) >= 0 && B(e, t) != null && B(e, t) != e) return typeof B(e, t) == "function" ? B(e, t)?.bind?.(e) : B(e, t);
		let i = z?.get?.(e), a = Xe(e, t, i);
		if (a != null) return a;
		let o = Ze(e, t, i);
		if (o != null) return o;
		if (t == oe) return x.call(this, this);
		if (t == F) return Ye(i, (t) => {
			let n = t.key ?? t.name ?? 0, r = Ue(t, "value", () => B(e, n)), a = Ue(t, "oldValue", () => void 0);
			return i?.trigger?.(n, r, a, We(t, "manual"));
		});
		if (t == "@target" || t == j) return e;
		if (t == "x") return () => e?.x ?? e?.[0];
		if (t == "y") return () => e?.y ?? e?.[1];
		if (t == "z") return () => e?.z ?? e?.[2];
		if (t == "w") return () => e?.w ?? e?.[3];
		if (t == "r") return () => e?.r ?? e?.[0];
		if (t == "g") return () => e?.g ?? e?.[1];
		if (t == "b") return () => e?.b ?? e?.[2];
		if (t == "a") return () => e?.a ?? e?.[3];
		let s = B(e, t) ?? (t == "value" ? B(e, A) : null);
		return typeof s == "function" ? new Proxy(typeof s == "function" ? s?.bind?.(e) : s, new Qe(t, e, this)) : s;
	}
	set(e, t, n) {
		if (typeof t != "symbol" && Number.isInteger(parseInt(t)) && (t = parseInt(t) ?? t), t == P && n) return this[P] = !!n, !0;
		if (t == P && !n) return delete this[P], !0;
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
		return c = o >= 0 ? Reflect.set(e, o, n) : s >= 0 ? Reflect.set(e, s, n) : Reflect.set(e, t, n), t == "length" && T(r, n) && $e(this, e, r, n), !this[P] && typeof t != "symbol" && T(r, n) && z?.get?.(e)?.trigger?.(t, n, r, "set"), c;
	}
	deleteProperty(e, t) {
		if (typeof t != "symbol" && Number.isInteger(parseInt(t)) && (t = parseInt(t) ?? t), t == P) return delete this[P], !0;
		let n = B(e, t), r = Reflect.deleteProperty(e, t);
		return !this[P] && t != "length" && t != P && typeof t != "symbol" && n != null && z.get(e)?.trigger?.(t, t, n, "delete"), r;
	}
}, tt = class {
	[P];
	constructor() {}
	get(e, t, r) {
		if ([
			j,
			ie,
			"@target",
			"deref",
			"then",
			"catch",
			"finally"
		].indexOf(t) >= 0 && B(e, t) != null && B(e, t) != e) return typeof B(e, t) == "function" ? g(e, B(e, t)) : B(e, t);
		let i = z.get(e) ?? z.get(B(e, "value") ?? e);
		return Xe(e, t, i) ?? (B(e, t) == null && t != "value" && D(e) && B(e, "value") != null && (typeof B(e, "value") == "object" || typeof B(e, "value") == "function") && B(B(e, "value"), t) != null && (e = B(e, "value") ?? e), Ze(e, t, i) ?? (t == oe ? x.call(this, this) : t == F ? Ye(i, (t) => {
			let n = qe(e, t.key ?? t.name ?? Ke(e) ?? "value"), r = Ue(t, "value", () => Je(e, n)), a = Ue(t, "oldValue", () => n == "value" || n == Ke(e) ? B(e, A) : void 0);
			return i?.trigger?.(n, r, a, We(t, "manual"));
		}) : t == Symbol.toPrimitive ? (r) => {
			let i = ze(e, t);
			return B(i, t) ? B(i, t)?.(r) : n(i) ? a(i, r) : n(B(i, "value")) ? a(B(i, "value"), r) : a(B(i, "value") ?? i, r);
		} : t == Symbol.toStringTag ? () => {
			let r = ze(e, t);
			return B(r, t) ? B(r, t)?.() : n(r) ? String(r ?? "") || "" : n(B(r, "value")) ? String(B(r, "value") ?? "") || "" : String(B(r, "value") ?? r ?? "") || "";
		} : t == "toString" ? () => {
			let r = ze(e, t);
			return B(r, t) ? B(r, t)?.() : B(r, Symbol.toStringTag) ? B(r, Symbol.toStringTag)?.() : n(r) ? String(r ?? "") || "" : n(B(r, "value")) ? String(B(r, "value") ?? "") || "" : String(B(r, "value") ?? r ?? "") || "";
		} : t == "valueOf" ? () => {
			let r = ze(e, t);
			return B(r, t) ? B(r, t)?.() : B(r, Symbol.toPrimitive) ? B(r, Symbol.toPrimitive)?.() : n(r) ? r : n(B(r, "value")) ? B(r, "value") : B(r, "value") ?? r;
		} : typeof t == "symbol" && (t in e || B(e, t) != null) ? B(e, t) : ze(e, t)));
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
			Le?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), Le?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			Le?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	has(e, t) {
		return t in e;
	}
	set(e, t, n) {
		return Ie(e, t) ?? c(n, (r) => {
			let i = Ie(r, t);
			if (i != null) return i;
			if (t == P && n) return this[P] = !!n, !0;
			if (t == P && !n) return delete this[P], !0;
			let a = e;
			if (B(e, t) == null && t != "value" && D(e) && B(e, "value") != null && (typeof B(e, "value") == "object" || typeof B(e, "value") == "function") && B(B(e, "value"), t) != null && (e = B(e, "value") ?? e), typeof t == "symbol" && !(B(e, t) != null && t in e)) return;
			let o = qe(e, t), s = t == "value" ? B(e, A) ?? B(e, t) : B(e, t);
			e[t] = r;
			let c = B(e, t) ?? r;
			return !this[P] && typeof t != "symbol" && (B(e, I) ?? T)?.(s, c) && (z.get(e) ?? z.get(a))?.trigger?.(o, r, s), !0;
		});
	}
	defineProperty(e, t, n) {
		let r = Ie(e, t);
		if (r != null) return r;
		if (t == P && n.value) return this[P] = !!n.value, !0;
		if (t == P && !n.value) return delete this[P], !0;
		if (B(e, t) == null && t != "value" && D(e) && B(e, "value") != null && (typeof B(e, "value") == "object" || typeof B(e, "value") == "function") && B(B(e, "value"), t) != null && (e = B(e, "value") ?? e), n.get == null && n.set == null) return Reflect.defineProperty(e, t, n);
		let i = B(e, t), a = Reflect.defineProperty(e, t, {
			get: n.get,
			set: n.set,
			enumerable: n.enumerable ?? !0,
			configurable: n.configurable ?? !0
		});
		return Be(e, t, i), a;
	}
	deleteProperty(e, t) {
		if (t == P) return delete this[P], !0;
		B(e, t) == null && t != "value" && D(e) && B(e, "value") != null && (typeof B(e, "value") == "object" || typeof B(e, "value") == "function") && B(B(e, "value"), t) != null && (e = B(e, "value") ?? e);
		let n = B(e, t), r = Reflect.deleteProperty(e, t);
		return !this[P] && t != P && typeof t != "symbol" && z.get(e)?.trigger?.(t, null, n, "delete"), r;
	}
}, nt = class {
	[P];
	constructor() {}
	get(e, t, n) {
		if ([
			j,
			ie,
			"@target",
			"deref"
		].indexOf(t) >= 0 && B(e, t) != null && B(e, t) != e) return typeof B(e, t) == "function" ? g(e, B(e, t)) : B(e, t);
		let r = z.get(e), i = Xe(e, t, r);
		if (i != null) return i;
		let a = Ze(e, t, r);
		if (a != null) return a;
		e = B(e, j) ?? B(e, ie) ?? e;
		let o = g(e, B(e, t));
		return typeof t == "symbol" && (t in e || B(e, t) != null) ? o : t == oe ? x.call(this, this) : t == F ? Ye(r, (t) => {
			let n = t.key ?? t.name;
			if (n == null) return;
			let i = Ue(t, "value", () => e.get(n));
			if (i == null && !Ve(t, "value")) return;
			let a = Ue(t, "oldValue", () => void 0);
			return r?.trigger?.(n, i, a, We(t, "manual"));
		}) : t == "clear" ? () => {
			let t = Array.from(e?.entries?.() || []), n = o();
			return t.forEach(([t, n]) => {
				!this[P] && n && z.get(e)?.trigger?.(t, null, n, "delete");
			}), n;
		} : t == "delete" ? (t, n = null) => {
			let r = e.get(t), i = o(t);
			return !this[P] && r && z.get(e)?.trigger?.(t, null, r, "delete"), i;
		} : t == "set" ? (t, n) => u(n, (r) => {
			let i = e.get(t), a = o(t, n);
			return T(i, a) && (this[P] || z.get(e)?.trigger?.(t, a, i, i == null ? "add" : "set")), a;
		}) : o;
	}
	set(e, t, n) {
		return t == P ? (this[P] = !!n, !0) : t == P && !n ? (delete this[P], !0) : Reflect.set(e, t, n);
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
			Le?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), Le?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			Le?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	deleteProperty(e, t) {
		return t == P ? (delete this[P], !0) : Reflect.deleteProperty(e, t);
	}
}, rt = class {
	[P] = !1;
	constructor() {}
	get(e, t, n) {
		if ([
			j,
			ie,
			"@target",
			"deref"
		].indexOf(t) >= 0 && B(e, t) != null && B(e, t) != e) return typeof B(e, t) == "function" ? g(e, B(e, t)) : B(e, t);
		let r = z.get(e), i = Xe(e, t, r);
		if (i != null) return i;
		let a = Ze(e, t, r);
		if (a != null) return a;
		e = B(e, j) ?? B(e, ie) ?? e;
		let o = g(e, B(e, t));
		return typeof t == "symbol" && (t in e || B(e, t) != null) ? o : t == oe ? x.call(this, this) : t == F ? Ye(r, (t) => {
			let n = t.key ?? t.name;
			if (n == null) return;
			let i = Ue(t, "value", () => e.has(n)), a = Ue(t, "oldValue", () => void 0);
			return r?.trigger?.(n, i, a, We(t, "manual"));
		}) : t == "clear" ? () => {
			let t = Array.from(e?.values?.() || []), n = o();
			return t.forEach((t) => {
				!this[P] && t && z.get(e)?.trigger?.(null, null, t, "delete");
			}), n;
		} : t == "delete" ? (t) => {
			let n = e.has(t) ? t : null, r = o(t);
			return !this[P] && n && z.get(e)?.trigger?.(t, null, n, "delete"), r;
		} : t == "add" ? (t) => {
			let n = e.has(t) ? t : null, r = o(t);
			return T(n, t) && !this[P] && !n && z.get(e)?.trigger?.(t, t, n, "add"), r;
		} : o;
	}
	set(e, t, n) {
		return t == P && n ? (this[P] = !!n, !0) : t == P && !n ? (delete this[P], !0) : Reflect.set(e, t, n);
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
			Le?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), Le?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			Le?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	deleteProperty(e, t) {
		return t == P ? (delete this[P], !0) : Reflect.deleteProperty(e, t);
	}
}, it = (e) => !!((typeof e == "object" || typeof e == "function") && e != null && (e?.[j] || e?.[ce])), at = (e) => it(e) ? e : Se(e, new et()), ot = (e) => it(e) ? e : Se(e, new tt()), st = (e) => it(e) ? e : Se(e, new nt()), ct = (e) => it(e) ? e : Se(e, new rt()), lt = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = _t({
		[N]: n ? e : null,
		[A]: n ? 0 : Number(L(e) || 0) || 0,
		[ae]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[A] ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return a((typeof this?.[A] == "object" ? this?.[A]?.value || 0 : this?.[A]) ?? 0, e);
		},
		set value(e) {
			this[A] = (e != null && !Number.isNaN(e) ? Number(e) : this[A]) || 0;
		},
		get value() {
			return Number(this[A] || 0) || 0;
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, ut = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = _t({
		[N]: n ? e : null,
		[A]: (n ? "" : String(L(typeof e == "number" ? String(e) : e || ""))) ?? "",
		[ae]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[A] ?? "") ?? "";
		},
		[Symbol?.toPrimitive](e) {
			return a(this?.[A] ?? "", e);
		},
		set value(e) {
			this[A] = String(typeof e == "number" ? String(e) : e || "") ?? "";
		},
		get value() {
			return String(this[A] ?? "") ?? "";
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, dt = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = _t({
		[N]: n ? e : null,
		[A]: (n ? !1 : (L(e) == null ? !1 : typeof L(e) == "string" ? !0 : !!L(e)) || !1) || !1,
		[ae]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[A] ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return a(!!this?.[A] || !1, e);
		},
		set value(e) {
			this[A] = (e == null ? this[A] : typeof e == "string" ? !0 : !!e) || !1;
		},
		get value() {
			return this[A] || !1;
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, ft = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = _t({
		[N]: n ? e : null,
		[ae]: t,
		[Symbol?.toStringTag]() {
			return String(this.value ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return a(this.value, e);
		},
		value: n ? null : L(e)
	});
	return e?.then?.((e) => r.value = e), V(e, (e) => {
		r?.[F]?.();
	}), r;
}, pt = (e, t) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	try {
		Object.defineProperty(e, le, {
			value: t,
			writable: !0,
			configurable: !0
		});
	} catch {
		try {
			e[le] = t;
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
}, mt = (e, t = "value", r, i) => {
	if (n(e) || !e) return e;
	if (Array.isArray(e) && !_(e?.[1], e) && (Array.isArray(e?.[0]) || typeof e?.[0] == "object" || typeof e?.[0] == "function") && (e = e?.[0]), (t ??= Array.isArray(e) ? null : "value") == null || _(t, e)) return;
	if (t && D(e?.[t]) && vt(e?.[t])) return pt(yt(e?.[t]), t);
	if (t && typeof e?.getProperty == "function" && vt(e?.getProperty?.(t))) return pt(e?.getProperty?.(t), t);
	let o = _t({
		[A]: e[t] ??= r ?? e[t],
		[ae]: i,
		[Symbol?.toStringTag]() {
			return String(e?.[t] ?? this[A] ?? "") || "";
		},
		[Symbol?.toPrimitive](n) {
			return a(e?.[t], n);
		},
		set value(n) {
			o[te] = !0, e[t] = this[A] = n ?? ne(e[t]), o[te] = !1;
		},
		get value() {
			return this[A] = e?.[t] ?? this[A];
		}
	});
	pt(o, t);
	let s = V(e, (e, n, r, i) => {
		n === t && o?.[F]?.({
			key: t,
			value: e,
			oldValue: r,
			trigger: i
		});
	});
	return R(o, Symbol.dispose, s), o;
}, ht = (e, t) => {
	switch (typeof e) {
		case "boolean": return dt(e, t);
		case "number": return lt(e, t);
		case "string": return ut(e, t);
		case "object": if (e != null) return ft(_t(e), t);
		default: return ft(e, t);
	}
}, gt = (e, t = "value", n) => {
	let r = vt(e) ? e : ht(e, n);
	return t == null ? r : mt(r, t, n);
};
function _t(e, t) {
	if (e == null || typeof e == "symbol" || !(typeof e == "object" || typeof e == "function") || it(e) || (e = L?.(e)) == null || e instanceof Promise || e instanceof WeakRef || it(e)) return e;
	let n = e;
	if (n == null || typeof n == "symbol" || !(typeof n == "object" || typeof n == "function") || n instanceof Promise || n instanceof WeakRef) return n;
	let r = n;
	return Array.isArray(n) ? (r = at(n), r) : n instanceof Map ? (r = st(n), r) : n instanceof Set ? (r = ct(n), r) : ((typeof n == "function" || typeof n == "object") && (r = ot(n)), r);
}
var vt = (e) => typeof HTMLInputElement < "u" && e instanceof HTMLInputElement ? !0 : !!((typeof e == "object" || typeof e == "function") && e != null && (e?.[j] || e?.[ce] || z?.has?.(e))), yt = (e) => vt(e) ? _t(e) : null, bt = /* @__PURE__ */ new WeakMap(), xt = (e) => {
	if (!(typeof e == "symbol" || e == null || !(typeof e == "object" || typeof e == "function"))) return e;
}, St = "initial", Ct = (e) => {
	let t = e?.[le] ?? e?.realProp;
	return v(t) ? t : null;
}, wt = (e, t) => {
	let n = Ct(e);
	return n != null && (t == null || t == "value") ? n : t;
}, Tt = (e, t) => t != null && t == Ct(e) ? e?.value : e?.[t], Et = (e, t, n, r) => {
	if (t != null && t == Ct(e)) {
		let r = Tt(e, t);
		if (r != null) return n?.(r, t, null, "set");
	}
	return E(e, t, n, r);
}, Dt = (e, t, n) => {
	let r = Ne(t);
	if (n == St) {
		if (!r.triggerImmediately) return;
	} else if (!je(r.affectTypes, n)) return;
	return (t, r, i, ...a) => e?.(t, r, i, n, ...a);
}, Ot = (e, t, n, r = ["*"]) => {
	if (!e || !xt(e)) return;
	let i = t == Symbol.iterator ? null : wt(e, t), a = e?.[M] ?? z.get(e);
	e = e?.[j] ?? e, queueMicrotask(() => {
		let t = Dt(n, r, St);
		t && (i != null && i != Symbol.iterator ? Et(e, i, t, null) : C(e, t, null));
	});
	let o = a?.affected?.(n, i, r);
	return e?.[Symbol.dispose] ? o : (R(o, Symbol.dispose, o), R(o, Symbol.asyncDispose, o), R(e, Symbol.dispose, o), R(e, Symbol.asyncDispose, o), o);
}, kt = (e, t, n, r = ["*"]) => {
	let i = Ne(r).affectTypes, a = {}, o = e?.value, s = (e) => {
		let t = e?.target?.value;
		je(i, "set") && n?.(t, "value", o, "set", e), o = t;
	};
	return e?.addEventListener?.("change", s, a), () => e?.removeEventListener?.("change", s, a);
}, At = (e) => Array.isArray(e) && e?.length == 2 && xt(e?.[0]) && (v(e?.[1]) || e?.[1] == Symbol.iterator), jt = (e, t, n, r = ["*"]) => {
	let i = v(e?.[1]) ? e?.[1] : null;
	return V(e?.[0], i, n, r);
}, Mt = (e, t, n, r = ["*"]) => e?.then?.((e) => V?.(e, t, n, r))?.catch?.((e) => (console.warn(e), null)), V = (e, t, r = () => {}, i) => {
	if (typeof t == "function" ? (i = r, r = t, t = null) : t = wt(e, t), (typeof r == "object" || Array.isArray(r)) && (i = r, r = () => {}), (n(e) || typeof e == "symbol") && Ne(i).triggerImmediately) return ee(globalThis?.Promise?.try?.(() => r?.(e, null, null, null, St)));
	if (typeof e?.[ce] == "function") return e?.[ce]?.(r, t, i);
	if (xt(e)) {
		let n = e;
		if (bt?.has?.(e = e?.[j] ?? e)) return bt?.get?.(e)?.(n, t, r, i);
		if (vt(n) || At(e) && vt(e?.[0])) return pe(e) ? bt?.getOrInsert?.(e, Mt)?.(e, t, r, i) : At(e) ? bt?.getOrInsert?.(e, jt)?.(e, t, r, i) : typeof HTMLInputElement < "u" && e instanceof HTMLInputElement ? bt?.getOrInsert?.(e, kt)?.(e, t, r, i) : bt?.getOrInsert?.(e, Ot)?.(n, t, r, i);
		{
			let n = Dt(r, i, St);
			return n ? ee(globalThis?.Promise?.try?.(() => At(e) ? Et?.(e?.[0], e?.[1], n, null) : t != null && t != Symbol.iterator ? Et?.(e, t, n, null) : C?.(e, n, null))) : void 0;
		}
	}
}, Nt = class {
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
}, Pt = new Nt();
function Ft(e, t, n = ["*"]) {
	if (!e) return;
	if (Pt.has([e, t])) return Pt.get([e, t]);
	let r = (r, i, a, o) => {
		if (i == "value") {
			let i = (a?.value ?? a)?.entries?.(), o = e?.value ?? r?.value ?? r;
			if (i) for (let [e, n] of i) {
				let r = n ?? (a?.value ?? a)?.[e] ?? null, i = o?.[e];
				r == null && i != null ? t(i, e, null, "add") : r != null && i == null ? t(null, e, r, "delete") : T(r, i) && t(i, e, r, "set");
			}
			return Ft(r ?? e?.value, t, n);
		}
		return i == null ? void 0 : e[i];
	};
	return Pt.getOrInsertComputed([e, t], () => e instanceof Set ? V([Lt(e), Symbol.iterator], t, n) : e instanceof Map ? V(e, t, n) : D(e) ? V(e, r, n) : Array.isArray(e) && !(e?.length == 2 && v(e?.[1]) && vt(e?.[0])) ? V([e, Symbol.iterator], t, n) : V(e, t, n));
}
function It(e, t) {
	return me(e, (e) => {
		let n = Array.isArray(e) && e?.length == 2 && ["object", "function"].indexOf(typeof e?.[0]) >= 0 && v(e?.[1]), r = n ? e?.[1] : null;
		e = n && r != null ? e?.[0] ?? e : e;
		let i = typeof e == "object" || typeof e == "function" ? e?.[j] ?? e : e;
		(e?.[M] ?? z.get(i))?.unaffected?.(t, r);
	});
}
//#endregion
//#region ../../projects/object.ts/src/core/Assigned.ts
var Lt = (e) => {
	let t = _t([]);
	return t.push(...Array.from(e?.values?.() || [])), R(t, Symbol.dispose, V(e, (e, n, r) => {
		if (T(e, r)) if (r == null && e != null) t.push(e);
		else if (r != null && e == null) {
			let e = t.indexOf(r);
			e >= 0 && t.splice(e, 1);
		} else {
			let n = t.indexOf(r);
			n >= 0 && T(t[n], e) && (t[n] = e);
		}
	})), t;
}, Rt = /* @__PURE__ */ new Set();
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
		syntax: "<integer>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cell-y",
		syntax: "<integer>",
		inherits: !1,
		initialValue: "0"
	}
].forEach((e) => {
	if (typeof CSS > "u" || typeof CSS?.registerProperty != "function") return;
	let t = String(e?.name || "").trim();
	if (!(!t || Rt.has(t))) try {
		CSS.registerProperty(e);
	} catch (e) {
		String(e?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(e);
	} finally {
		Rt.add(t);
	}
});
//#endregion
//#region ../../projects/dom.ts/src/agate/Utils.ts
var zt = () => ({
	didTimeout: !1,
	timeRemaining: () => 0
}), Bt = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(zt()), 0), Vt = () => {
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
var Ht = /* @__PURE__ */ new Map(), Ut = (e, t = 1e3, ...n) => {
	let r = {
		running: !0,
		cancel: () => {
			r.running = !1;
		}
	};
	return Bt(async () => {
		if (!(!e || typeof e != "function")) {
			for (; r.running;) await Promise.all([Promise.try(e, ...n), new Promise((e) => setTimeout(e, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((e) => Bt(e, t)), new Promise((e) => setTimeout(e, t))]);
			r.cancel = () => {};
		}
	}, { timeout: t }), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
	for (;;) Ht.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Wt = (e, t, n) => {
	t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
		bubbles: !0,
		cancelable: !0
	}))));
}, H = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Gt = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, Kt = (e) => {
	if (e == ":fragment:") return document.createDocumentFragment();
	let t = document.createElement.bind(document);
	for (var n = t("div"), r, i = ""; e && (r = e.match("^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)([\"'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]"));) r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
	return i && (n.className = i.slice(1)), n;
}, U = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, qt = {};
function W(e, t, n, r = qt) {
	e?.addEventListener?.(t, n, r);
	let i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
	return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
var Jt = (e, t) => {
	if (t) {
		let n = t;
		return n = t instanceof Map ? [...t.entries()] : [...Object.entries(t)], n.map(([t, n]) => ((f(n) ? [...n] : n) ?? [])?.map?.((n) => W(e, t, n)));
	}
}, Yt = (e, t, n) => {
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
}, Xt = (e, t, n) => {
	if (n?.composedPath && typeof n.composedPath == "function") {
		let e = n.composedPath();
		for (let n of e) if ((n instanceof HTMLElement || n instanceof Element) && n.matches?.(t)) return n;
	}
	let r = e?.matches?.(t) ? e : null, i = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host, a = i?.matches?.(t) ? i : null, o = e?.closest?.(t) ?? r?.closest?.(t) ?? a?.closest?.(t) ?? null;
	return r ?? o ?? a;
}, Zt = /* @__PURE__ */ new WeakMap(), Qt = (e = document.documentElement) => Zt.getOrInsertComputed(e, () => {
	let t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
	if (t?.zoom) return t?.zoom || 1;
	if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), $t = (e = document.documentElement) => (e?.currentCSSZoom == null ? Qt(e) : 1) || 1;
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
var en = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), tn = (e, t, n) => {
	if (typeof e?.selector == "string") return nn(e, e?.selector, t, n);
	let r = new Set((t.split(",") || [t]).map((e) => e.trim())), i = new MutationObserver((e, t) => {
		for (let i of e) i.attributeName && r.has(i.attributeName) && n(i, t);
	});
	return (e?.element ?? e) instanceof Node && i.observe(e = en(e), {
		attributes: !0,
		attributeOldValue: !0,
		attributeFilter: [...r]
	}), r.forEach((t) => n({
		target: e,
		type: "attributes",
		attributeName: t,
		oldValue: e?.getAttribute?.(t)
	}, i)), i;
}, nn = (e, t, n, r) => {
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
	return a.observe(e = en(e), {
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
}, rn = (e, t = "*", n = (e, t) => {}) => {
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
	(e?.element ?? e) instanceof Node && l.observe(e = en(e), {
		childList: !0,
		subtree: !0
	});
	let d = Array.from(e.querySelectorAll(t));
	return d.length > 0 && n?.({ addedNodes: d }, l), l;
}, an = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", on = (e) => typeof e == "string" && /@import\b/i.test(e), sn = "DOM", cn = typeof document < "u" ? document.createElement("style") : null;
cn && (typeof document < "u" && document.querySelector("head")?.appendChild?.(cn), cn.dataset.owner = sn);
var ln = (e, t, n = "") => {
	e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, un = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", dn = (e) => un && e instanceof CSSStyleValue, fn = (e) => un && e instanceof CSSUnitValue, pn = (e, t, n, r = "") => {
	if (!(!e || !t)) {
		if (n == null) {
			e.getPropertyValue(t) !== "" && e.removeProperty(t);
			return;
		}
		e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
	}
}, mn = (e, t, n, r = "") => {
	if (!e || !t) return e;
	let i = O(t), a = e.style, s = e.attributeStyleMap ?? e.styleMap;
	if (!un || !s) return hn(e, t, n, r);
	let c = D(n) && !(dn(n) || fn(n)) ? n?.value : n;
	if (c == null) return s.delete?.(i), a && pn(a, i, null, r), e;
	if (dn(c)) {
		let t = s.get(i);
		if (fn(c) && fn(t)) {
			if (t.value === c.value && t.unit === c.unit) return e;
		} else if (t === c) return e;
		return s.set(i, c), e;
	}
	if (typeof c == "number") if (CSS?.number && !i.startsWith("--")) {
		let t = CSS.number(c), n = s.get(i);
		return fn(n) && n.value === t.value && n.unit === t.unit || s.set(i, t), e;
	} else return pn(a, i, String(c), r), e;
	if (typeof c == "string" && !dn(c)) {
		let t = o(c);
		if (typeof t == "number" && CSS?.number && !i.startsWith("--")) {
			let n = CSS.number(t), r = s.get(i);
			return fn(r) && r.value === n.value && r.unit === n.unit || s.set(i, n), e;
		} else return pn(a, i, c, r), e;
	}
	return pn(a, i, String(c), r), e;
}, hn = (e, t, n, r = "") => {
	if (!e || !t) return e;
	let i = O(t), a = e.style;
	if (!a) return e;
	let s = D(n) && !(dn(n) || fn(n)) ? n?.value : n;
	return typeof s == "string" && !dn(s) && (s = o(s) ?? s), s == null ? (pn(a, i, null, r), e) : (dn(s), pn(a, i, String(s), r), e);
}, gn = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), _n = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new Map(), yn = (e) => {
	if (!e) return null;
	if (vn.has(e)) return vn.get(e);
	if (e instanceof Blob || e instanceof File) {
		if (_n.has(e)) return _n.get(e);
		let t = URL.createObjectURL(e);
		return _n.set(e, t), vn.set(t, t), t;
	}
	if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
		let t = fetch(e?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (t) => {
			let n = await t.blob(), r = URL.createObjectURL(n);
			return _n.set(n, r), vn.set(e, r), vn.set(r, r), r;
		});
		return vn.set(e, t), t;
	}
	if (typeof e == "string") {
		let t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
		return _n.set(t, n), vn.set(n, n), n;
	}
	return e;
}, bn = /* @__PURE__ */ new Map(), xn = /* @__PURE__ */ new WeakMap(), Sn = (e) => {
	if (!e) return "";
	if (bn.has(e)) return bn.get(e) ?? "";
	if (e instanceof Blob || e instanceof File) {
		if (xn.has(e)) return xn.get(e) ?? "";
		let t = e?.text?.()?.then?.((t) => (xn.set(e, t), t));
		return xn.set(e, t), t;
	}
	if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
		let t = fetch(e?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (t) => {
			let n = await t.text();
			return bn.set(e, n), n;
		});
		return bn.set(e, t), t;
	}
	return typeof e == "string" && bn.set(e, e), e;
}, Cn = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new Map(), En = /* @__PURE__ */ new WeakMap(), Dn = (e, t = "ux-query", n = null) => {
	if (!e || !an()) return null;
	let r = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, i = r instanceof ShadowRoot, a = i ? r.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
	if (!a) return null;
	let o = `${t || ""}:${e}`, s;
	if (i) {
		let e = wn.get(r);
		e || (e = /* @__PURE__ */ new Map(), wn.set(r, e)), s = e.get(o), s || (s = new CSSStyleSheet(), e.set(o, s), a.includes(s) || a.push(s));
	} else s = Cn.get(o), s || (s = new CSSStyleSheet(), Cn.set(o, s), a.includes(s) || a.push(s));
	if (t) {
		let n;
		if (i) {
			let e = En.get(r);
			e || (e = /* @__PURE__ */ new Map(), En.set(r, e)), n = e.get(t);
		} else n = Tn.get(t);
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
				let e = En.get(r);
				e || (e = /* @__PURE__ */ new Map(), En.set(r, e)), e.set(t, n);
			} else Tn.set(t, n);
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
}, On = (e, t, n, r = "") => un ? mn(e, t, n, r) : hn(e, t, n, r), kn = (e, t, n = "", r) => {
	let i = yn(e), a = typeof e == "string" && URL.canParse(e) ? e : i;
	return t?.[0] && (t[0].fetchPriority = "high"), t && a && typeof a == "string" && ln(t, a, n), t?.[0] && (!URL.canParse(e) || r) && t?.[0] instanceof HTMLLinkElement, gn(i, (e) => {
		t?.[0] && e && (ln(t, e, n), t?.[0].setAttribute("loaded", ""));
	})?.catch?.((e) => {
		console.warn("Failed to load style sheet:", e);
	});
}, An = (e) => {
	let t = typeof document < "u" ? document.createElement("link") : null;
	return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
		rel: "stylesheet",
		type: "text/css",
		crossOrigin: "same-origin"
	}), t.dataset.owner = sn, kn(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, jn = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
	let r = t?.querySelector?.("head") ?? t;
	if (typeof HTMLHeadElement < "u" && r instanceof HTMLHeadElement) return An(e);
	let i = typeof document < "u" ? document.createElement("style") : null;
	return i ? (i.dataset.owner = sn, kn(e, [i, "innerHTML"], n), r?.prepend?.(i), i) : null;
}, Mn = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new WeakMap(), Pn = (e, t) => {
	if (!e || !t) return !1;
	try {
		return e.replaceSync(t), !0;
	} catch (e) {
		let t = String(e?.message || "").toLowerCase();
		return t.includes("@import rules are not allowed") || t.includes("@import") && t.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", e), !1;
	}
}, Fn = (e, t = null) => {
	if (!an()) return typeof e == "string" && jn(e, void 0, t || ""), null;
	if (typeof e == "string" && on(e)) return jn(e, void 0, t || ""), null;
	if (typeof e == "string" && Mn?.has?.(e)) {
		let t = Mn.get(e);
		return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(t) && document.adoptedStyleSheets.push(t), t;
	}
	if ((e instanceof Blob || e instanceof File) && Nn?.has?.(e)) {
		let t = Nn.get(e);
		return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(t) && document.adoptedStyleSheets.push(t), t;
	}
	if (!e) return null;
	let n = typeof e == "string" ? Mn.getOrInsertComputed(e, (e) => new CSSStyleSheet()) : Nn.getOrInsertComputed(e, (e) => new CSSStyleSheet());
	if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
		let r = t ? `@layer ${t} { ${e} }` : e;
		return Mn.set(e, n), Pn(n, r) || (In(n), Mn.delete(e), jn(e)), n;
	} else gn(Sn(e), (r) => {
		if (Mn.set(r, n), r) return on(r) ? (In(n), Mn.delete(r), Nn.delete(e), jn(r, void 0, t || ""), n) : (Pn(n, t ? `@layer ${t} { ${r} }` : r) || (In(n), Mn.delete(r), Nn.delete(e), jn(r, void 0, t || "")), n);
	});
	return n;
}, In = (e) => {
	if (!e) return !1;
	let t = typeof e == "string" ? Mn.get(e) : e;
	if (!t || typeof document > "u") return !1;
	let n = document.adoptedStyleSheets, r = n.indexOf(t);
	return r === -1 ? !1 : (n.splice(r, 1), !0);
}, Ln = /* @__PURE__ */ new WeakMap(), Rn = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), zn = (e, t) => {
	if (e) {
		if (t) {
			let n = Ln.getOrInsert(e, /* @__PURE__ */ new Set());
			[...t?.values?.() || []].map((t) => Rn(e, n, t));
		}
		return e;
	}
}, Bn = /* @__PURE__ */ new Map(), Vn = (e, t) => {
	let n = [...e.entries() || []];
	return new Map(n?.map?.(([e, n]) => [e, n?.get?.(t)])?.filter?.(([e, t]) => !!t) || []);
}, Hn = (e, t, n) => {
	let r = Bn.get(t);
	return r || (r = /* @__PURE__ */ new WeakMap(), Bn.set(t, r)), r.has(e) || r.set(e, n), e;
}, Un = (e, t) => {
	if (!(!e || !t)) {
		for (let [n, r] of t.entries()) Hn(e, n, r);
		return e;
	}
}, Wn = (e, t) => {
	if (e) {
		if (t) {
			let n = qn?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
			qn?.has?.(e) || qn?.set?.(e, n), [...t?.values?.() || []].map((t) => Kn(e, t, n));
		}
		return e;
	}
}, Gn = (e) => ({
	storeSet: Vn(Bn, e),
	mixinSet: qn?.get?.(e),
	behaviorSet: Ln?.get?.(e)
}), Kn = (e, t, n) => {
	let r = new WeakRef(e);
	return n ||= qn?.get?.(e), n?.has?.(t) || (n?.add?.(t), Jn?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((e) => !!e).join(" ")), t?.connect?.(r, t, Gn(e))), e;
}, qn = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new WeakMap(), Zn = (e, t) => {
	typeof t == "string" && (t = Yn?.get?.(t));
	let n = new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((e) => Yn?.get?.(e)).filter((e) => !!e)), i = qn?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
	Jn?.has?.(t) || Jn?.set?.(t, /* @__PURE__ */ new WeakSet()), qn?.has?.(e) || qn?.set?.(e, i);
	let a = new WeakRef(e);
	i?.has?.(t) || (r.has(t) || t?.disconnect?.(a, t, Gn(e)), (r.has(t) || !Jn?.get?.(t)?.has?.(e)) && (t?.connect?.(a, t, Gn(e)), n.add(Xn?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((e) => !!e).join(" "))), Jn?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(a, t, Gn(e))));
}, Qn = /* @__PURE__ */ new Set(), $n = (e = typeof document < "u" ? document : null) => {
	if (e) return Qn?.has?.(e) || (Qn?.add?.(e), nn(e, "*", "data-mixin", (e) => er(e.target)), rn(e, "[data-mixin]", (e) => {
		for (let t of e.addedNodes) t instanceof HTMLElement && er(t);
	})), e;
}, er = (e) => {
	let t = new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
	[...new Set([...t].map((e) => Yn?.get?.(e)).filter((e) => !!e))]?.map?.((t) => Zn(e, t));
}, tr = (e, t) => {
	e.forEach((e) => t ? Zn(e, t) : er(e));
}, nr = (e) => {
	for (let t of Qn) tr(t?.querySelectorAll?.("[data-mixin]"), e);
}, rr = new FinalizationRegistry((e) => {
	Yn?.delete?.(e);
}), ir = (e, t) => {
	if (!Xn?.has?.(t)) {
		let n = e?.trim?.();
		n && (Xn?.set?.(t, n), Yn?.set?.(n, t), rr?.register?.(t, n), nr(t));
	}
};
$n(typeof document < "u" ? document : null);
var ar = class {
	constructor(e = null) {
		e && ir(e, this);
	}
	connect(e, t, n) {
		return this;
	}
	disconnect(e, t, n) {
		return this;
	}
	storeForElement(e) {
		return Bn.get(this.name || "")?.get?.(e);
	}
	relatedForElement(e) {
		return Gn(e);
	}
	get elements() {
		return Jn?.get?.(this);
	}
	get storage() {
		return Bn?.get?.(this.name || "");
	}
	get name() {
		return Xn?.get?.(this);
	}
}, or = (e, t, n) => {
	let r = n;
	D(n) && (n = n.value);
	let i = (n = s(n)) != null && n !== !1;
	return b(r, () => {
		e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
	}), e;
}, sr = (t, n, r) => {
	if (!(n = typeof n == "string" ? e(n) : n) || !t || [
		"style",
		"dataset",
		"attributeStyleMap",
		"styleMap",
		"computedStyleMap"
	].indexOf(n || "") != -1) return t;
	let i = r;
	return D(r) && (r = r.value), t?.[n] === r || t?.[n] !== r && b(i, () => {
		r == null ? delete t[n] : t[n] = r;
	}), t;
}, cr = (t, n, r) => {
	let i = t?.dataset;
	if (!n || !t || !i) return t;
	let a = r;
	return D(r) && (r = r?.value), n = e(n), i?.[n] === (r = s(r)) || (r == null || r === !1 ? delete i[n] : b(a, () => {
		typeof r != "object" && typeof r != "function" ? i[n] = String(r) : delete i[n];
	})), t;
}, lr = (e, t) => e.style.removeProperty(O(t)), ur = (e, t, n) => {
	let r = e?.style;
	return !t || typeof t != "string" || !e || !r || b(n, () => {
		l(n) || D(n) || S(n) ? On(e, t, n) : n ?? lr(e, t);
	}), e;
}, G = (e, t, n) => {
	if (!t || !e) return e;
	let r = n;
	return D(n) && (n = n.value), t = O(t), e?.getAttribute?.(t) === (n = s(n)) || b(r, () => {
		typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == 1) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
	}), e;
};
//#endregion
//#region ../../projects/dom.ts/src/mixin/junction/types.ts
function dr(e, t) {
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
var fr = {
	start: "junction-select:start",
	move: "junction-select:move",
	end: "junction-select:end",
	cancel: "junction-select:cancel"
}, pr = {
	start: "junction-drag:start",
	move: "junction-drag:move",
	end: "junction-drag:end"
}, mr = {
	start: "junction-resize:start",
	move: "junction-resize:move",
	end: "junction-resize:end"
}, hr = /* @__PURE__ */ new WeakMap(), gr = (e, t, n) => {
	let r = hr.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
	i.push(n), r.set(t, i), hr.set(e, r);
}, _r = (e, t) => {
	let n = hr.get(e), r = n?.get(t);
	if (r) {
		for (let e of r) try {
			e();
		} catch {}
		n.delete(t), n.size === 0 && hr.delete(e);
	}
}, vr = (e, t) => {
	let n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
	return Number.isFinite(r) ? r : 0;
}, yr = (e, t, n) => {
	let r = e.getAttribute(t)?.trim();
	if (!r) return n;
	let i = e.querySelector(r);
	return i instanceof HTMLElement ? i : n;
}, br = class extends ar {
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
			let e = dr(i, a);
			if (e.width < 1 && e.height < 1) {
				n.style.display = "none";
				return;
			}
			n.style.display = "block", n.style.left = `${e.left}px`, n.style.top = `${e.top}px`, n.style.width = `${e.width}px`, n.style.height = `${e.height}px`;
		}, c = (e) => {
			e.button === 0 && (e.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (e.target === t || t.contains(e.target)) && (r = !0, i = o(e), a = { ...i }, t.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(fr.start, {
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
			let n = dr(i, a);
			t.dispatchEvent(new CustomEvent(fr.move, {
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
			let n = dr(i, a);
			t.dispatchEvent(new CustomEvent(fr.end, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					box: n,
					host: t
				}
			}));
		};
		return gr(t, "ui-junction-select", () => {
			n.remove();
		}), gr(t, "ui-junction-select", W(t, "pointerdown", c)), gr(t, "ui-junction-select", W(t, "pointermove", l)), gr(t, "ui-junction-select", W(t, "pointerup", (e) => {
			r && u(e);
		})), gr(t, "ui-junction-select", W(t, "pointercancel", (e) => {
			if (r) {
				r = !1, n.style.display = "none";
				try {
					t.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(fr.cancel, {
					bubbles: !0,
					detail: { host: t }
				}));
			}
		})), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && _r(t, "ui-junction-select"), this;
	}
}, xr = class extends ar {
	constructor() {
		super("ui-junction-drag");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		On(t, "--jx-drag-x", vr(t, "--jx-drag-x")), On(t, "--jx-drag-y", vr(t, "--jx-drag-y"));
		let n = t.style.transform;
		(!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
		let r = yr(t, "data-junction-drag-handle", t), i = !1, a = 0, o = 0, s = 0, c = 0, l = (e) => {
			e.button === 0 && (e.target !== r && !r.contains(e.target) || (i = !0, a = e.clientX, o = e.clientY, s = vr(t, "--jx-drag-x"), c = vr(t, "--jx-drag-y"), r.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(pr.start, {
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
			On(t, "--jx-drag-x", l), On(t, "--jx-drag-y", u), t.dispatchEvent(new CustomEvent(pr.move, {
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
				t.dispatchEvent(new CustomEvent(pr.end, {
					bubbles: !0,
					detail: {
						host: t,
						x: vr(t, "--jx-drag-x"),
						y: vr(t, "--jx-drag-y")
					}
				}));
			}
		};
		return gr(t, "ui-junction-drag", () => {
			t.style.transform = n;
		}), gr(t, "ui-junction-drag", W(r, "pointerdown", l)), gr(t, "ui-junction-drag", W(r, "pointermove", u)), gr(t, "ui-junction-drag", W(r, "pointerup", d)), gr(t, "ui-junction-drag", W(r, "pointercancel", d)), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && _r(t, "ui-junction-drag"), this;
	}
}, Sr = class extends ar {
	constructor() {
		super("ui-junction-resize");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		let n = yr(t, "data-junction-resize-handle", t), r = !1, i = 0, a = 0, o = 0, s = 0, c = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), l = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), u = (e) => {
			e.button === 0 && (e.target !== n && !n.contains(e.target) || (r = !0, i = e.clientX, a = e.clientY, o = t.offsetWidth, s = t.offsetHeight, n.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(mr.start, {
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
			t.style.width = `${n}px`, t.style.height = `${u}px`, t.dispatchEvent(new CustomEvent(mr.move, {
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
				t.dispatchEvent(new CustomEvent(mr.end, {
					bubbles: !0,
					detail: {
						host: t,
						width: t.offsetWidth,
						height: t.offsetHeight
					}
				}));
			}
		};
		return gr(t, "ui-junction-resize", W(n, "pointerdown", u)), gr(t, "ui-junction-resize", W(n, "pointermove", d)), gr(t, "ui-junction-resize", W(n, "pointerup", f)), gr(t, "ui-junction-resize", W(n, "pointercancel", f)), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && _r(t, "ui-junction-resize"), this;
	}
};
new br(), new xr(), new Sr(), _t({
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
var Cr = (e) => {
	let t = [], n = (e) => {
		e && typeof e == "object" && "value" in e ? t.push(e) : Array.isArray(e) ? e.forEach(n) : e && typeof e == "object" && Object.values(e).forEach(n);
	};
	return n(e), t;
}, wr = (e, t) => {
	let n = () => e.map((e) => e && typeof e == "object" && "value" in e ? e.value : e), r = t(...n());
	if (typeof r == "number") {
		let i = lt(r), a = () => {
			i.value = t(...n());
		};
		return Cr(e).forEach((e) => V(e, a)), i;
	}
	let i = r, a = () => {
		i = t(...n());
	};
	return Cr(e).forEach((e) => V(e, a)), i;
}, Tr = class {
	static add(e, t, n = "px") {
		return wr([e, t], () => `calc(${e.value}${n} + ${t.value}${n})`);
	}
	static subtract(e, t, n = "px") {
		return wr([e, t], () => `calc(${e.value}${n} - ${t.value}${n})`);
	}
	static multiply(e, t) {
		return wr([e, t], () => `calc(${e.value} * ${t.value})`);
	}
	static divide(e, t) {
		return wr([e, t], () => `calc(${e.value} / ${t.value})`);
	}
	static clamp(e, t, n, r = "px") {
		return wr([
			e,
			t,
			n
		], () => `clamp(${t.value}${r}, ${e.value}${r}, ${n.value}${r})`);
	}
	static min(e, t, n = "px") {
		return wr([e, t], () => `min(${e.value}${n}, ${t.value}${n})`);
	}
	static max(e, t, n = "px") {
		return wr([e, t], () => `max(${e.value}${n}, ${t.value}${n})`);
	}
}, Er = class {
	static width = lt(typeof window < "u" ? window?.innerWidth : 0);
	static height = lt(typeof window < "u" ? window?.innerHeight : 0);
	static init() {
		typeof window < "u" && window?.addEventListener?.("resize", () => {
			this.width.value = window?.innerWidth, this.height.value = window?.innerHeight;
		});
	}
	static center() {
		return {
			x: Tr.divide(this.width, lt(2)),
			y: Tr.divide(this.height, lt(2))
		};
	}
};
Er.init();
//#endregion
//#region ../../projects/lur.e/src/lure/core/Binding.ts
var Dr = new Nt(), Or = new FinalizationRegistry((e) => e?.()), kr = Symbol.for("@mapped"), Ar = Symbol.for("@virtual"), jr = Symbol.for("@behavior"), Mr = (e) => !!e && typeof e == "object" && "ref" in e && typeof e?.unbind == "function", Nr = (e, n) => {
	if (Mr(n)) {
		n.bind?.();
		let t = () => n.unbind?.();
		return R(e, Symbol.dispose, t), t;
	}
	let r = {
		click: n,
		input: n,
		change: n
	};
	n?.({ target: e });
	let i = t?.(e, "addEventListener", r);
	return R(e, Symbol.dispose, i), i;
}, Pr = (e, t) => {
	if (t) for (let n of t) Nr(e, n);
	return e;
}, Fr = (e, n, r = "value") => {
	let a = i(e), o = i(n), s = (e) => {
		p(o, "value", d(a)?.[r ?? "value"] ?? y(d(o)));
	}, c = {
		click: s,
		input: s,
		change: s
	};
	return s?.({ target: e }), t?.(e, "addEventListener", c), p(o, "value", e?.[r ?? "value"] ?? y(d(n))), () => t?.(e, "removeEventListener", c);
}, Ir = (e, t, n = "") => {
	i(e);
	let r = i(t), a = O(n);
	return tn(e, a, (e) => {
		if (e.type == "attributes" && e.attributeName == a) {
			let t = e?.target?.getAttribute?.(e.attributeName), n = d(r), i = y(n);
			T(e.oldValue, t) && n != null && (typeof n == "object" || typeof n == "function") && (T(i, t) || i == null) && p(n, "value", t);
		}
	});
}, Lr = (e, t, n) => {
	let r = Dr.get([e, t]);
	if (r) {
		let e = r[n]?.[1];
		delete r[n], e?.();
	}
}, Rr = (e, t, n, r) => {
	let i = Dr.getOrInsertComputed([e, t], () => ({}));
	return i?.[n]?.[1]?.(), i[n] = r, !0;
}, zr = (e, t, n, r, a, o) => {
	let s = Mr(t) ? t : null;
	s && (s.bind?.(), t = s.ref);
	let c = i(e);
	if (e = d(c), !e || !(e instanceof Node || e?.element instanceof Node)) return;
	let l;
	l && l?.abort?.(), l = new AbortController();
	let u = i(t);
	r?.(e, n, t);
	let f = V?.([t, "value"], (e, t, i) => {
		let o = d(u), s = d(a), f = d(c), p = y(o) ?? y(e);
		(!s || s?.[n] == o) && (typeof o?.[jr] == "function" ? o?.[jr]?.((t = e) => r(f, n, p), [
			e,
			n,
			i
		], [
			l?.signal,
			n,
			c
		]) : r(f, n, p));
	}), p = null;
	typeof o == "boolean" && o && (r == G && (p = Ir(e, t, n)), r == sr && (p = Fr(e, t, n))), typeof o == "function" && (p = o(e, n, t));
	let m = () => {
		p?.disconnect?.(), p != null && typeof p == "function" && p?.(), s?.unbind?.(), f?.(), l?.abort?.(), Lr?.(e, r, n);
	};
	if (R(t, Symbol.dispose, m), Or.register(e, m), !Rr(e, r, n, [t, m])) return m;
}, Br = (e, t, n, r, i, a) => (r(e, t, Mr(n) ? n.ref : n), zr(e, n, t, r, i, a)), Vr = (e) => {
	let t = typeof e == "string" ? e.trim() : "";
	if (!t) return !0;
	for (let e of t.split(";")) {
		let t = e.trim();
		if (!t) continue;
		let n = t.indexOf(":");
		if (n < 0 || t.slice(n + 1).trim().length > 0) return !1;
	}
	return !0;
}, Hr = (e) => {
	if (e == null) return;
	let t = e.getAttribute("style");
	t != null && Vr(t) && (e.removeAttribute("style"), e.style.cssText = "");
}, Ur = (e, t) => {
	Vr(t) ? (e.style.cssText = "", e.removeAttribute("style")) : e.style.cssText = t;
}, Wr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Kr = {
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
}, qr = class {
	direction = "children";
	selector;
	index = 0;
	_eventMap = /* @__PURE__ */ new WeakMap();
	constructor(e, t = 0, n = "children") {
		this.index = t, this.selector = e, this.direction = n;
	}
	_observeDOMChange(e, t, n) {
		return typeof t == "string" ? rn(e, t, n) : null;
	}
	_observeAttributes(e, t, n) {
		return typeof this.selector == "string" ? nn(e, this.selector, t, n) : tn(e ?? this.selector, t, n);
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
						if (Xt(e, r, t)) {
							a = e;
							break;
						}
					} else if (Yt(r, e, t)) {
						a = e;
						break;
					}
				}
			}
			a ||= (a = t?.target ?? this._getSelected(e) ?? i, a?.element ?? a), typeof r == "string" ? Yt(i, Xt(a, r, t), t) && n?.call?.(a, t) : Yt(i, r, t) && Yt(r, a, t) && n?.call?.(a, t);
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
		if (t in Kr) return Kr?.[t]?.(i);
		if (t == "length" && r?.length != null) return r?.length;
		if (t == "_updateSelector") return (e) => this.selector = e || this.selector;
		if (["style", "attributeStyleMap"].indexOf(t) >= 0) {
			let n = e?.self ?? e, r = this._selector(e), a = typeof r == "string" ? Dn(r, "ux-query", n) : i;
			return t == "attributeStyleMap" ? a?.styleMap ?? a?.attributeStyleMap : a?.[t];
		}
		if (t == "self") return e?.self ?? e;
		if (t == "selector") return this._selector(e);
		if (t == "observeAttr") return (t, n) => this._observeAttributes(e, t, n);
		if (t == "DOMChange") return (t) => this._observeDOMChange(e, this.selector, t);
		if (t == "addEventListener") return (t, n, r) => this._addEventListener(e, t, n, r);
		if (t == "removeEventListener") return (t, n, r) => this._removeEventListener(e, t, n, r);
		if (t == "getAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = Wr?.get?.(e)?.get?.(this.selector) ?? r;
			return Dr?.get?.(i)?.get?.(G)?.has?.(t) ? Dr?.get?.(i)?.get?.(G)?.get?.(t)?.[0] : r?.getAttribute?.(t);
		};
		if (t == "setAttribute") return (t, n) => {
			let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
			return typeof n == "object" && (n?.value != null || "value" in n) ? Br(i, t, n, G, null, !0) : i?.setAttribute?.(t, n);
		};
		if (t == "removeAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = Wr?.get?.(e)?.get?.(this.selector) ?? r;
			return Dr?.get?.(i)?.get?.(G)?.has?.(t) ? Dr?.get?.(i)?.get?.(G)?.get?.(t)?.[1]?.() : r?.removeAttribute?.(t);
		};
		if (t == "hasAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = Wr?.get?.(e)?.get?.(this.selector) ?? r;
			return Dr?.get?.(i)?.get?.(G)?.has?.(t) ? !0 : r?.hasAttribute?.(t);
		};
		if (t == "element") {
			if (r?.length <= 1) return i?.element ?? i;
			let e = document.createDocumentFragment();
			return e.append(...r), e;
		}
		if (t == Symbol.toPrimitive && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (e) => e == "number" ? (i?.element ?? i)?.valueAsNumber ?? parseFloat((i?.element ?? i)?.value) : e == "string" ? String((i?.element ?? i)?.value ?? i?.element ?? i) : e == "boolean" ? (i?.element ?? i)?.checked : (i?.element ?? i)?.checked ?? (i?.element ?? i)?.value ?? i?.element ?? i;
		if (t == "checked" && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (i?.element ?? i)?.checked;
		if (t == "value" && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (i?.element ?? i)?.valueAsNumber ?? (i?.element ?? i)?.valueAsDate ?? (i?.element ?? i)?.value ?? (i?.element ?? i)?.checked;
		if (t == ce && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (t) => {
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
}, Jr = (e, t = document.documentElement, n = 0, r = "children") => {
	if ((e?.element ?? e) instanceof HTMLElement) {
		let t = e?.element ?? e;
		return Gr.getOrInsert(t, new Proxy(t, new qr("", n, r)));
	}
	if (typeof e == "function") {
		let t = e;
		return Gr.getOrInsert(t, new Proxy(t, new qr("", n, r)));
	}
	return t == null || typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || t === void 0 ? null : Wr?.get?.(t)?.has?.(e) ? Wr?.get?.(t)?.get?.(e) : Wr?.getOrInsert?.(t, /* @__PURE__ */ new Map())?.getOrInsertComputed?.(e, () => new Proxy(t, new qr(e, n, r)));
}, Yr = (e) => n(e) ? [] : Array.isArray(e) ? e.map((e, t) => [t, e]) : e instanceof Map ? Array.from(e.entries()) : e instanceof Set ? Array.from(e.values()) : Array.from(Object.entries(e)), Xr = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		Yr(t).forEach(([e, t]) => {
			G(r?.deref?.(), e, t);
		});
		let i = V(t, (e, t) => {
			G(r?.deref?.(), t, e), zr(r?.deref?.(), e, t, G, n, !0);
		});
		R(t, Symbol.dispose, i), R(e, Symbol.dispose, i);
	} else console.warn("Invalid attributes object:", t);
}, Zr = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		Yr(t).forEach(([e, t]) => {
			G(r?.deref?.(), "aria-" + (e?.toString?.() || e || ""), t);
		});
		let i = V(t, (e, t) => {
			G(r?.deref?.(), "aria-" + (t?.toString?.() || t || ""), e, !0), zr(r, e, t, G, n, !0);
		});
		R(t, Symbol.dispose, i), R(e, Symbol.dispose, i);
	} else console.warn("Invalid ARIA object:", t);
	return e;
}, Qr = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		Yr(t).forEach(([e, t]) => {
			cr(r?.deref?.(), e, t);
		});
		let i = V(t, (e, t) => {
			cr(r?.deref?.(), t, e), zr(r?.deref?.(), e, t, cr, n);
		});
		R(t, Symbol.dispose, i), R(e, Symbol.dispose, i);
	} else console.warn("Invalid dataset object:", t);
	return e;
}, $r = (e, t) => {
	if (!t) return e;
	if (typeof t == "string") Ur(e, t);
	else if (typeof t?.value == "string") V([t, "value"], (t) => {
		Ur(e, t ?? "");
	});
	else if (typeof t == "object" || typeof t == "function") {
		let n = new WeakRef(t), r = new WeakRef(e);
		Yr(t).forEach(([e, t]) => {
			ur(r?.deref?.(), e, t);
		});
		let i = V(t, (e, t) => {
			ur(r?.deref?.(), t, e), zr(r?.deref?.(), e, t, ur, n?.deref?.());
		});
		R(t, Symbol.dispose, i), R(e, Symbol.dispose, i);
	} else console.warn("Invalid styles object:", t);
	return e;
}, ei = async (e, t) => $r(e, await t?.(e)), ti = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e), i = (e) => {
		let n = Jr("input", e?.target);
		n?.value != null && T(n?.value, t?.value) && (t.value = n?.value), n?.valueAsNumber != null && T(n?.valueAsNumber, t?.valueAsNumber) && (t.valueAsNumber = n?.valueAsNumber), n?.checked != null && T(n?.checked, t?.checked) && (t.checked = n?.checked);
	};
	Yr(t).forEach(([e, t]) => {
		sr(r?.deref?.(), e, t);
	});
	let a = V(t, (e, t) => {
		let i = r.deref();
		i && (t == "checked" ? Wt(i, e) : Br(i, t, e, sr, n?.deref?.(), !0));
	});
	return R(t, Symbol.dispose, a), R(e, Symbol.dispose, a), e.addEventListener("change", i), e;
}, ni = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(e);
	Yr(t).forEach(([t, n]) => {
		let r = e;
		n === void 0 || n == null ? r.classList.contains(n) && r.classList.remove(n) : r.classList.contains(n) || r.classList.add(n);
	});
	let r = Ft(t, (e) => {
		let t = n?.deref?.();
		t && (e === void 0 || e == null ? t.classList.contains(e) && t.classList.remove(e) : t.classList.contains(e) || t.classList.add(e));
	});
	return R(t, Symbol.dispose, r), R(e, Symbol.dispose, r), e;
}, ri = (e = null, t, n = !0) => {
	let r = [], i = () => {
		r?.forEach?.(([e, t]) => e?.(...t)), r?.splice?.(0, r?.length);
	};
	return (a, o, s, c, l = null) => {
		let u = H(l) ?? H(e), d = K(a, t, o, u), f = K(s, t, o, u), p = H(d?.parentElement ?? f?.parentElement) ?? u;
		if (!p) return;
		e != p && (e = p);
		let m = Gt(p, f);
		([
			"add",
			"set",
			"delete"
		].indexOf(c || "") >= 0 || !c) && (d == null && f != null || c == "delete" ? r?.push?.([Ai, [
			p,
			f,
			null,
			m >= 0 ? m : o
		]]) : d != null && f == null || c == "add" ? r?.push?.([Ei, [
			p,
			d,
			null,
			o
		]]) : (d != null && f != null || c == "set") && r?.push?.([ki, [
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
}, ii = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), ai = (e, t = [], n) => {
	if (!t || !e) return e;
	n = (t?.[kr] ? t?.mapper : n) ?? n, t = (t?.[kr] ? t?.children : t) ?? t;
	let r = Array.from(t?.keys?.() || []), i = ii(t)?.map?.((t, i) => K(t, n, r?.[i] ?? i, e));
	return ji(e, i), i?.forEach?.((t) => Ei(e, t)), e;
}, oi = class {
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
		e && (this.#i?.(), this.#i = null, this.#r = null, this.#r ??= ri(e, null, !1), this.#i ??= V?.([this.#t, "value"], this._onUpdate.bind(this)));
	}
	get boundParent() {
		return this.#l;
	}
	set boundParent(e) {
		e instanceof HTMLElement && H(e) && e != this.#l && (this.#l = e, this.makeUpdater(e), this.#o &&= (this.#o?.parentNode != null && this.#o?.remove?.(), null), this.element);
	}
	constructor(e, t = (e) => e, n = null) {
		this.#e = document.createComment(""), D(t) && (typeof e == "function" || typeof e == "object") && !D(e) && ([e, t] = [t, e]), !n && typeof t == "object" && t && !D(t) && (n = t), this.#s = (t == null ? null : typeof t == "function" ? t : typeof t == "object" ? t?.mapper : null) ?? ((e) => e), this.#o = null, this.#t = (D(e) ? e : t?.(e, -1)) ?? e, this.#n = document.createDocumentFragment();
		let r = {
			removeNotExistsWhenHasPrimitives: !0,
			uniquePrimitives: !0,
			preMap: !0
		}, i = (H(n) ? null : n) || {};
		this.#a = Object.assign(r, i), this.boundParent = H(this.#a?.boundParent) ?? H(n) ?? null;
	}
	$getNodeBy(e, t) {
		let r = n(D(t) ? t?.value : t) ? this.#c ??= Mi(t) : K(t, t == e ? null : this.#s, -1, e);
		return this.#c != null && (n(t) || D(t)) && (this.#c.textContent = "" + (t?.value ?? (n(t) ? t : ""))), r;
	}
	$getNode(e, t = !0) {
		let r = n(this.#t?.value) ? this.#c ??= Mi(this.#t) : K(this.#t?.value, e == this.#t?.value ? null : this.#s, -1, e);
		return this.#c != null && (n(this.#t) || D(this.#t)) && (this.#c.textContent = "" + (n(this.#t) ? this.#t : this.#t?.value ?? "")), r != null && t && (this.#o = r), r;
	}
	get [kr]() {
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
	_onUpdate(e, t, r, i) {
		if (n(r) && n(e)) return;
		let a = n(r) ? this.#o : this.$getNodeBy(this.boundParent, r), o = this.$getNode(this.boundParent, !1) ?? this.#e;
		(a && !a?.parentNode || this.#o?.parentNode) && (a = this.#o ?? a);
		let s = this.#r?.(o, Gt(this.boundParent, a), a, i, this.boundParent);
		return o != null && o != this.#o ? this.#o = o : o == null && a != this.#o && (this.#o = a), s;
	}
}, si = (e) => (typeof e == "object" || typeof e == "function" || typeof e == "symbol") && e != null, ci = (e, t, r = null) => {
	let i = null;
	if (e instanceof HTMLElement) return Jr(e);
	if (e == null) return document.createComment(":NULL:");
	let a = (typeof t == "function" ? t(e, -1) : e) ?? e;
	if (n(a)) return i ??= Mi(a);
	if (i != null && n(a) && (i.textContent = "" + a), a != null && D(a)) {
		if (n(a?.value)) return a?.value == null ? document.createComment(":NULL:") : i ??= Mi(a?.value);
		if (typeof a == "object" || typeof a == "function") return di.getOrInsertComputed(si(e) ? e : a, () => new oi(e, t, r));
	}
	return K(a, null, -1, r);
}, li = (e, t) => (t && t != e && !e?.contains?.(t) && H(t) ? e?.elementForPotentialParent?.(t) : null) ?? e?.element, ui = (e, t) => li(e, t) ?? (D(e) && U(e?.value) ? e?.value : e), di = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap(), pi = (e) => n(e) ? e : D(e) && n(e?.value) ? fi?.get(e) : di?.get?.(e), mi = /* @__PURE__ */ new WeakMap(), hi = (e, t) => {
	if (mi?.has?.(e)) return mi?.get?.(e);
	let n = document.createComment(":PROMISE:");
	return e?.then?.((r) => {
		let i = typeof t == "function" ? t(r) : r;
		mi?.set?.(e, i), queueMicrotask(() => {
			try {
				if (typeof n?.replaceWith == "function") {
					if (!n?.isConnected) return;
					U(i) && n?.replaceWith?.(i);
				} else n?.isConnected && U(i) && n?.parentNode?.replaceChild?.(n, i);
			} catch {
				if (!n?.isConnected) return;
				n?.remove?.();
			}
		});
	}), n;
}, gi = (e, t, r = -1, i) => t == null ? ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function" ? hi(e, (e) => gi(e, t, r, i)) : U(e) && !e?.element || U(e?.element) ? e : D(e) ? (e instanceof HTMLElement ? Jr : ci)(e) : typeof e == "object" && e ? pi(e) : typeof e == "function" ? gi(e?.(), t, r, i) : n(e) && e != null ? Mi(e) : document.createComment(":NULL:")) : e = gi(t?.(e, r), null, -1, i), _i = (e, t) => ui(e, t) ?? U(e), vi = (e, t, r = -1, i) => t == null ? ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function" ? hi(e, (e) => K(e, t, r, i)) : U(e) && !e?.element ? e : U(e?.element) ? ui(e, i) : D(e) ? (e instanceof HTMLElement ? Jr : ci)(e)?.element : typeof e == "object" && e ? pi(e) : typeof e == "function" ? K(e?.(), t, r, i) : n(e) && e != null ? Mi(e) : document.createComment(":NULL:")) : e = K(t?.(e, r), null, -1, i), yi = (e) => (typeof e == "object" || typeof e == "function" || typeof e == "symbol") && e != null, bi = /* @__PURE__ */ new WeakSet(), xi = (e, t, n = -1, r) => {
	if ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function") return hi(e, (e) => xi(e, t, n, r));
	if (yi(e) && !U(e)) {
		if (di.has(e)) {
			let i = pi(e) ?? gi(e, t, n, r);
			return _i(i instanceof WeakRef ? i?.deref?.() : i, r);
		}
		let i = gi(e, t, n, r);
		return !t && i != null && i != e && yi(e) && !U(e) && di.set(e, i), _i(i, r);
	}
	return vi(e, t, n, r);
}, K = (e, t, n = -1, r) => {
	if (yi(e) && bi.has(e)) return pi(e) ?? U(e);
	yi(e) && bi.add(e);
	let i = xi(e, t, n, r);
	return yi(e) && bi.delete(e), i;
}, Si = (e, t, n = -1) => {
	U(t) && t != null && t?.parentNode != e && (Number.isInteger(n) && n >= 0 && n < e?.childNodes?.length ? e?.insertBefore?.(t, e?.childNodes?.[n]) : e?.append?.(t));
}, Ci = (e, t, n = -1) => {
	if (!(!U(t) || e == t || t?.parentNode == e)) {
		if (t = t?._onUpdate ? li(t, e) : t, !t?.parentNode && U(t)) {
			Si(e, t, n);
			return;
		}
		e?.parentNode != t?.parentNode && U(t) && Si(e, t, n);
	}
}, wi = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), Ti = (e, t, n, r = -1) => {
	let i = t?.length ?? 0;
	if (Array.isArray(fe(t)) || t instanceof Map || t instanceof Set) {
		let i = wi(t)?.map?.((t, r) => K(t, n, r, e))?.filter?.((e) => e != null), a = document.createDocumentFragment();
		i?.forEach?.((e) => Ci(a, e)), Ci(e, a, r);
	} else {
		let a = K(t, n, i, e);
		a != null && Ci(e, a, r);
	}
}, Ei = (e, t, n, r = -1) => {
	n != null && (t = n?.(t, r)), t?.children && Array.isArray(fe(t?.children)) && (t?.[Ar] || t?.[kr]) ? Ti(e, t?.children, null, r) : Ti(e, t, null, r);
}, Di = (e, t, n = -1) => !e || t?.parentNode == e && t?.parentNode != null ? t : t?.parentNode != e && !H(t?.parentNode) && Number.isInteger(n) && n >= 0 && Array.from(e?.childNodes || [])?.length > n ? e.childNodes?.[n] : t, Oi = (e, t, n) => {
	if (t?.parentNode) if (t?.parentNode == n?.parentNode) if (e = t?.parentNode ?? e, t.nextSibling === n) e.insertBefore(n, t);
	else if (n.nextSibling === t) e.insertBefore(t, n);
	else {
		let r = t.nextSibling;
		e.replaceChild(n, t), e.insertBefore(t, r);
	}
	else t?.replaceWith?.(n);
}, ki = (e, t, n, r = -1, i) => {
	n != null && (t = n?.(t, r)), e ||= i?.parentNode;
	let a = Di(e, K(i, n, r), r);
	if (a instanceof Text && typeof t == "string") a.textContent = t;
	else if (t != null) {
		let n = K(t);
		a?.parentNode == e && a != n && a instanceof Text && n instanceof Text ? a?.textContent != n?.textContent && (a.textContent = n?.textContent?.trim?.() ?? "") : a?.parentNode == e && a != n && a != null && a?.parentNode != null ? Oi(e, a, n) : (a?.parentNode != e || a?.parentNode == null) && Ei(e, n, null, r);
	}
}, Ai = (e, t, n, r = -1) => {
	let i = K(t, n);
	if (e ||= i?.parentNode, Array.from(e?.childNodes ?? [])?.length < 1) return;
	let a = Di(e, i, r);
	return a?.parentNode == e && a?.remove?.(), e;
}, ji = (e, t, n) => {
	let r = Array.from(fe(t) || [])?.map?.((e, t) => K(e, n, t));
	return Array.from(e.childNodes).forEach((e) => {
		r?.find?.((t) => !T?.(t, e)) || e?.remove?.();
	}), e;
}, Mi = (e) => n(e) && e != null ? document.createTextNode(e) : e == null ? document.createComment(":NULL:") : fi.getOrInsertComputed(e, () => {
	let t = document.createTextNode(((D(e) ? e?.value : e) ?? "")?.trim?.() ?? "");
	return V([e, "value"], (e) => {
		t.textContent = ("" + (e?.innerText ?? e?.textContent ?? e?.value ?? e ?? ""))?.trim?.() ?? "";
	}), t;
}), Ni = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), Pi = class {
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
		e && (this.#o?.(), this.#o = null, this.#a = null, this.#a ??= ri(e, this.mapper.bind(this), Array.isArray(this.#e)), this.#o ??= Ft?.(this.#e, this._onUpdate.bind(this)));
	}
	get boundParent() {
		return this.#u;
	}
	set boundParent(e) {
		e instanceof HTMLElement && H(e) && e != this.#u && (this.#u = e, this.makeUpdater(e), this.element);
	}
	constructor(e, t = (e) => e, n = null) {
		r(t) && (typeof e == "function" || typeof e == "object") && !r(e) && ([e, t] = [t, e]), !n && typeof t == "object" && t && !r(t) && (n = t), this.#c = document.createComment(""), this.#r = /* @__PURE__ */ new WeakMap(), this.#i = /* @__PURE__ */ new Map(), this.#n = (t == null ? null : typeof t == "function" ? t : typeof t == "object" ? t?.mapper : null) ?? ((e) => e), this.#e = (r(e) ? e : e?.iterator ?? t?.iterator ?? e) ?? [], this.#t = document.createDocumentFragment();
		let i = {
			removeNotExistsWhenHasPrimitives: !0,
			uniquePrimitives: !0,
			preMap: !0
		}, a = (H(n) ? null : n) || {};
		this.#s = Object.assign(i, a), this.boundParent = H(this.#s?.boundParent) ?? H(n) ?? null, this.boundParent || this.#s.preMap && (ai(this.#t, this.#e, this.mapper.bind(this)), this.#t.childNodes.length === 0 && this.#t.appendChild(this.#c));
	}
	get [kr]() {
		return !0;
	}
	elementForPotentialParent(e) {
		return Promise.try(() => {
			let t = K(this.#e?.[0], this.mapper.bind(this), 0);
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
		return Ni(this.#e);
	}
	get self() {
		let e = K(this.#e?.[0], this.mapper.bind(this), 0), t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= H(t) ?? this.boundParent, queueMicrotask(() => {
			let t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= H(t) ?? this.boundParent;
		}), t ?? this.boundParent ?? ai(this.#t, this.#e, this.mapper.bind(this));
	}
	get element() {
		let e = this.#t?.childNodes?.length > 0 ? this.#t : K(this.#e?.[0], this.mapper.bind(this), 0), t = H(e?.parentElement) ? e?.parentElement : this.boundParent;
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
			if (!((e?.[1] == null || e?.[1] < 0 || typeof e?.[1] != "number" || !h(e?.[1])) && (Array.isArray(this.#e) || this.#e instanceof Set))) {
				if (e?.[0] != null && (typeof e?.[0] == "object" || typeof e?.[0] == "function" || typeof e?.[0] == "symbol")) return this.#r.getOrInsert(e?.[0], this.#n(...e));
				if (e?.[0] != null && this.#e instanceof Set) return this.#i.getOrInsert(e?.[0], this.#n(...e));
				if (e?.[0] != null && this.#e instanceof Map) return typeof e?.[0] == "object" || typeof e?.[0] == "function" || typeof e?.[0] == "symbol" ? this.#r.getOrInsert(e?.[0], this.#n(...e)) : typeof e?.[1] == "object" || typeof e?.[1] == "function" || typeof e?.[1] == "symbol" ? this.#r.getOrInsert(e?.[1], this.#n(...e)) : this.#i.getOrInsert(e?.[1], this.#n(...e));
				if (e?.[0] != null) return this.#s?.uniquePrimitives && n(e?.[0]) ? this.#i.getOrInsert(e?.[0], this.#n(...e)) : this.#n(...e);
			}
		};
	}
	_onUpdate(e, t, n, r = "") {
		if (r == "add" || e != null && n == null) {
			if (this.#l.has(t)) return;
			let e = ci(gt(this.#e, t), (...e) => ((e?.[1] == null || e?.[1] < 0) && (e[1] = t ?? e?.[1]), this.mapper(...e)));
			this.#l.set(t, e), Ei(this.boundParent, e, null, t);
		}
		if (r == "delete" || e == null && n != null) {
			let e = this.#l.get(t);
			e && Ai(this.boundParent, e, null, t), this.#l.delete(t);
		}
	}
	*[Symbol.iterator]() {
		let e = 0;
		if (this.#e) for (let t of this.#e) yield this.mapper(t, e++);
	}
}, Fi = (e, t, n = null) => new Pi(e, t, n), Ii = (e, t = document.documentElement) => {
	if (e?.value == null) return Jr(e, t);
	let n = Jr(e?.value, t);
	return V(e, (e, t) => n?._updateSelector(e)), n;
}, Li = (e) => {
	if (typeof e == "string") {
		let t = Ii(Kt(e));
		return t?.element ?? t;
	} else if (e instanceof HTMLElement || e instanceof Element || e instanceof DocumentFragment || e instanceof Document || e instanceof Node) return e;
	else return null;
}, Ri = (e, t = {}, n) => {
	let r = K(typeof e == "string" ? Li(e) : e, null, -1);
	return r && n && Fi(n, (e) => e, r), r && t && (t.ctrls != null && Pr(r, t.ctrls), t.attributes != null && Xr(r, t.attributes), t.properties != null && ti(r, t.properties), t.classList != null && ni(r, t.classList), t.behaviors != null && zn(r, t.behaviors), t.dataset != null && Qr(r, t.dataset), t.stores != null && Un(r, t.stores), t.mixins != null && Wn(r, t.mixins), t.style != null && $r(r, t.style), t.aria != null && Zr(r, t.aria), "value" in t && Br(r, "value", t.value, sr, t, !0), "placeholder" in t && Br(r, "placeholder", t.placeholder, sr, t, !0), t.is != null && Br(r, "is", t.is, G, t, !0), t.role != null && Br(r, "role", t.role, sr, t), t.slot != null && Br(r, "slot", t.slot, sr, t), t.part != null && Br(r, "part", t.part, G, t, !0), t.name != null && Br(r, "name", t.name, G, t, !0), t.type != null && Br(r, "type", t.type, G, t, !0), t.icon != null && Br(r, "icon", t.icon, G, t, !0), t.inert != null && Br(r, "inert", t.inert, G, t, !0), t.hidden != null && Br(r, "hidden", t.visible ?? t.hidden, or, t), t.on != null && Jt(r, t.on), t.rules != null && t.rules.forEach?.((e) => ei(r, e))), Jr(r);
};
//#endregion
//#region ../../projects/lur.e/src/lure/misc/Normalizer.ts
function zi(e, t = 4) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i === " ") n += 1;
		else if (i === "	") n += t - n % t;
		else break;
	}
	return n;
}
function Bi(e, t, n = 4) {
	let r = 0, i = 0;
	for (; i < e.length && r < t;) {
		let t = e[i];
		if (t === " ") r += 1, i++;
		else if (t === "	") r += n - r % n, i++;
		else break;
	}
	return e.slice(i);
}
function Vi(e) {
	return e.includes("\r\n") ? "\r\n" : e.includes("\r") ? "\r" : "\n";
}
function Hi(e, t) {
	for (e = Math.abs(e), t = Math.abs(t); t;) [e, t] = [t, e % t];
	return e;
}
function Ui(e, { ignoreFirstLine: t = !0, tabWidth: n = 4 } = {}) {
	let r = e.split(/\r\n|\n|\r/), i = +!!t, a = [];
	for (let e = i; e < r.length; e++) {
		let t = r[e];
		t.trim() !== "" && a.push(zi(t, n));
	}
	if (a.length === 0) return {
		min: 0,
		step: 0,
		allEven: !0,
		allDiv4: !0
	};
	let o = Math.min(...a), s = a.map((e) => e - o).filter((e) => e > 0), c = 0;
	for (let e of s) c = c ? Hi(c, e) : e;
	let l = a.every((e) => e % 2 == 0), u = a.every((e) => e % 4 == 0);
	return c = c === 0 ? u ? 4 : l ? 2 : 1 : c % 4 == 0 ? 4 : c % 2 == 0 ? 2 : 1, {
		min: o,
		step: c,
		allEven: l,
		allDiv4: u
	};
}
function Wi(e, t, n = "floor", r = 4) {
	if (!t || t <= 1) return e;
	let i = zi(e, r);
	if (i === 0) return e;
	let a;
	a = n === "nearest" ? Math.round(i / t) * t : n === "ceil" ? Math.ceil(i / t) * t : Math.floor(i / t) * t;
	let o = i - a;
	return o > 0 ? Bi(e, o, r) : o < 0 ? " ".repeat(-o) + e : e;
}
function Gi(e, { scope: t = "void-only" } = {}) {
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
function Ki(e, { preserveCommentGaps: t = !0 } = {}) {
	if (!e || typeof e != "string") return e;
	if (!t) return e.replace(/>\s+</g, "><");
	let n = e;
	return n = n.replace(/-->([^\S\r\n]+)<!--/g, "--><!--").replace(/-->([^\S\r\n]+)</g, "--><").replace(/>([^\S\r\n]+)<!--/g, "><!--"), n = n.replace(/>\s+</g, "><"), n = n.replace(RegExp("", "g"), " "), n;
}
function qi(e, { normalizeIndent: t = !0, ignoreFirstLine: n = !0, tabWidth: r = 4, alignStep: i = "auto", quantize: a = "none" } = {}) {
	if (!e || typeof e != "string" || e.indexOf("<") === -1) return e;
	e = e?.trim?.();
	let o = [], s = e.replace(/<(pre|textarea|script|style)\b[\s\S]*?<\/\1>/gi, (e) => `\u0000${o.push(e) - 1}\u0000`), c = Vi(s), l = s.split(/\r\n|\n|\r/), u = +!!n, { min: d, step: f } = Ui(s, {
		ignoreFirstLine: n,
		tabWidth: r
	});
	if (t && d > 0) for (let e = u; e < l.length; e++) {
		let t = l[e];
		t.trim() !== "" && (l[e] = Bi(t, d, r));
	}
	let p = i === "auto" ? f : i;
	if (a !== "none" && p > 1) for (let e = u; e < l.length; e++) {
		let t = l[e];
		t.trim() !== "" && (l[e] = Wi(t, p, a, r));
	}
	let m = l.join(c);
	return m = Gi(m, { scope: "void-only" }), m = Ki(m), m.replace(/\u0000(\d+)\u0000/g, (e, t) => o[+t])?.trim?.();
}
function Ji(e, ...t) {
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
var Yi = /* @__PURE__ */ new WeakMap(), Xi = (e) => {
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
}, Zi = (e) => {
	if (typeof e != "string" || !e?.trim?.()) return -1;
	let t = e.match(/^#\{(\d+)\}$/);
	if (t) return parseInt(t[1] ?? "-1", 10);
	let n = e.match(/#\{(\d+)\}/);
	return n ? parseInt(n[1] ?? "-1", 10) : -1;
}, Qi = (e, t, n, r) => {
	if (!e) return e;
	if (e != null) {
		let n = [], r = (t) => {
			let r = Array.from(e?.attributes || []).find((e) => e.name == t && e.value?.includes?.("#{"));
			if (r) {
				let e = [t, Zi(r?.value) ?? -1];
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
				let e = Array.isArray(t) ? t?.some?.((e) => e == "") : t == "", a = (Array.isArray(t) ? t.find((e) => i.name?.startsWith?.(e)) : t = i.name?.startsWith?.(t) ? t : "") ?? "", o = i.name.trim()?.replace?.(a, ""), s = i.value?.includes?.("#{") && i.value?.includes?.("}"), c = Zi(i?.value), l = Array.isArray(n) ? n?.some?.((e) => o?.startsWith?.(e)) : n == o;
				s && (a == "" && e || a != "") && c >= 0 && !l && r.push([o, c]);
			}
			return r;
		}, a = (t, n, r = "") => {
			let i = /* @__PURE__ */ new Map();
			for (let a of Array.from(e?.attributes || [])) {
				let e = Array.isArray(t) ? t?.some?.((e) => e == "") : t == "", o = (Array.isArray(t) ? t.find((e) => a.name?.startsWith?.(e)) : t = a.name?.startsWith?.(t) ? t : "") ?? "", s = a.name.trim()?.replace?.(o, ""), c = a.value?.includes?.("#{") && a.value?.includes?.("}"), l = Zi(a?.value) ?? -1, u = Array.isArray(n) ? n?.some?.((e) => s?.startsWith?.(e)) : n == s, d = (Array.isArray(r) ? r?.some?.((e) => a.name === e) : a.name === r) && r !== "";
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
		})(e), Hr(e), Yi?.has?.(e) || Yi?.set?.(e, Ri(e, u));
	}
	return Yi?.get?.(e) ?? e;
}, $i = (e, ...t) => {
	let n = [];
	for (let r = 0; r < e?.length; r++) {
		let i = e?.[r], a = t?.[r];
		n.push(ia(i)), n.push(a);
	}
	if (n?.length <= 1) return K(n?.[0], null, 0);
	let r = document.createDocumentFragment();
	return r.append(...n?.filter?.((e) => e != null)?.map?.((e, t) => K(e, null, t))?.filter?.((e) => e != null)), r;
};
function ea(e, ...t) {
	return e?.at?.(0)?.trim?.()?.startsWith?.("<") && e?.at?.(-1)?.trim?.()?.endsWith?.(">") ? ra({ createElement: null })(e, ...t) : $i(e, ...t);
}
var ta = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement && e != document.body), na = (e, t, n) => {
	n != null && (n.boundParent = e);
	let r = K(n, null, -1, e);
	U(r) ? r?.parentNode != e && !r?.contains?.(e) && r != null && t?.replaceWith?.(D(r) && (typeof r?.value == "object" || typeof r?.value == "function") && U(r?.value) ? r?.value : r) : t?.remove?.();
};
function ra({ createElement: e = null } = {}) {
	return function(e, ...t) {
		let r = [], i = [], a = [];
		for (let o = 0; o < e.length; o++) if (r.push(e?.[o] || ""), o < t.length) if (e[o]?.trim()?.endsWith?.("<")) {
			let e = Xi(t?.[o]);
			r.push(e.tag || "div"), e.id && r.push(` id="${e.id}"`), e.className && r.push(` class="${e.className}"`);
		} else {
			let s = Ji(e, e?.[o] || "", e?.[o + 1] || ""), c = /[\w:\-\.\]]\s*=\s*$/.test(e[o]?.trim?.() ?? "") || e[o]?.trim?.()?.endsWith?.("="), l = e[o]?.trim?.()?.match?.(/['"]$/), u = e[o + 1]?.trim?.()?.match?.(/^['"]/) ?? l, d = l && u, f = c;
			if ((f || d) && s) {
				let e = f && !d, n = a.length;
				r.push((typeof t?.[o] == "string" ? t?.[o]?.trim?.() != "" : t?.[o] != null) ? e ? `"#{${n}}"` : `#{${n}}` : ""), a.push(t?.[o]);
			} else if (!s) {
				let e = i.length;
				r.push((typeof t?.[o] == "string" ? t?.[o]?.trim?.() != "" : t?.[o] != null) ? n(t?.[o]) ? String(t?.[o])?.trim?.() : `<!--o:${e}-->` : ""), i.push(t?.[o]);
			}
		}
		let o = qi(r.join("").trim()), s = /* @__PURE__ */ new WeakMap(), c = new DOMParser().parseFromString(o, "text/html"), l = (c instanceof HTMLTemplateElement || c?.matches?.("template") ? c : c.querySelector("template"))?.content ?? c.body ?? c, u = document.createDocumentFragment(), d = Array.from(l.childNodes)?.filter((e) => e instanceof Node).map((e) => (!ta(e?.parentNode) && e?.parentNode != u && (e?.remove?.(), e != null && u?.append?.(e)), e)), f = [];
		return d.forEach((e) => {
			let t = e ? document.createTreeWalker(e, NodeFilter.SHOW_ALL, null) : null;
			do {
				let e = t?.currentNode;
				f.push(e);
			} while (t?.nextNode?.());
		}), f?.filter?.((e) => e?.nodeType == Node.COMMENT_NODE)?.forEach?.((e) => {
			if (e?.nodeValue?.trim?.()?.includes?.("o:") && Number.isInteger(parseInt(e?.nodeValue?.trim?.()?.slice?.(2) ?? "-1"))) {
				let t = i?.[parseInt(e?.nodeValue?.trim?.()?.slice?.(2) ?? "-1") ?? -1];
				if (t == null || t === void 0 || (typeof t == "string" ? t : null)?.trim?.() == "") e?.remove?.();
				else {
					let n = e?.parentNode;
					Array.isArray(t) || t instanceof Map || t instanceof Set ? na?.(n, e, t = Fi(t, null, n)) : t != null && na?.(n, e, t);
				}
			}
			e?.isConnected && e?.remove?.();
		}), f?.filter((e) => e.nodeType == Node.ELEMENT_NODE)?.map?.((e) => {
			Qi(e, a, i, s);
		}), Array.from(u?.childNodes)?.length > 1 ? u : u?.childNodes?.[0];
	};
}
var ia = (e, ...t) => {
	if (typeof e == "string") {
		if (e?.trim?.()?.startsWith?.("<") && e?.trim?.()?.endsWith?.(">")) {
			let t = new DOMParser().parseFromString(qi(e?.trim?.()), "text/html"), n = t.querySelector("template")?.content ?? t.body;
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
	} else if (typeof e == "function") return ia(e?.());
	else if (Array.isArray(e) && t) return ea(e, ...t);
	else if (e instanceof Node) return e;
	return K(e);
}, aa = typeof document < "u" ? document?.createElement?.("style") : null;
aa && typeof document < "u" && document.querySelector?.("head")?.appendChild?.(aa), aa && (aa.innerHTML = "@layer ux-preload {\n        :host { display: none; }\n    }");
//#endregion
//#region ../../projects/lur.e/src/interactive/controllers/LazyEvents.ts
var oa = /* @__PURE__ */ new WeakMap(), sa = (e, t) => `${e}|c:${t?.capture ? "1" : "0"}|p:${t?.passive ? "1" : "0"}`, ca = (e, t, n, r = {}) => {
	if (!e || typeof e.addEventListener != "function") return () => {};
	let i = {
		capture: !!r.capture,
		passive: !!r.passive
	}, a = sa(t, i), o = oa.get(e);
	o || (o = /* @__PURE__ */ new Map(), oa.set(e, o));
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
		let r = oa.get(e), i = r?.get(a);
		i && (i.handlers.delete(n), !(i.handlers.size > 0) && (e.removeEventListener(t, i.listener, i.options), r?.delete(a), r && r.size === 0 && oa.delete(e)));
	};
}, la = /* @__PURE__ */ new WeakMap(), ua = (e) => {
	let t = e?.element ?? e;
	return t instanceof HTMLElement ? t : null;
}, da = (e, t, n) => e ? e === "handled" ? n : t : !1, fa = (e, t, n = {
	capture: !0,
	passive: !1
}, r = {}) => {
	let i = e;
	if (!i || typeof i.addEventListener != "function") return (e, t) => () => {};
	let a = {
		capture: !!n.capture,
		passive: !!n.passive
	}, o = r.strategy ?? "closest", s = `${t}|c:${a.capture ? "1" : "0"}|p:${a.passive ? "1" : "0"}|s:${o}|pd:${String(r.preventDefault ?? "")}|sp:${String(r.stopPropagation ?? "")}|sip:${String(r.stopImmediatePropagation ?? "")}`, c = la.get(i);
	c || (c = /* @__PURE__ */ new Map(), la.set(i, c));
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
					let n = ua(t);
					if (!n) continue;
					let r = e.get(n);
					if (r) {
						a(r);
						break;
					}
				}
				else for (let t of s) {
					let n = ua(t);
					n && a(e.get(n));
				}
				else {
					let n = ua(t?.target);
					for (; n;) {
						let t = e.get(n);
						if (t && (a(t), o === "closest")) break;
						let r = n.getRootNode?.();
						n = n.parentElement || (r instanceof ShadowRoot ? r.host : null);
					}
				}
				da(r.preventDefault, n, i) && t?.preventDefault?.(), da(r.stopImmediatePropagation, n, i) && t?.stopImmediatePropagation?.(), da(r.stopPropagation, n, i) && t?.stopPropagation?.();
			}
		}, c.set(s, l);
	}
	return (e, n) => {
		let r = ua(e);
		if (!r) return () => {};
		l.targets.size === 0 && !l.unbindGlobal && (l.unbindGlobal = ca(i, t, l.dispatch, l.options));
		let a = l.targets.get(r);
		return a || (a = /* @__PURE__ */ new Set(), l.targets.set(r, a)), a.add(n), () => {
			let t = la.get(i), r = t?.get(s);
			if (!r) return;
			let a = ua(e);
			if (!a) return;
			let o = r.targets.get(a);
			o && (o.delete(n), o.size === 0 && r.targets.delete(a), r.targets.size === 0 && (r.unbindGlobal?.(), r.unbindGlobal = null, t?.delete(s), t && t.size === 0 && la.delete(i)));
		};
	};
};
typeof document < "u" && document?.documentElement, typeof document < "u" && document?.documentElement && fa(document.documentElement, "contextmenu", {
	capture: !0,
	passive: !1
}, {
	strategy: "closest",
	preventDefault: "handled",
	stopImmediatePropagation: "handled"
}), Promise.resolve();
//#endregion
//#region ../../projects/lur.e/src/interactive/modules/DesktopStateStorage.ts
var pa = "cw-oriented-desktop-layout-v1";
`${pa}`;
//#endregion
//#region ../../../node_modules/jsox/lib/jsox.mjs
var ma = JSON, q = {};
q.JSOX = q, q.version = "1.2.125";
var ha = typeof BigInt == "function", ga = -1, J = 0, _a = 1, va = 2, ya = 3, ba = 4, xa = 5, Sa = 6, Ca = 7, wa = 8, Ta = 9, Ea = 10, Da = 12, Oa = 13, ka = [
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
], Aa = null, ja = null, Ma = [
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
], Y = 0, Na = 1, Pa = 2, Fa = 3, Ia = 5, La = 6, Ra = 7, za = 8, Ba = 9, Va = 10, Ha = 11, Ua = 12, Wa = 13, Ga = 14, Ka = 15, qa = 16, Ja = 17, Ya = 18, Xa = 19, Za = 20, Qa = 21, $a = 22, eo = 23, to = 24, no = 25, ro = 26, io = 27, ao = 28, X = 29, oo = 30, Z = 31, so = 32, Q = 0, co = 1, lo = 2, uo = 3, fo = 4, po = 5, mo = 6, ho = {
	true: !0,
	false: !1,
	null: null,
	NaN: NaN,
	Infinity: Infinity,
	undefined: void 0
}, go = class extends Date {
	constructor(e, t) {
		super(e), this.ns = t || 0;
	}
};
q.DateNS = go;
var _o = [];
function vo() {
	let e = _o.pop();
	return e ||= {
		context: Q,
		current_proto: null,
		current_class: null,
		current_class_field: 0,
		arrayType: -1,
		valueType: J,
		elements: null
	}, e;
}
function yo(e) {
	_o.push(e);
}
q.updateContext = function() {};
var bo = [];
function xo() {
	let e = bo.pop();
	return e ? e.n = 0 : e = {
		buf: null,
		n: 0
	}, e;
}
function So(e) {
	bo.push(e);
}
q.escape = function(e) {
	let t, n = "";
	if (!e) return e;
	for (t = 0; t < e.length; t++) (e[t] == "\"" || e[t] == "\\" || e[t] == "`" || e[t] == "'") && (n += "\\"), n += e[t];
	return n;
};
var $ = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), To = [];
q.reset = function() {
	$ = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), To = [];
}, q.begin = function(e, t) {
	let n = {
		name: null,
		value_type: J,
		string: "",
		contains: null,
		className: null
	}, r = {
		line: 1,
		col: 1
	}, i = 0, a, o = /* @__PURE__ */ new Map(), s = Y, c = !0, l = !1, u = !1, d = null, f = null, p, m = {
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
	}, h = [], g = {}, _ = null, v = null, y = 0, b = -1, x = Q, S = 0, C = !1, w = !1, T = !1, ee = !1, E = !1, te = {
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
	}, D = null, ne = !1, O = !1, k = !1, re = !1, A = !1, j = !1, ie = !1, M = 0, ae = 0, N = !1, oe = !1, P = !1;
	function se(e) {
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
			S !== 0 && (S === 1 && se("Comment began at end of document"), S === 3 && se("Open comment '/*' is missing close at end of document"), S === 4 && se("Incomplete '/* *' close at end of document")), ne && se("Incomplete string");
		},
		value() {
			this.finalError();
			let e = d;
			return d = void 0, e;
		},
		reset() {
			s = Y, c = !0, te.last && (te.last.next = te.save), te.save = te.first, te.first = te.last = null, m.last && (m.last.next = m.save), m.length = 0, m.save = te.first, m.first = m.last = null, p = void 0, x = Q, h = [], g = {}, _ = null, v = null, y = 0, n.value_type = J, n.name = null, n.string = "", n.className = null, r.line = 1, r.col = 1, u = !1, S = 0, N = !1, ne = !1, k = !1, re = !1, oe = !1;
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
			let g, se, F, ce = 0;
			function I(e, t) {
				throw Error(`${e} '${String.fromCodePoint(t)}' unexpected at ${i} (near '${F.substr(i > 4 ? i - 4 : 0, i > 4 ? 3 : i - 1)}[${String.fromCodePoint(t)}]${F.substr(i, 10)}') [${r.line}:${r.col}]`);
			}
			function le() {
				n.value_type = J, n.string = "", n.contains = null;
			}
			function ue() {
				let e = null;
				switch (n.value_type) {
					case xa:
						if ((n.string.length > 13 || n.string.length == 13 && n[0] > "2") && !oe && !E && !ee && !w && (P = !0), P) {
							if (ha) return BigInt(n.string);
							throw Error("no builtin BigInt()", 0);
						}
						if (oe) {
							let e = n.string.match(/\.(\d\d\d\d*)/), t = e ? e[1] : null;
							if (!t || t.length < 4) {
								let e = new Date(n.string);
								return isNaN(e.getTime()) && I("Bad Date format", g), e;
							} else {
								let e = t.substr(3);
								for (; e.length < 6;) e += "0";
								let r = new go(n.string, Number(e));
								return isNaN(r.getTime()) && I("Bad DateNS format" + r + r.getTime(), g), r;
							}
						}
						return (u ? -1 : 1) * Number(n.string);
					case ba:
						if (n.className) {
							if (e = o.get(n.className), e ||= wo.get(n.className), e && e.cb) return n.className = null, e.cb.call(n.string);
							throw Error("Double string error, no constructor for: new " + n.className + "(" + n.string + ")");
						}
						return n.string;
					case va: return !0;
					case ya: return !1;
					case Ca: return NaN;
					case wa: return NaN;
					case Ta: return -Infinity;
					case Ea: return Infinity;
					case _a: return null;
					case ga: return;
					case Da: return;
					case Sa: return n.className && (e = o.get(n.className), e ||= wo.get(n.className), n.className = null, e && e.cb) ? n.contains = e.cb.call(n.contains) : n.contains;
					case Oa:
						if (b >= 0) {
							let e;
							if (e = n.contains.length ? Mo(n.contains[0]) : Mo(n.string), b === 0) return b = -1, e;
							{
								let t = new Ma[b](e);
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
						return n.className && (e = o.get(n.className), e ||= wo.get(n.className), n.className = null, e && e.cb) ? e.cb.call(n.contains) : n.contains;
					default:
						console.log("Unhandled value conversion.", n);
						break;
				}
			}
			function de() {
				if (b == -3) {
					n.value_type === Sa && p.push(n.contains), b = -1;
					return;
				}
				switch (n.value_type) {
					case Da:
						p.push(void 0), delete p[p.length - 1];
						break;
					default:
						p.push(ue());
						break;
				}
				le();
			}
			function fe() {
				if (b === -3 && n.value_type === Oa) {
					le(), b = -1;
					return;
				}
				if (n.value_type === Da) return;
				!n.name && v && (n.name = v.fields[y++]);
				let e = ue();
				_ && _.protoDef && _.protoDef.cb ? (e = _.protoDef.cb.call(p, n.name, e), e && (p[n.name] = e)) : p[n.name] = e, le();
			}
			function L(e) {
				if (s !== Y) {
					switch (u && I("Negative outside of quotes, being converted to a string (would lose count of leading '-' characters)", e), s) {
						case Z:
							switch (n.value_type) {
								case va:
									n.string += "true";
									break;
								case ya:
									n.string += "false";
									break;
								case _a:
									n.string += "null";
									break;
								case Ea:
									n.string += "Infinity";
									break;
								case Ta:
									n.string += "-Infinity", I("Negative outside of quotes, being converted to a string", e);
									break;
								case wa:
									n.string += "NaN";
									break;
								case Ca:
									n.string += "-NaN", I("Negative outside of quotes, being converted to a string", e);
									break;
								case ga:
									n.string += "undefined";
									break;
								case ba: break;
								case J: break;
								default: console.log("Value of type " + n.value_type + " is not restored...");
							}
							break;
						case Na:
							n.string += "t";
							break;
						case Pa:
							n.string += "tr";
							break;
						case Fa:
							n.string += "tru";
							break;
						case Ia:
							n.string += "f";
							break;
						case La:
							n.string += "fa";
							break;
						case Ra:
							n.string += "fal";
							break;
						case za:
							n.string += "fals";
							break;
						case Ba:
							n.string += "n";
							break;
						case Va:
							n.string += "nu";
							break;
						case Ha:
							n.string += "nul";
							break;
						case Ua:
							n.string += "u";
							break;
						case Wa:
							n.string += "un";
							break;
						case Ga:
							n.string += "und";
							break;
						case Ka:
							n.string += "unde";
							break;
						case qa:
							n.string += "undef";
							break;
						case Ja:
							n.string += "undefi";
							break;
						case Ya:
							n.string += "undefin";
							break;
						case Xa:
							n.string += "undefine";
							break;
						case Za:
							n.string += "N";
							break;
						case Qa:
							n.string += "Na";
							break;
						case $a:
							n.string += "I";
							break;
						case eo:
							n.string += "In";
							break;
						case to:
							n.string += "Inf";
							break;
						case no:
							n.string += "Infi";
							break;
						case ro:
							n.string += "Infin";
							break;
						case io:
							n.string += "Infini";
							break;
						case ao:
							n.string += "Infinit";
							break;
						case Y: break;
						case X: break;
						case oo: break;
						case so:
							I("String-keyword recovery fail (after whitespace)", e);
							break;
						default:
					}
					n.value_type = ba, s < X && (s = Z);
				} else s = Z, n.value_type = ba;
				if (e == 123) he();
				else if (e == 91) ge();
				else if (e != 44) {
					if (e == 32 || e == 13 || e == 10 || e == 9 || e == 65279 || e == 8232 || e == 8233) return;
					e == 44 || e == 125 || e == 93 || e == 58 || (n.string += a);
				}
			}
			function pe(e) {
				let t = 0;
				for (; t == 0 && i < F.length;) {
					a = F.charAt(i);
					let o = F.codePointAt(i++);
					if (o >= 65536 && (a += F.charAt(i), i++), r.col++, o == e) k ? (ie ? I("Incomplete hexidecimal sequence", o) : j ? I("Incomplete long unicode sequence", o) : A && I("Incomplete unicode sequence", o), re ? (re = !1, t = 1) : n.string += a, k = !1) : t = 1;
					else if (k) {
						if (A) {
							if (o == 125) {
								n.string += String.fromCodePoint(M), A = !1, j = !1, k = !1;
								continue;
							}
							if (M *= 16, o >= 48 && o <= 57) M += o - 48;
							else if (o >= 65 && o <= 70) M += o - 65 + 10;
							else if (o >= 97 && o <= 102) M += o - 97 + 10;
							else {
								I("(escaped character, parsing hex of \\u)", o), t = -1, A = !1, k = !1;
								continue;
							}
							continue;
						} else if (ie || j) {
							if (ae === 0 && o === 123) {
								A = !0;
								continue;
							}
							if (ae < 2 || j && ae < 4) {
								if (M *= 16, o >= 48 && o <= 57) M += o - 48;
								else if (o >= 65 && o <= 70) M += o - 65 + 10;
								else if (o >= 97 && o <= 102) M += o - 97 + 10;
								else {
									I(j ? "(escaped character, parsing hex of \\u)" : "(escaped character, parsing hex of \\x)", o), t = -1, ie = !1, k = !1;
									continue;
								}
								ae++, j ? ae == 4 && (n.string += String.fromCodePoint(M), j = !1, k = !1) : ae == 2 && (n.string += String.fromCodePoint(M), ie = !1, k = !1);
								continue;
							}
						}
						switch (o) {
							case 13:
								re = !0, r.col = 1;
								continue;
							case 8232:
							case 8233: r.col = 1;
							case 10:
								re ? re = !1 : r.col = 1, r.line++;
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
								ie = !0, ae = 0, M = 0;
								continue;
							case 117:
								j = !0, ae = 0, M = 0;
								continue;
							default:
								n.string += a;
								break;
						}
						k = !1;
					} else o === 92 ? k ? (n.string += "\\", k = !1) : (k = !0, M = 0, ae = 0) : (re && (re = !1, r.line++, r.col = 2), n.string += a);
				}
				return t;
			}
			function me() {
				let e;
				for (; (e = i) < F.length;) {
					a = F.charAt(e);
					let o = F.codePointAt(i++);
					if (o >= 256) {
						r.col -= i - e, i = e;
						break;
					} else {
						if (o == 95) continue;
						if (r.col++, o >= 48 && o <= 57) T && (E = !0), n.string += a;
						else if (o == 45 || o == 43) n.string.length == 0 || T && !ee && !E ? (o == 45 && !T && (u = !u), n.string += a, ee = !0) : (u &&= (n.string = "-" + n.string, !1), n.string += a, oe = !0);
						else if (o == 78) {
							if (s == Y) {
								O = !1, s = Za;
								return;
							}
							I("fault while parsing number;", o);
							break;
						} else if (o == 73) {
							if (s == Y) {
								O = !1, s = $a;
								return;
							}
							I("fault while parsing number;", o);
							break;
						} else if (o == 58 && oe) u &&= (n.string = "-" + n.string, !1), n.string += a, oe = !0;
						else if (o == 84 && oe) u &&= (n.string = "-" + n.string, !1), n.string += a, oe = !0;
						else if (o == 90 && oe) u &&= (n.string = "-" + n.string, !1), n.string += a, oe = !0;
						else if (o == 46) if (!w && !C && !T) n.string += a, w = !0;
						else {
							c = !1, I("fault while parsing number;", o);
							break;
						}
						else if (o == 110) {
							P = !0;
							break;
						} else if (C && (o >= 95 && o <= 102 || o >= 65 && o <= 70)) n.string += a;
						else if (o == 120 || o == 98 || o == 111 || o == 88 || o == 66 || o == 79) if (!C && n.string == "0") C = !0, n.string += a;
						else {
							c = !1, I("fault while parsing number;", o);
							break;
						}
						else if (o == 101 || o == 69) if (!T) n.string += a, T = !0;
						else {
							c = !1, I("fault while parsing number;", o);
							break;
						}
						else if (o == 32 || o == 13 || o == 10 || o == 9 || o == 47 || o == 35 || o == 44 || o == 125 || o == 93 || o == 123 || o == 91 || o == 34 || o == 39 || o == 96 || o == 58) {
							r.col -= i - e, i = e;
							break;
						} else {
							t && (c = !1, I("fault while parsing number;", o));
							break;
						}
					}
				}
				!t && i == F.length ? O = !0 : (O = !1, n.value_type = xa, x == Q && (N = !0));
			}
			function he() {
				let e = lo, t = null, r = {};
				s > Y && s < X && L(123);
				let i;
				if (i = R(), x == Q) if (s == X || s == Z && (i || n.string.length)) {
					if (i && i.protoDef && i.protoDef.protoCon && (r = new i.protoDef.protoCon()), !i || !i.protoDef && n.string) {
						if (t = h.find((e) => e.name === n.string), t) l ? (t.fields.length = 0, e = fo) : (r = new t.protoCon(), e = po);
						else {
							function r() {}
							h.push(t = {
								name: n.string,
								protoCon: i && i.protoDef && i.protoDef.protoCon || r.constructor,
								fields: []
							}), e = fo;
						}
						l = !1;
					}
					v = t, s = Y;
				} else s = X;
				else if (s == X || x === co || x === uo || x == po) if (s != Y || n.value_type == ba) {
					if (i && i.protoDef) r = new i.protoDef.protoCon();
					else if (t = h.find((e) => e.name === n.string), t) e = po, r = {};
					else {
						function e() {}
						o.set(n.string, {
							protoCon: e.prototype.constructor,
							cb: null
						}), r = new e();
					}
					s = Y;
				} else s = Y;
				else if (x == lo && s == Y) return I("fault while parsing; getting field name unexpected ", g), c = !1, !1;
				let a = vo();
				return n.value_type = Sa, x === Q ? p = r : x == co ? n.name = p.length : (x == uo || x == po) && (!n.name && v && (n.name = v.fields[y++]), p[n.name] = r), a.context = x, a.elements = p, a.name = n.name, a.current_proto = _, a.current_class = v, a.current_class_field = y, a.valueType = n.value_type, a.arrayType = b, a.className = n.className, n.className = null, n.name = null, _ = i, v = t, y = 0, p = r, f ||= p, m.push(a), le(), x = e, !0;
			}
			function ge() {
				if (s > Y && s < X && L(91), s == Z && n.string.length) {
					let e = ka.findIndex((e) => e === n.string);
					s = Y, e >= 0 ? (b = e, n.className = n.string, n.string = null) : n.string === "ref" ? (n.className = null, b = -2) : o.get(n.string) || wo.get(n.string) ? n.className = n.string : I(`Unknown type '${n.string}' specified for array`, g);
				} else if (x == lo || s == X || s == oo) return I("Fault while parsing; while getting field name unexpected", g), c = !1, !1;
				{
					let e = vo();
					n.value_type = Oa;
					let t = [];
					if (x == Q) p = t;
					else if (x == co) b == -1 && p.push(t), n.name = p.length;
					else if (x == uo) if (n.name || (console.log("This says it's resolved......."), b = -3), _ && _.protoDef) if (_.protoDef.cb) {
						let e = _.protoDef.cb.call(p, n.name, t);
						e !== void 0 && (t = p[n.name] = e);
					} else p[n.name] = t;
					else p[n.name] = t;
					e.context = x, e.elements = p, e.name = n.name, e.current_proto = _, e.current_class = v, e.current_class_field = y, e.valueType = n.value_type, e.arrayType = b == -1 ? -3 : b, e.className = n.className, b = -1, n.className = null, n.name = null, _ = null, v = null, y = 0, p = t, f ||= t, m.push(e), le(), x = co;
				}
				return !0;
			}
			function R() {
				let e = {
					protoDef: null,
					cls: null
				};
				return ((e.protoDef = o.get(n.string)) || (e.protoDef = wo.get(n.string))) && (n.className || (n.className = n.string, n.string = null)), n.string && (e.cls = h.find((e) => e.name === n.string), !e.protoDef && e.cls), e.protoDef || e.cls ? e : null;
			}
			if (!c) return -1;
			for (e && e.length ? (se = xo(), se.buf = e, te.push(se)) : (O && (O = !1, n.value_type = xa, x == Q && (N = !0), ce = 1), x !== Q && I("Unclosed object at end of stream.", g)); c && (se = te.shift());) {
				if (i = se.n, F = se.buf, ne) {
					let e = pe(D);
					e < 0 ? c = !1 : e > 0 && (ne = !1, c && (n.value_type = ba));
				}
				for (O && me(); !N && c && i < F.length;) {
					if (a = F.charAt(i), g = F.codePointAt(i++), g >= 65536 && (a += F.charAt(i), i++), r.col++, S) {
						if (S == 1) if (g == 42) S = 3;
						else if (g != 47) return I("fault while parsing;", g);
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
							he();
							break;
						case 91:
							ge();
							break;
						case 58:
							if (x == po) s = Y, n.name = n.string, n.string = "", n.value_type = J;
							else if (x == lo || x == fo) if (x == fo) {
								if (!Object.keys(p).length) {
									console.log("This is a full object, not a class def...", n.className);
									let e = () => {};
									o.set(m.last.node.current_class.name, {
										protoCon: e.prototype.constructor,
										cb: null
									}), p = new e(), x = uo, n.name = n.string, s = Y, n.string = "", n.value_type = J, console.log("don't do default;s do a revive...");
								}
							} else s != Y && s != Z && s != X && s != oo && L(32), s = Y, n.name = n.string, n.string = "", x = x === lo ? uo : mo, n.value_type = J;
							else if (x == Q) {
								console.log("Override colon found, allow class redefinition", x), l = !0;
								break;
							} else I(x == co ? "(in array, got colon out of string):parsing fault;" : x == uo ? "String unexpected" : "(outside any object, got colon out of string):parsing fault;", g), c = !1;
							break;
						case 125:
							if (s == Z && (s = Y), x == fo) if (v) {
								n.string && v.fields.push(n.string), le();
								let e = m.pop();
								x = Q, s = Y, n.name = e.name, p = e.elements, v = e.current_class, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, n.className = e.className, f = null, yo(e);
							} else I("State error; gathering class fields, and lost the class", g);
							else if (x == lo || x == po) {
								n.value_type != J && (v && (n.name = v.fields[y++]), fe()), n.value_type = Sa, _ && _.protoDef && (console.log("SOMETHING SHOULD AHVE BEEN REPLACED HERE??", _), console.log("The other version only revives on init"), p = new _.protoDef.cb(p, void 0, void 0)), n.contains = p, n.string = "";
								let e = m.pop();
								x = e.context, n.name = e.name, p = e.elements, v = e.current_class, _ = e.current_proto, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, n.className = e.className, yo(e), x == Q && (N = !0);
							} else if (x == uo) {
								n.value_type === J && (s == Y ? I("Fault while parsing; unexpected", g) : L(g)), fe(), n.value_type = Sa, n.contains = p, s = Y;
								let e = m.pop();
								x = e.context, n.name = e.name, p = e.elements, _ = e.current_proto, v = e.current_class, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, n.className = e.className, yo(e), x == Q && (N = !0);
							} else I("Fault while parsing; unexpected", g), c = !1;
							u = !1;
							break;
						case 93:
							if (s >= oo && (s = Y), x == co) {
								n.value_type == J ? s !== Y && (L(g), de()) : de(), n.contains = p;
								{
									let e = m.pop();
									n.name = e.name, n.className = e.className, x = e.context, p = e.elements, _ = e.current_proto, v = e.current_class, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, yo(e);
								}
								n.value_type = Oa, x == Q && (N = !0);
							} else I(`bad context ${x}; fault while parsing`, g), c = !1;
							u = !1;
							break;
						case 44:
							s < oo && s != Y && L(g), (s == Z || s == X) && (s = Y), x == fo ? v ? (v.fields.push(n.string), n.string = "", s = X) : I("State error; gathering class fields, and lost the class", g) : x == lo ? v ? (n.name = v.fields[y++], n.value_type != J && (fe(), le())) : (n.string || n.value_type) && I("State error; comma in field name and/or lost the class", g) : x == po ? (v ? (b != -3 && !n.name && (n.name = v.fields[y++]), n.value_type != J && (b != -3 && fe(), le())) : n.value_type != J && (fe(), le()), n.name = null) : x == co ? (n.value_type == J && (n.value_type = Da), de(), le(), s = Y) : x == uo && n.value_type != J ? (x = lo, n.value_type != J && (fe(), le()), s = Y) : (c = !1, I("bad context; excessive commas while parsing;", g)), u = !1;
							break;
						default:
							switch (g) {
								default:
									if (x == Q || x == uo && s == X || x == lo || s == X || x == fo) switch (g) {
										case 96:
										case 34:
										case 39:
											s == Y || s == X ? (n.string.length && (console.log("IN ARRAY AND FIXING?"), n.className = n.string, n.string = ""), pe(g) ? n.value_type = ba : (D = g, ne = !0)) : I("fault while parsing; quote not at start of field name", g);
											break;
										case 10: r.line++, r.col = 1;
										case 13:
										case 32:
										case 8232:
										case 8233:
										case 9:
										case 65279:
											if (x === Q && s === Z) {
												s = Y, x === Q && (N = !0);
												break;
											}
											if (s === Y || s === oo) {
												x == Q && n.value_type && (N = !0);
												break;
											} else if (s === X) {
												if (x === Q) {
													s = Y, N = !0;
													break;
												}
												n.string.length && console.log("STEP TO NEXT TOKEN."), s = oo;
											} else c = !1, I("fault while parsing; whitepsace unexpected", g);
											break;
										default:
											if (s == Y && (g >= 48 && g <= 57 || g == 43 || g == 46 || g == 45)) {
												C = !1, T = !1, oe = !1, P = !1, ee = !1, E = !1, w = !1, n.string = a, se.n = i, me();
												break;
											}
											if (s === oo && (c = !1, I("fault while parsing; character unexpected", g)), s === Y) {
												s = X, n.value_type = ba, n.string += a;
												break;
											}
											if (n.value_type == J) s !== Y && s !== Z && L(g);
											else {
												if (s === Z || s === X) {
													n.string += a;
													break;
												}
												if (x == lo) {
													if (s == X) {
														n.string += a;
														break;
													}
													I("Multiple values found in field name", g);
												}
												x == uo && I("String unexpected", g);
											}
											break;
									}
									else {
										if (s == Y && (g >= 48 && g <= 57 || g == 43 || g == 46 || g == 45)) C = !1, T = !1, oe = !1, P = !1, ee = !1, E = !1, w = !1, n.string = a, se.n = i, me();
										else if (n.value_type == J) s == Y ? (s = Z, n.string += a, n.value_type = ba) : L(g);
										else if (x == lo) I("Multiple values found in field name", g);
										else if (x == uo) n.value_type != ba && ((n.value_type == Sa || n.value_type == Oa) && I("String unexpected", g), L(g)), s == oo ? R() ? n.string = a : I("String unexpected", g) : s == Z ? n.string += a : I("String unexpected", g);
										else if (x == co) if (s == oo) {
											n.className || (n.className = n.string, n.string = ""), n.string += a;
											break;
										} else s == Z && (n.string += a);
										break;
									}
									break;
								case 96:
								case 34:
								case 39:
									n.string && (n.className = n.string), n.string = "", pe(g) ? (n.value_type = ba, s = Z) : (D = g, ne = !0);
									break;
								case 10: r.line++, r.col = 1;
								case 32:
								case 9:
								case 13:
								case 8232:
								case 8233:
								case 65279:
									if (s == Z) {
										if (x == Q) {
											s = Y, N = !0;
											break;
										} else if (x == uo) {
											s = so;
											break;
										} else if (x == lo) {
											s = oo;
											break;
										} else if (x == co) {
											s = oo;
											break;
										}
									}
									if (s == Y || s == oo) break;
									s == X ? n.string.length && (s = oo) : s < Z && L(g);
									break;
								case 116:
									s == Y ? s = Na : s == io ? s = ao : L(g);
									break;
								case 114:
									s == Na ? s = Pa : L(g);
									break;
								case 117:
									s == Pa ? s = Fa : s == Ba ? s = Va : s == Y ? s = Ua : L(g);
									break;
								case 101:
									s == Fa ? (n.value_type = va, s = Z) : s == za ? (n.value_type = ya, s = Z) : s == Ga ? s = Ka : s == Ya ? s = Xa : L(g);
									break;
								case 110:
									s == Y ? s = Ba : s == Ua ? s = Wa : s == Ja ? s = Ya : s == $a ? s = eo : s == no ? s = ro : L(g);
									break;
								case 100:
									s == Wa ? s = Ga : s == Xa ? (n.value_type = ga, s = Z) : L(g);
									break;
								case 105:
									s == qa ? s = Ja : s == to ? s = no : s == ro ? s = io : L(g);
									break;
								case 108:
									s == Va ? s = Ha : s == Ha ? (n.value_type = _a, s = Z) : s == La ? s = Ra : L(g);
									break;
								case 102:
									s == Y ? s = Ia : s == Ka ? s = qa : s == eo ? s = to : L(g);
									break;
								case 97:
									s == Ia ? s = La : s == Za ? s = Qa : L(g);
									break;
								case 115:
									s == Ra ? s = za : L(g);
									break;
								case 73:
									s == Y ? s = $a : L(g);
									break;
								case 78:
									s == Y ? s = Za : s == Qa ? (n.value_type = u ? Ca : wa, u = !1, s = Z) : L(g);
									break;
								case 121:
									s == ao ? (n.value_type = u ? Ta : Ea, u = !1, s = Z) : L(g);
									break;
								case 45:
									s == Y ? u = !u : L(g);
									break;
								case 43:
									s !== Y && L(g);
									break;
							}
							break;
					}
					if (N) {
						s == Z && (s = Y);
						break;
					}
				}
				if (i == F.length ? (So(se), n.value_type == J && t && s != Y && L(32), ne || O || x == lo ? ce = 0 : x == Q && (n.value_type != J || d) && (N = !0, ce = 1)) : (se.n = i, te.unshift(se), ce = 2), N) {
					f = null;
					break;
				}
			}
			return c ? (N && n.value_type != J && (s = Y, d = ue(), u = !1, n.string = "", n.value_type = J), N = !1, ce) : -1;
		}
	};
};
var Eo = [Object.freeze(q.begin())], Do = 0;
q.parse = function(e, t) {
	let n = Do++, r;
	Eo.length <= n && Eo.push(Object.freeze(q.begin())), r = Eo[n], typeof e != "string" && (e = String(e)), r.reset();
	let i = r._write(e, !0);
	if (i > 0) {
		let e = r.value();
		if (e === void 0 && i > 1) throw Error("Pending value could not complete");
		return e = typeof t == "function" ? function e(n, r) {
			let i, a, o = n[r];
			if (o && typeof o == "object") for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (a = e(o, i), a === void 0 ? delete o[i] : o[i] = a);
			return t.call(n, r, o);
		}({ "": e }, "") : e, Do--, e;
	}
	r.finalError();
};
function Oo() {
	return this && this.valueOf();
}
q.defineClass = function(e, t) {
	let n, r = Object.keys(t);
	for (let e = 1; e < r.length; e++) {
		let t, n;
		(t = r[e - 1]) > (n = r[e]) && (r[e - 1] = n, r[e] = t, e ? e -= 2 : e--);
	}
	To.push(n = {
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
}, q.registerToJSOX = function(e, t, n) {
	throw Error("registerToJSOX deprecated; please use toJSOX:" + prototypeName + prototype.toString());
}, q.toJSOX = function(e, t, n) {
	if (!t.prototype || t.prototype !== Object.prototype) {
		if ($.get(t.prototype)) throw Error("Existing toJSOX has been registered for prototype");
		$.set(t.prototype, {
			external: !0,
			name: e || n.constructor.name,
			cb: n
		});
	} else {
		let r = Object.keys(t).toString();
		if (Co.get(r)) throw Error("Existing toJSOX has been registered for object type");
		Co.set(r, {
			external: !0,
			name: e,
			cb: n
		});
	}
}, q.fromJSOX = function(e, t, n) {
	function r() {}
	if (t ||= r.prototype, wo.get(e)) throw Error("Existing fromJSOX has been registered for prototype");
	if (t && !("constructor" in t)) throw Error("Please pass a prototype like thing...");
	wo.set(e, {
		protoCon: t.prototype.constructor,
		cb: n
	});
}, q.registerFromJSOX = function(e, t) {
	throw Error("deprecated; please adjust code to use fromJSOX:" + e + t.toString());
}, q.addType = function(e, t, n, r) {
	q.toJSOX(e, t, n), q.fromJSOX(e, t, r);
}, q.registerToFrom = function(e, t) {
	throw Error("registerToFrom deprecated; please use addType:" + e + t.toString());
}, q.stringifier = function() {
	let e = [], t = "\"", n = /* @__PURE__ */ new WeakMap(), r = [], i = [], a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new Map(), s = null, c = [], l = !1;
	function u(e) {
		return typeof e == "string" && e === "" ? "\"\"" : typeof e == "number" && !isNaN(e) ? [
			"'",
			e.toString(),
			"'"
		].join("") : e.includes("﻿") || e in ho || /[0-9\-]/.test(e[0]) || /[\n\r\t #\[\]{}()<>\~!+*/.:,\-"'`]/.test(e) ? t + q.escape(e) + t : e;
	}
	$.get(Object.prototype) || ($.set(Object.prototype, {
		external: !1,
		name: Object.prototype.constructor.name,
		cb: null
	}), $.set(Date.prototype, {
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
	}), $.set(go.prototype, {
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
	}), $.set(Boolean.prototype, {
		external: !1,
		name: "Boolean",
		cb: Oo
	}), $.set(Number.prototype, {
		external: !1,
		name: "Number",
		cb: function() {
			return isNaN(this) ? "NaN" : isFinite(this) ? String(this) : this < 0 ? "-Infinity" : "Infinity";
		}
	}), $.set(String.prototype, {
		external: !1,
		name: "String",
		cb: function() {
			return "\"" + q.escape(Oo.apply(this)) + "\"";
		}
	}), typeof BigInt == "function" && $.set(BigInt.prototype, {
		external: !1,
		name: "BigInt",
		cb: function() {
			return this + "n";
		}
	}), $.set(ArrayBuffer.prototype, {
		external: !0,
		name: "ab",
		cb: function() {
			return "[" + u(jo(this)) + "]";
		}
	}), $.set(Uint8Array.prototype, {
		external: !0,
		name: "u8",
		cb: function() {
			return "[" + u(jo(this.buffer)) + "]";
		}
	}), $.set(Uint8ClampedArray.prototype, {
		external: !0,
		name: "uc8",
		cb: function() {
			return "[" + u(jo(this.buffer)) + "]";
		}
	}), $.set(Int8Array.prototype, {
		external: !0,
		name: "s8",
		cb: function() {
			return "[" + u(jo(this.buffer)) + "]";
		}
	}), $.set(Uint16Array.prototype, {
		external: !0,
		name: "u16",
		cb: function() {
			return "[" + u(jo(this.buffer)) + "]";
		}
	}), $.set(Int16Array.prototype, {
		external: !0,
		name: "s16",
		cb: function() {
			return "[" + u(jo(this.buffer)) + "]";
		}
	}), $.set(Uint32Array.prototype, {
		external: !0,
		name: "u32",
		cb: function() {
			return "[" + u(jo(this.buffer)) + "]";
		}
	}), $.set(Int32Array.prototype, {
		external: !0,
		name: "s32",
		cb: function() {
			return "[" + u(jo(this.buffer)) + "]";
		}
	}), $.set(Float32Array.prototype, {
		external: !0,
		name: "f32",
		cb: function() {
			return "[" + u(jo(this.buffer)) + "]";
		}
	}), $.set(Float64Array.prototype, {
		external: !0,
		name: "f64",
		cb: function() {
			return "[" + u(jo(this.buffer)) + "]";
		}
	}), $.set(Float64Array.prototype, {
		external: !0,
		name: "f64",
		cb: function() {
			return "[" + u(jo(this.buffer)) + "]";
		}
	}), $.set(RegExp.prototype, ja = {
		external: !0,
		name: "regex",
		cb: function(e, t) {
			return "'" + escape(this.source) + "'";
		}
	}), wo.set("regex", {
		protoCon: RegExp,
		cb: function(e, t) {
			return new RegExp(this);
		}
	}), $.set(Map.prototype, ja = {
		external: !0,
		name: "map",
		cb: null
	}), wo.set("map", {
		protoCon: Map,
		cb: function(e, t) {
			if (e) {
				this.set(e, t);
				return;
			}
			return this;
		}
	}), $.set(Array.prototype, Aa = {
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
			n.set(e, ma.stringify(r));
			return;
		}
		return "ref" + t;
	}
	function p(t, n) {
		let r, i, a = Object.getPrototypeOf(t);
		if (i = e.find((e) => {
			if (e.proto && e.proto === a) return !0;
		}), i) return i;
		if (e.length || To.length) {
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
			}), i ||= To.find((e) => {
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
		let S = C("", { "": t });
		return To.length = 0, S;
		function C(t, n) {
			var m = g;
			let h = Aa.cb, y = ja.cb;
			Aa.cb = x, ja.cb = S;
			let b = w(t, n);
			return Aa.cb = h, ja.cb = y, b;
			function x() {
				let e, t = [], n = r.length;
				for (let e = 0; e < this.length; e += 1) r[n] = e, t[e] = C(e, this) || "null";
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
					r[o] = i, t += (n ? "" : ",") + u(i) + ":" + C("tmp", e), r.length = o, n = !1;
				}
				return t += "}", t;
			}
			function w(t, n) {
				let h, y, b, x, S, w, T = r.length, ee = !0, E = n[t], te = typeof E == "object", D;
				te && E !== null && s && (c.find((e) => e === E) || (c.push(E), i[T] = E, ee = !1, E = s.apply(E, [d]), te = typeof E == "object", c.pop(), i.length = T, te = typeof E == "object"));
				let ne = E != null && Object.getPrototypeOf(E), O = ne && (a.get(ne) || $.get(ne) || null), k = !O && E != null && (o.get(Object.keys(E).toString()) || Co.get(Object.keys(E).toString()) || null);
				typeof v == "function" && (ee = !1, E = v.call(n, t, E));
				let re = O && O.cb || k && k.cb;
				if (typeof E == "object" && E && typeof re == "function") if (c.find((e) => e === E)) b = f(E);
				else {
					if (typeof E == "object" && (b = f(E), b)) return b;
					c.push(E), i[T] = E, E = re.call(E, d), ee = !1, c.pop(), O && O.name && typeof E == "string" && E[0] !== "-" && (E[0] < "0" || E[0] > "9") && E[0] !== "\"" && E[0] !== "'" && E[0] !== "`" && E[0] !== "[" && E[0] !== "{" && (E = " " + E), i.length = T;
				}
				else if (typeof E == "object" && (b = f(E), b)) return b;
				switch (typeof E) {
					case "bigint": return E + "n";
					case "string": {
						E = ee ? u(E) : E;
						let n = "";
						return t === "" && (n = e.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "") + To.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "") + (g ? "\n" : "")), O && O.external ? n + O.name + E : k && k.external ? n + k.name + E : n + E;
					}
					case "number":
					case "boolean":
					case "null": return String(E);
					case "object":
						if (b) return b;
						if (!E) return "null";
						if (g += _, S = null, w = [], v && typeof v == "object") {
							for (x = v.length, S = p(E, v), h = 0; h < x; h += 1) typeof v[h] == "string" && (y = v[h], r[T] = y, b = C(y, E), b !== void 0 && (S ? w.push(b) : w.push(u(y) + (g ? ": " : ":") + b)));
							r.splice(T, 1);
						} else {
							S = p(E);
							let e = [];
							for (y in E) if (!(l && !Object.prototype.propertyIsEnumerable.call(E, y)) && Object.prototype.hasOwnProperty.call(E, y)) {
								let t;
								for (t = 0; t < e.length; t++) if (e[t] > y) {
									e.splice(t, 0, y);
									break;
								}
								t == e.length && e.push(y);
							}
							for (let t = 0; t < e.length; t++) y = e[t], Object.prototype.hasOwnProperty.call(E, y) && (r[T] = y, b = C(y, E), b !== void 0 && (S ? w.push(b) : w.push(u(y) + (g ? ": " : ":") + b)));
							r.splice(T, 1);
						}
						D = t === "" ? (e.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "") || To.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "")) + (g ? "\n" : "") : "", O && O.external && (D += u(O.name));
						let n = null;
						return S && (n = u(S.name)), b = D + (w.length === 0 ? "{}" : g ? (S ? n : "") + "{\n" + g + w.join(",\n" + g) + "\n" + m + "}" : (S ? n : "") + "{" + w.join(",") + "}"), g = m, b;
				}
			}
		}
	}
};
var ko = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_", Ao = {
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
for (let e = 0; e < 64; e++) Ao[ko[e]] = e;
Object.freeze(Ao);
function jo(e) {
	let t = "", n = new Uint8Array(e), r = n.byteLength, i = r % 3, a = r - i, o, s, c, l, u;
	for (let e = 0; e < a; e += 3) u = n[e] << 16 | n[e + 1] << 8 | n[e + 2], o = (u & 16515072) >> 18, s = (u & 258048) >> 12, c = (u & 4032) >> 6, l = u & 63, t += ko[o] + ko[s] + ko[c] + ko[l];
	return i == 1 ? (u = n[a], o = (u & 252) >> 2, s = (u & 3) << 4, t += ko[o] + ko[s] + "==") : i == 2 && (u = n[a] << 8 | n[a + 1], o = (u & 64512) >> 10, s = (u & 1008) >> 4, c = (u & 15) << 2, t += ko[o] + ko[s] + ko[c] + "="), t;
}
function Mo(e) {
	let t;
	t = e.length % 4 == 1 ? ((e.length + 3) / 4 | 0) * 3 - 3 : e.length % 4 == 2 ? ((e.length + 3) / 4 | 0) * 3 - 2 : e.length % 4 == 3 ? ((e.length + 3) / 4 | 0) * 3 - 1 : Ao[e[e.length - 3]] == -1 ? ((e.length + 3) / 4 | 0) * 3 - 3 : Ao[e[e.length - 2]] == -1 ? ((e.length + 3) / 4 | 0) * 3 - 2 : Ao[e[e.length - 1]] == -1 ? ((e.length + 3) / 4 | 0) * 3 - 1 : ((e.length + 3) / 4 | 0) * 3;
	let n = new ArrayBuffer(t), r = new Uint8Array(n), i, a = e.length + 3 >> 2;
	for (i = 0; i < a; i++) {
		let t = Ao[e[i * 4]], n = i * 4 + 1 < e.length ? Ao[e[i * 4 + 1]] : -1, a = n >= 0 && i * 4 + 2 < e.length ? Ao[e[i * 4 + 2]] : -1, o = a >= 0 && i * 4 + 3 < e.length ? Ao[e[i * 4 + 3]] : -1;
		n >= 0 && (r[i * 3 + 0] = t << 2 | n >> 4), a >= 0 && (r[i * 3 + 1] = n << 4 | a >> 2 & 15), o >= 0 && (r[i * 3 + 2] = a << 6 | o & 63);
	}
	return n;
}
q.stringify = function(e, t, n) {
	return q.stringifier().stringify(e, t, n);
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
}));
//#endregion
//#region ../../projects/lur.e/src/interactive/modules/UIState.ts
var No = (e) => e ? e instanceof Map ? Array.from(e.entries()) : Array.isArray(e) ? e.map((e, t) => Array.isArray(e) && e.length === 2 ? e : [t, e]) : e instanceof Set ? Array.from(e.values()).map((e, t) => [t, e]) : typeof e == "object" ? Object.entries(e) : [] : [], Po = Object.prototype.hasOwnProperty, Fo = (e) => !e || typeof e != "object" || Array.isArray(e) ? !1 : !(e instanceof Map) && !(e instanceof Set), Io = (e, t) => {
	if (e && typeof e == "object") {
		if ("id" in e && e.id != null) return e.id;
		if ("key" in e && e.key != null) return e.key;
	}
	return t;
}, Lo = (e, t, n) => e ?? Io(t) ?? n, Ro = (e, t) => {
	for (let n of Object.keys(t)) {
		let r = t[n], i = e[n];
		if (Fo(i) && Fo(r)) {
			Ro(i, r);
			continue;
		}
		i !== r && (e[n] = r);
	}
	return e;
}, zo = (e, t) => {
	if (e === t) return e;
	let n = t && typeof t == "object";
	return e instanceof Map && n || e instanceof Set && n || Array.isArray(e) && n ? (Bo(e, t), e) : Fo(e) && Fo(t) ? (Ro(e, t), e) : t;
}, Bo = (e, t) => {
	if (!e || !t) return e;
	let n = No(t);
	if (!n.length) return e;
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e.values()) {
			let e = Io(n);
			e != null && t.set(e, n);
		}
		let r = /* @__PURE__ */ new Set();
		for (let [i, a] of n) {
			let n = Lo(i, a);
			if (n == null) {
				e.has(a) || e.add(a);
				continue;
			}
			let o = t.has(n), s = o ? t.get(n) : void 0;
			if (o) {
				let r = zo(s, a);
				r !== s && (e.delete(s), e.add(r), t.set(n, r));
			} else e.add(a), t.set(n, a);
			r.add(n);
		}
		if (r.size) for (let t of Array.from(e.values())) {
			let n = Io(t);
			n != null && !r.has(n) && e.delete(t);
		}
		return e;
	}
	if (e instanceof Map) {
		let t = new Map(n);
		for (let n of Array.from(e.keys())) t.has(n) || e.delete(n);
		for (let [n, r] of t.entries()) if (e.has(n)) {
			let t = e.get(n), i = zo(t, r);
			i !== t && e.set(n, i);
		} else e.set(n, r);
		return e;
	}
	if (Array.isArray(e)) {
		let t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new WeakMap();
		e.forEach((e, n) => {
			t.add(n);
			let a = Io(e, n);
			a != null && !r.has(a) && r.set(a, n), e && typeof e == "object" && i.set(e, n);
		});
		let a = (e) => {
			if (e != null && t.has(e)) return t.delete(e), e;
		}, o = () => {
			let e = t.values().next();
			if (e.done) return;
			let n = e.value;
			return t.delete(n), n;
		}, s = 0, c = 0;
		for (let [t, l] of n) {
			let n = Lo(t, l, c++), u = a(n == null ? void 0 : r.get(n));
			u == null && l && typeof l == "object" && (u = a(i.get(l))), u ??= o();
			let d = u == null ? void 0 : e[u], f = d === void 0 ? l : zo(d, l);
			s < e.length ? e[s] !== f && (e[s] = f) : e.push(f), s++;
		}
		for (; e.length > s;) e.pop();
		return e;
	}
	if (typeof e == "object") {
		let t = new Set(n.map(([e]) => String(e)));
		for (let n of Object.keys(e)) t.has(n) || delete e[n];
		for (let [t, r] of n) {
			let n = String(t);
			if (Po.call(e, n)) {
				let t = e[n], i = zo(t, r);
				i !== t && (e[n] = i);
			} else e[n] = r;
		}
		return e;
	}
	return e;
}, Vo = (e, t = "id") => {
	if (e && (e instanceof Set || Array.isArray(e))) {
		let n = Array.from(e?.values?.() || []).map((e) => [e?.[t], e]).filter((e) => e?.[0] != null);
		return Bo(e, new Map(n));
	}
	return e;
}, Ho = () => typeof chrome < "u" && chrome?.storage?.local, Uo = (e, t, n, r = (e) => de(e), i = "id", a = 6e3) => {
	let o = null;
	o = Vo(t?.() || {}, i), Ho() ? chrome.storage.local.get([e], (t) => {
		if (t[e]) {
			let r = n(q.parse(t?.[e] || "{}"));
			Bo(o, r);
		}
	}) : typeof localStorage < "u" && (localStorage.getItem(e) ? (o = n(q.parse(localStorage.getItem(e) || "{}")), Vo(o, i)) : localStorage.setItem(e, q.stringify(r(o))));
	let s = (t) => {
		let n = q.stringify(r(Vo(o, i)));
		Ho() ? chrome.storage.local.set({ [e]: n }) : typeof localStorage < "u" && localStorage.setItem(e, n);
	};
	if (Ut(s, a), typeof window < "u" && typeof document < "u") {
		let t = [
			W(document, "visibilitychange", (e) => {
				document.visibilityState === "hidden" && s(e);
			}),
			W(window, "beforeunload", (e) => s(e)),
			W(window, "pagehide", (e) => s(e)),
			W(window, "storage", (t) => {
				t.storageArea == localStorage && t.key == e && Bo(o, n(q.parse(t?.newValue || q.stringify(r(Vo(o, i))))));
			})
		];
		R(o, Symbol.dispose, () => t.forEach((e) => e?.()));
	}
	if (Ho() && chrome.storage.onChanged.addListener((t, r) => {
		if (r === "local" && t[e]) {
			let r = t[e].newValue;
			r && Bo(o, n(q.parse(r)));
		}
	}), o && typeof o == "object") try {
		Object.defineProperty(o, "$save", {
			value: s,
			configurable: !0,
			enumerable: !1,
			writable: !0
		});
	} catch {
		o.$save = s;
	}
	return o;
};
//#endregion
//#region ../../projects/lur.e/src/interactive/modules/ScrollBar.ts
Vt();
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
var Wo = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
	didTimeout: !1,
	timeRemaining: () => 0
}), 0), Go = "electronBridge";
function Ko(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	if (t === "transparent") return 0;
	if (t.startsWith("#")) {
		let e = t;
		if (e.length === 4 || e.length === 7) return 1;
		if (e.length === 5) {
			let t = e[4], n = t + t;
			return Jo(parseInt(n, 16) / 255, 0, 1);
		}
		if (e.length === 9) {
			let t = e.slice(7, 9);
			return Jo(parseInt(t, 16) / 255, 0, 1);
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
			let t = qo(r.slice(e + 1).trim());
			return t == null ? null : Jo(t, 0, 1);
		}
	}
	if (r.includes(",")) {
		let e = r.split(",").map((e) => e.trim());
		if (e.length >= 4) {
			let t = qo(e[3]);
			return t == null ? null : Jo(t, 0, 1);
		}
		return 1;
	}
	return 1;
}
function qo(e) {
	if (!e) return null;
	if (e.endsWith("%")) {
		let t = parseFloat(e);
		return Number.isNaN(t) ? null : t / 100;
	}
	let t = parseFloat(e);
	return Number.isNaN(t) ? null : t;
}
function Jo(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
var Yo = (e) => !e || e == null ? 0 : (Ko?.(e) || 0) > .1, Xo = (e, t = 1e3, ...n) => {
	Wo(async () => {
		if (!(!e || typeof e != "function")) for (;;) await Promise.try(e, ...n), await new Promise((e) => setTimeout(e, t)), await new Promise((e) => Wo(e, 100)), await new Promise((e) => requestAnimationFrame(e));
	}, 1e3);
}, Zo = () => {
	if (typeof document > "u") return null;
	try {
		let e = document.querySelectorAll("[data-shell]");
		for (let t of e) {
			let e = t.shadowRoot;
			if (!e) continue;
			let n = e.querySelector(".app-shell__nav, .app-shell__toolbar");
			if (!n) continue;
			let r = getComputedStyle(n).backgroundColor;
			if (Yo(r)) return r;
		}
	} catch {}
	return null;
}, Qo = () => {
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
		let n = $o(Math.floor(t.left + Math.min(40, t.width * .2)), Math.floor(t.top + t.height * .5));
		return Yo(n) ? n : null;
	} finally {
		e.remove();
	}
}, $o = (e, t, n = null) => {
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
	}).sort((e, t) => Math.sign(t.zIndex - e.zIndex)).filter(({ color: e }) => Yo(e));
	return r?.[0]?.element instanceof HTMLElement && r?.[0]?.color || "transparent";
}, es = (e) => {
	let t = e?.getBoundingClientRect();
	if (t) {
		let n = .5 * ($t?.() || 1);
		return $o((t.left + t.right) * n, (t.top + t.bottom) * n, e);
	}
}, ts = (e = document.documentElement) => {
	let t = e?.querySelector?.("meta[data-theme-color]") ?? e?.querySelector?.("meta[name=\"theme-color\"]");
	!t && e == document.documentElement && (t = document.createElement("meta"), t.setAttribute("name", "theme-color"), t.setAttribute("data-theme-color", ""), t.setAttribute("content", "transparent"), document.head.appendChild(t));
	let n = Zo(), r = n ? null : Qo(), i = Math.max(8, Math.floor(globalThis.innerWidth * .12)), a = !n && !r ? $o(i, 20) : null, o = n || r || (a && Yo(a) ? a : null);
	o && o !== "transparent" && (t || window?.electronBridge) && e == document.documentElement && t?.setAttribute?.("content", o);
}, ns = (e = document.documentElement) => {
	e.querySelectorAll("body, body > *, body > * > *").forEach((e) => {
		e && es(e);
	});
}, rs = (e = document.documentElement) => {
	let t = "__LURE_DYNAMIC_THEME_STARTED__";
	if (globalThis?.[t]) return;
	globalThis[t] = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({}) => ns(e));
	let n = () => {
		ts(e), ns(e);
	};
	W(e, "u2-appear", () => Wo(n, 100)), W(e, "u2-hidden", () => Wo(n, 100)), W(e, "u2-theme-change", () => Wo(n, 100)), W(window, "load", () => Wo(n, 100)), W(document, "visibilitychange", () => Wo(n, 100)), Xo(n, 500);
}, is = async () => {
	ts(), ns();
}, as = () => {
	typeof document > "u" || globalThis?.__LURE_AUTO_THEME_ENGINE__ === !0 && (requestAnimationFrame(() => is?.()), rs?.());
};
as();
//#endregion
//#region ../../projects/lur.e/src/utils/opfs/OPFS.uniform.worker.ts?worker
function os(e) {
	return new Worker("/assets/OPFS.uniform.worker-DZLd9eQQ.js", { name: e?.name });
}
//#endregion
//#region ../../projects/lur.e/src/utils/opfs/OPFS.ts
var ss = null, cs = typeof ServiceWorkerGlobalScope < "u" && self instanceof ServiceWorkerGlobalScope, ls = "opfs-sw-bridge-v1", us = null, ds = null, fs = 0, ps = () => {
	if (!cs) return null;
	if (ds) return ds;
	try {
		return typeof BroadcastChannel > "u" ? null : (ds = new BroadcastChannel(ls), ds);
	} catch {
		return null;
	}
}, ms = (e, t = {}, n = 2500) => {
	let r = ps();
	if (!r) return Promise.reject(/* @__PURE__ */ Error("SW OPFS bridge is unavailable"));
	let i = `sw-opfs-${Date.now()}-${++fs}`;
	return new Promise((a, o) => {
		let s = null, c = (e) => {
			let t = e?.data || {};
			!t || typeof t != "object" || t?.type === "opfs-sw-response" && String(t?.requestId || "") === i && (r.removeEventListener("message", c), s && clearTimeout(s), t?.ok ? a(t?.result) : o(Error(String(t?.error || "Unknown bridge error"))));
		};
		r.addEventListener("message", c), s = setTimeout(() => {
			r.removeEventListener("message", c), o(/* @__PURE__ */ Error("SW OPFS bridge timeout"));
		}, n), r.postMessage({
			type: "opfs-sw-request",
			requestId: i,
			action: e,
			payload: t
		});
	});
}, hs = () => us || (us = new Promise(async (e) => {
	if (typeof Worker < "u" && !cs) try {
		let t = await m({
			name: "opfs-worker",
			script: os
		});
		ss = new w("opfs-worker", async () => t, {
			timeout: 3e4,
			retries: 3,
			batching: !0,
			compression: !1
		}), e(ss);
	} catch (t) {
		console.warn("OPFSUniformWorker instantiation failed, falling back to main thread...", t), ss = null, e(null);
	}
	else ss = null, e(null);
}), us), gs = {
	readDirectory: async ({ rootId: e, path: t, create: n }) => {
		try {
			let e = await navigator.storage.getDirectory(), r = (t || "").trim().replace(/\/+/g, "/").split("/").filter((e) => e), i = e;
			for (let e of r) i = await i.getDirectoryHandle(e, { create: n });
			let a = [];
			for await (let [e, t] of i.entries()) a.push([e, t]);
			return a;
		} catch (e) {
			return console.warn("Direct readDirectory error:", e), [];
		}
	},
	readFile: async ({ rootId: e, path: t, type: n }) => {
		try {
			let e = await navigator.storage.getDirectory(), r = (t || "").trim().replace(/\/+/g, "/").split("/").filter((e) => e), i = r.pop(), a = e;
			for (let e of r) a = await a.getDirectoryHandle(e, { create: !1 });
			let o = await (await a.getFileHandle(i, { create: !1 })).getFile();
			return n === "text" ? await o.text() : n === "arrayBuffer" ? await o.arrayBuffer() : o;
		} catch (e) {
			return console.warn("Direct readFile error:", e), null;
		}
	},
	writeFile: async ({ rootId: e, path: t, data: n }) => {
		try {
			let e = await navigator.storage.getDirectory(), r = (t || "").trim().replace(/\/+/g, "/").split("/").filter((e) => e), i = r.pop(), a = e;
			for (let e of r) a = await a.getDirectoryHandle(e, { create: !0 });
			let o = await (await a.getFileHandle(i, { create: !0 })).createWritable();
			return await o.write(n), await o.close(), !0;
		} catch (e) {
			return console.warn("Direct writeFile error:", e), !1;
		}
	},
	remove: async ({ rootId: e, path: t, recursive: n }) => {
		try {
			let e = await navigator.storage.getDirectory(), r = (t || "").trim().replace(/\/+/g, "/").split("/").filter((e) => e), i = r.pop(), a = e;
			for (let e of r) a = await a.getDirectoryHandle(e, { create: !1 });
			return await a.removeEntry(i, { recursive: n }), !0;
		} catch {
			return !1;
		}
	},
	copy: async ({ from: e, to: t }) => {
		try {
			let n = async (e, t) => {
				if (e.kind === "directory") for await (let [r, i] of e.entries()) if (i.kind === "directory") await n(i, await t.getDirectoryHandle(r, { create: !0 }));
				else {
					let e = await i.getFile(), n = await (await t.getFileHandle(r, { create: !0 })).createWritable();
					await n.write(e), await n.close();
				}
				else {
					let n = await e.getFile(), r = await t.createWritable();
					await r.write(n), await r.close();
				}
			};
			return await n(e, t), !0;
		} catch (e) {
			return console.warn("Direct copy error:", e), !1;
		}
	},
	observe: async () => !1,
	unobserve: async () => !0,
	mount: async () => !0,
	unmount: async () => !0
}, _s = (e, t = {}, n = []) => cs && gs[e] ? ms(e, t).catch(() => gs[e](t)) : new Promise(async (n, r) => {
	try {
		let i = await hs();
		if (!i) return gs[e] ? n(gs[e](t)) : r(/* @__PURE__ */ Error("No worker channel available"));
		let a;
		try {
			a = await i.request(e, t);
		} catch (r) {
			if (gs[e]) return n(gs[e](t));
			throw r;
		}
		if (a === !1 && (e === "writeFile" || e === "remove" || e === "copy") && gs[e]) return n(gs[e](t));
		n(a);
	} catch (i) {
		if (gs[e]) try {
			return n(gs[e](t));
		} catch (e) {
			return r(e);
		}
		r(i);
	}
}), vs = new Map([
	["/", async () => await navigator?.storage?.getDirectory?.()],
	["/user/", async () => await navigator?.storage?.getDirectory?.()],
	["/assets/", async () => (console.warn("Backend related API not implemented!"), null)]
]), ys = /* @__PURE__ */ new Map();
async function bs(e, t = "") {
	(e == null || e == null || e?.trim?.()?.length == 0) && (e = "/user/");
	let n = typeof e == "string" ? e?.trim?.()?.replace?.(/^\//, "")?.trim?.()?.split?.("/")?.filter?.((e) => !!e?.trim?.())?.at?.(0) : null;
	if (n && (typeof localStorage < "u" && JSON.parse(localStorage?.getItem?.("opfs.mounted") || "[]").includes(n) && (e = ys?.get(n)), e ||= await vs?.get?.(`/${n}/`)?.() ?? await navigator.storage.getDirectory()), e instanceof FileSystemDirectoryHandle) return e;
	let r = t?.trim?.() || "/", i = r.startsWith("/") ? r : "/" + r, a = null, o = 0;
	for (let [e, t] of vs.entries()) i.startsWith(e) && e.length > o && (a = t, o = e.length);
	try {
		return (a ? await a() : null) || await navigator?.storage?.getDirectory?.();
	} catch (e) {
		return console.warn("Failed to resolve root handle, falling back to OPFS root:", e), await navigator?.storage?.getDirectory?.();
	}
}
function xs(e = "", t) {
	if (!t?.trim()) return e;
	let n = t.trim();
	if (n.startsWith("/")) return n;
	let r = e.split("/").filter((e) => e?.trim()), i = n.split("/").filter((e) => e?.trim());
	for (let e of i) if (e === ".") continue;
	else e === ".." ? r.length > 0 && r.pop() : r.push(e);
	return "/" + r.join("/");
}
async function Ss(e, t, n = "") {
	let r = xs(n, t);
	return {
		rootHandle: await bs(e, r),
		resolvedPath: r
	};
}
function Cs(e, t, n) {
	return e?.(t, n), null;
}
function ws(e, t) {
	console.trace(`[${e}] ${t}`);
}
var Ts = (e) => e?.trim?.()?.split?.(".")?.[1]?.trim?.()?.length > 0;
async function Es(e, t, { create: n = !1, basePath: r = "" } = {}, i = ws) {
	try {
		let { rootHandle: i, resolvedPath: a } = await Ss(e, t, r), o = re(a).split("/").filter((e) => !!e?.trim?.());
		o.length > 0 && Ts(o[o.length - 1]?.trim?.()) && o?.pop?.();
		let s = i;
		if (o?.length > 0) {
			for (let e of o) if (s = await s?.getDirectoryHandle?.(e, { create: n }), !s) break;
		}
		return s;
	} catch (e) {
		return Cs(i, "error", `getDirectoryHandle: ${e.message}`);
	}
}
async function Ds(e, t, n = {}, r = ws) {
	try {
		let { rootHandle: r, resolvedPath: i } = await Ss(e, t, n?.basePath || "");
		return await _s("readFile", {
			rootId: "",
			path: re(i),
			type: "blob"
		}, r ? [r] : []);
	} catch (e) {
		return Cs(r, "error", `readFile: ${e.message}`);
	}
}
async function Os(e, t, n, r = ws) {
	if (n instanceof FileSystemFileHandle && (n = await n.getFile()), n instanceof FileSystemDirectoryHandle) {
		let r = await Es(await bs(e), t + (t?.trim?.()?.endsWith?.("/") ? "" : "/") + (n?.name || "")?.trim?.()?.replace?.(/\s+/g, "-"), { create: !0 });
		return await As(n, r, {})?.catch?.(console.warn.bind(console));
	} else try {
		let { rootHandle: r, resolvedPath: i } = await Ss(e, t, "");
		return await _s("writeFile", {
			rootId: "",
			path: re(i),
			data: n
		}, r ? [r] : []) !== !1;
	} catch (e) {
		return Cs(r, "error", `writeFile: ${e.message}`);
	}
}
var ks = typeof Image < "u" ? new Image() : null;
if (ks) {
	ks.decoding = "async", ks.width = 24, ks.height = 24;
	try {
		ks.src = URL.createObjectURL(new Blob(["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 384 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z\"/></svg>"], { type: "image/svg+xml" }));
	} catch {}
}
var As = async (e, t, n = {}, r = ws) => _s("copy", {
	from: e,
	to: t
}, [e, t]), js = null, Ms = () => (js ||= import("./src-BhZ7_wUJ.js").then((e) => ({
	readFile: e.readFile,
	writeFile: e.writeFile
})), js), Ns = (e, t = !0) => {
	let n = String(e || "").trim();
	return t && (n = n.toLowerCase()), n = n.replace(/\s+/g, "-"), n = n.replace(/[^a-z0-9_.\-+#&]/g, "-"), n = n.replace(/-+/g, "-"), n;
}, Ps = (e = "") => e ? e.includes("json") ? "json" : e.includes("markdown") ? "md" : e.includes("plain") ? "txt" : e === "image/jpeg" || e === "image/jpg" ? "jpg" : e === "image/png" ? "png" : e.startsWith("image/") ? e.split("/").pop() || "" : e.includes("html") ? "html" : "" : "", Fs = (e) => String(e || "").split("/").filter(Boolean), Is = (e) => e.endsWith("/") ? e : e + "/", Ls = (e, t = !0) => (t ? "/" : "") + e.filter(Boolean).join("/"), Rs = (e) => Ls(Fs(e).map((e) => Ns(e))), zs = [
	"id",
	"_id",
	"key",
	"slug",
	"name"
], Bs = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Vs(e, t) {
	let n = Array.isArray(t.arrayKey) ? t.arrayKey : t.arrayKey ? [t.arrayKey] : zs, r = [], i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
	for (let t of e) if (t != null) if (Bs(t)) {
		let e;
		for (let r of n) if (r in t && t[r] != null) {
			e = String(t[r]);
			break;
		}
		if (e != null) a.has(e) || (a.set(e, t), r.push(t));
		else {
			let e = Us(t);
			o.has(e) || (o.add(e), r.push(t));
		}
	} else if (Array.isArray(t)) {
		let e = Us(t);
		o.has(e) || (o.add(e), r.push(t));
	} else i.has(t) || (i.add(t), r.push(t));
	return r;
}
function Hs(e, t, n) {
	if (Array.isArray(e) && Array.isArray(t)) switch (n.arrayStrategy) {
		case "replace": return t.slice();
		case "concat": return e.concat(t);
		default: return Vs(e.concat(t), { arrayKey: n.arrayKey });
	}
	if (Bs(e) && Bs(t)) {
		let r = { ...e };
		for (let i of Object.keys(t)) i in e ? r[i] = Hs(e[i], t[i], n) : r[i] = t[i];
		return r;
	}
	return t;
}
function Us(e) {
	if (!Bs(e)) return JSON.stringify(e);
	let t = Object.keys(e).sort(), n = {};
	for (let r of t) n[r] = e[r];
	return JSON.stringify(n);
}
async function Ws(e) {
	return await e.text();
}
async function Gs(e, t) {
	try {
		let { readFile: n } = await Ms(), r = await n(e, t)?.catch?.(console.warn.bind(console));
		if (!r) return null;
		let i = await Ws(r);
		return i?.trim() ? q.parse(i) : null;
	} catch {
		return null;
	}
}
var Ks = async (e, t, n, r = {}) => {
	let { writeFile: i } = await Ms(), { forceExt: a, ensureJson: o, toLower: s = !0, sanitize: c = !0, mergeJson: l, arrayStrategy: u = "union", arrayKey: d, jsonSpace: f = 2 } = r, p = String(t || "").trim(), m = p.endsWith("/"), h = !m && Fs(p).length > 0 && p.includes("."), g = m ? p : h ? p.split("/").slice(0, -1).join("/") : p, _ = h ? p.split("/").pop() || "" : n?.name || "";
	g ||= "/", _ ||= Date.now() + "";
	let v = _.lastIndexOf("."), y = v > 0 ? _.slice(0, v) : _, b = a || (o ? "json" : v > 0 ? _.slice(v + 1) : Ps(n?.type || "")) || "";
	c && (g = Rs(g), y = Ns(y, s));
	let x = b ? `${y}.${b}` : y, S = Is(g) + x;
	if (l !== !1 && (o || b.toLowerCase() === "json" || n?.type === "application/json")) try {
		let t;
		if (n instanceof File || n instanceof Blob) {
			let e = await Ws(n);
			t = e?.trim() ? q.parse(e) : {};
		} else t = n;
		let r = await Gs(e, S)?.catch?.(console.warn.bind(console)), a = r == null ? t : Hs(r, t, {
			arrayStrategy: u,
			arrayKey: d
		}), o = JSON.stringify(a, void 0, f), s = await i(e, S, new File([o], x, { type: "application/json" }))?.catch?.(console.warn.bind(console));
		return typeof document < "u" && document?.dispatchEvent?.(new CustomEvent("rs-fs-changed", {
			detail: s,
			bubbles: !0,
			composed: !0,
			cancelable: !0
		})), s;
	} catch (e) {
		console.warn("writeFileSmart JSON merge failed, falling back to raw write:", e);
	}
	let C;
	if (n instanceof File) if (n.name === x) C = n;
	else {
		let e = n.type || (b ? `application/${b}` : "application/octet-stream"), t = await n.arrayBuffer();
		C = new File([t], x, { type: e });
	}
	else {
		let e = n.type || (b ? `application/${b}` : "application/octet-stream");
		C = new File([await n.arrayBuffer()], x, { type: e });
	}
	let w = await i(e, S, C)?.catch?.(console.warn.bind(console));
	return typeof document < "u" && document?.dispatchEvent?.(new CustomEvent("rs-fs-changed", {
		detail: w,
		bubbles: !0,
		composed: !0,
		cancelable: !0
	})), w;
}, qs = (e = "", t = "") => {
	let n = t.endsWith("/") ? t : `${t}/`;
	return e.startsWith(n);
}, Js = new BroadcastChannel("rs-fs"), Ys = /* @__PURE__ */ new Map();
Js.addEventListener("close", () => Ys.clear()), Js.addEventListener("message", (e) => {
	let t = e?.data;
	if (!t || t.type !== "commit-result" && t.type !== "commit-to-clipboard") return;
	let n = t?.results ?? [];
	if (!(!Array.isArray(n) || !n.length)) {
		for (let [e, t] of Ys.entries()) if (t.size && n.some((t) => qs(t?.path, e))) for (let e of t) try {
			e();
		} catch (e) {
			console.warn(e);
		}
	}
});
//#endregion
export { Ar as $, pa as A, Mi as B, Go as C, gt as Ct, Vo as D, ie as Dt, Uo as E, de as Et, ra as F, Jr as G, Ai as H, Li as I, Hr as J, Ur as K, Ri as L, ca as M, ia as N, Bo as O, ea as P, Fr as Q, Ii as R, rs as S, _t as St, es as T, ue as Tt, ki as U, Ei as V, ci as W, kr as X, jr as Y, Ir as Z, Os as _, dr as _t, gs as a, Dr as at, ns as b, dt as bt, ks as c, Er as ct, vs as d, xr as dt, Rr as et, xs as f, Sr as ft, bs as g, fr as gt, Ss as h, mr as ht, ws as i, Br as it, fa as j, q as k, Cs as l, Tr as lt, Ds as m, pr as mt, As as n, Nr as nt, hs as o, Pr as ot, _s as p, br as pt, Vr as q, ys as r, zr as rt, Es as s, Lr as st, Ks as t, Or as tt, Ts as u, wr as ut, is as v, Fn as vt, $o as w, ut as wt, ts as x, lt as xt, as as y, In as yt, Fi as z };
