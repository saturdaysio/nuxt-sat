<template>
	<div class="bg-black">

		<div class=" overflow-hidden pt-14">
			<!-- headline -->
			<div class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
				<div class="px-4 text-center">
					<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{{ intro }}</h1>
				</div>
			</div>

		</div>
	</div>
</template>

  
<script setup lang="ts">

	const props = defineProps({
		intro: String,
	})

</script>


<style lang="scss">
</style>