<template>
	<footer class="w-full border-t border-white/10">
		<div class="max-w-7xl mx-auto overflow-hidden px-6 lg:px-8 py-20 sm:py-24">
			<nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
				<div v-for="item in navigation.main" :key="item.name" class="nav-item pb-6">
					<NuxtLink :to="item.to" class="text-base leading-6 text-white" active-class="active">{{ item.name }}</NuxtLink>
				</div>
			</nav>

			<p class="mt-10 text-sm md:text-base text-center leading-5 text-light text-gray-400">&copy; 2016-2023 Saturdays.io All rights reserved.</p>
		</div>
	</footer>
</template>
  
<script setup lang="ts" scoped>

	const navigation = {
		main: [
			{ name: 'Work', to: '/' },
			{ name: 'About', to: '/about' },
			{ name: 'Client Login', to: '/signin' },
			{ name: 'Terms of Service', to: '/terms-of-service' },
			{ name: 'Privacy Policy', to: '/privacy-policy' },
		],
	}

</script>


<style lang="scss" scoped>
</style>