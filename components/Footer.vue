<template>
    <footer class="footer container mx-auto">
        <div class="flex justify-between">
            <div class="">
                <div class="copyright">
                    <p class="text-white">
                        &#169; 2016-2022 Saturdays.io Inc
                    </p>
                </div>
            </div>
            <div class="flex flex-end">
                <div class="navbar-item pr-8">
                    <NuxtLink to="/tos" active-class="active">
                        <strong>Terms</strong>
                    </NuxtLink>

                </div>
                <div class="navbar-item">
                    <NuxtLink to="/privacy" active-class="active">
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
@import '~/assets/styles/tailwind.scss';

.footer {
    height: 4rem;
    padding: 4rem 0;
}

.navbar-item {
    color: $blue;

    &:hover {
        background: none;
        color: $blue;
    }
}

</style>