<template>
	<div>

		<Nav />

		<Header intro="We bridge the gap between design and technology" />

		<section id="ethics" class="px-4 sm:px-8 md:px-12 py-16 md:py-20 lg:py-24 border-y border-gray-400/20">
			<div class="max-w-5xl mx-auto">
				<div class="pb-4">
					<h1 class="text-4xl md:text-5xl lg:text-6xl text-center font-bold lime-to-aqua pb-8">Keeping it 100</h1>
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


		<Ideals />

		<Stats />

		<Client />

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

</script>


<style lang="scss">
</style>