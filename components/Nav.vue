<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 z-40">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div id="logo" class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a class="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
          href="/"><span class="text-white">Saturdays.io</span>
        </a>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button" v-on:click="toggleNavbar()">=
        </button>
      </div>
      <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <NuxtLink to="/" active-class="active"
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75">
              <span class="">Work</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" active-class="active"
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75">
              <span class="">About</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/tailwind.scss';

.navbar {
  z-index: 100;
}


/* Overlay Menu */
.overlay {
  position: relative;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  overflow-y: hidden;
  opacity: 0.96;
  z-index: 100;
}
</style>