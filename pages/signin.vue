<template>
	<div>

		<Nav />

		<div class="flex min-h-full flex-1 flex-col justify-center pt-16">

			<div id="block" class="w-full max-w-xl mx-auto mt-32 px-6 py-6 md:px-8 md:py-8 rounded-md bg-gray-900">
				<div class="mx-auto w-full mb-12">
					<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-9 tracking-tight text-center text-white">Sign in to your account</h1>
				</div>

				<div class="mx-auto w-full">
					<form class="space-y-6" action="#" method="POST">
						<div id="email" class="">
							<label for="email" class="block text-md font-bold leading-5 text-white">Email address</label>
							<div class="mt-2">
								<!-- use @apply to create default, selected, error states and toggle -->
								<input v-model="email" type="text"
									class="block w-full rounded-md px-4 py-4 border-0 bg-black text-white shadow-sm focus:ring-4 focus:ring-inset focus:ring-green-500 sm:text-xl sm:leading-6" />
							</div>
						</div>

						<div id="pass" class="">
							<div class="flex items-center justify-between">
								<label for="password" class="block text-md font-bold leading-5 text-white">Password</label>
							</div>
							<div class="mt-2">
								<!-- make a proper component for password inputs -->
								<input id="password" name="password" type="password" autocomplete="current-password"
									class="block w-full rounded-md px-4 py-4 border-0 bg-black text-white shadow-sm focus:ring-4 focus:ring-inset focus:ring-green-500 sm:text-xl sm:leading-6" />
							</div>
						</div>

						<div id="submit" class="">
							<!-- make a proper component for button and states -->
							<Button type="submit" :buttonLabel="'Sign in'" class="button primary w-full" />
						</div>
					</form>

				</div>
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">

	useHead({
		title: 'Saturdays.io - Sign in',
		meta: [
			{ name: 'description', content: 'Saturdays.io Sign in page' }
		]
	})

	const email = ref('');
	const password = ref(null);

</script>


<style lang="scss" scoped>
</style>