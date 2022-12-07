// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    // Modules
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-purgecss',
        '@nuxtjs/strapi',
    ],

    // Head & HTML
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            charset: 'utf-8',
            viewport: "width=device-width, initial-scale=1",
            title: 'Saturdays.io - Tailwind test',
            meta: [
                // <meta name="description" content="site description">
                { name: 'description', content: 'Saturdays.io Canadian digital studio' },
                { name: 'keywords', content: 'Saturdays.io, Digital, Studio, Creative, Digital Studio, Creative Studio, UX, UI, Interaction, Product, Design, Development' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
                // Add Google fonts resource
              ]
        },
    },

    // Static site rendering mode
    ssr: false,


    // Global CSS/SCSS
    css: [
        "~/assets/css/tailwind.css"
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,


    // Vite config
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '',
                },
            },
            modules: {
                localsConvention: 'dashes',
                generateScopedName: "[local]_[hash:base64:4]",
            },
        },
    },


    // Strapi config
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
    },

})
