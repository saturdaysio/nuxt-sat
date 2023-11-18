<script setup lang="ts">

	import { defineComponent, ref, watchEffect } from 'vue'
	import { Popover, PopoverButton, PopoverPanel, } from '@headlessui/vue'
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

	const navigation = [
		{ name: 'About', to: '/about' },
		{ name: 'Login', to: '/login' },
	]

    const mobileNav = [
        { name: 'Home', to: '/' },
		{ name: 'About', to: '/about' },
        { name: 'Login', to: '/login' },
	]

    const legal = [
        { name: 'Terms of Service', to: '/terms-of-service' },
        { name: 'Privacy Policy', to: '/privacy-policy' },
	]


    // Hack to echo Popover v-slot state change
    // https://github.com/tailwindlabs/headlessui/issues/2436
    // https://stackoverflow.com/questions/67807076/get-v-slots-value
    let isPopoverOpen = ref(false)
    const emit = defineEmits(["opened", "closed"])

    // Invisible component to emit Popover 'open' state
    const Snitcher = defineComponent({
        setup: (_, { attrs, emit }) => {
            watchEffect(() => emit('change', attrs))

            return () => null
        }
    })


    // Watch isPopoverOpen state to apply overflow class
    // Need to add additional functionality to check browser width, if wider than 1024px, close menu
    watch(isPopoverOpen, async () => {
        // if isPopoverOpen = true, apply body class="overflow-hidden" to lock background scrolling
        if (isPopoverOpen.value) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }},
        { immediate: true } // Forces watcher callback to be executed immediately https://vuejs.org/guide/essentials/watchers.html#eager-watchers
    )

</script>


<template>
    <Popover v-slot="{ open }">
        <Snitcher :open="open"  @change="({ open }) => isPopoverOpen = open" />
        <nav class="relative z-50">
            <div class="fixed w-full">
                <header class="inset-x-0 backdrop-blur bg-black/90 border-b border-white/10">
                    <div class="flex justify-between max-w-7xl mx-auto px-4 py-4" aria-label="global">

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
                        <div class="hidden lg:flex lg:flex-1 lg:gap-x-8 lg:justify-end items-center">
                            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" class="nav-item text-md text-white hover:text-green-400 no-underline hover:underline" active-class="active">{{ item.name }}</NuxtLink>
                        </div>

                    </div>
                </header>
                <transition
                    enter-active-class="transition-all duration-500 ease-in-out"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition duration-500 ease-in-out"
                    leave-from-class="opacity-100"
                    leave-to-class=" opacity-0"
                >
                    <!-- Mobile menu -->
                    <PopoverPanel class="inset-y-0 w-full h-screen lg:hidden">
                        <div class="w-full h-full overflow-y-auto px-4 py-4 bg-black">
                            <!-- Navigation links -->
                            <div class="flex flex-col justify-center h-4/5">
                                <div class="flex flex-col space-y-2">
                                    <NuxtLink v-for="item in mobileNav" :key="item.name" :to="item.to" class="mx-2 block py-4 text-2xl sm:text-3xl md:text-4xl font-base text-white hover:text-green-400 no-underline hover:underline hover:underline-offset-4 hover:decoration-2" active-class="active text-blue-300 underline underline-offset-4 decoration-2">{{ item.name }}</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </transition>
            </div>
	    </nav>
    </Popover>
</template>


<style lang="scss" scoped>

    .nav-item {
        border: 0;

        &:hover, &:focus {
            @apply underline underline-offset-4 opacity-60 duration-500
        }
    }

</style>