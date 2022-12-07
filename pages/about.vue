<template>
    <div class="bg-black">

        <Head>
            <Title>About Saturdays.io</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <Nav />

        <section :class="[$style.container, $style.mxAuto, $style.py16]">
            <div :class="$style.content">
                <p :class="[$style.text6xl, $style.textCenter, $style.textWhite]">
                    We bridge the gap between design and technology
                </p>
            </div>
        </section>

        <section id="ethics" :class="[$style.container, $style.mxAuto, $style.py16]">
            <div>
                <div :class="[$style.container, $style.pb4]">
                    <p :class="[$style.text4xl, $style.textCenter, $style.textWhite, $style.pb8]">Keeping it 100</p>
                    <p :class="[$style.textMd, $style.textWhite]">We believe that our work and ethics
                    define who we are. We're Human-centered Designers and Developers behind some of North America's
                    biggest mobile apps and digital brands, looking to make a net-positive impact in the world.</p>
                </div>
                <div :class="$style.container">
                <p :class="[$style.textMd, $style.textWhite]">Our approach to building software
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


<style module scoped>
    @import '~/assets/css/tailwind.css';
</style>