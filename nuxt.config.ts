import nodePolyfills from 'vite-plugin-node-stdlib-browser';
import stdLibBrowser from 'node-stdlib-browser';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  components: true,
  pages: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  vite: {
    plugins: [nodePolyfills()],
    resolve: {
      alias: stdLibBrowser,
    },
    optimizeDeps: {
      include: [
        'node-stdlib-browser/helpers/esbuild/shim',
      ],
      exclude: ['node-stdlib-browser', 'fs', 'path', 'os' ],
      esbuildOptions: {
        inject: []
      }
    },
  },
})