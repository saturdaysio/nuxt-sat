<template>
	<Disclosure as="nav" class="relative">
		<div class="fixed w-full px-4 z-50">
			<header class="absolute inset-x-0 top-0 backdrop-blur bg-black/80 border-b border-white/10">

				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div class="flex h-16 items-center justify-between">
						<div class="flex items-center">
							<div class="flex-shrink-0">
								<NuxtLink to="/">
									<img class="block h-8 w-auto lg:hidden" src="@/assets/img/logo.svg" alt="Saturdays.io" />
									<img class="hidden h-8 w-auto lg:block" src="@/assets/img/logo.svg" alt="Saturdays.io" />
								</NuxtLink>
							</div>
						</div>

						<div class="hidden sm:ml-6 sm:block">
							<div class="flex items-center">
								<div class="flex space-x-4">
									<NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" class="px-3 py-2 text-md font-bold text-white">{{ item.name }}</NuxtLink>
								</div>
							</div>
						</div>
						<div class=" flex sm:hidden">
							<!-- Mobile menu button -->
							<DisclosureButton class="inline-flex items-center justify-center p-2 text-white focus:none">
								<span class="sr-only">Open main menu</span>
								<Bars3Icon v-if="open" class="block h-6 w-6" aria-hidden="true" />
								<XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
							</DisclosureButton>
						</div>
					</div>
				</div>

				<DisclosurePanel class="sm:hidden h-full">
					<div class=" right-0 z-50 w-full overflow-y-auto space-y-1 px-6 py-4 backdrop-blur bg-black/60">
						<NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" class="block px-3 py-2 text-2xl font-bold text-white">{{ item.name }}</NuxtLink>
					</div>
				</DisclosurePanel>

			</header>
		</div>

	</Disclosure>
</template>


<script setup lang="ts">

import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
	{ name: 'Work', to: '/' },
	{ name: 'About', to: '/about' },
]

const open = ref(true)

</script>


<style lang="scss">
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}</style>