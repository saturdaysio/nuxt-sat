<script setup lang="ts">

  import { format, parseISO } from "date-fns";
  import { AlgoliaSearch, IAlgoliaSearchResult } from "~/utils/search/searchUtil";
  import { IAlgoliaHitExtended, AlgoliaAutocomplete } from "~/utils/autocomplete";
  import { IEvent } from "~/utils/interfaces/Event";
  import { useEventStore } from "~/store/event";
  import Button from "~/components/Button.vue";
  import { ChevronRightIcon } from "@heroicons/vue/20/solid";


  definePageMeta({
    middleware: ['auth'],
    pageTransition: false,
    layoutTransition: false
  })

  useHead({
    title: 'Saturdays.io - MMA Event Search',
    meta: [
      {name: 'description', content: 'MMA Event search'},
    ]
  })


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
      <SearchAutoComplete
        label="Search Fighter"
        :value="eventStore.getQuery"
        :search-function="searchFunction"
        :parse-search-result="parseSearchResult"
        placeholder="Search for an event"
        :on-type="setQuery"
        :custom-query="customQuery"
        :on-enter="queryAutocomplete" :limit="50"
      >
        <template #default="{item, selected, active}">
          <span class="block">
            <span class="flex items-center">
              <span class="ml-3 block truncate">
                <span v-if="item._highlightResult.name" class="text-md font-medium text-white" v-html="item._highlightResult.name.value"></span>
              </span>
            </span>
          </span>
        </template>
      </SearchAutoComplete>
    </header>

    <!-- Search result table -->
    <div class="overflow-x-auto border-t border-white/10 pt-16">
      <table class="w-full table-fixed sm:table-auto text-left whitespace-nowrap">

        <thead class="bg-gray-900/80 text-sm font-bold uppercase leading-6 text-gray-600">
          <tr>
            <th scope="col" class="w-full sm:w-3/4 py-2 px-4">Name</th>
            <th scope="col" class="hidden py-2 px-4 sm:table-cell">Event Date</th>
            <th scope="col" class="hidden py-2 px-4 text-right sm:table-cell">Last updated on</th>
            <th scope="col" class="w-16 py-2 px-4 sm:table-cell"></th>
          </tr>
        </thead>

        <tbody class="divide-y divide-white/10">
          <tr v-for="item in eventStore.getResults?.hits" :key="item.id" class="h-16 hover:bg-gray-800/40">
            <td class="py-2 px-4">
              <NuxtLink :to="`/event/${item.id}/overview`">
                <div class="truncate text-base font-bold leading-6 text-white hover:text-green-400">
                  {{ item.name }}
                </div>
              </NuxtLink>
            </td>

            <td class="hidden py-2 px-4 sm:table-cell">
              <div class="text-md leading-6 text-gray-400">
                  {{ format(new Date(item.date), 'MMM dd, yyyy') }}
              </div>
            </td>

            <td class="hidden py-2 px-4 text-right sm:table-cell">
              <div class="text-md leading-6 text-gray-400">
                {{ format(new Date(item.updated_at), 'MMM dd, yyyy') }}
              </div>
            </td>

            <td class="py-2 px-2 text-right sm:table-cell">
              <Button
                class="grid center-center h-8"
                button-label="Match stats page link"
                button-type="button"
                button-class="h-full text-white hover:text-green-400"
                :to="`/event/${item.id}/overview`"
              >
                <ChevronRightIcon class="h-6 w-6" aria-hidden="true"/>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
    <Pagination
      :pages="eventStore.getResults?.nbPages" :total="eventStore.getResults?.nbHits"
      :per-page="eventStore.getResults?.hitsPerPage"
      :current-page="eventStore.getResults?.page + 1"
      :from="eventStore.getResults?.page * eventStore.getResults?.hitsPerPage"
      :to="eventStore.getResults?.page+1 != eventStore.getResults?.nbPages ? (eventStore.getResults?.page + 1) * eventStore.getResults?.hitsPerPage : eventStore.getResults?.nbHits"
      :on-page-change="nextPage"
    />
  </div>
</template>


<style scoped lang="scss">
</style>
