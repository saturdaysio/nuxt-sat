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
									<source :src="item.video"  :type="item.type">
								</video>
							</div>
							<div id="meta" class="md:w-6/12 justify-center items-center">
								<h2 class="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold leading-8 lime-to-aqua">{{ item.title }}</h2>
								<p class="text-md sm:text-base md:text-lg lg:text-xl text-gray-200">{{ item.desc }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

</template>


<script setup lang="ts">

	const ideal = [
		{
			video: "/meme/leon-belt.mp4",
			title: "Be world-class",
			desc: "Being happy is the goal, but greatness is our mission. Clear eyes, full hearts, can't lose.",
			type: "video/mp4"
		},
		{
			video: "/meme/gordon-responsible.mp4",
			title: "Be accountable",
			titleClass: "lime-to-aqua",
			desc: "We don't make excuses, and we're allergic to bullshitters. Talk is cheap and actions speak louder than words. We have the results because we've done the work.",
			type: "video/mp4"
		},
		{
			video: "/meme/beyonce-dance.mp4",
			title: "Be supportive",
			desc: "We operate like a sports roster and always take the time to help each other improve.",
			type: "video/mp4"
		},
		{
			video: "/meme/awkwafina.mp4",
			title: "No rockstars",
			desc: "You won't find any 10Xers here, and nobody has time for egos. Check yourself before you wreck yourself.",
			type: "video/mp4"
		},
		{
			video: "/meme/hawaii.mp4",
			title: "Enjoy downtime",
			desc: "We like to travel and touch grass once in a while.",
			type: "video/mp4"
		},
	]

</script>


<style lang="scss">
</style>