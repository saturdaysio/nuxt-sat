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
          <div class="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-800/10 border border-white/20 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <div>
              <div class="flex items-center gap-x-2">
                <div class="flex-none rounded-full bg-green-400 p-1 text-green-400">
                  <div class="h-2 w-2 rounded-full bg-current" />
                </div>
                <h1 class="flex gap-x-2 text-base leading-4">
                  <span class="font-bold text-white">nestjs</span>
                  <span class="text-gray-600">/</span>
                  <span class="font-bold text-white">mma-api</span>
                </h1>
              </div>
              <p class="mt-2 text-xs leading-6 text-gray-400">Hosted on Railway.app via GitHub main branch</p>
            </div>
            <div class="order-first flex-none rounded-full bg-green-400/10 px-4 py-2 text-sm font-medium text-green-400 ring-1 ring-inset ring-gray-400/30 sm:order-none">Production</div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="(stat, statIdx) in stats" :key="stat.name" :class="[statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '', 'border border-white/20 py-6 px-4 sm:px-6 lg:px-8']">
              <p class="text-sm font-medium leading-6 uppercase text-gray-400">{{ stat.name }}</p>
              <p class="mt-2 flex items-baseline gap-x-2">
                <span class="text-4xl font-semibold tracking-tight text-white">{{ stat.value }}</span>
                <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>
              </p>
            </div>
          </div>
        </header>

        <!-- Activity list -->
        <div class="border-t border-white/10 pt-11">
          <h2 class="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Last updated:</h2>
          <table class="mt-6 w-full whitespace-nowrap text-left">
            <colgroup>
              <col class="w-full sm:w-4/12" />
              <col class="lg:w-4/12" />
              <col class="lg:w-2/12" />
              <col class="lg:w-1/12" />
              <col class="lg:w-1/12" />
            </colgroup>
            <thead class="border-b border-white/10 text-sm leading-6 text-white">
              <tr>
                <th scope="col" class="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">Profile</th>
                <th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">Record</th>
                <th scope="col" class="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">Division</th>
                <th scope="col" class="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8">Last updated on</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              <tr v-for="item in activityItems" :key="item.commit">
                <td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  <div class="flex items-center gap-x-4">
                    <img :src="item.user.imageUrl" alt="" class="h-8 w-8 rounded-full bg-gray-800" />
                    <div class="truncate text-base font-bold leading-6 text-white">{{ item.user.name }}</div>
                  </div>
                </td>
                <td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                  <div class="flex gap-x-3">
                    <div class="font-mono text-md leading-6 text-gray-400">{{ item.commit }}</div>
                    <span class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-sm font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">{{ item.branch }}</span>
                  </div>
                </td>
                <td class="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                  <div class="flex items-center justify-end gap-x-2 sm:justify-start">
                    <time class="text-gray-400 sm:hidden" :datetime="item.dateTime">{{ item.date }}</time>
                    <div :class="[[item.status], 'flex-none rounded-full p-1']">
                      <div class="h-1.5 w-1.5 rounded-full bg-current" />
                    </div>
                    <div class="hidden text-md text-white sm:block">{{ item.status }}</div>
                  </div>
                </td>
                <td class="hidden py-4 pl-0 pr-8 text-md leading-6 text-gray-400 md:table-cell lg:pr-20">{{ item.duration }}</td>
                <td class="hidden py-4 pl-0 pr-4 text-right text-md leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                  <time :datetime="item.dateTime">{{ item.date }}</time>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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


	const stats = [
		{ name: 'Number of fighters', value: '40512' },
		{ name: 'Average search time', value: '3.65', unit: 'mins' },
		{ name: 'Server Uptime', value: '96', unit: 'hours' },
		{ name: 'Success rate', value: '98.5%' },
	]


	const statuses = {
    Completed: 'text-green-400 bg-green-400',
    Error: 'text-rose-400 bg-rose-400'
  }


	const activityItems = [
		{
			user: {
			name: 'Alexander Volkanovski',
			imageUrl: '/avatars/richard_hendricks.png',
			},
			commit: '25-2-0',
			branch: 'main',
			status: 'Featherweight',
			date: '45 minutes ago',
			dateTime: '2023-01-23T11:00',
		},
    {
			user: {
			name: 'Alexandre Pantoja',
			imageUrl: '/avatars/monica_hall.png',
			},
			commit: '25-2-0',
			branch: 'main',
			status: 'Flyweight',
			date: '45 minutes ago',
			dateTime: '2023-01-23T11:00',
		},
    {
			user: {
			name: 'Hello Saturdays',
			imageUrl: '/avatars/monica_hall.png',
			},
			commit: '99-99-0',
			branch: 'main',
			status: '',
			date: '45 minutes ago',
			dateTime: '2023-01-23T11:00',
		},
		// More items...
	]


	definePageMeta({
		middleware: ['auth']
	})

	useHead({
		title: 'Saturdays.io - MMA Database',
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