<template>
	<div class="min-h-full">

    <Nav2 />

    <main class="py-24">
      <div class="mx-auto max-w-7xl px-2 md:px-4">
        <!-- Your content -->
		<section class="mx-auto border border-white/5">
        	<form class="" @submit.prevent="updateProfile">
        		<div class="space-y-4 md:space-y-6 lg:space-y-8">

					<div class="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-blue-400/20 rounded-md">
						<h2 class="text-3xl font-bold leading-8 text-white">Change Password</h2>
						<p class="mt-2 text-base leading-6 text-gray-400">Enter your existing password and your new password to change it.</p>

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
									:value="user.password"
								/>
							</div>

							<div class="">
								<Button buttton-type="submit" button-label="Change password" button-class="primary" />
							</div>
						</div>
					</div>

					<div class="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-green-400/20 rounded-md">
						<h2 class="text-3xl font-bold leading-8 text-white">Delete Account</h2>
						<p class="mt-2 text-base leading-6 text-gray-400">Enter your existing password and your new password to change it.</p>

						<div class="mt-6">
							<Button buttton-type="submit" button-label="Delete account" button-class="primary" />
						</div>
					</div>

					<div v-if="user" class="max-w-7xl mx-auto px-4 py-6 bg-purple-400/20 rounded-md">
						<h2 class="text-3xl font-bold leading-8 text-white">Sign out</h2>
		                <p class="mt-2 text-base leading-6 text-gray-400">Flavour text for logging out.</p>

						<div class="mt-8 flex items-center justify-start">
							<Button buttton-type="submit" button-label="Sign out" button-class="secondary" @click="logout" />
						</div>
					</div>
					
				</div>

				
			</form>
        </section>
      </div>
    </main>
  </div>
</template>


<script setup lang="ts">

	import { ProfilePermissions, useProfileStore } from "~/store/profile";

	definePageMeta({
		middleware: ['auth']
	})

	useHead({
		title: 'Saturdays.io - Account Settings',
		meta: [
			{ name: 'description', content: 'Saturdays.io admin dashboard' },
		]
	})


  const profileStore = useProfileStore()
  const client = useSupabaseClient()
  await profileStore.fetchProfile(client)
  const user = profileStore.getProfile

  const loading = ref(false)

  const supabase = useSupabaseAuthClient()

  const updateProfile = async (event: Event) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    loading.value = true
    if (!user || !user.user) return

    // remove fields not in interface
    delete data["file-upload"]

    // convert to array of permissions
    const permissions = Object.keys({
      comments: data.comments === 'on',
      candidates: data.candidates === 'on',
      offers: data.offers === 'on',
    }).filter(key => data[key])

    delete data.comments
    delete data.candidates
    delete data.offers

    const {error} = await supabase.from('users').upsert({
      // @ts-ignore
      id: user.user.id,
      ...data,
      // @ts-ignore
      profile_permissions: permissions
    }).select()
    loading.value = false
  }

  // Signout function
  const logout = async () => {
    let {error} = await supabase.auth.signOut();
    navigateTo('/signin');
  }


</script>


<style lang="scss">
</style>