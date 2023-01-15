export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()

    if (!user.value && to.path === '/secret') {
        navigateTo('/')
    } else if (user.value && to.path === '/') {
        navigateTo('secret')
    }
})