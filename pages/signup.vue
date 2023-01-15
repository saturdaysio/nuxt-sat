<template>
    <div class="flex flex-col h-screen justify-between">

        <NavBar />

        <section id="default" class="container max-w-md mx-auto px-4">

            <div class="">
                <form
                    @submit.prevent="() => (isSignUp ? signUp() : signIn ())"
                    class="rounded px-6 py-8 bg-black-500">

                    <h1 class="text-3xl lg:text-4xl text-center font-bold text-grad-01 pb-8">
                        Sign up
                    </h1>

                    <div id="email" class="mb-8">
                        <label class="block text-white text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input id="email" type="email" placeholder="Email address" v-model="email"
                            class="appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none">
                    </div>

                    <div id="password" class="mb-8">
                        <label class="block text-white text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input id="password" type="current-password" placeholder="********" v-model="password" 
                            class=" appearance-none border rounded w-full py-2 px-4 text-gray-700 mb-2 leading-tight focus:outline-none">
                    </div>

                    <div class="flex flex-col items-center justify-between">
                        <button type="submit" @click="signUp" class="button primary w-full rounded font-bold mb-4">
                            Submit
                        </button>

                        <NuxtLink class="inline-block align-baseline text-sm text-blue hover:text-purple-800" href="/signin">
                            Have an account? Sign in
                        </NuxtLink>
                    </div>

                </form>
            </div>

        </section>

        <Footer />

    </div>
</template>


<script setup lang="ts">

    useHead({
        title: 'Saturdays.io - Sign Up',
        meta: [
            { name: 'description', content: 'Saturdays.io sign up page' },
            { name: 'keywords', content: 'Saturdays.io, Digital, Studio, Creative, Digital Studio, Creative Studio,' },
        ]
    })


    const client = useSupabaseClient()
    const email = ref('')
    const password = ref('')
    const isSignUp = ref(false)


    // Sign up function
    const signUp = async () => {
        const {data, error} = await client.auth.signUp({
            email: email.value,
            password: password.value,
        })

        console.log('user', user)
        console.log('error', error)
    }

    // Sign in function
    const signIn = async () => {
        const {data, error} = await client.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        })
    }

    const user = useSupabaseUser()

    // Watch user state
    onMounted(() => {
        watchEffect(() => {
            if (user.value) {
                navigateTo('/secret')
            }

        })
    })
</script>


<style lang="scss">
</style>