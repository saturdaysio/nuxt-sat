<template>
    <section id="skills" class="container my-6 py-6 px-4 has-background-black">
        <div class="columns">
            <div class="column">
                <div class="box has-background-black">
                    <div class="pb-2">
                        <h1 class="is-size-2 has-text-centered has-text-weight-bold has-text-white">
                            Our Stats
                        </h1>
                    </div>
                    <div class="columns">
                        <div class="column" v-for="item in resultStore.resultJson.result" :key="item.id">
                            <h1 class="is-size-3 has-text-weight-bold text-gradient-blue-red-dark">{{ item.title }}</h1>
                            <p class="is-size-5 has-text-white">{{ item.desc }}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { useResultStore } from "~/store/result";

export default {
    setup() {
        const resultStore = useResultStore()

        return { resultStore }
    }
}
</script>

<style lang="scss" scoped>

</style>