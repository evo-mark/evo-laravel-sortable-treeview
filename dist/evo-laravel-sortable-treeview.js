import { Fragment as e, Text as t, Transition as n, TransitionGroup as r, capitalize as i, computed as a, createBlock as o, createCommentVNode as s, createElementBlock as c, createElementVNode as l, createSlots as u, createTextVNode as d, createVNode as f, defineComponent as p, effectScope as m, getCurrentInstance as h, h as g, inject as _, isRef as v, mergeModels as y, mergeProps as b, nextTick as x, normalizeClass as S, normalizeStyle as C, onBeforeUnmount as w, onMounted as T, onScopeDispose as E, onUnmounted as D, onUpdated as ee, openBlock as O, provide as te, reactive as ne, readonly as re, ref as k, renderList as ie, renderSlot as ae, resolveDynamicComponent as oe, shallowRef as se, toDisplayString as ce, toRaw as le, toRef as A, toRefs as ue, toValue as de, unref as j, useId as fe, useModel as pe, useTemplateRef as me, warn as he, watch as ge, watchEffect as _e, withCtx as ve, withDirectives as ye } from "vue";
import { refAutoReset as be, syncRef as xe, useElementSize as Se, watchPausable as Ce } from "@vueuse/core";
import we from "axios";
import { cloneDeep as Te, debounce as Ee, isEqual as De, merge as Oe, pick as ke } from "es-toolkit";
import { ForwardSlots as Ae } from "@evomark/vue-forward-slots";
import { router as je, usePage as Me } from "@inertiajs/vue3";
//#region resources/components/keys.js
var Ne = Symbol.for("sortable-treeview"), Pe = Object.defineProperty, Fe = Object.getOwnPropertySymbols, Ie = Object.prototype.hasOwnProperty, Le = Object.prototype.propertyIsEnumerable, Re = (e, t, n) => t in e ? Pe(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ze = (e, t) => {
	for (var n in t ||= {}) Ie.call(t, n) && Re(e, n, t[n]);
	if (Fe) for (var n of Fe(t)) Le.call(t, n) && Re(e, n, t[n]);
	return e;
}, Be = (e, t) => {
	var n = {};
	for (var r in e) Ie.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Fe) for (var r of Fe(e)) t.indexOf(r) < 0 && Le.call(e, r) && (n[r] = e[r]);
	return n;
}, Ve = "[vue-draggable-plus]: ";
function He(e) {
	console.warn(Ve + e);
}
function Ue(e) {
	console.error(Ve + e);
}
function We(e, t, n) {
	return n >= 0 && n < e.length && e.splice(n, 0, e.splice(t, 1)[0]), e;
}
function Ge(e) {
	return e.replace(/-(\w)/g, (e, t) => t ? t.toUpperCase() : "");
}
function Ke(e) {
	return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[Ge(n)] = e[n]), t), {});
}
function qe(e, t) {
	return Array.isArray(e) && e.splice(t, 1), e;
}
function Je(e, t, n) {
	return Array.isArray(e) && e.splice(t, 0, n), e;
}
function Ye(e) {
	return e === void 0;
}
function Xe(e) {
	return typeof e == "string";
}
function Ze(e, t, n) {
	let r = e.children[n];
	e.insertBefore(t, r);
}
function Qe(e) {
	e.parentNode && e.parentNode.removeChild(e);
}
function $e(e, t = document) {
	let n = null;
	return n = typeof t?.querySelector == "function" ? (t?.querySelector)?.call(t, e) : document.querySelector(e), n || He(`Element not found: ${e}`), n;
}
function et(e, t, n = null) {
	return function(...r) {
		return e.apply(n, r), t.apply(n, r);
	};
}
function tt(e, t) {
	let n = ze({}, e);
	return Object.keys(t).forEach((r) => {
		n[r] ? n[r] = et(e[r], t[r]) : n[r] = t[r];
	}), n;
}
function nt(e) {
	return e instanceof HTMLElement;
}
function rt(e, t) {
	Object.keys(e).forEach((n) => {
		t(n, e[n]);
	});
}
function it(e) {
	return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
var at = Object.assign;
function ot(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function st(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ot(Object(n), !0).forEach(function(t) {
			lt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ct(e) {
	"@babel/helpers - typeof";
	return ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, ct(e);
}
function lt(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ut() {
	return ut = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ut.apply(this, arguments);
}
function dt(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function ft(e, t) {
	if (e == null) return {};
	var n = dt(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
var pt = "1.15.2";
function mt(e) {
	if (typeof window < "u" && window.navigator) return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var ht = mt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), gt = mt(/Edge/i), _t = mt(/firefox/i), vt = mt(/safari/i) && !mt(/chrome/i) && !mt(/android/i), yt = mt(/iP(ad|od|hone)/i), bt = mt(/chrome/i) && mt(/android/i), xt = {
	capture: !1,
	passive: !1
};
function M(e, t, n) {
	e.addEventListener(t, n, !ht && xt);
}
function N(e, t, n) {
	e.removeEventListener(t, n, !ht && xt);
}
function St(e, t) {
	if (t) {
		if (t[0] === ">" && (t = t.substring(1)), e) try {
			if (e.matches) return e.matches(t);
			if (e.msMatchesSelector) return e.msMatchesSelector(t);
			if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
		} catch {
			return !1;
		}
		return !1;
	}
}
function Ct(e) {
	return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function wt(e, t, n, r) {
	if (e) {
		n ||= document;
		do {
			if (t != null && (t[0] === ">" ? e.parentNode === n && St(e, t) : St(e, t)) || r && e === n) return e;
			if (e === n) break;
		} while (e = Ct(e));
	}
	return null;
}
var Tt = /\s+/g;
function P(e, t, n) {
	e && t && (e.classList ? e.classList[n ? "add" : "remove"](t) : e.className = ((" " + e.className + " ").replace(Tt, " ").replace(" " + t + " ", " ") + (n ? " " + t : "")).replace(Tt, " "));
}
function F(e, t, n) {
	var r = e && e.style;
	if (r) {
		if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
		!(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), r[t] = n + (typeof n == "string" ? "" : "px");
	}
}
function Et(e, t) {
	var n = "";
	if (typeof e == "string") n = e;
	else do {
		var r = F(e, "transform");
		r && r !== "none" && (n = r + " " + n);
	} while (!t && (e = e.parentNode));
	var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
	return i && new i(n);
}
function Dt(e, t, n) {
	if (e) {
		var r = e.getElementsByTagName(t), i = 0, a = r.length;
		if (n) for (; i < a; i++) n(r[i], i);
		return r;
	}
	return [];
}
function Ot() {
	return document.scrollingElement || document.documentElement;
}
function I(e, t, n, r, i) {
	if (!(!e.getBoundingClientRect && e !== window)) {
		var a, o, s, c, l, u, d;
		if (e !== window && e.parentNode && e !== Ot() ? (a = e.getBoundingClientRect(), o = a.top, s = a.left, c = a.bottom, l = a.right, u = a.height, d = a.width) : (o = 0, s = 0, c = window.innerHeight, l = window.innerWidth, u = window.innerHeight, d = window.innerWidth), (t || n) && e !== window && (i ||= e.parentNode, !ht)) do
			if (i && i.getBoundingClientRect && (F(i, "transform") !== "none" || n && F(i, "position") !== "static")) {
				var f = i.getBoundingClientRect();
				o -= f.top + parseInt(F(i, "border-top-width")), s -= f.left + parseInt(F(i, "border-left-width")), c = o + a.height, l = s + a.width;
				break;
			}
		while (i = i.parentNode);
		if (r && e !== window) {
			var p = Et(i || e), m = p && p.a, h = p && p.d;
			p && (o /= h, s /= m, d /= m, u /= h, c = o + u, l = s + d);
		}
		return {
			top: o,
			left: s,
			bottom: c,
			right: l,
			width: d,
			height: u
		};
	}
}
function kt(e, t, n) {
	for (var r = Ft(e, !0), i = I(e)[t]; r;) {
		var a = I(r)[n], o = void 0;
		if (o = i >= a, !o) return r;
		if (r === Ot()) break;
		r = Ft(r, !1);
	}
	return !1;
}
function At(e, t, n, r) {
	for (var i = 0, a = 0, o = e.children; a < o.length;) {
		if (o[a].style.display !== "none" && o[a] !== J.ghost && (r || o[a] !== J.dragged) && wt(o[a], n.draggable, e, !1)) {
			if (i === t) return o[a];
			i++;
		}
		a++;
	}
	return null;
}
function jt(e, t) {
	for (var n = e.lastElementChild; n && (n === J.ghost || F(n, "display") === "none" || t && !St(n, t));) n = n.previousElementSibling;
	return n || null;
}
function Mt(e, t) {
	var n = 0;
	if (!e || !e.parentNode) return -1;
	for (; e = e.previousElementSibling;) e.nodeName.toUpperCase() !== "TEMPLATE" && e !== J.clone && (!t || St(e, t)) && n++;
	return n;
}
function Nt(e) {
	var t = 0, n = 0, r = Ot();
	if (e) do {
		var i = Et(e), a = i.a, o = i.d;
		t += e.scrollLeft * a, n += e.scrollTop * o;
	} while (e !== r && (e = e.parentNode));
	return [t, n];
}
function Pt(e, t) {
	for (var n in e) if (e.hasOwnProperty(n)) {
		for (var r in t) if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
	}
	return -1;
}
function Ft(e, t) {
	if (!e || !e.getBoundingClientRect) return Ot();
	var n = e, r = !1;
	do
		if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
			var i = F(n);
			if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
				if (!n.getBoundingClientRect || n === document.body) return Ot();
				if (r || t) return n;
				r = !0;
			}
		}
	while (n = n.parentNode);
	return Ot();
}
function It(e, t) {
	if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	return e;
}
function Lt(e, t) {
	return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Rt;
function zt(e, t) {
	return function() {
		if (!Rt) {
			var n = arguments, r = this;
			n.length === 1 ? e.call(r, n[0]) : e.apply(r, n), Rt = setTimeout(function() {
				Rt = void 0;
			}, t);
		}
	};
}
function Bt() {
	clearTimeout(Rt), Rt = void 0;
}
function Vt(e, t, n) {
	e.scrollLeft += t, e.scrollTop += n;
}
function Ht(e) {
	var t = window.Polymer, n = window.jQuery || window.Zepto;
	return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Ut(e, t, n) {
	var r = {};
	return Array.from(e.children).forEach(function(i) {
		if (!(!wt(i, t.draggable, e, !1) || i.animated || i === n)) {
			var a = I(i);
			r.left = Math.min(r.left ?? Infinity, a.left), r.top = Math.min(r.top ?? Infinity, a.top), r.right = Math.max(r.right ?? -Infinity, a.right), r.bottom = Math.max(r.bottom ?? -Infinity, a.bottom);
		}
	}), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var L = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Wt() {
	var e = [], t;
	return {
		captureAnimationState: function() {
			e = [], this.options.animation && [].slice.call(this.el.children).forEach(function(t) {
				if (!(F(t, "display") === "none" || t === J.ghost)) {
					e.push({
						target: t,
						rect: I(t)
					});
					var n = st({}, e[e.length - 1].rect);
					if (t.thisAnimationDuration) {
						var r = Et(t, !0);
						r && (n.top -= r.f, n.left -= r.e);
					}
					t.fromRect = n;
				}
			});
		},
		addAnimationState: function(t) {
			e.push(t);
		},
		removeAnimationState: function(t) {
			e.splice(Pt(e, { target: t }), 1);
		},
		animateAll: function(n) {
			var r = this;
			if (!this.options.animation) {
				clearTimeout(t), typeof n == "function" && n();
				return;
			}
			var i = !1, a = 0;
			e.forEach(function(e) {
				var t = 0, n = e.target, o = n.fromRect, s = I(n), c = n.prevFromRect, l = n.prevToRect, u = e.rect, d = Et(n, !0);
				d && (s.top -= d.f, s.left -= d.e), n.toRect = s, n.thisAnimationDuration && Lt(c, s) && !Lt(o, s) && (u.top - s.top) / (u.left - s.left) === (o.top - s.top) / (o.left - s.left) && (t = Kt(u, c, l, r.options)), Lt(s, o) || (n.prevFromRect = o, n.prevToRect = s, t ||= r.options.animation, r.animate(n, u, s, t)), t && (i = !0, a = Math.max(a, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout(function() {
					n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null;
				}, t), n.thisAnimationDuration = t);
			}), clearTimeout(t), i ? t = setTimeout(function() {
				typeof n == "function" && n();
			}, a) : typeof n == "function" && n(), e = [];
		},
		animate: function(e, t, n, r) {
			if (r) {
				F(e, "transition", ""), F(e, "transform", "");
				var i = Et(this.el), a = i && i.a, o = i && i.d, s = (t.left - n.left) / (a || 1), c = (t.top - n.top) / (o || 1);
				e.animatingX = !!s, e.animatingY = !!c, F(e, "transform", "translate3d(" + s + "px," + c + "px,0)"), this.forRepaintDummy = Gt(e), F(e, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), F(e, "transform", "translate3d(0,0,0)"), typeof e.animated == "number" && clearTimeout(e.animated), e.animated = setTimeout(function() {
					F(e, "transition", ""), F(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1;
				}, r);
			}
		}
	};
}
function Gt(e) {
	return e.offsetWidth;
}
function Kt(e, t, n, r) {
	return Math.sqrt((t.top - e.top) ** 2 + (t.left - e.left) ** 2) / Math.sqrt((t.top - n.top) ** 2 + (t.left - n.left) ** 2) * r.animation;
}
var qt = [], Jt = { initializeByDefault: !0 }, Yt = {
	mount: function(e) {
		for (var t in Jt) Jt.hasOwnProperty(t) && !(t in e) && (e[t] = Jt[t]);
		qt.forEach(function(t) {
			if (t.pluginName === e.pluginName) throw `Sortable: Cannot mount plugin ${e.pluginName} more than once`;
		}), qt.push(e);
	},
	pluginEvent: function(e, t, n) {
		var r = this;
		this.eventCanceled = !1, n.cancel = function() {
			r.eventCanceled = !0;
		};
		var i = e + "Global";
		qt.forEach(function(r) {
			t[r.pluginName] && (t[r.pluginName][i] && t[r.pluginName][i](st({ sortable: t }, n)), t.options[r.pluginName] && t[r.pluginName][e] && t[r.pluginName][e](st({ sortable: t }, n)));
		});
	},
	initializePlugins: function(e, t, n, r) {
		for (var i in qt.forEach(function(r) {
			var i = r.pluginName;
			if (!(!e.options[i] && !r.initializeByDefault)) {
				var a = new r(e, t, e.options);
				a.sortable = e, a.options = e.options, e[i] = a, ut(n, a.defaults);
			}
		}), e.options) if (e.options.hasOwnProperty(i)) {
			var a = this.modifyOption(e, i, e.options[i]);
			a !== void 0 && (e.options[i] = a);
		}
	},
	getEventProperties: function(e, t) {
		var n = {};
		return qt.forEach(function(r) {
			typeof r.eventProperties == "function" && ut(n, r.eventProperties.call(t[r.pluginName], e));
		}), n;
	},
	modifyOption: function(e, t, n) {
		var r;
		return qt.forEach(function(i) {
			e[i.pluginName] && i.optionListeners && typeof i.optionListeners[t] == "function" && (r = i.optionListeners[t].call(e[i.pluginName], n));
		}), r;
	}
};
function Xt(e) {
	var t = e.sortable, n = e.rootEl, r = e.name, i = e.targetEl, a = e.cloneEl, o = e.toEl, s = e.fromEl, c = e.oldIndex, l = e.newIndex, u = e.oldDraggableIndex, d = e.newDraggableIndex, f = e.originalEvent, p = e.putSortable, m = e.extraEventProperties;
	if (t ||= n && n[L], t) {
		var h, g = t.options, _ = "on" + r.charAt(0).toUpperCase() + r.substr(1);
		window.CustomEvent && !ht && !gt ? h = new CustomEvent(r, {
			bubbles: !0,
			cancelable: !0
		}) : (h = document.createEvent("Event"), h.initEvent(r, !0, !0)), h.to = o || n, h.from = s || n, h.item = i || n, h.clone = a, h.oldIndex = c, h.newIndex = l, h.oldDraggableIndex = u, h.newDraggableIndex = d, h.originalEvent = f, h.pullMode = p ? p.lastPutMode : void 0;
		var v = st(st({}, m), Yt.getEventProperties(r, t));
		for (var y in v) h[y] = v[y];
		n && n.dispatchEvent(h), g[_] && g[_].call(t, h);
	}
}
var Zt = ["evt"], R = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.evt, i = ft(n, Zt);
	Yt.pluginEvent.bind(J)(e, t, st({
		dragEl: B,
		parentEl: V,
		ghostEl: H,
		rootEl: U,
		nextEl: Qt,
		lastDownEl: $t,
		cloneEl: W,
		cloneHidden: en,
		dragStarted: hn,
		putSortable: K,
		activeSortable: J.active,
		originalEvent: r,
		oldIndex: tn,
		oldDraggableIndex: nn,
		newIndex: G,
		newDraggableIndex: rn,
		hideGhostForTarget: Nn,
		unhideGhostForTarget: Pn,
		cloneNowHidden: function() {
			en = !0;
		},
		cloneNowShown: function() {
			en = !1;
		},
		dispatchSortableEvent: function(e) {
			z({
				sortable: t,
				name: e,
				originalEvent: r
			});
		}
	}, i));
};
function z(e) {
	Xt(st({
		putSortable: K,
		cloneEl: W,
		targetEl: B,
		rootEl: U,
		oldIndex: tn,
		oldDraggableIndex: nn,
		newIndex: G,
		newDraggableIndex: rn
	}, e));
}
var B, V, H, U, Qt, $t, W, en, tn, G, nn, rn, an, K, on = !1, sn = !1, cn = [], ln, un, dn, fn, pn, mn, hn, gn, _n, vn = !1, yn = !1, bn, q, xn = [], Sn = !1, Cn = [], wn = typeof document < "u", Tn = yt, En = gt || ht ? "cssFloat" : "float", Dn = wn && !bt && !yt && "draggable" in document.createElement("div"), On = function() {
	if (wn) {
		if (ht) return !1;
		var e = document.createElement("x");
		return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
	}
}(), kn = function(e, t) {
	var n = F(e), r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), i = At(e, 0, t), a = At(e, 1, t), o = i && F(i), s = a && F(a), c = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + I(i).width, l = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + I(a).width;
	if (n.display === "flex") return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
	if (n.display === "grid") return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
	if (i && o.float && o.float !== "none") {
		var u = o.float === "left" ? "left" : "right";
		return a && (s.clear === "both" || s.clear === u) ? "vertical" : "horizontal";
	}
	return i && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || c >= r && n[En] === "none" || a && n[En] === "none" && c + l > r) ? "vertical" : "horizontal";
}, An = function(e, t, n) {
	var r = n ? e.left : e.top, i = n ? e.right : e.bottom, a = n ? e.width : e.height, o = n ? t.left : t.top, s = n ? t.right : t.bottom, c = n ? t.width : t.height;
	return r === o || i === s || r + a / 2 === o + c / 2;
}, jn = function(e, t) {
	var n;
	return cn.some(function(r) {
		var i = r[L].options.emptyInsertThreshold;
		if (!(!i || jt(r))) {
			var a = I(r), o = e >= a.left - i && e <= a.right + i, s = t >= a.top - i && t <= a.bottom + i;
			if (o && s) return n = r;
		}
	}), n;
}, Mn = function(e) {
	function t(e, n) {
		return function(r, i, a, o) {
			var s = r.options.group.name && i.options.group.name && r.options.group.name === i.options.group.name;
			if (e == null && (n || s)) return !0;
			if (e == null || e === !1) return !1;
			if (n && e === "clone") return e;
			if (typeof e == "function") return t(e(r, i, a, o), n)(r, i, a, o);
			var c = (n ? r : i).options.group.name;
			return e === !0 || typeof e == "string" && e === c || e.join && e.indexOf(c) > -1;
		};
	}
	var n = {}, r = e.group;
	(!r || ct(r) != "object") && (r = { name: r }), n.name = r.name, n.checkPull = t(r.pull, !0), n.checkPut = t(r.put), n.revertClone = r.revertClone, e.group = n;
}, Nn = function() {
	!On && H && F(H, "display", "none");
}, Pn = function() {
	!On && H && F(H, "display", "");
};
wn && !bt && document.addEventListener("click", function(e) {
	if (sn) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), sn = !1, !1;
}, !0);
var Fn = function(e) {
	if (B) {
		e = e.touches ? e.touches[0] : e;
		var t = jn(e.clientX, e.clientY);
		if (t) {
			var n = {};
			for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
			n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[L]._onDragOver(n);
		}
	}
}, In = function(e) {
	B && B.parentNode[L]._isOutsideThisEl(e.target);
};
function J(e, t) {
	if (!(e && e.nodeType && e.nodeType === 1)) throw `Sortable: \`el\` must be an HTMLElement, not ${{}.toString.call(e)}`;
	this.el = e, this.options = t = ut({}, t), e[L] = this;
	var n = {
		group: null,
		sort: !0,
		disabled: !1,
		store: null,
		handle: null,
		draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
		swapThreshold: 1,
		invertSwap: !1,
		invertedSwapThreshold: null,
		removeCloneOnHide: !0,
		direction: function() {
			return kn(e, this.options);
		},
		ghostClass: "sortable-ghost",
		chosenClass: "sortable-chosen",
		dragClass: "sortable-drag",
		ignore: "a, img",
		filter: null,
		preventOnFilter: !0,
		animation: 0,
		easing: null,
		setData: function(e, t) {
			e.setData("Text", t.textContent);
		},
		dropBubble: !1,
		dragoverBubble: !1,
		dataIdAttr: "data-id",
		delay: 0,
		delayOnTouchOnly: !1,
		touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
		forceFallback: !1,
		fallbackClass: "sortable-fallback",
		fallbackOnBody: !1,
		fallbackTolerance: 0,
		fallbackOffset: {
			x: 0,
			y: 0
		},
		supportPointer: J.supportPointer !== !1 && "PointerEvent" in window && !vt,
		emptyInsertThreshold: 5
	};
	for (var r in Yt.initializePlugins(this, e, n), n) !(r in t) && (t[r] = n[r]);
	for (var i in Mn(t), this) i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
	this.nativeDraggable = t.forceFallback ? !1 : Dn, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? M(e, "pointerdown", this._onTapStart) : (M(e, "mousedown", this._onTapStart), M(e, "touchstart", this._onTapStart)), this.nativeDraggable && (M(e, "dragover", this), M(e, "dragenter", this)), cn.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), ut(this, Wt());
}
J.prototype = {
	constructor: J,
	_isOutsideThisEl: function(e) {
		!this.el.contains(e) && e !== this.el && (gn = null);
	},
	_getDirection: function(e, t) {
		return typeof this.options.direction == "function" ? this.options.direction.call(this, e, t, B) : this.options.direction;
	},
	_onTapStart: function(e) {
		if (e.cancelable) {
			var t = this, n = this.el, r = this.options, i = r.preventOnFilter, a = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (o || e).target, c = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, l = r.filter;
			if (Kn(n), !B && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || r.disabled) && !c.isContentEditable && !(!this.nativeDraggable && vt && s && s.tagName.toUpperCase() === "SELECT") && (s = wt(s, r.draggable, n, !1), !(s && s.animated) && $t !== s)) {
				if (tn = Mt(s), nn = Mt(s, r.draggable), typeof l == "function") {
					if (l.call(this, e, s, this)) {
						z({
							sortable: t,
							rootEl: c,
							name: "filter",
							targetEl: s,
							toEl: n,
							fromEl: n
						}), R("filter", t, { evt: e }), i && e.cancelable && e.preventDefault();
						return;
					}
				} else if (l && (l = l.split(",").some(function(r) {
					if (r = wt(c, r.trim(), n, !1), r) return z({
						sortable: t,
						rootEl: r,
						name: "filter",
						targetEl: s,
						fromEl: n,
						toEl: n
					}), R("filter", t, { evt: e }), !0;
				}), l)) {
					i && e.cancelable && e.preventDefault();
					return;
				}
				r.handle && !wt(c, r.handle, n, !1) || this._prepareDragStart(e, o, s);
			}
		}
	},
	_prepareDragStart: function(e, t, n) {
		var r = this, i = r.el, a = r.options, o = i.ownerDocument, s;
		if (n && !B && n.parentNode === i) {
			var c = I(n);
			if (U = i, B = n, V = B.parentNode, Qt = B.nextSibling, $t = n, an = a.group, J.dragged = B, ln = {
				target: B,
				clientX: (t || e).clientX,
				clientY: (t || e).clientY
			}, pn = ln.clientX - c.left, mn = ln.clientY - c.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, B.style["will-change"] = "all", s = function() {
				if (R("delayEnded", r, { evt: e }), J.eventCanceled) {
					r._onDrop();
					return;
				}
				r._disableDelayedDragEvents(), !_t && r.nativeDraggable && (B.draggable = !0), r._triggerDragStart(e, t), z({
					sortable: r,
					name: "choose",
					originalEvent: e
				}), P(B, a.chosenClass, !0);
			}, a.ignore.split(",").forEach(function(e) {
				Dt(B, e.trim(), zn);
			}), M(o, "dragover", Fn), M(o, "mousemove", Fn), M(o, "touchmove", Fn), M(o, "mouseup", r._onDrop), M(o, "touchend", r._onDrop), M(o, "touchcancel", r._onDrop), _t && this.nativeDraggable && (this.options.touchStartThreshold = 4, B.draggable = !0), R("delayStart", this, { evt: e }), a.delay && (!a.delayOnTouchOnly || t) && (!this.nativeDraggable || !(gt || ht))) {
				if (J.eventCanceled) {
					this._onDrop();
					return;
				}
				M(o, "mouseup", r._disableDelayedDrag), M(o, "touchend", r._disableDelayedDrag), M(o, "touchcancel", r._disableDelayedDrag), M(o, "mousemove", r._delayedDragTouchMoveHandler), M(o, "touchmove", r._delayedDragTouchMoveHandler), a.supportPointer && M(o, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(s, a.delay);
			} else s();
		}
	},
	_delayedDragTouchMoveHandler: function(e) {
		var t = e.touches ? e.touches[0] : e;
		Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
	},
	_disableDelayedDrag: function() {
		B && zn(B), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
	},
	_disableDelayedDragEvents: function() {
		var e = this.el.ownerDocument;
		N(e, "mouseup", this._disableDelayedDrag), N(e, "touchend", this._disableDelayedDrag), N(e, "touchcancel", this._disableDelayedDrag), N(e, "mousemove", this._delayedDragTouchMoveHandler), N(e, "touchmove", this._delayedDragTouchMoveHandler), N(e, "pointermove", this._delayedDragTouchMoveHandler);
	},
	_triggerDragStart: function(e, t) {
		t ||= e.pointerType == "touch" && e, !this.nativeDraggable || t ? this.options.supportPointer ? M(document, "pointermove", this._onTouchMove) : t ? M(document, "touchmove", this._onTouchMove) : M(document, "mousemove", this._onTouchMove) : (M(B, "dragend", this), M(U, "dragstart", this._onDragStart));
		try {
			document.selection ? qn(function() {
				document.selection.empty();
			}) : window.getSelection().removeAllRanges();
		} catch {}
	},
	_dragStarted: function(e, t) {
		if (on = !1, U && B) {
			R("dragStarted", this, { evt: t }), this.nativeDraggable && M(document, "dragover", In);
			var n = this.options;
			!e && P(B, n.dragClass, !1), P(B, n.ghostClass, !0), J.active = this, e && this._appendGhost(), z({
				sortable: this,
				name: "start",
				originalEvent: t
			});
		} else this._nulling();
	},
	_emulateDragOver: function() {
		if (un) {
			this._lastX = un.clientX, this._lastY = un.clientY, Nn();
			for (var e = document.elementFromPoint(un.clientX, un.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(un.clientX, un.clientY), e !== t);) t = e;
			if (B.parentNode[L]._isOutsideThisEl(e), t) do {
				if (t[L]) {
					var n = void 0;
					if (n = t[L]._onDragOver({
						clientX: un.clientX,
						clientY: un.clientY,
						target: e,
						rootEl: t
					}), n && !this.options.dragoverBubble) break;
				}
				e = t;
			} while (t = t.parentNode);
			Pn();
		}
	},
	_onTouchMove: function(e) {
		if (ln) {
			var t = this.options, n = t.fallbackTolerance, r = t.fallbackOffset, i = e.touches ? e.touches[0] : e, a = H && Et(H, !0), o = H && a && a.a, s = H && a && a.d, c = Tn && q && Nt(q), l = (i.clientX - ln.clientX + r.x) / (o || 1) + (c ? c[0] - xn[0] : 0) / (o || 1), u = (i.clientY - ln.clientY + r.y) / (s || 1) + (c ? c[1] - xn[1] : 0) / (s || 1);
			if (!J.active && !on) {
				if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
				this._onDragStart(e, !0);
			}
			if (H) {
				a ? (a.e += l - (dn || 0), a.f += u - (fn || 0)) : a = {
					a: 1,
					b: 0,
					c: 0,
					d: 1,
					e: l,
					f: u
				};
				var d = `matrix(${a.a},${a.b},${a.c},${a.d},${a.e},${a.f})`;
				F(H, "webkitTransform", d), F(H, "mozTransform", d), F(H, "msTransform", d), F(H, "transform", d), dn = l, fn = u, un = i;
			}
			e.cancelable && e.preventDefault();
		}
	},
	_appendGhost: function() {
		if (!H) {
			var e = this.options.fallbackOnBody ? document.body : U, t = I(B, !0, Tn, !0, e), n = this.options;
			if (Tn) {
				for (q = e; F(q, "position") === "static" && F(q, "transform") === "none" && q !== document;) q = q.parentNode;
				q !== document.body && q !== document.documentElement ? (q === document && (q = Ot()), t.top += q.scrollTop, t.left += q.scrollLeft) : q = Ot(), xn = Nt(q);
			}
			H = B.cloneNode(!0), P(H, n.ghostClass, !1), P(H, n.fallbackClass, !0), P(H, n.dragClass, !0), F(H, "transition", ""), F(H, "transform", ""), F(H, "box-sizing", "border-box"), F(H, "margin", 0), F(H, "top", t.top), F(H, "left", t.left), F(H, "width", t.width), F(H, "height", t.height), F(H, "opacity", "0.8"), F(H, "position", Tn ? "absolute" : "fixed"), F(H, "zIndex", "100000"), F(H, "pointerEvents", "none"), J.ghost = H, e.appendChild(H), F(H, "transform-origin", pn / parseInt(H.style.width) * 100 + "% " + mn / parseInt(H.style.height) * 100 + "%");
		}
	},
	_onDragStart: function(e, t) {
		var n = this, r = e.dataTransfer, i = n.options;
		if (R("dragStart", this, { evt: e }), J.eventCanceled) {
			this._onDrop();
			return;
		}
		R("setupClone", this), J.eventCanceled || (W = Ht(B), W.removeAttribute("id"), W.draggable = !1, W.style["will-change"] = "", this._hideClone(), P(W, this.options.chosenClass, !1), J.clone = W), n.cloneId = qn(function() {
			R("clone", n), !J.eventCanceled && (n.options.removeCloneOnHide || U.insertBefore(W, B), n._hideClone(), z({
				sortable: n,
				name: "clone"
			}));
		}), !t && P(B, i.dragClass, !0), t ? (sn = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (N(document, "mouseup", n._onDrop), N(document, "touchend", n._onDrop), N(document, "touchcancel", n._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(n, r, B)), M(document, "drop", n), F(B, "transform", "translateZ(0)")), on = !0, n._dragStartId = qn(n._dragStarted.bind(n, t, e)), M(document, "selectstart", n), hn = !0, vt && F(document.body, "user-select", "none");
	},
	_onDragOver: function(e) {
		var t = this.el, n = e.target, r, i, a, o = this.options, s = o.group, c = J.active, l = an === s, u = o.sort, d = K || c, f, p = this, m = !1;
		if (Sn) return;
		function h(o, s) {
			R(o, p, st({
				evt: e,
				isOwner: l,
				axis: f ? "vertical" : "horizontal",
				revert: a,
				dragRect: r,
				targetRect: i,
				canSort: u,
				fromSortable: d,
				target: n,
				completed: _,
				onMove: function(n, i) {
					return Rn(U, t, B, r, n, I(n), e, i);
				},
				changed: v
			}, s));
		}
		function g() {
			h("dragOverAnimationCapture"), p.captureAnimationState(), p !== d && d.captureAnimationState();
		}
		function _(r) {
			return h("dragOverCompleted", { insertion: r }), r && (l ? c._hideClone() : c._showClone(p), p !== d && (P(B, K ? K.options.ghostClass : c.options.ghostClass, !1), P(B, o.ghostClass, !0)), K !== p && p !== J.active ? K = p : p === J.active && K && (K = null), d === p && (p._ignoreWhileAnimating = n), p.animateAll(function() {
				h("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
			}), p !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (n === B && !B.animated || n === t && !n.animated) && (gn = null), !o.dragoverBubble && !e.rootEl && n !== document && (B.parentNode[L]._isOutsideThisEl(e.target), !r && Fn(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
		}
		function v() {
			G = Mt(B), rn = Mt(B, o.draggable), z({
				sortable: p,
				name: "change",
				toEl: t,
				newIndex: G,
				newDraggableIndex: rn,
				originalEvent: e
			});
		}
		if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), n = wt(n, o.draggable, t, !0), h("dragOver"), J.eventCanceled) return m;
		if (B.contains(e.target) || n.animated && n.animatingX && n.animatingY || p._ignoreWhileAnimating === n) return _(!1);
		if (sn = !1, c && !o.disabled && (l ? u || (a = V !== U) : K === this || (this.lastPutMode = an.checkPull(this, c, B, e)) && s.checkPut(this, c, B, e))) {
			if (f = this._getDirection(e, n) === "vertical", r = I(B), h("dragOverValid"), J.eventCanceled) return m;
			if (a) return V = U, g(), this._hideClone(), h("revert"), J.eventCanceled || (Qt ? U.insertBefore(B, Qt) : U.appendChild(B)), _(!0);
			var y = jt(t, o.draggable);
			if (!y || Hn(e, f, this) && !y.animated) {
				if (y === B) return _(!1);
				if (y && t === e.target && (n = y), n && (i = I(n)), Rn(U, t, B, r, n, i, e, !!n) !== !1) return g(), y && y.nextSibling ? t.insertBefore(B, y.nextSibling) : t.appendChild(B), V = t, v(), _(!0);
			} else if (y && Vn(e, f, this)) {
				var b = At(t, 0, o, !0);
				if (b === B) return _(!1);
				if (n = b, i = I(n), Rn(U, t, B, r, n, i, e, !1) !== !1) return g(), t.insertBefore(B, b), V = t, v(), _(!0);
			} else if (n.parentNode === t) {
				i = I(n);
				var x = 0, S, C = B.parentNode !== t, w = !An(B.animated && B.toRect || r, n.animated && n.toRect || i, f), T = f ? "top" : "left", E = kt(n, "top", "top") || kt(B, "top", "top"), D = E ? E.scrollTop : void 0;
				gn !== n && (S = i[T], vn = !1, yn = !w && o.invertSwap || C), x = Un(e, n, i, f, w ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, yn, gn === n);
				var ee;
				if (x !== 0) {
					var O = Mt(B);
					do
						O -= x, ee = V.children[O];
					while (ee && (F(ee, "display") === "none" || ee === H));
				}
				if (x === 0 || ee === n) return _(!1);
				gn = n, _n = x;
				var te = n.nextElementSibling, ne = !1;
				ne = x === 1;
				var re = Rn(U, t, B, r, n, i, e, ne);
				if (re !== !1) return (re === 1 || re === -1) && (ne = re === 1), Sn = !0, setTimeout(Bn, 30), g(), ne && !te ? t.appendChild(B) : n.parentNode.insertBefore(B, ne ? te : n), E && Vt(E, 0, D - E.scrollTop), V = B.parentNode, S !== void 0 && !yn && (bn = Math.abs(S - I(n)[T])), v(), _(!0);
			}
			if (t.contains(B)) return _(!1);
		}
		return !1;
	},
	_ignoreWhileAnimating: null,
	_offMoveEvents: function() {
		N(document, "mousemove", this._onTouchMove), N(document, "touchmove", this._onTouchMove), N(document, "pointermove", this._onTouchMove), N(document, "dragover", Fn), N(document, "mousemove", Fn), N(document, "touchmove", Fn);
	},
	_offUpEvents: function() {
		var e = this.el.ownerDocument;
		N(e, "mouseup", this._onDrop), N(e, "touchend", this._onDrop), N(e, "pointerup", this._onDrop), N(e, "touchcancel", this._onDrop), N(document, "selectstart", this);
	},
	_onDrop: function(e) {
		var t = this.el, n = this.options;
		if (G = Mt(B), rn = Mt(B, n.draggable), R("drop", this, { evt: e }), V = B && B.parentNode, G = Mt(B), rn = Mt(B, n.draggable), J.eventCanceled) {
			this._nulling();
			return;
		}
		on = !1, yn = !1, vn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Jn(this.cloneId), Jn(this._dragStartId), this.nativeDraggable && (N(document, "drop", this), N(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), vt && F(document.body, "user-select", ""), F(B, "transform", ""), e && (hn && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), H && H.parentNode && H.parentNode.removeChild(H), (U === V || K && K.lastPutMode !== "clone") && W && W.parentNode && W.parentNode.removeChild(W), B && (this.nativeDraggable && N(B, "dragend", this), zn(B), B.style["will-change"] = "", hn && !on && P(B, K ? K.options.ghostClass : this.options.ghostClass, !1), P(B, this.options.chosenClass, !1), z({
			sortable: this,
			name: "unchoose",
			toEl: V,
			newIndex: null,
			newDraggableIndex: null,
			originalEvent: e
		}), U === V ? G !== tn && G >= 0 && (z({
			sortable: this,
			name: "update",
			toEl: V,
			originalEvent: e
		}), z({
			sortable: this,
			name: "sort",
			toEl: V,
			originalEvent: e
		})) : (G >= 0 && (z({
			rootEl: V,
			name: "add",
			toEl: V,
			fromEl: U,
			originalEvent: e
		}), z({
			sortable: this,
			name: "remove",
			toEl: V,
			originalEvent: e
		}), z({
			rootEl: V,
			name: "sort",
			toEl: V,
			fromEl: U,
			originalEvent: e
		}), z({
			sortable: this,
			name: "sort",
			toEl: V,
			originalEvent: e
		})), K && K.save()), J.active && ((G == null || G === -1) && (G = tn, rn = nn), z({
			sortable: this,
			name: "end",
			toEl: V,
			originalEvent: e
		}), this.save()))), this._nulling();
	},
	_nulling: function() {
		R("nulling", this), U = B = V = H = Qt = W = $t = en = ln = un = hn = G = rn = tn = nn = gn = _n = K = an = J.dragged = J.ghost = J.clone = J.active = null, Cn.forEach(function(e) {
			e.checked = !0;
		}), Cn.length = dn = fn = 0;
	},
	handleEvent: function(e) {
		switch (e.type) {
			case "drop":
			case "dragend":
				this._onDrop(e);
				break;
			case "dragenter":
			case "dragover":
				B && (this._onDragOver(e), Ln(e));
				break;
			case "selectstart":
				e.preventDefault();
				break;
		}
	},
	toArray: function() {
		for (var e = [], t, n = this.el.children, r = 0, i = n.length, a = this.options; r < i; r++) t = n[r], wt(t, a.draggable, this.el, !1) && e.push(t.getAttribute(a.dataIdAttr) || Gn(t));
		return e;
	},
	sort: function(e, t) {
		var n = {}, r = this.el;
		this.toArray().forEach(function(e, t) {
			var i = r.children[t];
			wt(i, this.options.draggable, r, !1) && (n[e] = i);
		}, this), t && this.captureAnimationState(), e.forEach(function(e) {
			n[e] && (r.removeChild(n[e]), r.appendChild(n[e]));
		}), t && this.animateAll();
	},
	save: function() {
		var e = this.options.store;
		e && e.set && e.set(this);
	},
	closest: function(e, t) {
		return wt(e, t || this.options.draggable, this.el, !1);
	},
	option: function(e, t) {
		var n = this.options;
		if (t === void 0) return n[e];
		var r = Yt.modifyOption(this, e, t);
		r === void 0 ? n[e] = t : n[e] = r, e === "group" && Mn(n);
	},
	destroy: function() {
		R("destroy", this);
		var e = this.el;
		e[L] = null, N(e, "mousedown", this._onTapStart), N(e, "touchstart", this._onTapStart), N(e, "pointerdown", this._onTapStart), this.nativeDraggable && (N(e, "dragover", this), N(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(e) {
			e.removeAttribute("draggable");
		}), this._onDrop(), this._disableDelayedDragEvents(), cn.splice(cn.indexOf(this.el), 1), this.el = e = null;
	},
	_hideClone: function() {
		if (!en) {
			if (R("hideClone", this), J.eventCanceled) return;
			F(W, "display", "none"), this.options.removeCloneOnHide && W.parentNode && W.parentNode.removeChild(W), en = !0;
		}
	},
	_showClone: function(e) {
		if (e.lastPutMode !== "clone") {
			this._hideClone();
			return;
		}
		if (en) {
			if (R("showClone", this), J.eventCanceled) return;
			B.parentNode == U && !this.options.group.revertClone ? U.insertBefore(W, B) : Qt ? U.insertBefore(W, Qt) : U.appendChild(W), this.options.group.revertClone && this.animate(B, W), F(W, "display", ""), en = !1;
		}
	}
};
function Ln(e) {
	e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Rn(e, t, n, r, i, a, o, s) {
	var c, l = e[L], u = l.options.onMove, d;
	return window.CustomEvent && !ht && !gt ? c = new CustomEvent("move", {
		bubbles: !0,
		cancelable: !0
	}) : (c = document.createEvent("Event"), c.initEvent("move", !0, !0)), c.to = t, c.from = e, c.dragged = n, c.draggedRect = r, c.related = i || t, c.relatedRect = a || I(t), c.willInsertAfter = s, c.originalEvent = o, e.dispatchEvent(c), u && (d = u.call(l, c, o)), d;
}
function zn(e) {
	e.draggable = !1;
}
function Bn() {
	Sn = !1;
}
function Vn(e, t, n) {
	var r = I(At(n.el, 0, n.options, !0)), i = Ut(n.el, n.options, H), a = 10;
	return t ? e.clientX < i.left - a || e.clientY < r.top && e.clientX < r.right : e.clientY < i.top - a || e.clientY < r.bottom && e.clientX < r.left;
}
function Hn(e, t, n) {
	var r = I(jt(n.el, n.options.draggable)), i = Ut(n.el, n.options, H), a = 10;
	return t ? e.clientX > i.right + a || e.clientY > r.bottom && e.clientX > r.left : e.clientY > i.bottom + a || e.clientX > r.right && e.clientY > r.top;
}
function Un(e, t, n, r, i, a, o, s) {
	var c = r ? e.clientY : e.clientX, l = r ? n.height : n.width, u = r ? n.top : n.left, d = r ? n.bottom : n.right, f = !1;
	if (!o) {
		if (s && bn < l * i) {
			if (!vn && (_n === 1 ? c > u + l * a / 2 : c < d - l * a / 2) && (vn = !0), vn) f = !0;
			else if (_n === 1 ? c < u + bn : c > d - bn) return -_n;
		} else if (c > u + l * (1 - i) / 2 && c < d - l * (1 - i) / 2) return Wn(t);
	}
	return f ||= o, f && (c < u + l * a / 2 || c > d - l * a / 2) ? c > u + l / 2 ? 1 : -1 : 0;
}
function Wn(e) {
	return Mt(B) < Mt(e) ? 1 : -1;
}
function Gn(e) {
	for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--;) r += t.charCodeAt(n);
	return r.toString(36);
}
function Kn(e) {
	Cn.length = 0;
	for (var t = e.getElementsByTagName("input"), n = t.length; n--;) {
		var r = t[n];
		r.checked && Cn.push(r);
	}
}
function qn(e) {
	return setTimeout(e, 0);
}
function Jn(e) {
	return clearTimeout(e);
}
wn && M(document, "touchmove", function(e) {
	(J.active || on) && e.cancelable && e.preventDefault();
}), J.utils = {
	on: M,
	off: N,
	css: F,
	find: Dt,
	is: function(e, t) {
		return !!wt(e, t, e, !1);
	},
	extend: It,
	throttle: zt,
	closest: wt,
	toggleClass: P,
	clone: Ht,
	index: Mt,
	nextTick: qn,
	cancelNextTick: Jn,
	detectDirection: kn,
	getChild: At
}, J.get = function(e) {
	return e[L];
}, J.mount = function() {
	var e = [...arguments];
	e[0].constructor === Array && (e = e[0]), e.forEach(function(e) {
		if (!e.prototype || !e.prototype.constructor) throw `Sortable: Mounted plugin must be a constructor function, not ${{}.toString.call(e)}`;
		e.utils && (J.utils = st(st({}, J.utils), e.utils)), Yt.mount(e);
	});
}, J.create = function(e, t) {
	return new J(e, t);
}, J.version = pt;
var Y = [], Yn, Xn, Zn = !1, Qn, $n, er, tr;
function nr() {
	function e() {
		for (var e in this.defaults = {
			scroll: !0,
			forceAutoScrollFallback: !1,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: !0
		}, this) e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
	}
	return e.prototype = {
		dragStarted: function(e) {
			var t = e.originalEvent;
			this.sortable.nativeDraggable ? M(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? M(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? M(document, "touchmove", this._handleFallbackAutoScroll) : M(document, "mousemove", this._handleFallbackAutoScroll);
		},
		dragOverCompleted: function(e) {
			var t = e.originalEvent;
			!this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
		},
		drop: function() {
			this.sortable.nativeDraggable ? N(document, "dragover", this._handleAutoScroll) : (N(document, "pointermove", this._handleFallbackAutoScroll), N(document, "touchmove", this._handleFallbackAutoScroll), N(document, "mousemove", this._handleFallbackAutoScroll)), ir(), rr(), Bt();
		},
		nulling: function() {
			er = Xn = Yn = Zn = tr = Qn = $n = null, Y.length = 0;
		},
		_handleFallbackAutoScroll: function(e) {
			this._handleAutoScroll(e, !0);
		},
		_handleAutoScroll: function(e, t) {
			var n = this, r = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = document.elementFromPoint(r, i);
			if (er = e, t || this.options.forceAutoScrollFallback || gt || ht || vt) {
				ar(e, this.options, a, t);
				var o = Ft(a, !0);
				Zn && (!tr || r !== Qn || i !== $n) && (tr && ir(), tr = setInterval(function() {
					var a = Ft(document.elementFromPoint(r, i), !0);
					a !== o && (o = a, rr()), ar(e, n.options, a, t);
				}, 10), Qn = r, $n = i);
			} else {
				if (!this.options.bubbleScroll || Ft(a, !0) === Ot()) {
					rr();
					return;
				}
				ar(e, this.options, Ft(a, !1), !1);
			}
		}
	}, ut(e, {
		pluginName: "scroll",
		initializeByDefault: !0
	});
}
function rr() {
	Y.forEach(function(e) {
		clearInterval(e.pid);
	}), Y = [];
}
function ir() {
	clearInterval(tr);
}
var ar = zt(function(e, t, n, r) {
	if (t.scroll) {
		var i = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, o = t.scrollSensitivity, s = t.scrollSpeed, c = Ot(), l = !1, u;
		Xn !== n && (Xn = n, rr(), Yn = t.scroll, u = t.scrollFn, Yn === !0 && (Yn = Ft(n, !0)));
		var d = 0, f = Yn;
		do {
			var p = f, m = I(p), h = m.top, g = m.bottom, _ = m.left, v = m.right, y = m.width, b = m.height, x = void 0, S = void 0, C = p.scrollWidth, w = p.scrollHeight, T = F(p), E = p.scrollLeft, D = p.scrollTop;
			p === c ? (x = y < C && (T.overflowX === "auto" || T.overflowX === "scroll" || T.overflowX === "visible"), S = b < w && (T.overflowY === "auto" || T.overflowY === "scroll" || T.overflowY === "visible")) : (x = y < C && (T.overflowX === "auto" || T.overflowX === "scroll"), S = b < w && (T.overflowY === "auto" || T.overflowY === "scroll"));
			var ee = x && (Math.abs(v - i) <= o && E + y < C) - (Math.abs(_ - i) <= o && !!E), O = S && (Math.abs(g - a) <= o && D + b < w) - (Math.abs(h - a) <= o && !!D);
			if (!Y[d]) for (var te = 0; te <= d; te++) Y[te] || (Y[te] = {});
			(Y[d].vx != ee || Y[d].vy != O || Y[d].el !== p) && (Y[d].el = p, Y[d].vx = ee, Y[d].vy = O, clearInterval(Y[d].pid), (ee != 0 || O != 0) && (l = !0, Y[d].pid = setInterval(function() {
				r && this.layer === 0 && J.active._onTouchMove(er);
				var t = Y[this.layer].vy ? Y[this.layer].vy * s : 0, n = Y[this.layer].vx ? Y[this.layer].vx * s : 0;
				typeof u == "function" && u.call(J.dragged.parentNode[L], n, t, e, er, Y[this.layer].el) !== "continue" || Vt(Y[this.layer].el, n, t);
			}.bind({ layer: d }), 24))), d++;
		} while (t.bubbleScroll && f !== c && (f = Ft(f, !1)));
		Zn = l;
	}
}, 30), or = function(e) {
	var t = e.originalEvent, n = e.putSortable, r = e.dragEl, i = e.activeSortable, a = e.dispatchSortableEvent, o = e.hideGhostForTarget, s = e.unhideGhostForTarget;
	if (t) {
		var c = n || i;
		o();
		var l = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, u = document.elementFromPoint(l.clientX, l.clientY);
		s(), c && !c.el.contains(u) && (a("spill"), this.onSpill({
			dragEl: r,
			putSortable: n
		}));
	}
};
function sr() {}
sr.prototype = {
	startIndex: null,
	dragStart: function(e) {
		this.startIndex = e.oldDraggableIndex;
	},
	onSpill: function(e) {
		var t = e.dragEl, n = e.putSortable;
		this.sortable.captureAnimationState(), n && n.captureAnimationState();
		var r = At(this.sortable.el, this.startIndex, this.options);
		r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll();
	},
	drop: or
}, ut(sr, { pluginName: "revertOnSpill" });
function cr() {}
cr.prototype = {
	onSpill: function(e) {
		var t = e.dragEl, n = e.putSortable || this.sortable;
		n.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), n.animateAll();
	},
	drop: or
}, ut(cr, { pluginName: "removeOnSpill" }), J.mount(new nr()), J.mount(cr, sr);
function lr(e) {
	return e == null ? e : JSON.parse(JSON.stringify(e));
}
function ur(e) {
	h() && D(e);
}
function dr(e) {
	h() ? T(e) : x(e);
}
var fr = null, pr = null;
function mr(e = null, t = null) {
	fr = e, pr = t;
}
function hr() {
	return {
		data: fr,
		clonedData: pr
	};
}
var gr = Symbol("cloneElement");
function _r(...e) {
	let t = h()?.proxy, n = null, r = e[0], [, i, a] = e;
	Array.isArray(j(i)) || (a = i, i = null);
	let o = null, { immediate: s = !0, clone: c = lr, forceFallback: l, fallbackOnBody: u, customUpdate: d } = j(a) ?? {};
	function f(e) {
		let { from: t, oldIndex: r, item: a } = e, o = Array.from(t.childNodes);
		n = l && !u ? o.slice(0, -1) : o;
		let s = j(j(i)?.[r]), d = c(s);
		mr(s, d), a[gr] = d;
	}
	function p(e) {
		let t = e.item[gr];
		if (!Ye(t)) {
			if (Qe(e.item), v(i)) {
				let n = [...j(i)];
				i.value = Je(n, e.newDraggableIndex, t);
				return;
			}
			Je(j(i), e.newDraggableIndex, t);
		}
	}
	function m(e) {
		let { from: t, item: n, oldIndex: r, oldDraggableIndex: a, pullMode: o, clone: s } = e;
		if (Ze(t, n, r), o === "clone") {
			Qe(s);
			return;
		}
		if (v(i)) {
			let e = [...j(i)];
			i.value = qe(e, a);
			return;
		}
		qe(j(i), a);
	}
	function g(e) {
		if (d) {
			d(e);
			return;
		}
		let { from: t, item: n, oldIndex: r, oldDraggableIndex: a, newDraggableIndex: o } = e;
		if (Qe(n), Ze(t, n, r), v(i)) {
			let e = [...j(i)];
			i.value = We(e, a, o);
			return;
		}
		We(j(i), a, o);
	}
	function _(e) {
		let { newIndex: t, oldIndex: r, from: i, to: a } = e, o = null, s = t === r && i === a;
		try {
			if (s) {
				let e = null;
				n?.some((t, r) => {
					if (e && n?.length !== a.childNodes.length) return i.insertBefore(e, t.nextSibling), !0;
					let o = a.childNodes[r];
					e = a?.replaceChild(t, o);
				});
			}
		} catch (e) {
			o = e;
		} finally {
			n = null;
		}
		x(() => {
			if (mr(), o) throw o;
		});
	}
	let y = {
		onUpdate: g,
		onStart: f,
		onAdd: p,
		onRemove: m,
		onEnd: _
	};
	function b(e) {
		let n = j(r);
		return e ||= Xe(n) ? $e(n, t?.$el) : n, e && !nt(e) && (e = e.$el), e || Ue("Root element not found"), e;
	}
	function S() {
		let e = j(a) ?? {}, { immediate: t, clone: n } = e, r = Be(e, ["immediate", "clone"]);
		return rt(r, (e, t) => {
			it(e) && (r[e] = (e, ...n) => (at(e, hr()), t(e, ...n)));
		}), tt(i === null ? {} : y, r);
	}
	let C = (e) => {
		e = b(e), o && w.destroy(), o = new J(e, S());
	};
	ge(() => a, () => {
		o && rt(S(), (e, t) => {
			o?.option(e, t);
		});
	}, { deep: !0 });
	let w = {
		option: (e, t) => o?.option(e, t),
		destroy: () => {
			o?.destroy(), o = null;
		},
		save: () => o?.save(),
		toArray: () => o?.toArray(),
		closest: (...e) => o?.closest(...e)
	};
	return dr(() => {
		s && C();
	}), ur(w.destroy), ze({
		start: C,
		pause: () => w?.option("disabled", !0),
		resume: () => w?.option("disabled", !1)
	}, w);
}
var vr = [
	"update",
	"start",
	"add",
	"remove",
	"choose",
	"unchoose",
	"end",
	"sort",
	"filter",
	"clone",
	"move",
	"change"
], yr = p({
	name: "VueDraggable",
	model: {
		prop: "modelValue",
		event: "update:modelValue"
	},
	props: [
		"clone",
		"animation",
		"ghostClass",
		"group",
		"sort",
		"disabled",
		"store",
		"handle",
		"draggable",
		"swapThreshold",
		"invertSwap",
		"invertedSwapThreshold",
		"removeCloneOnHide",
		"direction",
		"chosenClass",
		"dragClass",
		"ignore",
		"filter",
		"preventOnFilter",
		"easing",
		"setData",
		"dropBubble",
		"dragoverBubble",
		"dataIdAttr",
		"delay",
		"delayOnTouchOnly",
		"touchStartThreshold",
		"forceFallback",
		"fallbackClass",
		"fallbackOnBody",
		"fallbackTolerance",
		"fallbackOffset",
		"supportPointer",
		"emptyInsertThreshold",
		"scroll",
		"forceAutoScrollFallback",
		"scrollSensitivity",
		"scrollSpeed",
		"bubbleScroll",
		"modelValue",
		"tag",
		"target",
		"customUpdate",
		...vr.map((e) => `on${e.replace(/^\S/, (e) => e.toUpperCase())}`)
	],
	emits: ["update:modelValue", ...vr],
	setup(e, { slots: t, emit: n, expose: r, attrs: i }) {
		let o = vr.reduce((e, t) => {
			let r = `on${t.replace(/^\S/, (e) => e.toUpperCase())}`;
			return e[r] = (...e) => n(t, ...e), e;
		}, {}), s = a(() => {
			let t = ue(e), { modelValue: n } = t, r = Be(t, ["modelValue"]), a = Object.entries(r).reduce((e, [t, n]) => {
				let r = j(n);
				return r !== void 0 && (e[t] = r), e;
			}, {});
			return ze(ze({}, o), Ke(ze(ze({}, i), a)));
		}), c = a({
			get: () => e.modelValue,
			set: (e) => n("update:modelValue", e)
		}), l = k(), u = ne(_r(e.target || l, c, s));
		return r(u), () => g(e.tag || "div", { ref: l }, (t?.default)?.call(t, u));
	}
}), br = {
	mounted: "mounted",
	unmounted: "unmounted"
};
br.mounted, br.unmounted;
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/propsFactory.js
function X(e, t) {
	return (n) => Object.keys(e).reduce((r, i) => {
		let a = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : { type: e[i] };
		return n && i in n ? r[i] = {
			...a,
			default: n[i]
		} : r[i] = a, t && !r[i].source && (r[i].source = t), r;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/component.js
var xr = X({
	class: [
		String,
		Array,
		Object
	],
	style: {
		type: [
			String,
			Array,
			Object
		],
		default: null
	}
}, "component");
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/console.js
function Sr(e) {
	he(`Vuetify: ${e}`);
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/globals.js
var Cr = typeof window < "u", wr = Cr && "IntersectionObserver" in window;
Cr && ("ontouchstart" in window || window.navigator.maxTouchPoints), Cr && "EyeDropper" in window;
var Tr = Cr && "matchMedia" in window && typeof window.matchMedia == "function", Er = () => Tr && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/helpers.js
function Z(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
	if (e == null || e === "") return;
	let n = Number(e);
	if (isNaN(n)) return String(e);
	if (isFinite(n)) return `${n}${t}`;
}
function Dr(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Or(e) {
	let t;
	return typeof e == "object" && !!e && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function kr(e) {
	if (e && "$el" in e) {
		let t = e.$el;
		return t?.nodeType === Node.TEXT_NODE ? t.nextElementSibling : t;
	}
	return e;
}
Object.freeze({
	enter: 13,
	tab: 9,
	delete: 46,
	esc: 27,
	space: 32,
	up: 38,
	down: 40,
	left: 37,
	right: 39,
	end: 35,
	home: 36,
	del: 46,
	backspace: 8,
	insert: 45,
	pageup: 33,
	pagedown: 34,
	shift: 16
}), Object.freeze({
	enter: "Enter",
	tab: "Tab",
	delete: "Delete",
	esc: "Escape",
	space: "Space",
	up: "ArrowUp",
	down: "ArrowDown",
	left: "ArrowLeft",
	right: "ArrowRight",
	end: "End",
	home: "Home",
	del: "Delete",
	backspace: "Backspace",
	insert: "Insert",
	pageup: "PageUp",
	pagedown: "PageDown",
	shift: "Shift"
});
function Ar(e, t) {
	return t.every((t) => e.hasOwnProperty(t));
}
function jr(e, t) {
	let n = {};
	for (let r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
	return n;
}
function Mr(e) {
	return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Nr(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
	return Math.max(t, Math.min(n, e));
}
function Pr(e, t) {
	return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length));
}
function Fr(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = [], r = 0;
	for (; r < e.length;) n.push(e.substr(r, t)), r += t;
	return n;
}
function Ir() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, r = {};
	for (let t in e) r[t] = e[t];
	for (let i in t) {
		let a = e[i], o = t[i];
		if (Or(a) && Or(o)) {
			r[i] = Ir(a, o, n);
			continue;
		}
		if (n && Array.isArray(a) && Array.isArray(o)) {
			r[i] = n(a, o);
			continue;
		}
		r[i] = o;
	}
	return r;
}
function Lr(t) {
	return t.map((t) => t.type === e ? Lr(t.children) : t).flat();
}
function Rr() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
	if (Rr.cache.has(e)) return Rr.cache.get(e);
	let t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
	return Rr.cache.set(e, t), t;
}
Rr.cache = /* @__PURE__ */ new Map();
function zr(e, t) {
	if (!t || typeof t != "object") return [];
	if (Array.isArray(t)) return t.map((t) => zr(e, t)).flat(1);
	if (t.suspense) return zr(e, t.ssContent);
	if (Array.isArray(t.children)) return t.children.map((t) => zr(e, t)).flat(1);
	if (t.component) {
		if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
		if (t.component.subTree) return zr(e, t.component.subTree).flat(1);
	}
	return [];
}
function Br(e) {
	let t = ne({});
	_e(() => {
		let n = e();
		for (let e in n) t[e] = n[e];
	}, { flush: "sync" });
	let n = {};
	for (let e in t) n[e] = A(() => t[e]);
	return n;
}
function Vr(e, t) {
	return e.includes(t);
}
function Hr(e, t) {
	return t = "on" + i(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Ur() {
	let e = se(), t = (t) => {
		e.value = t;
	};
	return Object.defineProperty(t, "value", {
		enumerable: !0,
		get: () => e.value,
		set: (t) => e.value = t
	}), Object.defineProperty(t, "el", {
		enumerable: !0,
		get: () => kr(e.value)
	}), t;
}
function Wr(e) {
	return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/anchor.js
var Gr = ["top", "bottom"], Kr = [
	"start",
	"end",
	"left",
	"right"
];
function qr(e, t) {
	let [n, r] = e.split(" ");
	return r ||= Vr(Gr, n) ? "start" : Vr(Kr, n) ? "top" : "center", {
		side: Jr(n, t),
		align: Jr(r, t)
	};
}
function Jr(e, t) {
	return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/color/APCA.js
var Yr = 2.4, Xr = .2126729, Zr = .7151522, Qr = .072175, $r = .55, ei = .58, ti = .57, ni = .62, ri = .03, ii = 1.45, ai = 5e-4, oi = 1.25, si = 1.25, ci = .078, li = 12.82051282051282, ui = .06, di = .001;
function fi(e, t) {
	let n = (e.r / 255) ** Yr, r = (e.g / 255) ** Yr, i = (e.b / 255) ** Yr, a = (t.r / 255) ** Yr, o = (t.g / 255) ** Yr, s = (t.b / 255) ** Yr, c = n * Xr + r * Zr + i * Qr, l = a * Xr + o * Zr + s * Qr;
	if (c <= ri && (c += (ri - c) ** ii), l <= ri && (l += (ri - l) ** ii), Math.abs(l - c) < ai) return 0;
	let u;
	if (l > c) {
		let e = (l ** $r - c ** ei) * oi;
		u = e < di ? 0 : e < ci ? e - e * li * ui : e - ui;
	} else {
		let e = (l ** ni - c ** ti) * si;
		u = e > -di ? 0 : e > -ci ? e - e * li * ui : e + ui;
	}
	return u * 100;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/colorUtils.js
function pi(e) {
	return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function mi(e) {
	return pi(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
var hi = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, gi = {
	rgb: (e, t, n, r) => ({
		r: e,
		g: t,
		b: n,
		a: r
	}),
	rgba: (e, t, n, r) => ({
		r: e,
		g: t,
		b: n,
		a: r
	}),
	hsl: (e, t, n, r) => yi({
		h: e,
		s: t,
		l: n,
		a: r
	}),
	hsla: (e, t, n, r) => yi({
		h: e,
		s: t,
		l: n,
		a: r
	}),
	hsv: (e, t, n, r) => vi({
		h: e,
		s: t,
		v: n,
		a: r
	}),
	hsva: (e, t, n, r) => vi({
		h: e,
		s: t,
		v: n,
		a: r
	})
};
function _i(e) {
	if (typeof e == "number") return (isNaN(e) || e < 0 || e > 16777215) && Sr(`'${e}' is not a valid hex color`), {
		r: (e & 16711680) >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
	if (typeof e == "string" && hi.test(e)) {
		let { groups: t } = e.match(hi), { fn: n, values: r } = t, i = r.split(/,\s*|\s*\/\s*|\s+/).map((e, t) => e.endsWith("%") || t > 0 && t < 3 && [
			"hsl",
			"hsla",
			"hsv",
			"hsva"
		].includes(n) ? parseFloat(e) / 100 : parseFloat(e));
		return gi[n](...i);
	} else if (typeof e == "string") {
		let t = e.startsWith("#") ? e.slice(1) : e;
		[3, 4].includes(t.length) ? t = t.split("").map((e) => e + e).join("") : [6, 8].includes(t.length) || Sr(`'${e}' is not a valid hex(a) color`);
		let n = parseInt(t, 16);
		return (isNaN(n) || n < 0 || n > 4294967295) && Sr(`'${e}' is not a valid hex(a) color`), xi(t);
	} else if (typeof e == "object") {
		if (Ar(e, [
			"r",
			"g",
			"b"
		])) return e;
		if (Ar(e, [
			"h",
			"s",
			"l"
		])) return vi(bi(e));
		if (Ar(e, [
			"h",
			"s",
			"v"
		])) return vi(e);
	}
	throw TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function vi(e) {
	let { h: t, s: n, v: r, a: i } = e, a = (e) => {
		let i = (e + t / 60) % 6;
		return r - r * n * Math.max(Math.min(i, 4 - i, 1), 0);
	}, o = [
		a(5),
		a(3),
		a(1)
	].map((e) => Math.round(e * 255));
	return {
		r: o[0],
		g: o[1],
		b: o[2],
		a: i
	};
}
function yi(e) {
	return vi(bi(e));
}
function bi(e) {
	let { h: t, s: n, l: r, a: i } = e, a = r + n * Math.min(r, 1 - r);
	return {
		h: t,
		s: a === 0 ? 0 : 2 - 2 * r / a,
		v: a,
		a: i
	};
}
function xi(e) {
	e = Si(e);
	let [t, n, r, i] = Fr(e, 2).map((e) => parseInt(e, 16));
	return i = i === void 0 ? i : i / 255, {
		r: t,
		g: n,
		b: r,
		a: i
	};
}
function Si(e) {
	return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((e) => e + e).join("")), e.length !== 6 && (e = Pr(Pr(e, 6), 8, "F")), e;
}
function Ci(e) {
	let t = Math.abs(fi(_i(0), _i(e)));
	return Math.abs(fi(_i(16777215), _i(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/getCurrentInstance.js
function wi(e, t) {
	let n = h();
	if (!n) throw Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
	return n;
}
function Ti() {
	let e = wi(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
	return Rr(e?.aliasName || e?.name);
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/injectSelf.js
function Ei(e) {
	let { provides: t } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wi("injectSelf");
	if (t && e in t) return t[e];
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/defaults.js
var Di = Symbol.for("vuetify:defaults");
function Oi() {
	let e = _(Di);
	if (!e) throw Error("[Vuetify] Could not find defaults instance");
	return e;
}
function ki(e, t) {
	let n = Oi(), r = k(e), i = a(() => {
		if (j(t?.disabled)) return n.value;
		let e = j(t?.scoped), i = j(t?.reset), a = j(t?.root);
		if (r.value == null && !(e || i || a)) return n.value;
		let o = Ir(r.value, { prev: n.value });
		if (e) return o;
		if (i || a) {
			let e = Number(i || Infinity);
			for (let t = 0; t <= e && !(!o || !("prev" in o)); t++) o = o.prev;
			return o && typeof a == "string" && a in o && (o = Ir(Ir(o, { prev: o }), o[a])), o;
		}
		return o.prev ? Ir(o.prev, o) : o;
	});
	return te(Di, i), i;
}
function Ai(e, t) {
	return e.props && (e.props[t] !== void 0 || e.props[Rr(t)] !== void 0);
}
function ji() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Oi(), r = wi("useDefaults");
	if (t = t ?? r.type.name ?? r.type.__name, !t) throw Error("[Vuetify] Could not determine component name");
	let i = a(() => n.value?.[e._as ?? t]), o = new Proxy(e, { get(e, t) {
		let a = Reflect.get(e, t);
		if (t === "class" || t === "style") return [i.value?.[t], a].filter((e) => e != null);
		if (Ai(r.vnode, t)) return a;
		let o = i.value?.[t];
		if (o !== void 0) return o;
		let s = n.value?.global?.[t];
		return s === void 0 ? a : s;
	} }), s = se();
	_e(() => {
		if (i.value) {
			let e = Object.entries(i.value).filter((e) => {
				let [t] = e;
				return t.startsWith(t[0].toUpperCase());
			});
			s.value = e.length ? Object.fromEntries(e) : void 0;
		} else s.value = void 0;
	});
	function c() {
		let e = Ei(Di, r);
		te(Di, a(() => s.value ? Ir(e?.value ?? {}, s.value) : e?.value));
	}
	return {
		props: o,
		provideSubDefaults: c
	};
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/defineComponent.js
function Mi(e) {
	if (e._setup = e._setup ?? e.setup, !e.name) return Sr("The component is missing an explicit name, unable to generate default prop value"), e;
	if (e._setup) {
		e.props = X(e.props ?? {}, e.name)();
		let t = Object.keys(e.props).filter((e) => e !== "class" && e !== "style");
		e.filterProps = function(e) {
			return jr(e, t);
		}, e.props._as = String, e.setup = function(t, n) {
			let r = Oi();
			if (!r.value) return e._setup(t, n);
			let { props: i, provideSubDefaults: a } = ji(t, t._as ?? e.name, r), o = e._setup(i, n);
			return a(), o;
		};
	}
	return e;
}
function Ni() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
	return (t) => (e ? Mi : p)(t);
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/deepEqual.js
function Pi(e, t, n, r) {
	if (!n || Wr(e) || Wr(t)) return;
	let i = n.get(e);
	if (i) i.set(t, r);
	else {
		let i = /* @__PURE__ */ new WeakMap();
		i.set(t, r), n.set(e, i);
	}
}
function Fi(e, t, n) {
	if (!n || Wr(e) || Wr(t)) return null;
	let r = n.get(e)?.get(t);
	if (typeof r == "boolean") return r;
	let i = n.get(t)?.get(e);
	return typeof i == "boolean" ? i : null;
}
function Ii(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
	if (e === t) return !0;
	if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return !1;
	let r = Object.keys(e);
	return r.length === Object.keys(t).length ? Fi(e, t, n) || (Pi(e, t, n, !0), r.every((r) => Ii(e[r], t[r], n))) : !1;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/useRender.js
function Li(e) {
	let t = wi("useRender");
	t.render = e;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/resizeObserver.js
function Ri(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content", n = Ur(), r = k();
	if (Cr) {
		let i = new ResizeObserver((n) => {
			e?.(n, i), n.length && (t === "content" ? r.value = n[0].contentRect : r.value = n[0].target.getBoundingClientRect());
		});
		w(() => {
			i.disconnect();
		}), ge(() => n.el, (e, t) => {
			t && (i.unobserve(t), r.value = void 0), e && i.observe(e);
		}, { flush: "post" });
	}
	return {
		resizeRef: n,
		contentRect: re(r)
	};
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/toggleScope.js
function zi(e, t) {
	let n;
	function r() {
		n = m(), n.run(() => t.length ? t(() => {
			n?.stop(), r();
		}) : t());
	}
	ge(e, (e) => {
		e && !n ? r() : e || (n?.stop(), n = void 0);
	}, { immediate: !0 }), E(() => {
		n?.stop();
	});
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/proxiedModel.js
function Bi(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (e) => e, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (e) => e, o = wi("useProxiedModel"), s = k(e[t] === void 0 ? n : e[t]), c = Rr(t), l = a(c === t ? () => (e[t], !!(o.vnode.props?.hasOwnProperty(t) && o.vnode.props?.hasOwnProperty(`onUpdate:${t}`))) : () => (e[t], !!((o.vnode.props?.hasOwnProperty(t) || o.vnode.props?.hasOwnProperty(c)) && (o.vnode.props?.hasOwnProperty(`onUpdate:${t}`) || o.vnode.props?.hasOwnProperty(`onUpdate:${c}`)))));
	zi(() => !l.value, () => {
		ge(() => e[t], (e) => {
			s.value = e;
		});
	});
	let u = a({
		get() {
			let n = e[t];
			return r(l.value ? n : s.value);
		},
		set(n) {
			let a = i(n), c = le(l.value ? e[t] : s.value);
			c === a || r(c) === n || (s.value = a, o?.emit(`update:${t}`, a));
		}
	});
	return Object.defineProperty(u, "externalValue", { get: () => l.value ? e[t] : s.value }), u;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/locale.js
var Vi = Symbol.for("vuetify:locale");
function Hi() {
	let e = _(Vi);
	if (!e) throw Error("[Vuetify] Could not find injected rtl instance");
	return {
		isRtl: e.isRtl,
		rtlClasses: e.rtlClasses
	};
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/theme.js
var Ui = Symbol.for("vuetify:theme"), Wi = X({ theme: String }, "theme");
function Gi(e) {
	wi("provideTheme");
	let t = _(Ui, null);
	if (!t) throw Error("Could not find Vuetify theme injection");
	let n = A(() => e.theme ?? t.name.value), r = A(() => t.themes.value[n.value]), i = A(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`), a = {
		...t,
		name: n,
		current: r,
		themeClasses: i
	};
	return te(Ui, a), a;
}
function Ki() {
	wi("useTheme");
	let e = _(Ui, null);
	if (!e) throw Error("Could not find Vuetify theme injection");
	return e;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/tag.js
var qi = X({ tag: {
	type: [
		String,
		Object,
		Function
	],
	default: "div"
} }, "tag"), Ji = X({
	disabled: Boolean,
	group: Boolean,
	hideOnLeave: Boolean,
	leaveAbsolute: Boolean,
	mode: String,
	origin: String
}, "transition");
function Q(e, t, i) {
	return Ni()({
		name: e,
		props: Ji({
			mode: i,
			origin: t
		}),
		setup(t, i) {
			let { slots: a } = i, o = {
				onBeforeEnter(e) {
					t.origin && (e.style.transformOrigin = t.origin);
				},
				onLeave(e) {
					if (t.leaveAbsolute) {
						let { offsetTop: t, offsetLeft: n, offsetWidth: r, offsetHeight: i } = e;
						e._transitionInitialStyles = {
							position: e.style.position,
							top: e.style.top,
							left: e.style.left,
							width: e.style.width,
							height: e.style.height
						}, e.style.position = "absolute", e.style.top = `${t}px`, e.style.left = `${n}px`, e.style.width = `${r}px`, e.style.height = `${i}px`;
					}
					t.hideOnLeave && e.style.setProperty("display", "none", "important");
				},
				onAfterLeave(e) {
					if (t.leaveAbsolute && e?._transitionInitialStyles) {
						let { position: t, top: n, left: r, width: i, height: a } = e._transitionInitialStyles;
						delete e._transitionInitialStyles, e.style.position = t || "", e.style.top = n || "", e.style.left = r || "", e.style.width = i || "", e.style.height = a || "";
					}
				}
			};
			return () => g(t.group ? r : n, {
				name: t.disabled ? "" : e,
				css: !t.disabled,
				...t.group ? void 0 : { mode: t.mode },
				...t.disabled ? {} : o
			}, a.default);
		}
	});
}
function Yi(e, t) {
	let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
	return Ni()({
		name: e,
		props: {
			mode: {
				type: String,
				default: i
			},
			disabled: {
				type: Boolean,
				default: Er()
			},
			group: Boolean,
			hideOnLeave: Boolean
		},
		setup(i, a) {
			let { slots: o } = a, s = i.group ? r : n;
			return () => g(s, {
				name: i.disabled ? "" : e,
				css: !i.disabled,
				...i.disabled ? {} : {
					...t,
					onLeave: (e) => {
						i.hideOnLeave ? e.style.setProperty("display", "none", "important") : t.onLeave?.(e);
					}
				}
			}, o.default);
		}
	});
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/components/transitions/expand-transition.js
function Xi() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
	return {
		onBeforeEnter(e) {
			e._parent = e.parentNode, e._initialStyle = {
				transition: e.style.transition,
				overflow: e.style.overflow,
				width: e.style.width,
				height: e.style.height
			};
		},
		onEnter(n) {
			let r = n._initialStyle;
			if (!r) return;
			n.style.setProperty("transition", "none", "important"), n.style.overflow = "hidden";
			let i = `${n.offsetWidth}px`, a = `${n.offsetHeight}px`;
			["x", "both"].includes(t) && (n.style.width = "0"), ["y", "both"].includes(t) && (n.style.height = "0"), n.offsetHeight, n.style.transition = r.transition, e && n._parent && n._parent.classList.add(e), requestAnimationFrame(() => {
				["x", "both"].includes(t) && (n.style.width = i), ["y", "both"].includes(t) && (n.style.height = a);
			});
		},
		onAfterEnter: r,
		onEnterCancelled: r,
		onLeave(e) {
			e._initialStyle = {
				transition: "",
				overflow: e.style.overflow,
				width: e.style.width,
				height: e.style.height
			}, e.style.overflow = "hidden", ["x", "both"].includes(t) && (e.style.width = `${e.offsetWidth}px`), ["y", "both"].includes(t) && (e.style.height = `${e.offsetHeight}px`), e.offsetHeight, requestAnimationFrame(() => {
				["x", "both"].includes(t) && (e.style.width = "0"), ["y", "both"].includes(t) && (e.style.height = "0");
			});
		},
		onAfterLeave: n,
		onLeaveCancelled: n
	};
	function n(t) {
		e && t._parent && t._parent.classList.remove(e), r(t);
	}
	function r(e) {
		if (!e._initialStyle) return;
		let { width: n, height: r } = e._initialStyle;
		e.style.overflow = e._initialStyle.overflow, n != null && ["x", "both"].includes(t) && (e.style.width = n), r != null && ["y", "both"].includes(t) && (e.style.height = r), delete e._initialStyle;
	}
}
Q("fab-transition", "center center", "out-in"), Q("dialog-bottom-transition"), Q("dialog-top-transition"), Q("fade-transition"), Q("scale-transition"), Q("scroll-x-transition"), Q("scroll-x-reverse-transition"), Q("scroll-y-transition"), Q("scroll-y-reverse-transition"), Q("slide-x-transition"), Q("slide-x-reverse-transition"), Q("slide-y-transition"), Q("slide-y-reverse-transition");
var Zi = Yi("expand-transition", Xi());
Yi("expand-x-transition", Xi("", "x")), Yi("expand-both-transition", Xi("", "both"));
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/components/VDefaultsProvider/VDefaultsProvider.js
var Qi = X({
	defaults: Object,
	disabled: Boolean,
	reset: [Number, String],
	root: [Boolean, String],
	scoped: Boolean
}, "VDefaultsProvider"), $i = Ni(!1)({
	name: "VDefaultsProvider",
	props: Qi(),
	setup(e, t) {
		let { slots: n } = t, { defaults: r, disabled: i, reset: a, root: o, scoped: s } = ue(e);
		return ki(r, {
			reset: a,
			root: o,
			scoped: s,
			disabled: i
		}), () => n.default?.();
	}
}), ea = X({
	height: [Number, String],
	maxHeight: [Number, String],
	maxWidth: [Number, String],
	minHeight: [Number, String],
	minWidth: [Number, String],
	width: [Number, String]
}, "dimension");
function ta(e) {
	return { dimensionStyles: a(() => {
		let t = {}, n = Z(e.height), r = Z(e.maxHeight), i = Z(e.maxWidth), a = Z(e.minHeight), o = Z(e.minWidth), s = Z(e.width);
		return n != null && (t.height = n), r != null && (t.maxHeight = r), i != null && (t.maxWidth = i), a != null && (t.minHeight = a), o != null && (t.minWidth = o), s != null && (t.width = s), t;
	}) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/color.js
function na(e) {
	return Br(() => {
		let { class: t, style: n } = aa(e);
		return {
			colorClasses: t,
			colorStyles: n
		};
	});
}
function ra(e) {
	let { colorClasses: t, colorStyles: n } = na(() => ({ text: de(e) }));
	return {
		textColorClasses: t,
		textColorStyles: n
	};
}
function ia(e) {
	return {
		text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text,
		background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background
	};
}
function aa(e) {
	let t = ia(de(e)), n = [], r = {};
	if (t.background) if (pi(t.background)) {
		if (r.backgroundColor = t.background, !t.text && mi(t.background)) {
			let e = _i(t.background);
			if (e.a == null || e.a === 1) {
				let t = Ci(e);
				r.color = t, r.caretColor = t;
			}
		}
	} else n.push(`bg-${t.background}`);
	return t.text && (pi(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), {
		class: n,
		style: r
	};
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/rounded.js
var oa = X({
	rounded: {
		type: [
			Boolean,
			Number,
			String
		],
		default: void 0
	},
	tile: Boolean
}, "rounded");
function sa(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ti();
	return { roundedClasses: a(() => {
		let n = v(e) ? e.value : e.rounded, r = v(e) ? !1 : e.tile, i = [];
		if (r || n === !1) i.push("rounded-0");
		else if (n === !0 || n === "") i.push(`${t}--rounded`);
		else if (typeof n == "string" || n === 0) for (let e of String(n).split(" ")) i.push(`rounded-${e}`);
		return i;
	}) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/border.js
var ca = X({ border: [
	Boolean,
	Number,
	String
] }, "border");
function la(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ti();
	return { borderClasses: a(() => {
		let n = e.border;
		return n === !0 || n === "" ? `${t}--border` : typeof n == "string" || n === 0 ? String(n).split(" ").map((e) => `border-${e}`) : [];
	}) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/elevation.js
var ua = X({ elevation: {
	type: [Number, String],
	validator(e) {
		let t = parseInt(e);
		return !isNaN(t) && t >= 0 && t <= 24;
	}
} }, "elevation");
function da(e) {
	return { elevationClasses: A(() => {
		let t = v(e) ? e.value : e.elevation;
		return t == null ? [] : [`elevation-${t}`];
	}) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/location.js
var fa = {
	center: "center",
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, pa = X({ location: String }, "location");
function ma(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0, { isRtl: r } = Hi();
	return { locationStyles: a(() => {
		if (!e.location) return {};
		let { side: i, align: a } = qr(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
		function o(e) {
			return n ? n(e) : 0;
		}
		let s = {};
		return i !== "center" && (t ? s[fa[i]] = `calc(100% - ${o(i)}px)` : s[i] = 0), a === "center" ? (i === "center" ? s.top = s.left = "50%" : s[{
			top: "left",
			bottom: "left",
			left: "top",
			right: "top"
		}[i]] = "50%", s.transform = {
			top: "translateX(-50%)",
			bottom: "translateX(-50%)",
			left: "translateY(-50%)",
			right: "translateY(-50%)",
			center: "translate(-50%, -50%)"
		}[i]) : t ? s[fa[a]] = `calc(100% - ${o(a)}px)` : s[a] = 0, s;
	}) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/density.js
var ha = [
	null,
	"default",
	"comfortable",
	"compact"
], ga = X({ density: {
	type: String,
	default: "default",
	validator: (e) => ha.includes(e)
} }, "density");
function _a(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ti();
	return { densityClasses: A(() => `${t}--density-${e.density}`) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/variant.js
var va = [
	"elevated",
	"flat",
	"tonal",
	"outlined",
	"text",
	"plain"
];
function ya(t, n) {
	return l(e, null, [t && l("span", {
		key: "overlay",
		class: S(`${n}__overlay`)
	}, null), l("span", {
		key: "underlay",
		class: S(`${n}__underlay`)
	}, null)]);
}
var ba = X({
	color: String,
	variant: {
		type: String,
		default: "elevated",
		validator: (e) => va.includes(e)
	}
}, "variant");
function xa(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ti(), n = A(() => {
		let { variant: n } = de(e);
		return `${t}--variant-${n}`;
	}), { colorClasses: r, colorStyles: i } = na(() => {
		let { variant: t, color: n } = de(e);
		return { [["elevated", "flat"].includes(t) ? "background" : "text"]: n };
	});
	return {
		colorClasses: r,
		colorStyles: i,
		variantClasses: n
	};
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/components/VBtnGroup/VBtnGroup.js
var Sa = X({
	baseColor: String,
	divided: Boolean,
	direction: {
		type: String,
		default: "horizontal"
	},
	...ca(),
	...xr(),
	...ga(),
	...ua(),
	...oa(),
	...qi(),
	...Wi(),
	...ba()
}, "VBtnGroup"), Ca = Ni()({
	name: "VBtnGroup",
	props: Sa(),
	setup(e, t) {
		let { slots: n } = t, { themeClasses: r } = Gi(e), { densityClasses: i } = _a(e), { borderClasses: a } = la(e), { elevationClasses: o } = da(e), { roundedClasses: s } = sa(e);
		ki({ VBtn: {
			height: A(() => e.direction === "horizontal" ? "auto" : null),
			baseColor: A(() => e.baseColor),
			color: A(() => e.color),
			density: A(() => e.density),
			flat: !0,
			variant: A(() => e.variant)
		} }), Li(() => f(e.tag, {
			class: S([
				"v-btn-group",
				`v-btn-group--${e.direction}`,
				{ "v-btn-group--divided": e.divided },
				r.value,
				a.value,
				i.value,
				o.value,
				s.value,
				e.class
			]),
			style: C(e.style)
		}, n));
	}
}), wa = X({
	modelValue: {
		type: null,
		default: void 0
	},
	multiple: Boolean,
	mandatory: [Boolean, String],
	max: Number,
	selectedClass: String,
	disabled: Boolean
}, "group"), Ta = X({
	value: null,
	disabled: Boolean,
	selectedClass: String
}, "group-item");
function Ea(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = wi("useGroupItem");
	if (!r) throw Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
	let i = fe();
	te(Symbol.for(`${t.description}:id`), i);
	let o = _(t, null);
	if (!o) {
		if (!n) return o;
		throw Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
	}
	let s = A(() => e.value), c = a(() => !!(o.disabled.value || e.disabled));
	function l() {
		o?.register({
			id: i,
			value: s,
			disabled: c
		}, r);
	}
	function u() {
		o?.unregister(i);
	}
	l(), w(() => u());
	let d = a(() => o.isSelected(i)), f = a(() => o.items.value[0].id === i), p = a(() => o.items.value[o.items.value.length - 1].id === i), m = a(() => d.value && [o.selectedClass.value, e.selectedClass]);
	return ge(d, (e) => {
		r.emit("group:selected", { value: e });
	}, { flush: "sync" }), {
		id: i,
		isSelected: d,
		isFirst: f,
		isLast: p,
		toggle: () => o.select(i, !d.value),
		select: (e) => o.select(i, e),
		selectedClass: m,
		value: s,
		disabled: c,
		group: o,
		register: l,
		unregister: u
	};
}
function Da(e, t) {
	let n = !1, r = ne([]), i = Bi(e, "modelValue", [], (e) => e === void 0 ? [] : ka(r, e === null ? [null] : Mr(e)), (t) => {
		let n = Aa(r, t);
		return e.multiple ? n : n[0];
	}), a = wi("useGroup");
	function o(e, n) {
		let i = e, o = zr(Symbol.for(`${t.description}:id`), a?.vnode).indexOf(n);
		j(i.value) === void 0 && (i.value = o, i.useIndexAsValue = !0), o > -1 ? r.splice(o, 0, i) : r.push(i);
	}
	function s(e) {
		if (n) return;
		c();
		let t = r.findIndex((t) => t.id === e);
		r.splice(t, 1);
	}
	function c() {
		let t = r.find((e) => !e.disabled);
		t && e.mandatory === "force" && !i.value.length && (i.value = [t.id]);
	}
	T(() => {
		c();
	}), w(() => {
		n = !0;
	}), ee(() => {
		for (let e = 0; e < r.length; e++) r[e].useIndexAsValue && (r[e].value = e);
	});
	function l(t, n) {
		let a = r.find((e) => e.id === t);
		if (!(n && a?.disabled)) if (e.multiple) {
			let r = i.value.slice(), a = r.findIndex((e) => e === t), o = ~a;
			if (n ??= !o, o && e.mandatory && r.length <= 1 || !o && e.max != null && r.length + 1 > e.max) return;
			a < 0 && n ? r.push(t) : a >= 0 && !n && r.splice(a, 1), i.value = r;
		} else {
			let r = i.value.includes(t);
			if (e.mandatory && r || !r && !n) return;
			i.value = n ?? !r ? [t] : [];
		}
	}
	function u(t) {
		if (e.multiple && Sr("This method is not supported when using \"multiple\" prop"), i.value.length) {
			let e = i.value[0], n = r.findIndex((t) => t.id === e), a = (n + t) % r.length, o = r[a];
			for (; o.disabled && a !== n;) a = (a + t) % r.length, o = r[a];
			if (o.disabled) return;
			i.value = [r[a].id];
		} else {
			let e = r.find((e) => !e.disabled);
			e && (i.value = [e.id]);
		}
	}
	let d = {
		register: o,
		unregister: s,
		selected: i,
		select: l,
		disabled: A(() => e.disabled),
		prev: () => u(r.length - 1),
		next: () => u(1),
		isSelected: (e) => i.value.includes(e),
		selectedClass: A(() => e.selectedClass),
		items: A(() => r),
		getItemIndex: (e) => Oa(r, e)
	};
	return te(t, d), d;
}
function Oa(e, t) {
	let n = ka(e, [t]);
	return n.length ? e.findIndex((e) => e.id === n[0]) : -1;
}
function ka(e, t) {
	let n = [];
	return t.forEach((t) => {
		let r = e.find((e) => Ii(t, e.value)), i = e[t];
		r?.value === void 0 ? i?.useIndexAsValue && n.push(i.id) : n.push(r.id);
	}), n;
}
function Aa(e, t) {
	let n = [];
	return t.forEach((t) => {
		let r = e.findIndex((e) => e.id === t);
		if (~r) {
			let t = e[r];
			n.push(t.value === void 0 ? r : t.value);
		}
	}), n;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
var ja = Symbol.for("vuetify:v-btn-toggle"), Ma = X({
	...Sa(),
	...wa()
}, "VBtnToggle");
Ni()({
	name: "VBtnToggle",
	props: Ma(),
	emits: { "update:modelValue": (e) => !0 },
	setup(e, t) {
		let { slots: n } = t, { isSelected: r, next: i, prev: a, select: o, selected: s } = Da(e, ja);
		return Li(() => {
			let t = Ca.filterProps(e);
			return f(Ca, b({ class: ["v-btn-toggle", e.class] }, t, { style: e.style }), { default: () => [n.default?.({
				isSelected: r,
				next: i,
				prev: a,
				select: o,
				selected: s
			})] });
		}), {
			next: i,
			prev: a,
			select: o
		};
	}
});
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/icons.js
var Na = [
	String,
	Function,
	Object,
	Array
], Pa = Symbol.for("vuetify:icons"), Fa = X({
	icon: { type: Na },
	tag: {
		type: [
			String,
			Object,
			Function
		],
		required: !0
	}
}, "icon"), Ia = Ni()({
	name: "VComponentIcon",
	props: Fa(),
	setup(e, t) {
		let { slots: n } = t;
		return () => {
			let t = e.icon;
			return f(e.tag, null, { default: () => [e.icon ? f(t, null, null) : n.default?.()] });
		};
	}
}), La = Mi({
	name: "VSvgIcon",
	inheritAttrs: !1,
	props: Fa(),
	setup(e, t) {
		let { attrs: n } = t;
		return () => f(e.tag, b(n, { style: null }), { default: () => [l("svg", {
			class: "v-icon__svg",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			role: "img",
			"aria-hidden": "true"
		}, [Array.isArray(e.icon) ? e.icon.map((e) => Array.isArray(e) ? l("path", {
			d: e[0],
			"fill-opacity": e[1]
		}, null) : l("path", { d: e }, null)) : l("path", { d: e.icon }, null)])] });
	}
});
Mi({
	name: "VLigatureIcon",
	props: Fa(),
	setup(e) {
		return () => f(e.tag, null, { default: () => [e.icon] });
	}
}), Mi({
	name: "VClassIcon",
	props: Fa(),
	setup(e) {
		return () => f(e.tag, { class: S(e.icon) }, null);
	}
});
var Ra = (e) => {
	let t = _(Pa);
	if (!t) throw Error("Missing Vuetify Icons provide!");
	return { iconData: a(() => {
		let n = de(e);
		if (!n) return { component: Ia };
		let r = n;
		if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = t.aliases?.[r.slice(1)])), r || Sr(`Could not find aliased icon "${n}"`), Array.isArray(r)) return {
			component: La,
			icon: r
		};
		if (typeof r != "string") return {
			component: Ia,
			icon: r
		};
		let i = Object.keys(t.sets).find((e) => typeof r == "string" && r.startsWith(`${e}:`)), a = i ? r.slice(i.length + 1) : r;
		return {
			component: t.sets[i ?? t.defaultSet].component,
			icon: a
		};
	}) };
}, za = [
	"x-small",
	"small",
	"default",
	"large",
	"x-large"
], Ba = X({ size: {
	type: [String, Number],
	default: "default"
} }, "size");
function Va(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ti();
	return Br(() => {
		let n = e.size, r, i;
		return Vr(za, n) ? r = `${t}--size-${n}` : n && (i = {
			width: Z(n),
			height: Z(n)
		}), {
			sizeClasses: r,
			sizeStyles: i
		};
	});
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/components/VIcon/VIcon.js
var Ha = X({
	color: String,
	disabled: Boolean,
	start: Boolean,
	end: Boolean,
	icon: Na,
	opacity: [String, Number],
	...xr(),
	...Ba(),
	...qi({ tag: "i" }),
	...Wi()
}, "VIcon"), Ua = Ni()({
	name: "VIcon",
	props: Ha(),
	setup(e, n) {
		let { attrs: r, slots: i } = n, a = se(), { themeClasses: o } = Ki(), { iconData: s } = Ra(() => a.value || e.icon), { sizeClasses: c } = Va(e), { textColorClasses: l, textColorStyles: u } = ra(() => e.color);
		return Li(() => {
			let n = i.default?.();
			n && (a.value = Lr(n).filter((e) => e.type === t && e.children && typeof e.children == "string")[0]?.children);
			let d = !!(r.onClick || r.onClickOnce);
			return f(s.value.component, {
				tag: e.tag,
				icon: s.value.icon,
				class: S([
					"v-icon",
					"notranslate",
					o.value,
					c.value,
					l.value,
					{
						"v-icon--clickable": d,
						"v-icon--disabled": e.disabled,
						"v-icon--start": e.start,
						"v-icon--end": e.end
					},
					e.class
				]),
				style: C([
					{ "--v-icon-opacity": e.opacity },
					c.value ? void 0 : {
						fontSize: Z(e.size),
						height: Z(e.size),
						width: Z(e.size)
					},
					u.value,
					e.style
				]),
				role: d ? "button" : void 0,
				"aria-hidden": !d,
				tabindex: d ? e.disabled ? -1 : 0 : void 0
			}, { default: () => [n] });
		}), {};
	}
});
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/intersectionObserver.js
function Wa(e, t) {
	let n = k(), r = se(!1);
	if (wr) {
		let i = new IntersectionObserver((t) => {
			e?.(t, i), r.value = !!t.find((e) => e.isIntersecting);
		}, t);
		E(() => {
			i.disconnect();
		}), ge(n, (e, t) => {
			t && (i.unobserve(t), r.value = !1), e && i.observe(e);
		}, { flush: "post" });
	}
	return {
		intersectionRef: n,
		isIntersecting: r
	};
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/reveal.js
var Ga = X({ reveal: {
	type: [Boolean, Object],
	default: !1
} }, "reveal");
function Ka(e) {
	let t = A(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), n = se(e.reveal ? "initial" : "disabled");
	return T(async () => {
		e.reveal && (n.value = "initial", await new Promise((e) => requestAnimationFrame(e)), n.value = "pending", await new Promise((e) => setTimeout(e, t.value)), n.value = "done");
	}), {
		duration: t,
		state: n
	};
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var qa = X({
	bgColor: String,
	color: String,
	indeterminate: [Boolean, String],
	rounded: Boolean,
	modelValue: {
		type: [Number, String],
		default: 0
	},
	rotate: {
		type: [Number, String],
		default: 0
	},
	width: {
		type: [Number, String],
		default: 4
	},
	...xr(),
	...Ga(),
	...Ba(),
	...qi({ tag: "div" }),
	...Wi()
}, "VProgressCircular"), Ja = Ni()({
	name: "VProgressCircular",
	props: qa(),
	setup(e, t) {
		let { slots: n } = t, r = 2 * Math.PI * 20, i = k(), { themeClasses: o } = Gi(e), { sizeClasses: s, sizeStyles: c } = Va(e), { textColorClasses: u, textColorStyles: d } = ra(() => e.color), { textColorClasses: p, textColorStyles: m } = ra(() => e.bgColor), { intersectionRef: h, isIntersecting: g } = Wa(), { resizeRef: _, contentRect: v } = Ri(), { state: y, duration: b } = Ka(e), x = A(() => y.value === "initial" ? 0 : Nr(parseFloat(e.modelValue), 0, 100)), w = A(() => Number(e.width)), T = A(() => c.value ? Number(e.size) : v.value ? v.value.width : Math.max(w.value, 32)), E = A(() => 20 / (1 - w.value / T.value) * 2), D = A(() => w.value / T.value * E.value), ee = A(() => {
			let t = (100 - x.value) / 100 * r;
			return e.rounded && x.value > 0 && x.value < 100 ? Z(Math.min(r - .01, t + D.value)) : Z(t);
		}), O = a(() => {
			let t = Number(e.rotate);
			return e.rounded ? t + D.value / 2 / r * 360 : t;
		});
		return _e(() => {
			h.value = i.value, _.value = i.value;
		}), Li(() => f(e.tag, {
			ref: i,
			class: S([
				"v-progress-circular",
				{
					"v-progress-circular--indeterminate": !!e.indeterminate,
					"v-progress-circular--visible": g.value,
					"v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Er()),
					"v-progress-circular--revealing": ["initial", "pending"].includes(y.value)
				},
				o.value,
				s.value,
				u.value,
				e.class
			]),
			style: C([
				c.value,
				d.value,
				{ "--progress-reveal-duration": `${b.value}ms` },
				e.style
			]),
			role: "progressbar",
			"aria-valuemin": "0",
			"aria-valuemax": "100",
			"aria-valuenow": e.indeterminate ? void 0 : x.value
		}, { default: () => [l("svg", {
			style: { transform: `rotate(calc(-90deg + ${O.value}deg))` },
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: `0 0 ${E.value} ${E.value}`
		}, [l("circle", {
			class: S(["v-progress-circular__underlay", p.value]),
			style: C(m.value),
			fill: "transparent",
			cx: "50%",
			cy: "50%",
			r: 20,
			"stroke-width": D.value,
			"stroke-dasharray": r,
			"stroke-dashoffset": 0
		}, null), l("circle", {
			class: "v-progress-circular__overlay",
			fill: "transparent",
			cx: "50%",
			cy: "50%",
			r: 20,
			"stroke-width": D.value,
			"stroke-dasharray": r,
			"stroke-dashoffset": ee.value,
			"stroke-linecap": e.rounded ? "round" : void 0
		}, null)]), n.default && l("div", { class: "v-progress-circular__content" }, [n.default({ value: x.value })])] })), {};
	}
}), Ya = X({ loading: [Boolean, String] }, "loader");
function Xa(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ti();
	return { loaderClasses: A(() => ({ [`${t}--loading`]: e.loading })) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/position.js
var Za = [
	"static",
	"relative",
	"fixed",
	"absolute",
	"sticky"
], Qa = X({ position: {
	type: String,
	validator: (e) => Za.includes(e)
} }, "position");
function $a(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ti();
	return { positionClasses: A(() => e.position ? `${t}--${e.position}` : void 0) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/router.js
function eo() {
	let e = wi("useRoute");
	return a(() => e?.proxy?.$route);
}
function to(e, t) {
	let n = oe("RouterLink"), r = A(() => !!(e.href || e.to)), i = a(() => r?.value || Hr(t, "click") || Hr(e, "click"));
	if (typeof n == "string" || !("useLink" in n)) {
		let t = A(() => e.href);
		return {
			isLink: r,
			isRouterLink: A(() => !1),
			isClickable: i,
			href: t,
			linkProps: ne({ href: t }),
			route: A(() => void 0),
			navigate: A(() => void 0)
		};
	}
	let o = n.useLink({
		to: A(() => e.to || ""),
		replace: A(() => e.replace)
	}), s = a(() => e.to ? o : void 0), c = eo(), l = a(() => s.value ? e.exact ? c.value ? s.value.isExactActive?.value && Ii(s.value.route.value.query, c.value.query) : s.value.isExactActive?.value ?? !1 : s.value.isActive?.value ?? !1 : !1), u = a(() => e.to ? s.value?.route.value.href : e.href);
	return {
		isLink: r,
		isRouterLink: A(() => !!e.to),
		isClickable: i,
		isActive: l,
		route: A(() => s.value?.route.value),
		navigate: A(() => s.value?.navigate),
		href: u,
		linkProps: ne({
			href: u,
			"aria-current": A(() => l.value ? "page" : void 0),
			"aria-disabled": A(() => e.disabled && r.value ? "true" : void 0),
			tabindex: A(() => e.disabled && r.value ? "-1" : void 0)
		})
	};
}
var no = X({
	href: String,
	replace: Boolean,
	to: [String, Object],
	exact: Boolean
}, "router");
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/selectLink.js
function ro(e, t) {
	ge(() => e.isActive?.value, (n) => {
		e.isLink.value && n != null && t && x(() => {
			t(n);
		});
	}, { immediate: !0 });
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/directives/ripple/index.js
var io = Symbol("rippleStop"), ao = 80;
function oo(e, t) {
	e.style.transform = t, e.style.webkitTransform = t;
}
function so(e) {
	return e.constructor.name === "TouchEvent";
}
function co(e) {
	return e.constructor.name === "KeyboardEvent";
}
var lo = function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, i = 0;
	if (!co(e)) {
		let n = t.getBoundingClientRect(), a = so(e) ? e.touches[e.touches.length - 1] : e;
		r = a.clientX - n.left, i = a.clientY - n.top;
	}
	let a = 0, o = .3;
	t._ripple?.circle ? (o = .15, a = t.clientWidth / 2, a = n.center ? a : a + Math.sqrt((r - a) ** 2 + (i - a) ** 2) / 4) : a = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
	let s = `${(t.clientWidth - a * 2) / 2}px`, c = `${(t.clientHeight - a * 2) / 2}px`, l = n.center ? s : `${r - a}px`, u = n.center ? c : `${i - a}px`;
	return {
		radius: a,
		scale: o,
		x: l,
		y: u,
		centerX: s,
		centerY: c
	};
}, uo = {
	show(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		if (!t?._ripple?.enabled) return;
		let r = document.createElement("span"), i = document.createElement("span");
		r.appendChild(i), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
		let { radius: a, scale: o, x: s, y: c, centerX: l, centerY: u } = lo(e, t, n), d = `${a * 2}px`;
		i.className = "v-ripple__animation", i.style.width = d, i.style.height = d, t.appendChild(r);
		let f = window.getComputedStyle(t);
		f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), oo(i, `translate(${s}, ${c}) scale3d(${o},${o},${o})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), oo(i, `translate(${l}, ${u}) scale3d(1,1,1)`);
			});
		});
	},
	hide(e) {
		if (!e?._ripple?.enabled) return;
		let t = e.getElementsByClassName("v-ripple__animation");
		if (t.length === 0) return;
		let n = Array.from(t).findLast((e) => !e.dataset.isHiding);
		if (n) n.dataset.isHiding = "true";
		else return;
		let r = performance.now() - Number(n.dataset.activated), i = Math.max(250 - r, 0);
		setTimeout(() => {
			n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
				e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), n.parentNode?.parentNode === e && e.removeChild(n.parentNode);
			}, 300);
		}, i);
	}
};
function fo(e) {
	return e === void 0 || !!e;
}
function po(e) {
	let t = {}, n = e.currentTarget;
	if (!(!n?._ripple || n._ripple.touched || e[io])) {
		if (e[io] = !0, so(e)) n._ripple.touched = !0, n._ripple.isTouch = !0;
		else if (n._ripple.isTouch) return;
		if (t.center = n._ripple.centered || co(e), n._ripple.class && (t.class = n._ripple.class), so(e)) {
			if (n._ripple.showTimerCommit) return;
			n._ripple.showTimerCommit = () => {
				uo.show(e, n, t);
			}, n._ripple.showTimer = window.setTimeout(() => {
				n?._ripple?.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
			}, ao);
		} else uo.show(e, n, t);
	}
}
function mo(e) {
	e[io] = !0;
}
function $(e) {
	let t = e.currentTarget;
	if (t?._ripple) {
		if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
			t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
				$(e);
			});
			return;
		}
		window.setTimeout(() => {
			t._ripple && (t._ripple.touched = !1);
		}), uo.hide(t);
	}
}
function ho(e) {
	let t = e.currentTarget;
	t?._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
var go = !1;
function _o(e, t) {
	!go && t.includes(e.key) && (go = !0, po(e));
}
function vo(e) {
	go = !1, $(e);
}
function yo(e) {
	go && (go = !1, $(e));
}
function bo(e, t, n) {
	let { value: r, modifiers: i } = t, a = fo(r);
	a || uo.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = i.center, e._ripple.circle = i.circle;
	let o = Dr(r) ? r : {};
	o.class && (e._ripple.class = o.class);
	let s = o.keys ?? ["Enter", "Space"];
	if (e._ripple.keyDownHandler = (e) => _o(e, s), a && !n) {
		if (i.stop) {
			e.addEventListener("touchstart", mo, { passive: !0 }), e.addEventListener("mousedown", mo);
			return;
		}
		e.addEventListener("touchstart", po, { passive: !0 }), e.addEventListener("touchend", $, { passive: !0 }), e.addEventListener("touchmove", ho, { passive: !0 }), e.addEventListener("touchcancel", $), e.addEventListener("mousedown", po), e.addEventListener("mouseup", $), e.addEventListener("mouseleave", $), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", vo), e.addEventListener("blur", yo), e.addEventListener("dragstart", $, { passive: !0 });
	} else !a && n && xo(e);
}
function xo(e) {
	e.removeEventListener("touchstart", mo), e.removeEventListener("mousedown", mo), e.removeEventListener("touchstart", po), e.removeEventListener("touchend", $), e.removeEventListener("touchmove", ho), e.removeEventListener("touchcancel", $), e.removeEventListener("mousedown", po), e.removeEventListener("mouseup", $), e.removeEventListener("mouseleave", $), e._ripple?.keyDownHandler && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", vo), e.removeEventListener("blur", yo), e.removeEventListener("dragstart", $);
}
function So(e, t) {
	bo(e, t, !1);
}
function Co(e) {
	xo(e), delete e._ripple;
}
function wo(e, t) {
	t.value !== t.oldValue && bo(e, t, fo(t.oldValue));
}
var To = {
	mounted: So,
	unmounted: Co,
	updated: wo
}, Eo = X({
	active: {
		type: Boolean,
		default: void 0
	},
	activeColor: String,
	baseColor: String,
	symbol: {
		type: null,
		default: ja
	},
	flat: Boolean,
	icon: [
		Boolean,
		String,
		Function,
		Object
	],
	prependIcon: Na,
	appendIcon: Na,
	block: Boolean,
	readonly: Boolean,
	slim: Boolean,
	stacked: Boolean,
	spaced: String,
	ripple: {
		type: [Boolean, Object],
		default: !0
	},
	text: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	...ca(),
	...xr(),
	...ga(),
	...ea(),
	...ua(),
	...Ta(),
	...Ya(),
	...pa(),
	...Qa(),
	...oa(),
	...no(),
	...Ba(),
	...qi({ tag: "button" }),
	...Wi(),
	...ba({ variant: "elevated" })
}, "VBtn"), Do = Ni()({
	name: "VBtn",
	props: Eo(),
	emits: { "group:selected": (e) => !0 },
	setup(e, t) {
		let { attrs: n, slots: r } = t, { themeClasses: i } = Gi(e), { borderClasses: o } = la(e), { densityClasses: s } = _a(e), { dimensionStyles: c } = ta(e), { elevationClasses: u } = da(e), { loaderClasses: d } = Xa(e), { locationStyles: p } = ma(e), { positionClasses: m } = $a(e), { roundedClasses: h } = sa(e), { sizeClasses: g, sizeStyles: _ } = Va(e), v = Ea(e, e.symbol, !1), y = to(e, n), x = a(() => e.active === void 0 ? y.isRouterLink.value ? y.isActive?.value : v?.isSelected.value : e.active), S = A(() => x.value ? e.activeColor ?? e.color : e.color), { colorClasses: C, colorStyles: w, variantClasses: T } = xa(a(() => ({
			color: v?.isSelected.value && (!y.isLink.value || y.isActive?.value) || !v || y.isActive?.value ? S.value ?? e.baseColor : e.baseColor,
			variant: e.variant
		}))), E = a(() => v?.disabled.value || e.disabled), D = A(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), ee = a(() => {
			if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
		});
		function O(e) {
			E.value || y.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || n.target === "_blank") || (y.isRouterLink.value ? y.navigate.value?.(e) : v?.toggle());
		}
		return ro(y, v?.select), Li(() => {
			let t = y.isLink.value ? "a" : e.tag, n = !!(e.prependIcon || r.prepend), a = !!(e.appendIcon || r.append), S = !!(e.icon && e.icon !== !0);
			return ye(f(t, b(y.linkProps, {
				type: t === "a" ? void 0 : "button",
				class: [
					"v-btn",
					v?.selectedClass.value,
					{
						"v-btn--active": x.value,
						"v-btn--block": e.block,
						"v-btn--disabled": E.value,
						"v-btn--elevated": D.value,
						"v-btn--flat": e.flat,
						"v-btn--icon": !!e.icon,
						"v-btn--loading": e.loading,
						"v-btn--readonly": e.readonly,
						"v-btn--slim": e.slim,
						"v-btn--stacked": e.stacked
					},
					e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [],
					i.value,
					o.value,
					C.value,
					s.value,
					u.value,
					d.value,
					m.value,
					h.value,
					g.value,
					T.value,
					e.class
				],
				style: [
					w.value,
					c.value,
					p.value,
					_.value,
					e.style
				],
				"aria-busy": e.loading ? !0 : void 0,
				disabled: E.value && t !== "a" || void 0,
				tabindex: e.loading || e.readonly ? -1 : void 0,
				onClick: O,
				value: ee.value
			}), { default: () => [
				ya(!0, "v-btn"),
				!e.icon && n && l("span", {
					key: "prepend",
					class: "v-btn__prepend"
				}, [r.prepend ? f($i, {
					key: "prepend-defaults",
					disabled: !e.prependIcon,
					defaults: { VIcon: { icon: e.prependIcon } }
				}, r.prepend) : f(Ua, {
					key: "prepend-icon",
					icon: e.prependIcon
				}, null)]),
				l("span", {
					class: "v-btn__content",
					"data-no-activator": ""
				}, [!r.default && S ? f(Ua, {
					key: "content-icon",
					icon: e.icon
				}, null) : f($i, {
					key: "content-defaults",
					disabled: !S,
					defaults: { VIcon: { icon: e.icon } }
				}, { default: () => [r.default?.() ?? ce(e.text)] })]),
				!e.icon && a && l("span", {
					key: "append",
					class: "v-btn__append"
				}, [r.append ? f($i, {
					key: "append-defaults",
					disabled: !e.appendIcon,
					defaults: { VIcon: { icon: e.appendIcon } }
				}, r.append) : f(Ua, {
					key: "append-icon",
					icon: e.appendIcon
				}, null)]),
				!!e.loading && l("span", {
					key: "loader",
					class: "v-btn__loader"
				}, [r.loader?.() ?? f(Ja, {
					color: typeof e.loading == "boolean" ? void 0 : e.loading,
					indeterminate: !0,
					width: "2"
				}, null)])
			] }), [[
				To,
				!E.value && e.ripple,
				"",
				{ center: !!e.icon }
			]]);
		}), { group: v };
	}
}), Oo = { transform: "rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))" }, ko = {
	mdi: {
		size: 24,
		viewbox: "0 0 24 24"
	},
	"simple-icons": {
		size: 24,
		viewbox: "0 0 24 24"
	},
	default: {
		size: 0,
		viewbox: "0 0 0 0"
	}
}, Ao = {
	props: {
		type: {
			type: String,
			required: !0
		},
		path: {
			type: [
				String,
				Object,
				Array
			],
			required: !1
		},
		pathString: {
			type: [
				Array,
				String,
				Object
			],
			required: !1
		}
	},
	setup(e) {
		return () => e.type === "fad" ? (console.warn("vue3-icon does not currently support Duotone FontAwesome icons"), g("path")) : Array.isArray(e.path) ? g("g", { style: { fill: "currentcolor" } }, e.path.map((e) => typeof e == "string" ? g("path", { d: e }) : g("path", { ...e }))) : g("path", {
			d: e.pathString,
			style: { fill: "currentcolor" }
		});
	}
}, jo = {
	name: "icon",
	props: {
		type: {
			type: String,
			default: "mdi"
		},
		faIcon: {
			type: Object,
			default: null
		},
		path: { type: [
			String,
			Object,
			Array
		] },
		size: {
			type: [Number, String],
			default: 24
		},
		viewbox: {
			type: String,
			required: !1
		},
		flip: {
			type: String,
			default: "",
			validator: (e) => [
				"",
				"horizontal",
				"vertical",
				"both"
			].includes(e)
		},
		rotate: {
			type: [Number, String],
			default: 0
		},
		noNamespace: {
			type: Boolean,
			default: !1
		},
		noStyles: {
			type: Boolean,
			default: !1
		},
		noDimensions: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		if (!e.path && !e.faIcon) return console.warn("vue3-icon requires either a 'path' or an 'fa-icon' property"), () => g("div");
		let t = a(() => e.faIcon?.prefix || e.type), n = a(() => parseInt(e.rotate, 10)), r = a(() => ko[t.value] || ko.default), i = a(() => parseInt(e.size, 10) || r.value.size), o = a(() => e.faIcon ? `0 0 ${e.faIcon.icon[0]} ${e.faIcon.icon[1]}` : !1), s = a(() => o.value || e.viewbox || r.value.viewbox), c = a(() => {
			if (e.noStyles !== !0) return {
				...Oo,
				"--sx": ["both", "horizontal"].includes(e.flip) ? "-1" : "1",
				"--sy": ["both", "vertical"].includes(e.flip) ? "-1" : "1",
				"--r": isNaN(n.value) ? n.value : n.value + "deg"
			};
		}), l = a(() => e.faIcon ? e.faIcon?.icon[4] : e.type === "simple-icons" && typeof e.path == "object" ? e.path.path : e.path);
		return () => g("svg", {
			xmlns: e.noNamespace === !0 ? void 0 : "http://www.w3.org/2000/svg",
			style: c.value,
			class: ["vue3-icon"],
			width: e.noDimensions === !0 ? void 0 : i.value,
			height: e.noDimensions === !0 ? void 0 : i.value,
			viewBox: s.value
		}, [g(Ao, {
			path: e.path,
			type: t.value,
			pathString: l.value
		})]);
	}
};
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isLength.mjs
function Mo(e) {
	return Number.isSafeInteger(e) && e >= 0;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
function No(e) {
	return e != null && typeof e != "function" && Mo(e.length);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/function/identity.mjs
function Po(e) {
	return e;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/math/range.mjs
function Fo(e, t, n = 1) {
	if (t ?? (t = e, e = 0), !Number.isInteger(n) || n === 0) throw Error("The step value must be a non-zero integer.");
	let r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r);
	for (let t = 0; t < r; t++) i[t] = e + t * n;
	return i;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/array/reduce.mjs
function Io(e, t = Po, n) {
	if (!e) return n;
	let r, i = 0;
	No(e) ? (r = Fo(0, e.length), n == null && e.length > 0 && (n = e[0], i += 1)) : (r = Object.keys(e), n ?? (n = e[r[0]], i += 1));
	for (let a = i; a < r.length; a++) {
		let i = r[a], o = e[i];
		n = t(n, o, i, e);
	}
	return n;
}
//#endregion
//#region resources/composables/useApiSync.js
var Lo = (e, t) => Io(e, (e, n, r) => (De(n, t[r]) || (e[r] = n), e), {}), Ro = (e, t = {}) => {
	let n = t.disableUpdate === !0, r = t.useInertia ?? !1, i = t.router, o = t.reload ?? void 0, s = t.debounce ?? 300, c = t.updateItemRoute, l = t.updateItemMethod, u = t.itemValue, d = a(() => Te(e())), f = k(), p = a(() => Te(f.value)), m = be(null, 4e3), h = (e) => n ? Promise.resolve() : r ? new Promise((n, r) => {
		i.visit(c, {
			method: l,
			preserveScroll: !0,
			preserveState: !0,
			async: !0,
			showProgress: !1,
			only: o,
			data: e,
			onSuccess() {
				t.onSuccess && typeof t.onSuccess == "function" && t.onSuccess(), n();
			},
			onError(e) {
				m.value = e?.[0], t.onError && typeof t.onError == "function" && t.onError(e), r(e);
			}
		});
	}) : we({
		url: c,
		method: l,
		data: e
	}).then((e) => {
		t.onSuccess && typeof t.onSuccess == "function" && t.onSuccess(e.data);
	}).catch((e) => {
		throw m.value = e.response.data.message, t.onError && typeof t.onError == "function" && t.onError(e.response), Error(e);
	});
	ge(d, (e, t) => {
		if (t !== void 0) {
			let n = Lo(e, t);
			Object.keys(n).length > 0 && (n[u] = e[u], h(n));
		}
		f.value = e;
	}, {
		immediate: !0,
		deep: !0
	});
	let g = {}, _ = null, v = Ee(async () => {
		let e = { ...g };
		g = {};
		try {
			await h(e);
		} catch {
			y(), await x(), f.value = _, await x(), b();
		}
	}, s), { pause: y, resume: b } = Ce(p, (e, t) => {
		if (t !== void 0) {
			let n = Lo(e, t);
			if (Object.keys(n).length === 0) return;
			_ = t, g = Oe(g, n), g[u] = e[u], v();
		}
	}, { deep: !0 });
	return {
		data: f,
		error: m,
		update: h
	};
}, zo = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Bo = "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z", Vo = { class: "evo-sortable-treeview__item" }, Ho = { class: "evo-sortable-treeview__item-content" }, Uo = {
	ref: "item",
	class: "evo-sortable-treeview__actions"
}, Wo = { class: "evo-sortable-treeview__action-drag" }, Go = { class: "evo-sortable-treeview__action-title" }, Ko = {
	class: "d-flex align-center flex items-center",
	ref: "columns"
}, qo = /* @__PURE__ */ Object.assign({ name: "EvoSortableTreeviewItem" }, {
	__name: "_SortableTreeviewItem",
	props: {
		item: {
			type: Object,
			required: !0
		},
		depth: {
			type: Number,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = fe(), r = me("columns"), i = _(Ne), u = a(() => i.config.value.itemTitle), p = a(() => i.config.value.itemValue), m = a(() => i.config.value.itemChildren), h = a(() => i.config.value.itemChildrenCount), { data: g, error: v } = Ro(() => t.item, {
			...i.config.value,
			onSuccess: (e) => {
				i.emit("updated", e);
			},
			onError: (e) => {
				i.emit("error", e);
			},
			useInertia: i.treeProps.value.useInertia,
			router: i.treeProps.value.router ?? je,
			reload: i.treeProps.value.reload ? i.treeProps.value.reload : typeof i.treeProps.value.model == "string" ? [i.treeProps.value.model] : void 0
		}), y = k([]), { width: b } = Se(r);
		ge(b, (e) => {
			if (!r.value) return [];
			y.value = Array.from(r.value?.children).map((e) => {
				let { width: t } = e.getBoundingClientRect();
				return t;
			});
		}, { immediate: !0 });
		let { registerItem: x } = _(Ne);
		x(n, y);
		let C = k([]), w = a(() => t.item[h.value] > 0 || C.value?.length ? !0 : !!(Array.isArray(t.item[m.value]) && t.item[m.value]?.length > 0)), T = k(!1);
		xe(() => t.item[m.value], C, {
			direction: "ltr",
			transform: { ltr: (e) => e },
			immediate: !0
		});
		let E = a(() => w.value && C.value?.length > 0), D = k(!1), ee = () => {
			if (D.value || E.value) return D.value = !D.value;
			T.value = !0, i.onLoadChildren(t.item).then((e) => {
				C.value = e.data.children ?? [], D.value = !D.value;
			}).finally(() => {
				T.value = !1;
			});
		};
		return (e, n) => (O(), c("li", Vo, [l("div", Ho, [l("div", Uo, [
			l("div", { class: S(["evo-sortable-treeview__action-expand", { "is-expanded": D.value }]) }, [w.value ? (O(), o(j(Do), {
				key: 0,
				icon: "",
				variant: "flat",
				size: "small",
				loading: T.value,
				onClick: ee
			}, {
				default: ve(() => [f(j(jo), {
					class: "evo-sortable-treeview__expand-icon",
					size: "24",
					path: j(zo),
					rotate: D.value ? 90 : 0
				}, null, 8, ["path", "rotate"])]),
				_: 1
			}, 8, ["loading"])) : s("", !0)], 2),
			l("div", Wo, [f(j(Do), {
				variant: "plain",
				size: "small",
				class: "drag-handle cursor-move"
			}, {
				default: ve(() => [f(j(jo), { path: j(Bo) }, null, 8, ["path"])]),
				_: 1
			})]),
			l("div", Go, [
				ae(e.$slots, "item.prepend-title", { item: t.item }),
				ae(e.$slots, "item.title", {
					item: t.item,
					title: t.item[u.value]
				}, () => [d(ce(t.item[u.value]), 1)]),
				ae(e.$slots, "item.append-title", { item: t.item })
			])
		], 512), l("div", Ko, [ae(e.$slots, "item.columns", { item: j(g) })], 512)]), f(j(Ae), { slots: e.$slots }, {
			default: ve(() => [f(Jo, {
				modelValue: C.value,
				"onUpdate:modelValue": n[0] ||= (e) => C.value = e,
				"is-expanded": D.value,
				"is-empty": !w.value,
				depth: t.depth + 1,
				"parent-id": t.item[p.value]
			}, null, 8, [
				"modelValue",
				"is-expanded",
				"is-empty",
				"depth",
				"parent-id"
			])]),
			_: 1
		}, 8, ["slots"])]));
	}
}), Jo = /* @__PURE__ */ Object.assign({ name: "EvoSortableTreeviewChildren" }, {
	__name: "_SortableTreeviewChildren",
	props: /* @__PURE__ */ y({
		depth: {
			type: Number,
			required: !0
		},
		parentId: {
			type: [String, Number],
			default: null
		},
		isEmpty: {
			type: Boolean,
			default: !1
		},
		isExpanded: {
			type: Boolean,
			default: !1
		}
	}, {
		modelValue: {
			type: Array,
			required: !0
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(t) {
		let n = pe(t, "modelValue"), r = t, i = _(Ne), l = a(() => i.config.value.itemValue), d = a(() => ({
			class: "evo-sortable-treeview__drag-area",
			style: {
				minHeight: r.isEmpty ? "1px" : "",
				paddingLeft: r.parentId ? "1rem" : "0px"
			},
			tag: "ul",
			group: i.group,
			draggable: "li",
			handle: ".drag-handle",
			"onUpdate:modelValue": (e) => i.onSorted(e, r.parentId)
		}));
		return (t, i) => (O(), o(j(Zi), null, {
			default: ve(() => [r.isExpanded || r.isEmpty ? (O(), o(j(yr), b({
				key: 0,
				modelValue: n.value,
				"onUpdate:modelValue": i[0] ||= (e) => n.value = e
			}, d.value), {
				default: ve(() => [(O(!0), c(e, null, ie(n.value, (e) => (O(), o(qo, {
					key: `${e[l.value]}_item`,
					item: e,
					depth: r.depth
				}, u({ _: 2 }, [ie(t.$slots, (e, n) => ({
					name: n,
					fn: ve((e) => [ae(t.$slots, n, b({ ref_for: !0 }, e))])
				}))]), 1032, ["item", "depth"]))), 128))]),
				_: 3
			}, 16, ["modelValue"])) : s("", !0)]),
			_: 3
		}));
	}
}), Yo = {
	ref: "treeview",
	class: "evo-sortable-treeview"
}, Xo = { class: "evo-sortable-treeview__header" }, Zo = /* @__PURE__ */ Object.assign({ name: "EvoSortableTreeview" }, {
	__name: "SortableTreeview",
	props: {
		model: {
			type: [String, Object],
			required: !0
		},
		router: {
			type: Object,
			default: () => ({})
		},
		useInertia: {
			type: Boolean,
			default: !1
		},
		reload: {
			type: Array,
			default: null
		}
	},
	emits: [
		"sorted",
		"updated",
		"error"
	],
	setup(t, { emit: n }) {
		let r = fe(), i = n, o = t, s = a(() => typeof o.model == "string" ? Me().props[o.model] : o.model), u = a(() => s.value?.config ?? {}), d = a(() => s.value?.headers ?? []), p = a(() => s.value?.data ?? s.value), m = k(p.value);
		ge(p, (e) => {
			m.value = e;
		});
		let h = k(/* @__PURE__ */ new Map()), g = a(() => Array.from(h.value.values()).reduce((e, t) => {
			for (let n in t.value) {
				let r = t.value[n] ?? 0;
				(!e[n] || r > e[n]) && (e[n] = r);
			}
			return e;
		}, []));
		return te(Ne, {
			group: r,
			config: u,
			treeProps: a(() => ke(o, [
				"itemChildren",
				"itemChildrenCount",
				"itemTitle",
				"itemValue",
				"useInertia",
				"router",
				"reload",
				"model"
			])),
			registerItem: (e, t) => {
				h.value.set(e, t);
			},
			emit(e, t) {
				i(e, t);
			},
			onSorted: (e, t) => {
				let n = e.map((e) => e[u.value.itemValue]) ?? [];
				return i("sorted", {
					parentId: t,
					ids: n,
					$event: e
				}), we({
					url: u.value.updateSortOrderRoute,
					method: u.value.updateSortOrderMethod,
					data: {
						model: s.value.modelClass,
						parent_id: t,
						ids: n
					},
					withCredentials: !0,
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					},
					responseType: "json"
				});
			},
			onLoadChildren: (e) => we({
				url: u.value.loadChildrenRoute,
				method: u.value.loadChildrenMethod,
				params: {
					model: s.value.modelClass,
					model_id: e[u.value.itemValue]
				},
				withCredentials: !0
			})
		}), (t, n) => (O(), c("div", Yo, [l("header", Xo, [ae(t.$slots, "header", {}, () => [(O(!0), c(e, null, ie(d.value, (e, t) => (O(), c("div", {
			key: e.value,
			class: "evo-sortable-treeview__header--text",
			style: C({
				width: `${g.value[t]}px`,
				textAlign: e.align ?? "left"
			})
		}, ce(e.title), 5))), 128))])]), f(j(Ae), { slots: t.$slots }, {
			default: ve(() => [f(Jo, {
				modelValue: m.value,
				"onUpdate:modelValue": n[0] ||= (e) => m.value = e,
				depth: 0,
				"is-expanded": ""
			}, null, 8, ["modelValue"])]),
			_: 1
		}, 8, ["slots"])], 512));
	}
});
//#endregion
export { Zo as EvoSortableTreeview };
