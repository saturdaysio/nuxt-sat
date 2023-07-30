<template>
	<div>

		<Nav />

		<section id="profile" class="px-4 sm:px-8 md:px-12 py-16 md:py-20 lg:py-24">
			<div class="max-w-5xl mx-auto">
				<p class="text-white">{{  user }}</p>
				<div v-if="user" class="pb-4">
					<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold lime-to-aqua pb-8">User profile</h1>
					<p class="text-base md:text-xl text-white pb-4">uid: </p>
					<p class="text-base md:text-xl text-white pb-4">email: {{ user.identities[0].identity_data.email }}</p>
					<p class="text-base md:text-xl text-white pb-4">firstname</p>
					<p class="text-base md:text-xl text-white pb-4">lastname</p>
					<p class="text-base md:text-xl text-white pb-4">createdAt:</p>
					<p class="text-base md:text-xl text-white pb-4">lastUpdatedAt:</p>
				</div>
				<button @click="logout" class="primary">Sign out</button>
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

	const user = useSupabaseUser()
	const client = useSupabaseClient()
	const supabase = useSupabaseAuthClient()

	const loading = ref(false)

	
	const logout = async () => {
		let { error } = await supabase.auth.signOut();
		navigateTo('/signin');
	}

</script>


<style lang="scss">
</style>