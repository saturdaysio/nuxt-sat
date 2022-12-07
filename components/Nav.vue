<template>
  <div>
  <nav :class="[$style.navbar, $style.flex, $style.h4, $style.bgBlack]" role="navigation" aria-label="main navigation">
    <div class="flex-row">
      <div :class="$style.logo">
        <NuxtLink to="/" :class="$style.navbarItem">
          <h2 class=""><strong>Saturdays</strong></h2>
        </NuxtLink>

        <a role="button" :class="$style.navbarBurger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
          @click="toggleAction">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navLinks" class="">

        <div class="">
          <div :class="$style.navbarItem">
            <NuxtLink to="/" active-class="active">
              <strong>Work</strong>
            </NuxtLink>
          </div>
          <div :class="$style.navbarItem">
            <NuxtLink to="/about" active-class="active">
              <strong>About</strong>
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </nav>
</div>

  <div v-show="toggle" id="menuOverlay" :class="$style.overlay">
    <nav :class="[$style.navbar, $style.isBlack]">
      <div :class="$style.navbarBrand">
        <NuxtLink to="/" :class="$style.navbarItem">
          <h2><strong>Saturdays</strong></h2>
        </NuxtLink>

        <a role="button" :class="[$style.navbarBurger, $style.isActive]" aria-label="menu" aria-expanded="true"
          data-target="navbarBasic" @click="toggleAction">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>

    <section :class="[$style.hero, $style.isFullheight]">
      <div :class="$style.heroBody">
        <div :class="[$style.columns, $style.isVcentered]">
          <div :class="$style.column">
            <div :class="$style.navbarItem">
              <NuxtLink to="/" :active-class="$style.active">
                <h2 :class="[$style.isSize3Tablet, $style.isSize4Mobile, $style.hasTextWeightBold]">Work</h2>
              </NuxtLink>
            </div>

            <div :class="$style.navbarItem">
              <NuxtLink to="/about" :active-class="$style.active">
                <h2 :class="[$style.isSize3Tablet, $style.isSize4Mobile, $style.hasTextWeightBold]">About</h2>
              </NuxtLink>
            </div>

            <div :class="$style.navbarItem">
              <NuxtLink to="/tos" :active-class="$style.active">
                <h2 :class="[$style.isSize3Tablet, $style.isSize4Mobile, $style.hasTextWeightBold]">Terms of Service
                </h2>
              </NuxtLink>
            </div>

            <div :class="$style.navbarItem">
              <NuxtLink to="/privacy" :active-class="$style.active">
                <h2 :class="[$style.isSize3Tablet, $style.isSize4Mobile, $style.hasTextWeightBold]">Privacy Policy</h2>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import { useCssModule } from 'vue'

export default {

  setup() {
    useCssModule()
    const $style = useCssModule()
  },

  data: function () {
    return {
      toggle: false,
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
    },

  },
};
</script>

<style lang="scss" module scoped>
@import '~/assets/css/tailwind.css';

.navbar {
  padding: 0 .75rem;
}

.navbarItem {
  color: #fff;

  &:hover {
    background: none;
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