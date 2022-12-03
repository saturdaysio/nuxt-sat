// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
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

    // Static site rendering mode
    ssr: true,

    // CSS/SCSS
    css: [
        "assets/styles/main.module.scss"
    ],


    // Vite config
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@use "~/assets/styles/_variables.module.scss";',
                },
            },
            modules: {
                scopeBehaviour: 'local',
                localsConvention: 'dashes',
                generateScopedName: "[local]_[hash:base64:4]",
                
            },
        },
    },


    // Modules
    modules: [
        '@pinia/nuxt',
        'nuxt-purgecss',
        '@nuxtjs/strapi',
    ],


    // Strapi config
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
    },
})
