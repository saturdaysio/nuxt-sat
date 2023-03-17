<template>
	<div class="bg-black-900">
		<header class="absolute inset-x-0 top-0 z-50">
			<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div class="flex lg:flex-1">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Saturdays.io</span>
						<img class="h-8 w-auto" src="@/assets/img/logo.svg" alt="Saturdays.io logo" />
					</a>
				</div>
				<div class="flex lg:hidden">
					<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
						<span class="sr-only">Open main menu</span>
						<Bars3Icon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="hidden lg:flex lg:flex-1 lg:gap-x-12 lg:justify-end">
					<a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-white">{{ item.name }}</a>
				</div>
			</nav>

			<Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
				<div class="fixed inset-0 z-50" />
				<DialogPanel
					class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:ring-1 sm:ring-white/10  backdrop-blur bg-black-900/80 border-b border-white/10">
					<div class="flex items-center justify-between">
						<a href="/" class="-m-1.5 p-1.5">
							<span class="sr-only">Saturdays.io</span>
							<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Saturdays.io logo" />
						</a>
						<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
							<span class="sr-only">Close menu</span>
							<XMarkIcon class="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-gray-500/25">
							<div class="space-y-2 py-6">
								<a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-blue-800 hover:text-purple-600">{{ item.name }}</a>
							</div>
							<div class="">
								<a href="/signin" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-black hover:text-purple-900">.</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>

		<div class="relative isolate overflow-hidden pt-14">
			<img src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="City image" class="absolute inset-0 -z-10 h-full w-full object-cover" />
			<div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
				<!-- highlight top left -->
				<svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
					<path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
					<defs>
						<linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177"
							y2="474.645" gradientUnits="userSpaceOnUse">
							<stop stop-color="#9089FC" />
							<stop offset="1" stop-color="#FF80B5" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<!-- headline -->
			<div class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
				<div class="text-center">
					<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Saturdays is a Canadian digital
						studio based in Toronto</h1>
				</div>
			</div>
			<!-- highlight bottom right -->
			<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
				<svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
					<path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
					<defs>
						<linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177"
							y2="474.645" gradientUnits="userSpaceOnUse">
							<stop stop-color="#9089FC" />
							<stop offset="1" stop-color="#FF80B5" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	</div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
	{ name: 'Work', href: '/' },
	{ name: 'About', href: '/about' },
]

const mobileMenuOpen = ref(false)
</script>

<style lang="scss"></style>