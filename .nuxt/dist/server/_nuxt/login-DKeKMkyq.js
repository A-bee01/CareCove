import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { getAuth } from "firebase/auth";
import { f as firebaseApp } from "../server.mjs";
import { H as Header } from "./Header-Cv-iTnyZ.js";
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
import "firebase/firestore";
import "firebase/app";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    getAuth(firebaseApp);
    const email = ref("");
    const password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="flex-1 bg-[#ffffff] dark:bg-[#ffffff] py-8 px-6 md:px-8"><div class="max-w-3xl mx-auto bg-white dark:bg-[#10673b] rounded-lg shadow p-6"><h2 class="text-2xl font-bold mb-4 dark:text-white">Login / Register</h2><form><div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 mb-2">Email</label><input${ssrRenderAttr("value", email.value)} type="email" required class="w-full p-2 border rounded"></div><div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 mb-2">Password</label><input${ssrRenderAttr("value", password.value)} type="password" required class="w-full p-2 border rounded"></div><button type="submit" class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2"> Continue </button></form><div class="mt-4"><button class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 h-10 px-4 py-2"> Continue with Google </button></div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-DKeKMkyq.js.map
