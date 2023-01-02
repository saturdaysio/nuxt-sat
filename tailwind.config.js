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
      blue: {
        '100': "#18e4be",
        '200': "#2C2C2C",
        '300': "#222222",
        '400': "#202020",
        '500': "#424242",
        '600': "#1D1D1D",
        '700': "#202020",
        '800': "#181818",
        '900': "#3c78f4",
        },
      purple: {
        '100': "#E1BEE7",
        '200': "#CE93D8",
        '300': "#BA68C8",
        '400': "#9C27B0",
        '500': "#9C27B0",
        '600': "#8E24AA",
        '700': "#7B1FA2",
        '800': "#6A1B9A",
        '900': "#4A148C",
        },
      red: {
        '100': "#FFCDD2",
        '200': "#EF9A9A",
        '300': "#E57373",
        '400': "#EF5350",
        '500': "#F44336",
        '600': "#E53935",
        '700': "#202020",
        '800': "#C62828",
        '900': "#B71C1C",
        },
      black: {
      '100': "#c4c4c4",
      '200': "#2C2C2C",
      '300': "#222222",
      '400': "#202020",
      '500': "#181818",
      '600': "#101010",
      '700': "#0C0C0C",
      '800': "#080808",
      '900': "#000000",
      },
      gray: {
        '100': "#F5F5F5",
        '200': "#EEEEEE",
        '300': "#E0E0E0",
        '400': "#BDBDBD",
        '500': "#9E9E9E",
        '600': "#757575",
        '700': "#616161",
        '800': "#424242",
        '900': "#212121",
        },
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
