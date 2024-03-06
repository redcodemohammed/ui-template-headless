// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
        storesDirs: ["~/stores"],
      },
    ],
    "nuxt-zod-i18n",
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
    "@formkit/auto-animate",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/device",
    "nuxt-typed-router",
    "@nuxtjs/seo",
    "@samk-dev/nuxt-vcalendar",
    "nuxt-ark-ui",
    "@nuxt/test-utils",
  ],
  i18n: {
    langDir: "locales",
    locales: [
      {
        code: "ar",
        iso: "ar-IQ",
        file: "ar.json",
        name: "العربية",
        dir: "rtl",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
        name: "English",
        dir: "ltr",
      },
    ],
    strategy: "no_prefix",
    defaultLocale: "ar",
    lazy: true,
    detectBrowserLanguage: false,
    // todo set the base url before deploying to production
  },
  eslint: {
    lintOnStart: false,
  },
  googleFonts: {
    families: {
      "IBM+Plex+Sans+Arabic": true,
      "Noto+Naskh+Arabic": true,
    },
    download: true,
    outputDir: "assets",
    fontsDir: "fonts",
    stylePath: "css/fonts.css",
  },
  runtimeConfig: {
    app: {
      apiURL: process.env.NUXT_API_URL,
    },
  },
});
