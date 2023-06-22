<template>
	<div class="flex flex-col h-screen justify-between">

		<Nav2 />

		<main class="container lg:max-w-5xl mx-auto px-8">
			<div class="flex flex-col justify-center">
				<div class="mb-8">
					<div class="text-center pb-2">
						<h1 class="text-4xl font-bold text-grad-01">ERROR {{ error.statusCode }}</h1>
					</div>
					<div class="text-center">
						<p class="text-xl text-white">{{ error.message }}</p>
					</div>
				</div>

				<div class="flex justify-center">
					<Button :cta="'Go Home'" class="button cta" @click="handleClearError" />
				</div>
			</div>
		</main>

		<Footer />

	</div>
</template>


<script setup lang="ts">

	defineProps(['error'])

	const handleClearError = () => clearError({ redirect: '/' })

	useHead({
		title: 'Saturdays.io - Error',
		meta: [
			{ name: 'description', content: 'Error page' }
		]
	})

</script>


<style lang="scss">
</style>