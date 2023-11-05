<script setup lang="ts">
import {Ref} from "vue";

export interface CombinedInputField {
  label: string
  placeholder: string
  name: string
  value: string
}

export interface CombinedInputProps {
  fields: CombinedInputField[]
  label: string
  onType: (event: InputEvent) => void
}

const {fields, label, onType} = defineProps<CombinedInputProps>()


const fieldValues = ref<CombinedInputField[]>(fields)


function onTypeHandler(event: InputEvent) {
  const target = event.target as HTMLInputElement
  const value = target.value
  const name = target.name
  const vals = [...fieldValues.value]
  const index = vals.findIndex(f => f.name === name)
  vals[index].value = value
  fieldValues.value = vals
  if (onType) {

    onType(event)
  }

}
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label"
           class="block text-md font-semibold leading-4 uppercase text-white">{{ label }}</label>
    <div class="mt-1 relative rounded-md shadow-sm flex flex-row">
      <input v-for="field in fields" :key="field.name" type="text" :name="field.name" :id="field.name"
             :placeholder="field.placeholder"
             class="`block w-full h-12 first:rounded-l-md last:rounded-r-md border-0 bg-gray-800/40 pl-4 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-1 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6 disabled:bg-gray-900/40`"
             :value="fieldValues.find(f => f.name === field.name)?.value" @input="onTypeHandler"/>
    </div>


  </div>
</template>

<style scoped lang="scss">

</style>
