<script setup lang="ts">

  import { ref } from 'vue';
  import { IAlgoliaSearchResult } from "~/utils/search/searchUtil";
  import { IAthlete } from "~/utils/interfaces/Athlete";
  import { AlgoliaAutocomplete, IAlgoliaHitExtended } from "~/utils/autocomplete";

  interface SearchInputProps {
    label: string;
    placeholder: string;
    onEnter: (results: any) => void;
    clearInput: boolean;
    limit?: number,
    onType: (query: string) => void;
    searchInstance?: AlgoliaAutocomplete<any>;
    value?: string;
  }

  const props = defineProps<SearchInputProps>();
  const {label, placeholder, onEnter, clearInput, limit, onType, searchInstance, value} = toRefs(props);

  function onTypeHandler(event: any) {
    setQuery(event.target?.value);

    onType.value(event.target?.value);
  }

  // debounce function
  function debounce(func: any, wait: number, immediate: boolean): (this: any, ...args: any[]) => void {
    let timeout: NodeJS.Timeout | null;
    return function executedFunction() {
      // @ts-ignore
      const context = this;
      const args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout!);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const debounceGetResults = debounce(getResults, 100, false);

  // ref for search query
  const query: any = ref('');

  function setQuery(passedQuery: string) {
    query.value = passedQuery;
    debounceGetResults(query.value);

  }

  const searchClient = new AlgoliaAutocomplete<IAlgoliaHitExtended<IAthlete>>("athlete")

  // ref for search results
  const results = ref<IAlgoliaSearchResult<IAlgoliaHitExtended<IAthlete>>>({
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


  function getResults(query: string) {
    if (!query.length) {
      results.value = {
        hits: [],
        nbHits: 0,
        page: 0,
        nbPages: 0,
        hitsPerPage: 0,
        exhaustiveNbHits: false,
        query: '',
        params: '',
        processingTimeMS: 0,
      };
      return;
    }
    searchClient.search(query, 0).then((res) => {
      console.log(res)
      results.value = res
    });
  }

  function getAndSetResults() {
    getResults(query.value);
    console.log(results.value)
    onEnter.value(results.value);
    results.value = {
      hits: [],
      nbHits: 0,
      page: 0,
      nbPages: 0,
      hitsPerPage: 0,
      exhaustiveNbHits: false,
      query: '',
      params: '',
      processingTimeMS: 0,
    };
  }

</script>


<template>
  <CustomInput
      inputType="text"
      inputName="search"
      label="Search Fighter"
      id="search"
      placeholder="Sergio Moraes"
      :value="query"
      :on-type="onTypeHandler"
      :on-enter="getAndSetResults"
  />

  <div>
    <ul>
      <li v-for="result in results?.hits" :key="result.id">
        <a :href="result.url">
          <span v-if="result._highlightResult.name.matchLevel === 'none'">{{ result.name }}</span>
          <span v-else v-html="result._highlightResult.name.value"></span>
          <!--          <img :src="result.image" :alt="result.name" />-->

          <!--          <p>{{ result.age }}</p>-->
          <!--          <p>{{ result.weight }}</p>-->
          <!--          <p>{{ result.hometown ? result.hometown : 'Unknown' }}</p>-->
        </a>
      </li>
    </ul>
  </div>

</template>


<style scoped lang="scss">
</style>
