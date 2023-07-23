<template>
	<section id="cta" class="px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
		<div class="max-w-7xl mx-auto px-4 py-20 bg-gray-800/10">
			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center text-white">Contact us</h2>
			<div class="mt-8 flex items-center justify-center gap-x-6">
				<Button :buttonLabel="'Say Hello'" class="button primary" :to="'mailto:hello@saturdays.io'" rel="noreferrer" target="_blank" />
			</div>
		</div>
	</section>
</template>


<script setup lang="ts">
</script>


<style lang="scss" scoped>
</style>