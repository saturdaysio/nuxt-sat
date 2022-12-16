<template>
    <section id="skills" class="container my-16 mx-auto py-6 px-4">
        <div class="flex flex-col">
            <div class="">
                <div class="">
                    <div class="pb-8">
                        <h1 class="text-3xl text-center font-bold text-white">
                            What we do
                        </h1>
                    </div>
                    <div class="columns">
                        <div class="column" v-for="item in skillStore.skillJson.service" :key="item.id">
                            <h1 class="text-2xl font-bold text-grad-01">{{ item.title }}</h1>
                            <ul>
                                <li class=" text-white" v-for="skill in item.list" :key="skill.li">{{ skill.li }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { useSkillStore } from "~~/store/skill";

    export default {
        setup() {
            const skillStore = useSkillStore()
            return { skillStore }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/assets/styles/tailwind.scss';

</style>