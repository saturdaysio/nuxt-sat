<template>
	<section id="stats" class="px-4 lg:px-8 py-16 md:py-20 lg:py-24">
		<div class="max-w-6xl mx-auto">
			<div>
				<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-white">Our stats</h2>
			</div>
			<dl class="mt-16 grid grid-cols-1 gap-8 overflow-hidden sm:grid-cols-2 lg:grid-cols-2">
				<div v-for="item in resultStore.resultJson.result" :key="item.id" class="flex flex-col p-8 bg-gray-800/20">
					<dd class="order-first text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tight lime-to-aqua">{{ item.title }}</dd>
					<dt class="text-xl lg:text-2xl font-normal text-white">{{ item.desc }}</dt>
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