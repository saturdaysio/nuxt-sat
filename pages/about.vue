<template>
	<div>

		<Nav />

		<Header intro="We bridge the gap between design and technology" />

		<section id="ethics" class="w-full mx:auto px-4 py-16 bg-black-900">
			<div class="container lg:max-w-5xl mx-auto my-8">
				<div class="pb-4">
					<h1 class="text-purple-pink pb-8">Keeping it 100</h1>
					<p class="text-xl text-white">We believe that our work and ethics
					define who we are. We're Human-centered Designers and Developers behind some of North America's
					biggest mobile apps and digital brands looking to make a net-positive impact in the world.</p>
				</div>
				<div>
				<p class="text-xl text-white">Our approach to building software prioritizes accessibility, user-centric design, and inclusion. We research and generate ideas, then
					build, test, and iterate on them using real-world analytics and actionable KPIs. The emphasis on data-driven design, diversity, user empathy, and sustainability aren't buzzwords, they're why we
					win.</p>
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

</script>


<style lang="scss">
</style>