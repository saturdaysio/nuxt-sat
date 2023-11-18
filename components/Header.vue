<script setup lang="ts">

	const props = defineProps({
		intro: String,
	})

</script>


<template>
	<section class="relative isolate pt-16 -z-10">		
		<div class="max-w-6xl mx-auto px-8 py-32 sm:py-48 lg:py-56">
			<div class="text-center z-30">
				<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center text-white">{{ intro }}</h1>
			</div>
		</div>

	</section>
</template>


<style lang="scss" scoped>
</style>