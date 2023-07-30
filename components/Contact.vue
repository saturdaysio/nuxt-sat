<template>
	<section class="px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">

		<div class="mx-auto max-w-7xl">
			<div class="relative isolate overflow-hidden bg-gray-800/20 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
				<div class="mx-auto max-w-4xl">
					<h2 class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">Want to get in touch?</h2>
				</div>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<Button :buttonLabel="'Say hello'" class="primary" :to="'mailto:hello@saturdays.io'" rel="noreferrer" target="_blank" />
				</div>
			</div>
		</div>

	</section>
</template>


<script setup lang="ts">
</script>


<style lang="scss" scoped>
</style>