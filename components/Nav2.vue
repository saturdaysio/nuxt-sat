<template>
	<nav class="relative">
		<div class="fixed w-full px-4 z-50">
			<header class="absolute inset-x-0 backdrop-blur bg-black/80 border-b border-white/10">
                <div class="flex items-center justify-between max-w-7xl mx-auto px-6 py-4" aria-label="global">
                    <div class="flex lg:flex-1">
                        <!-- Logo -->
                        <NuxtLink to="/" class="focus:outline-none">
                            <span class="sr-only">Saturdays.io</span>
                            <img class="h-8 w-8" src="@/assets/img/logo.svg" alt="Saturdays.io logo" width="32px" height="32px" />
                        </NuxtLink>
                    </div>
                    <div class="flex lg:hidden">
                        <!-- Toggle -->
                        <button type="button" class="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-400" @click="mobileMenuOpen = !mobileMenuOpen">
                            <span class="sr-only">Open menu</span>
                            <Bars3Icon class="h-8 w-8" aria-hidden="true" />
                        </button>
                    </div>

                    <!-- Navigation links -->
                    <div class="hidden lg:flex lg:flex-1 lg:gap-x-8 lg:justify-end nav-item">
                        <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" class="text-md text-white" active-class="active">{{ item.name }}</NuxtLink>
                    </div>
                </div>
                <TransitionRoot :show="mobileMenuOpen">
                <!-- Mobile menu -->
                    <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = true">
                        <TransitionChild
                            enter="transition-opacity ease-in-out duration-200"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="transition-opacity ease-in-out duration-200"
                            leave-from="opacity-0"
                            leave-to="opacity-100"
                        >
                            <div class="fixed inset-0 z-50">
                                <DialogPanel class="w-full h-full overflow-y-auto px-6 py-4 backdrop-blur bg-black/80">
                                    <div class="flex items-center justify-between">
                                        <!-- Logo -->
                                        <NuxtLink to="/" class="focus:outline-none">
                                            <span class="sr-only">Saturdays.io</span>
                                            <img class="h-8 w-8" src="@/assets/img/logo.svg" alt="Saturdays.io logo" width="32px" height="32px" />
                                        </NuxtLink>

                                        <!-- Toggle -->
                                        <button type="button" class="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-400" @click="mobileMenuOpen = !mobileMenuOpen">
                                            <span class="sr-only">Close menu</span>
                                            <XMarkIcon class="h-8 w-8" aria-hidden="true" />
                                        </button>
                                    </div>

                                    <!-- Navigation links -->
                                    <div class="flex h-4/5">
                                        <div class="flex flex-col justify-center nav-item space-y-2">
                                            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" class="mx-4 block py-4 px-4 text-3xl sm:text-4xl md:text-5xl font-black text-white" active-class="active">{{ item.name }}</NuxtLink>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </div>
                        </TransitionChild>
                    </Dialog>
                </TransitionRoot>
            </header>
		</div>
	</nav>
</template>


<script setup lang="ts">

	import { ref } from 'vue'
	import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

	const navigation = [
		{ name: 'Work', to: '/' },
		{ name: 'About', to: '/about' },
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