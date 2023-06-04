<template>
	<div class="bg-black py-24 sm:py-32">
		<div class="mx-auto max-w-8xl px-4 lg:px-8">
			<div class="mx-auto max-w-6xl">
				<div class="">
					<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-white">Our stats</h2>
				</div>
				<dl class="mt-16 grid grid-cols-1 gap-4 overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-2">
					<div v-for="item in resultStore.resultJson.result" :key="item.id" class="flex flex-col p-8 bg-gray-800/10">
						<dd class="order-first text-5xl md:text-6xl lg:text-8xl font-light tracking-tight text-grad-01">{{ item.title }}</dd>
						<dt class="text-xl lg:text-2xl font-normal text-white">{{ item.desc }}</dt>
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