<script setup lang="ts">

  import { CalendarIcon } from '@heroicons/vue/20/solid'

  interface DateInputProps {
    value: string
  }

  const { value } = defineProps<DateInputProps>()

</script>


<template>
  <!-- date input following mm/dd/yyyy -->
  <div class="mt-2 relative">
    <input
        type="date"
        name="date"
        id="date"
        class="h-12 w-full pl-4 pr-4 py-2 text-base leading-5 text-white"
        placeholder="mm/dd/yyyy"
        :value="value"
    />
    <div class="absolute inset-y-0 right-0 pr-4 pointer-events-none">
      <Button button-label="DatePicker"
              class="absolute right-0 my-auto h-full w-12 flex items-center justify-center"
              aria-label="DatePicker"
      >
        <CalendarIcon class="h-5 w-5" aria-hidden="true"/>
      </Button>
    </div>
    
  </div>
</template>


<style scoped lang="scss">
</style>
