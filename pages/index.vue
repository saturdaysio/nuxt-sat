<template>
    <div class="bg-black">
        <Head>
            <Title>Saturdays.io - 2022</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <Nav />

        <Hero />

        <section class="container mx-auto h-64 py-16">
            <div class="">
                <p class="text-3xl text-center text-white">
                    We're a Data-driven digital studio that focuses on the Design Development and Strategy of digital
                    products.
                </p>
            </div>
        </section>

        <Skill />

        <section id="preview" class="container mx-auto">
            <div class="columns">
                <div class="column">
                    <div class="box">
                        <div class="">
                            <p class="text-3xl text-center text-white">
                                What we're making
                            </p>
                        </div>
                        <div class="media">
                            <picture>
                                <source type="image/webp" srcset="~/assets/img/mobile.webp">
                                <source type="image/png" srcset="~/assets/img/mobile.png">
                                <img src="~/assets/img/mobile.webp" alt="Mobile app interfaces." draggable="false" width="1600"
                                    height="1000">
                            </picture>
                        </div>
                    </div>
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


<style scoped>
</style>