<template>
  <div>Waiting for login..</div>
</template>


<script setup lang="ts">

	useHead({
		title: 'Saturdays.io - Confirmation',
		meta: [
			{ name: 'description', content: 'confirmation page' }
		]
	})

	const user = useSupabaseUser()

	watch(user, () => {
	if (user.value) {
		return navigateTo('/')
	}
	},{ immediate: true })


	watchEffect(() => {
		if (user.value) {
			navigateTo('/dashboard', { replace: true })
		}
	})

</script>


<style lang="scss" scoped>
</style>
