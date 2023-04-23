<template>
	<div>

		<Nav />

		<section class="w-full mx-auto px-4 py-16 bg-black">
			<div class="lg:container mx-auto my-8">
				<div class="pb-8">
					<span class="text-white">Logged in</span>
				</div>
   
				<div id="logout">
					<Button class="button primary" @click="" :cta="'Sign out'" />
				</div>
			</div>
		</section>

		<Footer />

	</div>
</template>


<script setup lang="ts">

	useHead({
		title: 'Saturdays.io - Dashboard',
		meta: [
			{ name: 'description', content: 'Saturdays.io, Toronto based digital studio' }
		]
	})

	definePageMeta({
		middleware: ['auth']
	})

</script>


<style lang="scss">
</style>