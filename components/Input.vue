<template>
  <div>
    <label v-if="textInputs.includes(inputType) && label" :for="label" class="block text-md font-bold leading-6 uppercase text-white">{{ label }}</label>
    <div class="mt-2">

      <input
          v-if="textInputs.includes(inputType)"
          :type="inputType"
          :name="inputName"
          :id="label"
          class="block w-full rounded-md border-0 bg-gray-800/70 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          :placeholder="placeholder"
          v-model="inputComputed"
          :value="value"

      />

      <SelectInput v-if="inputType=='select'" :options="options" :input-name="inputName" :option-selected="value"/>
      <CheckboxInput v-if="inputType=='checkbox'" :value="value" :checkboxLabelSub="checkboxLabelSub" :input-name="inputName" :label="label"/>
      <span v-if="error">
      {{ error }}
    </span>

    </div>
  </div>
</template>

<script setup lang="ts">


const emit = defineEmits(['update:input'])
const props = defineProps(['input', 'placeholder', 'inputType', 'max', 'autoFocus', 'error', 'inputName', 'id', 'label', 'value', 'span', 'options', 'selected', 'checkboxLabelSub'])


const {input, placeholder, inputType, max, autoFocus, error, inputName, id, label, value, span, options, selected, checkboxLabelSub} = toRefs(props)

const inputComputed = computed({
  get: () => input.value || value.value,
  set: (val) => emit('update:input', val)
})

const textInputs = ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local', 'month', 'week', 'color']
</script>

<style scoped>

</style>
