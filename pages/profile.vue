<template>
  <div class="min-h-full">
    <Nav2 />

    <main class="py-24">
      <div class="mx-auto max-w-screen-2xl px-2 sm:px-4">
        <!-- Your content -->
        <section class="mx-auto rounded-sm border border-white/20">
          <form class=" bg-gray-800/20" @submit.prevent="updateProfile">
            <div class="space-y-12">
              <div class="max-w-4xl mx-auto pt-16 px-4 border-b border-green-400/40 py-12">
                <h2 class="text-4xl font-bold leading-10 text-white">User Account</h2>
                <p class="mt-1 text-base leading-6 text-gray-400">Flavor text about user info that will be displayed publicly so be
                  careful what you share.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <CustomInput
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
                </div>
              </div>

              <div v-if="user" class="max-w-4xl mx-auto px-4 border-b border-white/10 pb-12">
                <h2 class="text-2xl font-bold leading-8 text-white">Profile Info</h2>
                <p class="mt-1 text-base leading-6 text-gray-400">Flavour text description lorem ipsum for personal info.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <CustomInput
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
                    <CustomInput
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
                    <CustomInput
                        inputType="text"
                        inputName="email"
                        label="Email Address"
                        id="email"
                        autocomplete="email"
                        placeholder="email@address.com"
                        :value="user.email"
                    />

                  </div>

                  <div class="sm:col-span-3">
                    <CustomInput
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
                    <CustomInput
                        inputType="select"
                        inputName="country"
                        label="Country/region"
                        id="country"
                        autocomplete="country-name"
                        :options="countries"
                        :value="user.country"
                    />
                  </div>

                  <div class="col-span-full">
                    <CustomInput
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
                    <CustomInput
                        inputType="text"
                        inputName="address_2"
                        label="Apartment, suite etc. (optional)"
                        id="street-address"
                        autocomplete="street-address"
                        placeholder="Suite # 1201"
                        :value="user.address_2"
                    />
                  </div>

                  <div class="sm:col-span-2 sm:col-start-1">
                    <CustomInput
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
                    <CustomInput
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
                    <CustomInput
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
              
            </div>

            <div class="max-w-4xl mx-auto mt-6 px-4 md:px-0 pb-10 flex items-center justify-end gap-x-6">
              <Button buttton-type="submit" button-label="Sign out" button-class="secondary" @click="logout" />
              <Button buttton-type="button" button-label="Cancel" button-class="cta" />
              <Button buttton-type="submit" button-label="Save" button-class="primary" />
            </div>
          </form>
        </section>

      </div>
    </main>
  </div>
</template>


<script setup lang="ts">

  import { ProfilePermissions, useProfileStore } from "~/store/profile";


  definePageMeta({
    middleware: ['auth']
  })

  useHead({
    title: 'Saturdays.io - Profile',
    meta: [
      {name: 'description', content: 'Saturdays.io admin dashboard'},
    ]
  })

  const userProfile = {
    name: 'Hello Saturday',
    email: 'hello@saturdays.io',
    imageUrl: '/avatars/sv/monica_hall.png',
  }


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

  // Signout function
  const logout = async () => {
    let {error} = await supabase.auth.signOut();
    navigateTo('/signin');
  }

</script>


<style lang="scss">
</style>
