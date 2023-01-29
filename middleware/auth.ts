export default defineNuxtRouteMiddleware(async(to, _from) => {
    const supabase = useSupabaseClient()
    let { data } = await supabase.auth.getSession()

    if(!data.session){
        const { data, error } = await supabase.auth.refreshSession()
        let { user } = data
        if(!user){
            return navigateTo('/signin')
        }
    } else {
        if(!data.session.user){
            return navigateTo('/signin')
        }
    }
})