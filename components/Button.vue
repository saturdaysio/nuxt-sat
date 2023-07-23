<template>
	<NuxtLink>
		<button>
			<p class="text-xl md:text-2xl font-bold">{{ buttonLabel }}</p>
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