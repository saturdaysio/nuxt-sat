<template>
    <footer class="w-full mx-auto px-4 py-8 bg-black-900">
        <div class="lg:container mx-auto">
            <div class="flex flex-col-reverse items-center md:flex-row justify-between">
                <div class="copyright flex items-center px-4">
                    <p class="text-white">
                        &#169; Saturdays.io Inc. 2016 - 2023
                    </p>
                </div>
                <div class="flex flex-end pb-4 md:pb-0">
                    <div class="nav-item">
                        <NuxtLink to="/terms-of-service" active-class="active"
                            class="px-4 py-2 flex items-center text-sm font-bold hover:opacity-75">
                            <strong>Terms of Service</strong>
                        </NuxtLink>
                    </div>
                    <div class="nav-item">
                        <NuxtLink to="/privacy-policy" active-class="active"
                            class="px-4 py-2 flex items-center text-sm font-bold hover:opacity-75">
                            <strong>Privacy Policy</strong>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>


<script lang="ts">
</script>


<style lang="scss">
</style>