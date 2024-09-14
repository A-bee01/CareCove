import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { a as useStore } from "../server.mjs";
import { H as Header } from "./Header-Bmco_al9.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "@tbdex/http-client";
import "@web5/dids";
import "@web5/credentials";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "credentials",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useStore();
    const customerName = ref("");
    const countryCode = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="flex-1 bg-[#ffffff] dark:bg-[#ffffff] py-8 px-6 md:px-8"><div class="max-w-3xl mx-auto bg-white dark:bg-[#10673b] rounded-lg shadow p-6"><h2 class="text-2xl font-bold mb-4 dark:text-white">Create Credential</h2><form><div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 mb-2">Name</label><input${ssrRenderAttr("value", customerName.value)} type="text" required class="w-full p-2 border rounded"></div><div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 mb-2">Country Code</label><input${ssrRenderAttr("value", countryCode.value)} type="text" maxlength="2" required class="w-full p-2 border rounded"></div><button type="submit" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 dark:text-white"> Create Credential </button></form></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/credentials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=credentials-YVv3Rzer.js.map
