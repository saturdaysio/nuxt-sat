<template>
    <div>

        <NavBar />

<section class="container mx-auto px-4">
    <div class="pb-8">
        <span class="text-white">Logged in</span>
    </div>
    <div class="">
        <Button :cta="'Signout'" :to="'/signin'" />
        <Button class="button primary" @click="signOut" :cta="'Sign Out'" />
    </div>
</section>


    </div>
</template>


<script setup lang="ts">

    useHead({
        title: 'Saturdays.io - Digital studio',
        meta: [
            { name: 'description', content: 'Saturdays.io, Toronto based digital studio' }
        ]
    })

    const supabase = useSupabaseClient()
    const loading = ref(true)
    const user = useSupabaseUser()
    
    async function signOut() {
        const { error } = await supabase.auth.signOut()
    }

    definePageMeta({
        middleware: ['auth']
    })

</script>


<style lang="scss">
</style>