<template>
    <section id="clients" class="container my-16 py-8 px-4">
        <div class="content">
            <h1 class="text-2xl text-center font-bold text-white">We partner with brands brave
                enough to do things differently.</h1>
        </div>

        <div id="grid" class="flex flex-wrap">
            <div class="logo" v-for="item in clientStore.clientJson.clients" :key="item.id">
                <figure class="">
                    <img class="w-36 h-36" :src="item.imgSrc" :alt="item.imgAlt" :width="item.width" :height="item.height">
                </figure>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
    import { useClientStore } from "~~/store/client";

    export default {
        setup() {
            const clientStore = useClientStore()
            return { clientStore }
        }
    }

</script>

<style lang="scss" scoped>
@import '~/assets/styles/tailwind.scss';

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