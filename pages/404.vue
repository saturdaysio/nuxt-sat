<template>
	<div class="flex flex-col h-screen justify-between">

		<Nav />

		<section class="container lg:max-w-5xl mx-auto px-8">
			<div class="flex flex-col justify-center">
				<div class="mb-8">
					<div class="text-center pb-2">
						<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold lime-to-aqua">Page not found</h1>
					</div>
					<div class="text-center">
						<p class="text-xl text-white">The page you are looking for does not exist.</p>
					</div>
				</div>

				<div class="flex justify-center">
					<Button :buttonLabel="'Go Home'" class="button primary" @click="handleClearError" />
				</div>
			</div>
		</section>

		
		<Footer />

	</div>
</template>


<script setup lang="ts">

	defineProps(['error'])

	const handleClearError = () => clearError({ redirect: '/' })

	useHead({
		title: 'Saturdays.io - 404 Page not found',
		meta: [
			{ name: 'description', content: '404 page not found' }
		]
	})

</script>


<style lang="scss">
</style>