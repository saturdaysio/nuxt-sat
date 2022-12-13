<template>
    <div class="bg-black">
        <Head>
            <Title>Saturdays.io - Page not found</Title>
            <Meta name="description" content="Saturdays.io - 404 error not found" />
        </Head>

        <Nav />

        <section id="main" class="container my-16 py-8 px-4">
            <div class=" ">
                <div class="flex flex-col ">
                    <div class="pb-8">
                        <h1 class="text-4xl text-center font-bold text-white">Page not found</h1>
                        <p class=" text-white">The page you are looking for does not exist.</p>
                    </div>
                    <div>
                        <NuxtLink to="/">
                            <button class="button is-link">
                                <p class="text-xl"><strong>Go home</strong></p>
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <Footer />

    </div>
</template>


<script lang="ts">
</script>


<style lang="scss" scoped>
    @import '~/assets/styles/tailwind.scss';

    .button.is-link {
        color: $white;
        background: none;
        border-image: linear-gradient(120deg, rgba(248,12,128), rgba(60,120,244)) 1;
        border-width: 4px;
        border-style: solid;
        padding: 2rem;

        &:hover {
            color: $red;
            background: none;
        }
}
</style>