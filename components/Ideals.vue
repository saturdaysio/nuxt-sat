<script setup lang="ts">

	const ideal = [
		{
			video: "/video/leon-belt.mp4",
			title: "Be world-class",
			desc: "We aren't just talking about our skills and achievements, it's how we conduct ourselves too.",
			type: "video/mp4"
		},
		{
			video: "/video/awkwafina.mp4",
			title: "No rockstars",
			desc: "You won't find any 10x developers, unicorns, or rockstars here and we're proud of that. We don't tolerate toxicity or narcissistic behaviour, period.",
			type: "video/mp4"
		},
		{
			video: "/video/uncle-ben.mp4",
			title: "Be accountable",
			titleClass: "lime-to-aqua",
			desc: "We don't make excuses, and we're allergic to bullshitters because talk is cheap and actions speak louder than words. We get results every time because we actually know what we're doing and have successfully done it before.",
			type: "video/mp4"
		},
		{
			video: "/video/drake-apple.mp4",
			title: "Be supportive",
			desc: "It isn't brilliant individual performances that make great teams, it's when talented individuals put their egos aside and work toward a common goal.",
			type: "video/mp4"
		},
		{
			video: "/video/hawaii.mp4",
			title: "Enjoy downtime",
			desc: "We like to travel and touch grass once in a while because there's more to life than working. We're not robots, and we don't expect you to be either.",
			type: "video/mp4"
		},
	]

</script>


<template>
	<section id="values" class="w-full px-4 sm:px-8 md:px-12 py-16 md:py-20 lg:py-24">
		<div class="container lg:max-w-7xl mx-auto my-8">
			<div class="max-w-5xl mx-auto pb-4">
				<div class="text-center">
					<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold lime-to-aqua">Our values</h2>
					<p class="text-xl md:text-2xl text-white">What we believe and what goes into our team, culture, and products.</p>
				</div>
			</div>

			<div class="mx-auto mt-8">
				<div class="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-1 gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-16 md:gap-y-24 lg:gap-y-32">
					<div v-for="item in ideal" :key="item.title" class="p-2 gap-x-8 md:flex items-center even:flex-row-reverse md:even:text-right">
						<div id="clip" class="md:w-6/12 mb-2">
							<video class="w-full rounded object-fill" autoplay muted playsinline loop>
								<source :src="item.video" :type="item.type">
							</video>
						</div>
						<div id="meta" class="md:w-6/12 justify-center items-center">
							<h2 class="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold leading-8 lime-to-aqua">{{ item.title }}</h2>
							<p class="text-md sm:text-base md:text-lg lg:text-xl text-gray-200">{{ item.desc }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>


<style lang="scss">
</style>