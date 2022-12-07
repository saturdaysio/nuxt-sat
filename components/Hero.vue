<template>
  <section :class="[$style.container, $style.mxAuto, $style.bgBlack]">
    <div :class="[$style.h64, $style.alignMiddle]">
      <p class="text-6xl text-center align-middle text-white">
        Saturdays is a Canadian digital studio based in Toronto
      </p>
    </div>
  </section>
</template>

<script lang="ts">
  import { useCssModule } from 'vue'

  export default {
      setup() {
          useCssModule()
          const $style = useCssModule()
      }
  }
</script>

<style module scoped>
@import '~/assets/css/tailwind.css';
</style>