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
      red: "#f80c80",
      green: "#13ce66",
      gray_dark: "#273444",
      gray: "#8492a6",
      gray_light: "#d3dce6",
      black: "#000",
      white: "#fff"
    },

    fontFamily: {
      sans: ['Poppins', 'Helvetica', 'sans-serif'],
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
    },

    extend: {
      colors: {},
      textColor: {},
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
