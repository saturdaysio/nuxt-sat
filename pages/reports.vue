<template>
	<div class="min-h-full">
    <div class="bg-gray-900">
      <Disclosure as="nav" class="border-b border-white/10 border-opacity-25 lg:border-none" v-slot="{ open }">
        <div class="mx-auto max-w-screen-2xl px-2 sm:px-4 lg:px-0">
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
                  <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" :class="[item.current ? 'bg-gray-700/20 text-white' : 'text-white hover:bg-gray-800/20 hover:bg-opacity-75', 'rounded-md py-2 px-3 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</NuxtLink>
                </div>
              </div>
            </div>

            <div class="flex lg:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="relative inline-flex items-center justify-center rounded-md bg-gray-600 p-2 text-gray-200 hover:bg-gray-800/20 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="hidden lg:ml-4 lg:block">
              <div class="flex items-center">
                <button type="button" class="relative flex-shrink-0 rounded-full bg-gray-900/20 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-0 focus:ring-white/5 focus:ring-offset-2 focus:ring-offset-gray-600/5">
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
            <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :to="item.to" :class="[item.current ? 'bg-gray-700 text-white' : 'text-white hover:bg-gray-500 hover:bg-opacity-75', 'block rounded-md py-2 px-3 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
          </div>
          <div class="border-t border-gray-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="userProfile.imageUrl" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-white">{{ userProfile.name }}</div>
                <div class="text-sm font-medium text-gray-300">{{ userProfile.email }}</div>
              </div>
              <button type="button" class="relative ml-auto flex-shrink-0 rounded-full bg-gray-600 p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :to="item.to" class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-500 hover:bg-opacity-75">{{ item.name }}</DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <header class="py-12">
      </header>
    </div>

    <main class="-mt-12">
      <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 bg-black">
        <!-- Your content -->

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
		imageUrl: '/avatars/monica_hall.png',
	}

	const navigation = [
		{ name: 'Dashboard', to: '/dashboard', current: false },
		{ name: 'Profile', to: '/profile', current: false },
		{ name: 'Product', to: '/product', current: false },
		{ name: 'Reports', to: '/reports', current: true },
		{ name: 'Settings', to: '/settings', current: false },
	]

	const userNavigation = [
		{ name: 'Your Profile', to: '/profile' },
		{ name: 'Settings', to: '/settings' },
		{ name: 'Sign out', to: '/signin' },
	]



	definePageMeta({
		middleware: ['auth']
	})

	useHead({
		title: 'Saturdays.io - Settings',
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