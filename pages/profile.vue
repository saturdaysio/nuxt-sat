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
                    <Input
                        inputType="text"
                        inputName="username"
                        label="Username"
                        id="username"
                        span="3"
                        autocomplete="username"
                        placeholder="janesmith"
                        :value="user.username"
                    />
                  </div>

                  <div class="col-span-full">
                    <label for="photo" class="block text-md font-bold leading-6 uppercase text-white">Profile
                      Picture</label>
                    <div class="mt-2 flex items-center gap-x-3">
                      <div id="avatar" class="block h-16 w-16" aria-hidden="true">
                        <img src="/avatars/monica_hall.png"/>
                      </div>
                      <Button butttonType="button" button-label="Change" button-class="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"/>
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
                    <Input
                        inputType="text"
                        inputName="first_name"
                        label="First name"
                        id="first-name"
                        autocomplete="given-name"
                        placeholder="Jane"
                        :value="user.first_name"
                    />
                  </div>
                  <div class="sm:col-span-3">
                    <Input
                        inputType="text"
                        inputName="last_name"
                        label="Last name"
                        id="last-name"
                        autocomplete="family-name"
                        placeholder="Smith"
                        :value="user.last_name"
                    />
                  </div>


                  <div class="sm:col-span-3">
                    <Input
                        inputType="text"
                        inputName="email"
                        label="Email Address"
                        id="email"
                        autocomplete="email"
                        placeholder="eamil@host.com"
                        :value="user.email"
                    />

                  </div>

                  <div class="sm:col-span-3">
                    <Input
                        inputType="text"
                        inputName="phone"
                        label="Phone"
                        id="phone"
                        autocomplete="phone"
                        placeholder="xxx-xxx-xxxx"
                        :value="user.phone"
                    />
                  </div>

                  <div class="sm:col-span-3">
                    <Input
                        inputType="select"
                        inputName="country"
                        label="Country"
                        id="country"
                        autocomplete="country-name"
                        :options="countries"
                        :value="user.country"
                    />
                  </div>

                  <div class="col-span-full">
                    <Input
                        inputType="text"
                        inputName="address_1"
                        label="Street Address"
                        id="street-address"
                        autocomplete="street-address"
                        placeholder="123 Main St"
                        :value="user.address_1"

                    />
                  </div>

                  <div class="col-span-full">
                    <Input
                        inputType="text"
                        inputName="address_2"
                        label="Street Address 2 (Optional)"
                        id="street-address"
                        autocomplete="street-address"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        :value="user.address_2"
                    />
                  </div>

                  <div class="sm:col-span-2 sm:col-start-1">
                    <Input
                        inputType="text"
                        inputName="city"
                        label="City"
                        id="city"
                        autocomplete="address-level2"
                        placeholder="City"
                        :value="user.city"
                    />

                  </div>

                  <div class="sm:col-span-2">
                    <Input
                        inputType="text"
                        inputName="province"
                        label="Province"
                        id="province"
                        autocomplete="address-level1"
                        placeholder="Province"
                        :value="user.province"
                    />

                  </div>

                  <div class="sm:col-span-2">
                    <Input
                        inputType="text"
                        inputName="postal_code"
                        label="Postal Code"
                        id="postal-code"
                        autocomplete="postal-code"
                        placeholder="Postal Code"
                        :value="user.postal_code"
                    />
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
                      <Input
                          inputType="checkbox"
                          inputName="comments"
                          label="Comments"
                          id="comments"
                          checkboxLabelSub="Get notified when someones posts a comment on a posting."
                          :value="user.profile_permissions?.includes('comments')"
                      />
                      <Input
                          inputType="checkbox"
                          inputName="candidates"
                          label="Candidates"
                          id="candidates"
                          checkboxLabelSub="Get notified when a candidate applies for a job."
                          :value="user.profile_permissions?.includes('candidates')"
                      />
                      <Input
                          inputType="checkbox"
                          inputName="offers"
                          label="Offers"
                          id="offers"
                          checkboxLabelSub="Get notified when a candidate accepts or rejects an offer."
                          :value="user.profile_permissions?.includes('offers')"
                      />
                    </div>
                  </fieldset>

                </div>
              </div>
            </div>

            <div class="max-w-4xl mx-auto mt-6 px-4 md:px-0 pb-10 flex items-center justify-end gap-x-6">
              <Button butttonType="button" button-label="Cancel" button-class="rounded-md border-2 border-green-500 px-6 py-4 text-base font-bold leading-6 text-white"/>
              <Button butttonType="submit" button-label="Save" button-class="rounded-md bg-green-500 px-6 py-4 text-base font-bold text-black shadow-sm hover:bg-green-200"/>
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

const countries = [
  {
    name: 'United States',
    value: 'United States',
  },
  {
    name: 'Canada',
    value: 'Canada',
  },
  {
    name: 'Mexico',
    value: 'Mexico',
  }
]

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
