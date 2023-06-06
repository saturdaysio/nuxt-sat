// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    // Head & HTML
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'Saturdays.io',
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                // <meta name="description" content="site description">
                { name: 'description', content: 'Saturdays.io - a Canadian digital studio' },
                { name: 'keywords', content: 'Saturdays.io, Digital, Studio, Creative, Digital Studio, Creative Studio, UX, UI, Interaction, Product, Design, Development' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
              ]
        },
        pageTransition: { name: 'page', mode: 'out-in' },
    },

    // Server-side rendering mode
    // https://nuxt.com/docs/api/configuration/nuxt-config/#ssr
    ssr: false,


    // Global CSS/SCSS
    css: [
        "@/assets/styles/tailwind.scss"
    ],


    // Modules
    modules: [
        '@nuxt/image',
        '@nuxtjs/robots',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-purgecss',
    ],


    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,


    // @nuxt/image config options
    image: {
        dir: 'assets/img',
        inject: true,
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
          },
    },


    // Vite build config
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

    // https://stackoverflow.com/questions/74003458/cannot-find-module-pinia-dist-pinia-mjs-when-using-run-dev
    alias: {
        'pinia': '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
    },


})
