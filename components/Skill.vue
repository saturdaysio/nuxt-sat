<template>
    <section id="skills" class="container lg:max-w-7xl mx-auto px-4 py-16">
        <div class="flex flex-col">
            <div class="pb-8">
                        <h1 class="text-3xl text-center font-bold text-white">
                            What we do
                        </h1>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="group flex flex-col py-8 px-6" v-for="item in skillStore.skillJson.service" :key="item.id">
                            <h1 class="text-2xl font-bold text-grad-01">{{ item.title }}</h1>
                            <ul>
                                <li class=" text-white" v-for="skill in item.list" :key="skill.li">{{ skill.li }}</li>
                            </ul>
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

.group {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 25%;
        flex-shrink: 0;
    }


    @media only screen and (max-width: 1023px) {
        .group {
            width: 50%;
        }

    }

    @media only screen and (max-width: 640px) {
        .group {
            width: 100%;
        }
    }
</style>