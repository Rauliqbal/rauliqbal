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
  modules: ["@nuxt/image", "nuxt-swiper"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Viga&display=swap",
        },
      ],
      script: [{ src: "https://unpkg.com/akar-icons-fonts" }],
      meta: [
        {
          name: "google-site-verification",
          content: "i2o9Ko6wWQ0KRBehPhyZn6nhOO4xJHHgupBwP4r-tW8",
        },
        { name: "title", content: "Rauliqbal - FrontEnd Developer" },
        {
          name: "keywords",
          content:
            "Rauliqbal, rauliqbal, Raul iqbal, raul iqbal, portfolio front end, ui designer , freelance frontend",
        },
      ],
    },

    pageTransition: { name: "page", mode: "out-in" },
  },
  plugins: [{ src: "~/plugins/luxy-scroll.js", mode: "client" }],
});
