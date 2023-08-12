<template>
	<div>

		<Nav />

		<div class="flex min-h-full flex-1 flex-col justify-center pt-16">

			<div id="block" class="w-full max-w-xl mx-auto mt-32 px-6 py-6 md:px-8 md:py-8 rounded-md bg-gray-900/10">
				<div class="mx-auto w-full mb-12">
					<h1 class="text-3xl md:text-4xl font-bold leading-9 tracking-tight text-center lime-to-aqua">Reset your password</h1>
				</div>

				<div class="mx-auto w-full">
					<form @submit.prevent="" class="space-y-6">
						<div id="password" class="">
							<label for="input-pass" class="block text-md font-bold leading-5 text-white">New Password</label>
							<!-- make a proper component for password inputs -->
							<input id="input-pass" v-model="password" name="password" type="password" autocomplete="new-password" aria-labelledby="password" placeholder="Enter your new password"
								class="block w-full rounded-md mt-2 px-4 py-4 border-0 bg-gray-800/70 font-light text-white shadow-sm focus:ring-4 focus:ring-inset focus:ring-green-500 sm:text-xl sm:leading-6" />
						</div>

						<div id="password" class="">
							<label for="input-pass" class="block text-md font-bold leading-5 text-white">Confirm New Password</label>
							<!-- make a proper component for password inputs -->
							<input id="input-pass" v-model="password" name="password" type="password" autocomplete="new-password" aria-labelledby="password" placeholder="Enter your new password again"
								class="block w-full rounded-md mt-2 px-4 py-4 border-0 bg-gray-800/70 font-light text-white shadow-sm focus:ring-4 focus:ring-inset focus:ring-green-500 sm:text-xl sm:leading-6" />
						</div>

						<div id="submit" class="">
							<!-- make a proper component for button and states -->
							<Button type="submit" @click="submitPassword" :buttonLabel="'Submit'" class="primary block w-full" />
						</div>

					</form>
				</div>

			</div>
		</div>
	</div>
</template>


<script setup>

	useHead({
		title: 'Saturdays.io - Reset Password',
		meta: [
			{ name: 'description', content: 'Saturdays.io Reset password page' }
		]
	})


	const client = useSupabaseClient()
	const user = useSupabaseUser()

	const password = ref(null);

	async function submitPassword() {
	}


	watchEffect(() => {
		if (user.value) {
			return navigateTo('/')
		}
	})

</script>


<style lang="scss" scoped>
</style>