<template>
	<div class="min-h-full">
    <div class="bg-black">
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
              <DisclosureButton class="relative inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-200 hover:bg-gray-800/20 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/5 focus:ring-offset-2 focus:ring-offset-gray-900">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="hidden lg:ml-4 lg:block">
              <div class="flex items-center">
                <button type="button" class="relative flex-shrink-0 rounded-full bg-gray-900/20 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-0 focus:ring-white/5 focus:ring-offset-2 focus:ring-offset-gray-900">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Profile dropdown -->
                <Menu as="div" class="relative ml-3 flex-shrink-0">
                  <div>
                    <MenuButton class="relative flex rounded-full bg-gray-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
            <DisclosureButton>
              <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" :class="[item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-800 hover:bg-opacity-75', 'block rounded-md py-2 px-3 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</NuxtLink>
            </DisclosureButton>
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
              <button type="button" class="relative ml-auto flex-shrink-0 rounded-full bg-gray-900 p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600">
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

    <main class="-mt-10">
      <div class="mx-auto max-w-screen-2xl">
        <!-- Your content -->
        <section class="mx-auto rounded-lg">
          <form class=" bg-gray-800/50">
            <div class="space-y-12">
              <div class="max-w-4xl mx-auto pt-16 px-4 border-b border-white/10 pb-12">
                <h2 class="text-4xl font-medium leading-10 text-white">Profile information</h2>
                <p class="mt-1 text-base leading-6 text-gray-400">This information will be displayed publicly so be careful what you share.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <label for="username" class="block text-sm font-medium leading-6 text-white">Username</label>
                    <div class="mt-2">
                      <div class="flex rounded-sm bg-gray-800/70 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <input type="text"
                          name="username"
                          id="username"
                          autocomplete="username"
                          class="flex-1 border-0 bg-gray-800/70 py-2 pl-4 text-white focus:ring-0 sm:text-md sm:leading-6"
                          placeholder="janesmith" />
                      </div>
                    </div>
                  </div>


                  <div class="col-span-full">
                    <label for="photo" class="block text-md font-bold leading-6 uppercase text-white">Profile Picture</label>
                    <div class="mt-2 flex items-center gap-x-3">
                      <div id="avatar" class="block h-16 w-16" aria-hidden="true">
                        <img src="/avatars/monica_hall.png" />
                      </div>
                      <button type="button" class="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">Change</button>
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label for="cover-photo" class="block text-md font-bold leading-6 uppercase text-white">Upload Picture</label>
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                      <div class="text-center">
                        <PhotoIcon class="mx-auto h-12 w-12 text-gray-500" aria-hidden="true" />
                        <div class="my-2 flex items-center text-sm text-gray-400">
                          <label for="file-upload" class="relative cursor-pointer rounded-md bg-green-800 font-bold text-black text-base px-4 py-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500">
                            <span class="">Upload a photo</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                          </label>
                          <p class="my-2 pl-2 text-base">or drag and drop</p>
                        </div>
                        <p class="text-base leading-6 text-gray-400">WEBP, PNG, JPG, up to 2MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="user" class="max-w-4xl mx-auto px-4 border-b border-white/10 pb-12">
                <h2 class="text-2xl font-bold leading-8 text-white">Personal Information</h2>
                <p class="mt-1 text-base leading-6 text-gray-400">Lorem ipsum description text a permanent address where you can receive mail.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label for="first-name" class="block text-md font-bold leading-6 ppercase text-white">First name</label>
                    <div class="mt-2">
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                        class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="last-name" class="block text-md font-medboldium leading-6 uppercase text-white">Last name</label>
                    <div class="mt-2">
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                        class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="email" class="block text-md font-bold leading-6 uppercase text-white">Email address</label>
                    <div class="mt-2">
                      <input id="email" name="email" type="email" autocomplete="email" placeholder="{{ user.identities[0].identity_data.email }}"
                        class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="phone" class="block text-md font-bold leading-6 uppercase text-white">Phone</label>
                      <div class="mt-2">
                        <input id="phone" name="phone" type="phone" autocomplete="phone" placeholder="{{ user.identities[0].identity_data.phone }}"
                        class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                  </div>


                  <div class="sm:col-span-3">
                    <label for="country" class="block text-md font-bold leading-6 uppercase text-white">Country</label>
                    <div class="mt-2">
                      <select id="country" name="country" autocomplete="country-name"
                        class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black">
                        <option>Canada</option>
                        <option>United States</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label for="street-address" class="block text-md font-bold leading-6 uppercase text-white">Street address</label>
                    <div class="mt-2">
                      <input type="text" name="street-address" id="street-address"
                        autocomplete="street-address"
                        class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label for="street-address" class="block text-md font-bold leading-6 uppercase text-white">Street address 2 (Optional)</label>
                    <div class="mt-2">
                      <input type="text" name="street-address" id="street-address" autocomplete="street-address"
                        class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="sm:col-span-2 sm:col-start-1">
                    <label for="city" class="block text-md font-bold leading-6 uppercase text-white">City</label>
                    <div class="mt-2">
                      <input type="text" name="city" id="city" autocomplete="address-level2"
                        class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="region" class="block text-md font-bold leading-6 uppercase text-white">Province</label>
                    <div class="mt-2">
                      <input type="text" name="region" id="region" autocomplete="address-level1"
                        class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="postal-code" class="block text-md font-bold leading-6 uppercase text-white">Postal code</label>
                    <div class="mt-2">
                      <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code"
                        class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="max-w-4xl mx-auto px-4 border-b border-white/10 pb-12">
                <h2 class="text-2xl font-bold leading-8 text-white">Permissions</h2>
                <p class="mt-1 text-base leading-6 text-gray-400">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

                <div class="mt-10 space-y-10">
                  <fieldset>
                    <legend class="text-base font-bold leading-6 text-white">By Email</legend>
                    <div class="mt-6 space-y-6">
                      <div class="relative flex gap-x-3">
                        <div class="flex h-6 items-center">
                          <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-white/10 bg-gray-800/70 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900" />
                        </div>
                        <div class="text-sm leading-6">
                          <label for="comments" class="text-md font-bold text-white">Comments</label>
                          <p class="text-gray-400">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div class="relative flex gap-x-3">
                        <div class="flex h-6 items-center">
                          <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-white/10 bg-gray-800/70 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900" />
                        </div>
                        <div class="text-sm leading-6">
                          <label for="candidates" class="text-md font-bold text-white">Candidates</label>
                          <p class="text-gray-400">Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                      <div class="relative flex gap-x-3">
                        <div class="flex h-6 items-center">
                          <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-white/10 bg-gray-800/70 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900" />
                        </div>
                        <div class="text-sm leading-6">
                          <label for="offers" class="text-md font-bold text-white">Offers</label>
                          <p class="text-gray-400">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                </div>
              </div>
            </div>

            <div class="max-w-4xl mx-auto mt-6 px-4 md:px-0 pb-10 flex items-center justify-end gap-x-6">
              <button type="button" class="rounded-md border-2 border-green-500 px-6 py-4 text-base font-bold leading-6 text-white">Cancel</button>
              <button type="submit" class="rounded-md bg-green-500 px-6 py-4 text-base font-bold text-black shadow-sm hover:bg-green-200">Save</button>
            </div>
          </form>
			  </section>

      </div>
    </main>
  </div>
</template>


<script setup lang="ts">

	import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
	import { Bars3Icon, BellIcon, UserCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'

	const userProfile = {
		name: 'Hello Saturday',
		email: 'hello@saturdays.io',
		imageUrl: '/avatars/monica_hall.png',
	}

	const navigation = [
		{ name: 'Dashboard', to: '/dashboard', current: false },
		{ name: 'Profile', to: '/profile', current: true },
		{ name: 'Product', to: '/product', current: false },
		{ name: 'Reports', to: '/reports', current: false },
		{ name: 'Settings', to: '/settings', current: false },
	]

	const userNavigation = [
		{ name: 'Your Profile', to: '/profile' },
		{ name: 'Settings', to: '/settings' },
		{ name: 'Sign out', to: '/signin' },
	]


	const secondaryNavigation = [
		{ name: 'Overview', to: '/', current: true },
		{ name: 'Activity', to: '/', current: false },
		{ name: 'Settings', to: '/', current: false },
		{ name: 'Collaborators', to: '/', current: false },
		{ name: 'Notifications', to: '/', current: false },
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