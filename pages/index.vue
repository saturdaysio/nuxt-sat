<template>
    <div class="bg-black">

        <Head>
            <Title>Saturdays.io - 2022</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <NavBar />

        <Hero />

        <section class="container lg:max-w-5xl mx-auto px-4 py-16">
            <div class="">
                <h1 class="text-3xl text-center font-bold text-grad-01">
                    We're a Data-driven digital studio that focuses on the Design Development and Strategy of digital
                    products.
                </h1>
            </div>
        </section>

        <Skill />

        <section id="preview" class="container mx-auto px-4 py-16">
            <div class="">
                <div class="pb-8">
                    <h1 class="text-3xl text-center font-bold text-grad-01">
                        What we're making
                    </h1>
                </div>
                <div class="container lg:max-w-7xl mx-auto">
                    <picture>
                        <source type="image/webp" srcset="~/assets/img/mobile.webp">
                        <source type="image/png" srcset="~/assets/img/mobile.png">
                        <img src="~/assets/img/mobile.webp" alt="Mobile app interfaces." draggable="false" width="1600"
                            height="1000">
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