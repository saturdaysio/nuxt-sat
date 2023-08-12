<template>
  <div class="min-h-full">
    <Nav2 />

    <main class="pt-24">
      <div class="mx-auto max-w-screen-2xl">
        <!-- Your content -->
        <section class="mx-auto rounded-lg">
          <form class=" bg-gray-800/50"
                @submit.prevent="updateProfile"

          >
            <div class="space-y-12">
              <div class="max-w-4xl mx-auto pt-16 px-4 border-b border-white/10 pb-12">
                <h2 class="text-4xl font-medium leading-10 text-white">Profile information</h2>
                <p class="mt-1 text-base leading-6 text-gray-400">This information will be displayed publicly so be
                  careful what you share.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <label for="username" class="block text-sm font-medium leading-6 text-white">Username</label>
                    <div class="mt-2">
                      <div
                          class="flex rounded-sm bg-gray-800/70 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <input type="text"
                               name="username"
                               id="username"
                               autocomplete="username"
                               class="flex-1 border-0 bg-gray-800/70 py-2 pl-4 text-white focus:ring-0 sm:text-md sm:leading-6"
                               placeholder="janesmith"

                               :value="user.username"/>
                      </div>
                    </div>
                  </div>


                  <div class="col-span-full">
                    <label for="photo" class="block text-md font-bold leading-6 uppercase text-white">Profile
                      Picture</label>
                    <div class="mt-2 flex items-center gap-x-3">
                      <div id="avatar" class="block h-16 w-16" aria-hidden="true">
                        <img src="/avatars/monica_hall.png"/>
                      </div>
                      <button type="button"
                              class="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
                        Change
                      </button>
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label for="cover-photo" class="block text-md font-bold leading-6 uppercase text-white">Upload
                      Picture</label>
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                      <div class="text-center">
                        <PhotoIcon class="mx-auto h-12 w-12 text-gray-500" aria-hidden="true"/>
                        <div class="my-2 flex items-center text-sm text-gray-400">
                          <label for="file-upload"
                                 class="relative cursor-pointer rounded-md bg-green-800 font-bold text-black text-base px-4 py-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500">
                            <span class="">Upload a photo</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
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
                <p class="mt-1 text-base leading-6 text-gray-400">Lorem ipsum description text a permanent address where
                  you can receive mail.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label for="first-name" class="block text-md font-bold leading-6 ppercase text-white">First
                      name</label>
                    <div class="mt-2">
                      <input type="text" name="first_name" id="first-name" autocomplete="given-name"
                             class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"

                             :value="user.first_name"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="last-name" class="block text-md font-medboldium leading-6 uppercase text-white">Last
                      name</label>
                    <div class="mt-2">
                      <input type="text" name="last_name" id="last-name" autocomplete="family-name"
                             class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"

                             :value="user.last_name"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="email" class="block text-md font-bold leading-6 uppercase text-white">Email
                      address</label>
                    <div class="mt-2">
                      <input id="email" name="email" type="email" autocomplete="email" placeholder="email@host.com"
                             class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"

                             :value="user.email || ''"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="phone" class="block text-md font-bold leading-6 uppercase text-white">Phone</label>
                    <div class="mt-2">
                      <input id="phone" name="phone" type="tel" autocomplete="phone" placeholder="xxx-xxx-xxxx"
                             class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"

                             :value="user.phone"
                      />
                    </div>
                  </div>


                  <div class="sm:col-span-3">
                    <label for="country" class="block text-md font-bold leading-6 uppercase text-white">Country</label>
                    <div class="mt-2">
                      <select id="country" name="country" autocomplete="country-name"

                              v-model="user.country"
                              class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black">
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option>
                        <option value="Mexico">Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label for="street-address" class="block text-md font-bold leading-6 uppercase text-white">Street
                      address</label>
                    <div class="mt-2">
                      <input type="text" name="address_1" id="street-address"
                             autocomplete="street-address"
                             class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                             :value="user.address_1"
                      />
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label for="street-address" class="block text-md font-bold leading-6 uppercase text-white">Street
                      address 2 (Optional)</label>
                    <div class="mt-2">
                      <input type="text" name="address_2" id="street-address" autocomplete="street-address"
                             class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                             :value="user.address_2"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2 sm:col-start-1">
                    <label for="city" class="block text-md font-bold leading-6 uppercase text-white">City</label>
                    <div class="mt-2">
                      <input type="text" name="city" id="city" autocomplete="address-level2"
                             class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                             :value="user.city"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="region" class="block text-md font-bold leading-6 uppercase text-white">Province</label>
                    <div class="mt-2">
                      <input type="text" name="province" id="region" autocomplete="address-level1"
                             class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                             :value="user.province"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="postal-code" class="block text-md font-bold leading-6 uppercase text-white">Postal
                      code</label>
                    <div class="mt-2">
                      <input type="text" name="postal_code" id="postal-code" autocomplete="postal-code"
                             class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                             :value="user.postal_code"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="max-w-4xl mx-auto px-4 border-b border-white/10 pb-12">
                <h2 class="text-2xl font-bold leading-8 text-white">Permissions</h2>
                <p class="mt-1 text-base leading-6 text-gray-400">We'll always let you know about important changes, but
                  you pick what else you want to hear about.</p>

                <div class="mt-10 space-y-10">
                  <fieldset>
                    <legend class="text-base font-bold leading-6 text-white">By Email</legend>
                    <div class="mt-6 space-y-6">
                      <div class="relative flex gap-x-3">
                        <div class="flex h-6 items-center">
                          <input id="comments" name="comments" type="checkbox"
                                 class="h-4 w-4 rounded border-white/10 bg-gray-800/70 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"

                          />
                        </div>
                        <div class="text-sm leading-6">
                          <label for="comments" class="text-md font-bold text-white">Comments</label>
                          <p class="text-gray-400">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div class="relative flex gap-x-3">
                        <div class="flex h-6 items-center">
                          <input id="candidates" name="candidates" type="checkbox"
                                 class="h-4 w-4 rounded border-white/10 bg-gray-800/70 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"

                          />
                        </div>
                        <div class="text-sm leading-6">
                          <label for="candidates" class="text-md font-bold text-white">Candidates</label>
                          <p class="text-gray-400">Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                      <div class="relative flex gap-x-3">
                        <div class="flex h-6 items-center">
                          <input id="offers" name="offers" type="checkbox"
                                 class="h-4 w-4 rounded border-white/10 bg-gray-800/70 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"

                          />
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
              <button type="button"
                      class="rounded-md border-2 border-green-500 px-6 py-4 text-base font-bold leading-6 text-white">
                Cancel
              </button>
              <button type="submit"
                      class="rounded-md bg-green-500 px-6 py-4 text-base font-bold text-black shadow-sm hover:bg-green-200">
                Save
              </button>
            </div>
          </form>
        </section>

      </div>
    </main>
  </div>
