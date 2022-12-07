<template>
    <section id="cta" :class="[$style.container, $style.mxAuto, $style.py16]">
        <div class="">
            <div :class="$style.mb4">
                <p :class="[$style.text4xl, $style.textCenter, $style.textWhite]">Have an interesting project?</p>
            </div>
            <div :class="[$style.container, $style.alignMiddle]">
                <div :class="$style.levelItem">
                    <NuxtLink to="mailto:info@saturdays.io">
                        <button :class="[$style.button, $style.isLink]">
                            <p :class="[$style.textMd, $style.uppercase]"><strong>Let's talk</strong></p>
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

<style lang="scss" module scoped>
@import '~/assets/css/tailwind.css';

.button.is-link {
    color: #fff;
    background: none;
    border-image: linear-gradient(120deg, rgba(248,12,128), rgba(60,120,244)) 1;
    border-width: 4px;
    border-style: solid;
    padding: 2rem;

    &:hover {
        background: none;
    }
}
</style>