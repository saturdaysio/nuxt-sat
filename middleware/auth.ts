export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()

    if (!user.value && to.path === '/profile') {
        return navigateTo('/')
    } else if (user.value && to.path === '/') {
        return navigateTo('/profile')
    }
})