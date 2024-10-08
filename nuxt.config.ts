// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
          href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Viga&display=swap",
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
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "nuxt-swiper"],
  plugins: [{ src: "~/plugins/luxy-scroll.js", mode: "client" }],
});
