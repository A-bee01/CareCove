import nodePolyfills from 'vite-plugin-node-stdlib-browser'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  pages: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  ssr: false,
  vite: {
    plugins: [nodePolyfills()],
  },
})