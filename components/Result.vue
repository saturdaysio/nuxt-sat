<template>
	<div class="bg-black-900 py-24 sm:py-32">
		<div class="mx-auto max-w-8xl px-4 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div class="text-center">
					<h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl">Our stats</h2>
				</div>
				<dl class="mt-16 grid grid-cols-1 gap-2 overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-2">
					<div v-for="item in resultStore.resultJson.result" :key="item.id" class="flex flex-col p-8">
						<dd class="order-first text-6xl md:text-8xl font-thin tracking-tight text-grad-01">{{ item.title }}</dd>
						<dt class="text-xl font-normal text-white">{{ item.desc }}</dt>
					</div>
				</dl>
			</div>
		</div>
	</div>
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