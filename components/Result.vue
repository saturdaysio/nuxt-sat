<template>
	<section id="stats" class="px-4 lg:px-8 py-16 md:py-20 lg:py-24">
		<div class="max-w-7xl mx-auto">
			<div>
				<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-white">Our stats</h2>
			</div>
			<dl class="mt-16 grid grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 xl:grid-cols-4">
				<div v-for="item in resultStore.resultJson.result" :key="item.id" class="flex flex-col p-4 lg:p-8 rounded-lg bg-gray-900/60">
					<dd class="order-first text-2xl md:text-3xl lg:text-3xl font-semibold tracking-tight lime-to-aqua mb-8 md:mb-12 lg:mb-16">{{ item.title }}</dd>
					<dt class="text-base lg:text-lg font-normal text-white">{{ item.desc }}</dt>
				</div>
			</dl>
		</div>
	</section>
</template>


<script lang="ts">

	import { useResultStore } from "~~/store/result";


	export default {
		setup() {
			const resultStore = useResultStore()
			return { resultStore }
		}
	}

</script>

<style lang="scss" scoped>
</style>