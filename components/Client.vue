<template>
    <section id="clients" :class="[$style.container, $style.my6, $style.py6, $style.px4]">
        <div :class="[$style.content, $style.hasTextCentered]">
            <h1 :class="[$style.isSize2, $style.isSize3Mobile, $style.hasTextCentered, $style.hasTextWeightBold, $style.textGradientBlueRedDark]">We partner with brands brave
                enough to do things differently.</h1>
        </div>

        <div id="grid" :class="[$style.isFlex, $style.isFlexWrapWrap]">
            <div :class="$style.logo" v-for="item in clientStore.clientJson.clients" :key="item.id">
                <figure :class="[$style.image, $style.is128x128]">
                    <img :src="item.imgSrc" :alt="item.imgAlt" :width="item.width" :height="item.height">
                </figure>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
    import { useCssModule } from 'vue'
    import { useClientStore } from "~~/store/client";


    export default {
        setup() {
            useCssModule()
            const $style = useCssModule()

            const clientStore = useClientStore()

            return { clientStore }
        }
    }

</script>

<style lang="scss" module scoped>
@import '~/assets/styles/main.module.scss';

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    flex-shrink: 0;
    padding: 0 2rem;

    .image {
        display: inherit;
    }
}


@media only screen and (max-width: 800px) {
    .logo {
        width: 33.33%;
    }

}

@media only screen and (max-width: 640px) {
    .logo {
        width: 50%;
        padding: 0 1rem;
    }
}
</style>