import { ref, mergeProps, useSSRContext } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue-router/dist/vue-router.node.mjs';
import { a as useStore } from './server.mjs';
import { H as Header } from './Header-Bmco_al9.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/h3/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/devalue/index.js';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/ufo/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/destr/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/klona/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/scule/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/defu/dist/defu.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/ohash/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/pathe/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/unhead/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/unctx/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/@tbdex/http-client/dist/esm/src/main.js';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/@web5/credentials/dist/esm/index.js';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=credentials-YVv3Rzer.mjs.map
