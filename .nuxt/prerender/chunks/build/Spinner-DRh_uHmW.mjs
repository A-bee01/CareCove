import { a as buildAssetsURL } from '../_/renderer.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = "" + buildAssetsURL("loading.GDIi36OC.gif");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-16" }, _attrs))} data-v-f59cebd0><img${ssrRenderAttr("src", _imports_0)} alt="Loading..." class="w-8 h-8 animate-spin loader" data-v-f59cebd0></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Spinner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Spinner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f59cebd0"]]);

export { Spinner as S };
//# sourceMappingURL=Spinner-DRh_uHmW.mjs.map
