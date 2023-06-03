<template>
	<div>

		<Nav />

		<Header intro="We bridge the gap between design and technology" />

		<section id="ethics" class="w-full mx:auto px-4 py-16 bg-black">
			<div class="container lg:max-w-5xl mx-auto my-8">
				<div class="pb-4">
					<h1 class="text-4xl md:text-5xl lg:text-6xl text-purple-pink pb-8">Keeping it 100</h1>
					<p class="text-xl md:text-2xl text-white pb-4">We believe that our work and ethics
					define who we are. We're Human-centered Designers and Developers behind some of North America's
					biggest mobile apps and digital brands looking to make a net-positive impact in the world.</p>
				</div>
				<div>
				<p class="text-xl md:text-2xl text-white">Our approach to building software prioritizes accessibility, user-centric design, and inclusion. We research and generate ideas, then
					build, test, and iterate on them using real-world analytics and actionable KPIs. The emphasis on data-driven design, diversity, user empathy, and sustainability aren't buzzwords, they're why we
					win.</p>
				</div>
			</div>
		</section>


		<section id="team" class="w-full mx:auto px-4 py-16 bg-black">
			<div class="container lg:max-w-7xl mx-auto my-8">
				<div class="mx-auto max-w-5xl pb-4">
					<h1 class="text-4xl md:text-5xl lg:text-6xl text-purple-pink pb-8">Who we are</h1>
					<p class="text-xl md:text-2xl text-white">We're Human-centered Designers and Developers behind some of North America's
					biggest mobile apps and digital brands looking to make a net-positive impact in the world.</p>
				</div>

				<div class="mx-auto max-w-7xl mt-8 px-6">
					<ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
						<li v-for="person in team" :key="person.name">
							<img class="aspect-[1/1] w-full rounded-md object-cover" draggable="false" :src="person.imageUrl" alt="pfp" />
							<h3 class="mt-2 text-xl md:text-2xl font-bold leading-8 text-white">{{ person.name }}</h3>
							<p class="text-base md:text-lg text-gray-300">{{ person.role }}</p>
							<p class="text-sm md:text-base text-gray-500">{{ person.location }}</p>
						</li>
					</ul>
				</div>
			</div>
		</section>


		<Client />

		<Result />

		<Contact />

		<Footer />

	</div>
</template>


<script setup lang="ts">

	useHead({
		title: 'Saturdays.io - About',
		meta: [
			{ name: 'description', content: 'About Saturdays.io' },
			{ name: 'keywords', content: 'About, Company, Clients, Saturdays.io, Digital, Studio, Creative, Digital Studio, Creative Studio,' },
		]
	})

	const team = [
	{
		name: 'PC',
		role: 'Design',
		imageUrl:
			'https://www.cyberpunk.net/build/images/edgerunners/glossary/ICE@1x-10b9e5fb.jpg',
		location: 'Toronto, Hawaii, Seoul',
	},
	{
		name: 'MC',
		role: 'Engineering',
		imageUrl:
			'https://www.cyberpunk.net/build/images/edgerunners/glossary/Scavengers@1x-e4341cfc.jpg',
		location: 'Toronto, Miami',
	},
	{
		name: 'FA',
		role: 'Engineering',
		imageUrl:
			'https://www.cyberpunk.net/build/images/edgerunners/glossary/Netrunner@1x-2e8553f1.jpg',
		location: 'New York',
	},
	{
		name: 'JC',
		role: 'Engineering',
		imageUrl:
			'https://www.cyberpunk.net/build/images/edgerunners/glossary/Fixer@1x-060bd441.jpg',
		location: 'Seoul',
	},
]
</script>


<style lang="scss">
</style>