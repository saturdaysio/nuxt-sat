<template>
	<div class="min-h-full">

    <Nav2 />

    <main class="pt-24">
      <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 bg-black">
        <!-- Your content -->

      </div>
    </main>
  </div>
</template>


<script setup lang="ts">

	const userProfile = {
		name: 'Hello Saturday',
		email: 'hello@saturdays.io',
		imageUrl: '/avatars/monica_hall.png',
	}


	definePageMeta({
		middleware: ['auth']
	})

	useHead({
		title: 'Saturdays.io - Settings',
		meta: [
			{ name: 'description', content: 'Saturdays.io admin dashboard' },
		]
	})

	const user = useSupabaseUser()
	const client = useSupabaseClient()

	const loading = ref(false)


</script>


<style lang="scss">
</style>