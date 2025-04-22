import { defineComponent as wn, computed as Q, toRefs as _n, unref as S, ref as Sn, reactive as En, h as ae, getCurrentInstance as gt, watch as Dn, onMounted as Cn, nextTick as Wt, onUnmounted as Tn, isRef as Ie, useId as qt, resolveComponent as Ut, createElementBlock as bt, openBlock as ge, createElementVNode as re, createVNode as ve, normalizeClass as xn, createBlock as Xe, createCommentVNode as Gt, withCtx as be, renderSlot as qe, createTextVNode as On, toDisplayString as In, mergeModels as An, useModel as Mn, inject as Nn, mergeProps as Dt, Fragment as Pn, renderList as Ct, createSlots as Vn, provide as kn, normalizeStyle as Bn } from "vue";
import { syncRef as Rn } from "@vueuse/core";
import { ForwardSlots as Zt } from "@evomark/vue-forward-slots";
import { usePage as Hn } from "@inertiajs/vue3";
import { pick as jn } from "lodash-es";
import Tt from "axios";
import './index.css';var Yn = Object.defineProperty, Ue = Object.getOwnPropertySymbols, Jt = Object.prototype.hasOwnProperty, Kt = Object.prototype.propertyIsEnumerable, xt = (e, n, t) => n in e ? Yn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Se = (e, n) => {
  for (var t in n || (n = {}))
    Jt.call(n, t) && xt(e, t, n[t]);
  if (Ue)
    for (var t of Ue(n))
      Kt.call(n, t) && xt(e, t, n[t]);
  return e;
}, Qt = (e, n) => {
  var t = {};
  for (var o in e)
    Jt.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && Ue)
    for (var o of Ue(e))
      n.indexOf(o) < 0 && Kt.call(e, o) && (t[o] = e[o]);
  return t;
};
const en = "[vue-draggable-plus]: ";
function Xn(e) {
  console.warn(en + e);
}
function Fn(e) {
  console.error(en + e);
}
function Ot(e, n, t) {
  return t >= 0 && t < e.length && e.splice(t, 0, e.splice(n, 1)[0]), e;
}
function $n(e) {
  return e.replace(/-(\w)/g, (n, t) => t ? t.toUpperCase() : "");
}
function Ln(e) {
  return Object.keys(e).reduce((n, t) => (typeof e[t] < "u" && (n[$n(t)] = e[t]), n), {});
}
function It(e, n) {
  return Array.isArray(e) && e.splice(n, 1), e;
}
function At(e, n, t) {
  return Array.isArray(e) && e.splice(n, 0, t), e;
}
function zn(e) {
  return typeof e > "u";
}
function Wn(e) {
  return typeof e == "string";
}
function Mt(e, n, t) {
  const o = e.children[t];
  e.insertBefore(n, o);
}
function nt(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function qn(e, n = document) {
  var t;
  let o = null;
  return typeof (n == null ? void 0 : n.querySelector) == "function" ? o = (t = n == null ? void 0 : n.querySelector) == null ? void 0 : t.call(n, e) : o = document.querySelector(e), o || Xn(`Element not found: ${e}`), o;
}
function Un(e, n, t = null) {
  return function(...o) {
    return e.apply(t, o), n.apply(t, o);
  };
}
function Gn(e, n) {
  const t = Se({}, e);
  return Object.keys(n).forEach((o) => {
    t[o] ? t[o] = Un(e[o], n[o]) : t[o] = n[o];
  }), t;
}
function Zn(e) {
  return e instanceof HTMLElement;
}
function Nt(e, n) {
  Object.keys(e).forEach((t) => {
    n(t, e[t]);
  });
}
function Jn(e) {
  return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
  (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
const Kn = Object.assign;
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Pt(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    n && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function te(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Pt(Object(t), !0).forEach(function(o) {
      Qn(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Pt(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function Fe(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fe = function(n) {
    return typeof n;
  } : Fe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Fe(e);
}
function Qn(e, n, t) {
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
function eo(e, n) {
  if (e == null)
    return {};
  var t = {}, o = Object.keys(e), r, a;
  for (a = 0; a < o.length; a++)
    r = o[a], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
function to(e, n) {
  if (e == null)
    return {};
  var t = eo(e, n), o, r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      o = a[r], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]);
  }
  return t;
}
var no = "1.15.2";
function ie(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var se = ie(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ke = ie(/Edge/i), Vt = ie(/firefox/i), Ae = ie(/safari/i) && !ie(/chrome/i) && !ie(/android/i), tn = ie(/iP(ad|od|hone)/i), nn = ie(/chrome/i) && ie(/android/i), on = {
  capture: !1,
  passive: !1
};
function D(e, n, t) {
  e.addEventListener(n, t, !se && on);
}
function _(e, n, t) {
  e.removeEventListener(n, t, !se && on);
}
function Ge(e, n) {
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
function oo(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function J(e, n, t, o) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && Ge(e, n) : Ge(e, n)) || o && e === t)
        return e;
      if (e === t)
        break;
    } while (e = oo(e));
  }
  return null;
}
var kt = /\s+/g;
function L(e, n, t) {
  if (e && n)
    if (e.classList)
      e.classList[t ? "add" : "remove"](n);
    else {
      var o = (" " + e.className + " ").replace(kt, " ").replace(" " + n + " ", " ");
      e.className = (o + (t ? " " + n : "")).replace(kt, " ");
    }
}
function h(e, n, t) {
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
      var o = h(e, "transform");
      o && o !== "none" && (t = o + " " + t);
    } while (!n && (e = e.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(t);
}
function rn(e, n, t) {
  if (e) {
    var o = e.getElementsByTagName(n), r = 0, a = o.length;
    if (t)
      for (; r < a; r++)
        t(o[r], r);
    return o;
  }
  return [];
}
function ee() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function P(e, n, t, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var a, i, s, l, u, d, f;
    if (e !== window && e.parentNode && e !== ee() ? (a = e.getBoundingClientRect(), i = a.top, s = a.left, l = a.bottom, u = a.right, d = a.height, f = a.width) : (i = 0, s = 0, l = window.innerHeight, u = window.innerWidth, d = window.innerHeight, f = window.innerWidth), (n || t) && e !== window && (r = r || e.parentNode, !se))
      do
        if (r && r.getBoundingClientRect && (h(r, "transform") !== "none" || t && h(r, "position") !== "static")) {
          var y = r.getBoundingClientRect();
          i -= y.top + parseInt(h(r, "border-top-width")), s -= y.left + parseInt(h(r, "border-left-width")), l = i + a.height, u = s + a.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var p = De(r || e), E = p && p.a, w = p && p.d;
      p && (i /= w, s /= E, f /= E, d /= w, l = i + d, u = s + f);
    }
    return {
      top: i,
      left: s,
      bottom: l,
      right: u,
      width: f,
      height: d
    };
  }
}
function Bt(e, n, t) {
  for (var o = de(e, !0), r = P(e)[n]; o; ) {
    var a = P(o)[t], i = void 0;
    if (i = r >= a, !i)
      return o;
    if (o === ee())
      break;
    o = de(o, !1);
  }
  return !1;
}
function Ce(e, n, t, o) {
  for (var r = 0, a = 0, i = e.children; a < i.length; ) {
    if (i[a].style.display !== "none" && i[a] !== m.ghost && (o || i[a] !== m.dragged) && J(i[a], t.draggable, e, !1)) {
      if (r === n)
        return i[a];
      r++;
    }
    a++;
  }
  return null;
}
function yt(e, n) {
  for (var t = e.lastElementChild; t && (t === m.ghost || h(t, "display") === "none" || n && !Ge(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function U(e, n) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== m.clone && (!n || Ge(e, n)) && t++;
  return t;
}
function Rt(e) {
  var n = 0, t = 0, o = ee();
  if (e)
    do {
      var r = De(e), a = r.a, i = r.d;
      n += e.scrollLeft * a, t += e.scrollTop * i;
    } while (e !== o && (e = e.parentNode));
  return [n, t];
}
function ro(e, n) {
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
    return ee();
  var t = e, o = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var r = h(t);
      if (t.clientWidth < t.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body)
          return ee();
        if (o || n)
          return t;
        o = !0;
      }
    }
  while (t = t.parentNode);
  return ee();
}
function ao(e, n) {
  if (e && n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function ot(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Me;
function an(e, n) {
  return function() {
    if (!Me) {
      var t = arguments, o = this;
      t.length === 1 ? e.call(o, t[0]) : e.apply(o, t), Me = setTimeout(function() {
        Me = void 0;
      }, n);
    }
  };
}
function io() {
  clearTimeout(Me), Me = void 0;
}
function ln(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function sn(e) {
  var n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function un(e, n, t) {
  var o = {};
  return Array.from(e.children).forEach(function(r) {
    var a, i, s, l;
    if (!(!J(r, n.draggable, e, !1) || r.animated || r === t)) {
      var u = P(r);
      o.left = Math.min((a = o.left) !== null && a !== void 0 ? a : 1 / 0, u.left), o.top = Math.min((i = o.top) !== null && i !== void 0 ? i : 1 / 0, u.top), o.right = Math.max((s = o.right) !== null && s !== void 0 ? s : -1 / 0, u.right), o.bottom = Math.max((l = o.bottom) !== null && l !== void 0 ? l : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var W = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function lo() {
  var e = [], n;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var t = [].slice.call(this.el.children);
        t.forEach(function(o) {
          if (!(h(o, "display") === "none" || o === m.ghost)) {
            e.push({
              target: o,
              rect: P(o)
            });
            var r = te({}, e[e.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = De(o, !0);
              a && (r.top -= a.f, r.left -= a.e);
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
      e.splice(ro(e, {
        target: t
      }), 1);
    },
    animateAll: function(t) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(n), typeof t == "function" && t();
        return;
      }
      var r = !1, a = 0;
      e.forEach(function(i) {
        var s = 0, l = i.target, u = l.fromRect, d = P(l), f = l.prevFromRect, y = l.prevToRect, p = i.rect, E = De(l, !0);
        E && (d.top -= E.f, d.left -= E.e), l.toRect = d, l.thisAnimationDuration && ot(f, d) && !ot(u, d) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - d.top) / (p.left - d.left) === (u.top - d.top) / (u.left - d.left) && (s = uo(p, f, y, o.options)), ot(d, u) || (l.prevFromRect = u, l.prevToRect = d, s || (s = o.options.animation), o.animate(l, p, d, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(n), r ? n = setTimeout(function() {
        typeof t == "function" && t();
      }, a) : typeof t == "function" && t(), e = [];
    },
    animate: function(t, o, r, a) {
      if (a) {
        h(t, "transition", ""), h(t, "transform", "");
        var i = De(this.el), s = i && i.a, l = i && i.d, u = (o.left - r.left) / (s || 1), d = (o.top - r.top) / (l || 1);
        t.animatingX = !!u, t.animatingY = !!d, h(t, "transform", "translate3d(" + u + "px," + d + "px,0)"), this.forRepaintDummy = so(t), h(t, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          h(t, "transition", ""), h(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, a);
      }
    }
  };
}
function so(e) {
  return e.offsetWidth;
}
function uo(e, n, t, o) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * o.animation;
}
var ye = [], rt = {
  initializeByDefault: !0
}, Be = {
  mount: function(e) {
    for (var n in rt)
      rt.hasOwnProperty(n) && !(n in e) && (e[n] = rt[n]);
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
    ye.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][r] && n[a.pluginName][r](te({
        sortable: n
      }, t)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](te({
        sortable: n
      }, t)));
    });
  },
  initializePlugins: function(e, n, t, o) {
    ye.forEach(function(i) {
      var s = i.pluginName;
      if (!(!e.options[s] && !i.initializeByDefault)) {
        var l = new i(e, n, e.options);
        l.sortable = e, l.options = e.options, e[s] = l, le(t, l.defaults);
      }
    });
    for (var r in e.options)
      if (e.options.hasOwnProperty(r)) {
        var a = this.modifyOption(e, r, e.options[r]);
        typeof a < "u" && (e.options[r] = a);
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
function co(e) {
  var n = e.sortable, t = e.rootEl, o = e.name, r = e.targetEl, a = e.cloneEl, i = e.toEl, s = e.fromEl, l = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, f = e.newDraggableIndex, y = e.originalEvent, p = e.putSortable, E = e.extraEventProperties;
  if (n = n || t && t[W], !!n) {
    var w, Y = n.options, A = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !se && !ke ? w = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (w = document.createEvent("Event"), w.initEvent(o, !0, !0)), w.to = i || t, w.from = s || t, w.item = r || t, w.clone = a, w.oldIndex = l, w.newIndex = u, w.oldDraggableIndex = d, w.newDraggableIndex = f, w.originalEvent = y, w.pullMode = p ? p.lastPutMode : void 0;
    var G = te(te({}, E), Be.getEventProperties(o, n));
    for (var V in G)
      w[V] = G[V];
    t && t.dispatchEvent(w), Y[A] && Y[A].call(n, w);
  }
}
var fo = ["evt"], $ = function(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = t.evt, r = to(t, fo);
  Be.pluginEvent.bind(m)(e, n, te({
    dragEl: c,
    parentEl: O,
    ghostEl: v,
    rootEl: T,
    nextEl: me,
    lastDownEl: $e,
    cloneEl: x,
    cloneHidden: ce,
    dragStarted: Te,
    putSortable: H,
    activeSortable: m.active,
    originalEvent: o,
    oldIndex: Ee,
    oldDraggableIndex: Ne,
    newIndex: z,
    newDraggableIndex: ue,
    hideGhostForTarget: pn,
    unhideGhostForTarget: hn,
    cloneNowHidden: function() {
      ce = !0;
    },
    cloneNowShown: function() {
      ce = !1;
    },
    dispatchSortableEvent: function(a) {
      X({
        sortable: n,
        name: a,
        originalEvent: o
      });
    }
  }, r));
};
function X(e) {
  co(te({
    putSortable: H,
    cloneEl: x,
    targetEl: c,
    rootEl: T,
    oldIndex: Ee,
    oldDraggableIndex: Ne,
    newIndex: z,
    newDraggableIndex: ue
  }, e));
}
var c, O, v, T, me, $e, x, ce, Ee, z, Ne, ue, Re, H, _e = !1, Ze = !1, Je = [], pe, Z, at, it, Ht, jt, Te, we, Pe, Ve = !1, He = !1, Le, j, lt = [], ft = !1, Ke = [], et = typeof document < "u", je = tn, Yt = ke || se ? "cssFloat" : "float", po = et && !nn && !tn && "draggable" in document.createElement("div"), cn = function() {
  if (et) {
    if (se)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), dn = function(e, n) {
  var t = h(e), o = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), r = Ce(e, 0, n), a = Ce(e, 1, n), i = r && h(r), s = a && h(a), l = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + P(r).width, u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + P(a).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && i.float && i.float !== "none") {
    var d = i.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
  }
  return r && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || l >= o && t[Yt] === "none" || a && t[Yt] === "none" && l + u > o) ? "vertical" : "horizontal";
}, ho = function(e, n, t) {
  var o = t ? e.left : e.top, r = t ? e.right : e.bottom, a = t ? e.width : e.height, i = t ? n.left : n.top, s = t ? n.right : n.bottom, l = t ? n.width : n.height;
  return o === i || r === s || o + a / 2 === i + l / 2;
}, mo = function(e, n) {
  var t;
  return Je.some(function(o) {
    var r = o[W].options.emptyInsertThreshold;
    if (!(!r || yt(o))) {
      var a = P(o), i = e >= a.left - r && e <= a.right + r, s = n >= a.top - r && n <= a.bottom + r;
      if (i && s)
        return t = o;
    }
  }), t;
}, fn = function(e) {
  function n(r, a) {
    return function(i, s, l, u) {
      var d = i.options.group.name && s.options.group.name && i.options.group.name === s.options.group.name;
      if (r == null && (a || d))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(i, s, l, u), a)(i, s, l, u);
      var f = (a ? i : s).options.group.name;
      return r === !0 || typeof r == "string" && r === f || r.join && r.indexOf(f) > -1;
    };
  }
  var t = {}, o = e.group;
  (!o || Fe(o) != "object") && (o = {
    name: o
  }), t.name = o.name, t.checkPull = n(o.pull, !0), t.checkPut = n(o.put), t.revertClone = o.revertClone, e.group = t;
}, pn = function() {
  !cn && v && h(v, "display", "none");
}, hn = function() {
  !cn && v && h(v, "display", "");
};
et && !nn && document.addEventListener("click", function(e) {
  if (Ze)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ze = !1, !1;
}, !0);
var he = function(e) {
  if (c) {
    e = e.touches ? e.touches[0] : e;
    var n = mo(e.clientX, e.clientY);
    if (n) {
      var t = {};
      for (var o in e)
        e.hasOwnProperty(o) && (t[o] = e[o]);
      t.target = t.rootEl = n, t.preventDefault = void 0, t.stopPropagation = void 0, n[W]._onDragOver(t);
    }
  }
}, vo = function(e) {
  c && c.parentNode[W]._isOutsideThisEl(e.target);
};
function m(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = le({}, n), e[W] = this;
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
      return dn(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, i) {
      a.setData("Text", i.textContent);
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
    supportPointer: m.supportPointer !== !1 && "PointerEvent" in window && !Ae,
    emptyInsertThreshold: 5
  };
  Be.initializePlugins(this, e, t);
  for (var o in t)
    !(o in n) && (n[o] = t[o]);
  fn(n);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : po, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? D(e, "pointerdown", this._onTapStart) : (D(e, "mousedown", this._onTapStart), D(e, "touchstart", this._onTapStart)), this.nativeDraggable && (D(e, "dragover", this), D(e, "dragenter", this)), Je.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), le(this, lo());
}
m.prototype = /** @lends Sortable.prototype */
{
  constructor: m,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (we = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, c) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, t = this.el, o = this.options, r = o.preventOnFilter, a = e.type, i = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (i || e).target, l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, u = o.filter;
      if (Do(t), !c && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || o.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Ae && s && s.tagName.toUpperCase() === "SELECT") && (s = J(s, o.draggable, t, !1), !(s && s.animated) && $e !== s)) {
        if (Ee = U(s), Ne = U(s, o.draggable), typeof u == "function") {
          if (u.call(this, e, s, this)) {
            X({
              sortable: n,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: t,
              fromEl: t
            }), $("filter", n, {
              evt: e
            }), r && e.cancelable && e.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(d) {
          if (d = J(l, d.trim(), t, !1), d)
            return X({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: s,
              fromEl: t,
              toEl: t
            }), $("filter", n, {
              evt: e
            }), !0;
        }), u)) {
          r && e.cancelable && e.preventDefault();
          return;
        }
        o.handle && !J(l, o.handle, t, !1) || this._prepareDragStart(e, i, s);
      }
    }
  },
  _prepareDragStart: function(e, n, t) {
    var o = this, r = o.el, a = o.options, i = r.ownerDocument, s;
    if (t && !c && t.parentNode === r) {
      var l = P(t);
      if (T = r, c = t, O = c.parentNode, me = c.nextSibling, $e = t, Re = a.group, m.dragged = c, pe = {
        target: c,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Ht = pe.clientX - l.left, jt = pe.clientY - l.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, c.style["will-change"] = "all", s = function() {
        if ($("delayEnded", o, {
          evt: e
        }), m.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !Vt && o.nativeDraggable && (c.draggable = !0), o._triggerDragStart(e, n), X({
          sortable: o,
          name: "choose",
          originalEvent: e
        }), L(c, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(u) {
        rn(c, u.trim(), st);
      }), D(i, "dragover", he), D(i, "mousemove", he), D(i, "touchmove", he), D(i, "mouseup", o._onDrop), D(i, "touchend", o._onDrop), D(i, "touchcancel", o._onDrop), Vt && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), $("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ke || se))) {
        if (m.eventCanceled) {
          this._onDrop();
          return;
        }
        D(i, "mouseup", o._disableDelayedDrag), D(i, "touchend", o._disableDelayedDrag), D(i, "touchcancel", o._disableDelayedDrag), D(i, "mousemove", o._delayedDragTouchMoveHandler), D(i, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && D(i, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    c && st(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    _(e, "mouseup", this._disableDelayedDrag), _(e, "touchend", this._disableDelayedDrag), _(e, "touchcancel", this._disableDelayedDrag), _(e, "mousemove", this._delayedDragTouchMoveHandler), _(e, "touchmove", this._delayedDragTouchMoveHandler), _(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? D(document, "pointermove", this._onTouchMove) : n ? D(document, "touchmove", this._onTouchMove) : D(document, "mousemove", this._onTouchMove) : (D(c, "dragend", this), D(T, "dragstart", this._onDragStart));
    try {
      document.selection ? ze(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (_e = !1, T && c) {
      $("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && D(document, "dragover", vo);
      var t = this.options;
      !e && L(c, t.dragClass, !1), L(c, t.ghostClass, !0), m.active = this, e && this._appendGhost(), X({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Z) {
      this._lastX = Z.clientX, this._lastY = Z.clientY, pn();
      for (var e = document.elementFromPoint(Z.clientX, Z.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Z.clientX, Z.clientY), e !== n); )
        n = e;
      if (c.parentNode[W]._isOutsideThisEl(e), n)
        do {
          if (n[W]) {
            var t = void 0;
            if (t = n[W]._onDragOver({
              clientX: Z.clientX,
              clientY: Z.clientY,
              target: e,
              rootEl: n
            }), t && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      hn();
    }
  },
  _onTouchMove: function(e) {
    if (pe) {
      var n = this.options, t = n.fallbackTolerance, o = n.fallbackOffset, r = e.touches ? e.touches[0] : e, a = v && De(v, !0), i = v && a && a.a, s = v && a && a.d, l = je && j && Rt(j), u = (r.clientX - pe.clientX + o.x) / (i || 1) + (l ? l[0] - lt[0] : 0) / (i || 1), d = (r.clientY - pe.clientY + o.y) / (s || 1) + (l ? l[1] - lt[1] : 0) / (s || 1);
      if (!m.active && !_e) {
        if (t && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < t)
          return;
        this._onDragStart(e, !0);
      }
      if (v) {
        a ? (a.e += u - (at || 0), a.f += d - (it || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f: d
        };
        var f = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        h(v, "webkitTransform", f), h(v, "mozTransform", f), h(v, "msTransform", f), h(v, "transform", f), at = u, it = d, Z = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!v) {
      var e = this.options.fallbackOnBody ? document.body : T, n = P(c, !0, je, !0, e), t = this.options;
      if (je) {
        for (j = e; h(j, "position") === "static" && h(j, "transform") === "none" && j !== document; )
          j = j.parentNode;
        j !== document.body && j !== document.documentElement ? (j === document && (j = ee()), n.top += j.scrollTop, n.left += j.scrollLeft) : j = ee(), lt = Rt(j);
      }
      v = c.cloneNode(!0), L(v, t.ghostClass, !1), L(v, t.fallbackClass, !0), L(v, t.dragClass, !0), h(v, "transition", ""), h(v, "transform", ""), h(v, "box-sizing", "border-box"), h(v, "margin", 0), h(v, "top", n.top), h(v, "left", n.left), h(v, "width", n.width), h(v, "height", n.height), h(v, "opacity", "0.8"), h(v, "position", je ? "absolute" : "fixed"), h(v, "zIndex", "100000"), h(v, "pointerEvents", "none"), m.ghost = v, e.appendChild(v), h(v, "transform-origin", Ht / parseInt(v.style.width) * 100 + "% " + jt / parseInt(v.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var t = this, o = e.dataTransfer, r = t.options;
    if ($("dragStart", this, {
      evt: e
    }), m.eventCanceled) {
      this._onDrop();
      return;
    }
    $("setupClone", this), m.eventCanceled || (x = sn(c), x.removeAttribute("id"), x.draggable = !1, x.style["will-change"] = "", this._hideClone(), L(x, this.options.chosenClass, !1), m.clone = x), t.cloneId = ze(function() {
      $("clone", t), !m.eventCanceled && (t.options.removeCloneOnHide || T.insertBefore(x, c), t._hideClone(), X({
        sortable: t,
        name: "clone"
      }));
    }), !n && L(c, r.dragClass, !0), n ? (Ze = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (_(document, "mouseup", t._onDrop), _(document, "touchend", t._onDrop), _(document, "touchcancel", t._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(t, o, c)), D(document, "drop", t), h(c, "transform", "translateZ(0)")), _e = !0, t._dragStartId = ze(t._dragStarted.bind(t, n, e)), D(document, "selectstart", t), Te = !0, Ae && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, t = e.target, o, r, a, i = this.options, s = i.group, l = m.active, u = Re === s, d = i.sort, f = H || l, y, p = this, E = !1;
    if (ft)
      return;
    function w(oe, tt) {
      $(oe, p, te({
        evt: e,
        isOwner: u,
        axis: y ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: d,
        fromSortable: f,
        target: t,
        completed: A,
        onMove: function(Et, yn) {
          return Ye(T, n, c, o, Et, P(Et), e, yn);
        },
        changed: G
      }, tt));
    }
    function Y() {
      w("dragOverAnimationCapture"), p.captureAnimationState(), p !== f && f.captureAnimationState();
    }
    function A(oe) {
      return w("dragOverCompleted", {
        insertion: oe
      }), oe && (u ? l._hideClone() : l._showClone(p), p !== f && (L(c, H ? H.options.ghostClass : l.options.ghostClass, !1), L(c, i.ghostClass, !0)), H !== p && p !== m.active ? H = p : p === m.active && H && (H = null), f === p && (p._ignoreWhileAnimating = t), p.animateAll(function() {
        w("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (t === c && !c.animated || t === n && !t.animated) && (we = null), !i.dragoverBubble && !e.rootEl && t !== document && (c.parentNode[W]._isOutsideThisEl(e.target), !oe && he(e)), !i.dragoverBubble && e.stopPropagation && e.stopPropagation(), E = !0;
    }
    function G() {
      z = U(c), ue = U(c, i.draggable), X({
        sortable: p,
        name: "change",
        toEl: n,
        newIndex: z,
        newDraggableIndex: ue,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), t = J(t, i.draggable, n, !0), w("dragOver"), m.eventCanceled)
      return E;
    if (c.contains(e.target) || t.animated && t.animatingX && t.animatingY || p._ignoreWhileAnimating === t)
      return A(!1);
    if (Ze = !1, l && !i.disabled && (u ? d || (a = O !== T) : H === this || (this.lastPutMode = Re.checkPull(this, l, c, e)) && s.checkPut(this, l, c, e))) {
      if (y = this._getDirection(e, t) === "vertical", o = P(c), w("dragOverValid"), m.eventCanceled)
        return E;
      if (a)
        return O = T, Y(), this._hideClone(), w("revert"), m.eventCanceled || (me ? T.insertBefore(c, me) : T.appendChild(c)), A(!0);
      var V = yt(n, i.draggable);
      if (!V || wo(e, y, this) && !V.animated) {
        if (V === c)
          return A(!1);
        if (V && n === e.target && (t = V), t && (r = P(t)), Ye(T, n, c, o, t, r, e, !!t) !== !1)
          return Y(), V && V.nextSibling ? n.insertBefore(c, V.nextSibling) : n.appendChild(c), O = n, G(), A(!0);
      } else if (V && yo(e, y, this)) {
        var K = Ce(n, 0, i, !0);
        if (K === c)
          return A(!1);
        if (t = K, r = P(t), Ye(T, n, c, o, t, r, e, !1) !== !1)
          return Y(), n.insertBefore(c, K), O = n, G(), A(!0);
      } else if (t.parentNode === n) {
        r = P(t);
        var B = 0, ne, fe = c.parentNode !== n, g = !ho(c.animated && c.toRect || o, t.animated && t.toRect || r, y), b = y ? "top" : "left", M = Bt(t, "top", "top") || Bt(c, "top", "top"), F = M ? M.scrollTop : void 0;
        we !== t && (ne = r[b], Ve = !1, He = !g && i.invertSwap || fe), B = _o(e, t, r, y, g ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, He, we === t);
        var C;
        if (B !== 0) {
          var I = U(c);
          do
            I -= B, C = O.children[I];
          while (C && (h(C, "display") === "none" || C === v));
        }
        if (B === 0 || C === t)
          return A(!1);
        we = t, Pe = B;
        var R = t.nextElementSibling, k = !1;
        k = B === 1;
        var q = Ye(T, n, c, o, t, r, e, k);
        if (q !== !1)
          return (q === 1 || q === -1) && (k = q === 1), ft = !0, setTimeout(bo, 30), Y(), k && !R ? n.appendChild(c) : t.parentNode.insertBefore(c, k ? R : t), M && ln(M, 0, F - M.scrollTop), O = c.parentNode, ne !== void 0 && !He && (Le = Math.abs(ne - P(t)[b])), G(), A(!0);
      }
      if (n.contains(c))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    _(document, "mousemove", this._onTouchMove), _(document, "touchmove", this._onTouchMove), _(document, "pointermove", this._onTouchMove), _(document, "dragover", he), _(document, "mousemove", he), _(document, "touchmove", he);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    _(e, "mouseup", this._onDrop), _(e, "touchend", this._onDrop), _(e, "pointerup", this._onDrop), _(e, "touchcancel", this._onDrop), _(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, t = this.options;
    if (z = U(c), ue = U(c, t.draggable), $("drop", this, {
      evt: e
    }), O = c && c.parentNode, z = U(c), ue = U(c, t.draggable), m.eventCanceled) {
      this._nulling();
      return;
    }
    _e = !1, He = !1, Ve = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), pt(this.cloneId), pt(this._dragStartId), this.nativeDraggable && (_(document, "drop", this), _(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ae && h(document.body, "user-select", ""), h(c, "transform", ""), e && (Te && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()), v && v.parentNode && v.parentNode.removeChild(v), (T === O || H && H.lastPutMode !== "clone") && x && x.parentNode && x.parentNode.removeChild(x), c && (this.nativeDraggable && _(c, "dragend", this), st(c), c.style["will-change"] = "", Te && !_e && L(c, H ? H.options.ghostClass : this.options.ghostClass, !1), L(c, this.options.chosenClass, !1), X({
      sortable: this,
      name: "unchoose",
      toEl: O,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), T !== O ? (z >= 0 && (X({
      rootEl: O,
      name: "add",
      toEl: O,
      fromEl: T,
      originalEvent: e
    }), X({
      sortable: this,
      name: "remove",
      toEl: O,
      originalEvent: e
    }), X({
      rootEl: O,
      name: "sort",
      toEl: O,
      fromEl: T,
      originalEvent: e
    }), X({
      sortable: this,
      name: "sort",
      toEl: O,
      originalEvent: e
    })), H && H.save()) : z !== Ee && z >= 0 && (X({
      sortable: this,
      name: "update",
      toEl: O,
      originalEvent: e
    }), X({
      sortable: this,
      name: "sort",
      toEl: O,
      originalEvent: e
    })), m.active && ((z == null || z === -1) && (z = Ee, ue = Ne), X({
      sortable: this,
      name: "end",
      toEl: O,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    $("nulling", this), T = c = O = v = me = x = $e = ce = pe = Z = Te = z = ue = Ee = Ne = we = Pe = H = Re = m.dragged = m.ghost = m.clone = m.active = null, Ke.forEach(function(e) {
      e.checked = !0;
    }), Ke.length = at = it = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(e), go(e));
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
    for (var e = [], n, t = this.el.children, o = 0, r = t.length, a = this.options; o < r; o++)
      n = t[o], J(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || Eo(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var t = {}, o = this.el;
    this.toArray().forEach(function(r, a) {
      var i = o.children[a];
      J(i, this.options.draggable, o, !1) && (t[r] = i);
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
    return J(e, n || this.options.draggable, this.el, !1);
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
    typeof o < "u" ? t[e] = o : t[e] = n, e === "group" && fn(t);
  },
  /**
   * Destroy
   */
  destroy: function() {
    $("destroy", this);
    var e = this.el;
    e[W] = null, _(e, "mousedown", this._onTapStart), _(e, "touchstart", this._onTapStart), _(e, "pointerdown", this._onTapStart), this.nativeDraggable && (_(e, "dragover", this), _(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Je.splice(Je.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!ce) {
      if ($("hideClone", this), m.eventCanceled)
        return;
      h(x, "display", "none"), this.options.removeCloneOnHide && x.parentNode && x.parentNode.removeChild(x), ce = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ce) {
      if ($("showClone", this), m.eventCanceled)
        return;
      c.parentNode == T && !this.options.group.revertClone ? T.insertBefore(x, c) : me ? T.insertBefore(x, me) : T.appendChild(x), this.options.group.revertClone && this.animate(c, x), h(x, "display", ""), ce = !1;
    }
  }
};
function go(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ye(e, n, t, o, r, a, i, s) {
  var l, u = e[W], d = u.options.onMove, f;
  return window.CustomEvent && !se && !ke ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = n, l.from = e, l.dragged = t, l.draggedRect = o, l.related = r || n, l.relatedRect = a || P(n), l.willInsertAfter = s, l.originalEvent = i, e.dispatchEvent(l), d && (f = d.call(u, l, i)), f;
}
function st(e) {
  e.draggable = !1;
}
function bo() {
  ft = !1;
}
function yo(e, n, t) {
  var o = P(Ce(t.el, 0, t.options, !0)), r = un(t.el, t.options, v), a = 10;
  return n ? e.clientX < r.left - a || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - a || e.clientY < o.bottom && e.clientX < o.left;
}
function wo(e, n, t) {
  var o = P(yt(t.el, t.options.draggable)), r = un(t.el, t.options, v), a = 10;
  return n ? e.clientX > r.right + a || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + a || e.clientX > o.right && e.clientY > o.top;
}
function _o(e, n, t, o, r, a, i, s) {
  var l = o ? e.clientY : e.clientX, u = o ? t.height : t.width, d = o ? t.top : t.left, f = o ? t.bottom : t.right, y = !1;
  if (!i) {
    if (s && Le < u * r) {
      if (!Ve && (Pe === 1 ? l > d + u * a / 2 : l < f - u * a / 2) && (Ve = !0), Ve)
        y = !0;
      else if (Pe === 1 ? l < d + Le : l > f - Le)
        return -Pe;
    } else if (l > d + u * (1 - r) / 2 && l < f - u * (1 - r) / 2)
      return So(n);
  }
  return y = y || i, y && (l < d + u * a / 2 || l > f - u * a / 2) ? l > d + u / 2 ? 1 : -1 : 0;
}
function So(e) {
  return U(c) < U(e) ? 1 : -1;
}
function Eo(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, o = 0; t--; )
    o += n.charCodeAt(t);
  return o.toString(36);
}
function Do(e) {
  Ke.length = 0;
  for (var n = e.getElementsByTagName("input"), t = n.length; t--; ) {
    var o = n[t];
    o.checked && Ke.push(o);
  }
}
function ze(e) {
  return setTimeout(e, 0);
}
function pt(e) {
  return clearTimeout(e);
}
et && D(document, "touchmove", function(e) {
  (m.active || _e) && e.cancelable && e.preventDefault();
});
m.utils = {
  on: D,
  off: _,
  css: h,
  find: rn,
  is: function(e, n) {
    return !!J(e, n, e, !1);
  },
  extend: ao,
  throttle: an,
  closest: J,
  toggleClass: L,
  clone: sn,
  index: U,
  nextTick: ze,
  cancelNextTick: pt,
  detectDirection: dn,
  getChild: Ce
};
m.get = function(e) {
  return e[W];
};
m.mount = function() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  n[0].constructor === Array && (n = n[0]), n.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (m.utils = te(te({}, m.utils), o.utils)), Be.mount(o);
  });
};
m.create = function(e, n) {
  return new m(e, n);
};
m.version = no;
var N = [], xe, ht, mt = !1, ut, ct, Qe, Oe;
function Co() {
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
      this.sortable.nativeDraggable ? _(document, "dragover", this._handleAutoScroll) : (_(document, "pointermove", this._handleFallbackAutoScroll), _(document, "touchmove", this._handleFallbackAutoScroll), _(document, "mousemove", this._handleFallbackAutoScroll)), Xt(), We(), io();
    },
    nulling: function() {
      Qe = ht = xe = mt = Oe = ut = ct = null, N.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, t) {
      var o = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, i = document.elementFromPoint(r, a);
      if (Qe = n, t || this.options.forceAutoScrollFallback || ke || se || Ae) {
        dt(n, this.options, i, t);
        var s = de(i, !0);
        mt && (!Oe || r !== ut || a !== ct) && (Oe && Xt(), Oe = setInterval(function() {
          var l = de(document.elementFromPoint(r, a), !0);
          l !== s && (s = l, We()), dt(n, o.options, l, t);
        }, 10), ut = r, ct = a);
      } else {
        if (!this.options.bubbleScroll || de(i, !0) === ee()) {
          We();
          return;
        }
        dt(n, this.options, de(i, !1), !1);
      }
    }
  }, le(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function We() {
  N.forEach(function(e) {
    clearInterval(e.pid);
  }), N = [];
}
function Xt() {
  clearInterval(Oe);
}
var dt = an(function(e, n, t, o) {
  if (n.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, i = n.scrollSensitivity, s = n.scrollSpeed, l = ee(), u = !1, d;
    ht !== t && (ht = t, We(), xe = n.scroll, d = n.scrollFn, xe === !0 && (xe = de(t, !0)));
    var f = 0, y = xe;
    do {
      var p = y, E = P(p), w = E.top, Y = E.bottom, A = E.left, G = E.right, V = E.width, K = E.height, B = void 0, ne = void 0, fe = p.scrollWidth, g = p.scrollHeight, b = h(p), M = p.scrollLeft, F = p.scrollTop;
      p === l ? (B = V < fe && (b.overflowX === "auto" || b.overflowX === "scroll" || b.overflowX === "visible"), ne = K < g && (b.overflowY === "auto" || b.overflowY === "scroll" || b.overflowY === "visible")) : (B = V < fe && (b.overflowX === "auto" || b.overflowX === "scroll"), ne = K < g && (b.overflowY === "auto" || b.overflowY === "scroll"));
      var C = B && (Math.abs(G - r) <= i && M + V < fe) - (Math.abs(A - r) <= i && !!M), I = ne && (Math.abs(Y - a) <= i && F + K < g) - (Math.abs(w - a) <= i && !!F);
      if (!N[f])
        for (var R = 0; R <= f; R++)
          N[R] || (N[R] = {});
      (N[f].vx != C || N[f].vy != I || N[f].el !== p) && (N[f].el = p, N[f].vx = C, N[f].vy = I, clearInterval(N[f].pid), (C != 0 || I != 0) && (u = !0, N[f].pid = setInterval((function() {
        o && this.layer === 0 && m.active._onTouchMove(Qe);
        var k = N[this.layer].vy ? N[this.layer].vy * s : 0, q = N[this.layer].vx ? N[this.layer].vx * s : 0;
        typeof d == "function" && d.call(m.dragged.parentNode[W], q, k, e, Qe, N[this.layer].el) !== "continue" || ln(N[this.layer].el, q, k);
      }).bind({
        layer: f
      }), 24))), f++;
    } while (n.bubbleScroll && y !== l && (y = de(y, !1)));
    mt = u;
  }
}, 30), mn = function(e) {
  var n = e.originalEvent, t = e.putSortable, o = e.dragEl, r = e.activeSortable, a = e.dispatchSortableEvent, i = e.hideGhostForTarget, s = e.unhideGhostForTarget;
  if (n) {
    var l = t || r;
    i();
    var u = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(u.clientX, u.clientY);
    s(), l && !l.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: o,
      putSortable: t
    }));
  }
};
function wt() {
}
wt.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, t = e.putSortable;
    this.sortable.captureAnimationState(), t && t.captureAnimationState();
    var o = Ce(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), t && t.animateAll();
  },
  drop: mn
};
le(wt, {
  pluginName: "revertOnSpill"
});
function _t() {
}
_t.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, t = e.putSortable, o = t || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: mn
};
le(_t, {
  pluginName: "removeOnSpill"
});
m.mount(new Co());
m.mount(_t, wt);
function To(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function xo(e) {
  gt() && Tn(e);
}
function Oo(e) {
  gt() ? Cn(e) : Wt(e);
}
let vn = null, gn = null;
function Ft(e = null, n = null) {
  vn = e, gn = n;
}
function Io() {
  return {
    data: vn,
    clonedData: gn
  };
}
const $t = Symbol("cloneElement");
function Ao(...e) {
  var n, t;
  const o = (n = gt()) == null ? void 0 : n.proxy;
  let r = null;
  const a = e[0];
  let [, i, s] = e;
  Array.isArray(S(i)) || (s = i, i = null);
  let l = null;
  const {
    immediate: u = !0,
    clone: d = To,
    customUpdate: f
  } = (t = S(s)) != null ? t : {};
  function y(g) {
    var b;
    const { from: M, oldIndex: F, item: C } = g;
    r = Array.from(M.childNodes);
    const I = S((b = S(i)) == null ? void 0 : b[F]), R = d(I);
    Ft(I, R), C[$t] = R;
  }
  function p(g) {
    const b = g.item[$t];
    if (!zn(b)) {
      if (nt(g.item), Ie(i)) {
        const M = [...S(i)];
        i.value = At(M, g.newDraggableIndex, b);
        return;
      }
      At(S(i), g.newDraggableIndex, b);
    }
  }
  function E(g) {
    const { from: b, item: M, oldIndex: F, oldDraggableIndex: C, pullMode: I, clone: R } = g;
    if (Mt(b, M, F), I === "clone") {
      nt(R);
      return;
    }
    if (Ie(i)) {
      const k = [...S(i)];
      i.value = It(k, C);
      return;
    }
    It(S(i), C);
  }
  function w(g) {
    if (f) {
      f(g);
      return;
    }
    const { from: b, item: M, oldIndex: F, oldDraggableIndex: C, newDraggableIndex: I } = g;
    if (nt(M), Mt(b, M, F), Ie(i)) {
      const R = [...S(i)];
      i.value = Ot(
        R,
        C,
        I
      );
      return;
    }
    Ot(S(i), C, I);
  }
  function Y(g) {
    const { newIndex: b, oldIndex: M, from: F, to: C } = g;
    let I = null;
    const R = b === M && F === C;
    try {
      if (R) {
        let k = null;
        r == null || r.some((q, oe) => {
          if (k && (r == null ? void 0 : r.length) !== C.childNodes.length)
            return F.insertBefore(k, q.nextSibling), !0;
          const tt = C.childNodes[oe];
          k = C == null ? void 0 : C.replaceChild(q, tt);
        });
      }
    } catch (k) {
      I = k;
    } finally {
      r = null;
    }
    Wt(() => {
      if (Ft(), I)
        throw I;
    });
  }
  const A = {
    onUpdate: w,
    onStart: y,
    onAdd: p,
    onRemove: E,
    onEnd: Y
  };
  function G(g) {
    const b = S(a);
    return g || (g = Wn(b) ? qn(b, o == null ? void 0 : o.$el) : b), g && !Zn(g) && (g = g.$el), g || Fn("Root element not found"), g;
  }
  function V() {
    var g;
    const b = (g = S(s)) != null ? g : {}, { immediate: M, clone: F } = b, C = Qt(b, ["immediate", "clone"]);
    return Nt(C, (I, R) => {
      Jn(I) && (C[I] = (k, ...q) => {
        const oe = Io();
        return Kn(k, oe), R(k, ...q);
      });
    }), Gn(
      i === null ? {} : A,
      C
    );
  }
  const K = (g) => {
    g = G(g), l && B.destroy(), l = new m(g, V());
  };
  Dn(
    () => s,
    () => {
      l && Nt(V(), (g, b) => {
        l == null || l.option(g, b);
      });
    },
    { deep: !0 }
  );
  const B = {
    option: (g, b) => l == null ? void 0 : l.option(g, b),
    destroy: () => {
      l == null || l.destroy(), l = null;
    },
    save: () => l == null ? void 0 : l.save(),
    toArray: () => l == null ? void 0 : l.toArray(),
    closest: (...g) => l == null ? void 0 : l.closest(...g)
  }, ne = () => B == null ? void 0 : B.option("disabled", !0), fe = () => B == null ? void 0 : B.option("disabled", !1);
  return Oo(() => {
    u && K();
  }), xo(B.destroy), Se({ start: K, pause: ne, resume: fe }, B);
}
const vt = [
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
], Mo = [
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
  ...vt.map((e) => `on${e.replace(/^\S/, (n) => n.toUpperCase())}`)
], No = wn({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Mo,
  emits: ["update:modelValue", ...vt],
  setup(e, { slots: n, emit: t, expose: o, attrs: r }) {
    const a = vt.reduce((d, f) => {
      const y = `on${f.replace(/^\S/, (p) => p.toUpperCase())}`;
      return d[y] = (...p) => t(f, ...p), d;
    }, {}), i = Q(() => {
      const d = _n(e), { modelValue: f } = d, y = Qt(d, ["modelValue"]), p = Object.entries(y).reduce((E, [w, Y]) => {
        const A = S(Y);
        return A !== void 0 && (E[w] = A), E;
      }, {});
      return Se(Se({}, a), Ln(Se(Se({}, r), p)));
    }), s = Q({
      get: () => e.modelValue,
      set: (d) => t("update:modelValue", d)
    }), l = Sn(), u = En(
      Ao(e.target || l, s, i)
    );
    return o(u), () => {
      var d;
      return ae(e.tag || "div", { ref: l }, (d = n == null ? void 0 : n.default) == null ? void 0 : d.call(n, u));
    };
  }
});
var Po = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Vo = "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z";
const St = Symbol.for("sortable-treeview"), ko = {
  transform: "rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))"
}, Lt = {
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
}, Bo = {
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
    return () => e.type === "fad" ? (console.warn("vue3-icon does not currently support Duotone FontAwesome icons"), ae("path")) : Array.isArray(e.path) ? ae(
      "g",
      {
        style: {
          fill: "currentcolor"
        }
      },
      e.path.map((n) => typeof n == "string" ? ae("path", { d: n }) : ae("path", { ...n }))
    ) : ae("path", {
      d: e.pathString,
      style: {
        fill: "currentcolor"
      }
    });
  }
}, zt = {
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
      return console.warn("vue3-icon requires either a 'path' or an 'fa-icon' property"), () => ae("div");
    const n = Q(() => {
      var u;
      return ((u = e.faIcon) == null ? void 0 : u.prefix) || e.type;
    }), t = Q(() => parseInt(e.rotate, 10)), o = Q(() => Lt[n.value] || Lt.default), r = Q(() => parseInt(e.size, 10) || o.value.size), a = Q(() => e.faIcon ? `0 0 ${e.faIcon.icon[0]} ${e.faIcon.icon[1]}` : !1), i = Q(() => a.value || e.viewbox || o.value.viewbox), s = Q(() => {
      if (e.noStyles !== !0)
        return {
          ...ko,
          "--sx": ["both", "horizontal"].includes(e.flip) ? "-1" : "1",
          "--sy": ["both", "vertical"].includes(e.flip) ? "-1" : "1",
          "--r": isNaN(t.value) ? t.value : t.value + "deg"
        };
    }), l = Q(() => {
      var u;
      return e.faIcon ? (u = e.faIcon) == null ? void 0 : u.icon[4] : e.type === "simple-icons" && typeof e.path == "object" ? e.path.path : e.path;
    });
    return () => ae(
      "svg",
      {
        xmlns: e.noNamespace !== !0 ? "http://www.w3.org/2000/svg" : void 0,
        style: s.value,
        class: ["vue3-icon"],
        width: e.noDimensions !== !0 ? r.value : void 0,
        height: e.noDimensions !== !0 ? r.value : void 0,
        viewBox: i.value
      },
      [ae(Bo, { path: e.path, type: n.value, pathString: l.value })]
    );
  }
}, Ro = { class: "evo-sortable-treeview__item" }, Ho = { class: "evo-sortable-treeview__item-content" }, jo = {
  ref: "item",
  class: "evo-sortable-treeview__actions"
}, Yo = { class: "evo-sortable-treeview__action-drag" }, Xo = { class: "evo-sortable-treeview__action-title" }, Fo = { class: "evo-sortable-treeview__columns" }, $o = /* @__PURE__ */ Object.assign({
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
    const n = e;
    qt(), useTemplateRef("item");
    const t = inject(St), o = computed(() => t.config.value.itemTitle), r = computed(() => t.config.value.itemValue), a = computed(() => t.config.value.itemChildren), i = computed(() => t.config.value.itemChildrenCount), s = ref([]), l = computed(() => {
      var p, E;
      return n.item[i.value] > 0 || (p = s.value) != null && p.length ? !0 : !!(Array.isArray(n.item[a.value]) && ((E = n.item[a.value]) == null ? void 0 : E.length) > 0);
    }), u = ref(!1);
    Rn(() => n.item[a.value], s, {
      direction: "ltr",
      transform: {
        ltr: (p) => p
      },
      immediate: !0
    });
    const d = computed(() => {
      var p;
      return l.value && ((p = s.value) == null ? void 0 : p.length) > 0;
    }), f = ref(!1), y = () => {
      if (f.value || d.value) return f.value = !f.value;
      u.value = !0, t.onLoadChildren(n.item).then((p) => {
        s.value = p.data.children ?? [], f.value = !f.value;
      }).finally(() => {
        u.value = !1;
      });
    };
    return (p, E) => {
      const w = Ut("VBtn");
      return ge(), bt("li", Ro, [
        re("div", Ho, [
          re("div", jo, [
            re("div", {
              class: xn(["evo-sortable-treeview__action-expand", {
                "is-expanded": S(f)
              }])
            }, [
              S(l) ? (ge(), Xe(w, {
                key: 0,
                icon: "",
                variant: "flat",
                size: "small",
                loading: S(u),
                onClick: y
              }, {
                default: be(() => [
                  ve(S(zt), {
                    class: "evo-sortable-treeview__expand-icon",
                    size: "24",
                    path: S(Po),
                    rotate: S(f) ? 90 : 0
                  }, null, 8, ["path", "rotate"])
                ]),
                _: 1
              }, 8, ["loading"])) : Gt("", !0)
            ], 2),
            re("div", Yo, [
              ve(w, {
                variant: "plain",
                size: "small",
                class: "drag-handle cursor-move"
              }, {
                default: be(() => [
                  ve(S(zt), { path: S(Vo) }, null, 8, ["path"])
                ]),
                _: 1
              })
            ]),
            re("div", Xo, [
              qe(p.$slots, "item.title", {
                item: n.item,
                title: n.item[S(o)]
              }, () => [
                On(In(n.item[S(o)]), 1)
              ])
            ])
          ], 512),
          E[1] || (E[1] = re("div", { class: "evo-sortable-treeview__spacer" }, null, -1)),
          re("div", Fo, [
            qe(p.$slots, "item.columns", {
              item: n.item
            })
          ])
        ]),
        ve(S(Zt), { slots: p.$slots }, {
          default: be(() => [
            ve(bn, {
              modelValue: S(s),
              "onUpdate:modelValue": E[0] || (E[0] = (Y) => Ie(s) ? s.value = Y : null),
              "is-expanded": S(f),
              "is-empty": !S(l),
              depth: n.depth + 1,
              "parent-id": n.item[S(r)]
            }, null, 8, ["modelValue", "is-expanded", "is-empty", "depth", "parent-id"])
          ]),
          _: 1
        }, 8, ["slots"])
      ]);
    };
  }
}), bn = /* @__PURE__ */ Object.assign({
  name: "EvoSortableTreeviewChildren"
}, {
  __name: "_SortableTreeviewChildren",
  props: /* @__PURE__ */ An({
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
    const n = Mn(e, "modelValue"), t = e, o = Nn(St), r = computed(() => o.config.value.itemValue), a = computed(() => ({
      class: "evo-sortable-treeview__drag-area",
      style: {
        minHeight: t.isEmpty ? "1px" : "",
        paddingLeft: t.parentId ? "1rem" : "0px"
      },
      tag: "ul",
      group: o.group,
      draggable: "li",
      handle: ".drag-handle",
      "onUpdate:modelValue": (i) => o.onSorted(i, t.parentId)
    }));
    return (i, s) => {
      const l = Ut("VExpandTransition");
      return ge(), Xe(l, null, {
        default: be(() => [
          t.isExpanded || t.isEmpty ? (ge(), Xe(S(No), Dt({
            key: 0,
            modelValue: n.value,
            "onUpdate:modelValue": s[0] || (s[0] = (u) => n.value = u)
          }, S(a)), {
            default: be(() => [
              (ge(!0), bt(Pn, null, Ct(n.value, (u) => (ge(), Xe($o, {
                key: `${u[S(r)]}_item`,
                item: u,
                depth: t.depth
              }, Vn({ _: 2 }, [
                Ct(i.$slots, (d, f) => ({
                  name: f,
                  fn: be((y) => [
                    qe(i.$slots, f, Dt({ ref_for: !0 }, y))
                  ])
                }))
              ]), 1032, ["item", "depth"]))), 128))
            ]),
            _: 3
          }, 16, ["modelValue"])) : Gt("", !0)
        ]),
        _: 3
      });
    };
  }
}), Lo = {
  ref: "treeview",
  class: "evo-sortable-treeview"
}, Jo = /* @__PURE__ */ Object.assign({
  name: "EvoSortableTreeview"
}, {
  __name: "SortableTreeview",
  props: {
    model: {
      type: [String, Object],
      required: !0
    }
  },
  emits: ["sorted"],
  setup(e, { emit: n }) {
    const t = qt(), o = n, r = e, a = computed(() => typeof r.model == "string" ? Hn().props[r.model] : r.model), i = computed(() => {
      var u;
      return ((u = a.value) == null ? void 0 : u.config) ?? {};
    }), s = computed(() => {
      var u;
      return ((u = a.value) == null ? void 0 : u.data) ?? a.value;
    }), l = ref(s.value);
    return watch(s, (u) => {
      l.value = u;
    }), kn(St, {
      group: t,
      config: i,
      treeProps: computed(() => jn(r, ["itemChildren", "itemChildrenCount", "itemTitle", "itemValue"])),
      onSorted: (u, d) => {
        const f = u.map((y) => y[i.value.itemValue]) ?? [];
        return o("sorted", {
          parentId: d,
          ids: f,
          $event: u
        }), Tt({
          url: i.value.updateSortOrderRoute,
          method: i.value.updateSortOrderMethod,
          data: {
            model: a.value.modelClass,
            parent_id: d,
            ids: f
          },
          withCredentials: !0,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          responseType: "json"
        });
      },
      onLoadChildren: (u) => Tt({
        url: i.value.loadChildrenRoute,
        method: i.value.loadChildrenMethod,
        params: {
          model: a.value.modelClass,
          model_id: u[i.value.itemValue]
        },
        withCredentials: !0
      })
    }), (u, d) => (ge(), bt("div", Lo, [
      re("header", {
        class: "evo-sortable-treeview__header",
        style: Bn({
          "--max-columns-width": `${u.maxColumnsWidth}px`
        })
      }, [
        d[1] || (d[1] = re("div", { class: "evo-sortable-treeview__spacer" }, null, -1)),
        qe(u.$slots, "header")
      ], 4),
      ve(S(Zt), { slots: u.$slots }, {
        default: be(() => [
          ve(bn, {
            modelValue: S(l),
            "onUpdate:modelValue": d[0] || (d[0] = (f) => Ie(l) ? l.value = f : null),
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
  Jo as EvoSortableTreeview
};
