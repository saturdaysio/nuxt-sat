<template>
  <Input
      inputType="text"
      inputName="search"
      :label="label"
      id="search"
      :placeholder="placeholder"
      :value="query"
      :on-type="onTypeHandler"
      :on-enter="getResults"

  />

</template>

<script setup lang="ts">
import {ref} from 'vue';
import {IAthlete} from "~/utils/interfaces/Athlete";

interface SearchInputProps {
  label: string;
  placeholder: string;
  onEnter: (results: any) => void;
  clearInput: boolean;
  limit?: number,
  onType: (query: string) => void;
}

const props = defineProps<SearchInputProps>();
const {label, placeholder, onEnter, clearInput, limit, onType} = toRefs(props);

function onTypeHandler(event: any) {
  setQuery(event.target?.value);
  onType.value(event.target?.value);
}

// ref for search query
const query: any = ref('');

function setQuery(data: string) {
  query.value = data;
}

const searchClient = new AlgoliaSearch<IAthlete>('athlete', {
  limit: limit?.value || 50,
})

function getResults() {
  if (!query.value.length) {
    onEnter.value({hits:[]});
    return;
  }
  searchClient.search(query.value, 0).then((res) => {
    if (clearInput.value) {
      query.value = '';
    }
    onEnter.value(res);
  });
}
</script>

<style>

</style>
