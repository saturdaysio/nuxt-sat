<template>
    <footer class="container mx-auto">
        <div class="footer">
        <div class="flex justify-between">
            <div class="">
                <div class="copyright">
                    <p class="text-white">
                        &#169; 2016-2022 Saturdays.io Inc
                    </p>
                </div>
            </div>
            <div class="flex flex-end">
                <div class="nav-item pr-8">
                    <NuxtLink to="/tos" active-class="active" class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75">
                        <strong>Terms</strong>
                    </NuxtLink>

                </div>
                <div class="nav-item">
                    <NuxtLink to="/privacy" active-class="active" class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75">
                        <strong>Privacy</strong>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    </footer>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
@import '~/assets/styles/tailwind.scss';

footer {
    padding: 4rem 1rem;
}

</style>