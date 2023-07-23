<template>
    <!-- Team -->
		<section id="team" class="w-full px-4 py-16">
			<div class="container lg:max-w-7xl mx-auto my-8">
				<div class="max-w-5xl mx-auto pb-4">
					<h1 class="text-4xl md:text-5xl lg:text-6xl text-center text-purple-pink pb-8">Who we are</h1>
					<p class="text-xl md:text-2xl text-white">We're a globally distributed group of technologists aligned with a common interest in improving life for all people. We operate like a sports team by continuously evolving our roster with specialists to meet the unique needs of each project.</p>
				</div>

				<div class="max-w-7xl mx-auto mt-8 px-6">
					<ul role="list" class="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
						<li v-for="person in team" :key="person.name">
							<img class="aspect-square w-full rounded-md object-cover" :src="person.imageUrl" :width="person.width" :height="person.height" :alt="person.alt" draggable="false" loading="lazy" />
							<h2 class="mt-2 text-xl md:text-2xl font-bold leading-8 text-white">{{ person.name }}</h2>
							<p class="text-base md:text-lg text-gray-300">{{ person.role }}</p>
							<p class="text-sm md:text-base text-gray-500">{{ person.location }}</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
</template>


<script setup lang="ts">

	const team = [
		{
			name: 'PC',
			role: 'Design',
			imageUrl: '/sasha.webp',
			width: '420',
			height: '420',
			alt: 'profile photo',
			location: 'Toronto, Hawaii',
		},
		{
			name: 'Maxx',
			role: 'Engineering',
			imageUrl: '/maxx.webp',
			width: '420',
			height: '420',
			alt: 'profile photo',
			location: 'Toronto, Miami',
		},
		{
			name: 'Sasha',
			role: 'Engineering',
			imageUrl: '/sasha.webp',
			width: '420',
			height: '420',
			alt: 'profile photo',
			location: 'Los Angeles',
		},
		{
			name: 'Kara',
			role: 'Engineering',
			imageUrl: '/kara.webp',
			width: '420',
			height: '420',
			alt: 'profile photo',
			location: 'New York',
		},
	]

</script>


<style lang="scss">
</style>