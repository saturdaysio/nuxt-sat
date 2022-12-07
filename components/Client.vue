<template>
    <section id="clients" :class="[$style.container, $style.mxAuto, $style.py16]">
        <div :class="[$style.container, $style.textCenter]">
            <h1 :class="[$style.text4xl, $style.textCenter, $style.textWhite]">We partner with brands brave
                enough to do things differently.</h1>
        </div>

        <div id="grid" :class="[$style.flex, $style.flexRow]">
            <div class="logo" v-for="item in clientStore.clientJson.clients" :key="item.id">
                <figure :class="[$style.image]">
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
@import '~/assets/css/tailwind.css';

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    flex-shrink: 0;
    padding: 0 2rem;
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