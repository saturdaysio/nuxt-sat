<script setup lang="ts">

	defineProps(['error'])

	const handleClearError = () => clearError({ redirect: '/' })

	useHead({
		title: 'Saturdays.io - Error',
		meta: [
			{ name: 'description', content: 'Error page' }
		]
	})

</script>


<template>
	<div class="flex flex-col justify-between">

		<Nav />

		<section id="video-hero" class="w-full h-auto mx-auto overflow-hidden z-0">
			<div class="relative w-full h-full mx-auto">
				<div id="hero-text-overlay" class="absolute w-full h-full mx-auto z-30 flex">
					<div class="max-w-7xl mx-auto inline-flex self-center flex-col px-2">
						<div class="text-center">
							<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight lime-to-aqua">
								ERROR {{ error.statusCode }}
							</h1>
							<p class="text-2xl font-base text-white">
								{{ error.message }}
							</p>
						</div>

						<div class="inline-flex justify-center mt-4">
							<Button buttton-type="submit" button-label="Go Home" button-class="primary block w-full" @click="handleClearError" />
						</div>
					</div>
				</div>

				<video id="hero-video" autoplay muted loop playsinline class="w-full h-screen object-cover" controlslist="nodownload noremoteplayback disablepictureinpicture disableremoteplayback">
					<source src="@/assets/video/conor-404.mp4" type="video/mp4">
				</video>

			</div>
	    </section>
		
		<Footer />

	</div>
</template>


<style lang="scss">
</style>