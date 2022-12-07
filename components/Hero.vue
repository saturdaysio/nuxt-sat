<template>
  <section :class="[$style.container, $style.my6, $style.py6, $style.px4]">
    <div :class="[$style.content, $style.my6, $style.isMedium]">
      <h1 :class="[$style.isSize1, $style.hasTextCentered, $style.hasTextWhite]">
        Saturdays is a Canadian digital studio based in Toronto
      </h1>
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

<style lang="scss" module scoped>
@import '~/assets/styles/main.module.scss';
</style>