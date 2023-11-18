<script setup lang="ts">

  import { ref, computed } from 'vue'
  import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption, TransitionRoot } from '@headlessui/vue'
  import { IAlgoliaSearchResult } from "~/utils/search/searchUtil";
  import { IAlgoliaHitExtended } from "~/utils/autocomplete";
  import { XMarkIcon } from "@heroicons/vue/20/solid";

  interface SearchInputProps {
    label: string;
    placeholder: string;
    onEnter: (results: any) => void;
    searchFunction: (query: string) => Promise<any>
    parseSearchResult: (result: any) => string
    value?: string;
    customQuery?: (query: string) => any
    onType?: (query: string) => void;
  }

  const props = defineProps<SearchInputProps>();

  const {label, placeholder, onEnter, value, searchFunction, parseSearchResult, customQuery, onType} = toRefs(props);

  const query = ref<string>('');

  const results = ref<IAlgoliaSearchResult<IAlgoliaHitExtended & any>>({
    hits: [],
    nbHits: 0,
    page: 0,
    nbPages: 0,
    hitsPerPage: 0,
    exhaustiveNbHits: false,
    query: '',
    params: '',
    processingTimeMS: 0,
  });
  const setQuery = (passedQuery: string) => {
    if (onType?.value) {
      onType.value(passedQuery);
    }
    query.value = passedQuery;
  }

  function onTypeHandler(event: any) {
    setQuery(event.target?.value);
  }

  watchEffect(() => {
    if (query.value.length > 0) {
      searchFunction?.value(query.value).then((res) => {
        results.value = res;
      });
    }
  })

  const selectedItem = ref(value?.value ? {name: value?.value} : null);

  const queryComputed = computed(() => {
    if (!customQuery) {
      return null;
    }
    return query.value === '' ? null : customQuery.value!(query.value)
  })

  // trigger onEnter when user selects an item
  watchEffect(() => {
    if (selectedItem.value) {
      onEnter.value(selectedItem.value);
    }
  })

  const clearButtonAction = () => {
    setQuery('');
    selectedItem.value = null;
  }

</script>


<template>
  <div>
    <Combobox v-model="selectedItem">
      <div class="relative mt-1">
        <div class="relative mt-1">
          <div>
            <ComboboxInput
                @change="onTypeHandler"
                :display-value="parseSearchResult"
                :placeholder="placeholder"
                className="block w-full h-12 rounded-md border-0 bg-gray-800/40 pl-4 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-1 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
            />
            <Button v-if="queryComputed || selectedItem" @click="clearButtonAction"
                    button-label="Clear"
                    class="absolute right-0 top-0 bottom-0 my-auto h-full w-12 flex items-center justify-center text-gray-400 hover:text-white focus:outline-none focus:text-white"
                    aria-label="Clear"
            >
              <XMarkIcon class="h-5 w-5" aria-hidden="true"/>
            </Button>
          </div>
          <TransitionRoot
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
            <ComboboxOptions
                className="absolute mt-1 rounded-md max-h-60 w-full overflow-auto bg-gray-900 py-1 text-base ring-opacity-5 focus:outline-none sm:text-sm z-20">
              <ComboboxOption v-if="queryComputed" :value="queryComputed" v-slot="{selectedItem, active}"
                              class="outline-none ui-active:text-white ui-not-active:text-black cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-700">
                <slot :item="{_highlightResult: {name: {value: `search for ${query}`}}}" :selected="selectedItem"
                      :active="active"/>
              </ComboboxOption>
              <ComboboxOption
                  v-for="item in results.hits"
                  :key="item.objectID"
                  :value="item"
                  v-slot="{ selectedItem, active }"
                  class="outline-none ui-active:text-white ui-not-active:text-black cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-700"
              >
                <slot :item="item" :selected="selectedItem" :active="active"/>
              </ComboboxOption>
            </ComboboxOptions>
          </TransitionRoot>
        </div>
      </div>
    </Combobox>
  </div>

</template>


<style scoped lang="scss">
</style>
