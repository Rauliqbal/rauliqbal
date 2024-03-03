// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link : [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        {rel: 'preconnect' , href: "https://fonts.googleapis.com"},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Viga&display=swap'}
      ],
      script: [
        {src: 'https://unpkg.com/akar-icons-fonts'}
      ]
    }
  }
});
