import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: "width=device-width, initial-scale=1",
            title: 'Saturdays.io',
            meta: [
                // <meta name="description" content="site description">
                { name: 'description', content: 'Saturdays.io Canadian digital studio' },
                { name: 'keywords', content: 'Saturdays.io, Digital, Studio, Creative, Digital Studio, Creative Studio, UX, UI, Interaction, Product, Design, Development' }
            ],
        },
    },

    css: ["assets/styles/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@use "~/assets/styles/_variables.scss";',
                },
            },
        }
    },

    // Fix for Nuxt RC 9-11
    alias: {
        pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
    },
    modules: [
        '@pinia/nuxt',
        'nuxt-purgecss',

    ],
    // Serverside rendering toggle
    ssr: true,
})
