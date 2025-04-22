import { h, computed as f, useId as $, resolveComponent as z, createElementBlock as x, openBlock as _, createElementVNode as v, createVNode as y, normalizeClass as q, unref as a, createBlock as w, createCommentVNode as L, withCtx as V, renderSlot as S, createTextVNode as k, toDisplayString as D, isRef as N, mergeModels as R, useModel as P, inject as U, mergeProps as E, Fragment as F, renderList as T, createSlots as W, provide as Z, normalizeStyle as G } from "vue";
import { VueDraggable as J } from "vue-draggable-plus";
import { syncRef as K } from "@vueuse/core";
import { ForwardSlots as O } from "@evomark/vue-forward-slots";
import { usePage as Q } from "@inertiajs/vue3";
import { pick as X } from "lodash-es";
import j from "axios";
import './index.css';var Y = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", ee = "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z";
const C = Symbol.for("sortable-treeview"), te = {
  transform: "rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))"
}, I = {
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
}, oe = {
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
    return () => e.type === "fad" ? (console.warn("vue3-icon does not currently support Duotone FontAwesome icons"), h("path")) : Array.isArray(e.path) ? h(
      "g",
      {
        style: {
          fill: "currentcolor"
        }
      },
      e.path.map((o) => typeof o == "string" ? h("path", { d: o }) : h("path", { ...o }))
    ) : h("path", {
      d: e.pathString,
      style: {
        fill: "currentcolor"
      }
    });
  }
}, M = {
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
      return console.warn("vue3-icon requires either a 'path' or an 'fa-icon' property"), () => h("div");
    const o = f(() => {
      var t;
      return ((t = e.faIcon) == null ? void 0 : t.prefix) || e.type;
    }), r = f(() => parseInt(e.rotate, 10)), p = f(() => I[o.value] || I.default), m = f(() => parseInt(e.size, 10) || p.value.size), s = f(() => e.faIcon ? `0 0 ${e.faIcon.icon[0]} ${e.faIcon.icon[1]}` : !1), l = f(() => s.value || e.viewbox || p.value.viewbox), n = f(() => {
      if (e.noStyles !== !0)
        return {
          ...te,
          "--sx": ["both", "horizontal"].includes(e.flip) ? "-1" : "1",
          "--sy": ["both", "vertical"].includes(e.flip) ? "-1" : "1",
          "--r": isNaN(r.value) ? r.value : r.value + "deg"
        };
    }), u = f(() => {
      var t;
      return e.faIcon ? (t = e.faIcon) == null ? void 0 : t.icon[4] : e.type === "simple-icons" && typeof e.path == "object" ? e.path.path : e.path;
    });
    return () => h(
      "svg",
      {
        xmlns: e.noNamespace !== !0 ? "http://www.w3.org/2000/svg" : void 0,
        style: n.value,
        class: ["vue3-icon"],
        width: e.noDimensions !== !0 ? m.value : void 0,
        height: e.noDimensions !== !0 ? m.value : void 0,
        viewBox: l.value
      },
      [h(oe, { path: e.path, type: o.value, pathString: u.value })]
    );
  }
}, ae = { class: "evo-sortable-treeview__item" }, re = { class: "evo-sortable-treeview__item-content" }, le = {
  ref: "item",
  class: "evo-sortable-treeview__actions"
}, ie = { class: "evo-sortable-treeview__action-drag" }, ne = { class: "evo-sortable-treeview__action-title" }, se = { class: "evo-sortable-treeview__columns" }, de = /* @__PURE__ */ Object.assign({
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
    const o = e;
    $(), useTemplateRef("item");
    const r = inject(C), p = computed(() => r.config.value.itemTitle), m = computed(() => r.config.value.itemValue), s = computed(() => r.config.value.itemChildren), l = computed(() => r.config.value.itemChildrenCount), n = ref([]), u = computed(() => {
      var d, g;
      return o.item[l.value] > 0 || (d = n.value) != null && d.length ? !0 : !!(Array.isArray(o.item[s.value]) && ((g = o.item[s.value]) == null ? void 0 : g.length) > 0);
    }), t = ref(!1);
    K(() => o.item[s.value], n, {
      direction: "ltr",
      transform: {
        ltr: (d) => d
      },
      immediate: !0
    });
    const c = computed(() => {
      var d;
      return u.value && ((d = n.value) == null ? void 0 : d.length) > 0;
    }), i = ref(!1), b = () => {
      if (i.value || c.value) return i.value = !i.value;
      t.value = !0, r.onLoadChildren(o.item).then((d) => {
        n.value = d.data.children ?? [], i.value = !i.value;
      }).finally(() => {
        t.value = !1;
      });
    };
    return (d, g) => {
      const H = z("VBtn");
      return _(), x("li", ae, [
        v("div", re, [
          v("div", le, [
            v("div", {
              class: q(["evo-sortable-treeview__action-expand", {
                "is-expanded": a(i)
              }])
            }, [
              a(u) ? (_(), w(H, {
                key: 0,
                icon: "",
                variant: "flat",
                size: "small",
                loading: a(t),
                onClick: b
              }, {
                default: V(() => [
                  y(a(M), {
                    class: "evo-sortable-treeview__expand-icon",
                    size: "24",
                    path: a(Y),
                    rotate: a(i) ? 90 : 0
                  }, null, 8, ["path", "rotate"])
                ]),
                _: 1
              }, 8, ["loading"])) : L("", !0)
            ], 2),
            v("div", ie, [
              y(H, {
                variant: "plain",
                size: "small",
                class: "drag-handle cursor-move"
              }, {
                default: V(() => [
                  y(a(M), { path: a(ee) }, null, 8, ["path"])
                ]),
                _: 1
              })
            ]),
            v("div", ne, [
              S(d.$slots, "item.title", {
                item: o.item,
                title: o.item[a(p)]
              }, () => [
                k(D(o.item[a(p)]), 1)
              ])
            ])
          ], 512),
          g[1] || (g[1] = v("div", { class: "evo-sortable-treeview__spacer" }, null, -1)),
          v("div", se, [
            S(d.$slots, "item.columns", {
              item: o.item
            })
          ])
        ]),
        y(a(O), { slots: d.$slots }, {
          default: V(() => [
            y(B, {
              modelValue: a(n),
              "onUpdate:modelValue": g[0] || (g[0] = (A) => N(n) ? n.value = A : null),
              "is-expanded": a(i),
              "is-empty": !a(u),
              depth: o.depth + 1,
              "parent-id": o.item[a(m)]
            }, null, 8, ["modelValue", "is-expanded", "is-empty", "depth", "parent-id"])
          ]),
          _: 1
        }, 8, ["slots"])
      ]);
    };
  }
}), B = /* @__PURE__ */ Object.assign({
  name: "EvoSortableTreeviewChildren"
}, {
  __name: "_SortableTreeviewChildren",
  props: /* @__PURE__ */ R({
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
    const o = P(e, "modelValue"), r = e, p = U(C), m = computed(() => p.config.value.itemValue), s = computed(() => ({
      class: "evo-sortable-treeview__drag-area",
      style: {
        minHeight: r.isEmpty ? "1px" : "",
        paddingLeft: r.parentId ? "1rem" : "0px"
      },
      tag: "ul",
      group: p.group,
      draggable: "li",
      handle: ".drag-handle",
      "onUpdate:modelValue": (l) => p.onSorted(l, r.parentId)
    }));
    return (l, n) => {
      const u = z("VExpandTransition");
      return _(), w(u, null, {
        default: V(() => [
          r.isExpanded || r.isEmpty ? (_(), w(a(J), E({
            key: 0,
            modelValue: o.value,
            "onUpdate:modelValue": n[0] || (n[0] = (t) => o.value = t)
          }, a(s)), {
            default: V(() => [
              (_(!0), x(F, null, T(o.value, (t) => (_(), w(de, {
                key: `${t[a(m)]}_item`,
                item: t,
                depth: r.depth
              }, W({ _: 2 }, [
                T(l.$slots, (c, i) => ({
                  name: i,
                  fn: V((b) => [
                    S(l.$slots, i, E({ ref_for: !0 }, b))
                  ])
                }))
              ]), 1032, ["item", "depth"]))), 128))
            ]),
            _: 3
          }, 16, ["modelValue"])) : L("", !0)
        ]),
        _: 3
      });
    };
  }
}), ue = {
  ref: "treeview",
  class: "evo-sortable-treeview"
}, ye = /* @__PURE__ */ Object.assign({
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
  setup(e, { emit: o }) {
    const r = $(), p = o, m = e, s = computed(() => typeof m.model == "string" ? Q().props[m.model] : m.model), l = computed(() => {
      var t;
      return ((t = s.value) == null ? void 0 : t.config) ?? {};
    }), n = computed(() => {
      var t;
      return ((t = s.value) == null ? void 0 : t.data) ?? s.value;
    }), u = ref(n.value);
    return watch(n, (t) => {
      u.value = t;
    }), Z(C, {
      group: r,
      config: l,
      treeProps: computed(() => X(m, ["itemChildren", "itemChildrenCount", "itemTitle", "itemValue"])),
      onSorted: (t, c) => {
        const i = t.map((b) => b[l.value.itemValue]) ?? [];
        return p("sorted", {
          parentId: c,
          ids: i,
          $event: t
        }), j({
          url: l.value.updateSortOrderRoute,
          method: l.value.updateSortOrderMethod,
          data: {
            model: s.value.modelClass,
            parent_id: c,
            ids: i
          },
          withCredentials: !0,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          responseType: "json"
        });
      },
      onLoadChildren: (t) => j({
        url: l.value.loadChildrenRoute,
        method: l.value.loadChildrenMethod,
        params: {
          model: s.value.modelClass,
          model_id: t[l.value.itemValue]
        },
        withCredentials: !0
      })
    }), (t, c) => (_(), x("div", ue, [
      v("header", {
        class: "evo-sortable-treeview__header",
        style: G({
          "--max-columns-width": `${t.maxColumnsWidth}px`
        })
      }, [
        c[1] || (c[1] = v("div", { class: "evo-sortable-treeview__spacer" }, null, -1)),
        S(t.$slots, "header")
      ], 4),
      y(a(O), { slots: t.$slots }, {
        default: V(() => [
          y(B, {
            modelValue: a(u),
            "onUpdate:modelValue": c[0] || (c[0] = (i) => N(u) ? u.value = i : null),
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
  ye as EvoSortableTreeview
};
