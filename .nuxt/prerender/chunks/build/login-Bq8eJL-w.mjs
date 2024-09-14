import { ref, mergeProps, useSSRContext } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue-router/dist/vue-router.node.mjs';
import { getAuth } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/firebase/auth/dist/index.mjs';
import { H as Header } from './Header-Bmco_al9.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    getAuth();
    const email = ref("");
    const password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="flex-1 bg-[#ffffff] dark:bg-[#ffffff] py-8 px-6 md:px-8"><div class="max-w-3xl mx-auto bg-white dark:bg-[#10673b] rounded-lg shadow p-6"><h2 class="text-2xl font-bold mb-4 dark:text-white">Login / Register To Donate</h2><form><div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 mb-2">Email</label><input${ssrRenderAttr("value", email.value)} type="email" required class="w-full p-2 border rounded"></div><div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 mb-2">Password</label><input${ssrRenderAttr("value", password.value)} type="password" required class="w-full p-2 border rounded"></div><button type="submit" class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2"> Continue </button></form><div class="mt-4"><button class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 h-10 px-4 py-2"> Continue with Google </button></div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-Bq8eJL-w.mjs.map
