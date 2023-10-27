<script setup lang="ts">

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
      <svg class="h-5 w-5 text-white" x-description="Heroicon name: solid/calendar" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd"
              d="M16 4h1a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h1V2a2 2 0 012-2h2a2 2 0 012 2v1h4V2a2 2 0 012-2h2a2 2 0 012 2v2zM3 8h14v9H3V8zm5 1a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V9z"
              clip-rule="evenodd"/>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
