<script setup lang="ts">

  import { ref } from 'vue'
  import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

    export interface ItemOption {
      name: string
      value: string
    }

  const props = defineProps< {
    options: ItemOption[],
    optionSelected: String,
    inputName: String,
  }>()

  const { options, optionSelected, inputName } = toRefs(props)

  const selectedOption = ref(options.value.find(option => {
    console.log(option.value, optionSelected.value)
    return option.value === optionSelected.value
  }) || options.value[0] )

</script>


<template>
  <Listbox v-model="selectedOption">
    <div class="relative mt-2">

      <ListboxButton class="block w-full h-12 rounded-md border-0 bg-gray-800/40 pl-4 py-2 text-base leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-1 focus:ring-inset focus:ring-green-400 disabled:bg-gray-900/40 disabled:text-gray-400">
        <span class="block text-left truncate">{{ selectedOption.value }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ListboxOption v-slot="{ active, selected }" v-for="option in options" :key="option.name" :value="option" as="template" class="cursor-pointer">
            <li :class="[  active ? 'bg-green-100/10 text-white' : 'text-white', 'relative cursor-default select-none py-2 pl-10 pr-4',]">
                <span :class="[ selected ? 'font-bold' : 'font-normal text-white', 'block truncate', ]">
                  {{ option.name }}
                </span>
                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
    <input type="hidden" :name="inputName" :value="selectedOption.value"/>
  </Listbox>
</template>


<style scoped>
</style>
