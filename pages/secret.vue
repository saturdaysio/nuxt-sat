<template>
    <div>

        <NavBar />

        <section class="container mx-auto px-4">
            <div class="pb-8">
                <span class="text-white">Logged in..</span>
            </div>
            <div class="">
                <Button class="" @click="signOut" :cta="'Sign out'" />
            </div>
        </section>

        <Footer />

    </div>
</template>


<script setup lang="ts">

    // Page meta info
    useHead({
        title: 'Saturdays.io - Digital studio',
        meta: [
            { name: 'description', content: 'Saturdays.io, Toronto based digital studio' }
        ]
    })


    // Supabase setup
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()
    const router = useRouter()


    definePageMeta({
        middleware: ['auth']
    })

    // Signout function
    const signOut = async () => {
        await supabase.auth.signOut()
        // Need proper watch user state
        router.push('/')
    }

</script>


<style lang="scss">
</style>