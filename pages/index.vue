<template>
	<div>

		<Nav />

		<Header intro="Saturdays is a Canadian digital studio based in Toronto" />

		<section class="w-full mx-auto px-4 py-16">
			<div class="container lg:max-w-6xl mx-auto my-8">
				<h1 class="text-3xl md:text-4xl lg:text-5xl text-center text-purple-pink">
					We're a Data-driven digital studio that focuses on the Design, Development and Strategy of digital products.
				</h1>
			</div>
		</section>

		
		<section id="preview" class="w-full mx-auto px-4 py-16 bg-black">
			<div class="container mx-auto mt-8">
				<div class="pb-8">
					<h1 class="text-4xl md:text-5xl lg:text-6xl text-center text-purple-pink">
						What we're making
					</h1>
				</div>
				<div class="lg:max-w-7xl mx-auto">
					<img src="@/assets/img/mobile.webp" width="1600" height="1000" alt="mobile app interface examples" preload loading="lazy" draggable="false" />
				</div>
			</div>
		</section>

		
		<Result />

		<Client />

		<Contact />

		<Footer />

	</div>
</template>


<script setup lang="ts">

	useHead({
		title: 'Saturdays.io - Digital studio',
		meta: [
			{ name: 'description', content: 'Saturdays.io, Toronto based digital studio' }
		]
	})

</script>


<style lang="scss">
</style>