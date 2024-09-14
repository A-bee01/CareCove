import { ref, computed, watch, mergeProps, unref, useSSRContext } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderDynamicModel } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue/server-renderer/index.mjs';
import { H as Header } from './Header-Cv-iTnyZ.mjs';
import { a as useStore } from './server.mjs';
import { useRouter } from 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/vue-router/dist/vue-router.node.mjs';
import { S as Spinner } from './Spinner-Udohz0dS.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/firebase/auth/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/firebase/firestore/dist/index.mjs';
import 'file:///Users/ikechukwuokafor/Downloads/CareCove/node_modules/firebase/app/dist/index.mjs';

const _sfc_main = {
  __name: "donate",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { state, setOffering, createExchange, formatAmount, deductAmount, filterOfferings, satisfiesOfferingRequirements, getOfferingById } = useStore();
    const step = ref(1);
    const fromCurrency = ref("");
    const toCurrency = ref("");
    const isToCurrencyEnabled = ref(false);
    const offering = ref(null);
    const amount = ref("");
    const theyGet = ref("");
    const paymentDetails = ref({});
    const filteredOfferings = ref([]);
    const needsCredentials = computed(() => !satisfiesOfferingRequirements(offering.value, state.customerCredentials));
    const isLoadingOfferings = computed(() => state.payinCurrencies.length == 0);
    const submitLoading = ref(false);
    watch(fromCurrency, () => {
      updateToCurrencies();
    });
    watch(isLoadingOfferings, () => {
      checkExistingSelectedOffering();
    });
    watch(() => offering.value, () => {
      if (offering.value) {
        NGOsPaymentDetails();
      }
    });
    const NGOsPaymentDetails = () => {
      const currencyCode = offering.value.data.payout.currencyCode;
      const dummyData = {
        GHS: {
          accountNumber: "1234567890",
          bankName: "Ghana Commercial Bank",
          swiftCode: "GCB123GH"
        },
        KES: {
          accountNumber: "0987654321",
          bankName: "Equity Bank",
          swiftCode: "EQBK456KE"
        },
        USD: {
          accountNumber: "111122223333",
          bankName: "Wells Fargo",
          swiftCode: "WFUS789"
        },
        GBP: {
          accountNumber: "444455556666",
          bankName: "Barclays",
          swiftCode: "BARCGB22"
        },
        NGN: {
          accountNumber: "777788889999",
          bankName: "First Bank Nigeria",
          swiftCode: "FBNINGLA"
        },
        BTC: {
          address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
        },
        USDC: {
          address: "0x4e7b1f7c9d3f3f7f3e1e1e1e1e1e1e1e1e1e1e1e"
        },
        AUD: {
          accountNumber: "1234567890",
          bankName: "Commonwealth Bank",
          swiftCode: "CBA123AU"
        },
        MXN: {
          accountNumber: "0987654321",
          bankName: "Banorte",
          swiftCode: "BAN456MX"
        }
      };
      if (dummyData[currencyCode]) {
        paymentDetails.value = dummyData[currencyCode];
      }
    };
    const isAmountValid = computed(() => {
      var _a, _b;
      if (!offering.value)
        return true;
      if (!offering.value.data.payin.max || !offering.value.data.payin.min)
        return true;
      const min = (_a = offering.value) == null ? void 0 : _a.data.payin.min;
      const max = (_b = offering.value) == null ? void 0 : _b.data.payin.max;
      return amount.value >= min && amount.value <= max;
    });
    const updateToCurrencies = () => {
      if (fromCurrency.value) {
        const relevantOfferings = state.offerings.filter(
          (offering2) => offering2.data.payin.currencyCode === fromCurrency.value
        );
        const payoutCurrencies = /* @__PURE__ */ new Set();
        relevantOfferings.forEach((offering2) => {
          payoutCurrencies.add(offering2.data.payout.currencyCode);
        });
        state.payoutCurrencies = Array.from(payoutCurrencies);
        isToCurrencyEnabled.value = true;
      } else {
        state.payoutCurrencies = [];
        isToCurrencyEnabled.value = false;
      }
    };
    const checkExistingSelectedOffering = () => {
      if (localStorage.getItem("selectedOffering")) {
        const offeringObject = JSON.parse(localStorage.getItem("selectedOffering"));
        offering.value = getOfferingById(offeringObject.metadata.id);
        localStorage.removeItem("selectedOffering");
        step.value = 2;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="flex-1 bg-[ffffff] dark:bg-[ffffff] py-8 px-6 md:px-8"><div class="max-w-3xl mx-auto grid gap-8">`);
      if (step.value === 1) {
        _push(`<div class="bg-white dark:bg-[#10673b] rounded-lg shadow p-6"><h2 class="text-2xl font-bold mb-4 dark:text-white">Donate To A Cause</h2>`);
        if (unref(state).payinCurrencies.length) {
          _push(`<div><div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 mb-2">From Currency</label><select class="w-full p-2 border rounded"><option disabled value=""${ssrIncludeBooleanAttr(Array.isArray(fromCurrency.value) ? ssrLooseContain(fromCurrency.value, "") : ssrLooseEqual(fromCurrency.value, "")) ? " selected" : ""}>Select currency</option><!--[-->`);
          ssrRenderList(unref(state).payinCurrencies, (currency) => {
            _push(`<option${ssrRenderAttr("value", currency)}>${ssrInterpolate(currency)}</option>`);
          });
          _push(`<!--]--></select></div><div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 mb-2">To Currency</label><select${ssrIncludeBooleanAttr(!isToCurrencyEnabled.value) ? " disabled" : ""} class="w-full p-2 border rounded"><option disabled value=""${ssrIncludeBooleanAttr(Array.isArray(toCurrency.value) ? ssrLooseContain(toCurrency.value, "") : ssrLooseEqual(toCurrency.value, "")) ? " selected" : ""}>Select currency</option><!--[-->`);
          ssrRenderList(unref(state).payoutCurrencies, (currency) => {
            _push(`<option${ssrRenderAttr("value", currency)}>${ssrInterpolate(currency)}</option>`);
          });
          _push(`<!--]--></select></div><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-800 dark:text-white border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"> Get Offerings </button></div>`);
        } else {
          _push(ssrRenderComponent(Spinner, null, null, _parent));
        }
        if (filteredOfferings.value.length) {
          _push(`<div class="mt-4 dark:text-white"><h2 class="text-2xl font-bold mb-4">Exchange Rate Offerings</h2><ul><!--[-->`);
          ssrRenderList(filteredOfferings.value, (offering2) => {
            var _a2;
            _push(`<li class="cursor-pointer p-4 border rounded mb-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"><h3 class="font-bold">${ssrInterpolate((_a2 = unref(state).pfiAllowlist.find((pfi) => pfi.pfiUri === offering2.metadata.from)) == null ? void 0 : _a2.pfiName)}</h3><p>${ssrInterpolate(offering2.data.description)}</p><p class="text-blue-500">${ssrInterpolate(offering2.data.payoutUnitsPerPayinUnit)} ${ssrInterpolate(offering2.data.payout.currencyCode)} for 1 ${ssrInterpolate(offering2.data.payin.currencyCode)}</p></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value === 2) {
        _push(`<div class="bg-white dark:bg-[#10673b] rounded-lg shadow p-6"><h2 class="text-2xl font-bold mb-4 dark:text-white">Enter Transaction Details</h2><div class="mb-4">`);
        if (!unref(isAmountValid) && amount.value !== "") {
          _push(`<p class="text-red-500 mt-2"> Amount must be between ${ssrInterpolate((_c = (_b = (_a = offering.value) == null ? void 0 : _a.data) == null ? void 0 : _b.payin) == null ? void 0 : _c.min)} and ${ssrInterpolate((_f = (_e = (_d = offering.value) == null ? void 0 : _d.data) == null ? void 0 : _e.payin) == null ? void 0 : _f.max)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<label class="block text-gray-700 dark:text-gray-300 mb-2">You Send (${ssrInterpolate((_i = (_h = (_g = offering.value) == null ? void 0 : _g.data) == null ? void 0 : _h.payin) == null ? void 0 : _i.currencyCode)})</label><input${ssrRenderAttr("value", amount.value)} type="number" required class="${ssrRenderClass([{ "border-red-500": !unref(isAmountValid) && amount.value !== "" }, "w-full p-2 border rounded disabled:bg-slate-200"])}"${ssrIncludeBooleanAttr(unref(needsCredentials)) ? " disabled" : ""}></div><div class="mb-4"><label class="block text-gray-700 dark:text-gray-300 mb-2">They Get (${ssrInterpolate((_l = (_k = (_j = offering.value) == null ? void 0 : _j.data) == null ? void 0 : _k.payout) == null ? void 0 : _l.currencyCode)})</label><input${ssrRenderAttr("value", theyGet.value)} type="number" disabled class="w-full p-2 border rounded disabled:bg-slate-200"></div><div class="mb-4 text-gray-700 dark:text-gray-300"> Exchange Rate: ${ssrInterpolate((_n = (_m = offering.value) == null ? void 0 : _m.data) == null ? void 0 : _n.payoutUnitsPerPayinUnit)} ${ssrInterpolate((_q = (_p = (_o = offering.value) == null ? void 0 : _o.data) == null ? void 0 : _p.payout) == null ? void 0 : _q.currencyCode)} for 1 ${ssrInterpolate((_t = (_s = (_r = offering.value) == null ? void 0 : _r.data) == null ? void 0 : _s.payin) == null ? void 0 : _t.currencyCode)}</div><!--[-->`);
        ssrRenderList((_y = (_x = (_w = (_v = (_u = offering.value) == null ? void 0 : _u.data) == null ? void 0 : _v.payout) == null ? void 0 : _w.methods[0]) == null ? void 0 : _x.requiredPaymentDetails) == null ? void 0 : _y.properties, (detail, key) => {
          _push(`<div class="mb-4"><label${ssrRenderAttr("for", key)} class="block text-gray-700 dark:text-gray-300 mb-2">${ssrInterpolate(detail.title)}</label><input${ssrRenderDynamicModel(detail.type, paymentDetails.value[key], null)}${ssrRenderAttr("id", key)}${ssrRenderAttr("type", detail.type)}${ssrRenderAttr("pattern", detail.pattern)} required class="w-full p-2 border rounded disabled:bg-slate-200" disabled><small class="block text-gray-500 dark:text-gray-400">${ssrInterpolate(detail.description)}</small></div>`);
        });
        _push(`<!--]--><p class="text-xs text-green-400 mb-2 flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M20 6 9 17l-5-5"></path></svg> Required credentials available. </p>`);
        if (unref(needsCredentials)) {
          _push(`<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-slate-400 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mr-2 dark:text-white">Verify Identity</button>`);
        } else {
          _push(`<!---->`);
        }
        if (!submitLoading.value) {
          _push(`<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-slate-400 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 dark:text-white"${ssrIncludeBooleanAttr(unref(needsCredentials)) ? " disabled" : ""}> Request for Quote </button>`);
        } else {
          _push(ssrRenderComponent(Spinner, null, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/donate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=donate-PGZVusFj.mjs.map
