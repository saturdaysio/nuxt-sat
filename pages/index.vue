<template>
    <div>
        <Head>
            <Title>Saturdays.io - 2022</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <Nav />

        <Hero />

        <section :class="[$style.container, $style.my6, $style.py6, $style.px4]">
            <div :class="[$style.content, $style.isMedium]">
                <h1 :class="[$style.isSize2, $style.isSize3Mobile, $style.hasTextCentered, $style.hasTextWeightBold, $style.textGradientBlueRedDark]">
                    We're a Data-driven digital studio that focuses on the Design, Development, and Strategy of digital
                    products.
                </h1>
            </div>
        </section>

        <Skill />

        <section id="preview" :class="[$style.container, $style.my6, $style.py6, $style.px4, $style.hasBackgroundBlack]">
            <div :class="$style.columns">
                <div :class="$style.column">
                    <div :class="[$style.box, $style.hasBackgroundBlack]">
                        <div :class="$style.pb2">
                            <h1 :class="[$style.isSize2, $style.hasTextCentered, $style.hasTextWeightBold, $style.hasTextWhite]">
                                What we're making
                            </h1>
                        </div>
                        <div :class="$style.media">
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
    import { useCssModule } from 'vue'

    export default {
        setup() {
            useCssModule()
            const $style = useCssModule()
        }
    }

</script>


<style lang="scss" module>
@import '~/assets/styles/main.module.scss';

</style>