import { defineComponent as En, computed as Q, toRefs as Dn, unref as S, ref as Cn, reactive as Tn, h as re, getCurrentInstance as _t, watch as xn, onMounted as On, nextTick as qt, onUnmounted as In, isRef as Ie, useId as Ut, inject as ht, resolveComponent as Gt, createElementBlock as Ae, openBlock as ae, createElementVNode as me, createVNode as ge, normalizeClass as An, createBlock as Fe, createCommentVNode as Zt, withCtx as be, renderSlot as Ue, createTextVNode as Mn, toDisplayString as Jt, mergeModels as Nn, useModel as Pn, mergeProps as Tt, Fragment as Kt, renderList as mt, createSlots as Vn, provide as kn, normalizeStyle as Rn } from "vue";
import { useElementSize as Bn, syncRef as Hn } from "@vueuse/core";
import { ForwardSlots as Qt } from "@evomark/vue-forward-slots";
import { usePage as jn } from "@inertiajs/vue3";
import { pick as Yn } from "lodash-es";
import xt from "axios";
import './index.css';var Xn = Object.defineProperty, Ge = Object.getOwnPropertySymbols, en = Object.prototype.hasOwnProperty, tn = Object.prototype.propertyIsEnumerable, Ot = (e, n, t) => n in e ? Xn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Se = (e, n) => {
  for (var t in n || (n = {}))
    en.call(n, t) && Ot(e, t, n[t]);
  if (Ge)
    for (var t of Ge(n))
      tn.call(n, t) && Ot(e, t, n[t]);
  return e;
}, nn = (e, n) => {
  var t = {};
  for (var o in e)
    en.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && Ge)
    for (var o of Ge(e))
      n.indexOf(o) < 0 && tn.call(e, o) && (t[o] = e[o]);
  return t;
};
const on = "[vue-draggable-plus]: ";
function Fn(e) {
  console.warn(on + e);
}
function $n(e) {
  console.error(on + e);
}
function It(e, n, t) {
  return t >= 0 && t < e.length && e.splice(t, 0, e.splice(n, 1)[0]), e;
}
function Ln(e) {
  return e.replace(/-(\w)/g, (n, t) => t ? t.toUpperCase() : "");
}
function zn(e) {
  return Object.keys(e).reduce((n, t) => (typeof e[t] < "u" && (n[Ln(t)] = e[t]), n), {});
}
function At(e, n) {
  return Array.isArray(e) && e.splice(n, 1), e;
}
function Mt(e, n, t) {
  return Array.isArray(e) && e.splice(n, 0, t), e;
}
function Wn(e) {
  return typeof e > "u";
}
function qn(e) {
  return typeof e == "string";
}
function Nt(e, n, t) {
  const o = e.children[t];
  e.insertBefore(n, o);
}
function rt(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Un(e, n = document) {
  var t;
  let o = null;
  return typeof (n == null ? void 0 : n.querySelector) == "function" ? o = (t = n == null ? void 0 : n.querySelector) == null ? void 0 : t.call(n, e) : o = document.querySelector(e), o || Fn(`Element not found: ${e}`), o;
}
function Gn(e, n, t = null) {
  return function(...o) {
    return e.apply(t, o), n.apply(t, o);
  };
}
function Zn(e, n) {
  const t = Se({}, e);
  return Object.keys(n).forEach((o) => {
    t[o] ? t[o] = Gn(e[o], n[o]) : t[o] = n[o];
  }), t;
}
function Jn(e) {
  return e instanceof HTMLElement;
}
function Pt(e, n) {
  Object.keys(e).forEach((t) => {
    n(t, e[t]);
  });
}
function Kn(e) {
  return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
  (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
const Qn = Object.assign;
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Vt(e, n) {
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
    n % 2 ? Vt(Object(t), !0).forEach(function(o) {
      eo(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vt(Object(t)).forEach(function(o) {
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
function eo(e, n, t) {
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
function to(e, n) {
  if (e == null)
    return {};
  var t = {}, o = Object.keys(e), r, a;
  for (a = 0; a < o.length; a++)
    r = o[a], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
function no(e, n) {
  if (e == null)
    return {};
  var t = to(e, n), o, r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      o = a[r], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]);
  }
  return t;
}
var oo = "1.15.2";
function ie(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var se = ie(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Re = ie(/Edge/i), kt = ie(/firefox/i), Me = ie(/safari/i) && !ie(/chrome/i) && !ie(/android/i), rn = ie(/iP(ad|od|hone)/i), an = ie(/chrome/i) && ie(/android/i), ln = {
  capture: !1,
  passive: !1
};
function D(e, n, t) {
  e.addEventListener(n, t, !se && ln);
}
function E(e, n, t) {
  e.removeEventListener(n, t, !se && ln);
}
function Ze(e, n) {
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
function ro(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function K(e, n, t, o) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && Ze(e, n) : Ze(e, n)) || o && e === t)
        return e;
      if (e === t)
        break;
    } while (e = ro(e));
  }
  return null;
}
var Rt = /\s+/g;
function W(e, n, t) {
  if (e && n)
    if (e.classList)
      e.classList[t ? "add" : "remove"](n);
    else {
      var o = (" " + e.className + " ").replace(Rt, " ").replace(" " + n + " ", " ");
      e.className = (o + (t ? " " + n : "")).replace(Rt, " ");
    }
}
function m(e, n, t) {
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
      var o = m(e, "transform");
      o && o !== "none" && (t = o + " " + t);
    } while (!n && (e = e.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(t);
}
function sn(e, n, t) {
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
function B(e, n, t, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var a, i, s, l, u, d, h;
    if (e !== window && e.parentNode && e !== ee() ? (a = e.getBoundingClientRect(), i = a.top, s = a.left, l = a.bottom, u = a.right, d = a.height, h = a.width) : (i = 0, s = 0, l = window.innerHeight, u = window.innerWidth, d = window.innerHeight, h = window.innerWidth), (n || t) && e !== window && (r = r || e.parentNode, !se))
      do
        if (r && r.getBoundingClientRect && (m(r, "transform") !== "none" || t && m(r, "position") !== "static")) {
          var f = r.getBoundingClientRect();
          i -= f.top + parseInt(m(r, "border-top-width")), s -= f.left + parseInt(m(r, "border-left-width")), l = i + a.height, u = s + a.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var p = De(r || e), b = p && p.a, w = p && p.d;
      p && (i /= w, s /= b, h /= b, d /= w, l = i + d, u = s + h);
    }
    return {
      top: i,
      left: s,
      bottom: l,
      right: u,
      width: h,
      height: d
    };
  }
}
function Bt(e, n, t) {
  for (var o = de(e, !0), r = B(e)[n]; o; ) {
    var a = B(o)[t], i = void 0;
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
    if (i[a].style.display !== "none" && i[a] !== v.ghost && (o || i[a] !== v.dragged) && K(i[a], t.draggable, e, !1)) {
      if (r === n)
        return i[a];
      r++;
    }
    a++;
  }
  return null;
}
function St(e, n) {
  for (var t = e.lastElementChild; t && (t === v.ghost || m(t, "display") === "none" || n && !Ze(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function Z(e, n) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== v.clone && (!n || Ze(e, n)) && t++;
  return t;
}
function Ht(e) {
  var n = 0, t = 0, o = ee();
  if (e)
    do {
      var r = De(e), a = r.a, i = r.d;
      n += e.scrollLeft * a, t += e.scrollTop * i;
    } while (e !== o && (e = e.parentNode));
  return [n, t];
}
function ao(e, n) {
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
      var r = m(t);
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
function io(e, n) {
  if (e && n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function at(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Ne;
function un(e, n) {
  return function() {
    if (!Ne) {
      var t = arguments, o = this;
      t.length === 1 ? e.call(o, t[0]) : e.apply(o, t), Ne = setTimeout(function() {
        Ne = void 0;
      }, n);
    }
  };
}
function lo() {
  clearTimeout(Ne), Ne = void 0;
}
function cn(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function dn(e) {
  var n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function fn(e, n, t) {
  var o = {};
  return Array.from(e.children).forEach(function(r) {
    var a, i, s, l;
    if (!(!K(r, n.draggable, e, !1) || r.animated || r === t)) {
      var u = B(r);
      o.left = Math.min((a = o.left) !== null && a !== void 0 ? a : 1 / 0, u.left), o.top = Math.min((i = o.top) !== null && i !== void 0 ? i : 1 / 0, u.top), o.right = Math.max((s = o.right) !== null && s !== void 0 ? s : -1 / 0, u.right), o.bottom = Math.max((l = o.bottom) !== null && l !== void 0 ? l : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var U = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function so() {
  var e = [], n;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var t = [].slice.call(this.el.children);
        t.forEach(function(o) {
          if (!(m(o, "display") === "none" || o === v.ghost)) {
            e.push({
              target: o,
              rect: B(o)
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
      e.splice(ao(e, {
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
        var s = 0, l = i.target, u = l.fromRect, d = B(l), h = l.prevFromRect, f = l.prevToRect, p = i.rect, b = De(l, !0);
        b && (d.top -= b.f, d.left -= b.e), l.toRect = d, l.thisAnimationDuration && at(h, d) && !at(u, d) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - d.top) / (p.left - d.left) === (u.top - d.top) / (u.left - d.left) && (s = co(p, h, f, o.options)), at(d, u) || (l.prevFromRect = u, l.prevToRect = d, s || (s = o.options.animation), o.animate(l, p, d, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(n), r ? n = setTimeout(function() {
        typeof t == "function" && t();
      }, a) : typeof t == "function" && t(), e = [];
    },
    animate: function(t, o, r, a) {
      if (a) {
        m(t, "transition", ""), m(t, "transform", "");
        var i = De(this.el), s = i && i.a, l = i && i.d, u = (o.left - r.left) / (s || 1), d = (o.top - r.top) / (l || 1);
        t.animatingX = !!u, t.animatingY = !!d, m(t, "transform", "translate3d(" + u + "px," + d + "px,0)"), this.forRepaintDummy = uo(t), m(t, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), m(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          m(t, "transition", ""), m(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, a);
      }
    }
  };
}
function uo(e) {
  return e.offsetWidth;
}
function co(e, n, t, o) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * o.animation;
}
var ye = [], it = {
  initializeByDefault: !0
}, Be = {
  mount: function(e) {
    for (var n in it)
      it.hasOwnProperty(n) && !(n in e) && (e[n] = it[n]);
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
function fo(e) {
  var n = e.sortable, t = e.rootEl, o = e.name, r = e.targetEl, a = e.cloneEl, i = e.toEl, s = e.fromEl, l = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, h = e.newDraggableIndex, f = e.originalEvent, p = e.putSortable, b = e.extraEventProperties;
  if (n = n || t && t[U], !!n) {
    var w, A = n.options, M = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !se && !Re ? w = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (w = document.createEvent("Event"), w.initEvent(o, !0, !0)), w.to = i || t, w.from = s || t, w.item = r || t, w.clone = a, w.oldIndex = l, w.newIndex = u, w.oldDraggableIndex = d, w.newDraggableIndex = h, w.originalEvent = f, w.pullMode = p ? p.lastPutMode : void 0;
    var x = te(te({}, b), Be.getEventProperties(o, n));
    for (var C in x)
      w[C] = x[C];
    t && t.dispatchEvent(w), A[M] && A[M].call(n, w);
  }
}
var po = ["evt"], z = function(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = t.evt, r = no(t, po);
  Be.pluginEvent.bind(v)(e, n, te({
    dragEl: c,
    parentEl: P,
    ghostEl: g,
    rootEl: O,
    nextEl: ve,
    lastDownEl: Le,
    cloneEl: I,
    cloneHidden: ce,
    dragStarted: Te,
    putSortable: Y,
    activeSortable: v.active,
    originalEvent: o,
    oldIndex: Ee,
    oldDraggableIndex: Pe,
    newIndex: q,
    newDraggableIndex: ue,
    hideGhostForTarget: vn,
    unhideGhostForTarget: gn,
    cloneNowHidden: function() {
      ce = !0;
    },
    cloneNowShown: function() {
      ce = !1;
    },
    dispatchSortableEvent: function(a) {
      $({
        sortable: n,
        name: a,
        originalEvent: o
      });
    }
  }, r));
};
function $(e) {
  fo(te({
    putSortable: Y,
    cloneEl: I,
    targetEl: c,
    rootEl: O,
    oldIndex: Ee,
    oldDraggableIndex: Pe,
    newIndex: q,
    newDraggableIndex: ue
  }, e));
}
var c, P, g, O, ve, Le, I, ce, Ee, q, Pe, ue, He, Y, _e = !1, Je = !1, Ke = [], pe, J, lt, st, jt, Yt, Te, we, Ve, ke = !1, je = !1, ze, X, ut = [], vt = !1, Qe = [], nt = typeof document < "u", Ye = rn, Xt = Re || se ? "cssFloat" : "float", ho = nt && !an && !rn && "draggable" in document.createElement("div"), pn = function() {
  if (nt) {
    if (se)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), hn = function(e, n) {
  var t = m(e), o = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), r = Ce(e, 0, n), a = Ce(e, 1, n), i = r && m(r), s = a && m(a), l = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + B(r).width, u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + B(a).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && i.float && i.float !== "none") {
    var d = i.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
  }
  return r && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || l >= o && t[Xt] === "none" || a && t[Xt] === "none" && l + u > o) ? "vertical" : "horizontal";
}, mo = function(e, n, t) {
  var o = t ? e.left : e.top, r = t ? e.right : e.bottom, a = t ? e.width : e.height, i = t ? n.left : n.top, s = t ? n.right : n.bottom, l = t ? n.width : n.height;
  return o === i || r === s || o + a / 2 === i + l / 2;
}, vo = function(e, n) {
  var t;
  return Ke.some(function(o) {
    var r = o[U].options.emptyInsertThreshold;
    if (!(!r || St(o))) {
      var a = B(o), i = e >= a.left - r && e <= a.right + r, s = n >= a.top - r && n <= a.bottom + r;
      if (i && s)
        return t = o;
    }
  }), t;
}, mn = function(e) {
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
      var h = (a ? i : s).options.group.name;
      return r === !0 || typeof r == "string" && r === h || r.join && r.indexOf(h) > -1;
    };
  }
  var t = {}, o = e.group;
  (!o || $e(o) != "object") && (o = {
    name: o
  }), t.name = o.name, t.checkPull = n(o.pull, !0), t.checkPut = n(o.put), t.revertClone = o.revertClone, e.group = t;
}, vn = function() {
  !pn && g && m(g, "display", "none");
}, gn = function() {
  !pn && g && m(g, "display", "");
};
nt && !an && document.addEventListener("click", function(e) {
  if (Je)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Je = !1, !1;
}, !0);
var he = function(e) {
  if (c) {
    e = e.touches ? e.touches[0] : e;
    var n = vo(e.clientX, e.clientY);
    if (n) {
      var t = {};
      for (var o in e)
        e.hasOwnProperty(o) && (t[o] = e[o]);
      t.target = t.rootEl = n, t.preventDefault = void 0, t.stopPropagation = void 0, n[U]._onDragOver(t);
    }
  }
}, go = function(e) {
  c && c.parentNode[U]._isOutsideThisEl(e.target);
};
function v(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = le({}, n), e[U] = this;
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
      return hn(e, this.options);
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
    supportPointer: v.supportPointer !== !1 && "PointerEvent" in window && !Me,
    emptyInsertThreshold: 5
  };
  Be.initializePlugins(this, e, t);
  for (var o in t)
    !(o in n) && (n[o] = t[o]);
  mn(n);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : ho, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? D(e, "pointerdown", this._onTapStart) : (D(e, "mousedown", this._onTapStart), D(e, "touchstart", this._onTapStart)), this.nativeDraggable && (D(e, "dragover", this), D(e, "dragenter", this)), Ke.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), le(this, so());
}
v.prototype = /** @lends Sortable.prototype */
{
  constructor: v,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (we = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, c) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, t = this.el, o = this.options, r = o.preventOnFilter, a = e.type, i = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (i || e).target, l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, u = o.filter;
      if (Co(t), !c && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || o.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Me && s && s.tagName.toUpperCase() === "SELECT") && (s = K(s, o.draggable, t, !1), !(s && s.animated) && Le !== s)) {
        if (Ee = Z(s), Pe = Z(s, o.draggable), typeof u == "function") {
          if (u.call(this, e, s, this)) {
            $({
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
        } else if (u && (u = u.split(",").some(function(d) {
          if (d = K(l, d.trim(), t, !1), d)
            return $({
              sortable: n,
              rootEl: d,
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
        o.handle && !K(l, o.handle, t, !1) || this._prepareDragStart(e, i, s);
      }
    }
  },
  _prepareDragStart: function(e, n, t) {
    var o = this, r = o.el, a = o.options, i = r.ownerDocument, s;
    if (t && !c && t.parentNode === r) {
      var l = B(t);
      if (O = r, c = t, P = c.parentNode, ve = c.nextSibling, Le = t, He = a.group, v.dragged = c, pe = {
        target: c,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, jt = pe.clientX - l.left, Yt = pe.clientY - l.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, c.style["will-change"] = "all", s = function() {
        if (z("delayEnded", o, {
          evt: e
        }), v.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !kt && o.nativeDraggable && (c.draggable = !0), o._triggerDragStart(e, n), $({
          sortable: o,
          name: "choose",
          originalEvent: e
        }), W(c, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(u) {
        sn(c, u.trim(), ct);
      }), D(i, "dragover", he), D(i, "mousemove", he), D(i, "touchmove", he), D(i, "mouseup", o._onDrop), D(i, "touchend", o._onDrop), D(i, "touchcancel", o._onDrop), kt && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), z("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Re || se))) {
        if (v.eventCanceled) {
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
    c && ct(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    E(e, "mouseup", this._disableDelayedDrag), E(e, "touchend", this._disableDelayedDrag), E(e, "touchcancel", this._disableDelayedDrag), E(e, "mousemove", this._delayedDragTouchMoveHandler), E(e, "touchmove", this._delayedDragTouchMoveHandler), E(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? D(document, "pointermove", this._onTouchMove) : n ? D(document, "touchmove", this._onTouchMove) : D(document, "mousemove", this._onTouchMove) : (D(c, "dragend", this), D(O, "dragstart", this._onDragStart));
    try {
      document.selection ? We(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (_e = !1, O && c) {
      z("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && D(document, "dragover", go);
      var t = this.options;
      !e && W(c, t.dragClass, !1), W(c, t.ghostClass, !0), v.active = this, e && this._appendGhost(), $({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (J) {
      this._lastX = J.clientX, this._lastY = J.clientY, vn();
      for (var e = document.elementFromPoint(J.clientX, J.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(J.clientX, J.clientY), e !== n); )
        n = e;
      if (c.parentNode[U]._isOutsideThisEl(e), n)
        do {
          if (n[U]) {
            var t = void 0;
            if (t = n[U]._onDragOver({
              clientX: J.clientX,
              clientY: J.clientY,
              target: e,
              rootEl: n
            }), t && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      gn();
    }
  },
  _onTouchMove: function(e) {
    if (pe) {
      var n = this.options, t = n.fallbackTolerance, o = n.fallbackOffset, r = e.touches ? e.touches[0] : e, a = g && De(g, !0), i = g && a && a.a, s = g && a && a.d, l = Ye && X && Ht(X), u = (r.clientX - pe.clientX + o.x) / (i || 1) + (l ? l[0] - ut[0] : 0) / (i || 1), d = (r.clientY - pe.clientY + o.y) / (s || 1) + (l ? l[1] - ut[1] : 0) / (s || 1);
      if (!v.active && !_e) {
        if (t && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < t)
          return;
        this._onDragStart(e, !0);
      }
      if (g) {
        a ? (a.e += u - (lt || 0), a.f += d - (st || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f: d
        };
        var h = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        m(g, "webkitTransform", h), m(g, "mozTransform", h), m(g, "msTransform", h), m(g, "transform", h), lt = u, st = d, J = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!g) {
      var e = this.options.fallbackOnBody ? document.body : O, n = B(c, !0, Ye, !0, e), t = this.options;
      if (Ye) {
        for (X = e; m(X, "position") === "static" && m(X, "transform") === "none" && X !== document; )
          X = X.parentNode;
        X !== document.body && X !== document.documentElement ? (X === document && (X = ee()), n.top += X.scrollTop, n.left += X.scrollLeft) : X = ee(), ut = Ht(X);
      }
      g = c.cloneNode(!0), W(g, t.ghostClass, !1), W(g, t.fallbackClass, !0), W(g, t.dragClass, !0), m(g, "transition", ""), m(g, "transform", ""), m(g, "box-sizing", "border-box"), m(g, "margin", 0), m(g, "top", n.top), m(g, "left", n.left), m(g, "width", n.width), m(g, "height", n.height), m(g, "opacity", "0.8"), m(g, "position", Ye ? "absolute" : "fixed"), m(g, "zIndex", "100000"), m(g, "pointerEvents", "none"), v.ghost = g, e.appendChild(g), m(g, "transform-origin", jt / parseInt(g.style.width) * 100 + "% " + Yt / parseInt(g.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var t = this, o = e.dataTransfer, r = t.options;
    if (z("dragStart", this, {
      evt: e
    }), v.eventCanceled) {
      this._onDrop();
      return;
    }
    z("setupClone", this), v.eventCanceled || (I = dn(c), I.removeAttribute("id"), I.draggable = !1, I.style["will-change"] = "", this._hideClone(), W(I, this.options.chosenClass, !1), v.clone = I), t.cloneId = We(function() {
      z("clone", t), !v.eventCanceled && (t.options.removeCloneOnHide || O.insertBefore(I, c), t._hideClone(), $({
        sortable: t,
        name: "clone"
      }));
    }), !n && W(c, r.dragClass, !0), n ? (Je = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (E(document, "mouseup", t._onDrop), E(document, "touchend", t._onDrop), E(document, "touchcancel", t._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(t, o, c)), D(document, "drop", t), m(c, "transform", "translateZ(0)")), _e = !0, t._dragStartId = We(t._dragStarted.bind(t, n, e)), D(document, "selectstart", t), Te = !0, Me && m(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, t = e.target, o, r, a, i = this.options, s = i.group, l = v.active, u = He === s, d = i.sort, h = Y || l, f, p = this, b = !1;
    if (vt)
      return;
    function w(oe, ot) {
      z(oe, p, te({
        evt: e,
        isOwner: u,
        axis: f ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: d,
        fromSortable: h,
        target: t,
        completed: M,
        onMove: function(Ct, Sn) {
          return Xe(O, n, c, o, Ct, B(Ct), e, Sn);
        },
        changed: x
      }, ot));
    }
    function A() {
      w("dragOverAnimationCapture"), p.captureAnimationState(), p !== h && h.captureAnimationState();
    }
    function M(oe) {
      return w("dragOverCompleted", {
        insertion: oe
      }), oe && (u ? l._hideClone() : l._showClone(p), p !== h && (W(c, Y ? Y.options.ghostClass : l.options.ghostClass, !1), W(c, i.ghostClass, !0)), Y !== p && p !== v.active ? Y = p : p === v.active && Y && (Y = null), h === p && (p._ignoreWhileAnimating = t), p.animateAll(function() {
        w("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (t === c && !c.animated || t === n && !t.animated) && (we = null), !i.dragoverBubble && !e.rootEl && t !== document && (c.parentNode[U]._isOutsideThisEl(e.target), !oe && he(e)), !i.dragoverBubble && e.stopPropagation && e.stopPropagation(), b = !0;
    }
    function x() {
      q = Z(c), ue = Z(c, i.draggable), $({
        sortable: p,
        name: "change",
        toEl: n,
        newIndex: q,
        newDraggableIndex: ue,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), t = K(t, i.draggable, n, !0), w("dragOver"), v.eventCanceled)
      return b;
    if (c.contains(e.target) || t.animated && t.animatingX && t.animatingY || p._ignoreWhileAnimating === t)
      return M(!1);
    if (Je = !1, l && !i.disabled && (u ? d || (a = P !== O) : Y === this || (this.lastPutMode = He.checkPull(this, l, c, e)) && s.checkPut(this, l, c, e))) {
      if (f = this._getDirection(e, t) === "vertical", o = B(c), w("dragOverValid"), v.eventCanceled)
        return b;
      if (a)
        return P = O, A(), this._hideClone(), w("revert"), v.eventCanceled || (ve ? O.insertBefore(c, ve) : O.appendChild(c)), M(!0);
      var C = St(n, i.draggable);
      if (!C || _o(e, f, this) && !C.animated) {
        if (C === c)
          return M(!1);
        if (C && n === e.target && (t = C), t && (r = B(t)), Xe(O, n, c, o, t, r, e, !!t) !== !1)
          return A(), C && C.nextSibling ? n.insertBefore(c, C.nextSibling) : n.appendChild(c), P = n, x(), M(!0);
      } else if (C && wo(e, f, this)) {
        var F = Ce(n, 0, i, !0);
        if (F === c)
          return M(!1);
        if (t = F, r = B(t), Xe(O, n, c, o, t, r, e, !1) !== !1)
          return A(), n.insertBefore(c, F), P = n, x(), M(!0);
      } else if (t.parentNode === n) {
        r = B(t);
        var N = 0, ne, fe = c.parentNode !== n, y = !mo(c.animated && c.toRect || o, t.animated && t.toRect || r, f), _ = f ? "top" : "left", k = Bt(t, "top", "top") || Bt(c, "top", "top"), L = k ? k.scrollTop : void 0;
        we !== t && (ne = r[_], ke = !1, je = !y && i.invertSwap || fe), N = So(e, t, r, f, y ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, je, we === t);
        var T;
        if (N !== 0) {
          var V = Z(c);
          do
            V -= N, T = P.children[V];
          while (T && (m(T, "display") === "none" || T === g));
        }
        if (N === 0 || T === t)
          return M(!1);
        we = t, Ve = N;
        var j = t.nextElementSibling, H = !1;
        H = N === 1;
        var G = Xe(O, n, c, o, t, r, e, H);
        if (G !== !1)
          return (G === 1 || G === -1) && (H = G === 1), vt = !0, setTimeout(yo, 30), A(), H && !j ? n.appendChild(c) : t.parentNode.insertBefore(c, H ? j : t), k && cn(k, 0, L - k.scrollTop), P = c.parentNode, ne !== void 0 && !je && (ze = Math.abs(ne - B(t)[_])), x(), M(!0);
      }
      if (n.contains(c))
        return M(!1);
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
    if (q = Z(c), ue = Z(c, t.draggable), z("drop", this, {
      evt: e
    }), P = c && c.parentNode, q = Z(c), ue = Z(c, t.draggable), v.eventCanceled) {
      this._nulling();
      return;
    }
    _e = !1, je = !1, ke = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), gt(this.cloneId), gt(this._dragStartId), this.nativeDraggable && (E(document, "drop", this), E(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Me && m(document.body, "user-select", ""), m(c, "transform", ""), e && (Te && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()), g && g.parentNode && g.parentNode.removeChild(g), (O === P || Y && Y.lastPutMode !== "clone") && I && I.parentNode && I.parentNode.removeChild(I), c && (this.nativeDraggable && E(c, "dragend", this), ct(c), c.style["will-change"] = "", Te && !_e && W(c, Y ? Y.options.ghostClass : this.options.ghostClass, !1), W(c, this.options.chosenClass, !1), $({
      sortable: this,
      name: "unchoose",
      toEl: P,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), O !== P ? (q >= 0 && ($({
      rootEl: P,
      name: "add",
      toEl: P,
      fromEl: O,
      originalEvent: e
    }), $({
      sortable: this,
      name: "remove",
      toEl: P,
      originalEvent: e
    }), $({
      rootEl: P,
      name: "sort",
      toEl: P,
      fromEl: O,
      originalEvent: e
    }), $({
      sortable: this,
      name: "sort",
      toEl: P,
      originalEvent: e
    })), Y && Y.save()) : q !== Ee && q >= 0 && ($({
      sortable: this,
      name: "update",
      toEl: P,
      originalEvent: e
    }), $({
      sortable: this,
      name: "sort",
      toEl: P,
      originalEvent: e
    })), v.active && ((q == null || q === -1) && (q = Ee, ue = Pe), $({
      sortable: this,
      name: "end",
      toEl: P,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    z("nulling", this), O = c = P = g = ve = I = Le = ce = pe = J = Te = q = ue = Ee = Pe = we = Ve = Y = He = v.dragged = v.ghost = v.clone = v.active = null, Qe.forEach(function(e) {
      e.checked = !0;
    }), Qe.length = lt = st = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(e), bo(e));
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
      n = t[o], K(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || Do(n));
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
      K(i, this.options.draggable, o, !1) && (t[r] = i);
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
    return K(e, n || this.options.draggable, this.el, !1);
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
    typeof o < "u" ? t[e] = o : t[e] = n, e === "group" && mn(t);
  },
  /**
   * Destroy
   */
  destroy: function() {
    z("destroy", this);
    var e = this.el;
    e[U] = null, E(e, "mousedown", this._onTapStart), E(e, "touchstart", this._onTapStart), E(e, "pointerdown", this._onTapStart), this.nativeDraggable && (E(e, "dragover", this), E(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ke.splice(Ke.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!ce) {
      if (z("hideClone", this), v.eventCanceled)
        return;
      m(I, "display", "none"), this.options.removeCloneOnHide && I.parentNode && I.parentNode.removeChild(I), ce = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ce) {
      if (z("showClone", this), v.eventCanceled)
        return;
      c.parentNode == O && !this.options.group.revertClone ? O.insertBefore(I, c) : ve ? O.insertBefore(I, ve) : O.appendChild(I), this.options.group.revertClone && this.animate(c, I), m(I, "display", ""), ce = !1;
    }
  }
};
function bo(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Xe(e, n, t, o, r, a, i, s) {
  var l, u = e[U], d = u.options.onMove, h;
  return window.CustomEvent && !se && !Re ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = n, l.from = e, l.dragged = t, l.draggedRect = o, l.related = r || n, l.relatedRect = a || B(n), l.willInsertAfter = s, l.originalEvent = i, e.dispatchEvent(l), d && (h = d.call(u, l, i)), h;
}
function ct(e) {
  e.draggable = !1;
}
function yo() {
  vt = !1;
}
function wo(e, n, t) {
  var o = B(Ce(t.el, 0, t.options, !0)), r = fn(t.el, t.options, g), a = 10;
  return n ? e.clientX < r.left - a || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - a || e.clientY < o.bottom && e.clientX < o.left;
}
function _o(e, n, t) {
  var o = B(St(t.el, t.options.draggable)), r = fn(t.el, t.options, g), a = 10;
  return n ? e.clientX > r.right + a || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + a || e.clientX > o.right && e.clientY > o.top;
}
function So(e, n, t, o, r, a, i, s) {
  var l = o ? e.clientY : e.clientX, u = o ? t.height : t.width, d = o ? t.top : t.left, h = o ? t.bottom : t.right, f = !1;
  if (!i) {
    if (s && ze < u * r) {
      if (!ke && (Ve === 1 ? l > d + u * a / 2 : l < h - u * a / 2) && (ke = !0), ke)
        f = !0;
      else if (Ve === 1 ? l < d + ze : l > h - ze)
        return -Ve;
    } else if (l > d + u * (1 - r) / 2 && l < h - u * (1 - r) / 2)
      return Eo(n);
  }
  return f = f || i, f && (l < d + u * a / 2 || l > h - u * a / 2) ? l > d + u / 2 ? 1 : -1 : 0;
}
function Eo(e) {
  return Z(c) < Z(e) ? 1 : -1;
}
function Do(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, o = 0; t--; )
    o += n.charCodeAt(t);
  return o.toString(36);
}
function Co(e) {
  Qe.length = 0;
  for (var n = e.getElementsByTagName("input"), t = n.length; t--; ) {
    var o = n[t];
    o.checked && Qe.push(o);
  }
}
function We(e) {
  return setTimeout(e, 0);
}
function gt(e) {
  return clearTimeout(e);
}
nt && D(document, "touchmove", function(e) {
  (v.active || _e) && e.cancelable && e.preventDefault();
});
v.utils = {
  on: D,
  off: E,
  css: m,
  find: sn,
  is: function(e, n) {
    return !!K(e, n, e, !1);
  },
  extend: io,
  throttle: un,
  closest: K,
  toggleClass: W,
  clone: dn,
  index: Z,
  nextTick: We,
  cancelNextTick: gt,
  detectDirection: hn,
  getChild: Ce
};
v.get = function(e) {
  return e[U];
};
v.mount = function() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  n[0].constructor === Array && (n = n[0]), n.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (v.utils = te(te({}, v.utils), o.utils)), Be.mount(o);
  });
};
v.create = function(e, n) {
  return new v(e, n);
};
v.version = oo;
var R = [], xe, bt, yt = !1, dt, ft, et, Oe;
function To() {
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
      this.sortable.nativeDraggable ? E(document, "dragover", this._handleAutoScroll) : (E(document, "pointermove", this._handleFallbackAutoScroll), E(document, "touchmove", this._handleFallbackAutoScroll), E(document, "mousemove", this._handleFallbackAutoScroll)), Ft(), qe(), lo();
    },
    nulling: function() {
      et = bt = xe = yt = Oe = dt = ft = null, R.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, t) {
      var o = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, i = document.elementFromPoint(r, a);
      if (et = n, t || this.options.forceAutoScrollFallback || Re || se || Me) {
        pt(n, this.options, i, t);
        var s = de(i, !0);
        yt && (!Oe || r !== dt || a !== ft) && (Oe && Ft(), Oe = setInterval(function() {
          var l = de(document.elementFromPoint(r, a), !0);
          l !== s && (s = l, qe()), pt(n, o.options, l, t);
        }, 10), dt = r, ft = a);
      } else {
        if (!this.options.bubbleScroll || de(i, !0) === ee()) {
          qe();
          return;
        }
        pt(n, this.options, de(i, !1), !1);
      }
    }
  }, le(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function qe() {
  R.forEach(function(e) {
    clearInterval(e.pid);
  }), R = [];
}
function Ft() {
  clearInterval(Oe);
}
var pt = un(function(e, n, t, o) {
  if (n.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, i = n.scrollSensitivity, s = n.scrollSpeed, l = ee(), u = !1, d;
    bt !== t && (bt = t, qe(), xe = n.scroll, d = n.scrollFn, xe === !0 && (xe = de(t, !0)));
    var h = 0, f = xe;
    do {
      var p = f, b = B(p), w = b.top, A = b.bottom, M = b.left, x = b.right, C = b.width, F = b.height, N = void 0, ne = void 0, fe = p.scrollWidth, y = p.scrollHeight, _ = m(p), k = p.scrollLeft, L = p.scrollTop;
      p === l ? (N = C < fe && (_.overflowX === "auto" || _.overflowX === "scroll" || _.overflowX === "visible"), ne = F < y && (_.overflowY === "auto" || _.overflowY === "scroll" || _.overflowY === "visible")) : (N = C < fe && (_.overflowX === "auto" || _.overflowX === "scroll"), ne = F < y && (_.overflowY === "auto" || _.overflowY === "scroll"));
      var T = N && (Math.abs(x - r) <= i && k + C < fe) - (Math.abs(M - r) <= i && !!k), V = ne && (Math.abs(A - a) <= i && L + F < y) - (Math.abs(w - a) <= i && !!L);
      if (!R[h])
        for (var j = 0; j <= h; j++)
          R[j] || (R[j] = {});
      (R[h].vx != T || R[h].vy != V || R[h].el !== p) && (R[h].el = p, R[h].vx = T, R[h].vy = V, clearInterval(R[h].pid), (T != 0 || V != 0) && (u = !0, R[h].pid = setInterval((function() {
        o && this.layer === 0 && v.active._onTouchMove(et);
        var H = R[this.layer].vy ? R[this.layer].vy * s : 0, G = R[this.layer].vx ? R[this.layer].vx * s : 0;
        typeof d == "function" && d.call(v.dragged.parentNode[U], G, H, e, et, R[this.layer].el) !== "continue" || cn(R[this.layer].el, G, H);
      }).bind({
        layer: h
      }), 24))), h++;
    } while (n.bubbleScroll && f !== l && (f = de(f, !1)));
    yt = u;
  }
}, 30), bn = function(e) {
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
function Et() {
}
Et.prototype = {
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
  drop: bn
};
le(Et, {
  pluginName: "revertOnSpill"
});
function Dt() {
}
Dt.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, t = e.putSortable, o = t || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: bn
};
le(Dt, {
  pluginName: "removeOnSpill"
});
v.mount(new To());
v.mount(Dt, Et);
function xo(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function Oo(e) {
  _t() && In(e);
}
function Io(e) {
  _t() ? On(e) : qt(e);
}
let yn = null, wn = null;
function $t(e = null, n = null) {
  yn = e, wn = n;
}
function Ao() {
  return {
    data: yn,
    clonedData: wn
  };
}
const Lt = Symbol("cloneElement");
function Mo(...e) {
  var n, t;
  const o = (n = _t()) == null ? void 0 : n.proxy;
  let r = null;
  const a = e[0];
  let [, i, s] = e;
  Array.isArray(S(i)) || (s = i, i = null);
  let l = null;
  const {
    immediate: u = !0,
    clone: d = xo,
    customUpdate: h
  } = (t = S(s)) != null ? t : {};
  function f(y) {
    var _;
    const { from: k, oldIndex: L, item: T } = y;
    r = Array.from(k.childNodes);
    const V = S((_ = S(i)) == null ? void 0 : _[L]), j = d(V);
    $t(V, j), T[Lt] = j;
  }
  function p(y) {
    const _ = y.item[Lt];
    if (!Wn(_)) {
      if (rt(y.item), Ie(i)) {
        const k = [...S(i)];
        i.value = Mt(k, y.newDraggableIndex, _);
        return;
      }
      Mt(S(i), y.newDraggableIndex, _);
    }
  }
  function b(y) {
    const { from: _, item: k, oldIndex: L, oldDraggableIndex: T, pullMode: V, clone: j } = y;
    if (Nt(_, k, L), V === "clone") {
      rt(j);
      return;
    }
    if (Ie(i)) {
      const H = [...S(i)];
      i.value = At(H, T);
      return;
    }
    At(S(i), T);
  }
  function w(y) {
    if (h) {
      h(y);
      return;
    }
    const { from: _, item: k, oldIndex: L, oldDraggableIndex: T, newDraggableIndex: V } = y;
    if (rt(k), Nt(_, k, L), Ie(i)) {
      const j = [...S(i)];
      i.value = It(
        j,
        T,
        V
      );
      return;
    }
    It(S(i), T, V);
  }
  function A(y) {
    const { newIndex: _, oldIndex: k, from: L, to: T } = y;
    let V = null;
    const j = _ === k && L === T;
    try {
      if (j) {
        let H = null;
        r == null || r.some((G, oe) => {
          if (H && (r == null ? void 0 : r.length) !== T.childNodes.length)
            return L.insertBefore(H, G.nextSibling), !0;
          const ot = T.childNodes[oe];
          H = T == null ? void 0 : T.replaceChild(G, ot);
        });
      }
    } catch (H) {
      V = H;
    } finally {
      r = null;
    }
    qt(() => {
      if ($t(), V)
        throw V;
    });
  }
  const M = {
    onUpdate: w,
    onStart: f,
    onAdd: p,
    onRemove: b,
    onEnd: A
  };
  function x(y) {
    const _ = S(a);
    return y || (y = qn(_) ? Un(_, o == null ? void 0 : o.$el) : _), y && !Jn(y) && (y = y.$el), y || $n("Root element not found"), y;
  }
  function C() {
    var y;
    const _ = (y = S(s)) != null ? y : {}, { immediate: k, clone: L } = _, T = nn(_, ["immediate", "clone"]);
    return Pt(T, (V, j) => {
      Kn(V) && (T[V] = (H, ...G) => {
        const oe = Ao();
        return Qn(H, oe), j(H, ...G);
      });
    }), Zn(
      i === null ? {} : M,
      T
    );
  }
  const F = (y) => {
    y = x(y), l && N.destroy(), l = new v(y, C());
  };
  xn(
    () => s,
    () => {
      l && Pt(C(), (y, _) => {
        l == null || l.option(y, _);
      });
    },
    { deep: !0 }
  );
  const N = {
    option: (y, _) => l == null ? void 0 : l.option(y, _),
    destroy: () => {
      l == null || l.destroy(), l = null;
    },
    save: () => l == null ? void 0 : l.save(),
    toArray: () => l == null ? void 0 : l.toArray(),
    closest: (...y) => l == null ? void 0 : l.closest(...y)
  }, ne = () => N == null ? void 0 : N.option("disabled", !0), fe = () => N == null ? void 0 : N.option("disabled", !1);
  return Io(() => {
    u && F();
  }), Oo(N.destroy), Se({ start: F, pause: ne, resume: fe }, N);
}
const wt = [
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
], No = [
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
  ...wt.map((e) => `on${e.replace(/^\S/, (n) => n.toUpperCase())}`)
], Po = En({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: No,
  emits: ["update:modelValue", ...wt],
  setup(e, { slots: n, emit: t, expose: o, attrs: r }) {
    const a = wt.reduce((d, h) => {
      const f = `on${h.replace(/^\S/, (p) => p.toUpperCase())}`;
      return d[f] = (...p) => t(h, ...p), d;
    }, {}), i = Q(() => {
      const d = Dn(e), { modelValue: h } = d, f = nn(d, ["modelValue"]), p = Object.entries(f).reduce((b, [w, A]) => {
        const M = S(A);
        return M !== void 0 && (b[w] = M), b;
      }, {});
      return Se(Se({}, a), zn(Se(Se({}, r), p)));
    }), s = Q({
      get: () => e.modelValue,
      set: (d) => t("update:modelValue", d)
    }), l = Cn(), u = Tn(
      Mo(e.target || l, s, i)
    );
    return o(u), () => {
      var d;
      return re(e.tag || "div", { ref: l }, (d = n == null ? void 0 : n.default) == null ? void 0 : d.call(n, u));
    };
  }
});
var Vo = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", ko = "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z";
const tt = Symbol.for("sortable-treeview"), Ro = {
  transform: "rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))"
}, zt = {
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
}, Wt = {
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
    const n = Q(() => {
      var u;
      return ((u = e.faIcon) == null ? void 0 : u.prefix) || e.type;
    }), t = Q(() => parseInt(e.rotate, 10)), o = Q(() => zt[n.value] || zt.default), r = Q(() => parseInt(e.size, 10) || o.value.size), a = Q(() => e.faIcon ? `0 0 ${e.faIcon.icon[0]} ${e.faIcon.icon[1]}` : !1), i = Q(() => a.value || e.viewbox || o.value.viewbox), s = Q(() => {
      if (e.noStyles !== !0)
        return {
          ...Ro,
          "--sx": ["both", "horizontal"].includes(e.flip) ? "-1" : "1",
          "--sy": ["both", "vertical"].includes(e.flip) ? "-1" : "1",
          "--r": isNaN(t.value) ? t.value : t.value + "deg"
        };
    }), l = Q(() => {
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
        viewBox: i.value
      },
      [re(Bo, { path: e.path, type: n.value, pathString: l.value })]
    );
  }
}, Ho = { class: "evo-sortable-treeview__item" }, jo = { class: "evo-sortable-treeview__item-content" }, Yo = {
  ref: "item",
  class: "evo-sortable-treeview__actions"
}, Xo = { class: "evo-sortable-treeview__action-drag" }, Fo = { class: "evo-sortable-treeview__action-title" }, $o = {
  class: "d-flex align-center",
  ref: "columns"
}, Lo = /* @__PURE__ */ Object.assign({
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
    const n = e, t = Ut(), o = useTemplateRef("columns"), r = ht(tt), a = computed(() => r.config.value.itemTitle), i = computed(() => r.config.value.itemValue), s = computed(() => r.config.value.itemChildren), l = computed(() => r.config.value.itemChildrenCount), u = ref([]), { width: d } = Bn(o);
    watch(
      d,
      (x) => {
        var C;
        if (!o.value) return [];
        u.value = Array.from((C = o.value) == null ? void 0 : C.children).map((F) => {
          const { width: N } = F.getBoundingClientRect();
          return N;
        });
      },
      {
        immediate: !0
      }
    );
    const { registerItem: h } = ht(tt);
    h(t, u);
    const f = ref([]), p = computed(() => {
      var x, C;
      return n.item[l.value] > 0 || (x = f.value) != null && x.length ? !0 : !!(Array.isArray(n.item[s.value]) && ((C = n.item[s.value]) == null ? void 0 : C.length) > 0);
    }), b = ref(!1);
    Hn(() => n.item[s.value], f, {
      direction: "ltr",
      transform: {
        ltr: (x) => x
      },
      immediate: !0
    });
    const w = computed(() => {
      var x;
      return p.value && ((x = f.value) == null ? void 0 : x.length) > 0;
    }), A = ref(!1), M = () => {
      if (A.value || w.value) return A.value = !A.value;
      b.value = !0, r.onLoadChildren(n.item).then((x) => {
        f.value = x.data.children ?? [], A.value = !A.value;
      }).finally(() => {
        b.value = !1;
      });
    };
    return (x, C) => {
      const F = Gt("VBtn");
      return ae(), Ae("li", Ho, [
        me("div", jo, [
          me("div", Yo, [
            me("div", {
              class: An(["evo-sortable-treeview__action-expand", {
                "is-expanded": S(A)
              }])
            }, [
              S(p) ? (ae(), Fe(F, {
                key: 0,
                icon: "",
                variant: "flat",
                size: "small",
                loading: S(b),
                onClick: M
              }, {
                default: be(() => [
                  ge(S(Wt), {
                    class: "evo-sortable-treeview__expand-icon",
                    size: "24",
                    path: S(Vo),
                    rotate: S(A) ? 90 : 0
                  }, null, 8, ["path", "rotate"])
                ]),
                _: 1
              }, 8, ["loading"])) : Zt("", !0)
            ], 2),
            me("div", Xo, [
              ge(F, {
                variant: "plain",
                size: "small",
                class: "drag-handle cursor-move"
              }, {
                default: be(() => [
                  ge(S(Wt), { path: S(ko) }, null, 8, ["path"])
                ]),
                _: 1
              })
            ]),
            me("div", Fo, [
              Ue(x.$slots, "item.title", {
                item: n.item,
                title: n.item[S(a)]
              }, () => [
                Mn(Jt(n.item[S(a)]), 1)
              ])
            ])
          ], 512),
          me("div", $o, [
            Ue(x.$slots, "item.columns", {
              item: n.item
            })
          ], 512)
        ]),
        ge(S(Qt), { slots: x.$slots }, {
          default: be(() => [
            ge(_n, {
              modelValue: S(f),
              "onUpdate:modelValue": C[0] || (C[0] = (N) => Ie(f) ? f.value = N : null),
              "is-expanded": S(A),
              "is-empty": !S(p),
              depth: n.depth + 1,
              "parent-id": n.item[S(i)]
            }, null, 8, ["modelValue", "is-expanded", "is-empty", "depth", "parent-id"])
          ]),
          _: 1
        }, 8, ["slots"])
      ]);
    };
  }
}), _n = /* @__PURE__ */ Object.assign({
  name: "EvoSortableTreeviewChildren"
}, {
  __name: "_SortableTreeviewChildren",
  props: /* @__PURE__ */ Nn({
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
    const n = Pn(e, "modelValue"), t = e, o = ht(tt), r = computed(() => o.config.value.itemValue), a = computed(() => ({
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
      const l = Gt("VExpandTransition");
      return ae(), Fe(l, null, {
        default: be(() => [
          t.isExpanded || t.isEmpty ? (ae(), Fe(S(Po), Tt({
            key: 0,
            modelValue: n.value,
            "onUpdate:modelValue": s[0] || (s[0] = (u) => n.value = u)
          }, S(a)), {
            default: be(() => [
              (ae(!0), Ae(Kt, null, mt(n.value, (u) => (ae(), Fe(Lo, {
                key: `${u[S(r)]}_item`,
                item: u,
                depth: t.depth
              }, Vn({ _: 2 }, [
                mt(i.$slots, (d, h) => ({
                  name: h,
                  fn: be((f) => [
                    Ue(i.$slots, h, Tt({ ref_for: !0 }, f))
                  ])
                }))
              ]), 1032, ["item", "depth"]))), 128))
            ]),
            _: 3
          }, 16, ["modelValue"])) : Zt("", !0)
        ]),
        _: 3
      });
    };
  }
}), zo = {
  ref: "treeview",
  class: "evo-sortable-treeview"
}, Wo = { class: "evo-sortable-treeview__header" }, Qo = /* @__PURE__ */ Object.assign({
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
  emits: ["sorted"],
  setup(e, { emit: n }) {
    const t = Ut(), o = n, r = e, a = computed(() => typeof r.model == "string" ? jn().props[r.model] : r.model), i = computed(() => {
      var f;
      return ((f = a.value) == null ? void 0 : f.config) ?? {};
    }), s = computed(() => {
      var f;
      return ((f = a.value) == null ? void 0 : f.headers) ?? [];
    }), l = computed(() => {
      var f;
      return ((f = a.value) == null ? void 0 : f.data) ?? a.value;
    }), u = ref(l.value);
    watch(l, (f) => {
      u.value = f;
    });
    const d = ref(/* @__PURE__ */ new Map()), h = computed(() => Array.from(d.value.values()).reduce((f, p) => {
      for (const b in p.value) {
        const w = p.value[b] ?? 0;
        (!f[b] || w > f[b]) && (f[b] = w);
      }
      return f;
    }, []));
    return kn(tt, {
      group: t,
      config: i,
      treeProps: computed(() => Yn(r, ["itemChildren", "itemChildrenCount", "itemTitle", "itemValue"])),
      registerItem: (f, p) => {
        d.value.set(f, p);
      },
      onSorted: (f, p) => {
        const b = f.map((w) => w[i.value.itemValue]) ?? [];
        return o("sorted", {
          parentId: p,
          ids: b,
          $event: f
        }), xt({
          url: i.value.updateSortOrderRoute,
          method: i.value.updateSortOrderMethod,
          data: {
            model: a.value.modelClass,
            parent_id: p,
            ids: b
          },
          withCredentials: !0,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          responseType: "json"
        });
      },
      onLoadChildren: (f) => xt({
        url: i.value.loadChildrenRoute,
        method: i.value.loadChildrenMethod,
        params: {
          model: a.value.modelClass,
          model_id: f[i.value.itemValue]
        },
        withCredentials: !0
      })
    }), (f, p) => (ae(), Ae("div", zo, [
      me("header", Wo, [
        Ue(f.$slots, "header", {}, () => [
          (ae(!0), Ae(Kt, null, mt(S(s), (b, w) => (ae(), Ae("div", {
            key: b.value,
            style: Rn({
              width: `${S(h)[w]}px`,
              textAlign: b.align ?? "left"
            })
          }, Jt(b.title), 5))), 128))
        ])
      ]),
      ge(S(Qt), { slots: f.$slots }, {
        default: be(() => [
          ge(_n, {
            modelValue: S(u),
            "onUpdate:modelValue": p[0] || (p[0] = (b) => Ie(u) ? u.value = b : null),
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
  Qo as EvoSortableTreeview
};
