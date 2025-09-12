import { Fragment, Text, Transition, TransitionGroup, camelize, capitalize, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createSlots, createTextVNode, createVNode, defineComponent, effectScope, getCurrentInstance, h, inject, isProxy, isRef, mergeModels, mergeProps, nextTick, normalizeClass, normalizeStyle, onBeforeUnmount, onMounted, onScopeDispose, onUnmounted, onUpdated, openBlock, provide, reactive, readonly, ref, renderList, renderSlot, resolveDynamicComponent, shallowRef, toDisplayString, toRaw, toRef, toRefs, toValue, unref, useId, useModel, useTemplateRef, warn, watch, watchEffect, withCtx, withDirectives } from "vue";
import { refAutoReset, syncRef, useElementSize, watchPausable } from "@vueuse/core";
import axios from "axios";
import { cloneDeep, isEqual, pick, reduce } from "lodash-es";
import { ForwardSlots } from "@evomark/vue-forward-slots";
import { usePage } from "@inertiajs/vue3";
import './index.css';const SORTABLE_TREEVIEW = Symbol.for("sortable-treeview");
var rn = Object.defineProperty, Ne = Object.getOwnPropertySymbols, vt = Object.prototype.hasOwnProperty, bt = Object.prototype.propertyIsEnumerable, mt = (e, t, n) => t in e ? rn(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, fe = (e, t) => {
	for (var n in t ||= {}) vt.call(t, n) && mt(e, n, t[n]);
	if (Ne) for (var n of Ne(t)) bt.call(t, n) && mt(e, n, t[n]);
	return e;
}, Ve = (e, t) => {
	var n = {};
	for (var r in e) vt.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Ne) for (var r of Ne(e)) t.indexOf(r) < 0 && bt.call(e, r) && (n[r] = e[r]);
	return n;
}, Bt = "[vue-draggable-plus]: ";
function gn(e) {
	console.warn(Bt + e);
}
function mn(e) {
	console.error(Bt + e);
}
function wt(e, t, n) {
	return n >= 0 && n < e.length && e.splice(n, 0, e.splice(t, 1)[0]), e;
}
function vn(e) {
	return e.replace(/-(\w)/g, (e, t) => t ? t.toUpperCase() : "");
}
function bn(e) {
	return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[vn(n)] = e[n]), t), {});
}
function Et(e, t) {
	return Array.isArray(e) && e.splice(t, 1), e;
}
function St(e, t, n) {
	return Array.isArray(e) && e.splice(t, 0, n), e;
}
function yn(e) {
	return e === void 0;
}
function wn(e) {
	return typeof e == "string";
}
function Dt(e, t, n) {
	let r = e.children[n];
	e.insertBefore(t, r);
}
function qe(e) {
	e.parentNode && e.parentNode.removeChild(e);
}
function En(e, t = document) {
	let n = null;
	return n = typeof t?.querySelector == "function" ? (t?.querySelector)?.call(t, e) : document.querySelector(e), n || gn(`Element not found: ${e}`), n;
}
function Sn(e, t, n = null) {
	return function(...r) {
		return e.apply(n, r), t.apply(n, r);
	};
}
function Dn(e, t) {
	let n = fe({}, e);
	return Object.keys(t).forEach((r) => {
		n[r] ? n[r] = Sn(e[r], t[r]) : n[r] = t[r];
	}), n;
}
function _n(e) {
	return e instanceof HTMLElement;
}
function _t(e, t) {
	Object.keys(e).forEach((n) => {
		t(n, e[n]);
	});
}
function Tn(e) {
	return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
var Cn = Object.assign;
/**!
* Sortable 1.15.2
* @author	RubaXa   <trash@rubaxa.org>
* @author	owenm    <owen23355@gmail.com>
* @license MIT
*/
function Tt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function te(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Tt(Object(n), !0).forEach(function(t) {
			On(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Xe(e) {
	"@babel/helpers - typeof";
	return Xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Xe(e);
}
function On(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function re() {
	return re = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, re.apply(this, arguments);
}
function In(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function An(e, t) {
	if (e == null) return {};
	var n = In(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
var xn = "1.15.2";
function oe(e) {
	if (typeof window < "u" && window.navigator) return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var ie = oe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ae = oe(/Edge/i), Ct = oe(/firefox/i), _e = oe(/safari/i) && !oe(/chrome/i) && !oe(/android/i), kt = oe(/iP(ad|od|hone)/i), Ht = oe(/chrome/i) && oe(/android/i), Lt = {
	capture: !1,
	passive: !1
};
function D(e, t, n) {
	e.addEventListener(t, n, !ie && Lt);
}
function S(e, t, n) {
	e.removeEventListener(t, n, !ie && Lt);
}
function Le(e, t) {
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
function Nn(e) {
	return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Z(e, t, n, r) {
	if (e) {
		n ||= document;
		do {
			if (t != null && (t[0] === ">" ? e.parentNode === n && Le(e, t) : Le(e, t)) || r && e === n) return e;
			if (e === n) break;
		} while (e = Nn(e));
	}
	return null;
}
var Ot = /\s+/g;
function V(e, t, n) {
	e && t && (e.classList ? e.classList[n ? "add" : "remove"](t) : e.className = ((" " + e.className + " ").replace(Ot, " ").replace(" " + t + " ", " ") + (n ? " " + t : "")).replace(Ot, " "));
}
function h$1(e, t, n) {
	var r = e && e.style;
	if (r) {
		if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
		!(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), r[t] = n + (typeof n == "string" ? "" : "px");
	}
}
function ye(e, t) {
	var n = "";
	if (typeof e == "string") n = e;
	else do {
		var r = h$1(e, "transform");
		r && r !== "none" && (n = r + " " + n);
	} while (!t && (e = e.parentNode));
	var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
	return i && new i(n);
}
function Wt(e, t, n) {
	if (e) {
		var r = e.getElementsByTagName(t), i = 0, a = r.length;
		if (n) for (; i < a; i++) n(r[i], i);
		return r;
	}
	return [];
}
function ee() {
	return document.scrollingElement || document.documentElement;
}
function M(e, t, n, r, i) {
	if (!(!e.getBoundingClientRect && e !== window)) {
		var a, s, l, u, d, f, m;
		if (e !== window && e.parentNode && e !== ee() ? (a = e.getBoundingClientRect(), s = a.top, l = a.left, u = a.bottom, d = a.right, f = a.height, m = a.width) : (s = 0, l = 0, u = window.innerHeight, d = window.innerWidth, f = window.innerHeight, m = window.innerWidth), (t || n) && e !== window && (i ||= e.parentNode, !ie)) do
			if (i && i.getBoundingClientRect && (h$1(i, "transform") !== "none" || n && h$1(i, "position") !== "static")) {
				var _ = i.getBoundingClientRect();
				s -= _.top + parseInt(h$1(i, "border-top-width")), l -= _.left + parseInt(h$1(i, "border-left-width")), u = s + a.height, d = l + a.width;
				break;
			}
		while (i = i.parentNode);
		if (r && e !== window) {
			var b = ye(i || e), x = b && b.a, w = b && b.d;
			b && (s /= w, l /= x, m /= x, f /= w, u = s + f, d = l + m);
		}
		return {
			top: s,
			left: l,
			bottom: u,
			right: d,
			width: m,
			height: f
		};
	}
}
function It(e, t, n) {
	for (var r = ue(e, !0), i = M(e)[t]; r;) {
		var a = M(r)[n], s = void 0;
		if (s = i >= a, !s) return r;
		if (r === ee()) break;
		r = ue(r, !1);
	}
	return !1;
}
function we(e, t, n, r) {
	for (var i = 0, a = 0, s = e.children; a < s.length;) {
		if (s[a].style.display !== "none" && s[a] !== p.ghost && (r || s[a] !== p.dragged) && Z(s[a], n.draggable, e, !1)) {
			if (i === t) return s[a];
			i++;
		}
		a++;
	}
	return null;
}
function dt(e, t) {
	for (var n = e.lastElementChild; n && (n === p.ghost || h$1(n, "display") === "none" || t && !Le(n, t));) n = n.previousElementSibling;
	return n || null;
}
function K(e, t) {
	var n = 0;
	if (!e || !e.parentNode) return -1;
	for (; e = e.previousElementSibling;) e.nodeName.toUpperCase() !== "TEMPLATE" && e !== p.clone && (!t || Le(e, t)) && n++;
	return n;
}
function At(e) {
	var t = 0, n = 0, r = ee();
	if (e) do {
		var i = ye(e), a = i.a, s = i.d;
		t += e.scrollLeft * a, n += e.scrollTop * s;
	} while (e !== r && (e = e.parentNode));
	return [t, n];
}
function Pn(e, t) {
	for (var n in e) if (e.hasOwnProperty(n)) {
		for (var r in t) if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
	}
	return -1;
}
function ue(e, t) {
	if (!e || !e.getBoundingClientRect) return ee();
	var n = e, r = !1;
	do
		if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
			var i = h$1(n);
			if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
				if (!n.getBoundingClientRect || n === document.body) return ee();
				if (r || t) return n;
				r = !0;
			}
		}
	while (n = n.parentNode);
	return ee();
}
function Mn(e, t) {
	if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	return e;
}
function Ke(e, t) {
	return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Te;
function Gt(e, t) {
	return function() {
		if (!Te) {
			var n = arguments, r = this;
			n.length === 1 ? e.call(r, n[0]) : e.apply(r, n), Te = setTimeout(function() {
				Te = void 0;
			}, t);
		}
	};
}
function Fn() {
	clearTimeout(Te), Te = void 0;
}
function jt(e, t, n) {
	e.scrollLeft += t, e.scrollTop += n;
}
function zt(e) {
	var t = window.Polymer, n = window.jQuery || window.Zepto;
	return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
function Ut(e, t, n) {
	var r = {};
	return Array.from(e.children).forEach(function(i) {
		if (!(!Z(i, t.draggable, e, !1) || i.animated || i === n)) {
			var a = M(i);
			r.left = Math.min(r.left ?? Infinity, a.left), r.top = Math.min(r.top ?? Infinity, a.top), r.right = Math.max(r.right ?? -Infinity, a.right), r.bottom = Math.max(r.bottom ?? -Infinity, a.bottom);
		}
	}), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var q = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Rn() {
	var e = [], t;
	return {
		captureAnimationState: function() {
			e = [], this.options.animation && [].slice.call(this.el.children).forEach(function(t) {
				if (!(h$1(t, "display") === "none" || t === p.ghost)) {
					e.push({
						target: t,
						rect: M(t)
					});
					var n = te({}, e[e.length - 1].rect);
					if (t.thisAnimationDuration) {
						var r = ye(t, !0);
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
			e.splice(Pn(e, { target: t }), 1);
		},
		animateAll: function(n) {
			var r = this;
			if (!this.options.animation) {
				clearTimeout(t), typeof n == "function" && n();
				return;
			}
			var i = !1, a = 0;
			e.forEach(function(e) {
				var t = 0, n = e.target, s = n.fromRect, l = M(n), u = n.prevFromRect, d = n.prevToRect, f = e.rect, m = ye(n, !0);
				m && (l.top -= m.f, l.left -= m.e), n.toRect = l, n.thisAnimationDuration && Ke(u, l) && !Ke(s, l) && (f.top - l.top) / (f.left - l.left) === (s.top - l.top) / (s.left - l.left) && (t = Yn(f, u, d, r.options)), Ke(l, s) || (n.prevFromRect = s, n.prevToRect = l, t ||= r.options.animation, r.animate(n, f, l, t)), t && (i = !0, a = Math.max(a, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout(function() {
					n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null;
				}, t), n.thisAnimationDuration = t);
			}), clearTimeout(t), i ? t = setTimeout(function() {
				typeof n == "function" && n();
			}, a) : typeof n == "function" && n(), e = [];
		},
		animate: function(e, t, n, r) {
			if (r) {
				h$1(e, "transition", ""), h$1(e, "transform", "");
				var i = ye(this.el), a = i && i.a, s = i && i.d, l = (t.left - n.left) / (a || 1), u = (t.top - n.top) / (s || 1);
				e.animatingX = !!l, e.animatingY = !!u, h$1(e, "transform", "translate3d(" + l + "px," + u + "px,0)"), this.forRepaintDummy = Xn(e), h$1(e, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), h$1(e, "transform", "translate3d(0,0,0)"), typeof e.animated == "number" && clearTimeout(e.animated), e.animated = setTimeout(function() {
					h$1(e, "transition", ""), h$1(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1;
				}, r);
			}
		}
	};
}
function Xn(e) {
	return e.offsetWidth;
}
function Yn(e, t, n, r) {
	return Math.sqrt((t.top - e.top) ** 2 + (t.left - e.left) ** 2) / Math.sqrt((t.top - n.top) ** 2 + (t.left - n.left) ** 2) * r.animation;
}
var ge = [], Je = { initializeByDefault: !0 }, xe = {
	mount: function(e) {
		for (var t in Je) Je.hasOwnProperty(t) && !(t in e) && (e[t] = Je[t]);
		ge.forEach(function(t) {
			if (t.pluginName === e.pluginName) throw `Sortable: Cannot mount plugin ${e.pluginName} more than once`;
		}), ge.push(e);
	},
	pluginEvent: function(e, t, n) {
		var r = this;
		this.eventCanceled = !1, n.cancel = function() {
			r.eventCanceled = !0;
		};
		var i = e + "Global";
		ge.forEach(function(r) {
			t[r.pluginName] && (t[r.pluginName][i] && t[r.pluginName][i](te({ sortable: t }, n)), t.options[r.pluginName] && t[r.pluginName][e] && t[r.pluginName][e](te({ sortable: t }, n)));
		});
	},
	initializePlugins: function(e, t, n, r) {
		for (var i in ge.forEach(function(r) {
			var i = r.pluginName;
			if (!(!e.options[i] && !r.initializeByDefault)) {
				var a = new r(e, t, e.options);
				a.sortable = e, a.options = e.options, e[i] = a, re(n, a.defaults);
			}
		}), e.options) if (e.options.hasOwnProperty(i)) {
			var a = this.modifyOption(e, i, e.options[i]);
			a !== void 0 && (e.options[i] = a);
		}
	},
	getEventProperties: function(e, t) {
		var n = {};
		return ge.forEach(function(r) {
			typeof r.eventProperties == "function" && re(n, r.eventProperties.call(t[r.pluginName], e));
		}), n;
	},
	modifyOption: function(e, t, n) {
		var r;
		return ge.forEach(function(i) {
			e[i.pluginName] && i.optionListeners && typeof i.optionListeners[t] == "function" && (r = i.optionListeners[t].call(e[i.pluginName], n));
		}), r;
	}
};
function Bn(e) {
	var t = e.sortable, n = e.rootEl, r = e.name, i = e.targetEl, a = e.cloneEl, s = e.toEl, l = e.fromEl, u = e.oldIndex, d = e.newIndex, f = e.oldDraggableIndex, m = e.newDraggableIndex, _ = e.originalEvent, b = e.putSortable, x = e.extraEventProperties;
	if (t ||= n && n[q], t) {
		var w, T = t.options, E = "on" + r.charAt(0).toUpperCase() + r.substr(1);
		window.CustomEvent && !ie && !Ae ? w = new CustomEvent(r, {
			bubbles: !0,
			cancelable: !0
		}) : (w = document.createEvent("Event"), w.initEvent(r, !0, !0)), w.to = s || n, w.from = l || n, w.item = i || n, w.clone = a, w.oldIndex = u, w.newIndex = d, w.oldDraggableIndex = f, w.newDraggableIndex = m, w.originalEvent = _, w.pullMode = b ? b.lastPutMode : void 0;
		var k = te(te({}, x), xe.getEventProperties(r, t));
		for (var A in k) w[A] = k[A];
		n && n.dispatchEvent(w), T[E] && T[E].call(t, w);
	}
}
var kn = ["evt"], G = function(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.evt, i = An(n, kn);
	xe.pluginEvent.bind(p)(e, t, te({
		dragEl: c,
		parentEl: I,
		ghostEl: g$1,
		rootEl: C,
		nextEl: pe,
		lastDownEl: Ye,
		cloneEl: O,
		cloneHidden: se,
		dragStarted: Ee,
		putSortable: X,
		activeSortable: p.active,
		originalEvent: r,
		oldIndex: be,
		oldDraggableIndex: Ce,
		newIndex: $,
		newDraggableIndex: le,
		hideGhostForTarget: Kt,
		unhideGhostForTarget: Jt,
		cloneNowHidden: function() {
			se = !0;
		},
		cloneNowShown: function() {
			se = !1;
		},
		dispatchSortableEvent: function(e) {
			W({
				sortable: t,
				name: e,
				originalEvent: r
			});
		}
	}, i));
};
function W(e) {
	Bn(te({
		putSortable: X,
		cloneEl: O,
		targetEl: c,
		rootEl: C,
		oldIndex: be,
		oldDraggableIndex: Ce,
		newIndex: $,
		newDraggableIndex: le
	}, e));
}
var c, I, g$1, C, pe, Ye, O, se, be, $, Ce, le, Pe, X, ve = !1, We = !1, Ge = [], de, J, Ze, Qe, xt, Nt, Ee, me, Oe, Ie = !1, Me = !1, Be, B, et = [], at = !1, je = [], Ue = typeof document < "u", Fe = kt, Pt = Ae || ie ? "cssFloat" : "float", Hn = Ue && !Ht && !kt && "draggable" in document.createElement("div"), Vt = function() {
	if (Ue) {
		if (ie) return !1;
		var e = document.createElement("x");
		return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
	}
}(), $t = function(e, t) {
	var n = h$1(e), r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), i = we(e, 0, t), a = we(e, 1, t), s = i && h$1(i), l = a && h$1(a), u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + M(i).width, d = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + M(a).width;
	if (n.display === "flex") return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
	if (n.display === "grid") return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
	if (i && s.float && s.float !== "none") {
		var f = s.float === "left" ? "left" : "right";
		return a && (l.clear === "both" || l.clear === f) ? "vertical" : "horizontal";
	}
	return i && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || u >= r && n[Pt] === "none" || a && n[Pt] === "none" && u + d > r) ? "vertical" : "horizontal";
}, Ln = function(e, t, n) {
	var r = n ? e.left : e.top, i = n ? e.right : e.bottom, a = n ? e.width : e.height, s = n ? t.left : t.top, l = n ? t.right : t.bottom, u = n ? t.width : t.height;
	return r === s || i === l || r + a / 2 === s + u / 2;
}, Wn = function(e, t) {
	var n;
	return Ge.some(function(r) {
		var i = r[q].options.emptyInsertThreshold;
		if (!(!i || dt(r))) {
			var a = M(r), s = e >= a.left - i && e <= a.right + i, l = t >= a.top - i && t <= a.bottom + i;
			if (s && l) return n = r;
		}
	}), n;
}, qt = function(e) {
	function t(e, n) {
		return function(r, i, a, s) {
			var l = r.options.group.name && i.options.group.name && r.options.group.name === i.options.group.name;
			if (e == null && (n || l)) return !0;
			if (e == null || e === !1) return !1;
			if (n && e === "clone") return e;
			if (typeof e == "function") return t(e(r, i, a, s), n)(r, i, a, s);
			var u = (n ? r : i).options.group.name;
			return e === !0 || typeof e == "string" && e === u || e.join && e.indexOf(u) > -1;
		};
	}
	var n = {}, r = e.group;
	(!r || Xe(r) != "object") && (r = { name: r }), n.name = r.name, n.checkPull = t(r.pull, !0), n.checkPut = t(r.put), n.revertClone = r.revertClone, e.group = n;
}, Kt = function() {
	!Vt && g$1 && h$1(g$1, "display", "none");
}, Jt = function() {
	!Vt && g$1 && h$1(g$1, "display", "");
};
Ue && !Ht && document.addEventListener("click", function(e) {
	if (We) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), We = !1, !1;
}, !0);
var he = function(e) {
	if (c) {
		e = e.touches ? e.touches[0] : e;
		var t = Wn(e.clientX, e.clientY);
		if (t) {
			var n = {};
			for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
			n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[q]._onDragOver(n);
		}
	}
}, Gn = function(e) {
	c && c.parentNode[q]._isOutsideThisEl(e.target);
};
function p(e, t) {
	if (!(e && e.nodeType && e.nodeType === 1)) throw `Sortable: \`el\` must be an HTMLElement, not ${{}.toString.call(e)}`;
	this.el = e, this.options = t = re({}, t), e[q] = this;
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
			return $t(e, this.options);
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
		supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && !_e,
		emptyInsertThreshold: 5
	};
	for (var r in xe.initializePlugins(this, e, n), n) !(r in t) && (t[r] = n[r]);
	for (var i in qt(t), this) i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
	this.nativeDraggable = t.forceFallback ? !1 : Hn, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? D(e, "pointerdown", this._onTapStart) : (D(e, "mousedown", this._onTapStart), D(e, "touchstart", this._onTapStart)), this.nativeDraggable && (D(e, "dragover", this), D(e, "dragenter", this)), Ge.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), re(this, Rn());
}
p.prototype = {
	constructor: p,
	_isOutsideThisEl: function(e) {
		!this.el.contains(e) && e !== this.el && (me = null);
	},
	_getDirection: function(e, t) {
		return typeof this.options.direction == "function" ? this.options.direction.call(this, e, t, c) : this.options.direction;
	},
	_onTapStart: function(e) {
		if (e.cancelable) {
			var t = this, n = this.el, r = this.options, i = r.preventOnFilter, a = e.type, s = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (s || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, d = r.filter;
			if (Jn(n), !c && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || r.disabled) && !u.isContentEditable && !(!this.nativeDraggable && _e && l && l.tagName.toUpperCase() === "SELECT") && (l = Z(l, r.draggable, n, !1), !(l && l.animated) && Ye !== l)) {
				if (be = K(l), Ce = K(l, r.draggable), typeof d == "function") {
					if (d.call(this, e, l, this)) {
						W({
							sortable: t,
							rootEl: u,
							name: "filter",
							targetEl: l,
							toEl: n,
							fromEl: n
						}), G("filter", t, { evt: e }), i && e.cancelable && e.preventDefault();
						return;
					}
				} else if (d && (d = d.split(",").some(function(r) {
					if (r = Z(u, r.trim(), n, !1), r) return W({
						sortable: t,
						rootEl: r,
						name: "filter",
						targetEl: l,
						fromEl: n,
						toEl: n
					}), G("filter", t, { evt: e }), !0;
				}), d)) {
					i && e.cancelable && e.preventDefault();
					return;
				}
				r.handle && !Z(u, r.handle, n, !1) || this._prepareDragStart(e, s, l);
			}
		}
	},
	_prepareDragStart: function(e, t, n) {
		var r = this, i = r.el, a = r.options, s = i.ownerDocument, l;
		if (n && !c && n.parentNode === i) {
			var u = M(n);
			if (C = i, c = n, I = c.parentNode, pe = c.nextSibling, Ye = n, Pe = a.group, p.dragged = c, de = {
				target: c,
				clientX: (t || e).clientX,
				clientY: (t || e).clientY
			}, xt = de.clientX - u.left, Nt = de.clientY - u.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, c.style["will-change"] = "all", l = function() {
				if (G("delayEnded", r, { evt: e }), p.eventCanceled) {
					r._onDrop();
					return;
				}
				r._disableDelayedDragEvents(), !Ct && r.nativeDraggable && (c.draggable = !0), r._triggerDragStart(e, t), W({
					sortable: r,
					name: "choose",
					originalEvent: e
				}), V(c, a.chosenClass, !0);
			}, a.ignore.split(",").forEach(function(e) {
				Wt(c, e.trim(), tt);
			}), D(s, "dragover", he), D(s, "mousemove", he), D(s, "touchmove", he), D(s, "mouseup", r._onDrop), D(s, "touchend", r._onDrop), D(s, "touchcancel", r._onDrop), Ct && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), G("delayStart", this, { evt: e }), a.delay && (!a.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Ae || ie))) {
				if (p.eventCanceled) {
					this._onDrop();
					return;
				}
				D(s, "mouseup", r._disableDelayedDrag), D(s, "touchend", r._disableDelayedDrag), D(s, "touchcancel", r._disableDelayedDrag), D(s, "mousemove", r._delayedDragTouchMoveHandler), D(s, "touchmove", r._delayedDragTouchMoveHandler), a.supportPointer && D(s, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(l, a.delay);
			} else l();
		}
	},
	_delayedDragTouchMoveHandler: function(e) {
		var t = e.touches ? e.touches[0] : e;
		Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
	},
	_disableDelayedDrag: function() {
		c && tt(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
	},
	_disableDelayedDragEvents: function() {
		var e = this.el.ownerDocument;
		S(e, "mouseup", this._disableDelayedDrag), S(e, "touchend", this._disableDelayedDrag), S(e, "touchcancel", this._disableDelayedDrag), S(e, "mousemove", this._delayedDragTouchMoveHandler), S(e, "touchmove", this._delayedDragTouchMoveHandler), S(e, "pointermove", this._delayedDragTouchMoveHandler);
	},
	_triggerDragStart: function(e, t) {
		t ||= e.pointerType == "touch" && e, !this.nativeDraggable || t ? this.options.supportPointer ? D(document, "pointermove", this._onTouchMove) : t ? D(document, "touchmove", this._onTouchMove) : D(document, "mousemove", this._onTouchMove) : (D(c, "dragend", this), D(C, "dragstart", this._onDragStart));
		try {
			document.selection ? ke(function() {
				document.selection.empty();
			}) : window.getSelection().removeAllRanges();
		} catch {}
	},
	_dragStarted: function(e, t) {
		if (ve = !1, C && c) {
			G("dragStarted", this, { evt: t }), this.nativeDraggable && D(document, "dragover", Gn);
			var n = this.options;
			!e && V(c, n.dragClass, !1), V(c, n.ghostClass, !0), p.active = this, e && this._appendGhost(), W({
				sortable: this,
				name: "start",
				originalEvent: t
			});
		} else this._nulling();
	},
	_emulateDragOver: function() {
		if (J) {
			this._lastX = J.clientX, this._lastY = J.clientY, Kt();
			for (var e = document.elementFromPoint(J.clientX, J.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(J.clientX, J.clientY), e !== t);) t = e;
			if (c.parentNode[q]._isOutsideThisEl(e), t) do {
				if (t[q]) {
					var n = void 0;
					if (n = t[q]._onDragOver({
						clientX: J.clientX,
						clientY: J.clientY,
						target: e,
						rootEl: t
					}), n && !this.options.dragoverBubble) break;
				}
				e = t;
			} while (t = t.parentNode);
			Jt();
		}
	},
	_onTouchMove: function(e) {
		if (de) {
			var t = this.options, n = t.fallbackTolerance, r = t.fallbackOffset, i = e.touches ? e.touches[0] : e, a = g$1 && ye(g$1, !0), s = g$1 && a && a.a, l = g$1 && a && a.d, u = Fe && B && At(B), d = (i.clientX - de.clientX + r.x) / (s || 1) + (u ? u[0] - et[0] : 0) / (s || 1), f = (i.clientY - de.clientY + r.y) / (l || 1) + (u ? u[1] - et[1] : 0) / (l || 1);
			if (!p.active && !ve) {
				if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
				this._onDragStart(e, !0);
			}
			if (g$1) {
				a ? (a.e += d - (Ze || 0), a.f += f - (Qe || 0)) : a = {
					a: 1,
					b: 0,
					c: 0,
					d: 1,
					e: d,
					f
				};
				var m = `matrix(${a.a},${a.b},${a.c},${a.d},${a.e},${a.f})`;
				h$1(g$1, "webkitTransform", m), h$1(g$1, "mozTransform", m), h$1(g$1, "msTransform", m), h$1(g$1, "transform", m), Ze = d, Qe = f, J = i;
			}
			e.cancelable && e.preventDefault();
		}
	},
	_appendGhost: function() {
		if (!g$1) {
			var e = this.options.fallbackOnBody ? document.body : C, t = M(c, !0, Fe, !0, e), n = this.options;
			if (Fe) {
				for (B = e; h$1(B, "position") === "static" && h$1(B, "transform") === "none" && B !== document;) B = B.parentNode;
				B !== document.body && B !== document.documentElement ? (B === document && (B = ee()), t.top += B.scrollTop, t.left += B.scrollLeft) : B = ee(), et = At(B);
			}
			g$1 = c.cloneNode(!0), V(g$1, n.ghostClass, !1), V(g$1, n.fallbackClass, !0), V(g$1, n.dragClass, !0), h$1(g$1, "transition", ""), h$1(g$1, "transform", ""), h$1(g$1, "box-sizing", "border-box"), h$1(g$1, "margin", 0), h$1(g$1, "top", t.top), h$1(g$1, "left", t.left), h$1(g$1, "width", t.width), h$1(g$1, "height", t.height), h$1(g$1, "opacity", "0.8"), h$1(g$1, "position", Fe ? "absolute" : "fixed"), h$1(g$1, "zIndex", "100000"), h$1(g$1, "pointerEvents", "none"), p.ghost = g$1, e.appendChild(g$1), h$1(g$1, "transform-origin", xt / parseInt(g$1.style.width) * 100 + "% " + Nt / parseInt(g$1.style.height) * 100 + "%");
		}
	},
	_onDragStart: function(e, t) {
		var n = this, r = e.dataTransfer, i = n.options;
		if (G("dragStart", this, { evt: e }), p.eventCanceled) {
			this._onDrop();
			return;
		}
		G("setupClone", this), p.eventCanceled || (O = zt(c), O.removeAttribute("id"), O.draggable = !1, O.style["will-change"] = "", this._hideClone(), V(O, this.options.chosenClass, !1), p.clone = O), n.cloneId = ke(function() {
			G("clone", n), !p.eventCanceled && (n.options.removeCloneOnHide || C.insertBefore(O, c), n._hideClone(), W({
				sortable: n,
				name: "clone"
			}));
		}), !t && V(c, i.dragClass, !0), t ? (We = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (S(document, "mouseup", n._onDrop), S(document, "touchend", n._onDrop), S(document, "touchcancel", n._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(n, r, c)), D(document, "drop", n), h$1(c, "transform", "translateZ(0)")), ve = !0, n._dragStartId = ke(n._dragStarted.bind(n, t, e)), D(document, "selectstart", n), Ee = !0, _e && h$1(document.body, "user-select", "none");
	},
	_onDragOver: function(e) {
		var t = this.el, n = e.target, r, i, a, s = this.options, l = s.group, u = p.active, d = Pe === l, f = s.sort, m = X || u, _, b = this, x = !1;
		if (at) return;
		function w(s, l) {
			G(s, b, te({
				evt: e,
				isOwner: d,
				axis: _ ? "vertical" : "horizontal",
				revert: a,
				dragRect: r,
				targetRect: i,
				canSort: f,
				fromSortable: m,
				target: n,
				completed: E,
				onMove: function(n, i) {
					return Re(C, t, c, r, n, M(n), e, i);
				},
				changed: k
			}, l));
		}
		function T() {
			w("dragOverAnimationCapture"), b.captureAnimationState(), b !== m && m.captureAnimationState();
		}
		function E(r) {
			return w("dragOverCompleted", { insertion: r }), r && (d ? u._hideClone() : u._showClone(b), b !== m && (V(c, X ? X.options.ghostClass : u.options.ghostClass, !1), V(c, s.ghostClass, !0)), X !== b && b !== p.active ? X = b : b === p.active && X && (X = null), m === b && (b._ignoreWhileAnimating = n), b.animateAll(function() {
				w("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
			}), b !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === c && !c.animated || n === t && !n.animated) && (me = null), !s.dragoverBubble && !e.rootEl && n !== document && (c.parentNode[q]._isOutsideThisEl(e.target), !r && he(e)), !s.dragoverBubble && e.stopPropagation && e.stopPropagation(), x = !0;
		}
		function k() {
			$ = K(c), le = K(c, s.draggable), W({
				sortable: b,
				name: "change",
				toEl: t,
				newIndex: $,
				newDraggableIndex: le,
				originalEvent: e
			});
		}
		if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), n = Z(n, s.draggable, t, !0), w("dragOver"), p.eventCanceled) return x;
		if (c.contains(e.target) || n.animated && n.animatingX && n.animatingY || b._ignoreWhileAnimating === n) return E(!1);
		if (We = !1, u && !s.disabled && (d ? f || (a = I !== C) : X === this || (this.lastPutMode = Pe.checkPull(this, u, c, e)) && l.checkPut(this, u, c, e))) {
			if (_ = this._getDirection(e, n) === "vertical", r = M(c), w("dragOverValid"), p.eventCanceled) return x;
			if (a) return I = C, T(), this._hideClone(), w("revert"), p.eventCanceled || (pe ? C.insertBefore(c, pe) : C.appendChild(c)), E(!0);
			var A = dt(t, s.draggable);
			if (!A || Vn(e, _, this) && !A.animated) {
				if (A === c) return E(!1);
				if (A && t === e.target && (n = A), n && (i = M(n)), Re(C, t, c, r, n, i, e, !!n) !== !1) return T(), A && A.nextSibling ? t.insertBefore(c, A.nextSibling) : t.appendChild(c), I = t, k(), E(!0);
			} else if (A && Un(e, _, this)) {
				var j = we(t, 0, s, !0);
				if (j === c) return E(!1);
				if (n = j, i = M(n), Re(C, t, c, r, n, i, e, !1) !== !1) return T(), t.insertBefore(c, j), I = t, k(), E(!0);
			} else if (n.parentNode === t) {
				i = M(n);
				var N = 0, F, L = c.parentNode !== t, R = !Ln(c.animated && c.toRect || r, n.animated && n.toRect || i, _), z = _ ? "top" : "left", H = It(n, "top", "top") || It(c, "top", "top"), U = H ? H.scrollTop : void 0;
				me !== n && (F = i[z], Ie = !1, Me = !R && s.invertSwap || L), N = $n(e, n, i, _, R ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, Me, me === n);
				var Y;
				if (N !== 0) {
					var Gl = K(c);
					do
						Gl -= N, Y = I.children[Gl];
					while (Y && (h$1(Y, "display") === "none" || Y === g$1));
				}
				if (N === 0 || Y === n) return E(!1);
				me = n, Oe = N;
				var Q = n.nextElementSibling, Kl = !1;
				Kl = N === 1;
				var ql = Re(C, t, c, r, n, i, e, Kl);
				if (ql !== !1) return (ql === 1 || ql === -1) && (Kl = ql === 1), at = !0, setTimeout(zn, 30), T(), Kl && !Q ? t.appendChild(c) : n.parentNode.insertBefore(c, Kl ? Q : n), H && jt(H, 0, U - H.scrollTop), I = c.parentNode, F !== void 0 && !Me && (Be = Math.abs(F - M(n)[z])), k(), E(!0);
			}
			if (t.contains(c)) return E(!1);
		}
		return !1;
	},
	_ignoreWhileAnimating: null,
	_offMoveEvents: function() {
		S(document, "mousemove", this._onTouchMove), S(document, "touchmove", this._onTouchMove), S(document, "pointermove", this._onTouchMove), S(document, "dragover", he), S(document, "mousemove", he), S(document, "touchmove", he);
	},
	_offUpEvents: function() {
		var e = this.el.ownerDocument;
		S(e, "mouseup", this._onDrop), S(e, "touchend", this._onDrop), S(e, "pointerup", this._onDrop), S(e, "touchcancel", this._onDrop), S(document, "selectstart", this);
	},
	_onDrop: function(e) {
		var t = this.el, n = this.options;
		if ($ = K(c), le = K(c, n.draggable), G("drop", this, { evt: e }), I = c && c.parentNode, $ = K(c), le = K(c, n.draggable), p.eventCanceled) {
			this._nulling();
			return;
		}
		ve = !1, Me = !1, Ie = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), lt(this.cloneId), lt(this._dragStartId), this.nativeDraggable && (S(document, "drop", this), S(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), _e && h$1(document.body, "user-select", ""), h$1(c, "transform", ""), e && (Ee && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), g$1 && g$1.parentNode && g$1.parentNode.removeChild(g$1), (C === I || X && X.lastPutMode !== "clone") && O && O.parentNode && O.parentNode.removeChild(O), c && (this.nativeDraggable && S(c, "dragend", this), tt(c), c.style["will-change"] = "", Ee && !ve && V(c, X ? X.options.ghostClass : this.options.ghostClass, !1), V(c, this.options.chosenClass, !1), W({
			sortable: this,
			name: "unchoose",
			toEl: I,
			newIndex: null,
			newDraggableIndex: null,
			originalEvent: e
		}), C === I ? $ !== be && $ >= 0 && (W({
			sortable: this,
			name: "update",
			toEl: I,
			originalEvent: e
		}), W({
			sortable: this,
			name: "sort",
			toEl: I,
			originalEvent: e
		})) : ($ >= 0 && (W({
			rootEl: I,
			name: "add",
			toEl: I,
			fromEl: C,
			originalEvent: e
		}), W({
			sortable: this,
			name: "remove",
			toEl: I,
			originalEvent: e
		}), W({
			rootEl: I,
			name: "sort",
			toEl: I,
			fromEl: C,
			originalEvent: e
		}), W({
			sortable: this,
			name: "sort",
			toEl: I,
			originalEvent: e
		})), X && X.save()), p.active && (($ == null || $ === -1) && ($ = be, le = Ce), W({
			sortable: this,
			name: "end",
			toEl: I,
			originalEvent: e
		}), this.save()))), this._nulling();
	},
	_nulling: function() {
		G("nulling", this), C = c = I = g$1 = pe = O = Ye = se = de = J = Ee = $ = le = be = Ce = me = Oe = X = Pe = p.dragged = p.ghost = p.clone = p.active = null, je.forEach(function(e) {
			e.checked = !0;
		}), je.length = Ze = Qe = 0;
	},
	handleEvent: function(e) {
		switch (e.type) {
			case "drop":
			case "dragend":
				this._onDrop(e);
				break;
			case "dragenter":
			case "dragover":
				c && (this._onDragOver(e), jn(e));
				break;
			case "selectstart":
				e.preventDefault();
				break;
		}
	},
	toArray: function() {
		for (var e = [], t, n = this.el.children, r = 0, i = n.length, a = this.options; r < i; r++) t = n[r], Z(t, a.draggable, this.el, !1) && e.push(t.getAttribute(a.dataIdAttr) || Kn(t));
		return e;
	},
	sort: function(e, t) {
		var n = {}, r = this.el;
		this.toArray().forEach(function(e, t) {
			var i = r.children[t];
			Z(i, this.options.draggable, r, !1) && (n[e] = i);
		}, this), t && this.captureAnimationState(), e.forEach(function(e) {
			n[e] && (r.removeChild(n[e]), r.appendChild(n[e]));
		}), t && this.animateAll();
	},
	save: function() {
		var e = this.options.store;
		e && e.set && e.set(this);
	},
	closest: function(e, t) {
		return Z(e, t || this.options.draggable, this.el, !1);
	},
	option: function(e, t) {
		var n = this.options;
		if (t === void 0) return n[e];
		var r = xe.modifyOption(this, e, t);
		r === void 0 ? n[e] = t : n[e] = r, e === "group" && qt(n);
	},
	destroy: function() {
		G("destroy", this);
		var e = this.el;
		e[q] = null, S(e, "mousedown", this._onTapStart), S(e, "touchstart", this._onTapStart), S(e, "pointerdown", this._onTapStart), this.nativeDraggable && (S(e, "dragover", this), S(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(e) {
			e.removeAttribute("draggable");
		}), this._onDrop(), this._disableDelayedDragEvents(), Ge.splice(Ge.indexOf(this.el), 1), this.el = e = null;
	},
	_hideClone: function() {
		if (!se) {
			if (G("hideClone", this), p.eventCanceled) return;
			h$1(O, "display", "none"), this.options.removeCloneOnHide && O.parentNode && O.parentNode.removeChild(O), se = !0;
		}
	},
	_showClone: function(e) {
		if (e.lastPutMode !== "clone") {
			this._hideClone();
			return;
		}
		if (se) {
			if (G("showClone", this), p.eventCanceled) return;
			c.parentNode == C && !this.options.group.revertClone ? C.insertBefore(O, c) : pe ? C.insertBefore(O, pe) : C.appendChild(O), this.options.group.revertClone && this.animate(c, O), h$1(O, "display", ""), se = !1;
		}
	}
};
function jn(e) {
	e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Re(e, t, n, r, i, a, s, l) {
	var u, d = e[q], f = d.options.onMove, m;
	return window.CustomEvent && !ie && !Ae ? u = new CustomEvent("move", {
		bubbles: !0,
		cancelable: !0
	}) : (u = document.createEvent("Event"), u.initEvent("move", !0, !0)), u.to = t, u.from = e, u.dragged = n, u.draggedRect = r, u.related = i || t, u.relatedRect = a || M(t), u.willInsertAfter = l, u.originalEvent = s, e.dispatchEvent(u), f && (m = f.call(d, u, s)), m;
}
function tt(e) {
	e.draggable = !1;
}
function zn() {
	at = !1;
}
function Un(e, t, n) {
	var r = M(we(n.el, 0, n.options, !0)), i = Ut(n.el, n.options, g$1), a = 10;
	return t ? e.clientX < i.left - a || e.clientY < r.top && e.clientX < r.right : e.clientY < i.top - a || e.clientY < r.bottom && e.clientX < r.left;
}
function Vn(e, t, n) {
	var r = M(dt(n.el, n.options.draggable)), i = Ut(n.el, n.options, g$1), a = 10;
	return t ? e.clientX > i.right + a || e.clientY > r.bottom && e.clientX > r.left : e.clientY > i.bottom + a || e.clientX > r.right && e.clientY > r.top;
}
function $n(e, t, n, r, i, a, s, l) {
	var u = r ? e.clientY : e.clientX, d = r ? n.height : n.width, f = r ? n.top : n.left, m = r ? n.bottom : n.right, _ = !1;
	if (!s) {
		if (l && Be < d * i) {
			if (!Ie && (Oe === 1 ? u > f + d * a / 2 : u < m - d * a / 2) && (Ie = !0), Ie) _ = !0;
			else if (Oe === 1 ? u < f + Be : u > m - Be) return -Oe;
		} else if (u > f + d * (1 - i) / 2 && u < m - d * (1 - i) / 2) return qn(t);
	}
	return _ ||= s, _ && (u < f + d * a / 2 || u > m - d * a / 2) ? u > f + d / 2 ? 1 : -1 : 0;
}
function qn(e) {
	return K(c) < K(e) ? 1 : -1;
}
function Kn(e) {
	for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--;) r += t.charCodeAt(n);
	return r.toString(36);
}
function Jn(e) {
	je.length = 0;
	for (var t = e.getElementsByTagName("input"), n = t.length; n--;) {
		var r = t[n];
		r.checked && je.push(r);
	}
}
function ke(e) {
	return setTimeout(e, 0);
}
function lt(e) {
	return clearTimeout(e);
}
Ue && D(document, "touchmove", function(e) {
	(p.active || ve) && e.cancelable && e.preventDefault();
}), p.utils = {
	on: D,
	off: S,
	css: h$1,
	find: Wt,
	is: function(e, t) {
		return !!Z(e, t, e, !1);
	},
	extend: Mn,
	throttle: Gt,
	closest: Z,
	toggleClass: V,
	clone: zt,
	index: K,
	nextTick: ke,
	cancelNextTick: lt,
	detectDirection: $t,
	getChild: we
}, p.get = function(e) {
	return e[q];
}, p.mount = function() {
	var e = [...arguments];
	e[0].constructor === Array && (e = e[0]), e.forEach(function(e) {
		if (!e.prototype || !e.prototype.constructor) throw `Sortable: Mounted plugin must be a constructor function, not ${{}.toString.call(e)}`;
		e.utils && (p.utils = te(te({}, p.utils), e.utils)), xe.mount(e);
	});
}, p.create = function(e, t) {
	return new p(e, t);
}, p.version = xn;
var P = [], Se, st, ut = !1, nt, ot, ze, De;
function Zn() {
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
			this.sortable.nativeDraggable ? D(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? D(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? D(document, "touchmove", this._handleFallbackAutoScroll) : D(document, "mousemove", this._handleFallbackAutoScroll);
		},
		dragOverCompleted: function(e) {
			var t = e.originalEvent;
			!this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
		},
		drop: function() {
			this.sortable.nativeDraggable ? S(document, "dragover", this._handleAutoScroll) : (S(document, "pointermove", this._handleFallbackAutoScroll), S(document, "touchmove", this._handleFallbackAutoScroll), S(document, "mousemove", this._handleFallbackAutoScroll)), Mt(), He(), Fn();
		},
		nulling: function() {
			ze = st = Se = ut = De = nt = ot = null, P.length = 0;
		},
		_handleFallbackAutoScroll: function(e) {
			this._handleAutoScroll(e, !0);
		},
		_handleAutoScroll: function(e, t) {
			var n = this, r = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = document.elementFromPoint(r, i);
			if (ze = e, t || this.options.forceAutoScrollFallback || Ae || ie || _e) {
				rt(e, this.options, a, t);
				var s = ue(a, !0);
				ut && (!De || r !== nt || i !== ot) && (De && Mt(), De = setInterval(function() {
					var a = ue(document.elementFromPoint(r, i), !0);
					a !== s && (s = a, He()), rt(e, n.options, a, t);
				}, 10), nt = r, ot = i);
			} else {
				if (!this.options.bubbleScroll || ue(a, !0) === ee()) {
					He();
					return;
				}
				rt(e, this.options, ue(a, !1), !1);
			}
		}
	}, re(e, {
		pluginName: "scroll",
		initializeByDefault: !0
	});
}
function He() {
	P.forEach(function(e) {
		clearInterval(e.pid);
	}), P = [];
}
function Mt() {
	clearInterval(De);
}
var rt = Gt(function(e, t, n, r) {
	if (t.scroll) {
		var i = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, s = t.scrollSensitivity, l = t.scrollSpeed, u = ee(), d = !1, f;
		st !== n && (st = n, He(), Se = t.scroll, f = t.scrollFn, Se === !0 && (Se = ue(n, !0)));
		var m = 0, _ = Se;
		do {
			var b = _, x = M(b), w = x.top, T = x.bottom, E = x.left, k = x.right, A = x.width, j = x.height, N = void 0, F = void 0, L = b.scrollWidth, R = b.scrollHeight, z = h$1(b), H = b.scrollLeft, U = b.scrollTop;
			b === u ? (N = A < L && (z.overflowX === "auto" || z.overflowX === "scroll" || z.overflowX === "visible"), F = j < R && (z.overflowY === "auto" || z.overflowY === "scroll" || z.overflowY === "visible")) : (N = A < L && (z.overflowX === "auto" || z.overflowX === "scroll"), F = j < R && (z.overflowY === "auto" || z.overflowY === "scroll"));
			var Y = N && (Math.abs(k - i) <= s && H + A < L) - (Math.abs(E - i) <= s && !!H), Gl = F && (Math.abs(T - a) <= s && U + j < R) - (Math.abs(w - a) <= s && !!U);
			if (!P[m]) for (var Q = 0; Q <= m; Q++) P[Q] || (P[Q] = {});
			(P[m].vx != Y || P[m].vy != Gl || P[m].el !== b) && (P[m].el = b, P[m].vx = Y, P[m].vy = Gl, clearInterval(P[m].pid), (Y != 0 || Gl != 0) && (d = !0, P[m].pid = setInterval(function() {
				r && this.layer === 0 && p.active._onTouchMove(ze);
				var t = P[this.layer].vy ? P[this.layer].vy * l : 0, n = P[this.layer].vx ? P[this.layer].vx * l : 0;
				typeof f == "function" && f.call(p.dragged.parentNode[q], n, t, e, ze, P[this.layer].el) !== "continue" || jt(P[this.layer].el, n, t);
			}.bind({ layer: m }), 24))), m++;
		} while (t.bubbleScroll && _ !== u && (_ = ue(_, !1)));
		ut = d;
	}
}, 30), Zt = function(e) {
	var t = e.originalEvent, n = e.putSortable, r = e.dragEl, i = e.activeSortable, a = e.dispatchSortableEvent, s = e.hideGhostForTarget, l = e.unhideGhostForTarget;
	if (t) {
		var u = n || i;
		s();
		var d = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, f = document.elementFromPoint(d.clientX, d.clientY);
		l(), u && !u.el.contains(f) && (a("spill"), this.onSpill({
			dragEl: r,
			putSortable: n
		}));
	}
};
function ht() {}
ht.prototype = {
	startIndex: null,
	dragStart: function(e) {
		this.startIndex = e.oldDraggableIndex;
	},
	onSpill: function(e) {
		var t = e.dragEl, n = e.putSortable;
		this.sortable.captureAnimationState(), n && n.captureAnimationState();
		var r = we(this.sortable.el, this.startIndex, this.options);
		r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll();
	},
	drop: Zt
}, re(ht, { pluginName: "revertOnSpill" });
function pt() {}
pt.prototype = {
	onSpill: function(e) {
		var t = e.dragEl, n = e.putSortable, r = n || this.sortable;
		r.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), r.animateAll();
	},
	drop: Zt
}, re(pt, { pluginName: "removeOnSpill" }), p.mount(new Zn()), p.mount(pt, ht);
function Qn(e) {
	return e == null ? e : JSON.parse(JSON.stringify(e));
}
function eo(e) {
	getCurrentInstance() && onUnmounted(e);
}
function to(e) {
	getCurrentInstance() ? onMounted(e) : nextTick(e);
}
var Qt = null, en = null;
function Ft(e = null, t = null) {
	Qt = e, en = t;
}
function no() {
	return {
		data: Qt,
		clonedData: en
	};
}
var Rt = Symbol("cloneElement");
function tn(...e) {
	let t = getCurrentInstance()?.proxy, n = null, r = e[0], [, i, a] = e;
	Array.isArray(unref(i)) || (a = i, i = null);
	let s = null, { immediate: l = !0, clone: u = Qn, customUpdate: d } = unref(a) ?? {};
	function f(e) {
		let { from: t, oldIndex: r, item: a } = e;
		n = Array.from(t.childNodes);
		let s = unref(unref(i)?.[r]), l = u(s);
		Ft(s, l), a[Rt] = l;
	}
	function m(e) {
		let t = e.item[Rt];
		if (!yn(t)) {
			if (qe(e.item), isRef(i)) {
				let n = [...unref(i)];
				i.value = St(n, e.newDraggableIndex, t);
				return;
			}
			St(unref(i), e.newDraggableIndex, t);
		}
	}
	function _(e) {
		let { from: t, item: n, oldIndex: r, oldDraggableIndex: a, pullMode: s, clone: l } = e;
		if (Dt(t, n, r), s === "clone") {
			qe(l);
			return;
		}
		if (isRef(i)) {
			let e = [...unref(i)];
			i.value = Et(e, a);
			return;
		}
		Et(unref(i), a);
	}
	function b(e) {
		if (d) {
			d(e);
			return;
		}
		let { from: t, item: n, oldIndex: r, oldDraggableIndex: a, newDraggableIndex: s } = e;
		if (qe(n), Dt(t, n, r), isRef(i)) {
			let e = [...unref(i)];
			i.value = wt(e, a, s);
			return;
		}
		wt(unref(i), a, s);
	}
	function x(e) {
		let { newIndex: t, oldIndex: r, from: i, to: a } = e, s = null, l = t === r && i === a;
		try {
			if (l) {
				let e = null;
				n?.some((t, r) => {
					if (e && n?.length !== a.childNodes.length) return i.insertBefore(e, t.nextSibling), !0;
					let s = a.childNodes[r];
					e = a?.replaceChild(t, s);
				});
			}
		} catch (e) {
			s = e;
		} finally {
			n = null;
		}
		nextTick(() => {
			if (Ft(), s) throw s;
		});
	}
	let w = {
		onUpdate: b,
		onStart: f,
		onAdd: m,
		onRemove: _,
		onEnd: x
	};
	function E(e) {
		let n = unref(r);
		return e ||= wn(n) ? En(n, t?.$el) : n, e && !_n(e) && (e = e.$el), e || mn("Root element not found"), e;
	}
	function k() {
		let e = unref(a) ?? {}, { immediate: t, clone: n } = e, r = Ve(e, ["immediate", "clone"]);
		return _t(r, (e, t) => {
			Tn(e) && (r[e] = (e, ...n) => {
				let r = no();
				return Cn(e, r), t(e, ...n);
			});
		}), Dn(i === null ? {} : w, r);
	}
	let A = (e) => {
		e = E(e), s && N.destroy(), s = new p(e, k());
	};
	watch(() => a, () => {
		s && _t(k(), (e, t) => {
			s?.option(e, t);
		});
	}, { deep: !0 });
	let N = {
		option: (e, t) => s?.option(e, t),
		destroy: () => {
			s?.destroy(), s = null;
		},
		save: () => s?.save(),
		toArray: () => s?.toArray(),
		closest: (...e) => s?.closest(...e)
	};
	return to(() => {
		l && A();
	}), eo(N.destroy), fe({
		start: A,
		pause: () => N?.option("disabled", !0),
		resume: () => N?.option("disabled", !1)
	}, N);
}
var ct = [
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
], oo = [
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
	...ct.map((e) => `on${e.replace(/^\S/, (e) => e.toUpperCase())}`)
], lo = defineComponent({
	name: "VueDraggable",
	model: {
		prop: "modelValue",
		event: "update:modelValue"
	},
	props: oo,
	emits: ["update:modelValue", ...ct],
	setup(e, { slots: t, emit: n, expose: r, attrs: i }) {
		let a = ct.reduce((e, t) => {
			let r = `on${t.replace(/^\S/, (e) => e.toUpperCase())}`;
			return e[r] = (...e) => n(t, ...e), e;
		}, {}), l = computed(() => {
			let t = toRefs(e), { modelValue: n } = t, r = Ve(t, ["modelValue"]), s = Object.entries(r).reduce((e, [t, n]) => {
				let r = unref(n);
				return r !== void 0 && (e[t] = r), e;
			}, {});
			return fe(fe({}, a), bn(fe(fe({}, i), s)));
		}), u = computed({
			get: () => e.modelValue,
			set: (e) => n("update:modelValue", e)
		}), d = ref(), f = reactive(tn(e.target || d, u, l));
		return r(f), () => h(e.tag || "div", { ref: d }, (t?.default)?.call(t, f));
	}
}), Xt = {
	mounted: "mounted",
	unmounted: "unmounted"
};
Xt.mounted, Xt.unmounted;
function propsFactory(e, t) {
	return (n) => Object.keys(e).reduce((r, i) => {
		let a = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : { type: e[i] };
		return n && i in n ? r[i] = {
			...a,
			default: n[i]
		} : r[i] = a, t && !r[i].source && (r[i].source = t), r;
	}, {});
}
const makeComponentProps = propsFactory({
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
}, "component"), IN_BROWSER = typeof window < "u", SUPPORTS_INTERSECTION = IN_BROWSER && "IntersectionObserver" in window;
IN_BROWSER && ("ontouchstart" in window || window.navigator.maxTouchPoints), IN_BROWSER && "EyeDropper" in window;
const SUPPORTS_MATCH_MEDIA = IN_BROWSER && "matchMedia" in window && typeof window.matchMedia == "function", PREFERS_REDUCED_MOTION = () => SUPPORTS_MATCH_MEDIA && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function deepEqual(e, t) {
	if (e === t) return !0;
	if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return !1;
	let n = Object.keys(e);
	return n.length === Object.keys(t).length ? n.every((n) => deepEqual(e[n], t[n])) : !1;
}
function convertToUnit(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
	if (e == null || e === "") return;
	let n = Number(e);
	if (isNaN(n)) return String(e);
	if (isFinite(n)) return `${n}${t}`;
}
function isObject(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function isPlainObject(e) {
	let t;
	return typeof e == "object" && !!e && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function refElement(e) {
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
function has(e, t) {
	return t.every((t) => e.hasOwnProperty(t));
}
function pick$1(e, t) {
	let n = {};
	for (let r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
	return n;
}
function wrapInArray(e) {
	return e == null ? [] : Array.isArray(e) ? e : [e];
}
function clamp(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
	return Math.max(t, Math.min(n, e));
}
function padEnd(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
	return e + n.repeat(Math.max(0, t - e.length));
}
function chunk(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = [], r = 0;
	for (; r < e.length;) n.push(e.substr(r, t)), r += t;
	return n;
}
function mergeDeep() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, r = {};
	for (let t in e) r[t] = e[t];
	for (let i in t) {
		let a = e[i], s = t[i];
		if (isPlainObject(a) && isPlainObject(s)) {
			r[i] = mergeDeep(a, s, n);
			continue;
		}
		if (n && Array.isArray(a) && Array.isArray(s)) {
			r[i] = n(a, s);
			continue;
		}
		r[i] = s;
	}
	return r;
}
function flattenFragments(t) {
	return t.map((t) => t.type === Fragment ? flattenFragments(t.children) : t).flat();
}
function toKebabCase() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
	if (toKebabCase.cache.has(e)) return toKebabCase.cache.get(e);
	let t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
	return toKebabCase.cache.set(e, t), t;
}
toKebabCase.cache = /* @__PURE__ */ new Map();
function findChildrenWithProvide(e, t) {
	if (!t || typeof t != "object") return [];
	if (Array.isArray(t)) return t.map((t) => findChildrenWithProvide(e, t)).flat(1);
	if (t.suspense) return findChildrenWithProvide(e, t.ssContent);
	if (Array.isArray(t.children)) return t.children.map((t) => findChildrenWithProvide(e, t)).flat(1);
	if (t.component) {
		if (Object.getOwnPropertySymbols(t.component.provides).includes(e)) return [t.component];
		if (t.component.subTree) return findChildrenWithProvide(e, t.component.subTree).flat(1);
	}
	return [];
}
function destructComputed(e) {
	let t = reactive({});
	watchEffect(() => {
		let n = e();
		for (let e in n) t[e] = n[e];
	}, { flush: "sync" });
	let n = {};
	for (let e in t) n[e] = toRef(() => t[e]);
	return n;
}
function includes(e, t) {
	return e.includes(t);
}
function hasEvent(e, t) {
	return t = "on" + capitalize(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function templateRef() {
	let e = shallowRef(), t = (t) => {
		e.value = t;
	};
	return Object.defineProperty(t, "value", {
		enumerable: !0,
		get: () => e.value,
		set: (t) => e.value = t
	}), Object.defineProperty(t, "el", {
		enumerable: !0,
		get: () => refElement(e.value)
	}), t;
}
var block = ["top", "bottom"], inline = [
	"start",
	"end",
	"left",
	"right"
];
function parseAnchor(e, t) {
	let [n, r] = e.split(" ");
	return r ||= includes(block, n) ? "start" : includes(inline, n) ? "top" : "center", {
		side: toPhysical(n, t),
		align: toPhysical(r, t)
	};
}
function toPhysical(e, t) {
	return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
var mainTRC = 2.4, Rco = .2126729, Gco = .7151522, Bco = .072175, normBG = .55, normTXT = .58, revTXT = .57, revBG = .62, blkThrs = .03, blkClmp = 1.45, scaleBoW = 1.25, scaleWoB = 1.25, loConFactor = 12.82051282051282, loConOffset = .06;
function APCAcontrast(e, t) {
	let n = (e.r / 255) ** mainTRC, r = (e.g / 255) ** mainTRC, i = (e.b / 255) ** mainTRC, a = (t.r / 255) ** mainTRC, s = (t.g / 255) ** mainTRC, l = (t.b / 255) ** mainTRC, u = n * Rco + r * Gco + i * Bco, d = a * Rco + s * Gco + l * Bco;
	if (u <= .03 && (u += (blkThrs - u) ** blkClmp), d <= .03 && (d += (blkThrs - d) ** blkClmp), Math.abs(d - u) < 5e-4) return 0;
	let f;
	if (d > u) {
		let e = (d ** normBG - u ** normTXT) * scaleBoW;
		f = e < .001 ? 0 : e < .078 ? e - e * loConFactor * loConOffset : e - loConOffset;
	} else {
		let e = (d ** revBG - u ** revTXT) * scaleWoB;
		f = e > -.001 ? 0 : e > -.078 ? e - e * loConFactor * loConOffset : e + loConOffset;
	}
	return f * 100;
}
function consoleWarn(e) {
	warn(`Vuetify: ${e}`);
}
function isCssColor(e) {
	return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function isParsableColor(e) {
	return isCssColor(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
var cssColorRe = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, mappers = {
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
	hsl: (e, t, n, r) => HSLtoRGB({
		h: e,
		s: t,
		l: n,
		a: r
	}),
	hsla: (e, t, n, r) => HSLtoRGB({
		h: e,
		s: t,
		l: n,
		a: r
	}),
	hsv: (e, t, n, r) => HSVtoRGB({
		h: e,
		s: t,
		v: n,
		a: r
	}),
	hsva: (e, t, n, r) => HSVtoRGB({
		h: e,
		s: t,
		v: n,
		a: r
	})
};
function parseColor(e) {
	if (typeof e == "number") return (isNaN(e) || e < 0 || e > 16777215) && consoleWarn(`'${e}' is not a valid hex color`), {
		r: (e & 16711680) >> 16,
		g: (e & 65280) >> 8,
		b: e & 255
	};
	if (typeof e == "string" && cssColorRe.test(e)) {
		let { groups: t } = e.match(cssColorRe), { fn: n, values: r } = t, i = r.split(/,\s*|\s*\/\s*|\s+/).map((e, t) => e.endsWith("%") || t > 0 && t < 3 && [
			"hsl",
			"hsla",
			"hsv",
			"hsva"
		].includes(n) ? parseFloat(e) / 100 : parseFloat(e));
		return mappers[n](...i);
	} else if (typeof e == "string") {
		let t = e.startsWith("#") ? e.slice(1) : e;
		[3, 4].includes(t.length) ? t = t.split("").map((e) => e + e).join("") : [6, 8].includes(t.length) || consoleWarn(`'${e}' is not a valid hex(a) color`);
		let n = parseInt(t, 16);
		return (isNaN(n) || n < 0 || n > 4294967295) && consoleWarn(`'${e}' is not a valid hex(a) color`), HexToRGB(t);
	} else if (typeof e == "object") {
		if (has(e, [
			"r",
			"g",
			"b"
		])) return e;
		if (has(e, [
			"h",
			"s",
			"l"
		])) return HSVtoRGB(HSLtoHSV(e));
		if (has(e, [
			"h",
			"s",
			"v"
		])) return HSVtoRGB(e);
	}
	throw TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function HSVtoRGB(e) {
	let { h: t, s: n, v: r, a: i } = e, a = (e) => {
		let i = (e + t / 60) % 6;
		return r - r * n * Math.max(Math.min(i, 4 - i, 1), 0);
	}, s = [
		a(5),
		a(3),
		a(1)
	].map((e) => Math.round(e * 255));
	return {
		r: s[0],
		g: s[1],
		b: s[2],
		a: i
	};
}
function HSLtoRGB(e) {
	return HSVtoRGB(HSLtoHSV(e));
}
function HSLtoHSV(e) {
	let { h: t, s: n, l: r, a: i } = e, a = r + n * Math.min(r, 1 - r), s = a === 0 ? 0 : 2 - 2 * r / a;
	return {
		h: t,
		s,
		v: a,
		a: i
	};
}
function HexToRGB(e) {
	e = parseHex(e);
	let [t, n, r, i] = chunk(e, 2).map((e) => parseInt(e, 16));
	return i = i === void 0 ? i : i / 255, {
		r: t,
		g: n,
		b: r,
		a: i
	};
}
function parseHex(e) {
	return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((e) => e + e).join("")), e.length !== 6 && (e = padEnd(padEnd(e, 6), 8, "F")), e;
}
function getForeground(e) {
	let t = Math.abs(APCAcontrast(parseColor(0), parseColor(e)));
	return Math.abs(APCAcontrast(parseColor(16777215), parseColor(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function getCurrentInstance$1(e, t) {
	let n = getCurrentInstance();
	if (!n) throw Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
	return n;
}
function getCurrentInstanceName() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables", t = getCurrentInstance$1(e).type;
	return toKebabCase(t?.aliasName || t?.name);
}
function injectSelf(e) {
	let { provides: t } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstance$1("injectSelf");
	if (t && e in t) return t[e];
}
const DefaultsSymbol = Symbol.for("vuetify:defaults");
function injectDefaults() {
	let e = inject(DefaultsSymbol);
	if (!e) throw Error("[Vuetify] Could not find defaults instance");
	return e;
}
function provideDefaults(e, t) {
	let n = injectDefaults(), r = ref(e), i = computed(() => {
		if (unref(t?.disabled)) return n.value;
		let e = unref(t?.scoped), i = unref(t?.reset), a = unref(t?.root);
		if (r.value == null && !(e || i || a)) return n.value;
		let s = mergeDeep(r.value, { prev: n.value });
		if (e) return s;
		if (i || a) {
			let e = Number(i || Infinity);
			for (let t = 0; t <= e && !(!s || !("prev" in s)); t++) s = s.prev;
			return s && typeof a == "string" && a in s && (s = mergeDeep(mergeDeep(s, { prev: s }), s[a])), s;
		}
		return s.prev ? mergeDeep(s.prev, s) : s;
	});
	return provide(DefaultsSymbol, i), i;
}
function propIsDefined(e, t) {
	return e.props && (e.props[t] !== void 0 || e.props[toKebabCase(t)] !== void 0);
}
function internalUseDefaults() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : injectDefaults(), r = getCurrentInstance$1("useDefaults");
	if (t = t ?? r.type.name ?? r.type.__name, !t) throw Error("[Vuetify] Could not determine component name");
	let i = computed(() => n.value?.[e._as ?? t]), a = new Proxy(e, { get(e, t) {
		let a = Reflect.get(e, t);
		if (t === "class" || t === "style") return [i.value?.[t], a].filter((e) => e != null);
		if (propIsDefined(r.vnode, t)) return a;
		let s = i.value?.[t];
		if (s !== void 0) return s;
		let l = n.value?.global?.[t];
		return l === void 0 ? a : l;
	} }), l = shallowRef();
	watchEffect(() => {
		if (i.value) {
			let e = Object.entries(i.value).filter((e) => {
				let [t] = e;
				return t.startsWith(t[0].toUpperCase());
			});
			l.value = e.length ? Object.fromEntries(e) : void 0;
		} else l.value = void 0;
	});
	function u() {
		let e = injectSelf(DefaultsSymbol, r);
		provide(DefaultsSymbol, computed(() => l.value ? mergeDeep(e?.value ?? {}, l.value) : e?.value));
	}
	return {
		props: a,
		provideSubDefaults: u
	};
}
function defineComponent$1(e) {
	if (e._setup = e._setup ?? e.setup, !e.name) return consoleWarn("The component is missing an explicit name, unable to generate default prop value"), e;
	if (e._setup) {
		e.props = propsFactory(e.props ?? {}, e.name)();
		let t = Object.keys(e.props).filter((e) => e !== "class" && e !== "style");
		e.filterProps = function(e) {
			return pick$1(e, t);
		}, e.props._as = String, e.setup = function(t, n) {
			let r = injectDefaults();
			if (!r.value) return e._setup(t, n);
			let { props: i, provideSubDefaults: a } = internalUseDefaults(t, t._as ?? e.name, r), s = e._setup(i, n);
			return a(), s;
		};
	}
	return e;
}
function genericComponent() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
	return (t) => (e ? defineComponent$1 : defineComponent)(t);
}
function useRender(e) {
	let t = getCurrentInstance$1("useRender");
	t.render = e;
}
function useResizeObserver(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content", n = templateRef(), r = ref();
	if (IN_BROWSER) {
		let i = new ResizeObserver((n) => {
			e?.(n, i), n.length && (t === "content" ? r.value = n[0].contentRect : r.value = n[0].target.getBoundingClientRect());
		});
		onBeforeUnmount(() => {
			i.disconnect();
		}), watch(() => n.el, (e, t) => {
			t && (i.unobserve(t), r.value = void 0), e && i.observe(e);
		}, { flush: "post" });
	}
	return {
		resizeRef: n,
		contentRect: readonly(r)
	};
}
function useToggleScope(e, t) {
	let n;
	function r() {
		n = effectScope(), n.run(() => t.length ? t(() => {
			n?.stop(), r();
		}) : t());
	}
	watch(e, (e) => {
		e && !n ? r() : e || (n?.stop(), n = void 0);
	}, { immediate: !0 }), onScopeDispose(() => {
		n?.stop();
	});
}
function useProxiedModel(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (e) => e, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (e) => e, a = getCurrentInstance$1("useProxiedModel"), l = ref(e[t] === void 0 ? n : e[t]), u = toKebabCase(t), d = computed(u === t ? () => (e[t], !!(a.vnode.props?.hasOwnProperty(t) && a.vnode.props?.hasOwnProperty(`onUpdate:${t}`))) : () => (e[t], !!((a.vnode.props?.hasOwnProperty(t) || a.vnode.props?.hasOwnProperty(u)) && (a.vnode.props?.hasOwnProperty(`onUpdate:${t}`) || a.vnode.props?.hasOwnProperty(`onUpdate:${u}`)))));
	useToggleScope(() => !d.value, () => {
		watch(() => e[t], (e) => {
			l.value = e;
		});
	});
	let f = computed({
		get() {
			let n = e[t];
			return r(d.value ? n : l.value);
		},
		set(n) {
			let s = i(n), u = toRaw(d.value ? e[t] : l.value);
			u === s || r(u) === n || (l.value = s, a?.emit(`update:${t}`, s));
		}
	});
	return Object.defineProperty(f, "externalValue", { get: () => d.value ? e[t] : l.value }), f;
}
const LocaleSymbol = Symbol.for("vuetify:locale");
function useRtl() {
	let e = inject(LocaleSymbol);
	if (!e) throw Error("[Vuetify] Could not find injected rtl instance");
	return {
		isRtl: e.isRtl,
		rtlClasses: e.rtlClasses
	};
}
const ThemeSymbol = Symbol.for("vuetify:theme"), makeThemeProps = propsFactory({ theme: String }, "theme");
function provideTheme(e) {
	getCurrentInstance$1("provideTheme");
	let t = inject(ThemeSymbol, null);
	if (!t) throw Error("Could not find Vuetify theme injection");
	let n = toRef(() => e.theme ?? t.name.value), r = toRef(() => t.themes.value[n.value]), i = toRef(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`), a = {
		...t,
		name: n,
		current: r,
		themeClasses: i
	};
	return provide(ThemeSymbol, a), a;
}
function useTheme() {
	getCurrentInstance$1("useTheme");
	let e = inject(ThemeSymbol, null);
	if (!e) throw Error("Could not find Vuetify theme injection");
	return e;
}
const makeTagProps = propsFactory({ tag: {
	type: [
		String,
		Object,
		Function
	],
	default: "div"
} }, "tag"), makeTransitionProps = propsFactory({
	disabled: Boolean,
	group: Boolean,
	hideOnLeave: Boolean,
	leaveAbsolute: Boolean,
	mode: String,
	origin: String
}, "transition");
function createCssTransition(e, t, i) {
	return genericComponent()({
		name: e,
		props: makeTransitionProps({
			mode: i,
			origin: t
		}),
		setup(t, i) {
			let { slots: a } = i, s = {
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
			return () => {
				let i = t.group ? TransitionGroup : Transition;
				return h(i, {
					name: t.disabled ? "" : e,
					css: !t.disabled,
					...t.group ? void 0 : { mode: t.mode },
					...t.disabled ? {} : s
				}, a.default);
			};
		}
	});
}
function createJavascriptTransition(e, t) {
	let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
	return genericComponent()({
		name: e,
		props: {
			mode: {
				type: String,
				default: i
			},
			disabled: {
				type: Boolean,
				default: PREFERS_REDUCED_MOTION()
			},
			group: Boolean
		},
		setup(i, a) {
			let { slots: s } = a, l = i.group ? TransitionGroup : Transition;
			return () => h(l, {
				name: i.disabled ? "" : e,
				css: !i.disabled,
				...i.disabled ? {} : t
			}, s.default);
		}
	});
}
function expand_transition_default() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = camelize(`offset-${t}`);
	return {
		onBeforeEnter(e) {
			e._parent = e.parentNode, e._initialStyle = {
				transition: e.style.transition,
				overflow: e.style.overflow,
				[t]: e.style[t]
			};
		},
		onEnter(r) {
			let i = r._initialStyle;
			if (!i) return;
			r.style.setProperty("transition", "none", "important"), r.style.overflow = "hidden";
			let a = `${r[n]}px`;
			r.style[t] = "0", r.offsetHeight, r.style.transition = i.transition, e && r._parent && r._parent.classList.add(e), requestAnimationFrame(() => {
				r.style[t] = a;
			});
		},
		onAfterEnter: a,
		onEnterCancelled: a,
		onLeave(e) {
			e._initialStyle = {
				transition: "",
				overflow: e.style.overflow,
				[t]: e.style[t]
			}, e.style.overflow = "hidden", e.style[t] = `${e[n]}px`, e.offsetHeight, requestAnimationFrame(() => e.style[t] = "0");
		},
		onAfterLeave: r,
		onLeaveCancelled: r
	};
	function r(t) {
		e && t._parent && t._parent.classList.remove(e), a(t);
	}
	function a(e) {
		if (!e._initialStyle) return;
		let n = e._initialStyle[t];
		e.style.overflow = e._initialStyle.overflow, n != null && (e.style[t] = n), delete e._initialStyle;
	}
}
createCssTransition("fab-transition", "center center", "out-in"), createCssTransition("dialog-bottom-transition"), createCssTransition("dialog-top-transition"), createCssTransition("fade-transition"), createCssTransition("scale-transition"), createCssTransition("scroll-x-transition"), createCssTransition("scroll-x-reverse-transition"), createCssTransition("scroll-y-transition"), createCssTransition("scroll-y-reverse-transition"), createCssTransition("slide-x-transition"), createCssTransition("slide-x-reverse-transition"), createCssTransition("slide-y-transition"), createCssTransition("slide-y-reverse-transition");
const VExpandTransition = createJavascriptTransition("expand-transition", expand_transition_default());
createJavascriptTransition("expand-x-transition", expand_transition_default("", !0));
const makeVDefaultsProviderProps = propsFactory({
	defaults: Object,
	disabled: Boolean,
	reset: [Number, String],
	root: [Boolean, String],
	scoped: Boolean
}, "VDefaultsProvider"), VDefaultsProvider = genericComponent(!1)({
	name: "VDefaultsProvider",
	props: makeVDefaultsProviderProps(),
	setup(e, t) {
		let { slots: n } = t, { defaults: r, disabled: i, reset: a, root: s, scoped: l } = toRefs(e);
		return provideDefaults(r, {
			reset: a,
			root: s,
			scoped: l,
			disabled: i
		}), () => n.default?.();
	}
}), makeDimensionProps = propsFactory({
	height: [Number, String],
	maxHeight: [Number, String],
	maxWidth: [Number, String],
	minHeight: [Number, String],
	minWidth: [Number, String],
	width: [Number, String]
}, "dimension");
function useDimension(e) {
	return { dimensionStyles: computed(() => {
		let t = {}, n = convertToUnit(e.height), r = convertToUnit(e.maxHeight), i = convertToUnit(e.maxWidth), a = convertToUnit(e.minHeight), s = convertToUnit(e.minWidth), l = convertToUnit(e.width);
		return n != null && (t.height = n), r != null && (t.maxHeight = r), i != null && (t.maxWidth = i), a != null && (t.minHeight = a), s != null && (t.minWidth = s), l != null && (t.width = l), t;
	}) };
}
function useColor(e) {
	return destructComputed(() => {
		let { class: t, style: n } = computeColor(e);
		return {
			colorClasses: t,
			colorStyles: n
		};
	});
}
function useTextColor(e) {
	let { colorClasses: t, colorStyles: n } = useColor(() => ({ text: toValue(e) }));
	return {
		textColorClasses: t,
		textColorStyles: n
	};
}
function computeColor(e) {
	let t = toValue(e), n = [], r = {};
	if (t.background) if (isCssColor(t.background)) {
		if (r.backgroundColor = t.background, !t.text && isParsableColor(t.background)) {
			let e = parseColor(t.background);
			if (e.a == null || e.a === 1) {
				let t = getForeground(e);
				r.color = t, r.caretColor = t;
			}
		}
	} else n.push(`bg-${t.background}`);
	return t.text && (isCssColor(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), {
		class: n,
		style: r
	};
}
const makeRoundedProps = propsFactory({
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
function useRounded(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return { roundedClasses: computed(() => {
		let n = isRef(e) ? e.value : e.rounded, r = isRef(e) ? !1 : e.tile, i = [];
		if (r || n === !1) i.push("rounded-0");
		else if (n === !0 || n === "") i.push(`${t}--rounded`);
		else if (typeof n == "string" || n === 0) for (let e of String(n).split(" ")) i.push(`rounded-${e}`);
		return i;
	}) };
}
const makeBorderProps = propsFactory({ border: [
	Boolean,
	Number,
	String
] }, "border");
function useBorder(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return { borderClasses: computed(() => {
		let n = e.border;
		return n === !0 || n === "" ? `${t}--border` : typeof n == "string" || n === 0 ? String(n).split(" ").map((e) => `border-${e}`) : [];
	}) };
}
const makeElevationProps = propsFactory({ elevation: {
	type: [Number, String],
	validator(e) {
		let t = parseInt(e);
		return !isNaN(t) && t >= 0 && t <= 24;
	}
} }, "elevation");
function useElevation(e) {
	return { elevationClasses: toRef(() => {
		let t = isRef(e) ? e.value : e.elevation;
		return t == null ? [] : [`elevation-${t}`];
	}) };
}
var allowedDensities = [
	null,
	"default",
	"comfortable",
	"compact"
];
const makeDensityProps = propsFactory({ density: {
	type: String,
	default: "default",
	validator: (e) => allowedDensities.includes(e)
} }, "density");
function useDensity(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return { densityClasses: toRef(() => `${t}--density-${e.density}`) };
}
const allowedVariants = [
	"elevated",
	"flat",
	"tonal",
	"outlined",
	"text",
	"plain"
];
function genOverlays(t, n) {
	return createElementVNode(Fragment, null, [t && createElementVNode("span", {
		key: "overlay",
		class: normalizeClass(`${n}__overlay`)
	}, null), createElementVNode("span", {
		key: "underlay",
		class: normalizeClass(`${n}__underlay`)
	}, null)]);
}
const makeVariantProps = propsFactory({
	color: String,
	variant: {
		type: String,
		default: "elevated",
		validator: (e) => allowedVariants.includes(e)
	}
}, "variant");
function useVariant(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName(), n = toRef(() => {
		let { variant: n } = toValue(e);
		return `${t}--variant-${n}`;
	}), { colorClasses: r, colorStyles: i } = useColor(() => {
		let { variant: t, color: n } = toValue(e);
		return { [["elevated", "flat"].includes(t) ? "background" : "text"]: n };
	});
	return {
		colorClasses: r,
		colorStyles: i,
		variantClasses: n
	};
}
const makeVBtnGroupProps = propsFactory({
	baseColor: String,
	divided: Boolean,
	direction: {
		type: String,
		default: "horizontal"
	},
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeElevationProps(),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps(),
	...makeVariantProps()
}, "VBtnGroup"), VBtnGroup = genericComponent()({
	name: "VBtnGroup",
	props: makeVBtnGroupProps(),
	setup(e, t) {
		let { slots: n } = t, { themeClasses: r } = provideTheme(e), { densityClasses: i } = useDensity(e), { borderClasses: a } = useBorder(e), { elevationClasses: s } = useElevation(e), { roundedClasses: l } = useRounded(e);
		provideDefaults({ VBtn: {
			height: toRef(() => e.direction === "horizontal" ? "auto" : null),
			baseColor: toRef(() => e.baseColor),
			color: toRef(() => e.color),
			density: toRef(() => e.density),
			flat: !0,
			variant: toRef(() => e.variant)
		} }), useRender(() => createVNode(e.tag, {
			class: normalizeClass([
				"v-btn-group",
				`v-btn-group--${e.direction}`,
				{ "v-btn-group--divided": e.divided },
				r.value,
				a.value,
				i.value,
				s.value,
				l.value,
				e.class
			]),
			style: normalizeStyle(e.style)
		}, n));
	}
}), makeGroupProps = propsFactory({
	modelValue: {
		type: null,
		default: void 0
	},
	multiple: Boolean,
	mandatory: [Boolean, String],
	max: Number,
	selectedClass: String,
	disabled: Boolean
}, "group"), makeGroupItemProps = propsFactory({
	value: null,
	disabled: Boolean,
	selectedClass: String
}, "group-item");
function useGroupItem(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = getCurrentInstance$1("useGroupItem");
	if (!r) throw Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
	let i = useId();
	provide(Symbol.for(`${t.description}:id`), i);
	let a = inject(t, null);
	if (!a) {
		if (!n) return a;
		throw Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
	}
	let l = toRef(() => e.value), u = computed(() => !!(a.disabled.value || e.disabled));
	a.register({
		id: i,
		value: l,
		disabled: u
	}, r), onBeforeUnmount(() => {
		a.unregister(i);
	});
	let d = computed(() => a.isSelected(i)), f = computed(() => a.items.value[0].id === i), m = computed(() => a.items.value[a.items.value.length - 1].id === i), _ = computed(() => d.value && [a.selectedClass.value, e.selectedClass]);
	return watch(d, (e) => {
		r.emit("group:selected", { value: e });
	}, { flush: "sync" }), {
		id: i,
		isSelected: d,
		isFirst: f,
		isLast: m,
		toggle: () => a.select(i, !d.value),
		select: (e) => a.select(i, e),
		selectedClass: _,
		value: l,
		disabled: u,
		group: a
	};
}
function useGroup(e, t) {
	let n = !1, r = reactive([]), i = useProxiedModel(e, "modelValue", [], (e) => e == null ? [] : getIds(r, wrapInArray(e)), (t) => {
		let n = getValues(r, t);
		return e.multiple ? n : n[0];
	}), a = getCurrentInstance$1("useGroup");
	function s(e, n) {
		let i = e, s = Symbol.for(`${t.description}:id`), l = findChildrenWithProvide(s, a?.vnode).indexOf(n);
		unref(i.value) ?? (i.value = l, i.useIndexAsValue = !0), l > -1 ? r.splice(l, 0, i) : r.push(i);
	}
	function l(e) {
		if (n) return;
		u();
		let t = r.findIndex((t) => t.id === e);
		r.splice(t, 1);
	}
	function u() {
		let t = r.find((e) => !e.disabled);
		t && e.mandatory === "force" && !i.value.length && (i.value = [t.id]);
	}
	onMounted(() => {
		u();
	}), onBeforeUnmount(() => {
		n = !0;
	}), onUpdated(() => {
		for (let e = 0; e < r.length; e++) r[e].useIndexAsValue && (r[e].value = e);
	});
	function d(t, n) {
		let a = r.find((e) => e.id === t);
		if (!(n && a?.disabled)) if (e.multiple) {
			let r = i.value.slice(), a = r.findIndex((e) => e === t), s = ~a;
			if (n ??= !s, s && e.mandatory && r.length <= 1 || !s && e.max != null && r.length + 1 > e.max) return;
			a < 0 && n ? r.push(t) : a >= 0 && !n && r.splice(a, 1), i.value = r;
		} else {
			let r = i.value.includes(t);
			if (e.mandatory && r || !r && !n) return;
			i.value = n ?? !r ? [t] : [];
		}
	}
	function f(t) {
		if (e.multiple && consoleWarn("This method is not supported when using \"multiple\" prop"), i.value.length) {
			let e = i.value[0], n = r.findIndex((t) => t.id === e), a = (n + t) % r.length, s = r[a];
			for (; s.disabled && a !== n;) a = (a + t) % r.length, s = r[a];
			if (s.disabled) return;
			i.value = [r[a].id];
		} else {
			let e = r.find((e) => !e.disabled);
			e && (i.value = [e.id]);
		}
	}
	let m = {
		register: s,
		unregister: l,
		selected: i,
		select: d,
		disabled: toRef(() => e.disabled),
		prev: () => f(r.length - 1),
		next: () => f(1),
		isSelected: (e) => i.value.includes(e),
		selectedClass: toRef(() => e.selectedClass),
		items: toRef(() => r),
		getItemIndex: (e) => getItemIndex(r, e)
	};
	return provide(t, m), m;
}
function getItemIndex(e, t) {
	let n = getIds(e, [t]);
	return n.length ? e.findIndex((e) => e.id === n[0]) : -1;
}
function getIds(e, t) {
	let n = [];
	return t.forEach((t) => {
		let r = e.find((e) => deepEqual(t, e.value)), i = e[t];
		r?.value == null ? i?.useIndexAsValue && n.push(i.id) : n.push(r.id);
	}), n;
}
function getValues(e, t) {
	let n = [];
	return t.forEach((t) => {
		let r = e.findIndex((e) => e.id === t);
		if (~r) {
			let t = e[r];
			n.push(t.value == null ? r : t.value);
		}
	}), n;
}
const VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle"), makeVBtnToggleProps = propsFactory({
	...makeVBtnGroupProps(),
	...makeGroupProps()
}, "VBtnToggle");
genericComponent()({
	name: "VBtnToggle",
	props: makeVBtnToggleProps(),
	emits: { "update:modelValue": (e) => !0 },
	setup(e, t) {
		let { slots: n } = t, { isSelected: r, next: i, prev: a, select: s, selected: l } = useGroup(e, VBtnToggleSymbol);
		return useRender(() => {
			let t = VBtnGroup.filterProps(e);
			return createVNode(VBtnGroup, mergeProps({ class: ["v-btn-toggle", e.class] }, t, { style: e.style }), { default: () => [n.default?.({
				isSelected: r,
				next: i,
				prev: a,
				select: s,
				selected: l
			})] });
		}), {
			next: i,
			prev: a,
			select: s
		};
	}
});
const IconValue = [
	String,
	Function,
	Object,
	Array
], IconSymbol = Symbol.for("vuetify:icons"), makeIconProps = propsFactory({
	icon: { type: IconValue },
	tag: {
		type: [
			String,
			Object,
			Function
		],
		required: !0
	}
}, "icon"), VComponentIcon = genericComponent()({
	name: "VComponentIcon",
	props: makeIconProps(),
	setup(e, t) {
		let { slots: n } = t;
		return () => {
			let t = e.icon;
			return createVNode(e.tag, null, { default: () => [e.icon ? createVNode(t, null, null) : n.default?.()] });
		};
	}
}), VSvgIcon = defineComponent$1({
	name: "VSvgIcon",
	inheritAttrs: !1,
	props: makeIconProps(),
	setup(e, t) {
		let { attrs: n } = t;
		return () => createVNode(e.tag, mergeProps(n, { style: null }), { default: () => [createElementVNode("svg", {
			class: "v-icon__svg",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			role: "img",
			"aria-hidden": "true"
		}, [Array.isArray(e.icon) ? e.icon.map((e) => Array.isArray(e) ? createElementVNode("path", {
			d: e[0],
			"fill-opacity": e[1]
		}, null) : createElementVNode("path", { d: e }, null)) : createElementVNode("path", { d: e.icon }, null)])] });
	}
});
defineComponent$1({
	name: "VLigatureIcon",
	props: makeIconProps(),
	setup(e) {
		return () => createVNode(e.tag, null, { default: () => [e.icon] });
	}
}), defineComponent$1({
	name: "VClassIcon",
	props: makeIconProps(),
	setup(e) {
		return () => createVNode(e.tag, { class: normalizeClass(e.icon) }, null);
	}
});
const useIcon = (e) => {
	let t = inject(IconSymbol);
	if (!t) throw Error("Missing Vuetify Icons provide!");
	return { iconData: computed(() => {
		let n = toValue(e);
		if (!n) return { component: VComponentIcon };
		let r = n;
		if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = t.aliases?.[r.slice(1)])), r || consoleWarn(`Could not find aliased icon "${n}"`), Array.isArray(r)) return {
			component: VSvgIcon,
			icon: r
		};
		if (typeof r != "string") return {
			component: VComponentIcon,
			icon: r
		};
		let i = Object.keys(t.sets).find((e) => typeof r == "string" && r.startsWith(`${e}:`)), a = i ? r.slice(i.length + 1) : r;
		return {
			component: t.sets[i ?? t.defaultSet].component,
			icon: a
		};
	}) };
};
var predefinedSizes = [
	"x-small",
	"small",
	"default",
	"large",
	"x-large"
];
const makeSizeProps = propsFactory({ size: {
	type: [String, Number],
	default: "default"
} }, "size");
function useSize(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return destructComputed(() => {
		let n = e.size, r, i;
		return includes(predefinedSizes, n) ? r = `${t}--size-${n}` : n && (i = {
			width: convertToUnit(n),
			height: convertToUnit(n)
		}), {
			sizeClasses: r,
			sizeStyles: i
		};
	});
}
const makeVIconProps = propsFactory({
	color: String,
	disabled: Boolean,
	start: Boolean,
	end: Boolean,
	icon: IconValue,
	opacity: [String, Number],
	...makeComponentProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "i" }),
	...makeThemeProps()
}, "VIcon"), VIcon = genericComponent()({
	name: "VIcon",
	props: makeVIconProps(),
	setup(e, n) {
		let { attrs: r, slots: i } = n, a = shallowRef(), { themeClasses: s } = useTheme(), { iconData: l } = useIcon(() => a.value || e.icon), { sizeClasses: u } = useSize(e), { textColorClasses: d, textColorStyles: f } = useTextColor(() => e.color);
		return useRender(() => {
			let n = i.default?.();
			n && (a.value = flattenFragments(n).filter((e) => e.type === Text && e.children && typeof e.children == "string")[0]?.children);
			let m = !!(r.onClick || r.onClickOnce);
			return createVNode(l.value.component, {
				tag: e.tag,
				icon: l.value.icon,
				class: normalizeClass([
					"v-icon",
					"notranslate",
					s.value,
					u.value,
					d.value,
					{
						"v-icon--clickable": m,
						"v-icon--disabled": e.disabled,
						"v-icon--start": e.start,
						"v-icon--end": e.end
					},
					e.class
				]),
				style: normalizeStyle([
					{ "--v-icon-opacity": e.opacity },
					u.value ? void 0 : {
						fontSize: convertToUnit(e.size),
						height: convertToUnit(e.size),
						width: convertToUnit(e.size)
					},
					f.value,
					e.style
				]),
				role: m ? "button" : void 0,
				"aria-hidden": !m,
				tabindex: m ? e.disabled ? -1 : 0 : void 0
			}, { default: () => [n] });
		}), {};
	}
});
function useIntersectionObserver(e, t) {
	let n = ref(), r = shallowRef(!1);
	if (SUPPORTS_INTERSECTION) {
		let i = new IntersectionObserver((t) => {
			e?.(t, i), r.value = !!t.find((e) => e.isIntersecting);
		}, t);
		onScopeDispose(() => {
			i.disconnect();
		}), watch(n, (e, t) => {
			t && (i.unobserve(t), r.value = !1), e && i.observe(e);
		}, { flush: "post" });
	}
	return {
		intersectionRef: n,
		isIntersecting: r
	};
}
const makeVProgressCircularProps = propsFactory({
	bgColor: String,
	color: String,
	indeterminate: [Boolean, String],
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
	...makeComponentProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "div" }),
	...makeThemeProps()
}, "VProgressCircular"), VProgressCircular = genericComponent()({
	name: "VProgressCircular",
	props: makeVProgressCircularProps(),
	setup(e, t) {
		let { slots: n } = t, r = 2 * Math.PI * 20, i = ref(), { themeClasses: a } = provideTheme(e), { sizeClasses: s, sizeStyles: l } = useSize(e), { textColorClasses: u, textColorStyles: d } = useTextColor(() => e.color), { textColorClasses: m, textColorStyles: _ } = useTextColor(() => e.bgColor), { intersectionRef: x, isIntersecting: w } = useIntersectionObserver(), { resizeRef: T, contentRect: E } = useResizeObserver(), k = toRef(() => clamp(parseFloat(e.modelValue), 0, 100)), A = toRef(() => Number(e.width)), j = toRef(() => l.value ? Number(e.size) : E.value ? E.value.width : Math.max(A.value, 32)), N = toRef(() => 20 / (1 - A.value / j.value) * 2), F = toRef(() => A.value / j.value * N.value), L = toRef(() => convertToUnit((100 - k.value) / 100 * r));
		return watchEffect(() => {
			x.value = i.value, T.value = i.value;
		}), useRender(() => createVNode(e.tag, {
			ref: i,
			class: normalizeClass([
				"v-progress-circular",
				{
					"v-progress-circular--indeterminate": !!e.indeterminate,
					"v-progress-circular--visible": w.value,
					"v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || PREFERS_REDUCED_MOTION())
				},
				a.value,
				s.value,
				u.value,
				e.class
			]),
			style: normalizeStyle([
				l.value,
				d.value,
				e.style
			]),
			role: "progressbar",
			"aria-valuemin": "0",
			"aria-valuemax": "100",
			"aria-valuenow": e.indeterminate ? void 0 : k.value
		}, { default: () => [createElementVNode("svg", {
			style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` },
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: `0 0 ${N.value} ${N.value}`
		}, [createElementVNode("circle", {
			class: normalizeClass(["v-progress-circular__underlay", m.value]),
			style: normalizeStyle(_.value),
			fill: "transparent",
			cx: "50%",
			cy: "50%",
			r: 20,
			"stroke-width": F.value,
			"stroke-dasharray": r,
			"stroke-dashoffset": 0
		}, null), createElementVNode("circle", {
			class: "v-progress-circular__overlay",
			fill: "transparent",
			cx: "50%",
			cy: "50%",
			r: 20,
			"stroke-width": F.value,
			"stroke-dasharray": r,
			"stroke-dashoffset": L.value
		}, null)]), n.default && createElementVNode("div", { class: "v-progress-circular__content" }, [n.default({ value: k.value })])] })), {};
	}
});
var oppositeMap = {
	center: "center",
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
const makeLocationProps = propsFactory({ location: String }, "location");
function useLocation(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0, { isRtl: r } = useRtl();
	return { locationStyles: computed(() => {
		if (!e.location) return {};
		let { side: i, align: a } = parseAnchor(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
		function s(e) {
			return n ? n(e) : 0;
		}
		let l = {};
		return i !== "center" && (t ? l[oppositeMap[i]] = `calc(100% - ${s(i)}px)` : l[i] = 0), a === "center" ? (i === "center" ? l.top = l.left = "50%" : l[{
			top: "left",
			bottom: "left",
			left: "top",
			right: "top"
		}[i]] = "50%", l.transform = {
			top: "translateX(-50%)",
			bottom: "translateX(-50%)",
			left: "translateY(-50%)",
			right: "translateY(-50%)",
			center: "translate(-50%, -50%)"
		}[i]) : t ? l[oppositeMap[a]] = `calc(100% - ${s(a)}px)` : l[a] = 0, l;
	}) };
}
const makeLoaderProps = propsFactory({ loading: [Boolean, String] }, "loader");
function useLoader(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return { loaderClasses: toRef(() => ({ [`${t}--loading`]: e.loading })) };
}
var positionValues = [
	"static",
	"relative",
	"fixed",
	"absolute",
	"sticky"
];
const makePositionProps = propsFactory({ position: {
	type: String,
	validator: (e) => positionValues.includes(e)
} }, "position");
function usePosition(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
	return { positionClasses: toRef(() => e.position ? `${t}--${e.position}` : void 0) };
}
function useRoute() {
	let e = getCurrentInstance$1("useRoute");
	return computed(() => e?.proxy?.$route);
}
function useLink(e, t) {
	let n = resolveDynamicComponent("RouterLink"), r = toRef(() => !!(e.href || e.to)), i = computed(() => r?.value || hasEvent(t, "click") || hasEvent(e, "click"));
	if (typeof n == "string" || !("useLink" in n)) {
		let t = toRef(() => e.href);
		return {
			isLink: r,
			isClickable: i,
			href: t,
			linkProps: reactive({ href: t })
		};
	}
	let a = n.useLink({
		to: toRef(() => e.to || ""),
		replace: toRef(() => e.replace)
	}), l = computed(() => e.to ? a : void 0), u = useRoute(), d = computed(() => l.value ? e.exact ? u.value ? l.value.isExactActive?.value && deepEqual(l.value.route.value.query, u.value.query) : l.value.isExactActive?.value ?? !1 : l.value.isActive?.value ?? !1 : !1), f = computed(() => e.to ? l.value?.route.value.href : e.href);
	return {
		isLink: r,
		isClickable: i,
		isActive: d,
		route: l.value?.route,
		navigate: l.value?.navigate,
		href: f,
		linkProps: reactive({
			href: f,
			"aria-current": toRef(() => d.value ? "page" : void 0)
		})
	};
}
const makeRouterProps = propsFactory({
	href: String,
	replace: Boolean,
	to: [String, Object],
	exact: Boolean
}, "router");
function useSelectLink(e, t) {
	watch(() => e.isActive?.value, (n) => {
		e.isLink.value && n != null && t && nextTick(() => {
			t(n);
		});
	}, { immediate: !0 });
}
var stopSymbol = Symbol("rippleStop");
function transform(e, t) {
	e.style.transform = t, e.style.webkitTransform = t;
}
function isTouchEvent(e) {
	return e.constructor.name === "TouchEvent";
}
function isKeyboardEvent(e) {
	return e.constructor.name === "KeyboardEvent";
}
var calculate = function(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, i = 0;
	if (!isKeyboardEvent(e)) {
		let n = t.getBoundingClientRect(), a = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
		r = a.clientX - n.left, i = a.clientY - n.top;
	}
	let a = 0, s = .3;
	t._ripple?.circle ? (s = .15, a = t.clientWidth / 2, a = n.center ? a : a + Math.sqrt((r - a) ** 2 + (i - a) ** 2) / 4) : a = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
	let l = `${(t.clientWidth - a * 2) / 2}px`, u = `${(t.clientHeight - a * 2) / 2}px`, d = n.center ? l : `${r - a}px`, f = n.center ? u : `${i - a}px`;
	return {
		radius: a,
		scale: s,
		x: d,
		y: f,
		centerX: l,
		centerY: u
	};
}, ripples = {
	show(e, t) {
		let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		if (!t?._ripple?.enabled) return;
		let r = document.createElement("span"), i = document.createElement("span");
		r.appendChild(i), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
		let { radius: a, scale: s, x: l, y: u, centerX: d, centerY: f } = calculate(e, t, n), m = `${a * 2}px`;
		i.className = "v-ripple__animation", i.style.width = m, i.style.height = m, t.appendChild(r);
		let _ = window.getComputedStyle(t);
		_ && _.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), transform(i, `translate(${l}, ${u}) scale3d(${s},${s},${s})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), transform(i, `translate(${d}, ${f}) scale3d(1,1,1)`);
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
function isRippleEnabled(e) {
	return e === void 0 || !!e;
}
function rippleShow(e) {
	let t = {}, n = e.currentTarget;
	if (!(!n?._ripple || n._ripple.touched || e[stopSymbol])) {
		if (e[stopSymbol] = !0, isTouchEvent(e)) n._ripple.touched = !0, n._ripple.isTouch = !0;
		else if (n._ripple.isTouch) return;
		if (t.center = n._ripple.centered || isKeyboardEvent(e), n._ripple.class && (t.class = n._ripple.class), isTouchEvent(e)) {
			if (n._ripple.showTimerCommit) return;
			n._ripple.showTimerCommit = () => {
				ripples.show(e, n, t);
			}, n._ripple.showTimer = window.setTimeout(() => {
				n?._ripple?.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
			}, 80);
		} else ripples.show(e, n, t);
	}
}
function rippleStop(e) {
	e[stopSymbol] = !0;
}
function rippleHide(e) {
	let t = e.currentTarget;
	if (t?._ripple) {
		if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
			t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
				rippleHide(e);
			});
			return;
		}
		window.setTimeout(() => {
			t._ripple && (t._ripple.touched = !1);
		}), ripples.hide(t);
	}
}
function rippleCancelShow(e) {
	let t = e.currentTarget;
	t?._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
var keyboardRipple = !1;
function keyboardRippleShow(e, t) {
	!keyboardRipple && t.includes(e.key) && (keyboardRipple = !0, rippleShow(e));
}
function keyboardRippleHide(e) {
	keyboardRipple = !1, rippleHide(e);
}
function focusRippleHide(e) {
	keyboardRipple && (keyboardRipple = !1, rippleHide(e));
}
function updateRipple(e, t, n) {
	let { value: r, modifiers: i } = t, a = isRippleEnabled(r);
	a || ripples.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = i.center, e._ripple.circle = i.circle;
	let s = isObject(r) ? r : {};
	s.class && (e._ripple.class = s.class);
	let l = s.keys ?? ["Enter", "Space"];
	if (e._ripple.keyDownHandler = (e) => keyboardRippleShow(e, l), a && !n) {
		if (i.stop) {
			e.addEventListener("touchstart", rippleStop, { passive: !0 }), e.addEventListener("mousedown", rippleStop);
			return;
		}
		e.addEventListener("touchstart", rippleShow, { passive: !0 }), e.addEventListener("touchend", rippleHide, { passive: !0 }), e.addEventListener("touchmove", rippleCancelShow, { passive: !0 }), e.addEventListener("touchcancel", rippleHide), e.addEventListener("mousedown", rippleShow), e.addEventListener("mouseup", rippleHide), e.addEventListener("mouseleave", rippleHide), e.addEventListener("keydown", (e) => keyboardRippleShow(e, l)), e.addEventListener("keyup", keyboardRippleHide), e.addEventListener("blur", focusRippleHide), e.addEventListener("dragstart", rippleHide, { passive: !0 });
	} else !a && n && removeListeners(e);
}
function removeListeners(e) {
	e.removeEventListener("mousedown", rippleShow), e.removeEventListener("touchstart", rippleShow), e.removeEventListener("touchend", rippleHide), e.removeEventListener("touchmove", rippleCancelShow), e.removeEventListener("touchcancel", rippleHide), e.removeEventListener("mouseup", rippleHide), e.removeEventListener("mouseleave", rippleHide), e._ripple?.keyDownHandler && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", keyboardRippleHide), e.removeEventListener("dragstart", rippleHide), e.removeEventListener("blur", focusRippleHide);
}
function mounted(e, t) {
	updateRipple(e, t, !1);
}
function unmounted(e) {
	removeListeners(e), delete e._ripple;
}
function updated(e, t) {
	if (t.value === t.oldValue) return;
	let n = isRippleEnabled(t.oldValue);
	updateRipple(e, t, n);
}
var ripple_default = {
	mounted,
	unmounted,
	updated
};
const makeVBtnProps = propsFactory({
	active: {
		type: Boolean,
		default: void 0
	},
	activeColor: String,
	baseColor: String,
	symbol: {
		type: null,
		default: VBtnToggleSymbol
	},
	flat: Boolean,
	icon: [
		Boolean,
		String,
		Function,
		Object
	],
	prependIcon: IconValue,
	appendIcon: IconValue,
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
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeDimensionProps(),
	...makeElevationProps(),
	...makeGroupItemProps(),
	...makeLoaderProps(),
	...makeLocationProps(),
	...makePositionProps(),
	...makeRoundedProps(),
	...makeRouterProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "button" }),
	...makeThemeProps(),
	...makeVariantProps({ variant: "elevated" })
}, "VBtn"), VBtn = genericComponent()({
	name: "VBtn",
	props: makeVBtnProps(),
	emits: { "group:selected": (e) => !0 },
	setup(e, t) {
		let { attrs: n, slots: r } = t, { themeClasses: i } = provideTheme(e), { borderClasses: a } = useBorder(e), { densityClasses: l } = useDensity(e), { dimensionStyles: u } = useDimension(e), { elevationClasses: d } = useElevation(e), { loaderClasses: m } = useLoader(e), { locationStyles: _ } = useLocation(e), { positionClasses: x } = usePosition(e), { roundedClasses: w } = useRounded(e), { sizeClasses: T, sizeStyles: E } = useSize(e), k = useGroupItem(e, e.symbol, !1), A = useLink(e, n), j = computed(() => e.active === void 0 ? A.isLink.value ? A.isActive?.value : k?.isSelected.value : e.active), N = toRef(() => j.value ? e.activeColor ?? e.color : e.color), L = computed(() => ({
			color: k?.isSelected.value && (!A.isLink.value || A.isActive?.value) || !k || A.isActive?.value ? N.value ?? e.baseColor : e.baseColor,
			variant: e.variant
		})), { colorClasses: R, colorStyles: z, variantClasses: H } = useVariant(L), U = computed(() => k?.disabled.value || e.disabled), Y = toRef(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), Gl = computed(() => {
			if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
		});
		function Q(e) {
			U.value || A.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || n.target === "_blank") || (A.navigate?.(e), k?.toggle());
		}
		return useSelectLink(A, k?.select), useRender(() => {
			let t = A.isLink.value ? "a" : e.tag, n = !!(e.prependIcon || r.prepend), s = !!(e.appendIcon || r.append), N = !!(e.icon && e.icon !== !0);
			return withDirectives(createVNode(t, mergeProps({
				type: t === "a" ? void 0 : "button",
				class: [
					"v-btn",
					k?.selectedClass.value,
					{
						"v-btn--active": j.value,
						"v-btn--block": e.block,
						"v-btn--disabled": U.value,
						"v-btn--elevated": Y.value,
						"v-btn--flat": e.flat,
						"v-btn--icon": !!e.icon,
						"v-btn--loading": e.loading,
						"v-btn--readonly": e.readonly,
						"v-btn--slim": e.slim,
						"v-btn--stacked": e.stacked
					},
					e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [],
					i.value,
					a.value,
					R.value,
					l.value,
					d.value,
					m.value,
					x.value,
					w.value,
					T.value,
					H.value,
					e.class
				],
				style: [
					z.value,
					u.value,
					_.value,
					E.value,
					e.style
				],
				"aria-busy": e.loading ? !0 : void 0,
				disabled: U.value || void 0,
				tabindex: e.loading || e.readonly ? -1 : void 0,
				onClick: Q,
				value: Gl.value
			}, A.linkProps), { default: () => [
				genOverlays(!0, "v-btn"),
				!e.icon && n && createElementVNode("span", {
					key: "prepend",
					class: "v-btn__prepend"
				}, [r.prepend ? createVNode(VDefaultsProvider, {
					key: "prepend-defaults",
					disabled: !e.prependIcon,
					defaults: { VIcon: { icon: e.prependIcon } }
				}, r.prepend) : createVNode(VIcon, {
					key: "prepend-icon",
					icon: e.prependIcon
				}, null)]),
				createElementVNode("span", {
					class: "v-btn__content",
					"data-no-activator": ""
				}, [!r.default && N ? createVNode(VIcon, {
					key: "content-icon",
					icon: e.icon
				}, null) : createVNode(VDefaultsProvider, {
					key: "content-defaults",
					disabled: !N,
					defaults: { VIcon: { icon: e.icon } }
				}, { default: () => [r.default?.() ?? toDisplayString(e.text)] })]),
				!e.icon && s && createElementVNode("span", {
					key: "append",
					class: "v-btn__append"
				}, [r.append ? createVNode(VDefaultsProvider, {
					key: "append-defaults",
					disabled: !e.appendIcon,
					defaults: { VIcon: { icon: e.appendIcon } }
				}, r.append) : createVNode(VIcon, {
					key: "append-icon",
					icon: e.appendIcon
				}, null)]),
				!!e.loading && createElementVNode("span", {
					key: "loader",
					class: "v-btn__loader"
				}, [r.loader?.() ?? createVNode(VProgressCircular, {
					color: typeof e.loading == "boolean" ? void 0 : e.loading,
					indeterminate: !0,
					width: "2"
				}, null)])
			] }), [[
				ripple_default,
				!U.value && e.ripple,
				"",
				{ center: !!e.icon }
			]]);
		}), { group: k };
	}
});
var y = { transform: "rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))" }, o = {
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
}, v = {
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
		return () => e.type === "fad" ? (console.warn("vue3-icon does not currently support Duotone FontAwesome icons"), h("path")) : Array.isArray(e.path) ? h("g", { style: { fill: "currentcolor" } }, e.path.map((e) => typeof e == "string" ? h("path", { d: e }) : h("path", { ...e }))) : h("path", {
			d: e.pathString,
			style: { fill: "currentcolor" }
		});
	}
}, g = {
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
		if (!e.path && !e.faIcon) return console.warn("vue3-icon requires either a 'path' or an 'fa-icon' property"), () => h("div");
		let t = computed(() => e.faIcon?.prefix || e.type), n = computed(() => parseInt(e.rotate, 10)), r = computed(() => o[t.value] || o.default), i = computed(() => parseInt(e.size, 10) || r.value.size), a = computed(() => e.faIcon ? `0 0 ${e.faIcon.icon[0]} ${e.faIcon.icon[1]}` : !1), l = computed(() => a.value || e.viewbox || r.value.viewbox), u = computed(() => {
			if (e.noStyles !== !0) return {
				...y,
				"--sx": ["both", "horizontal"].includes(e.flip) ? "-1" : "1",
				"--sy": ["both", "vertical"].includes(e.flip) ? "-1" : "1",
				"--r": isNaN(n.value) ? n.value : n.value + "deg"
			};
		}), d = computed(() => e.faIcon ? e.faIcon?.icon[4] : e.type === "simple-icons" && typeof e.path == "object" ? e.path.path : e.path);
		return () => h("svg", {
			xmlns: e.noNamespace === !0 ? void 0 : "http://www.w3.org/2000/svg",
			style: u.value,
			class: ["vue3-icon"],
			width: e.noDimensions === !0 ? void 0 : i.value,
			height: e.noDimensions === !0 ? void 0 : i.value,
			viewBox: l.value
		}, [h(v, {
			path: e.path,
			type: t.value,
			pathString: d.value
		})]);
	}
}, getChangedFields = (e, t) => reduce(e, (e, n, r) => (isEqual(n, t[r]) || (e[r] = n), e), {});
const useApiSync = (e, t = {}) => {
	let n = t.updateItemRoute, r = t.updateItemMethod, i = t.itemValue, a = computed(() => cloneDeep(e())), l = ref(), u = computed(() => cloneDeep(l.value)), d = refAutoReset(null, 4e3), f = (e) => axios({
		url: n,
		method: r,
		data: e
	}).then((e) => {
		t.onSuccess && typeof t.onSuccess == "function" && t.onSuccess(e.data);
	}).catch((e) => {
		throw d.value = e.response.data.message, t.onError && typeof t.onError == "function" && t.onError(e.response), Error(e);
	});
	watch(a, (e, t) => {
		if (t !== void 0) {
			let n = getChangedFields(e, t);
			Object.keys(n).length > 0 && (n[i] = e[i], f(n));
		}
		l.value = e;
	}, {
		immediate: !0,
		deep: !0
	});
	let { pause: m, resume: _ } = watchPausable(u, (e, t) => {
		if (t !== void 0) {
			let n = getChangedFields(e, t);
			Object.keys(n).length > 0 && (n[i] = e[i], f(n).catch(async () => {
				m(), await nextTick(), l.value = t, await nextTick(), _();
			}));
		}
	}, { deep: !0 });
	return {
		data: l,
		error: d,
		update: f
	};
};
var mdiChevronRight = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", mdiDragVertical = "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z", _hoisted_1$1 = { class: "evo-sortable-treeview__item" }, _hoisted_2$1 = { class: "evo-sortable-treeview__item-content" }, _hoisted_3 = {
	ref: "item",
	class: "evo-sortable-treeview__actions"
}, _hoisted_4 = { class: "evo-sortable-treeview__action-drag" }, _hoisted_5 = { class: "evo-sortable-treeview__action-title" }, _hoisted_6 = {
	class: "d-flex align-center flex",
	ref: "columns"
}, _SortableTreeviewItem_default = /* @__PURE__ */ Object.assign({ name: "EvoSortableTreeviewItem" }, {
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
		let t = e, n = useId(), r = useTemplateRef("columns"), i = inject(SORTABLE_TREEVIEW), a = computed(() => i.config.value.itemTitle), m = computed(() => i.config.value.itemValue), x = computed(() => i.config.value.itemChildren), w = computed(() => i.config.value.itemChildrenCount), { data: T, error: E } = useApiSync(() => t.item, {
			...i.config.value,
			onSuccess: (e) => {
				i.emit("updated", e);
			},
			onError: (e) => {
				i.emit("error", e);
			}
		}), A = ref([]), { width: j } = useElementSize(r);
		watch(j, (e) => {
			if (!r.value) return [];
			A.value = Array.from(r.value?.children).map((e) => {
				let { width: t } = e.getBoundingClientRect();
				return t;
			});
		}, { immediate: !0 });
		let { registerItem: N } = inject(SORTABLE_TREEVIEW);
		N(n, A);
		let F = ref([]), L = computed(() => t.item[w.value] > 0 || F.value?.length ? !0 : !!(Array.isArray(t.item[x.value]) && t.item[x.value]?.length > 0)), z = ref(!1);
		syncRef(() => t.item[x.value], F, {
			direction: "ltr",
			transform: { ltr: (e) => e },
			immediate: !0
		});
		let H = computed(() => L.value && F.value?.length > 0), U = ref(!1), Y = () => {
			if (U.value || H.value) return U.value = !U.value;
			z.value = !0, i.onLoadChildren(t.item).then((e) => {
				F.value = e.data.children ?? [], U.value = !U.value;
			}).finally(() => {
				z.value = !1;
			});
		};
		return (e, n) => (openBlock(), createElementBlock("li", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createElementVNode("div", _hoisted_3, [
			createElementVNode("div", { class: normalizeClass(["evo-sortable-treeview__action-expand", { "is-expanded": U.value }]) }, [L.value ? (openBlock(), createBlock(unref(VBtn), {
				key: 0,
				icon: "",
				variant: "flat",
				size: "small",
				loading: z.value,
				onClick: Y
			}, {
				default: withCtx(() => [createVNode(unref(g), {
					class: "evo-sortable-treeview__expand-icon",
					size: "24",
					path: unref(mdiChevronRight),
					rotate: U.value ? 90 : 0
				}, null, 8, ["path", "rotate"])]),
				_: 1
			}, 8, ["loading"])) : createCommentVNode("", !0)], 2),
			createElementVNode("div", _hoisted_4, [createVNode(unref(VBtn), {
				variant: "plain",
				size: "small",
				class: "drag-handle cursor-move"
			}, {
				default: withCtx(() => [createVNode(unref(g), { path: unref(mdiDragVertical) }, null, 8, ["path"])]),
				_: 1
			})]),
			createElementVNode("div", _hoisted_5, [
				renderSlot(e.$slots, "item.prepend-title", { item: t.item }),
				renderSlot(e.$slots, "item.title", {
					item: t.item,
					title: t.item[a.value]
				}, () => [createTextVNode(toDisplayString(t.item[a.value]), 1)]),
				renderSlot(e.$slots, "item.append-title", { item: t.item })
			])
		], 512), createElementVNode("div", _hoisted_6, [renderSlot(e.$slots, "item.columns", { item: unref(T) })], 512)]), createVNode(unref(ForwardSlots), { slots: e.$slots }, {
			default: withCtx(() => [createVNode(_SortableTreeviewChildren_default, {
				modelValue: F.value,
				"onUpdate:modelValue": n[0] ||= (e) => F.value = e,
				"is-expanded": U.value,
				"is-empty": !L.value,
				depth: t.depth + 1,
				"parent-id": t.item[m.value]
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
}), _SortableTreeviewChildren_default = /* @__PURE__ */ Object.assign({ name: "EvoSortableTreeviewChildren" }, {
	__name: "_SortableTreeviewChildren",
	props: /* @__PURE__ */ mergeModels({
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
		let n = useModel(t, "modelValue"), r = t, i = inject(SORTABLE_TREEVIEW), a = computed(() => i.config.value.itemValue), f = computed(() => ({
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
		return (t, i) => (openBlock(), createBlock(unref(VExpandTransition), null, {
			default: withCtx(() => [r.isExpanded || r.isEmpty ? (openBlock(), createBlock(unref(lo), mergeProps({
				key: 0,
				modelValue: n.value,
				"onUpdate:modelValue": i[0] ||= (e) => n.value = e
			}, f.value), {
				default: withCtx(() => [(openBlock(!0), createElementBlock(Fragment, null, renderList(n.value, (e) => (openBlock(), createBlock(_SortableTreeviewItem_default, {
					key: `${e[a.value]}_item`,
					item: e,
					depth: r.depth
				}, createSlots({ _: 2 }, [renderList(t.$slots, (e, n) => ({
					name: n,
					fn: withCtx((e) => [renderSlot(t.$slots, n, mergeProps({ ref_for: !0 }, e))])
				}))]), 1032, ["item", "depth"]))), 128))]),
				_: 3
			}, 16, ["modelValue"])) : createCommentVNode("", !0)]),
			_: 3
		}));
	}
}), _hoisted_1 = {
	ref: "treeview",
	class: "evo-sortable-treeview"
}, _hoisted_2 = { class: "evo-sortable-treeview__header" }, SortableTreeview_default = /* @__PURE__ */ Object.assign({ name: "EvoSortableTreeview" }, {
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
		let r = useId(), i = n, a = t, l = computed(() => typeof a.model == "string" ? usePage().props[a.model] : a.model), u = computed(() => l.value?.config ?? {}), m = computed(() => l.value?.headers ?? []), _ = computed(() => l.value?.data ?? l.value), x = ref(_.value);
		watch(_, (e) => {
			x.value = e;
		});
		let w = ref(/* @__PURE__ */ new Map()), T = computed(() => Array.from(w.value.values()).reduce((e, t) => {
			for (let n in t.value) {
				let r = t.value[n] ?? 0;
				(!e[n] || r > e[n]) && (e[n] = r);
			}
			return e;
		}, []));
		return provide(SORTABLE_TREEVIEW, {
			group: r,
			config: u,
			treeProps: computed(() => pick(a, [
				"itemChildren",
				"itemChildrenCount",
				"itemTitle",
				"itemValue"
			])),
			registerItem: (e, t) => {
				w.value.set(e, t);
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
				}), axios({
					url: u.value.updateSortOrderRoute,
					method: u.value.updateSortOrderMethod,
					data: {
						model: l.value.modelClass,
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
			onLoadChildren: (e) => axios({
				url: u.value.loadChildrenRoute,
				method: u.value.loadChildrenMethod,
				params: {
					model: l.value.modelClass,
					model_id: e[u.value.itemValue]
				},
				withCredentials: !0
			})
		}), (t, n) => (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("header", _hoisted_2, [renderSlot(t.$slots, "header", {}, () => [(openBlock(!0), createElementBlock(Fragment, null, renderList(m.value, (e, t) => (openBlock(), createElementBlock("div", {
			key: e.value,
			class: "evo-sortable-treeview__header--text",
			style: normalizeStyle({
				width: `${T.value[t]}px`,
				textAlign: e.align ?? "left"
			})
		}, toDisplayString(e.title), 5))), 128))])]), createVNode(unref(ForwardSlots), { slots: t.$slots }, {
			default: withCtx(() => [createVNode(_SortableTreeviewChildren_default, {
				modelValue: x.value,
				"onUpdate:modelValue": n[0] ||= (e) => x.value = e,
				depth: 0,
				"is-expanded": ""
			}, null, 8, ["modelValue"])]),
			_: 1
		}, 8, ["slots"])], 512));
	}
});
export { SortableTreeview_default as EvoSortableTreeview };
