// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: ["@nuxtjs/tailwindcss"],
  // tailwindcss: {
  //   exposeConfig: true,
  // },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ['@nuxtjs/google-fonts', 
    {
        families: {
          // a name with spaces
          Roboto: [100,400,700],
        }
    },
    ],
    ,"@nuxt/content"
  ],
});
