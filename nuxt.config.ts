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


    // nuxt-image module
    image: {
        format: ['webp'],
        provider: 'ipx',
        quality: 85,
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1600,
        },
    },


    nitro: {
        prerender: {
            concurrency: 1
        }
    },

    // Hybrid Rendering setup
    // https://nuxt.com/docs/guide/concepts/rendering
    routeRules: {
        // Homepage pre-rendered at build time
        '/': { prerender: true },
        // Page generated on-demand, revalidates in background
        '/about/**': { swr: true },
        // Blog post generated on-demand once until next deploy
        '/terms-of-service': { isr: true },
        '/privacy-policy': { isr: true },
        // Admin dashboard renders only on client-side
        '/admin/**': { ssr: false },
        // Add CORS headers on API routes
        '/api/**': { cors: true },
        // Redirects legacy urls
        '/old-page': { redirect: '/' },
    },


    // Disables SPA loading animation
    spaLoadingTemplate: false,


    // Temporary fix for the node-glob bug that fails the Netlify build
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
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
