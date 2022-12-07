<template>
    <section id="stats" :class="[$style.container, $style.my6, $style.py6, $style.px4]">
        <div :class="$style.columns">
            <div :class="$style.column">
                <div :class="[$style.box, $style.hasBackgroundBlack]">
                    <div :class="$style.pb6">
                        <h1 :class="[$style.isSize2, $style.hasTextCentered, $style.hasTextWeightBold, $style.hasTextWhite]">
                            Our stats
                        </h1>
                    </div>
                    <div :class="[$style.isFlex, $style.isFlexWrapWrap]">
                        <div :class="[$style.resultCard, $style.pb6]" v-for="item in resultStore.resultJson.result" :key="item.id">
                            <h1 :class="[$style.isSize1, $style.hasTextWeightBold, $style.textGradientBlueRedDark]">{{ item.title }}</h1>
                            <p :class="[$style.isSize5, $style.hasTextWhite]">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { useCssModule } from 'vue'
    import { useResultStore } from "~~/store/result";


    export default {
        setup() {
            useCssModule()
            const $style = useCssModule()

            const resultStore = useResultStore()

            return { resultStore }
        }
    }
</script>

<style lang="scss" module scoped>
@import '~/assets/styles/main.module.scss';

    .resultCard {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 50%;
        flex-shrink: 0;
        padding: 0 2rem;
    }

    @media only screen and (max-width: 800px) {
        .resultCard {
            width: 100%;
            padding: 0 1rem;
        }
    }
</style>