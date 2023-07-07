<template>
	<footer>
		<div class="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
			<nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
				<div v-for="item in navigation.main" :key="item.name" class="nav-item pb-6">
					<NuxtLink :to="item.to" class="text-base leading-6 text-white">{{ item.name }}</NuxtLink>
				</div>
			</nav>
			<p class="mt-10 sm:text-center text-sm md:text-base leading-5 text-light text-gray-500">&copy; 2016-2023 Saturdays.io All rights reserved.</p>
		</div>
	</footer>
</template>
  
<script setup lang="ts">

	import { defineComponent, h } from 'vue'

	const navigation = {
		main: [
			{ name: 'Work', to: '/' },
			{ name: 'About', to: '/about' },
			{ name: 'Terms of Service', to: '/terms-of-service' },
			{ name: 'Privacy Policy', to: '/privacy-policy' },
		],
	}

</script>


<style lang="scss" scoped>

	a {
		&:hover, &:focus {
			text-decoration: none;
  		}
	}

</style>