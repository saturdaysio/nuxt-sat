export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()

    if (!user.value && to.path === '/index') {
        navigateTo('/')
    } else if (user.value && to.path === '/') {
        navigateTo('notes')
    }
})