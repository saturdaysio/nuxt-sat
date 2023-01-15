<template>
    <div>

        <NavBar />

<section class="container mx-auto px-4">
    <div class="pb-8">
        <span class="text-white">Logged in</span>
    </div>
    <div class="">
        <Button class=" " @click="signOut" :cta="'Sign out'" />
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

    

</script>


<style lang="scss">
</style>