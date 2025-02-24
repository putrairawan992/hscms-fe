module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AE445A",
      },
    },
  },
  plugins: [],
  // Karena menggunakan Vuetify, kita perlu memastikan tidak ada konflik
  corePlugins: {
    preflight: false,
  },
};
