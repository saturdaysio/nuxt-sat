<template>
	<NuxtLink>
		<button>
			<p class="text-base sm:text-lg md:text-xl font-semibold">{{ buttonLabel }}</p>
		</button>
	</NuxtLink>
</template>


<script setup lang="ts">

	const props = defineProps({
		buttonLabel: String
	})

</script>


<style lang="scss" scoped>
</style>