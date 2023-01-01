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
      md: "768px", // round down to 720px
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px", // round up to 1600px
    },

    colors: {
      blue: "#3c78f4",
      purple: "#6028cc",
      red: "#f80c80",
      green: "#13ce66",
      gray_dark: "#273444",
      gray: "#8492a6", // create an array of shades 100 ... 900
      gray_light: "#d3dce6",
      black: "#000",
      white: "#fff"
    },

    fontFamily: {
      sans: ['Poppins', 'Helvetica', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'serif'],
    },

    fontSize: {
      sm: ['0.875rem', '1.25rem'], // font-size: 14px, line-height: 20px
      base: ['1rem', '1.5rem'], // font-size: 16px, line-height: 24px
      xl: ['1.25rem', '2rem'], // font-size: 20px, line-height: 32px
      '2xl': ['1.5rem', '1.5'], // font-size: 24px, line-height: 36px
      '3xl': ['2rem', '1.5'], // font-size: 32px, line-height: 48px
      '4xl': ['2.5rem', '1.5'], // font-size: 40px, line-height: 60px
      '5xl': ['3rem', '1.5'], // font-size: 48px, line-height: 72px
      '6xl': ['4rem', '1.25'], // font-size: 64px, line-height: 80px
      '7xl': ['4.5rem', '1.5'], // font-size: 72px, line-height: 108px
      '8xl': ['6rem', '1.25'], // font-size: 96px, line-height: 120px
    },


    extend: {
      colors: {},

      textColor: {},

      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
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
