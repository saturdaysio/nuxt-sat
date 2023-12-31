/** @type {import('tailwindcss/types').Config} */

const plugin = require('tailwindcss/plugin')
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const primary = colors.blue;
const secondary = colors.pink; // need to add
const info = colors.purple;
const warning = colors.orange; // need to add
const success = colors.green; // need to refine
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
      '2xl': "1600px", // round up to 1600px
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
      green: {
        '100': "#84F4A0",
        '200': "#6ECAEC",
        '300': "#84F4A0",
        '400': "#84F4A0",
        '500': "#84F4A0",
        '600': "#84F4A0",
        '700': "#84F4A0",
        '800': "#84F4A0",
        '900': "#84F4A0",
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
      indigo: {
        '100': "#C5CAE9",
        '200': "#9FA8DA",
        '300': "#7986CB",
        '400': "#5C6BC0",
        '500': "#3F51B5",
        '600': "#3949AB",
        '700': "#303F9F",
        '800': "#283593",
        '900': "#1A237E",
      },
      black: "#000",
      white: "#fff"
    },

    fontFamily: {
      sans: ['Poppins', 'Helvetica', 'Arial', 'Verdana', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'serif'],
    },

    fontSize: {
      sm: ['0.75rem', '1rem'], // font-size: 12px, line-height: 16px
			md: ['0.875rem', '1.25rem'], // font-size: 14px, line-height: 20px
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

    extend: {
      height: {
        '128':  '32rem', // 512px
        '144':  '36rem', // 576px
        '160':  '40rem', // 640px
        '176':  '44rem', // 704px
        '192':  '48rem', // 768px
        '200':  '50rem', // 800px
        '208':  '53rem', // 848px
        '224':  '56rem', // 896px
        '240':  '60rem', // 960px
        '256':  '64rem', // 1024px
      }
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),

    plugin(function({ addVariant }) {
      addVariant('optional', '&optional')
      addVariant('not-last', '&:not(:last-child)')
      addVariant('hocus', ['&:hover', '&focus'])
    })
  ],
};
