import { mergeProps, useSSRContext, ref, computed, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/server-renderer/index.mjs';
import { H as Header } from './Header-Bmco_al9.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Bk9AKvJX.mjs';
import { u as useStore } from './data-BXX_a5-m.mjs';
import { S as Spinner } from './Spinner-DRh_uHmW.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/h3/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/devalue/index.js';
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
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/firebase/app/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/firebase/auth/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/firebase/firestore/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/@tbdex/http-client/dist/esm/src/main.js';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/@web5/credentials/dist/esm/index.js';

const _sfc_main$4 = {
  __name: "Balances",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCause = ref("");
    const causes = [
      "Environmental Conservation",
      "Education for All",
      "Healthcare Access",
      "Animal Welfare",
      "Hunger Relief"
    ];
    const { state } = useStore();
    const balance = computed(() => state.balance);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><div class="bg-white dark:bg-[#10673b] rounded-lg shadow p-6"><div class="flex justify-between items-center"><h2 class="text-2xl font-bold">Balance</h2></div><div class="text-4xl font-bold my-4">TB$ ${ssrInterpolate(unref(balance))}</div></div><div class="bg-[#10673b] rounded-lg p-6"><h2 class="text-xl font-semibold mb-4">Donate</h2><form class="space-y-4"><div><label for="cause" class="block text-sm font-medium mb-1">Cause</label><select id="cause" class="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-700" required><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCause)) ? ssrLooseContain(unref(selectedCause), "") : ssrLooseEqual(unref(selectedCause), "")) ? " selected" : ""}>Select a cause</option><!--[-->`);
      ssrRenderList(causes, (cause) => {
        _push(`<option${ssrRenderAttr("value", cause)}>${ssrInterpolate(cause)}</option>`);
      });
      _push(`<!--]--></select></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/donate",
        class: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"${_scopeId}><path d="m22 2-7 20-4-9-9-4Z"${_scopeId}></path><path d="M22 2 11 13"${_scopeId}></path></svg> Donate `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                class: "w-5 h-5 mr-2"
              }, [
                createVNode("path", { d: "m22 2-7 20-4-9-9-4Z" }),
                createVNode("path", { d: "M22 2 11 13" })
              ])),
              createTextVNode(" Donate ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Balances.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Credentials",
  __ssrInlineRender: true,
  setup(__props) {
    const { state, renderCredential } = useStore();
    const parsedCredentials = computed(
      () => state.customerCredentials.map((jwt) => renderCredential(jwt))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#10673b] rounded-lg shadow p-6" }, _attrs))}><h2 class="text-2xl font-bold mb-4">Credentials</h2>`);
      if (unref(parsedCredentials).length) {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(parsedCredentials), (credential, index) => {
          _push(`<div class="mb-4 p-4 border rounded-lg lg:w-1/2 w-full"><p><strong>${ssrInterpolate(credential.title)}</strong></p><p><strong>Name:</strong> ${ssrInterpolate(credential.name)}</p><p><strong>Country Code:</strong> ${ssrInterpolate(credential.countryCode)}</p><p><strong>Date:</strong> ${ssrInterpolate(credential.issuanceDate)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div><p>No credentials found.</p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Credentials.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "TransactionModal",
  __ssrInlineRender: true,
  props: {
    transaction: {
      type: Object,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const { state, addOrder, addClose, deductAmount } = useStore();
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" }, _attrs))} data-v-5b7f50a3><div class="bg-white dark:bg-[#10673b] rounded-lg shadow p-6 w-full max-w-md" data-v-5b7f50a3><div class="grid gap-6" data-v-5b7f50a3><div class="flex items-center gap-4" data-v-5b7f50a3><div data-v-5b7f50a3>`);
      if (__props.transaction.status === "completed") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" data-v-5b7f50a3><path d="M20 6 9 17l-5-5" data-v-5b7f50a3></path></svg>`);
      } else if (__props.transaction.status === "failed" || __props.transaction.status === "cancelled") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" data-v-5b7f50a3><circle cx="12" cy="12" r="10" data-v-5b7f50a3></circle><line x1="15" y1="9" x2="9" y2="15" data-v-5b7f50a3></line><line x1="9" y1="9" x2="15" y2="15" data-v-5b7f50a3></line></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" data-v-5b7f50a3><circle cx="12" cy="12" r="10" data-v-5b7f50a3></circle><path d="M12 6v6l4 2" data-v-5b7f50a3></path></svg>`);
      }
      _push(`</div><div class="flex-1" data-v-5b7f50a3><p class="text-sm font-medium" data-v-5b7f50a3>${ssrInterpolate(unref(state).pfiAllowlist.find((pfi) => pfi.pfiUri === __props.transaction.pfiDid).pfiName)}</p><p class="text-xs text-gray-500 dark:text-gray-400" data-v-5b7f50a3>Exchange from ${ssrInterpolate(__props.transaction.payinCurrency)} to ${ssrInterpolate(__props.transaction.payoutCurrency)}</p></div><div class="flex-1" data-v-5b7f50a3><p class="text-XL font-medium text-right" data-v-5b7f50a3>${ssrInterpolate(__props.transaction.payinAmount)} ${ssrInterpolate(__props.transaction.payinCurrency)}</p></div></div><div class="grid gap-2" data-v-5b7f50a3><label class="text-sm font-medium leading-none" data-v-5b7f50a3>Sender</label><div class="flex" data-v-5b7f50a3><span class="flex-1 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100" data-v-5b7f50a3> You </span></div></div><div class="grid gap-2" data-v-5b7f50a3><label class="text-sm font-medium leading-none" data-v-5b7f50a3>Recipient Details</label><div class="flex" data-v-5b7f50a3><span class="flex-1 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100" data-v-5b7f50a3>${ssrInterpolate(__props.transaction.to)}</span></div></div><div class="grid gap-2" data-v-5b7f50a3><label class="text-sm font-medium leading-none" data-v-5b7f50a3>Amount</label><div class="flex" data-v-5b7f50a3><span class="flex-1 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100" data-v-5b7f50a3>${ssrInterpolate(__props.transaction.payoutAmount)} ${ssrInterpolate(__props.transaction.payoutCurrency)}</span></div></div>`);
      if (__props.transaction.status === "quote" && __props.transaction.expirationTime) {
        _push(`<div class="grid gap-2" data-v-5b7f50a3><label class="text-sm font-medium leading-none" data-v-5b7f50a3>Expires</label><div class="flex" data-v-5b7f50a3><span class="flex-1 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100" data-v-5b7f50a3>${ssrInterpolate(new Date(__props.transaction.expirationTime).toLocaleDateString(void 0, { dateStyle: "medium" }))}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.transaction.status === "quote" && !unref(loading)) {
        _push(`<div class="flex justify-end gap-2" data-v-5b7f50a3><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-red-500 hover:text-white h-10 px-4 py-2" data-v-5b7f50a3> Cancel </button><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-700 h-10 px-4 py-2" data-v-5b7f50a3> Pay ${ssrInterpolate(__props.transaction.payinAmount)} ${ssrInterpolate(__props.transaction.payinCurrency)}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div data-v-5b7f50a3>`);
        _push(ssrRenderComponent(Spinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TransactionModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TransactionModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5b7f50a3"]]);
const _sfc_main$1 = {
  __name: "Transactions",
  __ssrInlineRender: true,
  setup(__props) {
    const { state, selectTransaction, pollExchanges } = useStore();
    const transactions = computed(() => state.transactions);
    const transactionsLoading = computed(() => state.transactionsLoading);
    const selectedTransaction = ref(null);
    const closeTransactionModal = () => {
      selectedTransaction.value = null;
      selectTransaction(null);
    };
    const getStatusString = (exchange) => {
      switch (exchange.status) {
        case "rfq":
          return `Requested ${exchange.payinAmount} ${exchange.payinCurrency}`;
        case "quote":
          return `Quoted ${exchange.payinAmount} ${exchange.payinCurrency}`;
        case "order":
          return `Payment for ${exchange.payinAmount} ${exchange.payinCurrency} submitted`;
        case "orderstatus":
          return `Payment processing for ${exchange.payinAmount} ${exchange.payinCurrency}...`;
        case "completed":
          return `Sent ${exchange.payinAmount} ${exchange.payinCurrency}`;
        case "expired":
          return `Quote for ${exchange.payinAmount} ${exchange.payinCurrency} expired`;
        case "cancelled":
          return `Exchange for ${exchange.payinAmount} ${exchange.payinCurrency} was cancelled`;
        case "failed":
          return `Payment for ${exchange.payinAmount} ${exchange.payinCurrency} failed`;
        default:
          return exchange.status;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#10673b] rounded-lg shadow p-6" }, _attrs))}><h2 class="text-2xl font-bold mb-4">Recent Transactions</h2><div>`);
      if (unref(transactions).length) {
        _push(`<ul><!--[-->`);
        ssrRenderList(unref(transactions), (transaction) => {
          _push(`<li class="flex items-center justify-between rounded-lg bg-gray-100 dark:bg-[#39b34d] p-4 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer mb-2"><div class="flex items-center gap-4"><div class="bg-gray-200 dark:bg-[#10673b] rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-gray-500 dark:text-gray-400"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg></div><div><div class="font-medium">${ssrInterpolate(getStatusString(transaction))}</div><div class="text-[gray-500] dark:text-white text-sm">${ssrInterpolate(new Date(transaction.createdTime).toLocaleDateString(void 0, { dateStyle: "medium" }))}</div></div></div>`);
          if (transaction.status === "quote") {
            _push(`<div className="w-1/5 flex items-center justify-end"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<div class="text-center text-gray-500">`);
        if (unref(transactionsLoading)) {
          _push(ssrRenderComponent(Spinner, null, null, _parent));
        } else {
          _push(`<p>No transactions available</p>`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
      if (selectedTransaction.value) {
        _push(ssrRenderComponent(TransactionModal, {
          transaction: selectedTransaction.value,
          onClose: closeTransactionModal
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Transactions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="flex-1 bg-[#39b34d] dark:bg-[#ffffff] py-8 px-6 md:px-8 dark:text-white"><div class="max-w-3xl mx-auto grid gap-8">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-CpjemsM2.mjs.map
