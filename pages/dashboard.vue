<template>
	<div class="min-h-full">
    
    <Nav2 />

    <main class="py-24">
      <div class="mx-auto max-w-full px-4">
        <!-- Your content -->
		<section>
        <header>
          <!-- Secondary navigation -->

          <!-- Heading -->
          <div class="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-800/10 border border-white/20 px-4 py-8 sm:flex-row sm:items-center  lg:px-8 ">
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
		<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-2 pt-4">
			<div v-for="item in quickLinks" :key="item.id" class="">
				<div class="card rounded-sm border border-gray-200 hover:border-green-400 text-white hover:text-blue-400">
					<NuxtLink :to="item.to">
						<div class="image-thumb bg-gray-800/40">
							<img :src="item.imageUrl" :alt="item.alt" class="object-fit" loading="lazy" :width="item.width" :height="item.height" />
						</div>
						<div class="data-bot bg-black p-4">
							<div class="text-base sm:text-lg md:text-xl font-bold">
								{{ item.name }}
							</div>
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>

	</section>
      </div>
    </main>
  </div>
</template>


<script setup lang="ts">

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


	// Dummy data
	const stats = [
		{ name: 'Number of deploys', value: '4000' },
		{ name: 'Average deploy time', value: '32', unit: 'seconds' },
		{ name: 'Number of servers', value: '2' },
		{ name: 'Status', value: 'Online' },
	]

	const statuses = {
		Completed: 'text-green-400 bg-green-400',
		Error: 'text-rose-400 bg-rose-400'
  	}

	const quickLinks = [
		{
			id: '0',
			name: 'Alexander Volkanovski',
			imageUrl: '/avatars/3949584.png',
			alt: 'Alexander Volkanovski',
			width: '600',
			height: '436',
			to: '/athlete/86488/bio',
			lastUpdate: '2023-01-23T11:00',
		},
    	{
			id: '1',
			name: 'Holly Holm',
			imageUrl: '/avatars/3028404.png',
			alt: 'Holly Holm',
			width: '600',
			height: '436',
			to: '/athlete/68396/bio',
			lastUpdate: '2023-01-23T11:00',
		},
    	{
			id: '2',
			name: 'Jessica Rose-Clarke',
			imageUrl: '/avatars/3902226.png',
			alt: 'Jessica Rose-Clarke',
			width: '600',
			height: '436',
			to: '/athlete/61072/bio',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '3',
			name: 'Jon Jones',
			imageUrl: '/avatars/2335639.png',
			alt: 'Jon Jones',
			width: '600',
			height: '436',
			to: '/athlete/69643/bio',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '4',
			name: 'Anthony Smith',
			imageUrl: '/avatars/2512976.png',
			alt: 'Anthony Smith',
			width: '600',
			height: '436',
			to: '/athlete/83221/bio',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '5',
			name: 'UFC 273',
			imageUrl: '/avatars/ufc-273-Header_1024x.webp',
			alt: 'ufc 273',
			width: '600',
			height: '436',
			to: '/event/5765/overview',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '6',
			name: 'UFC 283',
			imageUrl: '/avatars/ufc-283-Header_1024x.webp',
			alt: 'ufc 283',
			width: '1024',
			height: '495',
			to: '/event/1090/overview',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '7',
			name: 'UFC 293',
			imageUrl: '/avatars/ufc-293-Header_1024x.webp',
			alt: 'ufc 293',
			width: '1024',
			height: '495',
			to: '/event/2685/overview',
			lastUpdate: '2023-01-23T11:00',
		},
		// More items...
	]

</script>


<style lang="scss">
</style>