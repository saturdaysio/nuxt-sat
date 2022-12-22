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
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
                // Add Google fonts resource
              ]
        },
    },

    // Static site rendering mode
    ssr: true,


    // Global CSS/SCSS
    css: [
        "@/assets/styles/tailwind.scss"
    ],


    // Modules
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-purgecss',
        '@nuxtjs/strapi',
    ],


    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    nitro: {
        prerender: {
          routes: ['/404.html']
        }
     },


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
        build: {
            cssCodeSplit: true,
            // https://rollupjs.org/guide/en/#big-list-of-options
            rollupOptions: {},
            sourcemap: false,
        },
    },

    vue: {
        compilerOptions: {
            sourceMap: false,
        }
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
