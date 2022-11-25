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
    css: ["assets/styles/main.scss"],

    // Postcss config
    // Figure out how to apply CSS in JSON to .vue files
//    postcss: {
//        plugins: {
//            'postcss-modules': {
//                localsConvention: "camelCase",
//                generateScopedName: "[local]__[hash:base64:6]",
//            }
//        }
//   },

    // Vite config
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@use "~/assets/styles/_variables.scss";',
                },
            },
            modules: {
                generateScopedName: "[hash:base64:4]",
            },
        },
    },

    // Webpack config
    webpack: {
        loaders: {
            cssModules: {
                modules: {
                    localIdentName: "[local]_[hash:base64:4]",
                }
            }
        }
    },



    // Modules
    modules: [
        '@pinia/nuxt',
        'nuxt-purgecss',
        '@nuxtjs/strapi',
    ],

    strapi: {
        // Options
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
    },
})
