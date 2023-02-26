// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Saturdays.io',
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                // <meta name="description" content="site description">
                { name: 'description', content: 'Saturdays.io Canadian digital studio' },
                { name: 'keywords', content: 'Saturdays.io, Digital, Studio, Creative, Digital Studio, Creative Studio, UX, UI, Interaction, Product, Design, Development' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                // Add Google fonts resource
                { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Poppins:wght@100;300;400;700;900&display=swap'}
              ]
        },
    },

    // Static site rendering mode
    // Disabled to fix Supabase auth
    ssr: false,


    // Global CSS/SCSS
    css: [
        "@/assets/styles/tailwind.scss"
    ],


    // Modules
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-purgecss',
    ],


    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,


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

})
