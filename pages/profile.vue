<template>
	<div>

		<Nav />

			<section id="profile" class="px-4 sm:px-8 md:px-12 py-16 md:py-20 lg:py-24">
				<div class="max-w-5xl mx-auto">
					<div v-if="user" class="pb-4">
						<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold lime-to-aqua pb-8">User profile</h1>
						<p class="text-white">{{  user }}</p>
						<div class="w-16 h-16 rounded-full mt-12 mb-4 bg-blue-400">
							<h2 class="text-xl font-bold text-center text-white">PC</h2>
						</div>
						<p class="text-base md:text-xl text-white pb-4">ID: </p>
						<p class="text-base md:text-xl text-white pb-4">Email: {{ user.identities[0].identity_data.email }}</p>
						<p class="text-base md:text-xl text-white pb-4">First name: {{  }}</p>
						<p class="text-base md:text-xl text-white pb-4">Last name: {{  }}</p>
						<p class="text-base md:text-xl text-white pb-4">Phone: {{  }}</p>
						<p class="text-base md:text-xl text-white pb-4">Created at: {{  }}</p>
						<p class="text-base md:text-xl text-white pb-4">Last update at: {{ }}</p>
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