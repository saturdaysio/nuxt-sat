<template>
	<div class="bg-black">

		<div class="relative isolate overflow-hidden pt-14">

			<div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
				<!-- highlight top left -->
			</div>
			<!-- headline -->
			<div class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
				<div class="px-4 text-center">
					<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{{ intro }}</h1>
				</div>
			</div>
			<!-- highlight bottom right -->
			<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">

			</div>
		</div>
	</div>
</template>
  
<script setup lang="ts">
	import { ref } from 'vue'
	import { Dialog, DialogPanel } from '@headlessui/vue'
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

	const navigation = [
		{ name: 'Work', to: '/' },
		{ name: 'About', to: '/about' },
	]

	const props = defineProps({
		intro: String,
	})

	const mobileMenuOpen = ref(false)
</script>

<style lang="scss">
</style>