<script setup lang="ts">

  import { ref } from 'vue';
  import { IAthlete } from "~/utils/interfaces/Athlete";
  import { AlgoliaSearch } from "~/utils/search/searchUtil";

  interface SearchInputProps {
    label: string;
    placeholder: string;
    onEnter: (results: any) => void;
    clearInput?: boolean;
    limit?: number,
    onType: (query: string) => void;
    searchInstance?: AlgoliaSearch<any>;
    value?: string;
  }

  const props = defineProps<SearchInputProps>();
  const {label, placeholder, onEnter, clearInput, limit, onType, searchInstance, value} = toRefs(props);

  function onTypeHandler(event: any) {
    setQuery(event.target?.value);
    onType.value(event.target?.value);
  }

  // ref for search query
  const query: any = ref(value);

  function setQuery(data: string) {
    query.value = data;
  }



  function getResults() {
    const searchClient = searchInstance?.value || new AlgoliaSearch<IAthlete>('athlete', {
      limit: limit?.value || 50,
    })
    if (!query.value.length) {
      onEnter.value({hits:[]});
      return;
    }
    console.log(searchClient)
    searchClient.search(query.value, 0).then((res) => {
      if (clearInput.value) {
        query.value = '';
      }
      onEnter.value(res);
    });
  }
</script>


<template>
  <CustomInput
      inputType="text"
      inputName="search"
      :label="label"
      id="search"
      :placeholder="placeholder"
      :value="query"
      :on-type="onTypeHandler"
      :on-enter="getResults"
      :clear-button="true"
  />
</template>


<style scoped lang="scss">
</style>
