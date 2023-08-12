<template>
	<div>

		<Nav />

		<Header intro="Saturdays is a Canadian digital studio based in Toronto" />

		<section class="px-4 sm:px-8 md:px-12 py-16 md:py-20 lg:py-24">
			<div class=" max-w-6xl mx-auto">
				<h1 class="text-3xl md:text-4xl lg:text-5xl text-center font-bold lime-to-aqua">
					We're a Data-driven digital studio that focuses on the Design, Development, and Strategy of digital products.
				</h1>
			</div>
		</section>

		
		<section id="peek" class="px-4 md:px-8 py-16 md:py-20 lg:py-24">
			<div class="">
				<div class="mt-8 pb-8">
					<h1 class="text-4xl md:text-5xl lg:text-6xl text-center font-bold lime-to-aqua">
						What we're making
					</h1>
				</div>
				<div class="max-w-7xl mx-auto">
					<nuxt-img src="/mobile.webp" width="1600" height="1000"  sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw" alt="mobile app designs" loading="lazy" />
				</div>
			</div>
		</section>

		
		<Stats />

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