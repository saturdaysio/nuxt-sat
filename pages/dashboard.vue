<template>
	<div class="min-h-full">
    
    <Nav2 />

    <main class="pt-24">
      <div class="mx-auto max-w-full px-4 pb-12 sm:px-6 lg:px-8 bg-black">
        <!-- Your content -->
		<section>
        <header>
          <!-- Secondary navigation -->

          <!-- Heading -->
          <div class="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-800/10 border border-white/20 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8 ">
            <div>
              <div class="flex items-center gap-x-2">
                <div class="flex-none rounded-full bg-green-400 p-1 text-green-400">
                  <div class="h-2 w-2 rounded-full bg-current" />
                </div>
                <h1 class="flex gap-x-2 text-base leading-4">
                  <span class="font-bold text-white">supabase</span>
                  <span class="text-gray-600">/</span>
                  <span class="font-bold text-white">saturdays-microsite</span>
                </h1>
              </div>
              <p class="mt-2 text-xs leading-6 text-gray-400">Deploys from GitHub via main branch</p>
            </div>
            <div class="order-first flex-none rounded-full bg-green-400/10 px-4 py-2 text-sm font-medium text-green-400 ring-1 ring-inset ring-gray-400/30 sm:order-none">Production</div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="(stat, statIdx) in stats" :key="stat.name" :class="[statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '', 'border border-white/20 py-6 px-4 sm:px-6 lg:px-8']">
              <p class="text-sm font-medium leading-6 text-gray-400">{{ stat.name }}</p>
              <p class="mt-2 flex items-baseline gap-x-2">
                <span class="text-4xl font-semibold tracking-tight text-white">{{ stat.value }}</span>
                <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>
              </p>
            </div>
          </div>
        </header>

        <!-- Activity list -->

	</section>
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


	const secondaryNavigation = [
		{ name: 'Overview', to: '#', current: true },
		{ name: 'Activity', to: '#', current: false },
		{ name: 'Settings', to: '#', current: false },
		{ name: 'Collaborators', to: '#', current: false },
		{ name: 'Notifications', to: '#', current: false },
	]


	const stats = [
		{ name: 'Number of deploys', value: '405' },
		{ name: 'Average deploy time', value: '3.65', unit: 'mins' },
		{ name: 'Number of servers', value: '3' },
		{ name: 'Success rate', value: '98.5%' },
	]


	const statuses = {
    Completed: 'text-green-400 bg-green-400',
    Error: 'text-rose-400 bg-rose-400'
  }


	const activityItems = [
		{
			user: {
			name: 'Richard Hendricks',
			imageUrl: '/avatars/richard_hendricks.png',
			},
			commit: '2d89f0c8',
			branch: 'main',
			status: 'Completed',
			duration: '25s',
			date: '45 minutes ago',
			dateTime: '2023-01-23T11:00',
		},
    {
			user: {
			name: 'Monica Hall',
			imageUrl: '/avatars/monica_hall.png',
			},
			commit: '2d89f0c8',
			branch: 'main',
			status: 'Completed',
			duration: '25s',
			date: '45 minutes ago',
			dateTime: '2023-01-23T11:00',
		},
    {
			user: {
			name: 'Hello Saturdays',
			imageUrl: '/avatars/monica_hall.png',
			},
			commit: '2d89f0c8',
			branch: 'main',
			status: 'Completed',
			duration: '25s',
			date: '45 minutes ago',
			dateTime: '2023-01-23T11:00',
		},
		// More items...
	]


	definePageMeta({
		middleware: ['auth']
	})

	useHead({
		title: 'Saturdays.io - Dashboard',
		meta: [
			{ name: 'description', content: 'Saturdays.io admin dashboard' },
		]
	})

	const user = useSupabaseUser()
	const client = useSupabaseClient()

	const loading = ref(false)


	const logout = async () => {
		let { error } = await client.auth.signOut();
		navigateTo('/signin');
	}

</script>


<style lang="scss">
</style>