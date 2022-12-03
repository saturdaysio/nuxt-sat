<template>
    <section id="cta" :class="[$style.container, $style.my6, $style.py6, $style.px4]">
        <div class="">
            <div :class="$style.pb6">
                <h1 :class="[$style.isSize2, $style.isSize3Mobile, $style.hasTextCentered, $style.hasTextWeightBold, $style.hasTextWhite]">Have an interesting project?</h1>
            </div>
            <div :class="[$style.level, $style.isCentered]">
                <div :class="$style.levelItem">
                    <NuxtLink to="mailto:info@saturdays.io">
                        <button :class="[$style.button, $style.isLink]">
                            <p :class="$style.isSize4"><strong>Let's talk</strong></p>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
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