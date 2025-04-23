import { defineComponent as Tn, computed as ee, toRefs as xn, unref as E, ref as On, reactive as In, h as re, getCurrentInstance as Et, watch as Zt, onMounted as An, nextTick as Ue, onUnmounted as Mn, isRef as Ie, useId as Jt, inject as mt, resolveComponent as Kt, createElementBlock as Ae, openBlock as ae, createElementVNode as me, createVNode as ge, normalizeClass as Nn, createBlock as Fe, createCommentVNode as Qt, withCtx as be, renderSlot as Ge, createTextVNode as Pn, toDisplayString as en, mergeModels as kn, useModel as Vn, mergeProps as Ot, Fragment as tn, renderList as vt, createSlots as Rn, provide as Bn, normalizeStyle as Hn } from "vue";
import { refAutoReset as jn, watchPausable as Yn, useElementSize as Xn, syncRef as Fn } from "@vueuse/core";
import { ForwardSlots as nn } from "@evomark/vue-forward-slots";
import { cloneDeep as It, reduce as $n, isEqual as Ln, pick as zn } from "lodash-es";
import gt from "axios";
import { usePage as Wn } from "@inertiajs/vue3";
import './index.css';var qn = Object.defineProperty, Ze = Object.getOwnPropertySymbols, on = Object.prototype.hasOwnProperty, rn = Object.prototype.propertyIsEnumerable, At = (e, n, t) => n in e ? qn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, _e = (e, n) => {
  for (var t in n || (n = {}))
    on.call(n, t) && At(e, t, n[t]);
  if (Ze)
    for (var t of Ze(n))
      rn.call(n, t) && At(e, t, n[t]);
  return e;
}, an = (e, n) => {
  var t = {};
  for (var o in e)
    on.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && Ze)
    for (var o of Ze(e))
      n.indexOf(o) < 0 && rn.call(e, o) && (t[o] = e[o]);
  return t;
};
const ln = "[vue-draggable-plus]: ";
function Un(e) {
  console.warn(ln + e);
}
function Gn(e) {
  console.error(ln + e);
}
function Mt(e, n, t) {
  return t >= 0 && t < e.length && e.splice(t, 0, e.splice(n, 1)[0]), e;
}
function Zn(e) {
  return e.replace(/-(\w)/g, (n, t) => t ? t.toUpperCase() : "");
}
function Jn(e) {
  return Object.keys(e).reduce((n, t) => (typeof e[t] < "u" && (n[Zn(t)] = e[t]), n), {});
}
function Nt(e, n) {
  return Array.isArray(e) && e.splice(n, 1), e;
}
function Pt(e, n, t) {
  return Array.isArray(e) && e.splice(n, 0, t), e;
}
function Kn(e) {
  return typeof e > "u";
}
function Qn(e) {
  return typeof e == "string";
}
function kt(e, n, t) {
  const o = e.children[t];
  e.insertBefore(n, o);
}
function at(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function eo(e, n = document) {
  var t;
  let o = null;
  return typeof (n == null ? void 0 : n.querySelector) == "function" ? o = (t = n == null ? void 0 : n.querySelector) == null ? void 0 : t.call(n, e) : o = document.querySelector(e), o || Un(`Element not found: ${e}`), o;
}
function to(e, n, t = null) {
  return function(...o) {
    return e.apply(t, o), n.apply(t, o);
  };
}
function no(e, n) {
  const t = _e({}, e);
  return Object.keys(n).forEach((o) => {
    t[o] ? t[o] = to(e[o], n[o]) : t[o] = n[o];
  }), t;
}
function oo(e) {
  return e instanceof HTMLElement;
}
function Vt(e, n) {
  Object.keys(e).forEach((t) => {
    n(t, e[t]);
  });
}
function ro(e) {
  return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
  (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
const ao = Object.assign;
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Rt(e, n) {
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
    n % 2 ? Rt(Object(t), !0).forEach(function(o) {
      io(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Rt(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function $e(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $e = function(n) {
    return typeof n;
  } : $e = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $e(e);
}
function io(e, n, t) {
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
function lo(e, n) {
  if (e == null)
    return {};
  var t = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
function so(e, n) {
  if (e == null)
    return {};
  var t = lo(e, n), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]);
  }
  return t;
}
var uo = "1.15.2";
function ie(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var se = ie(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Re = ie(/Edge/i), Bt = ie(/firefox/i), Me = ie(/safari/i) && !ie(/chrome/i) && !ie(/android/i), sn = ie(/iP(ad|od|hone)/i), un = ie(/chrome/i) && ie(/android/i), cn = {
  capture: !1,
  passive: !1
};
function D(e, n, t) {
  e.addEventListener(n, t, !se && cn);
}
function C(e, n, t) {
  e.removeEventListener(n, t, !se && cn);
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
function co(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Q(e, n, t, o) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && Je(e, n) : Je(e, n)) || o && e === t)
        return e;
      if (e === t)
        break;
    } while (e = co(e));
  }
  return null;
}
var Ht = /\s+/g;
function q(e, n, t) {
  if (e && n)
    if (e.classList)
      e.classList[t ? "add" : "remove"](n);
    else {
      var o = (" " + e.className + " ").replace(Ht, " ").replace(" " + n + " ", " ");
      e.className = (o + (t ? " " + n : "")).replace(Ht, " ");
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
function Ce(e, n) {
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
function dn(e, n, t) {
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
function V(e, n, t, o, r) {
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
      var c = Ce(r || e), m = c && c.a, y = c && c.d;
      c && (a /= y, s /= m, h /= m, f /= y, l = a + f, u = s + h);
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
function jt(e, n, t) {
  for (var o = de(e, !0), r = V(e)[n]; o; ) {
    var i = V(o)[t], a = void 0;
    if (a = r >= i, !a)
      return o;
    if (o === te())
      break;
    o = de(o, !1);
  }
  return !1;
}
function De(e, n, t, o) {
  for (var r = 0, i = 0, a = e.children; i < a.length; ) {
    if (a[i].style.display !== "none" && a[i] !== g.ghost && (o || a[i] !== g.dragged) && Q(a[i], t.draggable, e, !1)) {
      if (r === n)
        return a[i];
      r++;
    }
    i++;
  }
  return null;
}
function Ct(e, n) {
  for (var t = e.lastElementChild; t && (t === g.ghost || v(t, "display") === "none" || n && !Je(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function J(e, n) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== g.clone && (!n || Je(e, n)) && t++;
  return t;
}
function Yt(e) {
  var n = 0, t = 0, o = te();
  if (e)
    do {
      var r = Ce(e), i = r.a, a = r.d;
      n += e.scrollLeft * i, t += e.scrollTop * a;
    } while (e !== o && (e = e.parentNode));
  return [n, t];
}
function fo(e, n) {
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
function po(e, n) {
  if (e && n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function it(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Ne;
function fn(e, n) {
  return function() {
    if (!Ne) {
      var t = arguments, o = this;
      t.length === 1 ? e.call(o, t[0]) : e.apply(o, t), Ne = setTimeout(function() {
        Ne = void 0;
      }, n);
    }
  };
}
function ho() {
  clearTimeout(Ne), Ne = void 0;
}
function pn(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function hn(e) {
  var n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function mn(e, n, t) {
  var o = {};
  return Array.from(e.children).forEach(function(r) {
    var i, a, s, l;
    if (!(!Q(r, n.draggable, e, !1) || r.animated || r === t)) {
      var u = V(r);
      o.left = Math.min((i = o.left) !== null && i !== void 0 ? i : 1 / 0, u.left), o.top = Math.min((a = o.top) !== null && a !== void 0 ? a : 1 / 0, u.top), o.right = Math.max((s = o.right) !== null && s !== void 0 ? s : -1 / 0, u.right), o.bottom = Math.max((l = o.bottom) !== null && l !== void 0 ? l : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var G = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function mo() {
  var e = [], n;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var t = [].slice.call(this.el.children);
        t.forEach(function(o) {
          if (!(v(o, "display") === "none" || o === g.ghost)) {
            e.push({
              target: o,
              rect: V(o)
            });
            var r = ne({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var i = Ce(o, !0);
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
      e.splice(fo(e, {
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
        var s = 0, l = a.target, u = l.fromRect, f = V(l), h = l.prevFromRect, p = l.prevToRect, c = a.rect, m = Ce(l, !0);
        m && (f.top -= m.f, f.left -= m.e), l.toRect = f, l.thisAnimationDuration && it(h, f) && !it(u, f) && // Make sure animatingRect is on line between toRect & fromRect
        (c.top - f.top) / (c.left - f.left) === (u.top - f.top) / (u.left - f.left) && (s = go(c, h, p, o.options)), it(f, u) || (l.prevFromRect = u, l.prevToRect = f, s || (s = o.options.animation), o.animate(l, c, f, s)), s && (r = !0, i = Math.max(i, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(n), r ? n = setTimeout(function() {
        typeof t == "function" && t();
      }, i) : typeof t == "function" && t(), e = [];
    },
    animate: function(t, o, r, i) {
      if (i) {
        v(t, "transition", ""), v(t, "transform", "");
        var a = Ce(this.el), s = a && a.a, l = a && a.d, u = (o.left - r.left) / (s || 1), f = (o.top - r.top) / (l || 1);
        t.animatingX = !!u, t.animatingY = !!f, v(t, "transform", "translate3d(" + u + "px," + f + "px,0)"), this.forRepaintDummy = vo(t), v(t, "transition", "transform " + i + "ms" + (this.options.easing ? " " + this.options.easing : "")), v(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          v(t, "transition", ""), v(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, i);
      }
    }
  };
}
function vo(e) {
  return e.offsetWidth;
}
function go(e, n, t, o) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * o.animation;
}
var ye = [], lt = {
  initializeByDefault: !0
}, Be = {
  mount: function(e) {
    for (var n in lt)
      lt.hasOwnProperty(n) && !(n in e) && (e[n] = lt[n]);
    ye.forEach(function(t) {
      if (t.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), ye.push(e);
  },
  pluginEvent: function(e, n, t) {
    var o = this;
    this.eventCanceled = !1, t.cancel = function() {
      o.eventCanceled = !0;
    };
    var r = e + "Global";
    ye.forEach(function(i) {
      n[i.pluginName] && (n[i.pluginName][r] && n[i.pluginName][r](ne({
        sortable: n
      }, t)), n.options[i.pluginName] && n[i.pluginName][e] && n[i.pluginName][e](ne({
        sortable: n
      }, t)));
    });
  },
  initializePlugins: function(e, n, t, o) {
    ye.forEach(function(a) {
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
    return ye.forEach(function(o) {
      typeof o.eventProperties == "function" && le(t, o.eventProperties.call(n[o.pluginName], e));
    }), t;
  },
  modifyOption: function(e, n, t) {
    var o;
    return ye.forEach(function(r) {
      e[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (o = r.optionListeners[n].call(e[r.pluginName], t));
    }), o;
  }
};
function bo(e) {
  var n = e.sortable, t = e.rootEl, o = e.name, r = e.targetEl, i = e.cloneEl, a = e.toEl, s = e.fromEl, l = e.oldIndex, u = e.newIndex, f = e.oldDraggableIndex, h = e.newDraggableIndex, p = e.originalEvent, c = e.putSortable, m = e.extraEventProperties;
  if (n = n || t && t[G], !!n) {
    var y, X = n.options, T = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !se && !Re ? y = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (y = document.createEvent("Event"), y.initEvent(o, !0, !0)), y.to = a || t, y.from = s || t, y.item = r || t, y.clone = i, y.oldIndex = l, y.newIndex = u, y.oldDraggableIndex = f, y.newDraggableIndex = h, y.originalEvent = p, y.pullMode = c ? c.lastPutMode : void 0;
    var z = ne(ne({}, m), Be.getEventProperties(o, n));
    for (var S in z)
      y[S] = z[S];
    t && t.dispatchEvent(y), X[T] && X[T].call(n, y);
  }
}
var yo = ["evt"], L = function(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = t.evt, r = so(t, yo);
  Be.pluginEvent.bind(g)(e, n, ne({
    dragEl: d,
    parentEl: M,
    ghostEl: b,
    rootEl: O,
    nextEl: ve,
    lastDownEl: Le,
    cloneEl: A,
    cloneHidden: ce,
    dragStarted: Te,
    putSortable: j,
    activeSortable: g.active,
    originalEvent: o,
    oldIndex: Ee,
    oldDraggableIndex: Pe,
    newIndex: U,
    newDraggableIndex: ue,
    hideGhostForTarget: yn,
    unhideGhostForTarget: wn,
    cloneNowHidden: function() {
      ce = !0;
    },
    cloneNowShown: function() {
      ce = !1;
    },
    dispatchSortableEvent: function(i) {
      F({
        sortable: n,
        name: i,
        originalEvent: o
      });
    }
  }, r));
};
function F(e) {
  bo(ne({
    putSortable: j,
    cloneEl: A,
    targetEl: d,
    rootEl: O,
    oldIndex: Ee,
    oldDraggableIndex: Pe,
    newIndex: U,
    newDraggableIndex: ue
  }, e));
}
var d, M, b, O, ve, Le, A, ce, Ee, U, Pe, ue, He, j, Se = !1, Ke = !1, Qe = [], pe, K, st, ut, Xt, Ft, Te, we, ke, Ve = !1, je = !1, ze, Y, ct = [], bt = !1, et = [], ot = typeof document < "u", Ye = sn, $t = Re || se ? "cssFloat" : "float", wo = ot && !un && !sn && "draggable" in document.createElement("div"), vn = function() {
  if (ot) {
    if (se)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), gn = function(e, n) {
  var t = v(e), o = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), r = De(e, 0, n), i = De(e, 1, n), a = r && v(r), s = i && v(i), l = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + V(r).width, u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + V(i).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && a.float && a.float !== "none") {
    var f = a.float === "left" ? "left" : "right";
    return i && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return r && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || l >= o && t[$t] === "none" || i && t[$t] === "none" && l + u > o) ? "vertical" : "horizontal";
}, So = function(e, n, t) {
  var o = t ? e.left : e.top, r = t ? e.right : e.bottom, i = t ? e.width : e.height, a = t ? n.left : n.top, s = t ? n.right : n.bottom, l = t ? n.width : n.height;
  return o === a || r === s || o + i / 2 === a + l / 2;
}, _o = function(e, n) {
  var t;
  return Qe.some(function(o) {
    var r = o[G].options.emptyInsertThreshold;
    if (!(!r || Ct(o))) {
      var i = V(o), a = e >= i.left - r && e <= i.right + r, s = n >= i.top - r && n <= i.bottom + r;
      if (a && s)
        return t = o;
    }
  }), t;
}, bn = function(e) {
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
  (!o || $e(o) != "object") && (o = {
    name: o
  }), t.name = o.name, t.checkPull = n(o.pull, !0), t.checkPut = n(o.put), t.revertClone = o.revertClone, e.group = t;
}, yn = function() {
  !vn && b && v(b, "display", "none");
}, wn = function() {
  !vn && b && v(b, "display", "");
};
ot && !un && document.addEventListener("click", function(e) {
  if (Ke)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ke = !1, !1;
}, !0);
var he = function(e) {
  if (d) {
    e = e.touches ? e.touches[0] : e;
    var n = _o(e.clientX, e.clientY);
    if (n) {
      var t = {};
      for (var o in e)
        e.hasOwnProperty(o) && (t[o] = e[o]);
      t.target = t.rootEl = n, t.preventDefault = void 0, t.stopPropagation = void 0, n[G]._onDragOver(t);
    }
  }
}, Eo = function(e) {
  d && d.parentNode[G]._isOutsideThisEl(e.target);
};
function g(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = le({}, n), e[G] = this;
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
      return gn(e, this.options);
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
  bn(n);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : wo, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? D(e, "pointerdown", this._onTapStart) : (D(e, "mousedown", this._onTapStart), D(e, "touchstart", this._onTapStart)), this.nativeDraggable && (D(e, "dragover", this), D(e, "dragenter", this)), Qe.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), le(this, mo());
}
g.prototype = /** @lends Sortable.prototype */
{
  constructor: g,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (we = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, d) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, t = this.el, o = this.options, r = o.preventOnFilter, i = e.type, a = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (a || e).target, l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, u = o.filter;
      if (Mo(t), !d && !(/mousedown|pointerdown/.test(i) && e.button !== 0 || o.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Me && s && s.tagName.toUpperCase() === "SELECT") && (s = Q(s, o.draggable, t, !1), !(s && s.animated) && Le !== s)) {
        if (Ee = J(s), Pe = J(s, o.draggable), typeof u == "function") {
          if (u.call(this, e, s, this)) {
            F({
              sortable: n,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: t,
              fromEl: t
            }), L("filter", n, {
              evt: e
            }), r && e.cancelable && e.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(f) {
          if (f = Q(l, f.trim(), t, !1), f)
            return F({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: t,
              toEl: t
            }), L("filter", n, {
              evt: e
            }), !0;
        }), u)) {
          r && e.cancelable && e.preventDefault();
          return;
        }
        o.handle && !Q(l, o.handle, t, !1) || this._prepareDragStart(e, a, s);
      }
    }
  },
  _prepareDragStart: function(e, n, t) {
    var o = this, r = o.el, i = o.options, a = r.ownerDocument, s;
    if (t && !d && t.parentNode === r) {
      var l = V(t);
      if (O = r, d = t, M = d.parentNode, ve = d.nextSibling, Le = t, He = i.group, g.dragged = d, pe = {
        target: d,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Xt = pe.clientX - l.left, Ft = pe.clientY - l.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, d.style["will-change"] = "all", s = function() {
        if (L("delayEnded", o, {
          evt: e
        }), g.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !Bt && o.nativeDraggable && (d.draggable = !0), o._triggerDragStart(e, n), F({
          sortable: o,
          name: "choose",
          originalEvent: e
        }), q(d, i.chosenClass, !0);
      }, i.ignore.split(",").forEach(function(u) {
        dn(d, u.trim(), dt);
      }), D(a, "dragover", he), D(a, "mousemove", he), D(a, "touchmove", he), D(a, "mouseup", o._onDrop), D(a, "touchend", o._onDrop), D(a, "touchcancel", o._onDrop), Bt && this.nativeDraggable && (this.options.touchStartThreshold = 4, d.draggable = !0), L("delayStart", this, {
        evt: e
      }), i.delay && (!i.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Re || se))) {
        if (g.eventCanceled) {
          this._onDrop();
          return;
        }
        D(a, "mouseup", o._disableDelayedDrag), D(a, "touchend", o._disableDelayedDrag), D(a, "touchcancel", o._disableDelayedDrag), D(a, "mousemove", o._delayedDragTouchMoveHandler), D(a, "touchmove", o._delayedDragTouchMoveHandler), i.supportPointer && D(a, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(s, i.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    d && dt(d), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    C(e, "mouseup", this._disableDelayedDrag), C(e, "touchend", this._disableDelayedDrag), C(e, "touchcancel", this._disableDelayedDrag), C(e, "mousemove", this._delayedDragTouchMoveHandler), C(e, "touchmove", this._delayedDragTouchMoveHandler), C(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? D(document, "pointermove", this._onTouchMove) : n ? D(document, "touchmove", this._onTouchMove) : D(document, "mousemove", this._onTouchMove) : (D(d, "dragend", this), D(O, "dragstart", this._onDragStart));
    try {
      document.selection ? We(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (Se = !1, O && d) {
      L("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && D(document, "dragover", Eo);
      var t = this.options;
      !e && q(d, t.dragClass, !1), q(d, t.ghostClass, !0), g.active = this, e && this._appendGhost(), F({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (K) {
      this._lastX = K.clientX, this._lastY = K.clientY, yn();
      for (var e = document.elementFromPoint(K.clientX, K.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(K.clientX, K.clientY), e !== n); )
        n = e;
      if (d.parentNode[G]._isOutsideThisEl(e), n)
        do {
          if (n[G]) {
            var t = void 0;
            if (t = n[G]._onDragOver({
              clientX: K.clientX,
              clientY: K.clientY,
              target: e,
              rootEl: n
            }), t && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      wn();
    }
  },
  _onTouchMove: function(e) {
    if (pe) {
      var n = this.options, t = n.fallbackTolerance, o = n.fallbackOffset, r = e.touches ? e.touches[0] : e, i = b && Ce(b, !0), a = b && i && i.a, s = b && i && i.d, l = Ye && Y && Yt(Y), u = (r.clientX - pe.clientX + o.x) / (a || 1) + (l ? l[0] - ct[0] : 0) / (a || 1), f = (r.clientY - pe.clientY + o.y) / (s || 1) + (l ? l[1] - ct[1] : 0) / (s || 1);
      if (!g.active && !Se) {
        if (t && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < t)
          return;
        this._onDragStart(e, !0);
      }
      if (b) {
        i ? (i.e += u - (st || 0), i.f += f - (ut || 0)) : i = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f
        };
        var h = "matrix(".concat(i.a, ",").concat(i.b, ",").concat(i.c, ",").concat(i.d, ",").concat(i.e, ",").concat(i.f, ")");
        v(b, "webkitTransform", h), v(b, "mozTransform", h), v(b, "msTransform", h), v(b, "transform", h), st = u, ut = f, K = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!b) {
      var e = this.options.fallbackOnBody ? document.body : O, n = V(d, !0, Ye, !0, e), t = this.options;
      if (Ye) {
        for (Y = e; v(Y, "position") === "static" && v(Y, "transform") === "none" && Y !== document; )
          Y = Y.parentNode;
        Y !== document.body && Y !== document.documentElement ? (Y === document && (Y = te()), n.top += Y.scrollTop, n.left += Y.scrollLeft) : Y = te(), ct = Yt(Y);
      }
      b = d.cloneNode(!0), q(b, t.ghostClass, !1), q(b, t.fallbackClass, !0), q(b, t.dragClass, !0), v(b, "transition", ""), v(b, "transform", ""), v(b, "box-sizing", "border-box"), v(b, "margin", 0), v(b, "top", n.top), v(b, "left", n.left), v(b, "width", n.width), v(b, "height", n.height), v(b, "opacity", "0.8"), v(b, "position", Ye ? "absolute" : "fixed"), v(b, "zIndex", "100000"), v(b, "pointerEvents", "none"), g.ghost = b, e.appendChild(b), v(b, "transform-origin", Xt / parseInt(b.style.width) * 100 + "% " + Ft / parseInt(b.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var t = this, o = e.dataTransfer, r = t.options;
    if (L("dragStart", this, {
      evt: e
    }), g.eventCanceled) {
      this._onDrop();
      return;
    }
    L("setupClone", this), g.eventCanceled || (A = hn(d), A.removeAttribute("id"), A.draggable = !1, A.style["will-change"] = "", this._hideClone(), q(A, this.options.chosenClass, !1), g.clone = A), t.cloneId = We(function() {
      L("clone", t), !g.eventCanceled && (t.options.removeCloneOnHide || O.insertBefore(A, d), t._hideClone(), F({
        sortable: t,
        name: "clone"
      }));
    }), !n && q(d, r.dragClass, !0), n ? (Ke = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (C(document, "mouseup", t._onDrop), C(document, "touchend", t._onDrop), C(document, "touchcancel", t._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(t, o, d)), D(document, "drop", t), v(d, "transform", "translateZ(0)")), Se = !0, t._dragStartId = We(t._dragStarted.bind(t, n, e)), D(document, "selectstart", t), Te = !0, Me && v(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, t = e.target, o, r, i, a = this.options, s = a.group, l = g.active, u = He === s, f = a.sort, h = j || l, p, c = this, m = !1;
    if (bt)
      return;
    function y(oe, rt) {
      L(oe, c, ne({
        evt: e,
        isOwner: u,
        axis: p ? "vertical" : "horizontal",
        revert: i,
        dragRect: o,
        targetRect: r,
        canSort: f,
        fromSortable: h,
        target: t,
        completed: T,
        onMove: function(xt, Dn) {
          return Xe(O, n, d, o, xt, V(xt), e, Dn);
        },
        changed: z
      }, rt));
    }
    function X() {
      y("dragOverAnimationCapture"), c.captureAnimationState(), c !== h && h.captureAnimationState();
    }
    function T(oe) {
      return y("dragOverCompleted", {
        insertion: oe
      }), oe && (u ? l._hideClone() : l._showClone(c), c !== h && (q(d, j ? j.options.ghostClass : l.options.ghostClass, !1), q(d, a.ghostClass, !0)), j !== c && c !== g.active ? j = c : c === g.active && j && (j = null), h === c && (c._ignoreWhileAnimating = t), c.animateAll(function() {
        y("dragOverAnimationComplete"), c._ignoreWhileAnimating = null;
      }), c !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (t === d && !d.animated || t === n && !t.animated) && (we = null), !a.dragoverBubble && !e.rootEl && t !== document && (d.parentNode[G]._isOutsideThisEl(e.target), !oe && he(e)), !a.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
    }
    function z() {
      U = J(d), ue = J(d, a.draggable), F({
        sortable: c,
        name: "change",
        toEl: n,
        newIndex: U,
        newDraggableIndex: ue,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), t = Q(t, a.draggable, n, !0), y("dragOver"), g.eventCanceled)
      return m;
    if (d.contains(e.target) || t.animated && t.animatingX && t.animatingY || c._ignoreWhileAnimating === t)
      return T(!1);
    if (Ke = !1, l && !a.disabled && (u ? f || (i = M !== O) : j === this || (this.lastPutMode = He.checkPull(this, l, d, e)) && s.checkPut(this, l, d, e))) {
      if (p = this._getDirection(e, t) === "vertical", o = V(d), y("dragOverValid"), g.eventCanceled)
        return m;
      if (i)
        return M = O, X(), this._hideClone(), y("revert"), g.eventCanceled || (ve ? O.insertBefore(d, ve) : O.appendChild(d)), T(!0);
      var S = Ct(n, a.draggable);
      if (!S || xo(e, p, this) && !S.animated) {
        if (S === d)
          return T(!1);
        if (S && n === e.target && (t = S), t && (r = V(t)), Xe(O, n, d, o, t, r, e, !!t) !== !1)
          return X(), S && S.nextSibling ? n.insertBefore(d, S.nextSibling) : n.appendChild(d), M = n, z(), T(!0);
      } else if (S && To(e, p, this)) {
        var R = De(n, 0, a, !0);
        if (R === d)
          return T(!1);
        if (t = R, r = V(t), Xe(O, n, d, o, t, r, e, !1) !== !1)
          return X(), n.insertBefore(d, R), M = n, z(), T(!0);
      } else if (t.parentNode === n) {
        r = V(t);
        var I = 0, W, fe = d.parentNode !== n, w = !So(d.animated && d.toRect || o, t.animated && t.toRect || r, p), _ = p ? "top" : "left", P = jt(t, "top", "top") || jt(d, "top", "top"), $ = P ? P.scrollTop : void 0;
        we !== t && (W = r[_], Ve = !1, je = !w && a.invertSwap || fe), I = Oo(e, t, r, p, w ? 1 : a.swapThreshold, a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold, je, we === t);
        var x;
        if (I !== 0) {
          var N = J(d);
          do
            N -= I, x = M.children[N];
          while (x && (v(x, "display") === "none" || x === b));
        }
        if (I === 0 || x === t)
          return T(!1);
        we = t, ke = I;
        var H = t.nextElementSibling, B = !1;
        B = I === 1;
        var Z = Xe(O, n, d, o, t, r, e, B);
        if (Z !== !1)
          return (Z === 1 || Z === -1) && (B = Z === 1), bt = !0, setTimeout(Do, 30), X(), B && !H ? n.appendChild(d) : t.parentNode.insertBefore(d, B ? H : t), P && pn(P, 0, $ - P.scrollTop), M = d.parentNode, W !== void 0 && !je && (ze = Math.abs(W - V(t)[_])), z(), T(!0);
      }
      if (n.contains(d))
        return T(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    C(document, "mousemove", this._onTouchMove), C(document, "touchmove", this._onTouchMove), C(document, "pointermove", this._onTouchMove), C(document, "dragover", he), C(document, "mousemove", he), C(document, "touchmove", he);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    C(e, "mouseup", this._onDrop), C(e, "touchend", this._onDrop), C(e, "pointerup", this._onDrop), C(e, "touchcancel", this._onDrop), C(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, t = this.options;
    if (U = J(d), ue = J(d, t.draggable), L("drop", this, {
      evt: e
    }), M = d && d.parentNode, U = J(d), ue = J(d, t.draggable), g.eventCanceled) {
      this._nulling();
      return;
    }
    Se = !1, je = !1, Ve = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), yt(this.cloneId), yt(this._dragStartId), this.nativeDraggable && (C(document, "drop", this), C(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Me && v(document.body, "user-select", ""), v(d, "transform", ""), e && (Te && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()), b && b.parentNode && b.parentNode.removeChild(b), (O === M || j && j.lastPutMode !== "clone") && A && A.parentNode && A.parentNode.removeChild(A), d && (this.nativeDraggable && C(d, "dragend", this), dt(d), d.style["will-change"] = "", Te && !Se && q(d, j ? j.options.ghostClass : this.options.ghostClass, !1), q(d, this.options.chosenClass, !1), F({
      sortable: this,
      name: "unchoose",
      toEl: M,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), O !== M ? (U >= 0 && (F({
      rootEl: M,
      name: "add",
      toEl: M,
      fromEl: O,
      originalEvent: e
    }), F({
      sortable: this,
      name: "remove",
      toEl: M,
      originalEvent: e
    }), F({
      rootEl: M,
      name: "sort",
      toEl: M,
      fromEl: O,
      originalEvent: e
    }), F({
      sortable: this,
      name: "sort",
      toEl: M,
      originalEvent: e
    })), j && j.save()) : U !== Ee && U >= 0 && (F({
      sortable: this,
      name: "update",
      toEl: M,
      originalEvent: e
    }), F({
      sortable: this,
      name: "sort",
      toEl: M,
      originalEvent: e
    })), g.active && ((U == null || U === -1) && (U = Ee, ue = Pe), F({
      sortable: this,
      name: "end",
      toEl: M,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    L("nulling", this), O = d = M = b = ve = A = Le = ce = pe = K = Te = U = ue = Ee = Pe = we = ke = j = He = g.dragged = g.ghost = g.clone = g.active = null, et.forEach(function(e) {
      e.checked = !0;
    }), et.length = st = ut = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        d && (this._onDragOver(e), Co(e));
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
      n = t[o], Q(n, i.draggable, this.el, !1) && e.push(n.getAttribute(i.dataIdAttr) || Ao(n));
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
      Q(a, this.options.draggable, o, !1) && (t[r] = a);
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
    return Q(e, n || this.options.draggable, this.el, !1);
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
    typeof o < "u" ? t[e] = o : t[e] = n, e === "group" && bn(t);
  },
  /**
   * Destroy
   */
  destroy: function() {
    L("destroy", this);
    var e = this.el;
    e[G] = null, C(e, "mousedown", this._onTapStart), C(e, "touchstart", this._onTapStart), C(e, "pointerdown", this._onTapStart), this.nativeDraggable && (C(e, "dragover", this), C(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Qe.splice(Qe.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!ce) {
      if (L("hideClone", this), g.eventCanceled)
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
      if (L("showClone", this), g.eventCanceled)
        return;
      d.parentNode == O && !this.options.group.revertClone ? O.insertBefore(A, d) : ve ? O.insertBefore(A, ve) : O.appendChild(A), this.options.group.revertClone && this.animate(d, A), v(A, "display", ""), ce = !1;
    }
  }
};
function Co(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Xe(e, n, t, o, r, i, a, s) {
  var l, u = e[G], f = u.options.onMove, h;
  return window.CustomEvent && !se && !Re ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = n, l.from = e, l.dragged = t, l.draggedRect = o, l.related = r || n, l.relatedRect = i || V(n), l.willInsertAfter = s, l.originalEvent = a, e.dispatchEvent(l), f && (h = f.call(u, l, a)), h;
}
function dt(e) {
  e.draggable = !1;
}
function Do() {
  bt = !1;
}
function To(e, n, t) {
  var o = V(De(t.el, 0, t.options, !0)), r = mn(t.el, t.options, b), i = 10;
  return n ? e.clientX < r.left - i || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - i || e.clientY < o.bottom && e.clientX < o.left;
}
function xo(e, n, t) {
  var o = V(Ct(t.el, t.options.draggable)), r = mn(t.el, t.options, b), i = 10;
  return n ? e.clientX > r.right + i || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + i || e.clientX > o.right && e.clientY > o.top;
}
function Oo(e, n, t, o, r, i, a, s) {
  var l = o ? e.clientY : e.clientX, u = o ? t.height : t.width, f = o ? t.top : t.left, h = o ? t.bottom : t.right, p = !1;
  if (!a) {
    if (s && ze < u * r) {
      if (!Ve && (ke === 1 ? l > f + u * i / 2 : l < h - u * i / 2) && (Ve = !0), Ve)
        p = !0;
      else if (ke === 1 ? l < f + ze : l > h - ze)
        return -ke;
    } else if (l > f + u * (1 - r) / 2 && l < h - u * (1 - r) / 2)
      return Io(n);
  }
  return p = p || a, p && (l < f + u * i / 2 || l > h - u * i / 2) ? l > f + u / 2 ? 1 : -1 : 0;
}
function Io(e) {
  return J(d) < J(e) ? 1 : -1;
}
function Ao(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, o = 0; t--; )
    o += n.charCodeAt(t);
  return o.toString(36);
}
function Mo(e) {
  et.length = 0;
  for (var n = e.getElementsByTagName("input"), t = n.length; t--; ) {
    var o = n[t];
    o.checked && et.push(o);
  }
}
function We(e) {
  return setTimeout(e, 0);
}
function yt(e) {
  return clearTimeout(e);
}
ot && D(document, "touchmove", function(e) {
  (g.active || Se) && e.cancelable && e.preventDefault();
});
g.utils = {
  on: D,
  off: C,
  css: v,
  find: dn,
  is: function(e, n) {
    return !!Q(e, n, e, !1);
  },
  extend: po,
  throttle: fn,
  closest: Q,
  toggleClass: q,
  clone: hn,
  index: J,
  nextTick: We,
  cancelNextTick: yt,
  detectDirection: gn,
  getChild: De
};
g.get = function(e) {
  return e[G];
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
g.version = uo;
var k = [], xe, wt, St = !1, ft, pt, tt, Oe;
function No() {
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
      this.sortable.nativeDraggable ? D(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? D(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? D(document, "touchmove", this._handleFallbackAutoScroll) : D(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var t = n.originalEvent;
      !this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
    },
    drop: function() {
      this.sortable.nativeDraggable ? C(document, "dragover", this._handleAutoScroll) : (C(document, "pointermove", this._handleFallbackAutoScroll), C(document, "touchmove", this._handleFallbackAutoScroll), C(document, "mousemove", this._handleFallbackAutoScroll)), Lt(), qe(), ho();
    },
    nulling: function() {
      tt = wt = xe = St = Oe = ft = pt = null, k.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, t) {
      var o = this, r = (n.touches ? n.touches[0] : n).clientX, i = (n.touches ? n.touches[0] : n).clientY, a = document.elementFromPoint(r, i);
      if (tt = n, t || this.options.forceAutoScrollFallback || Re || se || Me) {
        ht(n, this.options, a, t);
        var s = de(a, !0);
        St && (!Oe || r !== ft || i !== pt) && (Oe && Lt(), Oe = setInterval(function() {
          var l = de(document.elementFromPoint(r, i), !0);
          l !== s && (s = l, qe()), ht(n, o.options, l, t);
        }, 10), ft = r, pt = i);
      } else {
        if (!this.options.bubbleScroll || de(a, !0) === te()) {
          qe();
          return;
        }
        ht(n, this.options, de(a, !1), !1);
      }
    }
  }, le(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function qe() {
  k.forEach(function(e) {
    clearInterval(e.pid);
  }), k = [];
}
function Lt() {
  clearInterval(Oe);
}
var ht = fn(function(e, n, t, o) {
  if (n.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = n.scrollSensitivity, s = n.scrollSpeed, l = te(), u = !1, f;
    wt !== t && (wt = t, qe(), xe = n.scroll, f = n.scrollFn, xe === !0 && (xe = de(t, !0)));
    var h = 0, p = xe;
    do {
      var c = p, m = V(c), y = m.top, X = m.bottom, T = m.left, z = m.right, S = m.width, R = m.height, I = void 0, W = void 0, fe = c.scrollWidth, w = c.scrollHeight, _ = v(c), P = c.scrollLeft, $ = c.scrollTop;
      c === l ? (I = S < fe && (_.overflowX === "auto" || _.overflowX === "scroll" || _.overflowX === "visible"), W = R < w && (_.overflowY === "auto" || _.overflowY === "scroll" || _.overflowY === "visible")) : (I = S < fe && (_.overflowX === "auto" || _.overflowX === "scroll"), W = R < w && (_.overflowY === "auto" || _.overflowY === "scroll"));
      var x = I && (Math.abs(z - r) <= a && P + S < fe) - (Math.abs(T - r) <= a && !!P), N = W && (Math.abs(X - i) <= a && $ + R < w) - (Math.abs(y - i) <= a && !!$);
      if (!k[h])
        for (var H = 0; H <= h; H++)
          k[H] || (k[H] = {});
      (k[h].vx != x || k[h].vy != N || k[h].el !== c) && (k[h].el = c, k[h].vx = x, k[h].vy = N, clearInterval(k[h].pid), (x != 0 || N != 0) && (u = !0, k[h].pid = setInterval((function() {
        o && this.layer === 0 && g.active._onTouchMove(tt);
        var B = k[this.layer].vy ? k[this.layer].vy * s : 0, Z = k[this.layer].vx ? k[this.layer].vx * s : 0;
        typeof f == "function" && f.call(g.dragged.parentNode[G], Z, B, e, tt, k[this.layer].el) !== "continue" || pn(k[this.layer].el, Z, B);
      }).bind({
        layer: h
      }), 24))), h++;
    } while (n.bubbleScroll && p !== l && (p = de(p, !1)));
    St = u;
  }
}, 30), Sn = function(e) {
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
function Dt() {
}
Dt.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, t = e.putSortable;
    this.sortable.captureAnimationState(), t && t.captureAnimationState();
    var o = De(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), t && t.animateAll();
  },
  drop: Sn
};
le(Dt, {
  pluginName: "revertOnSpill"
});
function Tt() {
}
Tt.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, t = e.putSortable, o = t || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: Sn
};
le(Tt, {
  pluginName: "removeOnSpill"
});
g.mount(new No());
g.mount(Tt, Dt);
function Po(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function ko(e) {
  Et() && Mn(e);
}
function Vo(e) {
  Et() ? An(e) : Ue(e);
}
let _n = null, En = null;
function zt(e = null, n = null) {
  _n = e, En = n;
}
function Ro() {
  return {
    data: _n,
    clonedData: En
  };
}
const Wt = Symbol("cloneElement");
function Bo(...e) {
  var n, t;
  const o = (n = Et()) == null ? void 0 : n.proxy;
  let r = null;
  const i = e[0];
  let [, a, s] = e;
  Array.isArray(E(a)) || (s = a, a = null);
  let l = null;
  const {
    immediate: u = !0,
    clone: f = Po,
    customUpdate: h
  } = (t = E(s)) != null ? t : {};
  function p(w) {
    var _;
    const { from: P, oldIndex: $, item: x } = w;
    r = Array.from(P.childNodes);
    const N = E((_ = E(a)) == null ? void 0 : _[$]), H = f(N);
    zt(N, H), x[Wt] = H;
  }
  function c(w) {
    const _ = w.item[Wt];
    if (!Kn(_)) {
      if (at(w.item), Ie(a)) {
        const P = [...E(a)];
        a.value = Pt(P, w.newDraggableIndex, _);
        return;
      }
      Pt(E(a), w.newDraggableIndex, _);
    }
  }
  function m(w) {
    const { from: _, item: P, oldIndex: $, oldDraggableIndex: x, pullMode: N, clone: H } = w;
    if (kt(_, P, $), N === "clone") {
      at(H);
      return;
    }
    if (Ie(a)) {
      const B = [...E(a)];
      a.value = Nt(B, x);
      return;
    }
    Nt(E(a), x);
  }
  function y(w) {
    if (h) {
      h(w);
      return;
    }
    const { from: _, item: P, oldIndex: $, oldDraggableIndex: x, newDraggableIndex: N } = w;
    if (at(P), kt(_, P, $), Ie(a)) {
      const H = [...E(a)];
      a.value = Mt(
        H,
        x,
        N
      );
      return;
    }
    Mt(E(a), x, N);
  }
  function X(w) {
    const { newIndex: _, oldIndex: P, from: $, to: x } = w;
    let N = null;
    const H = _ === P && $ === x;
    try {
      if (H) {
        let B = null;
        r == null || r.some((Z, oe) => {
          if (B && (r == null ? void 0 : r.length) !== x.childNodes.length)
            return $.insertBefore(B, Z.nextSibling), !0;
          const rt = x.childNodes[oe];
          B = x == null ? void 0 : x.replaceChild(Z, rt);
        });
      }
    } catch (B) {
      N = B;
    } finally {
      r = null;
    }
    Ue(() => {
      if (zt(), N)
        throw N;
    });
  }
  const T = {
    onUpdate: y,
    onStart: p,
    onAdd: c,
    onRemove: m,
    onEnd: X
  };
  function z(w) {
    const _ = E(i);
    return w || (w = Qn(_) ? eo(_, o == null ? void 0 : o.$el) : _), w && !oo(w) && (w = w.$el), w || Gn("Root element not found"), w;
  }
  function S() {
    var w;
    const _ = (w = E(s)) != null ? w : {}, { immediate: P, clone: $ } = _, x = an(_, ["immediate", "clone"]);
    return Vt(x, (N, H) => {
      ro(N) && (x[N] = (B, ...Z) => {
        const oe = Ro();
        return ao(B, oe), H(B, ...Z);
      });
    }), no(
      a === null ? {} : T,
      x
    );
  }
  const R = (w) => {
    w = z(w), l && I.destroy(), l = new g(w, S());
  };
  Zt(
    () => s,
    () => {
      l && Vt(S(), (w, _) => {
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
  }, W = () => I == null ? void 0 : I.option("disabled", !0), fe = () => I == null ? void 0 : I.option("disabled", !1);
  return Vo(() => {
    u && R();
  }), ko(I.destroy), _e({ start: R, pause: W, resume: fe }, I);
}
const _t = [
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
], Ho = [
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
  ..._t.map((e) => `on${e.replace(/^\S/, (n) => n.toUpperCase())}`)
], jo = Tn({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Ho,
  emits: ["update:modelValue", ..._t],
  setup(e, { slots: n, emit: t, expose: o, attrs: r }) {
    const i = _t.reduce((f, h) => {
      const p = `on${h.replace(/^\S/, (c) => c.toUpperCase())}`;
      return f[p] = (...c) => t(h, ...c), f;
    }, {}), a = ee(() => {
      const f = xn(e), { modelValue: h } = f, p = an(f, ["modelValue"]), c = Object.entries(p).reduce((m, [y, X]) => {
        const T = E(X);
        return T !== void 0 && (m[y] = T), m;
      }, {});
      return _e(_e({}, i), Jn(_e(_e({}, r), c)));
    }), s = ee({
      get: () => e.modelValue,
      set: (f) => t("update:modelValue", f)
    }), l = On(), u = In(
      Bo(e.target || l, s, a)
    );
    return o(u), () => {
      var f;
      return re(e.tag || "div", { ref: l }, (f = n == null ? void 0 : n.default) == null ? void 0 : f.call(n, u));
    };
  }
});
var Yo = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Xo = "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z";
const nt = Symbol.for("sortable-treeview"), Fo = {
  transform: "rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))"
}, qt = {
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
}, Ut = {
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
    const n = ee(() => {
      var u;
      return ((u = e.faIcon) == null ? void 0 : u.prefix) || e.type;
    }), t = ee(() => parseInt(e.rotate, 10)), o = ee(() => qt[n.value] || qt.default), r = ee(() => parseInt(e.size, 10) || o.value.size), i = ee(() => e.faIcon ? `0 0 ${e.faIcon.icon[0]} ${e.faIcon.icon[1]}` : !1), a = ee(() => i.value || e.viewbox || o.value.viewbox), s = ee(() => {
      if (e.noStyles !== !0)
        return {
          ...Fo,
          "--sx": ["both", "horizontal"].includes(e.flip) ? "-1" : "1",
          "--sy": ["both", "vertical"].includes(e.flip) ? "-1" : "1",
          "--r": isNaN(t.value) ? t.value : t.value + "deg"
        };
    }), l = ee(() => {
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
}, Gt = (e, n) => $n(
  e,
  (t, o, r) => (Ln(o, n[r]) || (t[r] = o), t),
  {}
), Lo = (e, n = {}) => {
  const t = n.updateItemRoute, o = n.updateItemMethod, r = n.itemValue, i = computed(() => It(e())), a = ref(), s = computed(() => It(a.value)), l = jn(null, 4e3), u = (p) => gt({
    url: t,
    method: o,
    data: p
  }).then((c) => {
    n.onSuccess && typeof n.onSuccess == "function" && n.onSuccess(c.data);
  }).catch((c) => {
    throw l.value = c.response.data.message, n.onError && typeof n.onError == "function" && n.onError(c.response), new Error(c);
  });
  Zt(
    i,
    (p, c) => {
      if (c !== void 0) {
        const m = Gt(p, c);
        Object.keys(m).length > 0 && (m[r] = p[r], u(m));
      }
      a.value = p;
    },
    {
      immediate: !0,
      deep: !0
    }
  );
  const { pause: f, resume: h } = Yn(
    s,
    (p, c) => {
      if (c !== void 0) {
        const m = Gt(p, c);
        Object.keys(m).length > 0 && (m[r] = p[r], u(m).catch(async () => {
          f(), await Ue(), a.value = c, await Ue(), h();
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
}, zo = { class: "evo-sortable-treeview__item" }, Wo = { class: "evo-sortable-treeview__item-content" }, qo = {
  ref: "item",
  class: "evo-sortable-treeview__actions"
}, Uo = { class: "evo-sortable-treeview__action-drag" }, Go = { class: "evo-sortable-treeview__action-title" }, Zo = {
  class: "d-flex align-center",
  ref: "columns"
}, Jo = /* @__PURE__ */ Object.assign({
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
    const n = e, t = Jt(), o = useTemplateRef("columns"), r = mt(nt), i = computed(() => r.config.value.itemTitle), a = computed(() => r.config.value.itemValue), s = computed(() => r.config.value.itemChildren), l = computed(() => r.config.value.itemChildrenCount), { data: u } = Lo(() => n.item, {
      ...r.config.value,
      onSuccess: (S) => {
        r.emit("updated", S);
      },
      onError: (S) => {
        r.emit("error", S);
      }
    }), f = ref([]), { width: h } = Xn(o);
    watch(
      h,
      (S) => {
        var R;
        if (!o.value) return [];
        f.value = Array.from((R = o.value) == null ? void 0 : R.children).map((I) => {
          const { width: W } = I.getBoundingClientRect();
          return W;
        });
      },
      {
        immediate: !0
      }
    );
    const { registerItem: p } = mt(nt);
    p(t, f);
    const c = ref([]), m = computed(() => {
      var S, R;
      return n.item[l.value] > 0 || (S = c.value) != null && S.length ? !0 : !!(Array.isArray(n.item[s.value]) && ((R = n.item[s.value]) == null ? void 0 : R.length) > 0);
    }), y = ref(!1);
    Fn(() => n.item[s.value], c, {
      direction: "ltr",
      transform: {
        ltr: (S) => S
      },
      immediate: !0
    });
    const X = computed(() => {
      var S;
      return m.value && ((S = c.value) == null ? void 0 : S.length) > 0;
    }), T = ref(!1), z = () => {
      if (T.value || X.value) return T.value = !T.value;
      y.value = !0, r.onLoadChildren(n.item).then((S) => {
        c.value = S.data.children ?? [], T.value = !T.value;
      }).finally(() => {
        y.value = !1;
      });
    };
    return (S, R) => {
      const I = Kt("VBtn");
      return ae(), Ae("li", zo, [
        me("div", Wo, [
          me("div", qo, [
            me("div", {
              class: Nn(["evo-sortable-treeview__action-expand", {
                "is-expanded": E(T)
              }])
            }, [
              E(m) ? (ae(), Fe(I, {
                key: 0,
                icon: "",
                variant: "flat",
                size: "small",
                loading: E(y),
                onClick: z
              }, {
                default: be(() => [
                  ge(E(Ut), {
                    class: "evo-sortable-treeview__expand-icon",
                    size: "24",
                    path: E(Yo),
                    rotate: E(T) ? 90 : 0
                  }, null, 8, ["path", "rotate"])
                ]),
                _: 1
              }, 8, ["loading"])) : Qt("", !0)
            ], 2),
            me("div", Uo, [
              ge(I, {
                variant: "plain",
                size: "small",
                class: "drag-handle cursor-move"
              }, {
                default: be(() => [
                  ge(E(Ut), { path: E(Xo) }, null, 8, ["path"])
                ]),
                _: 1
              })
            ]),
            me("div", Go, [
              Ge(S.$slots, "item.title", {
                item: n.item,
                title: n.item[E(i)]
              }, () => [
                Pn(en(n.item[E(i)]), 1)
              ])
            ])
          ], 512),
          me("div", Zo, [
            Ge(S.$slots, "item.columns", { item: E(u) })
          ], 512)
        ]),
        ge(E(nn), { slots: S.$slots }, {
          default: be(() => [
            ge(Cn, {
              modelValue: E(c),
              "onUpdate:modelValue": R[0] || (R[0] = (W) => Ie(c) ? c.value = W : null),
              "is-expanded": E(T),
              "is-empty": !E(m),
              depth: n.depth + 1,
              "parent-id": n.item[E(a)]
            }, null, 8, ["modelValue", "is-expanded", "is-empty", "depth", "parent-id"])
          ]),
          _: 1
        }, 8, ["slots"])
      ]);
    };
  }
}), Cn = /* @__PURE__ */ Object.assign({
  name: "EvoSortableTreeviewChildren"
}, {
  __name: "_SortableTreeviewChildren",
  props: /* @__PURE__ */ kn({
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
    const n = Vn(e, "modelValue"), t = e, o = mt(nt), r = computed(() => o.config.value.itemValue), i = computed(() => ({
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
      const l = Kt("VExpandTransition");
      return ae(), Fe(l, null, {
        default: be(() => [
          t.isExpanded || t.isEmpty ? (ae(), Fe(E(jo), Ot({
            key: 0,
            modelValue: n.value,
            "onUpdate:modelValue": s[0] || (s[0] = (u) => n.value = u)
          }, E(i)), {
            default: be(() => [
              (ae(!0), Ae(tn, null, vt(n.value, (u) => (ae(), Fe(Jo, {
                key: `${u[E(r)]}_item`,
                item: u,
                depth: t.depth
              }, Rn({ _: 2 }, [
                vt(a.$slots, (f, h) => ({
                  name: h,
                  fn: be((p) => [
                    Ge(a.$slots, h, Ot({ ref_for: !0 }, p))
                  ])
                }))
              ]), 1032, ["item", "depth"]))), 128))
            ]),
            _: 3
          }, 16, ["modelValue"])) : Qt("", !0)
        ]),
        _: 3
      });
    };
  }
}), Ko = {
  ref: "treeview",
  class: "evo-sortable-treeview"
}, Qo = { class: "evo-sortable-treeview__header" }, ir = /* @__PURE__ */ Object.assign({
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
    const t = Jt(), o = n, r = e, i = computed(() => typeof r.model == "string" ? Wn().props[r.model] : r.model), a = computed(() => {
      var p;
      return ((p = i.value) == null ? void 0 : p.config) ?? {};
    }), s = computed(() => {
      var p;
      return ((p = i.value) == null ? void 0 : p.headers) ?? [];
    }), l = computed(() => {
      var p;
      return ((p = i.value) == null ? void 0 : p.data) ?? i.value;
    }), u = ref(l.value);
    watch(l, (p) => {
      u.value = p;
    });
    const f = ref(/* @__PURE__ */ new Map()), h = computed(() => Array.from(f.value.values()).reduce((p, c) => {
      for (const m in c.value) {
        const y = c.value[m] ?? 0;
        (!p[m] || y > p[m]) && (p[m] = y);
      }
      return p;
    }, []));
    return Bn(nt, {
      group: t,
      config: a,
      treeProps: computed(() => zn(r, ["itemChildren", "itemChildrenCount", "itemTitle", "itemValue"])),
      registerItem: (p, c) => {
        f.value.set(p, c);
      },
      emit(p, c) {
        o(p, c);
      },
      onSorted: (p, c) => {
        const m = p.map((y) => y[a.value.itemValue]) ?? [];
        return o("sorted", {
          parentId: c,
          ids: m,
          $event: p
        }), gt({
          url: a.value.updateSortOrderRoute,
          method: a.value.updateSortOrderMethod,
          data: {
            model: i.value.modelClass,
            parent_id: c,
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
      onLoadChildren: (p) => gt({
        url: a.value.loadChildrenRoute,
        method: a.value.loadChildrenMethod,
        params: {
          model: i.value.modelClass,
          model_id: p[a.value.itemValue]
        },
        withCredentials: !0
      })
    }), (p, c) => (ae(), Ae("div", Ko, [
      me("header", Qo, [
        Ge(p.$slots, "header", {}, () => [
          (ae(!0), Ae(tn, null, vt(E(s), (m, y) => (ae(), Ae("div", {
            key: m.value,
            style: Hn({
              width: `${E(h)[y]}px`,
              textAlign: m.align ?? "left"
            })
          }, en(m.title), 5))), 128))
        ])
      ]),
      ge(E(nn), { slots: p.$slots }, {
        default: be(() => [
          ge(Cn, {
            modelValue: E(u),
            "onUpdate:modelValue": c[0] || (c[0] = (m) => Ie(u) ? u.value = m : null),
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
  ir as EvoSortableTreeview
};
