<template>
    <div class="bg-black">

        <Head>
            <Title>Saturdays.io - Page not found</Title>
            <Meta name="description" content="Saturdays.io - 404 page not found" />
        </Head>

        <NavBar />

        <div class="container lg:max-w-5xl mx-auto px-4 py-20">
            <div class="">
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
                        <Button :cta="'Go Home'" to="/" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script lang="ts">
</script>


<style lang="scss" scoped>
</style>