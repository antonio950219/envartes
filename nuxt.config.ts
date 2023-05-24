// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
    ]
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", '@nuxtjs/svg'],
});
