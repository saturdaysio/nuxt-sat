<template>
    <div class="flex flex-col h-screen justify-between">

        <NavBar />

        <section id="default" class="container max-w-md mx-auto px-4">

            <div class="">
                <form
                    @submit.prevent=""
                    class="rounded px-6 py-8 bg-black-500">

                    <h1 class="text-3xl lg:text-4xl text-center font-bold text-grad-01 pb-8">
                        Sign in
                    </h1>

                    <div id="email" class="mb-8">
                        <label class="block text-white text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input id="email" type="email" placeholder="Email address" class="appearance-none border rounded w-full py-2 px-4 text-gray-700 focus:outline-none">
                    </div>

                    <div id="password" class="mb-8">
                        <label class="block text-white text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input id="password" type="current-password" placeholder="********" class=" appearance-none border rounded w-full py-2 px-4 text-gray-700 mb-2 focus:outline-none">
                    </div>

                    <div class="flex flex-col items-center justify-between">
                        <button type="submit" @click="" class="button primary w-full rounded font-bold mb-4">
                            Submit
                        </button>
                    </div>

                </form>
            </div>

        </section>

        <Footer />

    </div>
</template>


<script setup>

    // Page meta info
    useHead({
        title: 'Saturdays.io - Sign in',
        meta: [
            { name: 'description', content: 'Saturdays.io sign in page' },
            { name: 'keywords', content: 'Saturdays.io, Digital, Studio, Creative, Digital Studio, Creative Studio,' },
        ]
    })


</script>


<style lang="scss">
</style>