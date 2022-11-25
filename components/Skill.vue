<template>
    <section id="skills" class="container my-6 py-6 px-4">
        <div class="columns">
            <div class="column">
                <div class="box has-background-black">
                    <div class="pb-6">
                        <h1 class="is-size-2 has-text-centered has-text-weight-bold has-text-white">
                            What we do
                        </h1>
                    </div>
                    <div class="columns">
                        <div class="column" v-for="item in skillStore.skillJson.service" :key="item.id">
                            <h1 class="is-size-3 has-text-weight-bold text-gradient-blue-red-dark">{{ item.title }}</h1>
                            <ul>
                                <li class="is-size-6 has-text-white" v-for="skill in item.list" :key="skill.li">{{ skill.li }}</li>
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

</style>