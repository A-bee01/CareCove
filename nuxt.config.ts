import nodePolyfills from 'vite-plugin-node-stdlib-browser'

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
  },
})