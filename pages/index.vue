<template>
    <div>

        <Head>
            <Title>Saturdays.io - 2022</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <Nav />

        <Hero />

        <section id="grid" class="container has-background-black">
            <div class="columns">
                <div class="column">
                    <div class="box has-background-black">
                        <div class="pb-2">
                            <h1 class="is-size-2 has-text-centered has-text-white">
                                What we're making
                            </h1>
                        </div>
                        <div class="media">
                            <picture>
                                <source type="image/webp" srcset="~/assets/img/mobile.webp">
                                <source type="image/png" srcset="~/assets/img/mobile.png">
                                <img src="~/assets/img/mobile.webp" alt="RENAME." draggable="false" width="1600"
                                    height="1000">
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />

    </div>
</template>


<script lang="ts" setup>
</script>


<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.tag:not(body).is-success {
    background-color: #1CD0A0;
    color: $black;
}

.button.is-link {
    color: $navy;
    background: none;
    border-color: $navy;

    &:hover {
        color: $blue;
        background: none;
        border-color: $blue;
    }
}
</style>