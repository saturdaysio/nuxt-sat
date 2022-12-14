<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="/">
          Saturdays.io
        </a>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button" v-on:click="toggleNavbar()">
        </button>
      </div>
      <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <NuxtLink to="/" active-class="active"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
              <span class="ml-2">Work</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" active-class="active"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
              <span class="ml-2">About</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/privacy" active-class="active"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
              <span class="ml-2">Privacy</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "pink-navbar",
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
  height: 4rem;
  padding: 1rem 1rem;
}

.navbar-item {
  color: $white;

  &:hover {
    background: none;
    color: $blue;
  }
}

/* Overlay Menu */
.overlay {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  overflow-y: hidden;
  opacity: 0.96;
  z-index: 100;
}
</style>