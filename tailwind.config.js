/** @type {import('tailwindcss/types').Config} */


const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const primary = colors.blue;
const secondary = colors.pink; // need to add
const info = colors.purple;
const warning = colors.orange; // need to add
const success = colors.green; // need to add
const error = colors.red;


module.exports = {
  content: [
    "./components/**/*.{html,js,ts,jsx,tsx,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/**/*.scss",
    "./assets/**/*.css",
    "./nuxt.config.{js,ts}",
  ],

  darkMode: "class", // 'media' or 'class'

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
        '100': "#BBDEFB",
        '200': "#90CAF9",
        '300': "#64B5F6",
        '400': "#42A5F5",
        '500': "#2196F3",
        '600': "#1E88E5",
        '700': "#1976D2",
        '800': "#1565C0",
        '900': "#0D47A1",
        },
      purple: {
        '100': "#D1C4E9",
        '200': "#B39DDB",
        '300': "#9575CD",
        '400': "#7E57C2",
        '500': "#673AB7",
        '600': "#5E35B1",
        '700': "#512DA8",
        '800': "#4527A0",
        '900': "#311B92",
        },
      red: {
        '100': "#FFCDD2",
        '200': "#EF9A9A",
        '300': "#E57373",
        '400': "#EF5350",
        '500': "#F44336",
        '600': "#E53935",
        '700': "#D32F2F",
        '800': "#C62828",
        '900': "#B71C1C",
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
      black: "#000",
      white: "#fff"
    },

    fontFamily: {
      sans: ['Poppins', 'Helvetica', 'Arial', 'Verdana', 'sans-serif'],
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

    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },

    extend: {},
  },

  variants: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
