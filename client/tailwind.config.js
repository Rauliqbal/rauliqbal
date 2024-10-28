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
            beVietnamPro: ["Be Vietnam Pro", "sans-serif"],
            viga: ["Viga", "sans-serif"],
         },
         animation: {
            loopText: "loopRun 18s infinite linear",
            "scroll-left": "scroll-left 20s linear infinite",
        "scroll-right": "scroll-right 25s linear infinite",
         },
         keyframes: {
            loopRun: {
               "0%": { transform: "translateX(0)" },
               "100%": { transform: "translateX(-100%)" },
            },
             "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
         },
         colors: {
            primary: "#5F65F4",
            light: "#F5F7F9",
            dark: "#0C1027",
         },
         backgroundImage: {},
      },
   },
   plugins: [],
};
