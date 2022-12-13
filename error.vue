<template>
    <div>
        <Head>
            <Title>Saturdays.io - Page not found</Title>
            <Meta name="description" content="Saturdays.io - 404 error not found" />
        </Head>

        <Nav />

        <section id="main" class="hero isFullheightWithNavbar">
            <div class="heroBody">
                <div class="container hasTextCentered">
                    <div class="pb6">
                        <h1 class="isSize2 isSize3Mobile hasTextCentered hasTextWeightBold hasTextWhite">Page not found</h1>
                        <p class="subtitle hasTextGreyLight">The page you are looking for does not exist.</p>
                    </div>
                    <div>
                        <NuxtLink to="/">
                            <button class="button isLink">
                                <p class="isSize5"><strong>Go home</strong></p>
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