<template>
    <footer class="footer has-background-black">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="copyright pl-2">
                    <p class="">
                        <strong class="has-text-white">&#169; 2016-2022 Saturdays.io Inc</strong>
                    </p>
                </div>
            </div>
            <div class="level-left is-mobile">
                <div class="level-item">
                    <NuxtLink to="/tos" class="navbar-item">
                        <strong>Terms</strong>
                    </NuxtLink>

                </div>
                <div class="level-item">
                    <NuxtLink to="/privacy" class="navbar-item">
                        <strong>Privacy</strong>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.footer {
    padding: 3rem 0.75rem;
}

.navbar-item {
    color: $blue;

    &:hover {
        background: none;
        color: $blue;
    }
}

</style>