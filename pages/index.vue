<template>
    <div>

        <Head>
            <Title>Saturdays.io - 2023</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <NavBar />

        <Hero text="Saturdays is a Canadian digital studio based in Toronto" />

        <section class="w-full mx-auto px-4 py-16 bg-black-700">
            <div class="container lg:max-w-6xl mx-auto my-8">
                <h1 class="text-purple-pink">
                    We're a Data-driven digital studio that focuses on the Design, Development and Strategy of digital
                    products.
                </h1>
            </div>
        </section>

        <Skill />

        <section id="preview" class="w-full mx-auto px-4 pt-16 bg-black-900">
            <div class="container mx-auto mt-8">
                <div class="pb-8">
                    <h1 class="text-purple-pink">
                        What we're making
                    </h1>
                </div>
                <div class="lg:max-w-7xl mx-auto">
                    <picture>
                        <source type="image/webp" srcset="~/assets/img/mobile.webp">
                        <source type="image/png" srcset="~/assets/img/mobile.png">
                        <img src="~/assets/img/mobile.webp" alt="Mobile app interfaces" draggable="false" loading="lazy" width="1600" height="1000">
                    </picture>
                </div>
            </div>
        </section>

        <Result />

        <Contact />

        <Footer />

    </div>
</template>


<script lang="ts">
</script>


<style lang="scss">
</style>