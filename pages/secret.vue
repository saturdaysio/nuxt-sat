<template>
    <div>

        <NavBar />

        <section class="w-full mx-auto px-4 py-16 bg-black-900">
            <div class="lg:container mx-auto my-8">
                <div class="pb-8">
                    <span class="text-white">STATE: Logged in</span>
                </div>
   
                <div id="logout">
                    <Button class="button primary" @click="signOut" :cta="'Sign out'" />
                </div>
            </div>
        </section>

        <Footer />

    </div>
</template>


<script setup>

    // Page meta info
    useHead({
        title: 'Saturdays.io - Digital studio',
        meta: [
            { name: 'description', content: 'Saturdays.io, Toronto based digital studio' }
        ]
    })


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