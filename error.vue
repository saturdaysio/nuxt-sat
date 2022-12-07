<template>
    <div>
        <Head>
            <Title>Saturdays.io - Page not found</Title>
            <Meta name="description" content="Saturdays.io - 404 error not found" />
        </Head>

        <Nav />

        <section id="main" :class="[$style.hero, $style.isFullheightWithNavbar]">
            <div :class="$style.heroBody">
                <div :class="[$style.container, $style.hasTextCentered]">
                    <div :class="$style.pb6">
                        <h1 :class="[$style.text5xl, $style.isSize3Mobile, $style.hasTextCentered, $style.hasTextWeightBold, $style.hasTextWhite]">Page not found</h1>
                        <p :class="[$style.subtitle, $style.hasTextGreyLight]">The page you are looking for does not exist.</p>
                    </div>
                    <div>
                        <NuxtLink to="/">
                            <button :class="[$style.button, $style.isLink]">
                                <p :class="$style.isSize5"><strong>Go home</strong></p>
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
    import { useCssModule } from 'vue'


    export default {
        setup() {
            useCssModule()
            const $style = useCssModule()
        }
    }
</script>


<style lang="scss" module scoped>

    .button.is-link {
        color: #fff;
        background: none;
        border-image: linear-gradient(120deg, rgba(248,12,128), rgba(60,120,244)) 1;
        border-width: 4px;
        border-style: solid;
        padding: 2rem;

        &:hover {
            color: red;
            background: none;
        }
}
</style>