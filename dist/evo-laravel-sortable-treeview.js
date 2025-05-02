import { defineComponent as xn, computed as O, toRefs as On, unref as P, ref as be, reactive as In, h as re, getCurrentInstance as Dt, watch as ot, onMounted as An, nextTick as Ue, onUnmounted as Mn, isRef as it, useId as Kt, useTemplateRef as Nn, inject as gt, resolveComponent as Qt, createElementBlock as Ae, openBlock as ae, createElementVNode as me, createVNode as ge, normalizeClass as Pn, createBlock as Fe, createCommentVNode as en, withCtx as ye, renderSlot as Ge, createTextVNode as kn, toDisplayString as tn, mergeModels as Vn, useModel as Rn, mergeProps as At, Fragment as nn, renderList as bt, createSlots as Bn, provide as Hn, normalizeStyle as jn } from "vue";
import { refAutoReset as Yn, watchPausable as Xn, useElementSize as Fn, syncRef as Ln } from "@vueuse/core";
import { ForwardSlots as on } from "@evomark/vue-forward-slots";
import { cloneDeep as Mt, reduce as $n, isEqual as zn, pick as Wn } from "lodash-es";
import yt from "axios";
import { usePage as qn } from "@inertiajs/vue3";
import './index.css';var Un = Object.defineProperty, Ze = Object.getOwnPropertySymbols, rn = Object.prototype.hasOwnProperty, an = Object.prototype.propertyIsEnumerable, Nt = (e, n, t) => n in e ? Un(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ee = (e, n) => {
  for (var t in n || (n = {}))
    rn.call(n, t) && Nt(e, t, n[t]);
  if (Ze)
    for (var t of Ze(n))
      an.call(n, t) && Nt(e, t, n[t]);
  return e;
}, ln = (e, n) => {
  var t = {};
  for (var o in e)
    rn.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && Ze)
    for (var o of Ze(e))
      n.indexOf(o) < 0 && an.call(e, o) && (t[o] = e[o]);
  return t;
};
const sn = "[vue-draggable-plus]: ";
function Gn(e) {
  console.warn(sn + e);
}
function Zn(e) {
  console.error(sn + e);
}
function Pt(e, n, t) {
  return t >= 0 && t < e.length && e.splice(t, 0, e.splice(n, 1)[0]), e;
}
function Jn(e) {
  return e.replace(/-(\w)/g, (n, t) => t ? t.toUpperCase() : "");
}
function Kn(e) {
  return Object.keys(e).reduce((n, t) => (typeof e[t] < "u" && (n[Jn(t)] = e[t]), n), {});
}
function kt(e, n) {
  return Array.isArray(e) && e.splice(n, 1), e;
}
function Vt(e, n, t) {
  return Array.isArray(e) && e.splice(n, 0, t), e;
}
function Qn(e) {
  return typeof e > "u";
}
function eo(e) {
  return typeof e == "string";
}
function Rt(e, n, t) {
  const o = e.children[t];
  e.insertBefore(n, o);
}
function lt(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function to(e, n = document) {
  var t;
  let o = null;
  return typeof (n == null ? void 0 : n.querySelector) == "function" ? o = (t = n == null ? void 0 : n.querySelector) == null ? void 0 : t.call(n, e) : o = document.querySelector(e), o || Gn(`Element not found: ${e}`), o;
}
function no(e, n, t = null) {
  return function(...o) {
    return e.apply(t, o), n.apply(t, o);
  };
}
function oo(e, n) {
  const t = Ee({}, e);
  return Object.keys(n).forEach((o) => {
    t[o] ? t[o] = no(e[o], n[o]) : t[o] = n[o];
  }), t;
}
function ro(e) {
  return e instanceof HTMLElement;
}
function Bt(e, n) {
  Object.keys(e).forEach((t) => {
    n(t, e[t]);
  });
}
function ao(e) {
  return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
  (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
const io = Object.assign;
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Ht(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    n && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function ne(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ht(Object(t), !0).forEach(function(o) {
      lo(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ht(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function Le(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Le = function(n) {
    return typeof n;
  } : Le = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Le(e);
}
function lo(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function le() {
  return le = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, le.apply(this, arguments);
}
function so(e, n) {
  if (e == null)
    return {};
  var t = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
function uo(e, n) {
  if (e == null)
    return {};
  var t = so(e, n), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]);
  }
  return t;
}
var co = "1.15.2";
function ie(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var se = ie(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Re = ie(/Edge/i), jt = ie(/firefox/i), Me = ie(/safari/i) && !ie(/chrome/i) && !ie(/android/i), un = ie(/iP(ad|od|hone)/i), cn = ie(/chrome/i) && ie(/android/i), dn = {
  capture: !1,
  passive: !1
};
function C(e, n, t) {
  e.addEventListener(n, t, !se && dn);
}
function E(e, n, t) {
  e.removeEventListener(n, t, !se && dn);
}
function Je(e, n) {
  if (n) {
    if (n[0] === ">" && (n = n.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(n);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(n);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(n);
      } catch {
        return !1;
      }
    return !1;
  }
}
function fo(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function ee(e, n, t, o) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && Je(e, n) : Je(e, n)) || o && e === t)
        return e;
      if (e === t)
        break;
    } while (e = fo(e));
  }
  return null;
}
var Yt = /\s+/g;
function U(e, n, t) {
  if (e && n)
    if (e.classList)
      e.classList[t ? "add" : "remove"](n);
    else {
      var o = (" " + e.className + " ").replace(Yt, " ").replace(" " + n + " ", " ");
      e.className = (o + (t ? " " + n : "")).replace(Yt, " ");
    }
}
function v(e, n, t) {
  var o = e && e.style;
  if (o) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (t = e.currentStyle), n === void 0 ? t : t[n];
    !(n in o) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), o[n] = t + (typeof t == "string" ? "" : "px");
  }
}
function De(e, n) {
  var t = "";
  if (typeof e == "string")
    t = e;
  else
    do {
      var o = v(e, "transform");
      o && o !== "none" && (t = o + " " + t);
    } while (!n && (e = e.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(t);
}
function fn(e, n, t) {
  if (e) {
    var o = e.getElementsByTagName(n), r = 0, i = o.length;
    if (t)
      for (; r < i; r++)
        t(o[r], r);
    return o;
  }
  return [];
}
function te() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function R(e, n, t, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var i, a, s, l, u, f, h;
    if (e !== window && e.parentNode && e !== te() ? (i = e.getBoundingClientRect(), a = i.top, s = i.left, l = i.bottom, u = i.right, f = i.height, h = i.width) : (a = 0, s = 0, l = window.innerHeight, u = window.innerWidth, f = window.innerHeight, h = window.innerWidth), (n || t) && e !== window && (r = r || e.parentNode, !se))
      do
        if (r && r.getBoundingClientRect && (v(r, "transform") !== "none" || t && v(r, "position") !== "static")) {
          var p = r.getBoundingClientRect();
          a -= p.top + parseInt(v(r, "border-top-width")), s -= p.left + parseInt(v(r, "border-left-width")), l = a + i.height, u = s + i.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var d = De(r || e), m = d && d.a, y = d && d.d;
      d && (a /= y, s /= m, h /= m, f /= y, l = a + f, u = s + h);
    }
    return {
      top: a,
      left: s,
      bottom: l,
      right: u,
      width: h,
      height: f
    };
  }
}
function Xt(e, n, t) {
  for (var o = de(e, !0), r = R(e)[n]; o; ) {
    var i = R(o)[t], a = void 0;
    if (a = r >= i, !a)
      return o;
    if (o === te())
      break;
    o = de(o, !1);
  }
  return !1;
}
function Te(e, n, t, o) {
  for (var r = 0, i = 0, a = e.children; i < a.length; ) {
    if (a[i].style.display !== "none" && a[i] !== g.ghost && (o || a[i] !== g.dragged) && ee(a[i], t.draggable, e, !1)) {
      if (r === n)
        return a[i];
      r++;
    }
    i++;
  }
  return null;
}
function Tt(e, n) {
  for (var t = e.lastElementChild; t && (t === g.ghost || v(t, "display") === "none" || n && !Je(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function K(e, n) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== g.clone && (!n || Je(e, n)) && t++;
  return t;
}
function Ft(e) {
  var n = 0, t = 0, o = te();
  if (e)
    do {
      var r = De(e), i = r.a, a = r.d;
      n += e.scrollLeft * i, t += e.scrollTop * a;
    } while (e !== o && (e = e.parentNode));
  return [n, t];
}
function po(e, n) {
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      for (var o in n)
        if (n.hasOwnProperty(o) && n[o] === e[t][o])
          return Number(t);
    }
  return -1;
}
function de(e, n) {
  if (!e || !e.getBoundingClientRect)
    return te();
  var t = e, o = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var r = v(t);
      if (t.clientWidth < t.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body)
          return te();
        if (o || n)
          return t;
        o = !0;
      }
    }
  while (t = t.parentNode);
  return te();
}
function ho(e, n) {
  if (e && n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function st(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Ne;
function pn(e, n) {
  return function() {
    if (!Ne) {
      var t = arguments, o = this;
      t.length === 1 ? e.call(o, t[0]) : e.apply(o, t), Ne = setTimeout(function() {
        Ne = void 0;
      }, n);
    }
  };
}
function mo() {
  clearTimeout(Ne), Ne = void 0;
}
function hn(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function mn(e) {
  var n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function vn(e, n, t) {
  var o = {};
  return Array.from(e.children).forEach(function(r) {
    var i, a, s, l;
    if (!(!ee(r, n.draggable, e, !1) || r.animated || r === t)) {
      var u = R(r);
      o.left = Math.min((i = o.left) !== null && i !== void 0 ? i : 1 / 0, u.left), o.top = Math.min((a = o.top) !== null && a !== void 0 ? a : 1 / 0, u.top), o.right = Math.max((s = o.right) !== null && s !== void 0 ? s : -1 / 0, u.right), o.bottom = Math.max((l = o.bottom) !== null && l !== void 0 ? l : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var Z = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function vo() {
  var e = [], n;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var t = [].slice.call(this.el.children);
        t.forEach(function(o) {
          if (!(v(o, "display") === "none" || o === g.ghost)) {
            e.push({
              target: o,
              rect: R(o)
            });
            var r = ne({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var i = De(o, !0);
              i && (r.top -= i.f, r.left -= i.e);
            }
            o.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(t) {
      e.push(t);
    },
    removeAnimationState: function(t) {
      e.splice(po(e, {
        target: t
      }), 1);
    },
    animateAll: function(t) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(n), typeof t == "function" && t();
        return;
      }
      var r = !1, i = 0;
      e.forEach(function(a) {
        var s = 0, l = a.target, u = l.fromRect, f = R(l), h = l.prevFromRect, p = l.prevToRect, d = a.rect, m = De(l, !0);
        m && (f.top -= m.f, f.left -= m.e), l.toRect = f, l.thisAnimationDuration && st(h, f) && !st(u, f) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - f.top) / (d.left - f.left) === (u.top - f.top) / (u.left - f.left) && (s = bo(d, h, p, o.options)), st(f, u) || (l.prevFromRect = u, l.prevToRect = f, s || (s = o.options.animation), o.animate(l, d, f, s)), s && (r = !0, i = Math.max(i, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(n), r ? n = setTimeout(function() {
        typeof t == "function" && t();
      }, i) : typeof t == "function" && t(), e = [];
    },
    animate: function(t, o, r, i) {
      if (i) {
        v(t, "transition", ""), v(t, "transform", "");
        var a = De(this.el), s = a && a.a, l = a && a.d, u = (o.left - r.left) / (s || 1), f = (o.top - r.top) / (l || 1);
        t.animatingX = !!u, t.animatingY = !!f, v(t, "transform", "translate3d(" + u + "px," + f + "px,0)"), this.forRepaintDummy = go(t), v(t, "transition", "transform " + i + "ms" + (this.options.easing ? " " + this.options.easing : "")), v(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          v(t, "transition", ""), v(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, i);
      }
    }
  };
}
function go(e) {
  return e.offsetWidth;
}
function bo(e, n, t, o) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * o.animation;
}
var we = [], ut = {
  initializeByDefault: !0
}, Be = {
  mount: function(e) {
    for (var n in ut)
      ut.hasOwnProperty(n) && !(n in e) && (e[n] = ut[n]);
    we.forEach(function(t) {
      if (t.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), we.push(e);
  },
  pluginEvent: function(e, n, t) {
    var o = this;
    this.eventCanceled = !1, t.cancel = function() {
      o.eventCanceled = !0;
    };
    var r = e + "Global";
    we.forEach(function(i) {
      n[i.pluginName] && (n[i.pluginName][r] && n[i.pluginName][r](ne({
        sortable: n
      }, t)), n.options[i.pluginName] && n[i.pluginName][e] && n[i.pluginName][e](ne({
        sortable: n
      }, t)));
    });
  },
  initializePlugins: function(e, n, t, o) {
    we.forEach(function(a) {
      var s = a.pluginName;
      if (!(!e.options[s] && !a.initializeByDefault)) {
        var l = new a(e, n, e.options);
        l.sortable = e, l.options = e.options, e[s] = l, le(t, l.defaults);
      }
    });
    for (var r in e.options)
      if (e.options.hasOwnProperty(r)) {
        var i = this.modifyOption(e, r, e.options[r]);
        typeof i < "u" && (e.options[r] = i);
      }
  },
  getEventProperties: function(e, n) {
    var t = {};
    return we.forEach(function(o) {
      typeof o.eventProperties == "function" && le(t, o.eventProperties.call(n[o.pluginName], e));
    }), t;
  },
  modifyOption: function(e, n, t) {
    var o;
    return we.forEach(function(r) {
      e[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (o = r.optionListeners[n].call(e[r.pluginName], t));
    }), o;
  }
};
function yo(e) {
  var n = e.sortable, t = e.rootEl, o = e.name, r = e.targetEl, i = e.cloneEl, a = e.toEl, s = e.fromEl, l = e.oldIndex, u = e.newIndex, f = e.oldDraggableIndex, h = e.newDraggableIndex, p = e.originalEvent, d = e.putSortable, m = e.extraEventProperties;
  if (n = n || t && t[Z], !!n) {
    var y, F = n.options, D = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !se && !Re ? y = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (y = document.createEvent("Event"), y.initEvent(o, !0, !0)), y.to = a || t, y.from = s || t, y.item = r || t, y.clone = i, y.oldIndex = l, y.newIndex = u, y.oldDraggableIndex = f, y.newDraggableIndex = h, y.originalEvent = p, y.pullMode = d ? d.lastPutMode : void 0;
    var W = ne(ne({}, m), Be.getEventProperties(o, n));
    for (var S in W)
      y[S] = W[S];
    t && t.dispatchEvent(y), F[D] && F[D].call(n, y);
  }
}
var wo = ["evt"], z = function(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = t.evt, r = uo(t, wo);
  Be.pluginEvent.bind(g)(e, n, ne({
    dragEl: c,
    parentEl: M,
    ghostEl: b,
    rootEl: x,
    nextEl: ve,
    lastDownEl: $e,
    cloneEl: A,
    cloneHidden: ce,
    dragStarted: xe,
    putSortable: Y,
    activeSortable: g.active,
    originalEvent: o,
    oldIndex: Ce,
    oldDraggableIndex: Pe,
    newIndex: G,
    newDraggableIndex: ue,
    hideGhostForTarget: wn,
    unhideGhostForTarget: Sn,
    cloneNowHidden: function() {
      ce = !0;
    },
    cloneNowShown: function() {
      ce = !1;
    },
    dispatchSortableEvent: function(i) {
      L({
        sortable: n,
        name: i,
        originalEvent: o
      });
    }
  }, r));
};
function L(e) {
  yo(ne({
    putSortable: Y,
    cloneEl: A,
    targetEl: c,
    rootEl: x,
    oldIndex: Ce,
    oldDraggableIndex: Pe,
    newIndex: G,
    newDraggableIndex: ue
  }, e));
}
var c, M, b, x, ve, $e, A, ce, Ce, G, Pe, ue, He, Y, _e = !1, Ke = !1, Qe = [], pe, Q, ct, dt, Lt, $t, xe, Se, ke, Ve = !1, je = !1, ze, X, ft = [], wt = !1, et = [], rt = typeof document < "u", Ye = un, zt = Re || se ? "cssFloat" : "float", So = rt && !cn && !un && "draggable" in document.createElement("div"), gn = function() {
  if (rt) {
    if (se)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), bn = function(e, n) {
  var t = v(e), o = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), r = Te(e, 0, n), i = Te(e, 1, n), a = r && v(r), s = i && v(i), l = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + R(r).width, u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + R(i).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && a.float && a.float !== "none") {
    var f = a.float === "left" ? "left" : "right";
    return i && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return r && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || l >= o && t[zt] === "none" || i && t[zt] === "none" && l + u > o) ? "vertical" : "horizontal";
}, _o = function(e, n, t) {
  var o = t ? e.left : e.top, r = t ? e.right : e.bottom, i = t ? e.width : e.height, a = t ? n.left : n.top, s = t ? n.right : n.bottom, l = t ? n.width : n.height;
  return o === a || r === s || o + i / 2 === a + l / 2;
}, Eo = function(e, n) {
  var t;
  return Qe.some(function(o) {
    var r = o[Z].options.emptyInsertThreshold;
    if (!(!r || Tt(o))) {
      var i = R(o), a = e >= i.left - r && e <= i.right + r, s = n >= i.top - r && n <= i.bottom + r;
      if (a && s)
        return t = o;
    }
  }), t;
}, yn = function(e) {
  function n(r, i) {
    return function(a, s, l, u) {
      var f = a.options.group.name && s.options.group.name && a.options.group.name === s.options.group.name;
      if (r == null && (i || f))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (i && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(a, s, l, u), i)(a, s, l, u);
      var h = (i ? a : s).options.group.name;
      return r === !0 || typeof r == "string" && r === h || r.join && r.indexOf(h) > -1;
    };
  }
  var t = {}, o = e.group;
  (!o || Le(o) != "object") && (o = {
    name: o
  }), t.name = o.name, t.checkPull = n(o.pull, !0), t.checkPut = n(o.put), t.revertClone = o.revertClone, e.group = t;
}, wn = function() {
  !gn && b && v(b, "display", "none");
}, Sn = function() {
  !gn && b && v(b, "display", "");
};
rt && !cn && document.addEventListener("click", function(e) {
  if (Ke)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ke = !1, !1;
}, !0);
var he = function(e) {
  if (c) {
    e = e.touches ? e.touches[0] : e;
    var n = Eo(e.clientX, e.clientY);
    if (n) {
      var t = {};
      for (var o in e)
        e.hasOwnProperty(o) && (t[o] = e[o]);
      t.target = t.rootEl = n, t.preventDefault = void 0, t.stopPropagation = void 0, n[Z]._onDragOver(t);
    }
  }
}, Co = function(e) {
  c && c.parentNode[Z]._isOutsideThisEl(e.target);
};
function g(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = le({}, n), e[Z] = this;
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return bn(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(i, a) {
      i.setData("Text", a.textContent);
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
    supportPointer: g.supportPointer !== !1 && "PointerEvent" in window && !Me,
    emptyInsertThreshold: 5
  };
  Be.initializePlugins(this, e, t);
  for (var o in t)
    !(o in n) && (n[o] = t[o]);
  yn(n);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : So, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? C(e, "pointerdown", this._onTapStart) : (C(e, "mousedown", this._onTapStart), C(e, "touchstart", this._onTapStart)), this.nativeDraggable && (C(e, "dragover", this), C(e, "dragenter", this)), Qe.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), le(this, vo());
}
g.prototype = /** @lends Sortable.prototype */
{
  constructor: g,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Se = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, c) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, t = this.el, o = this.options, r = o.preventOnFilter, i = e.type, a = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (a || e).target, l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, u = o.filter;
      if (No(t), !c && !(/mousedown|pointerdown/.test(i) && e.button !== 0 || o.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Me && s && s.tagName.toUpperCase() === "SELECT") && (s = ee(s, o.draggable, t, !1), !(s && s.animated) && $e !== s)) {
        if (Ce = K(s), Pe = K(s, o.draggable), typeof u == "function") {
          if (u.call(this, e, s, this)) {
            L({
              sortable: n,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: t,
              fromEl: t
            }), z("filter", n, {
              evt: e
            }), r && e.cancelable && e.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(f) {
          if (f = ee(l, f.trim(), t, !1), f)
            return L({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: t,
              toEl: t
            }), z("filter", n, {
              evt: e
            }), !0;
        }), u)) {
          r && e.cancelable && e.preventDefault();
          return;
        }
        o.handle && !ee(l, o.handle, t, !1) || this._prepareDragStart(e, a, s);
      }
    }
  },
  _prepareDragStart: function(e, n, t) {
    var o = this, r = o.el, i = o.options, a = r.ownerDocument, s;
    if (t && !c && t.parentNode === r) {
      var l = R(t);
      if (x = r, c = t, M = c.parentNode, ve = c.nextSibling, $e = t, He = i.group, g.dragged = c, pe = {
        target: c,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Lt = pe.clientX - l.left, $t = pe.clientY - l.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, c.style["will-change"] = "all", s = function() {
        if (z("delayEnded", o, {
          evt: e
        }), g.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !jt && o.nativeDraggable && (c.draggable = !0), o._triggerDragStart(e, n), L({
          sortable: o,
          name: "choose",
          originalEvent: e
        }), U(c, i.chosenClass, !0);
      }, i.ignore.split(",").forEach(function(u) {
        fn(c, u.trim(), pt);
      }), C(a, "dragover", he), C(a, "mousemove", he), C(a, "touchmove", he), C(a, "mouseup", o._onDrop), C(a, "touchend", o._onDrop), C(a, "touchcancel", o._onDrop), jt && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), z("delayStart", this, {
        evt: e
      }), i.delay && (!i.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Re || se))) {
        if (g.eventCanceled) {
          this._onDrop();
          return;
        }
        C(a, "mouseup", o._disableDelayedDrag), C(a, "touchend", o._disableDelayedDrag), C(a, "touchcancel", o._disableDelayedDrag), C(a, "mousemove", o._delayedDragTouchMoveHandler), C(a, "touchmove", o._delayedDragTouchMoveHandler), i.supportPointer && C(a, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(s, i.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    c && pt(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    E(e, "mouseup", this._disableDelayedDrag), E(e, "touchend", this._disableDelayedDrag), E(e, "touchcancel", this._disableDelayedDrag), E(e, "mousemove", this._delayedDragTouchMoveHandler), E(e, "touchmove", this._delayedDragTouchMoveHandler), E(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? C(document, "pointermove", this._onTouchMove) : n ? C(document, "touchmove", this._onTouchMove) : C(document, "mousemove", this._onTouchMove) : (C(c, "dragend", this), C(x, "dragstart", this._onDragStart));
    try {
      document.selection ? We(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (_e = !1, x && c) {
      z("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && C(document, "dragover", Co);
      var t = this.options;
      !e && U(c, t.dragClass, !1), U(c, t.ghostClass, !0), g.active = this, e && this._appendGhost(), L({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Q) {
      this._lastX = Q.clientX, this._lastY = Q.clientY, wn();
      for (var e = document.elementFromPoint(Q.clientX, Q.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Q.clientX, Q.clientY), e !== n); )
        n = e;
      if (c.parentNode[Z]._isOutsideThisEl(e), n)
        do {
          if (n[Z]) {
            var t = void 0;
            if (t = n[Z]._onDragOver({
              clientX: Q.clientX,
              clientY: Q.clientY,
              target: e,
              rootEl: n
            }), t && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      Sn();
    }
  },
  _onTouchMove: function(e) {
    if (pe) {
      var n = this.options, t = n.fallbackTolerance, o = n.fallbackOffset, r = e.touches ? e.touches[0] : e, i = b && De(b, !0), a = b && i && i.a, s = b && i && i.d, l = Ye && X && Ft(X), u = (r.clientX - pe.clientX + o.x) / (a || 1) + (l ? l[0] - ft[0] : 0) / (a || 1), f = (r.clientY - pe.clientY + o.y) / (s || 1) + (l ? l[1] - ft[1] : 0) / (s || 1);
      if (!g.active && !_e) {
        if (t && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < t)
          return;
        this._onDragStart(e, !0);
      }
      if (b) {
        i ? (i.e += u - (ct || 0), i.f += f - (dt || 0)) : i = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f
        };
        var h = "matrix(".concat(i.a, ",").concat(i.b, ",").concat(i.c, ",").concat(i.d, ",").concat(i.e, ",").concat(i.f, ")");
        v(b, "webkitTransform", h), v(b, "mozTransform", h), v(b, "msTransform", h), v(b, "transform", h), ct = u, dt = f, Q = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!b) {
      var e = this.options.fallbackOnBody ? document.body : x, n = R(c, !0, Ye, !0, e), t = this.options;
      if (Ye) {
        for (X = e; v(X, "position") === "static" && v(X, "transform") === "none" && X !== document; )
          X = X.parentNode;
        X !== document.body && X !== document.documentElement ? (X === document && (X = te()), n.top += X.scrollTop, n.left += X.scrollLeft) : X = te(), ft = Ft(X);
      }
      b = c.cloneNode(!0), U(b, t.ghostClass, !1), U(b, t.fallbackClass, !0), U(b, t.dragClass, !0), v(b, "transition", ""), v(b, "transform", ""), v(b, "box-sizing", "border-box"), v(b, "margin", 0), v(b, "top", n.top), v(b, "left", n.left), v(b, "width", n.width), v(b, "height", n.height), v(b, "opacity", "0.8"), v(b, "position", Ye ? "absolute" : "fixed"), v(b, "zIndex", "100000"), v(b, "pointerEvents", "none"), g.ghost = b, e.appendChild(b), v(b, "transform-origin", Lt / parseInt(b.style.width) * 100 + "% " + $t / parseInt(b.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var t = this, o = e.dataTransfer, r = t.options;
    if (z("dragStart", this, {
      evt: e
    }), g.eventCanceled) {
      this._onDrop();
      return;
    }
    z("setupClone", this), g.eventCanceled || (A = mn(c), A.removeAttribute("id"), A.draggable = !1, A.style["will-change"] = "", this._hideClone(), U(A, this.options.chosenClass, !1), g.clone = A), t.cloneId = We(function() {
      z("clone", t), !g.eventCanceled && (t.options.removeCloneOnHide || x.insertBefore(A, c), t._hideClone(), L({
        sortable: t,
        name: "clone"
      }));
    }), !n && U(c, r.dragClass, !0), n ? (Ke = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (E(document, "mouseup", t._onDrop), E(document, "touchend", t._onDrop), E(document, "touchcancel", t._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(t, o, c)), C(document, "drop", t), v(c, "transform", "translateZ(0)")), _e = !0, t._dragStartId = We(t._dragStarted.bind(t, n, e)), C(document, "selectstart", t), xe = !0, Me && v(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, t = e.target, o, r, i, a = this.options, s = a.group, l = g.active, u = He === s, f = a.sort, h = Y || l, p, d = this, m = !1;
    if (wt)
      return;
    function y(oe, at) {
      z(oe, d, ne({
        evt: e,
        isOwner: u,
        axis: p ? "vertical" : "horizontal",
        revert: i,
        dragRect: o,
        targetRect: r,
        canSort: f,
        fromSortable: h,
        target: t,
        completed: D,
        onMove: function(It, Tn) {
          return Xe(x, n, c, o, It, R(It), e, Tn);
        },
        changed: W
      }, at));
    }
    function F() {
      y("dragOverAnimationCapture"), d.captureAnimationState(), d !== h && h.captureAnimationState();
    }
    function D(oe) {
      return y("dragOverCompleted", {
        insertion: oe
      }), oe && (u ? l._hideClone() : l._showClone(d), d !== h && (U(c, Y ? Y.options.ghostClass : l.options.ghostClass, !1), U(c, a.ghostClass, !0)), Y !== d && d !== g.active ? Y = d : d === g.active && Y && (Y = null), h === d && (d._ignoreWhileAnimating = t), d.animateAll(function() {
        y("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (t === c && !c.animated || t === n && !t.animated) && (Se = null), !a.dragoverBubble && !e.rootEl && t !== document && (c.parentNode[Z]._isOutsideThisEl(e.target), !oe && he(e)), !a.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
    }
    function W() {
      G = K(c), ue = K(c, a.draggable), L({
        sortable: d,
        name: "change",
        toEl: n,
        newIndex: G,
        newDraggableIndex: ue,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), t = ee(t, a.draggable, n, !0), y("dragOver"), g.eventCanceled)
      return m;
    if (c.contains(e.target) || t.animated && t.animatingX && t.animatingY || d._ignoreWhileAnimating === t)
      return D(!1);
    if (Ke = !1, l && !a.disabled && (u ? f || (i = M !== x) : Y === this || (this.lastPutMode = He.checkPull(this, l, c, e)) && s.checkPut(this, l, c, e))) {
      if (p = this._getDirection(e, t) === "vertical", o = R(c), y("dragOverValid"), g.eventCanceled)
        return m;
      if (i)
        return M = x, F(), this._hideClone(), y("revert"), g.eventCanceled || (ve ? x.insertBefore(c, ve) : x.appendChild(c)), D(!0);
      var S = Tt(n, a.draggable);
      if (!S || Oo(e, p, this) && !S.animated) {
        if (S === c)
          return D(!1);
        if (S && n === e.target && (t = S), t && (r = R(t)), Xe(x, n, c, o, t, r, e, !!t) !== !1)
          return F(), S && S.nextSibling ? n.insertBefore(c, S.nextSibling) : n.appendChild(c), M = n, W(), D(!0);
      } else if (S && xo(e, p, this)) {
        var B = Te(n, 0, a, !0);
        if (B === c)
          return D(!1);
        if (t = B, r = R(t), Xe(x, n, c, o, t, r, e, !1) !== !1)
          return F(), n.insertBefore(c, B), M = n, W(), D(!0);
      } else if (t.parentNode === n) {
        r = R(t);
        var I = 0, q, fe = c.parentNode !== n, w = !_o(c.animated && c.toRect || o, t.animated && t.toRect || r, p), _ = p ? "top" : "left", k = Xt(t, "top", "top") || Xt(c, "top", "top"), $ = k ? k.scrollTop : void 0;
        Se !== t && (q = r[_], Ve = !1, je = !w && a.invertSwap || fe), I = Io(e, t, r, p, w ? 1 : a.swapThreshold, a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold, je, Se === t);
        var T;
        if (I !== 0) {
          var N = K(c);
          do
            N -= I, T = M.children[N];
          while (T && (v(T, "display") === "none" || T === b));
        }
        if (I === 0 || T === t)
          return D(!1);
        Se = t, ke = I;
        var j = t.nextElementSibling, H = !1;
        H = I === 1;
        var J = Xe(x, n, c, o, t, r, e, H);
        if (J !== !1)
          return (J === 1 || J === -1) && (H = J === 1), wt = !0, setTimeout(To, 30), F(), H && !j ? n.appendChild(c) : t.parentNode.insertBefore(c, H ? j : t), k && hn(k, 0, $ - k.scrollTop), M = c.parentNode, q !== void 0 && !je && (ze = Math.abs(q - R(t)[_])), W(), D(!0);
      }
      if (n.contains(c))
        return D(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    E(document, "mousemove", this._onTouchMove), E(document, "touchmove", this._onTouchMove), E(document, "pointermove", this._onTouchMove), E(document, "dragover", he), E(document, "mousemove", he), E(document, "touchmove", he);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    E(e, "mouseup", this._onDrop), E(e, "touchend", this._onDrop), E(e, "pointerup", this._onDrop), E(e, "touchcancel", this._onDrop), E(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, t = this.options;
    if (G = K(c), ue = K(c, t.draggable), z("drop", this, {
      evt: e
    }), M = c && c.parentNode, G = K(c), ue = K(c, t.draggable), g.eventCanceled) {
      this._nulling();
      return;
    }
    _e = !1, je = !1, Ve = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), St(this.cloneId), St(this._dragStartId), this.nativeDraggable && (E(document, "drop", this), E(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Me && v(document.body, "user-select", ""), v(c, "transform", ""), e && (xe && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()), b && b.parentNode && b.parentNode.removeChild(b), (x === M || Y && Y.lastPutMode !== "clone") && A && A.parentNode && A.parentNode.removeChild(A), c && (this.nativeDraggable && E(c, "dragend", this), pt(c), c.style["will-change"] = "", xe && !_e && U(c, Y ? Y.options.ghostClass : this.options.ghostClass, !1), U(c, this.options.chosenClass, !1), L({
      sortable: this,
      name: "unchoose",
      toEl: M,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), x !== M ? (G >= 0 && (L({
      rootEl: M,
      name: "add",
      toEl: M,
      fromEl: x,
      originalEvent: e
    }), L({
      sortable: this,
      name: "remove",
      toEl: M,
      originalEvent: e
    }), L({
      rootEl: M,
      name: "sort",
      toEl: M,
      fromEl: x,
      originalEvent: e
    }), L({
      sortable: this,
      name: "sort",
      toEl: M,
      originalEvent: e
    })), Y && Y.save()) : G !== Ce && G >= 0 && (L({
      sortable: this,
      name: "update",
      toEl: M,
      originalEvent: e
    }), L({
      sortable: this,
      name: "sort",
      toEl: M,
      originalEvent: e
    })), g.active && ((G == null || G === -1) && (G = Ce, ue = Pe), L({
      sortable: this,
      name: "end",
      toEl: M,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    z("nulling", this), x = c = M = b = ve = A = $e = ce = pe = Q = xe = G = ue = Ce = Pe = Se = ke = Y = He = g.dragged = g.ghost = g.clone = g.active = null, et.forEach(function(e) {
      e.checked = !0;
    }), et.length = ct = dt = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(e), Do(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], n, t = this.el.children, o = 0, r = t.length, i = this.options; o < r; o++)
      n = t[o], ee(n, i.draggable, this.el, !1) && e.push(n.getAttribute(i.dataIdAttr) || Mo(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var t = {}, o = this.el;
    this.toArray().forEach(function(r, i) {
      var a = o.children[i];
      ee(a, this.options.draggable, o, !1) && (t[r] = a);
    }, this), n && this.captureAnimationState(), e.forEach(function(r) {
      t[r] && (o.removeChild(t[r]), o.appendChild(t[r]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, n) {
    return ee(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    var t = this.options;
    if (n === void 0)
      return t[e];
    var o = Be.modifyOption(this, e, n);
    typeof o < "u" ? t[e] = o : t[e] = n, e === "group" && yn(t);
  },
  /**
   * Destroy
   */
  destroy: function() {
    z("destroy", this);
    var e = this.el;
    e[Z] = null, E(e, "mousedown", this._onTapStart), E(e, "touchstart", this._onTapStart), E(e, "pointerdown", this._onTapStart), this.nativeDraggable && (E(e, "dragover", this), E(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Qe.splice(Qe.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!ce) {
      if (z("hideClone", this), g.eventCanceled)
        return;
      v(A, "display", "none"), this.options.removeCloneOnHide && A.parentNode && A.parentNode.removeChild(A), ce = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ce) {
      if (z("showClone", this), g.eventCanceled)
        return;
      c.parentNode == x && !this.options.group.revertClone ? x.insertBefore(A, c) : ve ? x.insertBefore(A, ve) : x.appendChild(A), this.options.group.revertClone && this.animate(c, A), v(A, "display", ""), ce = !1;
    }
  }
};
function Do(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Xe(e, n, t, o, r, i, a, s) {
  var l, u = e[Z], f = u.options.onMove, h;
  return window.CustomEvent && !se && !Re ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = n, l.from = e, l.dragged = t, l.draggedRect = o, l.related = r || n, l.relatedRect = i || R(n), l.willInsertAfter = s, l.originalEvent = a, e.dispatchEvent(l), f && (h = f.call(u, l, a)), h;
}
function pt(e) {
  e.draggable = !1;
}
function To() {
  wt = !1;
}
function xo(e, n, t) {
  var o = R(Te(t.el, 0, t.options, !0)), r = vn(t.el, t.options, b), i = 10;
  return n ? e.clientX < r.left - i || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - i || e.clientY < o.bottom && e.clientX < o.left;
}
function Oo(e, n, t) {
  var o = R(Tt(t.el, t.options.draggable)), r = vn(t.el, t.options, b), i = 10;
  return n ? e.clientX > r.right + i || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + i || e.clientX > o.right && e.clientY > o.top;
}
function Io(e, n, t, o, r, i, a, s) {
  var l = o ? e.clientY : e.clientX, u = o ? t.height : t.width, f = o ? t.top : t.left, h = o ? t.bottom : t.right, p = !1;
  if (!a) {
    if (s && ze < u * r) {
      if (!Ve && (ke === 1 ? l > f + u * i / 2 : l < h - u * i / 2) && (Ve = !0), Ve)
        p = !0;
      else if (ke === 1 ? l < f + ze : l > h - ze)
        return -ke;
    } else if (l > f + u * (1 - r) / 2 && l < h - u * (1 - r) / 2)
      return Ao(n);
  }
  return p = p || a, p && (l < f + u * i / 2 || l > h - u * i / 2) ? l > f + u / 2 ? 1 : -1 : 0;
}
function Ao(e) {
  return K(c) < K(e) ? 1 : -1;
}
function Mo(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, o = 0; t--; )
    o += n.charCodeAt(t);
  return o.toString(36);
}
function No(e) {
  et.length = 0;
  for (var n = e.getElementsByTagName("input"), t = n.length; t--; ) {
    var o = n[t];
    o.checked && et.push(o);
  }
}
function We(e) {
  return setTimeout(e, 0);
}
function St(e) {
  return clearTimeout(e);
}
rt && C(document, "touchmove", function(e) {
  (g.active || _e) && e.cancelable && e.preventDefault();
});
g.utils = {
  on: C,
  off: E,
  css: v,
  find: fn,
  is: function(e, n) {
    return !!ee(e, n, e, !1);
  },
  extend: ho,
  throttle: pn,
  closest: ee,
  toggleClass: U,
  clone: mn,
  index: K,
  nextTick: We,
  cancelNextTick: St,
  detectDirection: bn,
  getChild: Te
};
g.get = function(e) {
  return e[Z];
};
g.mount = function() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  n[0].constructor === Array && (n = n[0]), n.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (g.utils = ne(ne({}, g.utils), o.utils)), Be.mount(o);
  });
};
g.create = function(e, n) {
  return new g(e, n);
};
g.version = co;
var V = [], Oe, _t, Et = !1, ht, mt, tt, Ie;
function Po() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var t = n.originalEvent;
      this.sortable.nativeDraggable ? C(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? C(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? C(document, "touchmove", this._handleFallbackAutoScroll) : C(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var t = n.originalEvent;
      !this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
    },
    drop: function() {
      this.sortable.nativeDraggable ? E(document, "dragover", this._handleAutoScroll) : (E(document, "pointermove", this._handleFallbackAutoScroll), E(document, "touchmove", this._handleFallbackAutoScroll), E(document, "mousemove", this._handleFallbackAutoScroll)), Wt(), qe(), mo();
    },
    nulling: function() {
      tt = _t = Oe = Et = Ie = ht = mt = null, V.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, t) {
      var o = this, r = (n.touches ? n.touches[0] : n).clientX, i = (n.touches ? n.touches[0] : n).clientY, a = document.elementFromPoint(r, i);
      if (tt = n, t || this.options.forceAutoScrollFallback || Re || se || Me) {
        vt(n, this.options, a, t);
        var s = de(a, !0);
        Et && (!Ie || r !== ht || i !== mt) && (Ie && Wt(), Ie = setInterval(function() {
          var l = de(document.elementFromPoint(r, i), !0);
          l !== s && (s = l, qe()), vt(n, o.options, l, t);
        }, 10), ht = r, mt = i);
      } else {
        if (!this.options.bubbleScroll || de(a, !0) === te()) {
          qe();
          return;
        }
        vt(n, this.options, de(a, !1), !1);
      }
    }
  }, le(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function qe() {
  V.forEach(function(e) {
    clearInterval(e.pid);
  }), V = [];
}
function Wt() {
  clearInterval(Ie);
}
var vt = pn(function(e, n, t, o) {
  if (n.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = n.scrollSensitivity, s = n.scrollSpeed, l = te(), u = !1, f;
    _t !== t && (_t = t, qe(), Oe = n.scroll, f = n.scrollFn, Oe === !0 && (Oe = de(t, !0)));
    var h = 0, p = Oe;
    do {
      var d = p, m = R(d), y = m.top, F = m.bottom, D = m.left, W = m.right, S = m.width, B = m.height, I = void 0, q = void 0, fe = d.scrollWidth, w = d.scrollHeight, _ = v(d), k = d.scrollLeft, $ = d.scrollTop;
      d === l ? (I = S < fe && (_.overflowX === "auto" || _.overflowX === "scroll" || _.overflowX === "visible"), q = B < w && (_.overflowY === "auto" || _.overflowY === "scroll" || _.overflowY === "visible")) : (I = S < fe && (_.overflowX === "auto" || _.overflowX === "scroll"), q = B < w && (_.overflowY === "auto" || _.overflowY === "scroll"));
      var T = I && (Math.abs(W - r) <= a && k + S < fe) - (Math.abs(D - r) <= a && !!k), N = q && (Math.abs(F - i) <= a && $ + B < w) - (Math.abs(y - i) <= a && !!$);
      if (!V[h])
        for (var j = 0; j <= h; j++)
          V[j] || (V[j] = {});
      (V[h].vx != T || V[h].vy != N || V[h].el !== d) && (V[h].el = d, V[h].vx = T, V[h].vy = N, clearInterval(V[h].pid), (T != 0 || N != 0) && (u = !0, V[h].pid = setInterval((function() {
        o && this.layer === 0 && g.active._onTouchMove(tt);
        var H = V[this.layer].vy ? V[this.layer].vy * s : 0, J = V[this.layer].vx ? V[this.layer].vx * s : 0;
        typeof f == "function" && f.call(g.dragged.parentNode[Z], J, H, e, tt, V[this.layer].el) !== "continue" || hn(V[this.layer].el, J, H);
      }).bind({
        layer: h
      }), 24))), h++;
    } while (n.bubbleScroll && p !== l && (p = de(p, !1)));
    Et = u;
  }
}, 30), _n = function(e) {
  var n = e.originalEvent, t = e.putSortable, o = e.dragEl, r = e.activeSortable, i = e.dispatchSortableEvent, a = e.hideGhostForTarget, s = e.unhideGhostForTarget;
  if (n) {
    var l = t || r;
    a();
    var u = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(u.clientX, u.clientY);
    s(), l && !l.el.contains(f) && (i("spill"), this.onSpill({
      dragEl: o,
      putSortable: t
    }));
  }
};
function xt() {
}
xt.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, t = e.putSortable;
    this.sortable.captureAnimationState(), t && t.captureAnimationState();
    var o = Te(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), t && t.animateAll();
  },
  drop: _n
};
le(xt, {
  pluginName: "revertOnSpill"
});
function Ot() {
}
Ot.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, t = e.putSortable, o = t || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: _n
};
le(Ot, {
  pluginName: "removeOnSpill"
});
g.mount(new Po());
g.mount(Ot, xt);
function ko(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function Vo(e) {
  Dt() && Mn(e);
}
function Ro(e) {
  Dt() ? An(e) : Ue(e);
}
let En = null, Cn = null;
function qt(e = null, n = null) {
  En = e, Cn = n;
}
function Bo() {
  return {
    data: En,
    clonedData: Cn
  };
}
const Ut = Symbol("cloneElement");
function Ho(...e) {
  var n, t;
  const o = (n = Dt()) == null ? void 0 : n.proxy;
  let r = null;
  const i = e[0];
  let [, a, s] = e;
  Array.isArray(P(a)) || (s = a, a = null);
  let l = null;
  const {
    immediate: u = !0,
    clone: f = ko,
    customUpdate: h
  } = (t = P(s)) != null ? t : {};
  function p(w) {
    var _;
    const { from: k, oldIndex: $, item: T } = w;
    r = Array.from(k.childNodes);
    const N = P((_ = P(a)) == null ? void 0 : _[$]), j = f(N);
    qt(N, j), T[Ut] = j;
  }
  function d(w) {
    const _ = w.item[Ut];
    if (!Qn(_)) {
      if (lt(w.item), it(a)) {
        const k = [...P(a)];
        a.value = Vt(k, w.newDraggableIndex, _);
        return;
      }
      Vt(P(a), w.newDraggableIndex, _);
    }
  }
  function m(w) {
    const { from: _, item: k, oldIndex: $, oldDraggableIndex: T, pullMode: N, clone: j } = w;
    if (Rt(_, k, $), N === "clone") {
      lt(j);
      return;
    }
    if (it(a)) {
      const H = [...P(a)];
      a.value = kt(H, T);
      return;
    }
    kt(P(a), T);
  }
  function y(w) {
    if (h) {
      h(w);
      return;
    }
    const { from: _, item: k, oldIndex: $, oldDraggableIndex: T, newDraggableIndex: N } = w;
    if (lt(k), Rt(_, k, $), it(a)) {
      const j = [...P(a)];
      a.value = Pt(
        j,
        T,
        N
      );
      return;
    }
    Pt(P(a), T, N);
  }
  function F(w) {
    const { newIndex: _, oldIndex: k, from: $, to: T } = w;
    let N = null;
    const j = _ === k && $ === T;
    try {
      if (j) {
        let H = null;
        r == null || r.some((J, oe) => {
          if (H && (r == null ? void 0 : r.length) !== T.childNodes.length)
            return $.insertBefore(H, J.nextSibling), !0;
          const at = T.childNodes[oe];
          H = T == null ? void 0 : T.replaceChild(J, at);
        });
      }
    } catch (H) {
      N = H;
    } finally {
      r = null;
    }
    Ue(() => {
      if (qt(), N)
        throw N;
    });
  }
  const D = {
    onUpdate: y,
    onStart: p,
    onAdd: d,
    onRemove: m,
    onEnd: F
  };
  function W(w) {
    const _ = P(i);
    return w || (w = eo(_) ? to(_, o == null ? void 0 : o.$el) : _), w && !ro(w) && (w = w.$el), w || Zn("Root element not found"), w;
  }
  function S() {
    var w;
    const _ = (w = P(s)) != null ? w : {}, { immediate: k, clone: $ } = _, T = ln(_, ["immediate", "clone"]);
    return Bt(T, (N, j) => {
      ao(N) && (T[N] = (H, ...J) => {
        const oe = Bo();
        return io(H, oe), j(H, ...J);
      });
    }), oo(
      a === null ? {} : D,
      T
    );
  }
  const B = (w) => {
    w = W(w), l && I.destroy(), l = new g(w, S());
  };
  ot(
    () => s,
    () => {
      l && Bt(S(), (w, _) => {
        l == null || l.option(w, _);
      });
    },
    { deep: !0 }
  );
  const I = {
    option: (w, _) => l == null ? void 0 : l.option(w, _),
    destroy: () => {
      l == null || l.destroy(), l = null;
    },
    save: () => l == null ? void 0 : l.save(),
    toArray: () => l == null ? void 0 : l.toArray(),
    closest: (...w) => l == null ? void 0 : l.closest(...w)
  }, q = () => I == null ? void 0 : I.option("disabled", !0), fe = () => I == null ? void 0 : I.option("disabled", !1);
  return Ro(() => {
    u && B();
  }), Vo(I.destroy), Ee({ start: B, pause: q, resume: fe }, I);
}
const Ct = [
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
], jo = [
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
  ...Ct.map((e) => `on${e.replace(/^\S/, (n) => n.toUpperCase())}`)
], Yo = xn({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: jo,
  emits: ["update:modelValue", ...Ct],
  setup(e, { slots: n, emit: t, expose: o, attrs: r }) {
    const i = Ct.reduce((f, h) => {
      const p = `on${h.replace(/^\S/, (d) => d.toUpperCase())}`;
      return f[p] = (...d) => t(h, ...d), f;
    }, {}), a = O(() => {
      const f = On(e), { modelValue: h } = f, p = ln(f, ["modelValue"]), d = Object.entries(p).reduce((m, [y, F]) => {
        const D = P(F);
        return D !== void 0 && (m[y] = D), m;
      }, {});
      return Ee(Ee({}, i), Kn(Ee(Ee({}, r), d)));
    }), s = O({
      get: () => e.modelValue,
      set: (f) => t("update:modelValue", f)
    }), l = be(), u = In(
      Ho(e.target || l, s, a)
    );
    return o(u), () => {
      var f;
      return re(e.tag || "div", { ref: l }, (f = n == null ? void 0 : n.default) == null ? void 0 : f.call(n, u));
    };
  }
});
var Xo = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Fo = "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z";
const nt = Symbol.for("sortable-treeview"), Lo = {
  transform: "rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))"
}, Gt = {
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
}, $o = {
  props: {
    type: {
      type: String,
      required: !0
    },
    path: {
      type: [String, Object, Array],
      required: !1
    },
    pathString: {
      type: [Array, String, Object],
      required: !1
    }
  },
  setup(e) {
    return () => e.type === "fad" ? (console.warn("vue3-icon does not currently support Duotone FontAwesome icons"), re("path")) : Array.isArray(e.path) ? re(
      "g",
      {
        style: {
          fill: "currentcolor"
        }
      },
      e.path.map((n) => typeof n == "string" ? re("path", { d: n }) : re("path", { ...n }))
    ) : re("path", {
      d: e.pathString,
      style: {
        fill: "currentcolor"
      }
    });
  }
}, Zt = {
  name: "icon",
  props: {
    /**
     * The icon type, e.g. mdi or simple-icons
     */
    type: {
      type: String,
      default: "mdi"
    },
    /**
     * The FontAwesome icon object
     */
    faIcon: {
      type: Object,
      default: null
    },
    /**
     * The svg path for the icon
     */
    path: {
      type: [String, Object, Array]
    },
    /**
     * The size of the icon when rendered in the browser
     */
    size: {
      type: [Number, String],
      default: 24
    },
    /**
     * The SVG viewbox, affects path position, but not render size
     */
    viewbox: {
      type: String,
      required: !1
    },
    /**
     * Flip the icon either horizontally, vertically, or both
     */
    flip: {
      type: String,
      default: "",
      validator: (e) => ["", "horizontal", "vertical", "both"].includes(e)
    },
    /**
     * Rotate the icon
     */
    rotate: {
      type: [Number, String],
      default: 0
    },
    /**
     * Don't add the XML namespace attribute
     */
    noNamespace: {
      type: Boolean,
      default: !1
    },
    /**
     * Don't add any styles to SVG, disables flip and rotate
     */
    noStyles: {
      type: Boolean,
      default: !1
    },
    /**
     * Don't add the width/height attributes to the SVG element
     */
    noDimensions: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    if (!e.path && !e.faIcon)
      return console.warn("vue3-icon requires either a 'path' or an 'fa-icon' property"), () => re("div");
    const n = O(() => {
      var u;
      return ((u = e.faIcon) == null ? void 0 : u.prefix) || e.type;
    }), t = O(() => parseInt(e.rotate, 10)), o = O(() => Gt[n.value] || Gt.default), r = O(() => parseInt(e.size, 10) || o.value.size), i = O(() => e.faIcon ? `0 0 ${e.faIcon.icon[0]} ${e.faIcon.icon[1]}` : !1), a = O(() => i.value || e.viewbox || o.value.viewbox), s = O(() => {
      if (e.noStyles !== !0)
        return {
          ...Lo,
          "--sx": ["both", "horizontal"].includes(e.flip) ? "-1" : "1",
          "--sy": ["both", "vertical"].includes(e.flip) ? "-1" : "1",
          "--r": isNaN(t.value) ? t.value : t.value + "deg"
        };
    }), l = O(() => {
      var u;
      return e.faIcon ? (u = e.faIcon) == null ? void 0 : u.icon[4] : e.type === "simple-icons" && typeof e.path == "object" ? e.path.path : e.path;
    });
    return () => re(
      "svg",
      {
        xmlns: e.noNamespace !== !0 ? "http://www.w3.org/2000/svg" : void 0,
        style: s.value,
        class: ["vue3-icon"],
        width: e.noDimensions !== !0 ? r.value : void 0,
        height: e.noDimensions !== !0 ? r.value : void 0,
        viewBox: a.value
      },
      [re($o, { path: e.path, type: n.value, pathString: l.value })]
    );
  }
}, Jt = (e, n) => $n(
  e,
  (t, o, r) => (zn(o, n[r]) || (t[r] = o), t),
  {}
), zo = (e, n = {}) => {
  const t = n.updateItemRoute, o = n.updateItemMethod, r = n.itemValue, i = computed(() => Mt(e())), a = ref(), s = computed(() => Mt(a.value)), l = Yn(null, 4e3), u = (p) => yt({
    url: t,
    method: o,
    data: p
  }).then((d) => {
    n.onSuccess && typeof n.onSuccess == "function" && n.onSuccess(d.data);
  }).catch((d) => {
    throw l.value = d.response.data.message, n.onError && typeof n.onError == "function" && n.onError(d.response), new Error(d);
  });
  ot(
    i,
    (p, d) => {
      if (d !== void 0) {
        const m = Jt(p, d);
        Object.keys(m).length > 0 && (m[r] = p[r], u(m));
      }
      a.value = p;
    },
    {
      immediate: !0,
      deep: !0
    }
  );
  const { pause: f, resume: h } = Xn(
    s,
    (p, d) => {
      if (d !== void 0) {
        const m = Jt(p, d);
        Object.keys(m).length > 0 && (m[r] = p[r], u(m).catch(async () => {
          f(), await Ue(), a.value = d, await Ue(), h();
        }));
      }
    },
    {
      deep: !0
    }
  );
  return {
    data: a,
    error: l,
    update: u
  };
}, Wo = { class: "evo-sortable-treeview__item" }, qo = { class: "evo-sortable-treeview__item-content" }, Uo = {
  ref: "item",
  class: "evo-sortable-treeview__actions"
}, Go = { class: "evo-sortable-treeview__action-drag" }, Zo = { class: "evo-sortable-treeview__action-title" }, Jo = {
  class: "d-flex align-center",
  ref: "columns"
}, Ko = /* @__PURE__ */ Object.assign({
  name: "EvoSortableTreeviewItem"
}, {
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
    const n = e, t = Kt(), o = Nn("columns"), r = gt(nt), i = O(() => r.config.value.itemTitle), a = O(() => r.config.value.itemValue), s = O(() => r.config.value.itemChildren), l = O(() => r.config.value.itemChildrenCount), { data: u } = zo(() => n.item, {
      ...r.config.value,
      onSuccess: (S) => {
        r.emit("updated", S);
      },
      onError: (S) => {
        r.emit("error", S);
      }
    }), f = be([]), { width: h } = Fn(o);
    ot(
      h,
      (S) => {
        var B;
        if (!o.value) return [];
        f.value = Array.from((B = o.value) == null ? void 0 : B.children).map((I) => {
          const { width: q } = I.getBoundingClientRect();
          return q;
        });
      },
      {
        immediate: !0
      }
    );
    const { registerItem: p } = gt(nt);
    p(t, f);
    const d = be([]), m = O(() => {
      var S, B;
      return n.item[l.value] > 0 || (S = d.value) != null && S.length ? !0 : !!(Array.isArray(n.item[s.value]) && ((B = n.item[s.value]) == null ? void 0 : B.length) > 0);
    }), y = be(!1);
    Ln(() => n.item[s.value], d, {
      direction: "ltr",
      transform: {
        ltr: (S) => S
      },
      immediate: !0
    });
    const F = O(() => {
      var S;
      return m.value && ((S = d.value) == null ? void 0 : S.length) > 0;
    }), D = be(!1), W = () => {
      if (D.value || F.value) return D.value = !D.value;
      y.value = !0, r.onLoadChildren(n.item).then((S) => {
        d.value = S.data.children ?? [], D.value = !D.value;
      }).finally(() => {
        y.value = !1;
      });
    };
    return (S, B) => {
      const I = Qt("VBtn");
      return ae(), Ae("li", Wo, [
        me("div", qo, [
          me("div", Uo, [
            me("div", {
              class: Pn(["evo-sortable-treeview__action-expand", {
                "is-expanded": D.value
              }])
            }, [
              m.value ? (ae(), Fe(I, {
                key: 0,
                icon: "",
                variant: "flat",
                size: "small",
                loading: y.value,
                onClick: W
              }, {
                default: ye(() => [
                  ge(P(Zt), {
                    class: "evo-sortable-treeview__expand-icon",
                    size: "24",
                    path: P(Xo),
                    rotate: D.value ? 90 : 0
                  }, null, 8, ["path", "rotate"])
                ]),
                _: 1
              }, 8, ["loading"])) : en("", !0)
            ], 2),
            me("div", Go, [
              ge(I, {
                variant: "plain",
                size: "small",
                class: "drag-handle cursor-move"
              }, {
                default: ye(() => [
                  ge(P(Zt), { path: P(Fo) }, null, 8, ["path"])
                ]),
                _: 1
              })
            ]),
            me("div", Zo, [
              Ge(S.$slots, "item.title", {
                item: n.item,
                title: n.item[i.value]
              }, () => [
                kn(tn(n.item[i.value]), 1)
              ])
            ])
          ], 512),
          me("div", Jo, [
            Ge(S.$slots, "item.columns", { item: P(u) })
          ], 512)
        ]),
        ge(P(on), { slots: S.$slots }, {
          default: ye(() => [
            ge(Dn, {
              modelValue: d.value,
              "onUpdate:modelValue": B[0] || (B[0] = (q) => d.value = q),
              "is-expanded": D.value,
              "is-empty": !m.value,
              depth: n.depth + 1,
              "parent-id": n.item[a.value]
            }, null, 8, ["modelValue", "is-expanded", "is-empty", "depth", "parent-id"])
          ]),
          _: 1
        }, 8, ["slots"])
      ]);
    };
  }
}), Dn = /* @__PURE__ */ Object.assign({
  name: "EvoSortableTreeviewChildren"
}, {
  __name: "_SortableTreeviewChildren",
  props: /* @__PURE__ */ Vn({
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
  setup(e) {
    const n = Rn(e, "modelValue"), t = e, o = gt(nt), r = O(() => o.config.value.itemValue), i = O(() => ({
      class: "evo-sortable-treeview__drag-area",
      style: {
        minHeight: t.isEmpty ? "1px" : "",
        paddingLeft: t.parentId ? "1rem" : "0px"
      },
      tag: "ul",
      group: o.group,
      draggable: "li",
      handle: ".drag-handle",
      "onUpdate:modelValue": (a) => o.onSorted(a, t.parentId)
    }));
    return (a, s) => {
      const l = Qt("VExpandTransition");
      return ae(), Fe(l, null, {
        default: ye(() => [
          t.isExpanded || t.isEmpty ? (ae(), Fe(P(Yo), At({
            key: 0,
            modelValue: n.value,
            "onUpdate:modelValue": s[0] || (s[0] = (u) => n.value = u)
          }, i.value), {
            default: ye(() => [
              (ae(!0), Ae(nn, null, bt(n.value, (u) => (ae(), Fe(Ko, {
                key: `${u[r.value]}_item`,
                item: u,
                depth: t.depth
              }, Bn({ _: 2 }, [
                bt(a.$slots, (f, h) => ({
                  name: h,
                  fn: ye((p) => [
                    Ge(a.$slots, h, At({ ref_for: !0 }, p))
                  ])
                }))
              ]), 1032, ["item", "depth"]))), 128))
            ]),
            _: 3
          }, 16, ["modelValue"])) : en("", !0)
        ]),
        _: 3
      });
    };
  }
}), Qo = {
  ref: "treeview",
  class: "evo-sortable-treeview"
}, er = { class: "evo-sortable-treeview__header" }, lr = /* @__PURE__ */ Object.assign({
  name: "EvoSortableTreeview"
}, {
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
  emits: ["sorted", "updated", "error"],
  setup(e, { emit: n }) {
    const t = Kt(), o = n, r = e, i = O(() => typeof r.model == "string" ? qn().props[r.model] : r.model), a = O(() => {
      var p;
      return ((p = i.value) == null ? void 0 : p.config) ?? {};
    }), s = O(() => {
      var p;
      return ((p = i.value) == null ? void 0 : p.headers) ?? [];
    }), l = O(() => {
      var p;
      return ((p = i.value) == null ? void 0 : p.data) ?? i.value;
    }), u = be(l.value);
    ot(l, (p) => {
      u.value = p;
    });
    const f = be(/* @__PURE__ */ new Map()), h = O(() => Array.from(f.value.values()).reduce((p, d) => {
      for (const m in d.value) {
        const y = d.value[m] ?? 0;
        (!p[m] || y > p[m]) && (p[m] = y);
      }
      return p;
    }, []));
    return Hn(nt, {
      group: t,
      config: a,
      treeProps: O(() => Wn(r, ["itemChildren", "itemChildrenCount", "itemTitle", "itemValue"])),
      registerItem: (p, d) => {
        f.value.set(p, d);
      },
      emit(p, d) {
        o(p, d);
      },
      onSorted: (p, d) => {
        const m = p.map((y) => y[a.value.itemValue]) ?? [];
        return o("sorted", {
          parentId: d,
          ids: m,
          $event: p
        }), yt({
          url: a.value.updateSortOrderRoute,
          method: a.value.updateSortOrderMethod,
          data: {
            model: i.value.modelClass,
            parent_id: d,
            ids: m
          },
          withCredentials: !0,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          responseType: "json"
        });
      },
      onLoadChildren: (p) => yt({
        url: a.value.loadChildrenRoute,
        method: a.value.loadChildrenMethod,
        params: {
          model: i.value.modelClass,
          model_id: p[a.value.itemValue]
        },
        withCredentials: !0
      })
    }), (p, d) => (ae(), Ae("div", Qo, [
      me("header", er, [
        Ge(p.$slots, "header", {}, () => [
          (ae(!0), Ae(nn, null, bt(s.value, (m, y) => (ae(), Ae("div", {
            key: m.value,
            style: jn({
              width: `${h.value[y]}px`,
              textAlign: m.align ?? "left"
            })
          }, tn(m.title), 5))), 128))
        ])
      ]),
      ge(P(on), { slots: p.$slots }, {
        default: ye(() => [
          ge(Dn, {
            modelValue: u.value,
            "onUpdate:modelValue": d[0] || (d[0] = (m) => u.value = m),
            depth: 0,
            "is-expanded": ""
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["slots"])
    ], 512));
  }
});
export {
  lr as EvoSortableTreeview
};
