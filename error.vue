<template>
    <div>
        <Head>
            <Title>Saturdays.io - Page not found</Title>
            <Meta name="description" content="Saturdays.io - 404 error not found" />
        </Head>

        <Nav />

        <section id="main" class="hero is-fullheight-with-navbar">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="pb-6">
                        <h1 class="is-size-2 is-size-3-mobile has-text-centered has-text-weight-bold has-text-white">Page not found</h1>
                        <p class="subtitle has-text-grey-light">The page you are looking for does not exist.</p>
                    </div>
                    <div>
                        <NuxtLink to="/">
                            <button class="button is-link">
                                <p class="is-size-5"><strong>Go home</strong></p>
                            </button>
                        </NuxtLink>
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