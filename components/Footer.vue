<template>
    <footer class="w-full mx-auto bg-black-900">
        <div class="lg:container px-4 py-8 ">
            <hr class="w-full h-px mx-auto my-4 border-0 rounded md:my-10 bg-gray-900">
            <div class="flex flex-col-reverse items-center md:flex-row justify-between">
                <div id="copyright" class="flex items-center">
                    <p class="text-white">
                        &#169; 2016 - 2023 Saturdays.io All rights reserved.
                    </p>
                </div>
                <div class="flex flex-end pb-4 md:pb-0">
                    <div class="nav-item pr-4">
                        <NuxtLink to="/terms-of-service" active-class="active"
                            class="flex items-center text-sm font-bold hover:opacity-75">
                            <strong>Terms of Service</strong>
                        </NuxtLink>
                    </div>
                    <div class="nav-item pl-4">
                        <NuxtLink to="/privacy-policy" active-class="active"
                            class="flex items-center text-sm font-bold hover:opacity-75">
                            <strong>Privacy Policy</strong>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>


<script setup lang="ts">
</script>


<style lang="scss">
</style>