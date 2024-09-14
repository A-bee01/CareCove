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
    build: {
      rollupOptions: {
        external: [
          '/node_modules/node-stdlib-browser/helpers/esbuild/shim.js'
        ]
      }
    },
    resolve: {
      alias: stdLibBrowser,
    },
    optimizeDeps: {
      include: [
        'node-stdlib-browser/helpers/esbuild/shim',
        'string.prototype.matchall'
      ],
      exclude: ['node-stdlib-browser', 'fs', 'path', 'os', 'firestore', 'firebase/app', 'firebase/auth', 'firebase/firestore' ],
      esbuildOptions: {
        inject: []
      }
    },
  },

  compatibilityDate: '2024-04-03',
})