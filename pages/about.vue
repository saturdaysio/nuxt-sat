<template>
	<div>

		<Nav2 />

		<Header intro="We bridge the gap between design and technology" />

		<section id="ethics" class="w-full mx:auto px-4 py-16 bg-black">
			<div class="container lg:max-w-5xl mx-auto my-8">
				<div class="pb-4">
					<h1 class="text-4xl md:text-5xl lg:text-6xl text-center text-purple-pink pb-8">Keeping it 100</h1>
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


		<!-- Team -->
		<section id="team" class="w-full mx:auto px-4 py-16 bg-black">
			<div class="container lg:max-w-7xl mx-auto my-8">
				<div class="mx-auto max-w-5xl pb-4">
					<h1 class="text-4xl md:text-5xl lg:text-6xl text-center text-purple-pink pb-8">Who we are</h1>
					<p class="text-xl md:text-2xl text-white">We're a globally distributed design-led team of technologists aligned with a common interest in improving life for all people. We operate like a sports team by continuously evolving our roster with specialists to meet the unique needs of each project.</p>
				</div>

				<div class="mx-auto max-w-7xl mt-8 px-6">
					<ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
						<li v-for="person in team" :key="person.name">
							<img class="aspect-[4/3] w-full rounded-md object-cover" :src="person.imageUrl" alt="pfp" draggable="false" loading="lazy" />
							<h2 class="mt-2 text-xl md:text-2xl font-bold leading-8 text-white">{{ person.name }}</h2>
							<p class="text-base md:text-lg text-gray-300">{{ person.role }}</p>
							<p class="text-sm md:text-base text-gray-500">{{ person.location }}</p>
						</li>
					</ul>
				</div>
			</div>
		</section>


		<!-- Values -->
		<div class="mx-auto max-w-7xl px-4 py-16">
			<div class="container mx-auto max-w-5xl">
				<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-purple-pink">Our values</h2>
			</div>

			<dl class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 text-lg md:text-xl leading-7 text-gray-400 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
				<div v-for="value in values" :key="value.name" class="relative pl-10">
					<dt class="inline font-bold text-white">
						<component :is="value.icon" class="absolute top-1 left-1 h-6 w-6 text-blue-500" aria-hidden="true" />
						{{ value.name }}
					</dt>
					{{ '' }}
					<dd class="inline">{{ value.description }}</dd>
				</div>
			</dl>
		</div>


		<Result />

		<Client />

		<Contact />

		<Footer />

	</div>
</template>


<script setup lang="ts">

	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
	import {
		AcademicCapIcon,
		GlobeAmericasIcon,
		HandRaisedIcon,
		PaintBrushIcon,
		SparklesIcon,
		SunIcon,
		UserGroupIcon,
	} from '@heroicons/vue/20/solid'

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
			imageUrl: 'https://w0.peakpx.com/wallpaper/433/617/HD-wallpaper-cyberpunk-edgerunners-gets-an-amazing-new-trailer-ahead-of-its-september-debut.jpg',
			location: 'Toronto, Hawaii',
		},
		{
			name: 'Maxx',
			role: 'Engineering',
			imageUrl: 'https://www.cyberpunk.net/build/images/edgerunners/glossary/Scavengers@1x-e4341cfc.jpg',
			location: 'Toronto, Miami',
		},
		{
			name: 'Sashi',
			role: 'Design',
			imageUrl: 'https://www.cyberpunk.net/build/images/edgerunners/glossary/ICE@1x-10b9e5fb.jpg',
			location: 'Toronto, Los Angeles',
		},
		{
			name: 'Kara',
			role: 'Engineering',
			imageUrl: 'https://www.cyberpunk.net/build/images/edgerunners/glossary/Netrunner@1x-2e8553f1.jpg',
			location: 'New York',
		},
		{
			name: 'Jayce',
			role: 'Engineering',
			imageUrl: 'https://www.cyberpunk.net/build/images/edgerunners/glossary/Fixer@1x-060bd441.jpg',
			location: 'Seoul',
		},
	]

	const values = [
		{
			name: 'Be world-class.',
			description: 'Work hard to be great at what you do and treat everyone with respect.',
			icon: GlobeAmericasIcon,
		},
		{
			name: 'Take responsibility.',
			description: 'Own your wins and losses.',
			icon: HandRaisedIcon,
		},
		{
			name: 'Be supportive.',
			description: 'We take the time to help each other improve and learn from our mistakes.',
			icon: UserGroupIcon,
		},
		{
			name: 'Always learning.',
			description: 'Our passion for education allows us to thrive on the cutting edge of technology.',
			icon: AcademicCapIcon,
		},
		{
			name: 'No Rockstars.',
			description: 'Nobody has time for egos so check yourself before you wreck yourself.',
			icon: PaintBrushIcon,
		},
		{
			name: 'Enjoy downtime.',
			description: 'We like to touch grass once in a while.',
			icon: SunIcon,
		},
	]
</script>


<style lang="scss">
</style>