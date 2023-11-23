<script setup lang="ts">

  import { ref } from 'vue';
  import { ItemOption } from '~/components/SelectInput.vue';
  import { XMarkIcon } from '@heroicons/vue/20/solid'

  interface InputProps {
    input?: Ref<any>
    placeholder?: string
    inputType: string
    autoFocus?: boolean
    error?: string
    inputName?: string
    id?: string
    label?: string
    value?: string | number | boolean
    span?: string
    options?: string[] | ItemOption[] | undefined
    selected?: string
    checkboxLabelSub?: string
    onType?: () => void
    onEnter?: () => void
    clearButton?: boolean
    disabled?: boolean
    step?: string
    min?: string
    max?: string
  }


  const emit = defineEmits(['update:input'])

  const {
    input,
    placeholder,
    inputType,
    max,
    autoFocus,
    error,
    inputName,
    id,
    label,
    value,
    span,
    options,
    selected,
    checkboxLabelSub,
    onType,
    onEnter,
    clearButton,
    disabled,
    step,
    min
  } = defineProps<InputProps>()

  const inputComputed = computed({
    get: () => input?.value || value || '',
    set: (val) => {
      emit('update:input', val)
    }
  })

  const textInputs = ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'datetime-local', 'time', 'datetime-local', 'month', 'week', 'color']

  const fieldsWithLabels = [...textInputs, 'select']

  const clearInput = () => {
    (onType as unknown as Ref<any | undefined>)?.value('')
    (onEnter as unknown as Ref<any | undefined>)?.value('')
  }

</script>


<template>
  <div>
    <label v-if="fieldsWithLabels.includes(inputType) && label" :for="label" class="block text-md font-semibold leading-4 uppercase text-white">
      {{ label }}
    </label>
    <div class="mt-2 relative">
      <input
          v-if="textInputs.includes(inputType)"
          :type="inputType"
          :name="inputName"
          :id="label"
          class="flex items-center h-12 w-full pl-4 py-2 text-base leading-5 text-white rounded-md border-0 bg-gray-800/50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-1 focus:ring-inset focus:ring-green-400 disabled:bg-gray-900 disabled:text-white"
          :placeholder="placeholder"
          v-model="inputComputed"
          :value="value"
          @input="onType"
          @keyup.enter="onEnter"
          :step="step"
          :min="min"
          :max="max"
          :disabled="disabled"
      />
      <Button v-if="clearButton && inputComputed" @click="clearInput" class="absolute my-auto right-0 h-full w-12 flex items-center justify-center text-gray-400 hover:text-white focus:outline-none focus:text-green-400" aria-label="Clear" button-label="Clear">
        <XMarkIcon class="h-5 w-5" aria-hidden="true"/>
      </Button>
      <SelectInput v-if="inputType=='select'" :options="options as unknown as ItemOption[]" :input-name="inputName as string" :option-selected="value as string" :disabled="disabled" />
      <CheckboxInput v-if="inputType=='checkbox'" :value="value" :checkboxLabelSub="checkboxLabelSub" :input-name="inputName" :label="label" :disabled="disabled"/>
      <span v-if="error">
        {{ error }}
      </span>
    </div>
  </div>
</template>


<style scoped lang="scss">
</style>
