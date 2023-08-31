<template>
  <Input
      inputType="text"
      inputName="search"
      label="Search Fighter"
      id="search"
      placeholder="Sergio Moraes"
      :value="query"
      :on-type="setQuery"
  />

  <div>
    <ul>
      <li v-for="result in results" :key="result.id">
        <a :href="result.url">
          <h3>{{ result.name }}</h3>
          <!--          <img :src="result.image" :alt="result.name" />-->

          <!--          <p>{{ result.age }}</p>-->
          <!--          <p>{{ result.weight }}</p>-->
          <!--          <p>{{ result.hometown ? result.hometown : 'Unknown' }}</p>-->
        </a>
      </li>
    </ul>
  </div>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import {AlgoliaSearch} from "~/utils/searchUtil";
import {IAthlete} from "~/utils/interfaces/Athlete";

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

function setQuery(event: any) {
  query.value = event.target.value;
  debounceGetResults(query.value);

}

const searchClient = new AlgoliaSearch<IAthlete>("athlete")

// ref for search results
const results = ref<IAthlete[]>([]);



function getResults(query: string) {
  if (!query.length) {
    results.value = [];
    return;
  }
  searchClient.search(query, 0).then((res) => {
    results.value = res.hits || [];
  });
}
</script>

<style>

</style>
