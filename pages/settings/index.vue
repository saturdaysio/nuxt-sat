<script setup lang="ts">

	import { useProfileStore } from "~/store/profile";

	definePageMeta({
		middleware: ['auth'],
		pageTransition: false,
		layoutTransition: false
	})

	useHead({
		title: 'Saturdays.io - Account Settings',
		meta: [
			{ name: 'description', content: 'Saturdays.io admin account settings' },
		]
	})


	const profileStore = useProfileStore()
	const supabase = useSupabaseClient()
	await profileStore.fetchProfile(supabase)
	const user = profileStore.getProfile

	const loading = ref(false)


	// Update password function
	const updatePassword = async (event: Event) => {
	}


	// Signout user function
	const signOut = async () => {
		let { error } = await supabase.auth.signOut()
		if (error) console.log(error)
		navigateTo('/');
	}

</script>


<template>
	<div class="min-h-full">

    <Nav2 />

    <main class="pt-24">
      <div class="mx-auto max-w-7xl px-2 md:px-4">
        <!-- Your content -->
		<section class="mx-auto">
        	<form class="" @submit.prevent="updatePassword">
        		<div class="space-y-4 md:space-y-6 lg:space-y-8">

					<div class="max-w-7xl mx-auto px-4 py-8 bg-gray-800/40 rounded-md border border-white/10">
						<h1 class="text-2xl font-bold leading-8 text-white">Change Password</h1>
						<span class="text-base leading-6 text-gray-400">Enter your existing password and your new password to change it.</span>

						<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
							<div class="col-span-1">
								<CustomInput
									inputType="text"
									inputName="password"
									label="Current Password"
									id="password"
									span="3"
									autocomplete="password"
									placeholder="password"
									:value="user.password"
								/>
							</div>
							<div class="sm:col-span-1">
								<CustomInput
									inputType="text"
									inputName="new_password"
									label="New Password"
									id="password"
									span="3"
									autocomplete="password"
									placeholder="new password"
									:value="user.new_password"
								/>
							</div>
						</div>
						<div class="mt-8">
							<Button buttton-type="submit" button-label="Change password" button-class="primary" />
						</div>
					</div>

					<div class="max-w-7xl mx-auto px-4 py-8 bg-gray-800/40 rounded-md border border-white/10">
						<h2 class="text-2xl font-bold leading-8 text-white">Delete Account</h2>
						<p class="mt-2 text-base leading-6 text-gray-400">Enter your existing password and your new password to change it.</p>

						<div class="mt-8">
							<Button buttton-type="submit" button-label="Delete account" button-class="danger" />
						</div>
					</div>

					<div v-if="user" class="max-w-7xl mx-auto px-4 py-8 bg-gray-800/40 rounded-md border border-white/10">
						<h2 class="text-2xl font-bold leading-8 text-white">Sign out</h2>
		                <p class="mt-2 text-base leading-6 text-gray-400">Flavour text for logging out.</p>

						<div class="mt-8">
							<Button buttton-type="submit" button-label="Signout" button-class="cta" @click="signOut" />
						</div>
					</div>
					
				</div>

				
			</form>
        </section>
      </div>
    </main>
  </div>
</template>


<style lang="scss">
</style>