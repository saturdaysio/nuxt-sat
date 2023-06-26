<template>
    <Popover v-slot="{ open }">
        <nav class="relative">
            <div class="fixed w-full px-4">
                <header class="inset-x-0 backdrop-blur bg-black/80 border-b border-white/10">
                    <div class="flex items-center justify-between max-w-7xl mx-auto px-2 py-4" aria-label="global">

                        <div class="flex lg:flex-1">
                            <!-- Logo -->
                            <NuxtLink to="/" class="focus:outline-none">
                                <span class="sr-only">Saturdays.io</span>
                                <img class="h-8 w-8" src="@/assets/img/logo.svg" alt="Saturdays.io logo" width="32px" height="32px" />
                            </NuxtLink>
                        </div>
                        <div class="flex lg:hidden">
                            <!-- Toggle -->
                            <PopoverButton class="-m-2.5 inline-flex items-center justify-center p-2.5 text-white focus:outline-none">
                                <span class="sr-only">Mobile menu</span>
                                <Bars3Icon v-if="!open" class="block h-8 w-8" aria-hidden="true" />
                                <XMarkIcon v-else class="block h-8 w-8" aria-hidden="true" />
                            </PopoverButton>
                        </div>

                        <!-- Navigation links -->
                        <div class="hidden lg:flex lg:flex-1 lg:gap-x-8 lg:justify-end nav-item">
                            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" class="text-md text-white" active-class="active">{{ item.name }}</NuxtLink>
                        </div>

                    </div>
                </header>

                <!-- Mobile menu -->
                <PopoverPanel class="inset-y-0 z-50 w-full h-screen">
                    <div class="w-full h-full overflow-y-auto px-4 py-4 backdrop-blur bg-black/80">
                        <!-- Navigation links -->
                        <div class="flex flex-col justify-center h-4/5">
                            <div class="flex flex-col space-y-2">
                                <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" class="mx-2 block py-4 text-2xl sm:text-3xl md:text-4xl font-black text-white hover:opacity-60" active-class="active underline underline-offset-8">{{ item.name }}</NuxtLink>
                            </div>

                        </div>
                    </div>
                </PopoverPanel>

            </div>
	    </nav>
    </Popover>
</template>


<script setup lang="ts">

	import { ref } from 'vue'
	import { Popover, PopoverButton, PopoverPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

	const navigation = [
		{ name: 'Work', to: '/' },
		{ name: 'About', to: '/about' },
	]

    const legal = [
        { name: 'Terms of Service', to: '/terms-of-service' },
        { name: 'Privacy Policy', to: '/privacy-policy' },
	]

	const mobileMenuOpen = ref(false)

</script>


<style lang="scss">

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.2s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

</style>