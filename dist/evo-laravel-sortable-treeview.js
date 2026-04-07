import { Fragment as e, Text as t, Transition as n, TransitionGroup as r, capitalize as i, computed as a, createBlock as o, createCommentVNode as s, createElementBlock as c, createElementVNode as l, createSlots as u, createTextVNode as d, createVNode as f, defineComponent as p, effectScope as m, getCurrentInstance as h, h as g, inject as _, isRef as v, mergeModels as y, mergeProps as b, nextTick as x, normalizeClass as S, normalizeStyle as C, onBeforeUnmount as w, onMounted as T, onScopeDispose as E, onUnmounted as D, onUpdated as ee, openBlock as O, provide as te, reactive as ne, readonly as re, ref as k, renderList as ie, renderSlot as ae, resolveDynamicComponent as oe, shallowRef as se, toDisplayString as ce, toRaw as le, toRef as A, toRefs as ue, toValue as de, unref as j, useId as fe, useModel as pe, useTemplateRef as me, warn as he, watch as ge, watchEffect as _e, withCtx as ve, withDirectives as ye } from "vue";
import { refAutoReset as be, syncRef as xe, useElementSize as Se, watchPausable as Ce } from "@vueuse/core";
import we from "axios";
import { ForwardSlots as Te } from "@evomark/vue-forward-slots";
import { usePage as Ee } from "@inertiajs/vue3";
//#region resources/components/keys.js
var De = Symbol.for("sortable-treeview"), Oe = Object.defineProperty, ke = Object.getOwnPropertySymbols, Ae = Object.prototype.hasOwnProperty, je = Object.prototype.propertyIsEnumerable, Me = (e, t, n) => t in e ? Oe(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Ne = (e, t) => {
	for (var n in t ||= {}) Ae.call(t, n) && Me(e, n, t[n]);
	if (ke) for (var n of ke(t)) je.call(t, n) && Me(e, n, t[n]);
	return e;
}, Pe = (e, t) => {
	var n = {};
	for (var r in e) Ae.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && ke) for (var r of ke(e)) t.indexOf(r) < 0 && je.call(e, r) && (n[r] = e[r]);
	return n;
}, Fe = "[vue-draggable-plus]: ";
function Ie(e) {
	console.warn(Fe + e);
}
function Le(e) {
	console.error(Fe + e);
}
function Re(e, t, n) {
	return n >= 0 && n < e.length && e.splice(n, 0, e.splice(t, 1)[0]), e;
}
function ze(e) {
	return e.replace(/-(\w)/g, (e, t) => t ? t.toUpperCase() : "");
}
function Be(e) {
	return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[ze(n)] = e[n]), t), {});
}
function Ve(e, t) {
	return Array.isArray(e) && e.splice(t, 1), e;
}
function He(e, t, n) {
	return Array.isArray(e) && e.splice(t, 0, n), e;
}
function Ue(e) {
	return e === void 0;
}
function We(e) {
	return typeof e == "string";
}
function Ge(e, t, n) {
	let r = e.children[n];
	e.insertBefore(t, r);
}
function Ke(e) {
	e.parentNode && e.parentNode.removeChild(e);
}
function qe(e, t = document) {
	let n = null;
	return n = typeof t?.querySelector == "function" ? (t?.querySelector)?.call(t, e) : document.querySelector(e), n || Ie(`Element not found: ${e}`), n;
}
function Je(e, t, n = null) {
	return function(...r) {
		return e.apply(n, r), t.apply(n, r);
	};
}
function Ye(e, t) {
	let n = Ne({}, e);
	return Object.keys(t).forEach((r) => {
		n[r] ? n[r] = Je(e[r], t[r]) : n[r] = t[r];
	}), n;
}
function Xe(e) {
	return e instanceof HTMLElement;
}
function Ze(e, t) {
	Object.keys(e).forEach((n) => {
		t(n, e[n]);
	});
}
function Qe(e) {
	return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
var $e = Object.assign;
function et(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function tt(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? et(Object(n), !0).forEach(function(t) {
			rt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : et(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function nt(e) {
	"@babel/helpers - typeof";
	return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, nt(e);
}
function rt(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function it() {
	return it = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, it.apply(this, arguments);
}
function at(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function ot(e, t) {
	if (e == null) return {};
	var n = at(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
var st = "1.15.2";
function ct(e) {
	if (typeof window < "u" && window.navigator) return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var lt = ct(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ut = ct(/Edge/i), dt = ct(/firefox/i), ft = ct(/safari/i) && !ct(/chrome/i) && !ct(/android/i), pt = ct(/iP(ad|od|hone)/i), mt = ct(/chrome/i) && ct(/android/i), ht = {
	capture: !1,
	passive: !1
};
function M(e, t, n) {
	e.addEventListener(t, n, !lt && ht);
}
function N(e, t, n) {
	e.removeEventListener(t, n, !lt && ht);
}
function gt(e, t) {
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
function _t(e) {
	return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function vt(e, t, n, r) {
	if (e) {
		n ||= document;
		do {
			if (t != null && (t[0] === ">" ? e.parentNode === n && gt(e, t) : gt(e, t)) || r && e === n) return e;
			if (e === n) break;
		} while (e = _t(e));
	}
	return null;
}
var yt = /\s+/g;
function P(e, t, n) {
	e && t && (e.classList ? e.classList[n ? "add" : "remove"](t) : e.className = ((" " + e.className + " ").replace(yt, " ").replace(" " + t + " ", " ") + (n ? " " + t : "")).replace(yt, " "));
}
function F(e, t, n) {
	var r = e && e.style;
	if (r) {
		if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
		!(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), r[t] = n + (typeof n == "string" ? "" : "px");
	}
}
function bt(e, t) {
	var n = "";
	if (typeof e == "string") n = e;
	else do {
		var r = F(e, "transform");
		r && r !== "none" && (n = r + " " + n);
	} while (!t && (e = e.parentNode));
	var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
	return i && new i(n);
}
function xt(e, t, n) {
	if (e) {
		var r = e.getElementsByTagName(t), i = 0, a = r.length;
		if (n) for (; i < a; i++) n(r[i], i);
		return r;
	}
	return [];
}
function St() {
	return document.scrollingElement || document.documentElement;
}
function I(e, t, n, r, i) {
	if (!(!e.getBoundingClientRect && e !== window)) {
		var a, o, s, c, l, u, d;
		if (e !== window && e.parentNode && e !== St() ? (a = e.getBoundingClientRect(), o = a.top, s = a.left, c = a.bottom, l = a.right, u = a.height, d = a.width) : (o = 0, s = 0, c = window.innerHeight, l = window.innerWidth, u = window.innerHeight, d = window.innerWidth), (t || n) && e !== window && (i ||= e.parentNode, !lt)) do
			if (i && i.getBoundingClientRect && (F(i, "transform") !== "none" || n && F(i, "position") !== "static")) {
				var f = i.getBoundingClientRect();
				o -= f.top + parseInt(F(i, "border-top-width")), s -= f.left + parseInt(F(i, "border-left-width")), c = o + a.height, l = s + a.width;
				break;
			}
		while (i = i.parentNode);
		if (r && e !== window) {
			var p = bt(i || e), m = p && p.a, h = p && p.d;
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
function Ct(e, t, n) {
	for (var r = kt(e, !0), i = I(e)[t]; r;) {
		var a = I(r)[n], o = void 0;
		if (o = i >= a, !o) return r;
		if (r === St()) break;
		r = kt(r, !1);
	}
	return !1;
}
function wt(e, t, n, r) {
	for (var i = 0, a = 0, o = e.children; a < o.length;) {
		if (o[a].style.display !== "none" && o[a] !== J.ghost && (r || o[a] !== J.dragged) && vt(o[a], n.draggable, e, !1)) {
			if (i === t) return o[a];
			i++;
		}
		a++;
	}
	return null;
}
function Tt(e, t) {
	for (var n = e.lastElementChild; n && (n === J.ghost || F(n, "display") === "none" || t && !gt(n, t));) n = n.previousElementSibling;
	return n || null;
}
function Et(e, t) {
	var n = 0;
	if (!e || !e.parentNode) return -1;
	for (; e = e.previousElementSibling;) e.nodeName.toUpperCase() !== "TEMPLATE" && e !== J.clone && (!t || gt(e, t)) && n++;
	return n;
}
function Dt(e) {
	var t = 0, n = 0, r = St();
	if (e) do {
		var i = bt(e), a = i.a, o = i.d;
		t += e.scrollLeft * a, n += e.scrollTop * o;
	} while (e !== r && (e = e.parentNode));
	return [t, n];
}
function Ot(e, t) {
	for (var n in e) if (e.hasOwnProperty(n)) {
		for (var r in t) if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
	}
	return -1;
}
function kt(e, t) {
	if (!e || !e.getBoundingClientRect) return St();
	var n = e, r = !1;
	do
		if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
			var i = F(n);
			if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
				if (!n.getBoundingClientRect || n === document.body) return St();
				if (r || t) return n;
				r = !0;
			}
		}
	while (n = n.parentNode);
	return St();
}
function At(e, t) {
	if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	return e;
}
function jt(e, t) {
	return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Mt;
function Nt(e, t) {
	return function() {
		if (!Mt) {
			var n = arguments, r = this;
			n.length === 1 ? e.call(r, n[0]) : e.apply(r, n), Mt = setTimeout(function() {
				Mt = void 0;
			}, t);
		}
	};
}
function Pt() {
	clearTimeout(Mt), Mt = void 0;
}
function Ft(e, t, n) {
	e.scrollLeft += t, e.scrollTop += n;
}
function It(e) {
	var t = window.Polymer, n = window.jQuery || window.Zepto;
	return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Lt(e, t, n) {
	var r = {};
	return Array.from(e.children).forEach(function(i) {
		if (!(!vt(i, t.draggable, e, !1) || i.animated || i === n)) {
			var a = I(i);
			r.left = Math.min(r.left ?? Infinity, a.left), r.top = Math.min(r.top ?? Infinity, a.top), r.right = Math.max(r.right ?? -Infinity, a.right), r.bottom = Math.max(r.bottom ?? -Infinity, a.bottom);
		}
	}), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var L = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Rt() {
	var e = [], t;
	return {
		captureAnimationState: function() {
			e = [], this.options.animation && [].slice.call(this.el.children).forEach(function(t) {
				if (!(F(t, "display") === "none" || t === J.ghost)) {
					e.push({
						target: t,
						rect: I(t)
					});
					var n = tt({}, e[e.length - 1].rect);
					if (t.thisAnimationDuration) {
						var r = bt(t, !0);
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
			e.splice(Ot(e, { target: t }), 1);
		},
		animateAll: function(n) {
			var r = this;
			if (!this.options.animation) {
				clearTimeout(t), typeof n == "function" && n();
				return;
			}
			var i = !1, a = 0;
			e.forEach(function(e) {
				var t = 0, n = e.target, o = n.fromRect, s = I(n), c = n.prevFromRect, l = n.prevToRect, u = e.rect, d = bt(n, !0);
				d && (s.top -= d.f, s.left -= d.e), n.toRect = s, n.thisAnimationDuration && jt(c, s) && !jt(o, s) && (u.top - s.top) / (u.left - s.left) === (o.top - s.top) / (o.left - s.left) && (t = Bt(u, c, l, r.options)), jt(s, o) || (n.prevFromRect = o, n.prevToRect = s, t ||= r.options.animation, r.animate(n, u, s, t)), t && (i = !0, a = Math.max(a, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout(function() {
					n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null;
				}, t), n.thisAnimationDuration = t);
			}), clearTimeout(t), i ? t = setTimeout(function() {
				typeof n == "function" && n();
			}, a) : typeof n == "function" && n(), e = [];
		},
		animate: function(e, t, n, r) {
			if (r) {
				F(e, "transition", ""), F(e, "transform", "");
				var i = bt(this.el), a = i && i.a, o = i && i.d, s = (t.left - n.left) / (a || 1), c = (t.top - n.top) / (o || 1);
				e.animatingX = !!s, e.animatingY = !!c, F(e, "transform", "translate3d(" + s + "px," + c + "px,0)"), this.forRepaintDummy = zt(e), F(e, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), F(e, "transform", "translate3d(0,0,0)"), typeof e.animated == "number" && clearTimeout(e.animated), e.animated = setTimeout(function() {
					F(e, "transition", ""), F(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1;
				}, r);
			}
		}
	};
}
function zt(e) {
	return e.offsetWidth;
}
function Bt(e, t, n, r) {
	return Math.sqrt((t.top - e.top) ** 2 + (t.left - e.left) ** 2) / Math.sqrt((t.top - n.top) ** 2 + (t.left - n.left) ** 2) * r.animation;
}
var Vt = [], Ht = { initializeByDefault: !0 }, Ut = {
	mount: function(e) {
		for (var t in Ht) Ht.hasOwnProperty(t) && !(t in e) && (e[t] = Ht[t]);
		Vt.forEach(function(t) {
			if (t.pluginName === e.pluginName) throw `Sortable: Cannot mount plugin ${e.pluginName} more than once`;
		}), Vt.push(e);
	},
	pluginEvent: function(e, t, n) {
		var r = this;
		this.eventCanceled = !1, n.cancel = function() {
			r.eventCanceled = !0;
		};
		var i = e + "Global";
		Vt.forEach(function(r) {
			t[r.pluginName] && (t[r.pluginName][i] && t[r.pluginName][i](tt({ sortable: t }, n)), t.options[r.pluginName] && t[r.pluginName][e] && t[r.pluginName][e](tt({ sortable: t }, n)));
		});
	},
	initializePlugins: function(e, t, n, r) {
		for (var i in Vt.forEach(function(r) {
			var i = r.pluginName;
			if (!(!e.options[i] && !r.initializeByDefault)) {
				var a = new r(e, t, e.options);
				a.sortable = e, a.options = e.options, e[i] = a, it(n, a.defaults);
			}
		}), e.options) if (e.options.hasOwnProperty(i)) {
			var a = this.modifyOption(e, i, e.options[i]);
			a !== void 0 && (e.options[i] = a);
		}
	},
	getEventProperties: function(e, t) {
		var n = {};
		return Vt.forEach(function(r) {
			typeof r.eventProperties == "function" && it(n, r.eventProperties.call(t[r.pluginName], e));
		}), n;
	},
	modifyOption: function(e, t, n) {
		var r;
		return Vt.forEach(function(i) {
			e[i.pluginName] && i.optionListeners && typeof i.optionListeners[t] == "function" && (r = i.optionListeners[t].call(e[i.pluginName], n));
		}), r;
	}
};
function Wt(e) {
	var t = e.sortable, n = e.rootEl, r = e.name, i = e.targetEl, a = e.cloneEl, o = e.toEl, s = e.fromEl, c = e.oldIndex, l = e.newIndex, u = e.oldDraggableIndex, d = e.newDraggableIndex, f = e.originalEvent, p = e.putSortable, m = e.extraEventProperties;
	if (t ||= n && n[L], t) {
		var h, g = t.options, _ = "on" + r.charAt(0).toUpperCase() + r.substr(1);
		window.CustomEvent && !lt && !ut ? h = new CustomEvent(r, {
			bubbles: !0,
			cancelable: !0
		}) : (h = document.createEvent("Event"), h.initEvent(r, !0, !0)), h.to = o || n, h.from = s || n, h.item = i || n, h.clone = a, h.oldIndex = c, h.newIndex = l, h.oldDraggableIndex = u, h.newDraggableIndex = d, h.originalEvent = f, h.pullMode = p ? p.lastPutMode : void 0;
		var v = tt(tt({}, m), Ut.getEventProperties(r, t));
		for (var y in v) h[y] = v[y];
		n && n.dispatchEvent(h), g[_] && g[_].call(t, h);
	}
}
var Gt = ["evt"], R = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.evt, i = ot(n, Gt);
	Ut.pluginEvent.bind(J)(e, t, tt({
		dragEl: B,
		parentEl: V,
		ghostEl: H,
		rootEl: U,
		nextEl: Kt,
		lastDownEl: qt,
		cloneEl: W,
		cloneHidden: Jt,
		dragStarted: ln,
		putSortable: K,
		activeSortable: J.active,
		originalEvent: r,
		oldIndex: Yt,
		oldDraggableIndex: Xt,
		newIndex: G,
		newDraggableIndex: Zt,
		hideGhostForTarget: Dn,
		unhideGhostForTarget: On,
		cloneNowHidden: function() {
			Jt = !0;
		},
		cloneNowShown: function() {
			Jt = !1;
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
	Wt(tt({
		putSortable: K,
		cloneEl: W,
		targetEl: B,
		rootEl: U,
		oldIndex: Yt,
		oldDraggableIndex: Xt,
		newIndex: G,
		newDraggableIndex: Zt
	}, e));
}
var B, V, H, U, Kt, qt, W, Jt, Yt, G, Xt, Zt, Qt, K, $t = !1, en = !1, tn = [], nn, rn, an, on, sn, cn, ln, un, dn, fn = !1, pn = !1, mn, q, hn = [], gn = !1, _n = [], vn = typeof document < "u", yn = pt, bn = ut || lt ? "cssFloat" : "float", xn = vn && !mt && !pt && "draggable" in document.createElement("div"), Sn = function() {
	if (vn) {
		if (lt) return !1;
		var e = document.createElement("x");
		return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
	}
}(), Cn = function(e, t) {
	var n = F(e), r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), i = wt(e, 0, t), a = wt(e, 1, t), o = i && F(i), s = a && F(a), c = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + I(i).width, l = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + I(a).width;
	if (n.display === "flex") return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
	if (n.display === "grid") return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
	if (i && o.float && o.float !== "none") {
		var u = o.float === "left" ? "left" : "right";
		return a && (s.clear === "both" || s.clear === u) ? "vertical" : "horizontal";
	}
	return i && (o.display === "block" || o.display === "flex" || o.display === "table" || o.display === "grid" || c >= r && n[bn] === "none" || a && n[bn] === "none" && c + l > r) ? "vertical" : "horizontal";
}, wn = function(e, t, n) {
	var r = n ? e.left : e.top, i = n ? e.right : e.bottom, a = n ? e.width : e.height, o = n ? t.left : t.top, s = n ? t.right : t.bottom, c = n ? t.width : t.height;
	return r === o || i === s || r + a / 2 === o + c / 2;
}, Tn = function(e, t) {
	var n;
	return tn.some(function(r) {
		var i = r[L].options.emptyInsertThreshold;
		if (!(!i || Tt(r))) {
			var a = I(r), o = e >= a.left - i && e <= a.right + i, s = t >= a.top - i && t <= a.bottom + i;
			if (o && s) return n = r;
		}
	}), n;
}, En = function(e) {
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
	(!r || nt(r) != "object") && (r = { name: r }), n.name = r.name, n.checkPull = t(r.pull, !0), n.checkPut = t(r.put), n.revertClone = r.revertClone, e.group = n;
}, Dn = function() {
	!Sn && H && F(H, "display", "none");
}, On = function() {
	!Sn && H && F(H, "display", "");
};
vn && !mt && document.addEventListener("click", function(e) {
	if (en) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), en = !1, !1;
}, !0);
var kn = function(e) {
	if (B) {
		e = e.touches ? e.touches[0] : e;
		var t = Tn(e.clientX, e.clientY);
		if (t) {
			var n = {};
			for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
			n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[L]._onDragOver(n);
		}
	}
}, An = function(e) {
	B && B.parentNode[L]._isOutsideThisEl(e.target);
};
function J(e, t) {
	if (!(e && e.nodeType && e.nodeType === 1)) throw `Sortable: \`el\` must be an HTMLElement, not ${{}.toString.call(e)}`;
	this.el = e, this.options = t = it({}, t), e[L] = this;
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
			return Cn(e, this.options);
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
		supportPointer: J.supportPointer !== !1 && "PointerEvent" in window && !ft,
		emptyInsertThreshold: 5
	};
	for (var r in Ut.initializePlugins(this, e, n), n) !(r in t) && (t[r] = n[r]);
	for (var i in En(t), this) i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
	this.nativeDraggable = t.forceFallback ? !1 : xn, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? M(e, "pointerdown", this._onTapStart) : (M(e, "mousedown", this._onTapStart), M(e, "touchstart", this._onTapStart)), this.nativeDraggable && (M(e, "dragover", this), M(e, "dragenter", this)), tn.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), it(this, Rt());
}
J.prototype = {
	constructor: J,
	_isOutsideThisEl: function(e) {
		!this.el.contains(e) && e !== this.el && (un = null);
	},
	_getDirection: function(e, t) {
		return typeof this.options.direction == "function" ? this.options.direction.call(this, e, t, B) : this.options.direction;
	},
	_onTapStart: function(e) {
		if (e.cancelable) {
			var t = this, n = this.el, r = this.options, i = r.preventOnFilter, a = e.type, o = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (o || e).target, c = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, l = r.filter;
			if (Bn(n), !B && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || r.disabled) && !c.isContentEditable && !(!this.nativeDraggable && ft && s && s.tagName.toUpperCase() === "SELECT") && (s = vt(s, r.draggable, n, !1), !(s && s.animated) && qt !== s)) {
				if (Yt = Et(s), Xt = Et(s, r.draggable), typeof l == "function") {
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
					if (r = vt(c, r.trim(), n, !1), r) return z({
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
				r.handle && !vt(c, r.handle, n, !1) || this._prepareDragStart(e, o, s);
			}
		}
	},
	_prepareDragStart: function(e, t, n) {
		var r = this, i = r.el, a = r.options, o = i.ownerDocument, s;
		if (n && !B && n.parentNode === i) {
			var c = I(n);
			if (U = i, B = n, V = B.parentNode, Kt = B.nextSibling, qt = n, Qt = a.group, J.dragged = B, nn = {
				target: B,
				clientX: (t || e).clientX,
				clientY: (t || e).clientY
			}, sn = nn.clientX - c.left, cn = nn.clientY - c.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, B.style["will-change"] = "all", s = function() {
				if (R("delayEnded", r, { evt: e }), J.eventCanceled) {
					r._onDrop();
					return;
				}
				r._disableDelayedDragEvents(), !dt && r.nativeDraggable && (B.draggable = !0), r._triggerDragStart(e, t), z({
					sortable: r,
					name: "choose",
					originalEvent: e
				}), P(B, a.chosenClass, !0);
			}, a.ignore.split(",").forEach(function(e) {
				xt(B, e.trim(), Nn);
			}), M(o, "dragover", kn), M(o, "mousemove", kn), M(o, "touchmove", kn), M(o, "mouseup", r._onDrop), M(o, "touchend", r._onDrop), M(o, "touchcancel", r._onDrop), dt && this.nativeDraggable && (this.options.touchStartThreshold = 4, B.draggable = !0), R("delayStart", this, { evt: e }), a.delay && (!a.delayOnTouchOnly || t) && (!this.nativeDraggable || !(ut || lt))) {
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
		B && Nn(B), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
	},
	_disableDelayedDragEvents: function() {
		var e = this.el.ownerDocument;
		N(e, "mouseup", this._disableDelayedDrag), N(e, "touchend", this._disableDelayedDrag), N(e, "touchcancel", this._disableDelayedDrag), N(e, "mousemove", this._delayedDragTouchMoveHandler), N(e, "touchmove", this._delayedDragTouchMoveHandler), N(e, "pointermove", this._delayedDragTouchMoveHandler);
	},
	_triggerDragStart: function(e, t) {
		t ||= e.pointerType == "touch" && e, !this.nativeDraggable || t ? this.options.supportPointer ? M(document, "pointermove", this._onTouchMove) : t ? M(document, "touchmove", this._onTouchMove) : M(document, "mousemove", this._onTouchMove) : (M(B, "dragend", this), M(U, "dragstart", this._onDragStart));
		try {
			document.selection ? Vn(function() {
				document.selection.empty();
			}) : window.getSelection().removeAllRanges();
		} catch {}
	},
	_dragStarted: function(e, t) {
		if ($t = !1, U && B) {
			R("dragStarted", this, { evt: t }), this.nativeDraggable && M(document, "dragover", An);
			var n = this.options;
			!e && P(B, n.dragClass, !1), P(B, n.ghostClass, !0), J.active = this, e && this._appendGhost(), z({
				sortable: this,
				name: "start",
				originalEvent: t
			});
		} else this._nulling();
	},
	_emulateDragOver: function() {
		if (rn) {
			this._lastX = rn.clientX, this._lastY = rn.clientY, Dn();
			for (var e = document.elementFromPoint(rn.clientX, rn.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(rn.clientX, rn.clientY), e !== t);) t = e;
			if (B.parentNode[L]._isOutsideThisEl(e), t) do {
				if (t[L]) {
					var n = void 0;
					if (n = t[L]._onDragOver({
						clientX: rn.clientX,
						clientY: rn.clientY,
						target: e,
						rootEl: t
					}), n && !this.options.dragoverBubble) break;
				}
				e = t;
			} while (t = t.parentNode);
			On();
		}
	},
	_onTouchMove: function(e) {
		if (nn) {
			var t = this.options, n = t.fallbackTolerance, r = t.fallbackOffset, i = e.touches ? e.touches[0] : e, a = H && bt(H, !0), o = H && a && a.a, s = H && a && a.d, c = yn && q && Dt(q), l = (i.clientX - nn.clientX + r.x) / (o || 1) + (c ? c[0] - hn[0] : 0) / (o || 1), u = (i.clientY - nn.clientY + r.y) / (s || 1) + (c ? c[1] - hn[1] : 0) / (s || 1);
			if (!J.active && !$t) {
				if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
				this._onDragStart(e, !0);
			}
			if (H) {
				a ? (a.e += l - (an || 0), a.f += u - (on || 0)) : a = {
					a: 1,
					b: 0,
					c: 0,
					d: 1,
					e: l,
					f: u
				};
				var d = `matrix(${a.a},${a.b},${a.c},${a.d},${a.e},${a.f})`;
				F(H, "webkitTransform", d), F(H, "mozTransform", d), F(H, "msTransform", d), F(H, "transform", d), an = l, on = u, rn = i;
			}
			e.cancelable && e.preventDefault();
		}
	},
	_appendGhost: function() {
		if (!H) {
			var e = this.options.fallbackOnBody ? document.body : U, t = I(B, !0, yn, !0, e), n = this.options;
			if (yn) {
				for (q = e; F(q, "position") === "static" && F(q, "transform") === "none" && q !== document;) q = q.parentNode;
				q !== document.body && q !== document.documentElement ? (q === document && (q = St()), t.top += q.scrollTop, t.left += q.scrollLeft) : q = St(), hn = Dt(q);
			}
			H = B.cloneNode(!0), P(H, n.ghostClass, !1), P(H, n.fallbackClass, !0), P(H, n.dragClass, !0), F(H, "transition", ""), F(H, "transform", ""), F(H, "box-sizing", "border-box"), F(H, "margin", 0), F(H, "top", t.top), F(H, "left", t.left), F(H, "width", t.width), F(H, "height", t.height), F(H, "opacity", "0.8"), F(H, "position", yn ? "absolute" : "fixed"), F(H, "zIndex", "100000"), F(H, "pointerEvents", "none"), J.ghost = H, e.appendChild(H), F(H, "transform-origin", sn / parseInt(H.style.width) * 100 + "% " + cn / parseInt(H.style.height) * 100 + "%");
		}
	},
	_onDragStart: function(e, t) {
		var n = this, r = e.dataTransfer, i = n.options;
		if (R("dragStart", this, { evt: e }), J.eventCanceled) {
			this._onDrop();
			return;
		}
		R("setupClone", this), J.eventCanceled || (W = It(B), W.removeAttribute("id"), W.draggable = !1, W.style["will-change"] = "", this._hideClone(), P(W, this.options.chosenClass, !1), J.clone = W), n.cloneId = Vn(function() {
			R("clone", n), !J.eventCanceled && (n.options.removeCloneOnHide || U.insertBefore(W, B), n._hideClone(), z({
				sortable: n,
				name: "clone"
			}));
		}), !t && P(B, i.dragClass, !0), t ? (en = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (N(document, "mouseup", n._onDrop), N(document, "touchend", n._onDrop), N(document, "touchcancel", n._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(n, r, B)), M(document, "drop", n), F(B, "transform", "translateZ(0)")), $t = !0, n._dragStartId = Vn(n._dragStarted.bind(n, t, e)), M(document, "selectstart", n), ln = !0, ft && F(document.body, "user-select", "none");
	},
	_onDragOver: function(e) {
		var t = this.el, n = e.target, r, i, a, o = this.options, s = o.group, c = J.active, l = Qt === s, u = o.sort, d = K || c, f, p = this, m = !1;
		if (gn) return;
		function h(o, s) {
			R(o, p, tt({
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
					return Mn(U, t, B, r, n, I(n), e, i);
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
			}), p !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (n === B && !B.animated || n === t && !n.animated) && (un = null), !o.dragoverBubble && !e.rootEl && n !== document && (B.parentNode[L]._isOutsideThisEl(e.target), !r && kn(e)), !o.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
		}
		function v() {
			G = Et(B), Zt = Et(B, o.draggable), z({
				sortable: p,
				name: "change",
				toEl: t,
				newIndex: G,
				newDraggableIndex: Zt,
				originalEvent: e
			});
		}
		if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), n = vt(n, o.draggable, t, !0), h("dragOver"), J.eventCanceled) return m;
		if (B.contains(e.target) || n.animated && n.animatingX && n.animatingY || p._ignoreWhileAnimating === n) return _(!1);
		if (en = !1, c && !o.disabled && (l ? u || (a = V !== U) : K === this || (this.lastPutMode = Qt.checkPull(this, c, B, e)) && s.checkPut(this, c, B, e))) {
			if (f = this._getDirection(e, n) === "vertical", r = I(B), h("dragOverValid"), J.eventCanceled) return m;
			if (a) return V = U, g(), this._hideClone(), h("revert"), J.eventCanceled || (Kt ? U.insertBefore(B, Kt) : U.appendChild(B)), _(!0);
			var y = Tt(t, o.draggable);
			if (!y || In(e, f, this) && !y.animated) {
				if (y === B) return _(!1);
				if (y && t === e.target && (n = y), n && (i = I(n)), Mn(U, t, B, r, n, i, e, !!n) !== !1) return g(), y && y.nextSibling ? t.insertBefore(B, y.nextSibling) : t.appendChild(B), V = t, v(), _(!0);
			} else if (y && Fn(e, f, this)) {
				var b = wt(t, 0, o, !0);
				if (b === B) return _(!1);
				if (n = b, i = I(n), Mn(U, t, B, r, n, i, e, !1) !== !1) return g(), t.insertBefore(B, b), V = t, v(), _(!0);
			} else if (n.parentNode === t) {
				i = I(n);
				var x = 0, S, C = B.parentNode !== t, w = !wn(B.animated && B.toRect || r, n.animated && n.toRect || i, f), T = f ? "top" : "left", E = Ct(n, "top", "top") || Ct(B, "top", "top"), D = E ? E.scrollTop : void 0;
				un !== n && (S = i[T], fn = !1, pn = !w && o.invertSwap || C), x = Ln(e, n, i, f, w ? 1 : o.swapThreshold, o.invertedSwapThreshold == null ? o.swapThreshold : o.invertedSwapThreshold, pn, un === n);
				var ee;
				if (x !== 0) {
					var O = Et(B);
					do
						O -= x, ee = V.children[O];
					while (ee && (F(ee, "display") === "none" || ee === H));
				}
				if (x === 0 || ee === n) return _(!1);
				un = n, dn = x;
				var te = n.nextElementSibling, ne = !1;
				ne = x === 1;
				var re = Mn(U, t, B, r, n, i, e, ne);
				if (re !== !1) return (re === 1 || re === -1) && (ne = re === 1), gn = !0, setTimeout(Pn, 30), g(), ne && !te ? t.appendChild(B) : n.parentNode.insertBefore(B, ne ? te : n), E && Ft(E, 0, D - E.scrollTop), V = B.parentNode, S !== void 0 && !pn && (mn = Math.abs(S - I(n)[T])), v(), _(!0);
			}
			if (t.contains(B)) return _(!1);
		}
		return !1;
	},
	_ignoreWhileAnimating: null,
	_offMoveEvents: function() {
		N(document, "mousemove", this._onTouchMove), N(document, "touchmove", this._onTouchMove), N(document, "pointermove", this._onTouchMove), N(document, "dragover", kn), N(document, "mousemove", kn), N(document, "touchmove", kn);
	},
	_offUpEvents: function() {
		var e = this.el.ownerDocument;
		N(e, "mouseup", this._onDrop), N(e, "touchend", this._onDrop), N(e, "pointerup", this._onDrop), N(e, "touchcancel", this._onDrop), N(document, "selectstart", this);
	},
	_onDrop: function(e) {
		var t = this.el, n = this.options;
		if (G = Et(B), Zt = Et(B, n.draggable), R("drop", this, { evt: e }), V = B && B.parentNode, G = Et(B), Zt = Et(B, n.draggable), J.eventCanceled) {
			this._nulling();
			return;
		}
		$t = !1, pn = !1, fn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Hn(this.cloneId), Hn(this._dragStartId), this.nativeDraggable && (N(document, "drop", this), N(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ft && F(document.body, "user-select", ""), F(B, "transform", ""), e && (ln && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), H && H.parentNode && H.parentNode.removeChild(H), (U === V || K && K.lastPutMode !== "clone") && W && W.parentNode && W.parentNode.removeChild(W), B && (this.nativeDraggable && N(B, "dragend", this), Nn(B), B.style["will-change"] = "", ln && !$t && P(B, K ? K.options.ghostClass : this.options.ghostClass, !1), P(B, this.options.chosenClass, !1), z({
			sortable: this,
			name: "unchoose",
			toEl: V,
			newIndex: null,
			newDraggableIndex: null,
			originalEvent: e
		}), U === V ? G !== Yt && G >= 0 && (z({
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
		})), K && K.save()), J.active && ((G == null || G === -1) && (G = Yt, Zt = Xt), z({
			sortable: this,
			name: "end",
			toEl: V,
			originalEvent: e
		}), this.save()))), this._nulling();
	},
	_nulling: function() {
		R("nulling", this), U = B = V = H = Kt = W = qt = Jt = nn = rn = ln = G = Zt = Yt = Xt = un = dn = K = Qt = J.dragged = J.ghost = J.clone = J.active = null, _n.forEach(function(e) {
			e.checked = !0;
		}), _n.length = an = on = 0;
	},
	handleEvent: function(e) {
		switch (e.type) {
			case "drop":
			case "dragend":
				this._onDrop(e);
				break;
			case "dragenter":
			case "dragover":
				B && (this._onDragOver(e), jn(e));
				break;
			case "selectstart":
				e.preventDefault();
				break;
		}
	},
	toArray: function() {
		for (var e = [], t, n = this.el.children, r = 0, i = n.length, a = this.options; r < i; r++) t = n[r], vt(t, a.draggable, this.el, !1) && e.push(t.getAttribute(a.dataIdAttr) || zn(t));
		return e;
	},
	sort: function(e, t) {
		var n = {}, r = this.el;
		this.toArray().forEach(function(e, t) {
			var i = r.children[t];
			vt(i, this.options.draggable, r, !1) && (n[e] = i);
		}, this), t && this.captureAnimationState(), e.forEach(function(e) {
			n[e] && (r.removeChild(n[e]), r.appendChild(n[e]));
		}), t && this.animateAll();
	},
	save: function() {
		var e = this.options.store;
		e && e.set && e.set(this);
	},
	closest: function(e, t) {
		return vt(e, t || this.options.draggable, this.el, !1);
	},
	option: function(e, t) {
		var n = this.options;
		if (t === void 0) return n[e];
		var r = Ut.modifyOption(this, e, t);
		r === void 0 ? n[e] = t : n[e] = r, e === "group" && En(n);
	},
	destroy: function() {
		R("destroy", this);
		var e = this.el;
		e[L] = null, N(e, "mousedown", this._onTapStart), N(e, "touchstart", this._onTapStart), N(e, "pointerdown", this._onTapStart), this.nativeDraggable && (N(e, "dragover", this), N(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(e) {
			e.removeAttribute("draggable");
		}), this._onDrop(), this._disableDelayedDragEvents(), tn.splice(tn.indexOf(this.el), 1), this.el = e = null;
	},
	_hideClone: function() {
		if (!Jt) {
			if (R("hideClone", this), J.eventCanceled) return;
			F(W, "display", "none"), this.options.removeCloneOnHide && W.parentNode && W.parentNode.removeChild(W), Jt = !0;
		}
	},
	_showClone: function(e) {
		if (e.lastPutMode !== "clone") {
			this._hideClone();
			return;
		}
		if (Jt) {
			if (R("showClone", this), J.eventCanceled) return;
			B.parentNode == U && !this.options.group.revertClone ? U.insertBefore(W, B) : Kt ? U.insertBefore(W, Kt) : U.appendChild(W), this.options.group.revertClone && this.animate(B, W), F(W, "display", ""), Jt = !1;
		}
	}
};
function jn(e) {
	e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Mn(e, t, n, r, i, a, o, s) {
	var c, l = e[L], u = l.options.onMove, d;
	return window.CustomEvent && !lt && !ut ? c = new CustomEvent("move", {
		bubbles: !0,
		cancelable: !0
	}) : (c = document.createEvent("Event"), c.initEvent("move", !0, !0)), c.to = t, c.from = e, c.dragged = n, c.draggedRect = r, c.related = i || t, c.relatedRect = a || I(t), c.willInsertAfter = s, c.originalEvent = o, e.dispatchEvent(c), u && (d = u.call(l, c, o)), d;
}
function Nn(e) {
	e.draggable = !1;
}
function Pn() {
	gn = !1;
}
function Fn(e, t, n) {
	var r = I(wt(n.el, 0, n.options, !0)), i = Lt(n.el, n.options, H), a = 10;
	return t ? e.clientX < i.left - a || e.clientY < r.top && e.clientX < r.right : e.clientY < i.top - a || e.clientY < r.bottom && e.clientX < r.left;
}
function In(e, t, n) {
	var r = I(Tt(n.el, n.options.draggable)), i = Lt(n.el, n.options, H), a = 10;
	return t ? e.clientX > i.right + a || e.clientY > r.bottom && e.clientX > r.left : e.clientY > i.bottom + a || e.clientX > r.right && e.clientY > r.top;
}
function Ln(e, t, n, r, i, a, o, s) {
	var c = r ? e.clientY : e.clientX, l = r ? n.height : n.width, u = r ? n.top : n.left, d = r ? n.bottom : n.right, f = !1;
	if (!o) {
		if (s && mn < l * i) {
			if (!fn && (dn === 1 ? c > u + l * a / 2 : c < d - l * a / 2) && (fn = !0), fn) f = !0;
			else if (dn === 1 ? c < u + mn : c > d - mn) return -dn;
		} else if (c > u + l * (1 - i) / 2 && c < d - l * (1 - i) / 2) return Rn(t);
	}
	return f ||= o, f && (c < u + l * a / 2 || c > d - l * a / 2) ? c > u + l / 2 ? 1 : -1 : 0;
}
function Rn(e) {
	return Et(B) < Et(e) ? 1 : -1;
}
function zn(e) {
	for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--;) r += t.charCodeAt(n);
	return r.toString(36);
}
function Bn(e) {
	_n.length = 0;
	for (var t = e.getElementsByTagName("input"), n = t.length; n--;) {
		var r = t[n];
		r.checked && _n.push(r);
	}
}
function Vn(e) {
	return setTimeout(e, 0);
}
function Hn(e) {
	return clearTimeout(e);
}
vn && M(document, "touchmove", function(e) {
	(J.active || $t) && e.cancelable && e.preventDefault();
}), J.utils = {
	on: M,
	off: N,
	css: F,
	find: xt,
	is: function(e, t) {
		return !!vt(e, t, e, !1);
	},
	extend: At,
	throttle: Nt,
	closest: vt,
	toggleClass: P,
	clone: It,
	index: Et,
	nextTick: Vn,
	cancelNextTick: Hn,
	detectDirection: Cn,
	getChild: wt
}, J.get = function(e) {
	return e[L];
}, J.mount = function() {
	var e = [...arguments];
	e[0].constructor === Array && (e = e[0]), e.forEach(function(e) {
		if (!e.prototype || !e.prototype.constructor) throw `Sortable: Mounted plugin must be a constructor function, not ${{}.toString.call(e)}`;
		e.utils && (J.utils = tt(tt({}, J.utils), e.utils)), Ut.mount(e);
	});
}, J.create = function(e, t) {
	return new J(e, t);
}, J.version = st;
var Y = [], Un, Wn, Gn = !1, Kn, qn, Jn, Yn;
function Xn() {
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
			this.sortable.nativeDraggable ? N(document, "dragover", this._handleAutoScroll) : (N(document, "pointermove", this._handleFallbackAutoScroll), N(document, "touchmove", this._handleFallbackAutoScroll), N(document, "mousemove", this._handleFallbackAutoScroll)), Qn(), Zn(), Pt();
		},
		nulling: function() {
			Jn = Wn = Un = Gn = Yn = Kn = qn = null, Y.length = 0;
		},
		_handleFallbackAutoScroll: function(e) {
			this._handleAutoScroll(e, !0);
		},
		_handleAutoScroll: function(e, t) {
			var n = this, r = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = document.elementFromPoint(r, i);
			if (Jn = e, t || this.options.forceAutoScrollFallback || ut || lt || ft) {
				$n(e, this.options, a, t);
				var o = kt(a, !0);
				Gn && (!Yn || r !== Kn || i !== qn) && (Yn && Qn(), Yn = setInterval(function() {
					var a = kt(document.elementFromPoint(r, i), !0);
					a !== o && (o = a, Zn()), $n(e, n.options, a, t);
				}, 10), Kn = r, qn = i);
			} else {
				if (!this.options.bubbleScroll || kt(a, !0) === St()) {
					Zn();
					return;
				}
				$n(e, this.options, kt(a, !1), !1);
			}
		}
	}, it(e, {
		pluginName: "scroll",
		initializeByDefault: !0
	});
}
function Zn() {
	Y.forEach(function(e) {
		clearInterval(e.pid);
	}), Y = [];
}
function Qn() {
	clearInterval(Yn);
}
var $n = Nt(function(e, t, n, r) {
	if (t.scroll) {
		var i = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, o = t.scrollSensitivity, s = t.scrollSpeed, c = St(), l = !1, u;
		Wn !== n && (Wn = n, Zn(), Un = t.scroll, u = t.scrollFn, Un === !0 && (Un = kt(n, !0)));
		var d = 0, f = Un;
		do {
			var p = f, m = I(p), h = m.top, g = m.bottom, _ = m.left, v = m.right, y = m.width, b = m.height, x = void 0, S = void 0, C = p.scrollWidth, w = p.scrollHeight, T = F(p), E = p.scrollLeft, D = p.scrollTop;
			p === c ? (x = y < C && (T.overflowX === "auto" || T.overflowX === "scroll" || T.overflowX === "visible"), S = b < w && (T.overflowY === "auto" || T.overflowY === "scroll" || T.overflowY === "visible")) : (x = y < C && (T.overflowX === "auto" || T.overflowX === "scroll"), S = b < w && (T.overflowY === "auto" || T.overflowY === "scroll"));
			var ee = x && (Math.abs(v - i) <= o && E + y < C) - (Math.abs(_ - i) <= o && !!E), O = S && (Math.abs(g - a) <= o && D + b < w) - (Math.abs(h - a) <= o && !!D);
			if (!Y[d]) for (var te = 0; te <= d; te++) Y[te] || (Y[te] = {});
			(Y[d].vx != ee || Y[d].vy != O || Y[d].el !== p) && (Y[d].el = p, Y[d].vx = ee, Y[d].vy = O, clearInterval(Y[d].pid), (ee != 0 || O != 0) && (l = !0, Y[d].pid = setInterval(function() {
				r && this.layer === 0 && J.active._onTouchMove(Jn);
				var t = Y[this.layer].vy ? Y[this.layer].vy * s : 0, n = Y[this.layer].vx ? Y[this.layer].vx * s : 0;
				typeof u == "function" && u.call(J.dragged.parentNode[L], n, t, e, Jn, Y[this.layer].el) !== "continue" || Ft(Y[this.layer].el, n, t);
			}.bind({ layer: d }), 24))), d++;
		} while (t.bubbleScroll && f !== c && (f = kt(f, !1)));
		Gn = l;
	}
}, 30), er = function(e) {
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
function tr() {}
tr.prototype = {
	startIndex: null,
	dragStart: function(e) {
		this.startIndex = e.oldDraggableIndex;
	},
	onSpill: function(e) {
		var t = e.dragEl, n = e.putSortable;
		this.sortable.captureAnimationState(), n && n.captureAnimationState();
		var r = wt(this.sortable.el, this.startIndex, this.options);
		r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll();
	},
	drop: er
}, it(tr, { pluginName: "revertOnSpill" });
function nr() {}
nr.prototype = {
	onSpill: function(e) {
		var t = e.dragEl, n = e.putSortable || this.sortable;
		n.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), n.animateAll();
	},
	drop: er
}, it(nr, { pluginName: "removeOnSpill" }), J.mount(new Xn()), J.mount(nr, tr);
function rr(e) {
	return e == null ? e : JSON.parse(JSON.stringify(e));
}
function ir(e) {
	h() && D(e);
}
function ar(e) {
	h() ? T(e) : x(e);
}
var or = null, sr = null;
function cr(e = null, t = null) {
	or = e, sr = t;
}
function lr() {
	return {
		data: or,
		clonedData: sr
	};
}
var ur = Symbol("cloneElement");
function dr(...e) {
	let t = h()?.proxy, n = null, r = e[0], [, i, a] = e;
	Array.isArray(j(i)) || (a = i, i = null);
	let o = null, { immediate: s = !0, clone: c = rr, forceFallback: l, fallbackOnBody: u, customUpdate: d } = j(a) ?? {};
	function f(e) {
		let { from: t, oldIndex: r, item: a } = e, o = Array.from(t.childNodes);
		n = l && !u ? o.slice(0, -1) : o;
		let s = j(j(i)?.[r]), d = c(s);
		cr(s, d), a[ur] = d;
	}
	function p(e) {
		let t = e.item[ur];
		if (!Ue(t)) {
			if (Ke(e.item), v(i)) {
				let n = [...j(i)];
				i.value = He(n, e.newDraggableIndex, t);
				return;
			}
			He(j(i), e.newDraggableIndex, t);
		}
	}
	function m(e) {
		let { from: t, item: n, oldIndex: r, oldDraggableIndex: a, pullMode: o, clone: s } = e;
		if (Ge(t, n, r), o === "clone") {
			Ke(s);
			return;
		}
		if (v(i)) {
			let e = [...j(i)];
			i.value = Ve(e, a);
			return;
		}
		Ve(j(i), a);
	}
	function g(e) {
		if (d) {
			d(e);
			return;
		}
		let { from: t, item: n, oldIndex: r, oldDraggableIndex: a, newDraggableIndex: o } = e;
		if (Ke(n), Ge(t, n, r), v(i)) {
			let e = [...j(i)];
			i.value = Re(e, a, o);
			return;
		}
		Re(j(i), a, o);
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
			if (cr(), o) throw o;
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
		return e ||= We(n) ? qe(n, t?.$el) : n, e && !Xe(e) && (e = e.$el), e || Le("Root element not found"), e;
	}
	function S() {
		let e = j(a) ?? {}, { immediate: t, clone: n } = e, r = Pe(e, ["immediate", "clone"]);
		return Ze(r, (e, t) => {
			Qe(e) && (r[e] = (e, ...n) => ($e(e, lr()), t(e, ...n)));
		}), Ye(i === null ? {} : y, r);
	}
	let C = (e) => {
		e = b(e), o && w.destroy(), o = new J(e, S());
	};
	ge(() => a, () => {
		o && Ze(S(), (e, t) => {
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
	return ar(() => {
		s && C();
	}), ir(w.destroy), Ne({
		start: C,
		pause: () => w?.option("disabled", !0),
		resume: () => w?.option("disabled", !1)
	}, w);
}
var fr = [
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
], pr = p({
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
		...fr.map((e) => `on${e.replace(/^\S/, (e) => e.toUpperCase())}`)
	],
	emits: ["update:modelValue", ...fr],
	setup(e, { slots: t, emit: n, expose: r, attrs: i }) {
		let o = fr.reduce((e, t) => {
			let r = `on${t.replace(/^\S/, (e) => e.toUpperCase())}`;
			return e[r] = (...e) => n(t, ...e), e;
		}, {}), s = a(() => {
			let t = ue(e), { modelValue: n } = t, r = Pe(t, ["modelValue"]), a = Object.entries(r).reduce((e, [t, n]) => {
				let r = j(n);
				return r !== void 0 && (e[t] = r), e;
			}, {});
			return Ne(Ne({}, o), Be(Ne(Ne({}, i), a)));
		}), c = a({
			get: () => e.modelValue,
			set: (e) => n("update:modelValue", e)
		}), l = k(), u = ne(dr(e.target || l, c, s));
		return r(u), () => g(e.tag || "div", { ref: l }, (t?.default)?.call(t, u));
	}
}), mr = {
	mounted: "mounted",
	unmounted: "unmounted"
};
mr.mounted, mr.unmounted;
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
var hr = X({
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
function gr(e) {
	he(`Vuetify: ${e}`);
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/globals.js
var _r = typeof window < "u", vr = _r && "IntersectionObserver" in window;
_r && ("ontouchstart" in window || window.navigator.maxTouchPoints), _r && "EyeDropper" in window;
var yr = _r && "matchMedia" in window && typeof window.matchMedia == "function", br = () => yr && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/helpers.js
function Z(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
	if (e == null || e === "") return;
	let n = Number(e);
	if (isNaN(n)) return String(e);
	if (isFinite(n)) return `${n}${t}`;
}
function xr(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Sr(e) {
	let t;
	return typeof e == "object" && !!e && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Cr(e) {
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
function wr(e, t) {
	return t.every((t) => e.hasOwnProperty(t));
}
function Tr(e, t) {
	let n = {};
	for (let r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
	return n;
}
function Er(e) {
	return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Dr(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
	return Math.max(t, Math.min(n, e));
}
function Or(e, t) {
	return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length));
}
function kr(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = [], r = 0;
	for (; r < e.length;) n.push(e.substr(r, t)), r += t;
	return n;
}
function Ar() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, r = {};
	for (let t in e) r[t] = e[t];
	for (let i in t) {
		let a = e[i], o = t[i];
		if (Sr(a) && Sr(o)) {
			r[i] = Ar(a, o, n);
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
function jr(t) {
	return t.map((t) => t.type === e ? jr(t.children) : t).flat();
}
function Mr() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
	if (Mr.cache.has(e)) return Mr.cache.get(e);
	let t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
	return Mr.cache.set(e, t), t;
}
Mr.cache = /* @__PURE__ */ new Map();
function Nr(e, t) {
	if (!t || typeof t != "object") return [];
	if (Array.isArray(t)) return t.map((t) => Nr(e, t)).flat(1);
	if (t.suspense) return Nr(e, t.ssContent);
	if (Array.isArray(t.children)) return t.children.map((t) => Nr(e, t)).flat(1);
	if (t.component) {
		if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
		if (t.component.subTree) return Nr(e, t.component.subTree).flat(1);
	}
	return [];
}
function Pr(e) {
	let t = ne({});
	_e(() => {
		let n = e();
		for (let e in n) t[e] = n[e];
	}, { flush: "sync" });
	let n = {};
	for (let e in t) n[e] = A(() => t[e]);
	return n;
}
function Fr(e, t) {
	return e.includes(t);
}
function Ir(e, t) {
	return t = "on" + i(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Lr() {
	let e = se(), t = (t) => {
		e.value = t;
	};
	return Object.defineProperty(t, "value", {
		enumerable: !0,
		get: () => e.value,
		set: (t) => e.value = t
	}), Object.defineProperty(t, "el", {
		enumerable: !0,
		get: () => Cr(e.value)
	}), t;
}
function Rr(e) {
	return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/anchor.js
var zr = ["top", "bottom"], Br = [
	"start",
	"end",
	"left",
	"right"
];
function Vr(e, t) {
	let [n, r] = e.split(" ");
	return r ||= Fr(zr, n) ? "start" : Fr(Br, n) ? "top" : "center", {
		side: Hr(n, t),
		align: Hr(r, t)
	};
}
function Hr(e, t) {
	return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/color/APCA.js
var Ur = 2.4, Wr = .2126729, Gr = .7151522, Kr = .072175, qr = .55, Jr = .58, Yr = .57, Xr = .62, Zr = .03, Qr = 1.45, $r = 5e-4, ei = 1.25, ti = 1.25, ni = .078, ri = 12.82051282051282, ii = .06, ai = .001;
function oi(e, t) {
	let n = (e.r / 255) ** Ur, r = (e.g / 255) ** Ur, i = (e.b / 255) ** Ur, a = (t.r / 255) ** Ur, o = (t.g / 255) ** Ur, s = (t.b / 255) ** Ur, c = n * Wr + r * Gr + i * Kr, l = a * Wr + o * Gr + s * Kr;
	if (c <= Zr && (c += (Zr - c) ** Qr), l <= Zr && (l += (Zr - l) ** Qr), Math.abs(l - c) < $r) return 0;
	let u;
	if (l > c) {
		let e = (l ** qr - c ** Jr) * ei;
		u = e < ai ? 0 : e < ni ? e - e * ri * ii : e - ii;
	} else {
		let e = (l ** Xr - c ** Yr) * ti;
		u = e > -ai ? 0 : e > -ni ? e - e * ri * ii : e + ii;
	}
	return u * 100;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/colorUtils.js
function si(e) {
	return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function ci(e) {
	return si(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
var li = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, ui = {
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
	hsl: (e, t, n, r) => pi({
		h: e,
		s: t,
		l: n,
		a: r
	}),
	hsla: (e, t, n, r) => pi({
		h: e,
		s: t,
		l: n,
		a: r
	}),
	hsv: (e, t, n, r) => fi({
		h: e,
		s: t,
		v: n,
		a: r
	}),
	hsva: (e, t, n, r) => fi({
		h: e,
		s: t,
		v: n,
		a: r
	})
};
function di(e) {
	if (typeof e == "number") return (isNaN(e) || e < 0 || e > 16777215) && gr(`'${e}' is not a valid hex color`), {
		r: (e & 16711680) >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
	if (typeof e == "string" && li.test(e)) {
		let { groups: t } = e.match(li), { fn: n, values: r } = t, i = r.split(/,\s*|\s*\/\s*|\s+/).map((e, t) => e.endsWith("%") || t > 0 && t < 3 && [
			"hsl",
			"hsla",
			"hsv",
			"hsva"
		].includes(n) ? parseFloat(e) / 100 : parseFloat(e));
		return ui[n](...i);
	} else if (typeof e == "string") {
		let t = e.startsWith("#") ? e.slice(1) : e;
		[3, 4].includes(t.length) ? t = t.split("").map((e) => e + e).join("") : [6, 8].includes(t.length) || gr(`'${e}' is not a valid hex(a) color`);
		let n = parseInt(t, 16);
		return (isNaN(n) || n < 0 || n > 4294967295) && gr(`'${e}' is not a valid hex(a) color`), hi(t);
	} else if (typeof e == "object") {
		if (wr(e, [
			"r",
			"g",
			"b"
		])) return e;
		if (wr(e, [
			"h",
			"s",
			"l"
		])) return fi(mi(e));
		if (wr(e, [
			"h",
			"s",
			"v"
		])) return fi(e);
	}
	throw TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function fi(e) {
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
function pi(e) {
	return fi(mi(e));
}
function mi(e) {
	let { h: t, s: n, l: r, a: i } = e, a = r + n * Math.min(r, 1 - r);
	return {
		h: t,
		s: a === 0 ? 0 : 2 - 2 * r / a,
		v: a,
		a: i
	};
}
function hi(e) {
	e = gi(e);
	let [t, n, r, i] = kr(e, 2).map((e) => parseInt(e, 16));
	return i = i === void 0 ? i : i / 255, {
		r: t,
		g: n,
		b: r,
		a: i
	};
}
function gi(e) {
	return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((e) => e + e).join("")), e.length !== 6 && (e = Or(Or(e, 6), 8, "F")), e;
}
function _i(e) {
	let t = Math.abs(oi(di(0), di(e)));
	return Math.abs(oi(di(16777215), di(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/getCurrentInstance.js
function vi(e, t) {
	let n = h();
	if (!n) throw Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
	return n;
}
function yi() {
	let e = vi(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
	return Mr(e?.aliasName || e?.name);
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/injectSelf.js
function bi(e) {
	let { provides: t } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vi("injectSelf");
	if (t && e in t) return t[e];
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/defaults.js
var xi = Symbol.for("vuetify:defaults");
function Si() {
	let e = _(xi);
	if (!e) throw Error("[Vuetify] Could not find defaults instance");
	return e;
}
function Ci(e, t) {
	let n = Si(), r = k(e), i = a(() => {
		if (j(t?.disabled)) return n.value;
		let e = j(t?.scoped), i = j(t?.reset), a = j(t?.root);
		if (r.value == null && !(e || i || a)) return n.value;
		let o = Ar(r.value, { prev: n.value });
		if (e) return o;
		if (i || a) {
			let e = Number(i || Infinity);
			for (let t = 0; t <= e && !(!o || !("prev" in o)); t++) o = o.prev;
			return o && typeof a == "string" && a in o && (o = Ar(Ar(o, { prev: o }), o[a])), o;
		}
		return o.prev ? Ar(o.prev, o) : o;
	});
	return te(xi, i), i;
}
function wi(e, t) {
	return e.props && (e.props[t] !== void 0 || e.props[Mr(t)] !== void 0);
}
function Ti() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Si(), r = vi("useDefaults");
	if (t = t ?? r.type.name ?? r.type.__name, !t) throw Error("[Vuetify] Could not determine component name");
	let i = a(() => n.value?.[e._as ?? t]), o = new Proxy(e, { get(e, t) {
		let a = Reflect.get(e, t);
		if (t === "class" || t === "style") return [i.value?.[t], a].filter((e) => e != null);
		if (wi(r.vnode, t)) return a;
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
		let e = bi(xi, r);
		te(xi, a(() => s.value ? Ar(e?.value ?? {}, s.value) : e?.value));
	}
	return {
		props: o,
		provideSubDefaults: c
	};
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/defineComponent.js
function Ei(e) {
	if (e._setup = e._setup ?? e.setup, !e.name) return gr("The component is missing an explicit name, unable to generate default prop value"), e;
	if (e._setup) {
		e.props = X(e.props ?? {}, e.name)();
		let t = Object.keys(e.props).filter((e) => e !== "class" && e !== "style");
		e.filterProps = function(e) {
			return Tr(e, t);
		}, e.props._as = String, e.setup = function(t, n) {
			let r = Si();
			if (!r.value) return e._setup(t, n);
			let { props: i, provideSubDefaults: a } = Ti(t, t._as ?? e.name, r), o = e._setup(i, n);
			return a(), o;
		};
	}
	return e;
}
function Di() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
	return (t) => (e ? Ei : p)(t);
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/deepEqual.js
function Oi(e, t, n, r) {
	if (!n || Rr(e) || Rr(t)) return;
	let i = n.get(e);
	if (i) i.set(t, r);
	else {
		let i = /* @__PURE__ */ new WeakMap();
		i.set(t, r), n.set(e, i);
	}
}
function ki(e, t, n) {
	if (!n || Rr(e) || Rr(t)) return null;
	let r = n.get(e)?.get(t);
	if (typeof r == "boolean") return r;
	let i = n.get(t)?.get(e);
	return typeof i == "boolean" ? i : null;
}
function Ai(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
	if (e === t) return !0;
	if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return !1;
	let r = Object.keys(e);
	return r.length === Object.keys(t).length ? ki(e, t, n) || (Oi(e, t, n, !0), r.every((r) => Ai(e[r], t[r], n))) : !1;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/util/useRender.js
function ji(e) {
	let t = vi("useRender");
	t.render = e;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/resizeObserver.js
function Mi(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content", n = Lr(), r = k();
	if (_r) {
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
function Ni(e, t) {
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
function Pi(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (e) => e, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (e) => e, o = vi("useProxiedModel"), s = k(e[t] === void 0 ? n : e[t]), c = Mr(t), l = a(c === t ? () => (e[t], !!(o.vnode.props?.hasOwnProperty(t) && o.vnode.props?.hasOwnProperty(`onUpdate:${t}`))) : () => (e[t], !!((o.vnode.props?.hasOwnProperty(t) || o.vnode.props?.hasOwnProperty(c)) && (o.vnode.props?.hasOwnProperty(`onUpdate:${t}`) || o.vnode.props?.hasOwnProperty(`onUpdate:${c}`)))));
	Ni(() => !l.value, () => {
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
var Fi = Symbol.for("vuetify:locale");
function Ii() {
	let e = _(Fi);
	if (!e) throw Error("[Vuetify] Could not find injected rtl instance");
	return {
		isRtl: e.isRtl,
		rtlClasses: e.rtlClasses
	};
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/theme.js
var Li = Symbol.for("vuetify:theme"), Ri = X({ theme: String }, "theme");
function zi(e) {
	vi("provideTheme");
	let t = _(Li, null);
	if (!t) throw Error("Could not find Vuetify theme injection");
	let n = A(() => e.theme ?? t.name.value), r = A(() => t.themes.value[n.value]), i = A(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`), a = {
		...t,
		name: n,
		current: r,
		themeClasses: i
	};
	return te(Li, a), a;
}
function Bi() {
	vi("useTheme");
	let e = _(Li, null);
	if (!e) throw Error("Could not find Vuetify theme injection");
	return e;
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/tag.js
var Vi = X({ tag: {
	type: [
		String,
		Object,
		Function
	],
	default: "div"
} }, "tag"), Hi = X({
	disabled: Boolean,
	group: Boolean,
	hideOnLeave: Boolean,
	leaveAbsolute: Boolean,
	mode: String,
	origin: String
}, "transition");
function Q(e, t, i) {
	return Di()({
		name: e,
		props: Hi({
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
function Ui(e, t) {
	let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
	return Di()({
		name: e,
		props: {
			mode: {
				type: String,
				default: i
			},
			disabled: {
				type: Boolean,
				default: br()
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
function Wi() {
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
var Gi = Ui("expand-transition", Wi());
Ui("expand-x-transition", Wi("", "x")), Ui("expand-both-transition", Wi("", "both"));
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/components/VDefaultsProvider/VDefaultsProvider.js
var Ki = X({
	defaults: Object,
	disabled: Boolean,
	reset: [Number, String],
	root: [Boolean, String],
	scoped: Boolean
}, "VDefaultsProvider"), qi = Di(!1)({
	name: "VDefaultsProvider",
	props: Ki(),
	setup(e, t) {
		let { slots: n } = t, { defaults: r, disabled: i, reset: a, root: o, scoped: s } = ue(e);
		return Ci(r, {
			reset: a,
			root: o,
			scoped: s,
			disabled: i
		}), () => n.default?.();
	}
}), Ji = X({
	height: [Number, String],
	maxHeight: [Number, String],
	maxWidth: [Number, String],
	minHeight: [Number, String],
	minWidth: [Number, String],
	width: [Number, String]
}, "dimension");
function Yi(e) {
	return { dimensionStyles: a(() => {
		let t = {}, n = Z(e.height), r = Z(e.maxHeight), i = Z(e.maxWidth), a = Z(e.minHeight), o = Z(e.minWidth), s = Z(e.width);
		return n != null && (t.height = n), r != null && (t.maxHeight = r), i != null && (t.maxWidth = i), a != null && (t.minHeight = a), o != null && (t.minWidth = o), s != null && (t.width = s), t;
	}) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/color.js
function Xi(e) {
	return Pr(() => {
		let { class: t, style: n } = $i(e);
		return {
			colorClasses: t,
			colorStyles: n
		};
	});
}
function Zi(e) {
	let { colorClasses: t, colorStyles: n } = Xi(() => ({ text: de(e) }));
	return {
		textColorClasses: t,
		textColorStyles: n
	};
}
function Qi(e) {
	return {
		text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text,
		background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background
	};
}
function $i(e) {
	let t = Qi(de(e)), n = [], r = {};
	if (t.background) if (si(t.background)) {
		if (r.backgroundColor = t.background, !t.text && ci(t.background)) {
			let e = di(t.background);
			if (e.a == null || e.a === 1) {
				let t = _i(e);
				r.color = t, r.caretColor = t;
			}
		}
	} else n.push(`bg-${t.background}`);
	return t.text && (si(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), {
		class: n,
		style: r
	};
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/rounded.js
var ea = X({
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
function ta(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yi();
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
var na = X({ border: [
	Boolean,
	Number,
	String
] }, "border");
function ra(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yi();
	return { borderClasses: a(() => {
		let n = e.border;
		return n === !0 || n === "" ? `${t}--border` : typeof n == "string" || n === 0 ? String(n).split(" ").map((e) => `border-${e}`) : [];
	}) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/elevation.js
var ia = X({ elevation: {
	type: [Number, String],
	validator(e) {
		let t = parseInt(e);
		return !isNaN(t) && t >= 0 && t <= 24;
	}
} }, "elevation");
function aa(e) {
	return { elevationClasses: A(() => {
		let t = v(e) ? e.value : e.elevation;
		return t == null ? [] : [`elevation-${t}`];
	}) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/location.js
var oa = {
	center: "center",
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, sa = X({ location: String }, "location");
function ca(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0, { isRtl: r } = Ii();
	return { locationStyles: a(() => {
		if (!e.location) return {};
		let { side: i, align: a } = Vr(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
		function o(e) {
			return n ? n(e) : 0;
		}
		let s = {};
		return i !== "center" && (t ? s[oa[i]] = `calc(100% - ${o(i)}px)` : s[i] = 0), a === "center" ? (i === "center" ? s.top = s.left = "50%" : s[{
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
		}[i]) : t ? s[oa[a]] = `calc(100% - ${o(a)}px)` : s[a] = 0, s;
	}) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/density.js
var la = [
	null,
	"default",
	"comfortable",
	"compact"
], ua = X({ density: {
	type: String,
	default: "default",
	validator: (e) => la.includes(e)
} }, "density");
function da(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yi();
	return { densityClasses: A(() => `${t}--density-${e.density}`) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/variant.js
var fa = [
	"elevated",
	"flat",
	"tonal",
	"outlined",
	"text",
	"plain"
];
function pa(t, n) {
	return l(e, null, [t && l("span", {
		key: "overlay",
		class: S(`${n}__overlay`)
	}, null), l("span", {
		key: "underlay",
		class: S(`${n}__underlay`)
	}, null)]);
}
var ma = X({
	color: String,
	variant: {
		type: String,
		default: "elevated",
		validator: (e) => fa.includes(e)
	}
}, "variant");
function ha(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yi(), n = A(() => {
		let { variant: n } = de(e);
		return `${t}--variant-${n}`;
	}), { colorClasses: r, colorStyles: i } = Xi(() => {
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
var ga = X({
	baseColor: String,
	divided: Boolean,
	direction: {
		type: String,
		default: "horizontal"
	},
	...na(),
	...hr(),
	...ua(),
	...ia(),
	...ea(),
	...Vi(),
	...Ri(),
	...ma()
}, "VBtnGroup"), _a = Di()({
	name: "VBtnGroup",
	props: ga(),
	setup(e, t) {
		let { slots: n } = t, { themeClasses: r } = zi(e), { densityClasses: i } = da(e), { borderClasses: a } = ra(e), { elevationClasses: o } = aa(e), { roundedClasses: s } = ta(e);
		Ci({ VBtn: {
			height: A(() => e.direction === "horizontal" ? "auto" : null),
			baseColor: A(() => e.baseColor),
			color: A(() => e.color),
			density: A(() => e.density),
			flat: !0,
			variant: A(() => e.variant)
		} }), ji(() => f(e.tag, {
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
}), va = X({
	modelValue: {
		type: null,
		default: void 0
	},
	multiple: Boolean,
	mandatory: [Boolean, String],
	max: Number,
	selectedClass: String,
	disabled: Boolean
}, "group"), ya = X({
	value: null,
	disabled: Boolean,
	selectedClass: String
}, "group-item");
function ba(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = vi("useGroupItem");
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
function xa(e, t) {
	let n = !1, r = ne([]), i = Pi(e, "modelValue", [], (e) => e === void 0 ? [] : Ca(r, e === null ? [null] : Er(e)), (t) => {
		let n = wa(r, t);
		return e.multiple ? n : n[0];
	}), a = vi("useGroup");
	function o(e, n) {
		let i = e, o = Nr(Symbol.for(`${t.description}:id`), a?.vnode).indexOf(n);
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
		if (e.multiple && gr("This method is not supported when using \"multiple\" prop"), i.value.length) {
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
		getItemIndex: (e) => Sa(r, e)
	};
	return te(t, d), d;
}
function Sa(e, t) {
	let n = Ca(e, [t]);
	return n.length ? e.findIndex((e) => e.id === n[0]) : -1;
}
function Ca(e, t) {
	let n = [];
	return t.forEach((t) => {
		let r = e.find((e) => Ai(t, e.value)), i = e[t];
		r?.value === void 0 ? i?.useIndexAsValue && n.push(i.id) : n.push(r.id);
	}), n;
}
function wa(e, t) {
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
var Ta = Symbol.for("vuetify:v-btn-toggle"), Ea = X({
	...ga(),
	...va()
}, "VBtnToggle");
Di()({
	name: "VBtnToggle",
	props: Ea(),
	emits: { "update:modelValue": (e) => !0 },
	setup(e, t) {
		let { slots: n } = t, { isSelected: r, next: i, prev: a, select: o, selected: s } = xa(e, Ta);
		return ji(() => {
			let t = _a.filterProps(e);
			return f(_a, b({ class: ["v-btn-toggle", e.class] }, t, { style: e.style }), { default: () => [n.default?.({
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
var Da = [
	String,
	Function,
	Object,
	Array
], Oa = Symbol.for("vuetify:icons"), ka = X({
	icon: { type: Da },
	tag: {
		type: [
			String,
			Object,
			Function
		],
		required: !0
	}
}, "icon"), Aa = Di()({
	name: "VComponentIcon",
	props: ka(),
	setup(e, t) {
		let { slots: n } = t;
		return () => {
			let t = e.icon;
			return f(e.tag, null, { default: () => [e.icon ? f(t, null, null) : n.default?.()] });
		};
	}
}), ja = Ei({
	name: "VSvgIcon",
	inheritAttrs: !1,
	props: ka(),
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
Ei({
	name: "VLigatureIcon",
	props: ka(),
	setup(e) {
		return () => f(e.tag, null, { default: () => [e.icon] });
	}
}), Ei({
	name: "VClassIcon",
	props: ka(),
	setup(e) {
		return () => f(e.tag, { class: S(e.icon) }, null);
	}
});
var Ma = (e) => {
	let t = _(Oa);
	if (!t) throw Error("Missing Vuetify Icons provide!");
	return { iconData: a(() => {
		let n = de(e);
		if (!n) return { component: Aa };
		let r = n;
		if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = t.aliases?.[r.slice(1)])), r || gr(`Could not find aliased icon "${n}"`), Array.isArray(r)) return {
			component: ja,
			icon: r
		};
		if (typeof r != "string") return {
			component: Aa,
			icon: r
		};
		let i = Object.keys(t.sets).find((e) => typeof r == "string" && r.startsWith(`${e}:`)), a = i ? r.slice(i.length + 1) : r;
		return {
			component: t.sets[i ?? t.defaultSet].component,
			icon: a
		};
	}) };
}, Na = [
	"x-small",
	"small",
	"default",
	"large",
	"x-large"
], Pa = X({ size: {
	type: [String, Number],
	default: "default"
} }, "size");
function Fa(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yi();
	return Pr(() => {
		let n = e.size, r, i;
		return Fr(Na, n) ? r = `${t}--size-${n}` : n && (i = {
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
var Ia = X({
	color: String,
	disabled: Boolean,
	start: Boolean,
	end: Boolean,
	icon: Da,
	opacity: [String, Number],
	...hr(),
	...Pa(),
	...Vi({ tag: "i" }),
	...Ri()
}, "VIcon"), La = Di()({
	name: "VIcon",
	props: Ia(),
	setup(e, n) {
		let { attrs: r, slots: i } = n, a = se(), { themeClasses: o } = Bi(), { iconData: s } = Ma(() => a.value || e.icon), { sizeClasses: c } = Fa(e), { textColorClasses: l, textColorStyles: u } = Zi(() => e.color);
		return ji(() => {
			let n = i.default?.();
			n && (a.value = jr(n).filter((e) => e.type === t && e.children && typeof e.children == "string")[0]?.children);
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
function Ra(e, t) {
	let n = k(), r = se(!1);
	if (vr) {
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
var za = X({ reveal: {
	type: [Boolean, Object],
	default: !1
} }, "reveal");
function Ba(e) {
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
var Va = X({
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
	...hr(),
	...za(),
	...Pa(),
	...Vi({ tag: "div" }),
	...Ri()
}, "VProgressCircular"), Ha = Di()({
	name: "VProgressCircular",
	props: Va(),
	setup(e, t) {
		let { slots: n } = t, r = 2 * Math.PI * 20, i = k(), { themeClasses: o } = zi(e), { sizeClasses: s, sizeStyles: c } = Fa(e), { textColorClasses: u, textColorStyles: d } = Zi(() => e.color), { textColorClasses: p, textColorStyles: m } = Zi(() => e.bgColor), { intersectionRef: h, isIntersecting: g } = Ra(), { resizeRef: _, contentRect: v } = Mi(), { state: y, duration: b } = Ba(e), x = A(() => y.value === "initial" ? 0 : Dr(parseFloat(e.modelValue), 0, 100)), w = A(() => Number(e.width)), T = A(() => c.value ? Number(e.size) : v.value ? v.value.width : Math.max(w.value, 32)), E = A(() => 20 / (1 - w.value / T.value) * 2), D = A(() => w.value / T.value * E.value), ee = A(() => {
			let t = (100 - x.value) / 100 * r;
			return e.rounded && x.value > 0 && x.value < 100 ? Z(Math.min(r - .01, t + D.value)) : Z(t);
		}), O = a(() => {
			let t = Number(e.rotate);
			return e.rounded ? t + D.value / 2 / r * 360 : t;
		});
		return _e(() => {
			h.value = i.value, _.value = i.value;
		}), ji(() => f(e.tag, {
			ref: i,
			class: S([
				"v-progress-circular",
				{
					"v-progress-circular--indeterminate": !!e.indeterminate,
					"v-progress-circular--visible": g.value,
					"v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || br()),
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
}), Ua = X({ loading: [Boolean, String] }, "loader");
function Wa(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yi();
	return { loaderClasses: A(() => ({ [`${t}--loading`]: e.loading })) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/position.js
var Ga = [
	"static",
	"relative",
	"fixed",
	"absolute",
	"sticky"
], Ka = X({ position: {
	type: String,
	validator: (e) => Ga.includes(e)
} }, "position");
function qa(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yi();
	return { positionClasses: A(() => e.position ? `${t}--${e.position}` : void 0) };
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/router.js
function Ja() {
	let e = vi("useRoute");
	return a(() => e?.proxy?.$route);
}
function Ya(e, t) {
	let n = oe("RouterLink"), r = A(() => !!(e.href || e.to)), i = a(() => r?.value || Ir(t, "click") || Ir(e, "click"));
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
	}), s = a(() => e.to ? o : void 0), c = Ja(), l = a(() => s.value ? e.exact ? c.value ? s.value.isExactActive?.value && Ai(s.value.route.value.query, c.value.query) : s.value.isExactActive?.value ?? !1 : s.value.isActive?.value ?? !1 : !1), u = a(() => e.to ? s.value?.route.value.href : e.href);
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
var Xa = X({
	href: String,
	replace: Boolean,
	to: [String, Object],
	exact: Boolean
}, "router");
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/composables/selectLink.js
function Za(e, t) {
	ge(() => e.isActive?.value, (n) => {
		e.isLink.value && n != null && t && x(() => {
			t(n);
		});
	}, { immediate: !0 });
}
//#endregion
//#region node_modules/.pnpm/vuetify@3.12.5_vue@3.5.13/node_modules/vuetify/lib/directives/ripple/index.js
var Qa = Symbol("rippleStop"), $a = 80;
function eo(e, t) {
	e.style.transform = t, e.style.webkitTransform = t;
}
function to(e) {
	return e.constructor.name === "TouchEvent";
}
function no(e) {
	return e.constructor.name === "KeyboardEvent";
}
var ro = function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, i = 0;
	if (!no(e)) {
		let n = t.getBoundingClientRect(), a = to(e) ? e.touches[e.touches.length - 1] : e;
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
}, io = {
	show(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		if (!t?._ripple?.enabled) return;
		let r = document.createElement("span"), i = document.createElement("span");
		r.appendChild(i), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
		let { radius: a, scale: o, x: s, y: c, centerX: l, centerY: u } = ro(e, t, n), d = `${a * 2}px`;
		i.className = "v-ripple__animation", i.style.width = d, i.style.height = d, t.appendChild(r);
		let f = window.getComputedStyle(t);
		f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), eo(i, `translate(${s}, ${c}) scale3d(${o},${o},${o})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), eo(i, `translate(${l}, ${u}) scale3d(1,1,1)`);
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
function ao(e) {
	return e === void 0 || !!e;
}
function oo(e) {
	let t = {}, n = e.currentTarget;
	if (!(!n?._ripple || n._ripple.touched || e[Qa])) {
		if (e[Qa] = !0, to(e)) n._ripple.touched = !0, n._ripple.isTouch = !0;
		else if (n._ripple.isTouch) return;
		if (t.center = n._ripple.centered || no(e), n._ripple.class && (t.class = n._ripple.class), to(e)) {
			if (n._ripple.showTimerCommit) return;
			n._ripple.showTimerCommit = () => {
				io.show(e, n, t);
			}, n._ripple.showTimer = window.setTimeout(() => {
				n?._ripple?.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
			}, $a);
		} else io.show(e, n, t);
	}
}
function so(e) {
	e[Qa] = !0;
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
		}), io.hide(t);
	}
}
function co(e) {
	let t = e.currentTarget;
	t?._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
var lo = !1;
function uo(e, t) {
	!lo && t.includes(e.key) && (lo = !0, oo(e));
}
function fo(e) {
	lo = !1, $(e);
}
function po(e) {
	lo && (lo = !1, $(e));
}
function mo(e, t, n) {
	let { value: r, modifiers: i } = t, a = ao(r);
	a || io.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = i.center, e._ripple.circle = i.circle;
	let o = xr(r) ? r : {};
	o.class && (e._ripple.class = o.class);
	let s = o.keys ?? ["Enter", "Space"];
	if (e._ripple.keyDownHandler = (e) => uo(e, s), a && !n) {
		if (i.stop) {
			e.addEventListener("touchstart", so, { passive: !0 }), e.addEventListener("mousedown", so);
			return;
		}
		e.addEventListener("touchstart", oo, { passive: !0 }), e.addEventListener("touchend", $, { passive: !0 }), e.addEventListener("touchmove", co, { passive: !0 }), e.addEventListener("touchcancel", $), e.addEventListener("mousedown", oo), e.addEventListener("mouseup", $), e.addEventListener("mouseleave", $), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", fo), e.addEventListener("blur", po), e.addEventListener("dragstart", $, { passive: !0 });
	} else !a && n && ho(e);
}
function ho(e) {
	e.removeEventListener("touchstart", so), e.removeEventListener("mousedown", so), e.removeEventListener("touchstart", oo), e.removeEventListener("touchend", $), e.removeEventListener("touchmove", co), e.removeEventListener("touchcancel", $), e.removeEventListener("mousedown", oo), e.removeEventListener("mouseup", $), e.removeEventListener("mouseleave", $), e._ripple?.keyDownHandler && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", fo), e.removeEventListener("blur", po), e.removeEventListener("dragstart", $);
}
function go(e, t) {
	mo(e, t, !1);
}
function _o(e) {
	ho(e), delete e._ripple;
}
function vo(e, t) {
	t.value !== t.oldValue && mo(e, t, ao(t.oldValue));
}
var yo = {
	mounted: go,
	unmounted: _o,
	updated: vo
}, bo = X({
	active: {
		type: Boolean,
		default: void 0
	},
	activeColor: String,
	baseColor: String,
	symbol: {
		type: null,
		default: Ta
	},
	flat: Boolean,
	icon: [
		Boolean,
		String,
		Function,
		Object
	],
	prependIcon: Da,
	appendIcon: Da,
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
	...na(),
	...hr(),
	...ua(),
	...Ji(),
	...ia(),
	...ya(),
	...Ua(),
	...sa(),
	...Ka(),
	...ea(),
	...Xa(),
	...Pa(),
	...Vi({ tag: "button" }),
	...Ri(),
	...ma({ variant: "elevated" })
}, "VBtn"), xo = Di()({
	name: "VBtn",
	props: bo(),
	emits: { "group:selected": (e) => !0 },
	setup(e, t) {
		let { attrs: n, slots: r } = t, { themeClasses: i } = zi(e), { borderClasses: o } = ra(e), { densityClasses: s } = da(e), { dimensionStyles: c } = Yi(e), { elevationClasses: u } = aa(e), { loaderClasses: d } = Wa(e), { locationStyles: p } = ca(e), { positionClasses: m } = qa(e), { roundedClasses: h } = ta(e), { sizeClasses: g, sizeStyles: _ } = Fa(e), v = ba(e, e.symbol, !1), y = Ya(e, n), x = a(() => e.active === void 0 ? y.isRouterLink.value ? y.isActive?.value : v?.isSelected.value : e.active), S = A(() => x.value ? e.activeColor ?? e.color : e.color), { colorClasses: C, colorStyles: w, variantClasses: T } = ha(a(() => ({
			color: v?.isSelected.value && (!y.isLink.value || y.isActive?.value) || !v || y.isActive?.value ? S.value ?? e.baseColor : e.baseColor,
			variant: e.variant
		}))), E = a(() => v?.disabled.value || e.disabled), D = A(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), ee = a(() => {
			if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
		});
		function O(e) {
			E.value || y.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || n.target === "_blank") || (y.isRouterLink.value ? y.navigate.value?.(e) : v?.toggle());
		}
		return Za(y, v?.select), ji(() => {
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
				pa(!0, "v-btn"),
				!e.icon && n && l("span", {
					key: "prepend",
					class: "v-btn__prepend"
				}, [r.prepend ? f(qi, {
					key: "prepend-defaults",
					disabled: !e.prependIcon,
					defaults: { VIcon: { icon: e.prependIcon } }
				}, r.prepend) : f(La, {
					key: "prepend-icon",
					icon: e.prependIcon
				}, null)]),
				l("span", {
					class: "v-btn__content",
					"data-no-activator": ""
				}, [!r.default && S ? f(La, {
					key: "content-icon",
					icon: e.icon
				}, null) : f(qi, {
					key: "content-defaults",
					disabled: !S,
					defaults: { VIcon: { icon: e.icon } }
				}, { default: () => [r.default?.() ?? ce(e.text)] })]),
				!e.icon && a && l("span", {
					key: "append",
					class: "v-btn__append"
				}, [r.append ? f(qi, {
					key: "append-defaults",
					disabled: !e.appendIcon,
					defaults: { VIcon: { icon: e.appendIcon } }
				}, r.append) : f(La, {
					key: "append-icon",
					icon: e.appendIcon
				}, null)]),
				!!e.loading && l("span", {
					key: "loader",
					class: "v-btn__loader"
				}, [r.loader?.() ?? f(Ha, {
					color: typeof e.loading == "boolean" ? void 0 : e.loading,
					indeterminate: !0,
					width: "2"
				}, null)])
			] }), [[
				yo,
				!E.value && e.ripple,
				"",
				{ center: !!e.icon }
			]]);
		}), { group: v };
	}
}), So = { transform: "rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))" }, Co = {
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
}, wo = {
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
}, To = {
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
		let t = a(() => e.faIcon?.prefix || e.type), n = a(() => parseInt(e.rotate, 10)), r = a(() => Co[t.value] || Co.default), i = a(() => parseInt(e.size, 10) || r.value.size), o = a(() => e.faIcon ? `0 0 ${e.faIcon.icon[0]} ${e.faIcon.icon[1]}` : !1), s = a(() => o.value || e.viewbox || r.value.viewbox), c = a(() => {
			if (e.noStyles !== !0) return {
				...So,
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
		}, [g(wo, {
			path: e.path,
			type: t.value,
			pathString: l.value
		})]);
	}
};
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/function/identity.mjs
function Eo(e) {
	return e;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/function/noop.mjs
function Do() {}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/math/range.mjs
function Oo(e, t, n = 1) {
	if (t ?? (t = e, e = 0), !Number.isInteger(n) || n === 0) throw Error("The step value must be a non-zero integer.");
	let r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r);
	for (let t = 0; t < r; t++) i[t] = e + t * n;
	return i;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
function ko(e) {
	return e == null || typeof e != "object" && typeof e != "function";
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
function Ao(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function jo(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function Mo(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var No = "[object RegExp]", Po = "[object String]", Fo = "[object Number]", Io = "[object Boolean]", Lo = "[object Arguments]", Ro = "[object Symbol]", zo = "[object Date]", Bo = "[object Map]", Vo = "[object Set]", Ho = "[object Array]", Uo = "[object Function]", Wo = "[object ArrayBuffer]", Go = "[object Object]", Ko = "[object Error]", qo = "[object DataView]", Jo = "[object Uint8Array]", Yo = "[object Uint8ClampedArray]", Xo = "[object Uint16Array]", Zo = "[object Uint32Array]", Qo = "[object BigUint64Array]", $o = "[object Int8Array]", es = "[object Int16Array]", ts = "[object Int32Array]", ns = "[object BigInt64Array]", rs = "[object Float32Array]", is = "[object Float64Array]";
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/object/cloneDeepWith.mjs
function as(e, t, n, r = /* @__PURE__ */ new Map(), i = void 0) {
	let a = i?.(e, t, n, r);
	if (a !== void 0) return a;
	if (ko(e)) return e;
	if (r.has(e)) return r.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		r.set(e, t);
		for (let a = 0; a < e.length; a++) t[a] = as(e[a], a, n, r, i);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		r.set(e, t);
		for (let [a, o] of e) t.set(a, as(o, a, n, r, i));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		r.set(e, t);
		for (let a of e) t.add(as(a, void 0, n, r, i));
		return t;
	}
	if (typeof Buffer < "u" && Buffer.isBuffer(e)) return e.subarray();
	if (Ao(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		r.set(e, t);
		for (let a = 0; a < e.length; a++) t[a] = as(e[a], a, n, r, i);
		return t;
	}
	if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return r.set(e, t), os(t, e, n, r, i), t;
	}
	if (typeof File < "u" && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return r.set(e, t), os(t, e, n, r, i), t;
	}
	if (typeof Blob < "u" && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return r.set(e, t), os(t, e, n, r, i), t;
	}
	if (e instanceof Error) {
		let t = structuredClone(e);
		return r.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, t.constructor = e.constructor, os(t, e, n, r, i), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return r.set(e, t), os(t, e, n, r, i), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return r.set(e, t), os(t, e, n, r, i), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return r.set(e, t), os(t, e, n, r, i), t;
	}
	if (typeof e == "object" && ss(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return r.set(e, t), os(t, e, n, r, i), t;
	}
	return e;
}
function os(e, t, n = e, r, i) {
	let a = [...Object.keys(t), ...jo(t)];
	for (let o = 0; o < a.length; o++) {
		let s = a[o], c = Object.getOwnPropertyDescriptor(e, s);
		(c == null || c.writable) && (e[s] = as(t[s], s, n, r, i));
	}
}
function ss(e) {
	switch (Mo(e)) {
		case Lo:
		case Ho:
		case Wo:
		case qo:
		case Io:
		case zo:
		case rs:
		case is:
		case $o:
		case es:
		case ts:
		case Bo:
		case Fo:
		case Go:
		case No:
		case Vo:
		case Po:
		case Ro:
		case Jo:
		case Yo:
		case Xo:
		case Zo: return !0;
		default: return !1;
	}
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/object/cloneDeep.mjs
function cs(e) {
	return as(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function ls(e) {
	if (!e || typeof e != "object") return !1;
	let t = Object.getPrototypeOf(e);
	return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/object/pick.mjs
function us(e, t) {
	let n = {};
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		Object.hasOwn(e, i) && (n[i] = e[i]);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/_internal/isEqualsSameValueZero.mjs
function ds(e, t) {
	return e === t || Number.isNaN(e) && Number.isNaN(t);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isEqualWith.mjs
function fs(e, t, n) {
	return ps(e, t, void 0, void 0, void 0, void 0, n);
}
function ps(e, t, n, r, i, a, o) {
	let s = o(e, t, n, r, i, a);
	if (s !== void 0) return s;
	if (typeof e == typeof t) switch (typeof e) {
		case "bigint":
		case "string":
		case "boolean":
		case "symbol":
		case "undefined": return e === t;
		case "number": return e === t || Object.is(e, t);
		case "function": return e === t;
		case "object": return ms(e, t, a, o);
	}
	return ms(e, t, a, o);
}
function ms(e, t, n, r) {
	if (Object.is(e, t)) return !0;
	let i = Mo(e), a = Mo(t);
	if (i === "[object Arguments]" && (i = Go), a === "[object Arguments]" && (a = Go), i !== a) return !1;
	switch (i) {
		case Po: return e.toString() === t.toString();
		case Fo: return ds(e.valueOf(), t.valueOf());
		case Io:
		case zo:
		case Ro: return Object.is(e.valueOf(), t.valueOf());
		case No: return e.source === t.source && e.flags === t.flags;
		case Uo: return e === t;
	}
	n ??= /* @__PURE__ */ new Map();
	let o = n.get(e), s = n.get(t);
	if (o != null && s != null) return o === t;
	n.set(e, t), n.set(t, e);
	try {
		switch (i) {
			case Bo:
				if (e.size !== t.size) return !1;
				for (let [i, a] of e.entries()) if (!t.has(i) || !ps(a, t.get(i), i, e, t, n, r)) return !1;
				return !0;
			case Vo: {
				if (e.size !== t.size) return !1;
				let i = Array.from(e.values()), a = Array.from(t.values());
				for (let o = 0; o < i.length; o++) {
					let s = i[o], c = a.findIndex((i) => ps(s, i, void 0, e, t, n, r));
					if (c === -1) return !1;
					a.splice(c, 1);
				}
				return !0;
			}
			case Ho:
			case Jo:
			case Yo:
			case Xo:
			case Zo:
			case Qo:
			case $o:
			case es:
			case ts:
			case ns:
			case rs:
			case is:
				if (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t) || e.length !== t.length) return !1;
				for (let i = 0; i < e.length; i++) if (!ps(e[i], t[i], i, e, t, n, r)) return !1;
				return !0;
			case Wo: return e.byteLength === t.byteLength ? ms(new Uint8Array(e), new Uint8Array(t), n, r) : !1;
			case qo: return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : ms(new Uint8Array(e), new Uint8Array(t), n, r);
			case Ko: return e.name === t.name && e.message === t.message;
			case Go: {
				if (!(ms(e.constructor, t.constructor, n, r) || ls(e) && ls(t))) return !1;
				let i = [...Object.keys(e), ...jo(e)], a = [...Object.keys(t), ...jo(t)];
				if (i.length !== a.length) return !1;
				for (let a = 0; a < i.length; a++) {
					let o = i[a], s = e[o];
					if (!Object.hasOwn(t, o)) return !1;
					let c = t[o];
					if (!ps(s, c, o, e, t, n, r)) return !1;
				}
				return !0;
			}
			default: return !1;
		}
	} finally {
		n.delete(e), n.delete(t);
	}
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isEqual.mjs
function hs(e, t) {
	return fs(e, t, Do);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/predicate/isLength.mjs
function gs(e) {
	return Number.isSafeInteger(e) && e >= 0;
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
function _s(e) {
	return e != null && typeof e != "function" && gs(e.length);
}
//#endregion
//#region node_modules/.pnpm/es-toolkit@1.45.1/node_modules/es-toolkit/dist/compat/array/reduce.mjs
function vs(e, t = Eo, n) {
	if (!e) return n;
	let r, i = 0;
	_s(e) ? (r = Oo(0, e.length), n == null && e.length > 0 && (n = e[0], i += 1)) : (r = Object.keys(e), n ?? (n = e[r[0]], i += 1));
	for (let a = i; a < r.length; a++) {
		let i = r[a], o = e[i];
		n = t(n, o, i, e);
	}
	return n;
}
//#endregion
//#region resources/composables/useApiSync.js
var ys = (e, t) => vs(e, (e, n, r) => (hs(n, t[r]) || (e[r] = n), e), {}), bs = (e, t = {}) => {
	let n = t.updateItemRoute, r = t.updateItemMethod, i = t.itemValue, o = a(() => cs(e())), s = k(), c = a(() => cs(s.value)), l = be(null, 4e3), u = (e) => we({
		url: n,
		method: r,
		data: e
	}).then((e) => {
		t.onSuccess && typeof t.onSuccess == "function" && t.onSuccess(e.data);
	}).catch((e) => {
		throw l.value = e.response.data.message, t.onError && typeof t.onError == "function" && t.onError(e.response), Error(e);
	});
	ge(o, (e, t) => {
		if (t !== void 0) {
			let n = ys(e, t);
			Object.keys(n).length > 0 && (n[i] = e[i], u(n));
		}
		s.value = e;
	}, {
		immediate: !0,
		deep: !0
	});
	let { pause: d, resume: f } = Ce(c, (e, t) => {
		if (t !== void 0) {
			let n = ys(e, t);
			Object.keys(n).length > 0 && (n[i] = e[i], u(n).catch(async () => {
				d(), await x(), s.value = t, await x(), f();
			}));
		}
	}, { deep: !0 });
	return {
		data: s,
		error: l,
		update: u
	};
}, xs = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Ss = "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z", Cs = { class: "evo-sortable-treeview__item" }, ws = { class: "evo-sortable-treeview__item-content" }, Ts = {
	ref: "item",
	class: "evo-sortable-treeview__actions"
}, Es = { class: "evo-sortable-treeview__action-drag" }, Ds = { class: "evo-sortable-treeview__action-title" }, Os = {
	class: "d-flex align-center flex",
	ref: "columns"
}, ks = /* @__PURE__ */ Object.assign({ name: "EvoSortableTreeviewItem" }, {
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
		let t = e, n = fe(), r = me("columns"), i = _(De), u = a(() => i.config.value.itemTitle), p = a(() => i.config.value.itemValue), m = a(() => i.config.value.itemChildren), h = a(() => i.config.value.itemChildrenCount), { data: g, error: v } = bs(() => t.item, {
			...i.config.value,
			onSuccess: (e) => {
				i.emit("updated", e);
			},
			onError: (e) => {
				i.emit("error", e);
			}
		}), y = k([]), { width: b } = Se(r);
		ge(b, (e) => {
			if (!r.value) return [];
			y.value = Array.from(r.value?.children).map((e) => {
				let { width: t } = e.getBoundingClientRect();
				return t;
			});
		}, { immediate: !0 });
		let { registerItem: x } = _(De);
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
		return (e, n) => (O(), c("li", Cs, [l("div", ws, [l("div", Ts, [
			l("div", { class: S(["evo-sortable-treeview__action-expand", { "is-expanded": D.value }]) }, [w.value ? (O(), o(j(xo), {
				key: 0,
				icon: "",
				variant: "flat",
				size: "small",
				loading: T.value,
				onClick: ee
			}, {
				default: ve(() => [f(j(To), {
					class: "evo-sortable-treeview__expand-icon",
					size: "24",
					path: j(xs),
					rotate: D.value ? 90 : 0
				}, null, 8, ["path", "rotate"])]),
				_: 1
			}, 8, ["loading"])) : s("", !0)], 2),
			l("div", Es, [f(j(xo), {
				variant: "plain",
				size: "small",
				class: "drag-handle cursor-move"
			}, {
				default: ve(() => [f(j(To), { path: j(Ss) }, null, 8, ["path"])]),
				_: 1
			})]),
			l("div", Ds, [
				ae(e.$slots, "item.prepend-title", { item: t.item }),
				ae(e.$slots, "item.title", {
					item: t.item,
					title: t.item[u.value]
				}, () => [d(ce(t.item[u.value]), 1)]),
				ae(e.$slots, "item.append-title", { item: t.item })
			])
		], 512), l("div", Os, [ae(e.$slots, "item.columns", { item: j(g) })], 512)]), f(j(Te), { slots: e.$slots }, {
			default: ve(() => [f(As, {
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
}), As = /* @__PURE__ */ Object.assign({ name: "EvoSortableTreeviewChildren" }, {
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
		let n = pe(t, "modelValue"), r = t, i = _(De), l = a(() => i.config.value.itemValue), d = a(() => ({
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
		return (t, i) => (O(), o(j(Gi), null, {
			default: ve(() => [r.isExpanded || r.isEmpty ? (O(), o(j(pr), b({
				key: 0,
				modelValue: n.value,
				"onUpdate:modelValue": i[0] ||= (e) => n.value = e
			}, d.value), {
				default: ve(() => [(O(!0), c(e, null, ie(n.value, (e) => (O(), o(ks, {
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
}), js = {
	ref: "treeview",
	class: "evo-sortable-treeview"
}, Ms = { class: "evo-sortable-treeview__header" }, Ns = /* @__PURE__ */ Object.assign({ name: "EvoSortableTreeview" }, {
	__name: "SortableTreeview",
	props: {
		model: {
			type: [String, Object],
			required: !0
		},
		router: {
			type: Object,
			default: () => ({})
		}
	},
	emits: [
		"sorted",
		"updated",
		"error"
	],
	setup(t, { emit: n }) {
		let r = fe(), i = n, o = t, s = a(() => typeof o.model == "string" ? Ee().props[o.model] : o.model), u = a(() => s.value?.config ?? {}), d = a(() => s.value?.headers ?? []), p = a(() => s.value?.data ?? s.value), m = k(p.value);
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
		return te(De, {
			group: r,
			config: u,
			treeProps: a(() => us(o, [
				"itemChildren",
				"itemChildrenCount",
				"itemTitle",
				"itemValue"
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
		}), (t, n) => (O(), c("div", js, [l("header", Ms, [ae(t.$slots, "header", {}, () => [(O(!0), c(e, null, ie(d.value, (e, t) => (O(), c("div", {
			key: e.value,
			class: "evo-sortable-treeview__header--text",
			style: C({
				width: `${g.value[t]}px`,
				textAlign: e.align ?? "left"
			})
		}, ce(e.title), 5))), 128))])]), f(j(Te), { slots: t.$slots }, {
			default: ve(() => [f(As, {
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
export { Ns as EvoSortableTreeview };
