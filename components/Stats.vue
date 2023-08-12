<template>
	<section id="stats" class="px-4 lg:px-8 py-16 md:py-20 lg:py-24">
		<div class="max-w-7xl mx-auto">
			<div>
				<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-white">Our stats</h2>
			</div>
			<dl class="mt-16 grid grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<div v-for="item in stats" :key="item.id" class="flex flex-col p-4 md:p-6 rounded-lg bg-gray-900/40">
					<dd class="order-first text-md md:text-base lg:text-lg font-semibold tracking-tight text-white mb-10 pb-2 border-b border-spacing-y-4 border-b-white/10">{{ item.category }}</dd>
					<dt class="text-8xl md:text-7xl font-semibold tracking-tight text-center lime-to-aqua mb-6">{{ item.title }}</dt>
					<dt class="text-base lg:text-lg font-normal text-white pb-8">{{ item.desc }}</dt>
				</div>
			</dl>
		</div>
	</section>
</template>


<script setup lang="ts">

	const stats = [
		{
			id: '0',
			category: 'Projects',
			title: '$21',
			desc: 'Million in average annual recurring revenue (ARR) for clients using our digital products and services'
		},
		{
			id: '1',
			category: 'Projects',
			title: '42',
			desc: 'projects completed for Fortune 500s, startups, and SMEs'
		},
		{
			id: '2',
			category: 'Origin',
			title: '2016',
			desc: 'founded in downtown Toronto, Canada and working with brands worldwide'
		},
		{
			id: '3',
			category: 'Years',
			title: '23',
			desc: 'collective years of professional work experience'
		},
	]

</script>

<style lang="scss" scoped>
</style>