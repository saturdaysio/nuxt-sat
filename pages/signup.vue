<template>
	<div>

		<Nav />

		<div class="flex min-h-full flex-1 flex-col justify-center pt-16">

			<div id="block" class="w-full max-w-xl mx-auto mt-32 px-6 py-6 md:px-8 md:py-8 rounded-md bg-gray-900/10">
				<div class="mx-auto w-full mb-12">
					<h1 class="text-3xl md:text-4xl font-bold leading-9 tracking-tight text-center lime-to-aqua">Sign up for an account</h1>
				</div>

				<div class="mx-auto w-full">
					<form @submit.prevent="signUp" class="space-y-6">
						<div id="email" class="">
							<label for="input-email" class="block text-md font-bold leading-5 text-white">Email</label>
							<!-- use @apply to create default, selected, error states and toggle -->
							<input id="input-email" v-model="email" name="email" type="email" autocomplete="email" aria-labelledby="email" placeholder="Enter your email address"
								class="block w-full rounded-md mt-2 px-4 py-4 border-0 bg-gray-800/70 font-light text-white shadow-sm focus:ring-4 focus:ring-inset focus:ring-green-500 sm:text-xl sm:leading-6" />
						</div>

						<div id="password" class="">
							<label for="input-pass" class="block text-md font-bold leading-5 text-white">Password</label>
							<!-- make a proper component for password inputs -->
							<input id="input-pass" v-model="password" name="password" type="password" autocomplete="current-password" aria-labelledby="password" placeholder="Enter your password"
								class="block w-full rounded-md mt-2 px-4 py-4 border-0 bg-gray-800/70 font-light text-white shadow-sm focus:ring-4 focus:ring-inset focus:ring-green-500 sm:text-xl sm:leading-6" />
						</div>

						<div id="submit" class="">
							<!-- make a proper component for button and states -->
							<Button buttton-type="submit" button-label="Sign up" button-class="primary block w-full"/>
						</div>
						<div id="home-route" class="text-center">
							<p class="text-base text-white">Already have an account? <NuxtLink :to="'/signin'" class="text-base leading-6 text-green-400 focus:underline focus:underline-offset-4">Sign in</NuxtLink></p>
						</div>
					</form>
				</div>

				<div id="disclaimer" class="mt-16">
					<p class="text-md leading-6 text-center font-gray-300">By continuing, you agree to Saturdays.io's <NuxtLink to="/terms-of-service">Terms of Service</NuxtLink> and <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>.</p>
				</div>
			</div>
		</div>

	</div>
</template>


<script setup>

	useHead({
		title: 'Saturdays.io - Sign in',
		meta: [
			{ name: 'description', content: 'Saturdays.io Sign in page' }
		]
	})


	const user = useSupabaseUser()
	const client = useSupabaseClient()
	const supabase = useSupabaseAuthClient()

	const loading = ref(false)
	const email = ref('')
	const password = ref('')
	const confirmPassword = ref('')
	const signUpOk = ref(false)


	const signUp = async () => {
		try {
			loading.value = true
			const { data, error } = await supabase.auth.signUp({ email: email.value, password: password.value })
			if (error) {
				throw error
			}
			else {
				signUpOk.value = true
			}
		} catch (error) {

		} finally {
			loading.value = false
		}
	}

	watchEffect(() => {
		if (user.value) {
			navigateTo('/dashboard', { replace: true })
		}
	})

</script>


<style lang="scss" scoped>
</style>
