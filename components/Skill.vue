<template>
    <section id="skills" class="container mx-auto py-16">
        <div class="">
            <div class="">
                <div class="container">
                    <div class="text-center pb-8">
                        <p class="text-3xl text-white">
                            What we do
                        </p>
                    </div>
                    <div class="flex flex-row items-stretch gap-8">
                        <div class="content-center" v-for="item in skillStore.skillJson.service" :key="item.id">
                            <p class="text-xl text-white">{{ item.title }}</p>
                            <ul>
                                <li class="text-white" v-for="skill in item.list" :key="skill.li">{{ skill.li }}</li>
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

<style scoped>
@import '~/assets/css/tailwind.css';

</style>