<template>
	<div>

		<Nav />

		<Header intro="We bridge the gap between design and technology" />

		<section id="ethics" class="w-full mx:auto px-4 py-16">
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

		
		<section class="mx-auto max-w-7xl px-4 py-16">
			<div class="container mx-auto max-w-5xl">
				<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-purple-pink">Our values</h2>
			</div>

			<dl class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-12 text-lg md:text-xl leading-7 text-gray-400 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
				<div v-for="value in values" :key="value.name" class="">
					<dt class="pb-2">
						<component :is="value.icon" class="top-0 left-0 h-12 w-12 stroke-1 text-purple-400" aria-hidden="true" />
					</dt>
					<dt class="inline font-bold text-white">
						{{ value.name }}
					</dt>
					{{ '' }}
					<dd class="inline">{{ value.description }}</dd>
				</div>
			</dl>
		</section>


		<Result />

		<Client />

		<Contact />

		<Footer />

	</div>
</template>


<script setup lang="ts">

	import { AcademicCapIcon, GlobeAmericasIcon, HandRaisedIcon, PaintBrushIcon, SparklesIcon, SunIcon, TrophyIcon, UserGroupIcon, } from '@heroicons/vue/24/outline'

	useHead({
		title: 'Saturdays.io - About',
		meta: [
			{ name: 'description', content: 'About Saturdays.io' },
			{ name: 'keywords', content: 'About, Company, Clients, Saturdays.io, Digital, Studio, Creative, Digital Studio, Creative Studio,' },
		]
	})

	const values = [
		{
			name: 'Be world-class.',
			description: 'Being happy is the goal, but greatness is our mission.',
			icon: TrophyIcon,
		},
		{
			name: 'Take responsibility.',
			description: 'No excuses, no bullshit. We get it done.',
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
			icon: SparklesIcon,
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