// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: "https://static.zohocdn.com/catalyst/sdk/js/4.5.0/catalystWebSDK.js",
          type: "text/javascript",
          defer: true,
        },
        {
          src: "/__catalyst/sdk/init.js",
          type: "text/javascript",
          defer: true,
        },
      ],
    },
  },
});
