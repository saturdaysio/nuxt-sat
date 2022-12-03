<template>
    <div>

        <Head>
            <Title>About Saturdays.io</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <Nav />

        <section :class="[$style.container, $style.mt6, $style.py6, $style.px4]">
            <div :class="[$style.content, $style.my6, $style.isMedium]">
                <h1 :class="[$style.isSize1, $style.hasTextCentered, $style.hasTextWeightBold, $style.hasTextWhite]">
                    We bridge the gap between design and technology
                </h1>
            </div>
        </section>

        <section id="ethics" :class="[$style.container, $style.my6, $style.py6, $style.px4]">
            <div :class="$style.content">
                <div :class="$style.content">
                    <h1 :class="[$style.isSize2, $style.hasTextCentered, $style.textGradientBlueRedDark]">Keeping it 100</h1>
                    <p :class="[$style.isSize5, $style.hasTextWeightNormal, $style.hasTextGreyLight]">We believe that our work and ethics
                    define who we are. We're Human-centered Designers and Developers behind some of North America's
                    biggest mobile apps and digital brands, looking to make a net-positive impact in the world.</p>
                </div>
                <div :class="$style.content">
                <p :class="[$style.isSize5, $style.hasTextWeightNormal, $style.hasTextGreyLight]">Our approach to building software
                    prioritizes accessibility, user-centric design, and inclusion. We research and generate ideas, then
                    build, test, and iterate on them using real-world analytics and actionable KPIs. The emphasis on
                    data-driven design, diversity, user empathy, and sustainability aren't buzzwords, they're why we
                    win.</p>
                </div>
            </div>
        </section>

        <Client />

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


<style lang="scss" module scoped>
    @import '~/assets/styles/main.module.scss';
</style>