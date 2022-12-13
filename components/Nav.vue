<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbarBrand">
        <NuxtLink to="/" class="navbar-item">
          <h2 class=""><strong>Saturdays</strong></h2>
        </NuxtLink>

        <a role="button" class="navbarBurger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
          @click="toggleAction">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" class="navbarEnd">

        <div class="navbarMenu">
          <div class="navbar-item">
            <NuxtLink to="/" active-class="active">
              <strong>Work</strong>
            </NuxtLink>
          </div>
          <div class="navbar-item">
            <NuxtLink to="/about" active-class="active">
              <strong>About</strong>
            </NuxtLink>
          </div>
        </div>

      </div>
    </nav>
  </div>

  <div v-show="toggle" id="menuOverlay" class="overlay">
    <nav class="navbar">
      <div class="navbarBrand">
        <NuxtLink to="/" class="navbar-item">
          <h2><strong>Saturdays</strong></h2>
        </NuxtLink>

        <a role="button" class="navbarBurger isActive" aria-label="menu" aria-expanded="true"
          data-target="navbarBasic" @click="toggleAction">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>

    <section class="hero isFullheight">
      <div class="heroBody">
        <div class="columns isVcentered">
          <div class="column">
            <div class="navbar-item">
              <NuxtLink to="/" active-class="active">
                <h2 class="isSize3Tablet isSize4Mobile font-bold">Work</h2>
              </NuxtLink>
            </div>

            <div class="navbar-item">
              <NuxtLink to="/about" active-class="active">
                <h2 class="isSize3Tablet isSize4Mobile font-bold">About</h2>
              </NuxtLink>
            </div>

            <div class="navbar-item">
              <NuxtLink to="/tos" active-class="active">
                <h2 class="isSize3Tablet isSize4Mobile font-bold">Terms of Service</h2>
              </NuxtLink>
            </div>

            <div class="navbar-item">
              <NuxtLink to="/privacy" active-class="active">
                <h2 class="isSize3Tablet isSize4Mobile font-bold">Privacy Policy</h2>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">

  export default {
    
    data: function () {
      return {
        toggle: false
      };
    },

    methods: {
      toggleAction: function () {
        this.toggle = !this.toggle;
        if (this.toggle) {
          document.body.classList.add("disableScroll");
        } else {
          document.body.classList.remove("disableScroll");
        }
      }
      
    }
  };
</script>

<style lang="scss" scoped>
@import '~/assets/styles/tailwind.scss';

  .navbar {
    padding: 0 .75rem;
  }

  .navbar-item {
    color: $blue;

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