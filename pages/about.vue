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
					biggest mobile apps and digital brands looking to make a net-positive impact.</p>
				</div>
				<div>
				<p class="text-xl md:text-2xl text-white">Our approach to building software prioritizes accessibility, user-centric design, and inclusion. We research and generate ideas, then
					build, test, and iterate on them using real-world analytics and actionable KPIs. Our emphasis on data-driven design, diversity, user empathy, and sustainability aren't buzzwords. They're reflected in every stage of our work, and we win because of it.</p>
				</div>
			</div>
		</section>

		
		<section class="max-w-7xl mx-auto px-4 py-16">
			<div class="">
				<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-purple-pink">Our values</h2>
			</div>

			<dl class="max-w-4xl lg:max-w-none mx-auto lg:mx-0 mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-x-16">
				<div v-for="value in values" :key="value.name" class="">
					<dt class="pb-2">
						<component :is="value.icon" class="top-0 left-0 h-12 w-12 stroke-1 text-purple-400" aria-hidden="true" />
					</dt>
					<dt class="inline text-lg md:text-xl font-bold text-white">
						{{ value.name }}
					</dt>
					{{ '' }}
					<dd class="inline text-lg md:text-xl text-gray-400">{{ value.description }}</dd>
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
			name: "Be world-class.",
			description: "Being happy is the goal, but greatness is our mission. However, we don't step on people to get there.",
			icon: TrophyIcon,
		},
		{
			name: "Take responsibility.",
			description: "We don't make excuses, and we're allergic to bullshit. Celebrating wins and learning from losses is core to our culture.",
			icon: HandRaisedIcon,
		},
		{
			name: "Be supportive.",
			description: "We take the time to help each other improve.",
			icon: UserGroupIcon,
		},
		{
			name: "Always learning.",
			description: "Our love for learning and experimentation allows us to thrive on the cutting edge of technology.",
			icon: AcademicCapIcon,
		},
		{
			name: "No Rockstars.",
			description: "You won't find any 10Xers here, and nobody has time for egos. So check yourself before you wreck yourself.",
			icon: SparklesIcon,
		},
		{
			name: "Enjoy downtime.",
			description: "We like to touch grass once in a while.",
			icon: SunIcon,
		},
	]

</script>


<style lang="scss">
</style>