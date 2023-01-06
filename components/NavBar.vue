<template>
  <nav class="relative">
    <div class="fixed w-full z-20 p-4 bg-black-900">
      <div class="lg:container flex items-center justify-between mx-auto">

        <!-- Header logo -->
        <div id="logo" class=" relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <NuxtLink to="/" active-class="active"
            class="px-4 text-md font-black inline-block whitespace-nowrap">
            <span class="text-white">Saturdays</span>
          </NuxtLink>
        </div>

        <!-- Mobile toggle -->
        <div class="relative flex justify-between lg:hidden">
          <button @click="drawer" role="button" aria-label="Menu button">
            <svg class="h-8 w-8 fill-current text-black" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="1" viewBox="0 0 24 24" stroke="#fff">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Navbar -->
        <div class="hidden lg:block">
          <ul class="flex text-sm font-sans">
            <li class="nav-item">
              <NuxtLink to="/" active-class="active"
                class="px-4 py-2 flex items-center text-sm font-bold uppercase hover:opacity-75">Work
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" active-class="active"
                class="px-4 py-2 flex items-center text-sm font-bold uppercase hover:opacity-75">About
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Dark Background Transition -->
        <transition enter-class="opacity-0" enter-active-class="ease-in-out duration-500" enter-to-class="opacity-100"
          leave-class="opacity-100" leave-active-class="ease-in-out duration-500" leave-to-class="opacity-0">
          <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
          </div>
        </transition>

        <!-- Drawer Menu -->
        <aside class="p-4 transform top-0 left-0 w-full h-full fixed overflow-auto bg-black-900 z-50"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
          <div class="flex flex-col h-full justify-between">

            <div class="flex items-center justify-between">
              <div id="logo" @click="isOpen = false">
                <NuxtLink to="/" active-class="active"
                  class="px-4 text-md font-black inline-block whitespace-nowrap">
                  <span class="text-white">Saturdays</span>
                </NuxtLink>
              </div>

              <div class="close relative flex justify-between">
                <button @click="isOpen = false" role="button" aria-label="Close Menu button">
                  <svg class="w-8 h-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    viewBox="0 0 24 24" stroke="#fff">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>



            <ul class="divide-y flex flex-col justify-center font-sans ml-4">
              <li class="nav-item">
                <NuxtLink to="/" @click="isOpen = false" active-class="active" class="my-4 inline-block text-2xl text-bold uppercase">
                  <strong>Work</strong>
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about" @click="isOpen = false" active-class="active" class="my-4 inline-block text-2xl text-bold uppercase">
                  <strong>About</strong>
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/terms-of-service" @click="isOpen = false" active-class="active" class="my-4 inline-block text-2xl text-bold">
                  Terms of Service
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/privacy-policy" @click="isOpen = false" active-class="active" class="my-4 inline-block text-2xl text-bold">
                  Privacy Policy
                </NuxtLink>
              </li>
            </ul>

            <div id="social" class="ml-4 pb-4">
              <p class="text-md font-bold text-white">Connect</p>
              <div class="social flex space-x-10 mt-4">
                <NuxtLink to="https://linkedin.com/" rel="noreferrer" target="_blank">
                  <svg focusable="false" aria-label="LinkedIn url" data-prefix="fab" data-icon="linkedin"
                    class="h-12 w-12 fill-current text-blue-900" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                  </svg>
                </NuxtLink>
                <NuxtLink to="mailto:hello@saturdays.io" rel="noreferrer" target="_blank">
                  <svg focusable="false" aria-label="email" data-prefix="fab" data-icon="email"
                    class="h-12 w-12 fill-current text-blue-900" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                    </path>
                  </svg>
                </NuxtLink>

              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </nav>
</template>


<script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      drawer() {
        this.isOpen = !this.isOpen;
      }
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
          }
        }
      }
    },
    mounted() {
      document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
      });
    }
  };
</script>


<style lang="scss" scoped>
  nav {
    height: 4rem;
  }
</style>