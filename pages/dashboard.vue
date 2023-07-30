<template>
	<div class="min-h-full">
    <div class="bg-gray-900">
      <Disclosure as="nav" class="border-b border-white/10 border-opacity-25 lg:border-none" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div class="relative flex h-16 items-center justify-between lg:border-b lg:border-white/20 ">
            <div class="flex items-center px-2 lg:px-0">
              <div class="flex-shrink-0">
                <NuxtLink to="/" class="focus:outline-none">
                    <span class="sr-only">Saturdays.io</span>
                    <img class="block h-8 w-8" src="@/assets/img/logo.svg" alt="Saturdays.io logo" width="32px" height="32px" />
                </NuxtLink>
              </div>
              <div class="hidden lg:ml-10 lg:block">
                <div class="flex space-x-4">
                  <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" :class="[item.current ? 'bg-gray-700 text-white' : 'text-white hover:bg-gray-500 hover:bg-opacity-75', 'rounded-md py-2 px-3 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</NuxtLink>
                </div>
              </div>
            </div>

            <div class="flex lg:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="relative inline-flex items-center justify-center rounded-full bg-gray-900 p-2 text-white hover:bg-gray-800 hover:bg-opacity-25 hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-900/10">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="hidden lg:ml-4 lg:block">
              <div class="flex items-center">
                <button type="button" class="relative flex-shrink-0 rounded-full bg-gray-900/20 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Profile dropdown -->
                <Menu as="div" class="relative ml-3 flex-shrink-0">
                  <div>
                    <MenuButton class="relative flex rounded-full bg-gray-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600">
                      <span class="absolute -inset-1.5" />
                      <span class="sr-only">Open user menu</span>
                      <img class="h-8 w-8 rounded-full" :src="userProfile.imageUrl" alt="" />
                    </MenuButton>
                  </div>
                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                        <NuxtLink :to="item.to" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</NuxtLink>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel class="lg:hidden">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <DisclosureButton v-for="item in navigation" :key="item.name" as="NuxtLink" :to="item.to" :class="[item.current ? 'bg-gray-800 text-white' : 'text-white hover:bg-green-500 hover:bg-opacity-10', 'block rounded-sm py-2 px-4 text-base font-semibold']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
          </div>
          <div class="border-t border-white/25 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="userProfile.imageUrl" alt="user profile picture" />
              </div>
              <div class="ml-3">
                <div class="text-base font-bold text-white">{{ userProfile.name }}</div>
                <div class="text-sm font-base text-gray-400">{{ userProfile.email }}</div>
              </div>
              <button type="button" class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800/10 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :to="item.to" class="block rounded-md px-4 py-2 text-base font-medium text-white hover:bg-blue-100 hover:bg-opacity-25">{{ item.name }}</DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <header class="py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        </div>
      </header>
    </div>

    <main class="-mt-12">
      <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 bg-black">
        <!-- Your content -->
		<section>
        <header>
          <!-- Secondary navigation -->
          <nav class="flex overflow-x-auto border-b border-white/10 py-4">
            <ul role="list" class="flex min-w-full flex-none gap-x-6 text-sm font-bold leading-6 text-gray-400">
              <li v-for="item in secondaryNavigation" :key="item.name">
                <NuxtLink :to="item.to" :class="item.current ? 'text-gray-400' : ''">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Heading -->
          <div class="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <div>
              <div class="flex items-center gap-x-3">
                <div class="flex-none rounded-full bg-green-400 p-1 text-green-400">
                  <div class="h-2 w-2 rounded-full bg-current" />
                </div>
                <h1 class="flex gap-x-3 text-base leading-7">
                  <span class="font-bold text-white">supabase</span>
                  <span class="text-gray-600">/</span>
                  <span class="font-sbold text-white">saturdays-microsite</span>
                </h1>
              </div>
              <p class="mt-2 text-xs leading-6 text-gray-400">Deploys from GitHub via main branch</p>
            </div>
            <div class="order-first flex-none rounded-full bg-gray-400/10 px-4 py-2 text-sm font-medium text-green-400 ring-1 ring-inset ring-gray-400/30 sm:order-none">Production</div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="(stat, statIdx) in stats" :key="stat.name" :class="[statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '', 'border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8']">
              <p class="text-sm font-medium leading-6 text-gray-400">{{ stat.name }}</p>
              <p class="mt-2 flex items-baseline gap-x-2">
                <span class="text-4xl font-semibold tracking-tight text-white">{{ stat.value }}</span>
                <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>
              </p>
            </div>
          </div>
        </header>

        <!-- Activity list -->
        <div class="border-t border-white/10 pt-11">
          <h2 class="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Latest activity</h2>
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
                <th scope="col" class="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">User</th>
                <th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">Commit</th>
                <th scope="col" class="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">Status</th>
                <th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">Duration</th>
                <th scope="col" class="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8">Deployed at</th>
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
                    <div :class="[statuses[item.status], 'flex-none rounded-full p-1']">
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

	import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
	import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

	const userProfile = {
		name: 'Hello Saturday',
		email: 'hello@saturdays.io',
		imageUrl:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	}

	const navigation = [
		{ name: 'Dashboard', to: '/dashboard', current: true },
		{ name: 'Profile', to: '/profile', current: false },
		{ name: 'Store', to: '/store', current: false },
		{ name: 'Reports', to: '/', current: false },
		{ name: 'Settings', to: '/settings', current: false },
	]

	const userNavigation = [
		{ name: 'Your Profile', to: '/profile' },
		{ name: 'Settings', to: '/settings' },
		{ name: 'Sign out', to: '/signin' },
	]


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

	const statuses = { Completed: 'text-green-400 bg-green-400', Error: 'text-rose-400 bg-rose-400' }

	const activityItems = [
		{
			user: {
			name: 'Hello Saturdays',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
	const supabase = useSupabaseAuthClient()

	const loading = ref(false)


	const logout = async () => {
		let { error } = await supabase.auth.signOut();
		navigateTo('/signin');
	}

</script>


<style lang="scss">
</style>