<script setup lang="ts" scoped>

	const navigation = {
		main: [
			{ name: 'Home', to: '/' },
			{ name: 'About', to: '/about' },
			{ name: 'Login', to: '/login' },
		],

		social: [
			{ name: 'LinkedIn', to: 'https://www.linkedin.com/company/saturdaysdotio/' },
		],

		legal: [
			{ name: 'Terms of Service', to: '/terms-of-service' },
			{ name: 'Privacy Policy', to: '/privacy-policy' },
		],
	}

	const currentYear = new Date().getFullYear()

	const copyright = "Saturdays.io Inc. All rights reserved."

	const initial = ref({
		y: 0,
		opacity: 1,
	})

	const enter = ref({
		y: 12,
		opacity: 1,
		transition: {
			duration: 1000,
			ease: 'easeInOut',
			repeat: Infinity,
			repeatType: 'mirror',
			delay: 500,
		}
	})

</script>


<template>
	<footer class="px-4 py-12 border-t border-gray-800 sm:px-6 sm:py-16">
		<nav class="mx-auto max-w-screen-xl" aria-label="Footer">
			<div class="md:flex md:justify-between">
				<div id="logo"
					v-motion
					:initial="initial"
					:enter="{
						y: 12,
						opacity: 1,
						transition: {
							duration: 1000,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'mirror',
							delay: 500,
						}
					}"
					:leave="{
						y: 0,
						opacity: 0,
						transition: {
							duration: 1000,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'mirror',
							delay: 500,
						}
					}"
					class="mb-16 md:mb-0">					
					<NuxtLink to="/" class="flex items-center space-x-3">
						<img class="h-8 w-8" src="@/assets/img/logo.svg" alt="Saturdays.io logo" width="32px" height="32px" />
					</NuxtLink>
				</div>

				<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
					<div id="main">
						<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
						<ul v-for="item in navigation.main" :key="item.name">
							<li class="mb-4">
								<suspense suspensible>
									<NuxtLink :to="item.to" class="text-md sm:text-base leading-6 no-underline text-white hover:text-green-400 hover:underline" active-class="active">
										{{ item.name }}
									</NuxtLink>
								</suspense>
							</li>
						</ul>
					</div>

					<div id="social">
						<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Connect</h2>
						<ul v-for="item in navigation.social" :key="item.name">
							<li class="mb-4">
								<suspense suspensible>
									<NuxtLink :to="item.to" class="text-md sm:text-base leading-6 no-underline text-white hover:text-green-400 hover:underline" active-class="active">
										{{ item.name }}
									</NuxtLink>
								</suspense>
							</li>
						</ul>
					</div>

					<div id="legal">
						<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
						<ul v-for="item in navigation.legal" :key="item.name">
							<li class="mb-4">
								<suspense suspensible>
									<NuxtLink :to="item.to" class="text-md sm:text-base  leading-6 no-underline text-white hover:text-green-400 hover:underline" active-class="active">
										{{ item.name }}
									</NuxtLink>
								</suspense>
							</li>
						</ul>
					</div>

				</div>
			</div>

			<hr class="my-6 border-gray-800 sm:mx-auto lg:my-8" />

			<div class="sm:flex sm:items-center sm:justify-between">
				<span class="text-md sm:text-base sm:text-center leading-5 text-light text-white">
					© 2016 - {{ currentYear }} {{ copyright }}
				</span>
			</div>
		</nav>
	</footer>

</template>


<style lang="scss" scoped>
</style>