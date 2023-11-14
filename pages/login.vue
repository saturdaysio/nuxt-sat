<template>
  <div>

    <Nav/>

    <div class="flex min-h-full flex-1 flex-col justify-center pt-16">

      <div id="block" class="w-full max-w-xl mx-auto mt-32 px-6 py-6 md:px-8 md:py-8 rounded-md bg-gray-900/10">
        <div class="mx-auto w-full mb-12">
          <h1 class="text-3xl md:text-4xl font-bold leading-9 tracking-tight text-center lime-to-aqua">Log in to your
            account</h1>
        </div>

        <div class="mx-auto w-full">
          <form @submit.prevent="login" class="space-y-6">
            <div id="email" class="">
              <label for="input-email" class="block text-md font-bold leading-5 text-white">Email</label>
              <!-- use @apply to create default, selected, error states and toggle -->
              <input id="input-email" v-model="email" name="email" type="email" autocomplete="email"
                     aria-labelledby="email" placeholder="Enter your email address" required
                     class="block w-full rounded-md mt-2 px-4 py-4 border-0 bg-gray-800/70 font-light text-white shadow-sm focus:ring-4 focus:ring-inset focus:ring-green-500 sm:text-xl sm:leading-6"/>
            </div>

            <div id="password" class="">
              <label for="input-pass" class="block text-md font-bold leading-5 text-white">Password</label>
              <!-- make a proper component for password inputs -->
              <input id="input-pass" v-model="password" name="password" type="password" autocomplete="current-password"
                     aria-labelledby="password" placeholder="Enter your password" required
                     class="block w-full rounded-md mt-2 px-4 py-4 border-0 bg-gray-800/70 font-light text-white shadow-sm focus:ring-4 focus:ring-inset focus:ring-green-500 sm:text-xl sm:leading-6"/>
            </div>

            <div id="submit" class="">
              <!-- make a proper component for button and states -->
              <Button buttton-type="submit" button-label="Login" button-class="primary block w-full"
                      :error="failedLogin" error-classes="!bg-red-800"/>
            </div>
          </form>
        </div>

        <div id="disclaimer" class="mt-16">
          <p class="text-md leading-6 text-center font-gray-300">By continuing, you agree to Saturdays.io's
            <NuxtLink to="/terms-of-service">Terms of Service</NuxtLink>
            and
            <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
            .
          </p>
        </div>
      </div>
    </div>

  </div>
</template>


<script setup lang="ts">

  definePageMeta({
    // This is an example of inline middleware
    middleware: ['redirect-signin']
  })

  useHead({
    title: 'Saturdays.io - Login',
    meta: [
      {name: 'description', content: 'Saturdays.io login page'}
    ]
  })

  const user = useSupabaseUser()
  const supabase = useSupabaseClient()
  const successLogin = ref(false)
  const failedLogin = ref(false)

  const loading = ref(false)
  const email = ref('')
  const password = ref('')


  const login = async () => {
    console.log('trying...')
    try {
      loading.value = true
      const {error} = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
      })
      if (error) {
        throw error
      }
      successLogin.value = true
      failedLogin.value = false
      navigateTo('/dashboard', {replace: false})
    } catch (error) {
      console.log('error', error)
      successLogin.value = false
      failedLogin.value = true
    } finally {
      loading.value = false
    }
  }


  watchEffect(() => {
    if (user.value) {
      navigateTo('/dashboard', {replace: false})
    }
  })

</script>


<style lang="scss" scoped>
</style>
