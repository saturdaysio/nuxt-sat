<template>
	<footer class="bg-black">
		<div class="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
			<nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
				<div v-for="item in navigation.main" :key="item.name" class="pb-6">
					<a :href="item.href" class="text-base leading-6 text-blue-800 hover:text-red-500">{{ item.name }}</a>
				</div>
			</nav>
			<p class="mt-10 text-center text-md leading-5 text-gray-500">&copy; 2016 - 2023 Saturdays.io All rights
				reserved.</p>
		</div>
	</footer>
</template>
  
<script setup lang="ts">
	import { defineComponent, h } from 'vue'

	const navigation = {
		main: [
			{ name: 'Work', href: '/' },
			{ name: 'About', href: '/about' },
			{ name: 'Terms of Service', href: '/terms-of-service' },
			{ name: 'Privacy Policy', href: '/privacy-policy' },
		],
	}
</script>


<style lang="scss">
</style>