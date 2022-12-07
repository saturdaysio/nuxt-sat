<template>
    <footer :class="$style.footer">
        <div :class="[$style.level, $style.isMobile]">
            <div :class="$style.levelLeft">
                <div :class="$style.pl2">
                    <p :class="$style.hasTextWhite">
                        &#169; 2016-2022 Saturdays.io Inc
                    </p>
                </div>
            </div>
            <div :class="[$style.levelLeft, $style.isMobile]">
                <div :class="$style.navbarItem">
                    <NuxtLink to="/tos" :active-class="$style.active">
                        <strong>Terms</strong>
                    </NuxtLink>

                </div>
                <div :class="$style.navbarItem">
                    <NuxtLink to="/privacy" :active-class="$style.active">
                        <strong>Privacy</strong>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import { useCssModule } from 'vue'


    export default {
        setup() {
            useCssModule()
            const $style = useCssModule()
        }
    }
</script>

<style lang="scss" module scoped>
@import '~/assets/styles/main.module.scss';

.footer {
    padding: 3rem 0.75rem;
    background-color: $black;
}

.navbar-item {
    color: $blue;

    &:hover {
        background: none;
        color: $blue;
    }
}

</style>