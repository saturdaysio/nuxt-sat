<template>
    <footer class="footer">
        <div class="flex flex-between">
            <div class="levelLeft">
                <div class="pl2">
                    <p class="text-white">
                        &#169; 2016-2022 Saturdays.io Inc
                    </p>
                </div>
            </div>
            <div class="flex flex-end">
                <div class="navbar-item pr-4">
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