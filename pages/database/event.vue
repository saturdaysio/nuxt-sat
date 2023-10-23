<script setup lang="ts">


import {format} from "date-fns";

import {AlgoliaSearch, IAlgoliaSearchResult} from "~/utils/search/searchUtil";
import {ChevronRightIcon} from "@heroicons/vue/20/solid";
import {IEvent} from "~/utils/interfaces/Event";
import {useEventStore} from "~/pages/database/store/event";
import {IAlgoliaHitExtended, AlgoliaAutocomplete} from "~/utils/autocomplete";
import Button from "~/components/Button.vue";


definePageMeta({
  middleware: ['auth']
})

useHead({
  title: 'Saturdays.io - MMA Database',
  meta: [
    {name: 'description', content: 'Saturdays.io admin dashboard'},
  ]
})

const user = useSupabaseUser()
const client = useSupabaseClient()

const loading = ref(false)

const eventStore = useEventStore()
const setResults = (data: IAlgoliaSearchResult<IEvent>) => {
  eventStore.setResults(data)
}

const searchClient = new AlgoliaSearch<IEvent>('event', {
  limit: 50,
})


function setQuery(passedQuery: string) {
  eventStore.setQuery(passedQuery)
}

function nextPage(page: number) {
  searchClient.search(eventStore.getQuery!, page).then((res) => {
    setResults(res)
  })
}

const autoCompleteSearchInstance = new AlgoliaAutocomplete<IAlgoliaHitExtended & IEvent>('event', {
  limit: 15,
})

const searchFunction = (query: any): Promise<any> => {
  console.log("THE QUERY", query)
  if (query.name) {
    return new Promise((resolve, _) => {
      autoCompleteSearchInstance.searchDebounced(query.name, (data: IAlgoliaSearchResult<any>) => {
        resolve(data)
      })
    })
  }
  return new Promise((resolve, _) => {
    autoCompleteSearchInstance.searchDebounced(query, (data: IAlgoliaSearchResult<any>) => {
      resolve(data)
    })
  })
}

const queryAutocomplete = (inputValue: IEvent) => {
  setQuery(inputValue.name)
  searchClient.search(inputValue.name, 0).then((res) => {
    setResults(res)
  })
}
const parseSearchResult = (result: IAlgoliaHitExtended & IEvent) => {
  return result ? result.name : null
}

const customQuery = (query: string) => {
  return{ id: null, name: query }
}
</script>

<template>
  <div>
    <header>
      <SearchAutoComplete label="Search Fighter"
                          :value="eventStore.getQuery"
                          :search-function="searchFunction"
                          :parse-search-result="parseSearchResult"
                          placeholder="Event Name" :on-type="setQuery"
                          :custom-query="customQuery"
                          :on-enter="queryAutocomplete" :limit="50">
        <template #default="{item, selected, active}">
          <span class="block">
            <span class="flex items-center">
              <span class="ml-3 block truncate">
                <span v-if="item._highlightResult.name" class="text-md font-medium text-white" v-html="item._highlightResult.name.value"></span>
                <span v-if="item._highlightResult.name" class="text-md font-medium text-white" v-html="item._highlightResult.name.value"></span>
              </span>
            </span>
          </span>
        </template>
      </SearchAutoComplete>
    </header>
    <!-- Activity list -->
    <div class="border-t border-white/10 pt-16">
      <table class="w-full whitespace-nowrap text-left">
        <colgroup>
          <col class="w-full sm:w-4/12"/>
          <col class="lg:w-1/12"/>
          <col class="lg:w-2/12"/>
          <col class="lg:w-1/12"/>
        </colgroup>
        <thead class="border border-white/20 bg-gray-900/40 text-sm leading-6 text-white">
        <tr>
          <th scope="col" class="py-2 pl-4 pr-8 font-bold">Name</th>
          <th scope="col" class="py-2 pl-0 pr-8 font-bold sm:table-cell">Event Date</th>
          <th scope="col" class="py-2 pl-0 pr-4 text-right font-bold sm:table-cell">Last updated on</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-white/10">
        <tr v-for="item in eventStore.getResults?.hits" :key="item.objectID">
          <td class="py-4 pl-4 pr-8 sm:pl-4 lg:pl-4">
            <Button button-label="Athlete"
                    :to="`/event/${item.id}/overview`"
            >
            <div class="flex items-center gap-x-4">
              <div class="truncate text-base font-bold leading-6 text-white hover:text-green-400">{{ item.name }}</div>
            </div>
            </Button>
          </td>
          <td class="py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
            <div class="flex gap-x-3">
              <div class="font-mono text-md leading-6 text-gray-400">
                {{ format(new Date(item.date), 'MMM d, yyyy') }}
              </div>
            </div>
          </td>
          <td class="py-4 pl-0 pr-4 text-right text-md leading-6 text-gray-400 sm:table-cell">
            <time :datetime="item.dateTime">{{ format(new Date(item.updated_at), 'MMM d, yyyy') }}</time>
          </td>
          <td class="py-2 pr-4 text-right sm:table-cell">
            <Button
                button-label="Athlete link"
                button-type="button"
                button-class="text-white hover:text-green-400"
                :to=""
            >
              <ChevronRightIcon class="h-6 w-6" aria-hidden="true"/>
            </Button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <Pagination :pages="eventStore.getResults?.nbPages" :total="eventStore.getResults?.nbHits"
                :per-page="eventStore.getResults?.hitsPerPage"
                :current-page="eventStore.getResults?.page + 1"
                :from="eventStore.getResults?.page * eventStore.getResults?.hitsPerPage"
                :to="eventStore.getResults?.page+1 != eventStore.getResults?.nbPages ? (eventStore.getResults?.page + 1) * eventStore.getResults?.hitsPerPage : eventStore.getResults?.nbHits"
                :on-page-change="nextPage"/>
  </div>
</template>

<style scoped lang="scss">

</style>
