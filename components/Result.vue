<template>
    <section id="stats" class="container mx-auto px-4 py-16">
        <div class="container lg:max-w-5xl mx-auto">
            <div class="pb-8">
                <h1 class="text-3xl text-center font-bold text-white">
                    Our stats
                </h1>
            </div>
            <div class="flex flex-wrap">
                <div class="resultCard my-8 md:my-4" v-for="item in resultStore.resultJson.result" :key="item.id">
                    <h1 class="text-5xl font-light text-grad-01">{{ item.title }}</h1>
                    <p class="text-white">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { useResultStore } from "~~/store/result";


export default {
    setup() {
        const resultStore = useResultStore()
        return { resultStore }
    }
}
</script>

<style lang="scss" scoped>
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