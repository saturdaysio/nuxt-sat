<template>
    <div class="flex flex-col h-screen justify-between bg-black">

        <Head>
            <Title>Saturdays.io - Page not found</Title>
            <Meta name="description" content="Saturdays.io - 404 page not found" />
        </Head>

        <NavBar />

        <div class="container lg:max-w-5xl mx-auto px-4">
            <div class="flex flex-col justify-center">
                <div class="pb-8">
                    <div class="text-center pb-2">
                        <h1 class="text-4xl font-bold text-grad-01">Page not found</h1>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-white">The page you are looking for does not exist.</p>
                    </div>
                </div>

                <div class="flex justify-center">
                    <NuxtLink to="/">
                        <button class="button is-link">
                            <p class="text-xl"><strong>Go home</strong></p>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>


<script lang="ts">
    export default {
    layout: 'error',
    }
</script>


<style lang="scss" scoped>
@import '~/assets/styles/tailwind.scss';

.button.is-link {
    color: $white;
    background: none;
    border-image: linear-gradient(120deg, rgba(248, 12, 128), rgba(60, 120, 244)) 1;
    border-width: 4px;
    border-style: solid;
    padding: 2rem;

    &:hover {
        color: $red;
        background: none;
    }
}
</style>