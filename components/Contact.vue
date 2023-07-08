<template>
	<section id="cta" class="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center text-white">Have an interesting project?</h2>
			<div class="mt-8 flex items-center justify-center gap-x-6">
				<Button :cta="'Say Hello'" class="button primary" :to="'mailto:hello@saturdays.io'" rel="noreferrer" target="_blank" />
			</div>
		</div>
	</section>
</template>


<script setup lang="ts">
</script>


<style lang="scss" scoped>
</style>