<script setup lang="ts">

import {CalendarIcon} from '@heroicons/vue/20/solid'

interface DateInputProps {
  value: string
}

const {value} = defineProps<DateInputProps>()
</script>

<template>
<!-- date input following mm/dd/yyyy -->
  <div class="mt-1 relative rounded-md shadow-sm">
    <input
        type="date"
        name="date"
        id="date"
        class="focus:ring-blue-500 focus:border-green-500 block w-full pl-3 pr-3 sm:text-sm border-gray-400 rounded-md"
        placeholder="mm/dd/yyyy"
        :value="value"
    />
    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <Button button-label="DatePicker"
              class="absolute right-0 my-auto h-full w-12 flex items-center justify-center text-white hover:text-green-400 focus:outline-none focus:text-red-400"
              aria-label="DatePicker"
      >
        <CalendarIcon class="h-5 w-5" aria-hidden="true"/>
      </Button>
    </div>
    
  </div>
</template>


<style scoped lang="scss">
</style>
