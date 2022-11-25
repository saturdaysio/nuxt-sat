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

    // Fix for Nuxt RC 9-11, Commented out Nov 24 in 3.0
    alias: {
        pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
    },

    // Modules
    modules: [
        '@pinia/nuxt',
        'nuxt-purgecss',
    ],

    // Build config
    build: {
    },
})
