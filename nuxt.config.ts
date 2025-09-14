import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-09-05",
  modules: ["@nuxt/icon", "@nuxtjs/google-fonts"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/styles.css"],
  googleFonts: {
    display: "swap",
    prefetch: true,
    preconnect: true,
    families: {
      Inter: true,
    },
  },
  icon: {
    mode: "svg",
    clientBundle: { scan: true },
  },
})
