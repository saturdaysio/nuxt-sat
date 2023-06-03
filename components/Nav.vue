<template>
	<nav class="relative">
		<div class="fixed w-full px-4 z-50">
			<header class="absolute inset-x-0 top-0 backdrop-blur bg-black/80 border-b border-white/10">
			<nav class="flex items-center justify-between max-w-7xl mx-auto px-6 py-4" aria-label="Global">
				<div class="flex lg:flex-1">
					<NuxtLink to="/" class="">
						<span class="sr-only">Saturdays.io</span>
						<img class="h-8 w-8" src="@/assets/img/logo.svg" alt="Saturdays.io logo" width="32px" height="32px" />
					</NuxtLink>
				</div>
				<div class="flex lg:hidden">
						<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
							<span class="sr-only">Open main menu</span>
							<Bars3Icon class="h-6 w-6" aria-hidden="true" />
						</button>
				</div>
				<div class="hidden lg:flex lg:flex-1 lg:gap-x-8 lg:justify-end nav-item">
					<NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" class="text-md text-white" active-class="active">{{ item.name }}</NuxtLink>
				</div>
			</nav>

			<!-- Mobile menu -->
			<Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
				<div class="fixed inset-0 z-50" />
				<DialogPanel class="fixed inset-y-0 right-0 z-50 w-full h-full overflow-y-auto px-6 py-4 backdrop-blur bg-black/60">
					<div class="flex items-center justify-between">
						<NuxtLink to="/" class="border-none focus:ring-0">
							<span class="sr-only">Saturdays.io</span>
							<img class="h-8 w-8" src="@/assets/img/logo.svg" alt="Saturdays.io logo" width="32px" height="32px" />
						</NuxtLink>
							<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
								<span class="sr-only">Close menu</span>
								<XMarkIcon class="h-6 w-6" aria-hidden="true" />
							</button>
					</div>
					<!-- Navigation links -->
					<div class="my-6 flex h-4/6">
						<div class="flex flex-col justify-center nav-item space-y-2 py-6">
							<NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" class="-mx-3 block rounded-lg py-4 px-4 text-4xl font-black uppercase text-white" active-class="active">{{ item.name }}</NuxtLink>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
		</div>
	</nav>
</template>


<script setup lang="ts">

	import { ref } from 'vue'
	import { Dialog, DialogPanel } from '@headlessui/vue'
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

	const navigation = [
		{ name: 'Work', to: '/' },
		{ name: 'About', to: '/about' },
	]

	const mobileMenuOpen = ref(false)

</script>


<style lang="scss">

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s ease;
	}

	.vfade-enter-from,
	.fade-leave-to {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.fade-leave-to,
	.fade-enter-from {
		opacity: 0;
	}

	.fade-leave-from,
	.fade-enter-to {
		opacity: 1;
	}

	.fade-leave-active,
	.fade-enter-active {
		transition: opacity 0.3s ease;
	}
</style>