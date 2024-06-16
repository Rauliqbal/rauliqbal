/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "512px",
          md: "720px",
          lg: "1024px",
          xl: "1060px",
          "1440px": "1480px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        viga: ["Viga", "sans-serif"],
      },
      animation: {
        loopText: "loopRun 18s infinite linear",
      },
      keyframes: {
        loopRun: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "#5F65F4",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
