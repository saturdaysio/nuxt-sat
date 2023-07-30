<template>
	<div>

		<Nav />

		<Header intro="Secret profile auth page" />

		<section id="ethics" class="px-4 sm:px-8 md:px-12 py-16 md:py-20 lg:py-24">
			<div class="max-w-5xl mx-auto">
				<div class="pb-4">
					<h1 class="text-4xl md:text-5xl lg:text-6xl text-center font-bold lime-to-aqua pb-8">Secret profile page means auth works</h1>
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


		<Footer />

	</div>
</template>


<script setup lang="ts">

	definePageMeta({
		middleware: ['auth']
	})

	useHead({
		title: 'Saturdays.io - Profile',
		meta: [
			{ name: 'description', content: 'Saturdays.io profile page' },
		]
	})

</script>


<style lang="scss">
</style>