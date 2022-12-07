/** @type {import('tailwindcss/types').Config} */


const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const primary = colors.blue;
const secondary = colors.pink;
const info = colors.purple;
const warning = colors.orange;
const success = colors.green;
const error = colors.red;


module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/**/*.scss",
    "./assets/**/*.css",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      blue: "#2830f0",
      purple: "#6028cc",
      pink: "#ff49db",
      red: "#f80c80",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray_dark: "#273444",
      gray: "#8492a6",
      gray_light: "#d3dce6",
      black: "#000",
      white: "#fff"
    },
    fontFamily: {
      sans: ["Poppins", "helvetica", "sans-serif"],
    },

    extend: {
      textColor: {},
      backgroundColor: {},
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
