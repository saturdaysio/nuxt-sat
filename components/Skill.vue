<template>
    <section id="skills" :class="[$style.container, $style.my6, $style.py6, $style.px4]">
        <div :class="$style.columns">
            <div :class="$style.column">
                <div :class="[$style.box, $style.hasBackgroundBlack]">
                    <div :class="$style.pb6">
                        <h1 :class="[$style.isSize2, $style.hasTextCentered, $style.hasTextWeightBold, $style.hasTextWhite]">
                            What we do
                        </h1>
                    </div>
                    <div :class="$style.columns">
                        <div :class="$style.column" v-for="item in skillStore.skillJson.service" :key="item.id">
                            <h1 :class="[$style.isSize3, $style.hasTextWeightBold, $style.textGradientBlueRedDark]">{{ item.title }}</h1>
                            <ul>
                                <li :class="[$style.isSize6, $style.hasTextWhite]" v-for="skill in item.list" :key="skill.li">{{ skill.li }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { useCssModule } from 'vue'
    import { useSkillStore } from "~~/store/skill";

    export default {
        setup() {
            useCssModule()
            const $style = useCssModule()
            const skillStore = useSkillStore()

            return { skillStore }
        }
    }
</script>

<style lang="scss" module>
@import '~/assets/styles/main.module.scss';

</style>