</template>


<script setup lang="ts">


import { PhotoIcon } from '@heroicons/vue/24/outline'
import { ProfilePermissions, useProfileStore } from "~/store/profile";

const userProfile = {
  name: 'Hello Saturday',
  email: 'hello@saturdays.io',
  imageUrl: '/avatars/monica_hall.png',
}

const navigation = [
  {name: 'Dashboard', to: '/dashboard', current: false},
  {name: 'Profile', to: '/profile', current: true},
  {name: 'Product', to: '/product', current: false},
  {name: 'Reports', to: '/reports', current: false},
  {name: 'Settings', to: '/settings', current: false},
]

const userNavigation = [
  {name: 'Your Profile', to: '/profile'},
  {name: 'Settings', to: '/settings'},
  {name: 'Sign out', to: '/signin'},
]


const secondaryNavigation = [
  {name: 'Overview', to: '/', current: true},
  {name: 'Activity', to: '/', current: false},
  {name: 'Settings', to: '/', current: false},
  {name: 'Collaborators', to: '/', current: false},
  {name: 'Notifications', to: '/', current: false},
]


definePageMeta({
  middleware: ['auth']
})

useHead({
  title: 'Saturdays.io - Profile',
  meta: [
    {name: 'description', content: 'Saturdays.io admin dashboard'},
  ]
})

const profileStore = useProfileStore()
const client = useSupabaseClient()
await profileStore.fetchProfile(client)
const user = profileStore.getProfile

const loading = ref(false)

const supabase = useSupabaseAuthClient()

const updateProfile = async (event: Event) => {
  event.preventDefault()

  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())
  console.log(data)

  loading.value = true
  if (!user || !user.user) return

  // remove fields not in interface
  delete data["file-upload"]

  // convert to array of permissions
  const permissions = Object.keys({
    comments: data.comments === 'on',
    candidates: data.candidates === 'on',
    offers: data.offers === 'on',
  }).filter(key => data[key])

  delete data.comments
  delete data.candidates
  delete data.offers

  const {error} = await supabase.from('users').upsert({
    // @ts-ignore
    id: user.user.id,
    ...data,
    // @ts-ignore
    profile_permissions: permissions
  }).select()
  loading.value = false
}

const logout = async () => {
  let {error} = await supabase.auth.signOut();
  navigateTo('/signin');
}

</script>


<style lang="scss">
</style>
