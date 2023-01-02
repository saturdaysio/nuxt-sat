<template>
  <section class="w-full mx-auto px-4 py-16 bg-black-800">
    <div class="container lg:max-w-6xl my-24 mx-auto">
      <h1 class="text-4xl lg:text-6xl text-center font-bold text-white">
        {{  text  }}
      </h1>
      <!-- Add z-index and bg svg component -->
    </div>
  </section>
</template>


<script lang="ts" setup>
    const props = defineProps({
        text: String,
    })
</script>


<style lang="scss">
</style>