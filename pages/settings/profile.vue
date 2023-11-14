<template>
    <div class="min-h-full">

    <Nav2 />

    <main class="pt-24">
      <div class="mx-auto max-w-7xl px-2 md:px-4">
        <!-- Your content -->
        <section class="mx-auto rounded-sm border border-white/10">
          <form class=" bg-gray-800/20" @submit.prevent="updateProfile">
            <div class="space-y-12">

              <div v-if="user" class="max-w-7xl mx-auto px-4 py-8">
                <h2 class="text-3xl font-bold leading-8 text-white">Profile Info</h2>
                <p class="mt-2 text-base leading-6 text-gray-400">Flavour text description lorem ipsum for personal info.</p>

                <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  <div class="col-span-1">
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

                  <div class="col-span-1">
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


                  <div class="col-span-1">
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

                  <div class="col-span-1">
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

                </div>


                <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">

                  <div class="col-span-1">
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

                  <div class="col-span-1">
                    <CustomInput
                        inputType="text"
                        inputName="address_2"
                        label="Apartment, suite etc. (optional)"
                        id="street-address"
                        autocomplete="street-address"
                        placeholder="Suite/Unit"
                        :value="user.address_2"
                    />
                  </div>

                  <div class="col-span-1">
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

                  <div class="col-span-1">
                    <CustomInput
                        inputType="text"
                        inputName="province"
                        label="State / Province"
                        id="province"
                        autocomplete="address-level1"
                        placeholder="Province"
                        :value="user.province"
                    />

                  </div>

                  <div class="col-span-1">
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

                  <div class="col-span-1">
                    <CustomInput
                        inputType="text"
                        inputName="postal_code"
                        label="Postal / Zip Code"
                        id="postal-code"
                        autocomplete="postal-code"
                        placeholder="Postal Code"
                        :value="user.postal_code"
                    />
                  </div>

                </div>

              </div>

            </div>

            <div class="max-w-7xl mx-auto px-4 pb-8 flex flex-col sm:flex-row justify-start gap-6">
              <Button buttton-type="submit" button-label="Save" button-class="primary" />
              <Button buttton-type="button" button-label="Cancel" button-class="cta" />
            </div>
          </form>
        </section>

      </div>
    </main>
  </div>
</template>


<script setup lang="ts">

  import { useProfileStore } from "~/store/profile";


  definePageMeta({
    middleware: ['auth']
  })

  useHead({
    title: 'Saturdays.io - User Profile',
    meta: [
      {name: 'description', content: 'Saturdays.io admin user profile page'},
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
  const supabase = useSupabaseClient()
  await profileStore.fetchProfile(client)
  const user = profileStore.getProfile

  const loading = ref(false)

  const updateProfile = async (event: Event) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    loading.value = true
    if (!user || !user.user) return

    const {error} = await supabase.from('users').upsert({
      // @ts-ignore
      id: user.user.id,
      ...data,
      // @ts-ignore
     // profile_permissions: permissions
    }).select()
    loading.value = false
  }

</script>


<style lang="scss">
</style>
