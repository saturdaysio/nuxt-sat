export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser()
  if (!user.value) {
    return '/signin'
  }
})
