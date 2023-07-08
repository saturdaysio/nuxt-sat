<template>
	<section class="relative isolate overflow-hidden pt-16 -z-10">
		<div class="max-w-6xl mx-auto px-8 py-32 sm:py-48 lg:py-56">
			<div class="text-center">
				<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center text-white">{{ intro }}</h1>
			</div>
			<!-- svg -->
			<div class="">
				<svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
					<defs>
						<pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
							<path d="M.5 200V.5H200" fill="none" />
						</pattern>
					</defs>
				</svg>
				<!-- top-right -->
				<div class="overflow-hidden absolute left-[calc(0%-2rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
					<div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
				</div>
				<!-- bot-right -->
				<div class="absolute overflow-hidden inset-x-0 -z-10 transform-gpu  blur-3xl sm:top-[calc(10%-3rem)]" aria-hidden="true">
					<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
				</div>
			</div>
		</div>
	</section>
</template>

  
<script setup lang="ts">

	const props = defineProps({
		intro: String,
	})

</script>


<style lang="scss">
</style>