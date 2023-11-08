<template>
  <div class="relative flex gap-x-3">
    <div class="flex h-6 items-center">
      <input
          :id="inputName"
          :name="inputName"
          type="checkbox"
          v-model="value"
          class="h-4 w-4 rounded border-white/10 bg-gray-800/70 text-blue-600 focus:ring-blue-600 focus:ring-offset-gray-900"
      />
    </div>
    <div class="text-sm leading-6">
      <label :for="inputName" class="text-md font-bold text-white">
        {{ label }}
      </label>
      <p class="text-gray-400">{{ checkboxLabelSub }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { defineProps } from 'vue'

  const props = defineProps(['inputName', 'label', 'checkboxLabelSub', 'value'])

  const { inputName, label, checkboxLabelSub, value } = toRefs(props)

</script>

<style scoped>

</style>
