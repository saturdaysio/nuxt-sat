<script setup lang="ts">

  import { format, parse, parseISO } from "date-fns";
  import { IAthlete } from "~/utils/interfaces/Athlete";
  import { IAlgoliaSearchResult } from "~/utils/search/searchUtil";
  import { ChevronRightIcon } from "@heroicons/vue/20/solid";
  import { useAthleteStore } from "~/pages/database/store/athlete";
  import { IAlgoliaHitExtended } from "~/utils/autocomplete";
  import Button from "~/components/Button.vue";

  definePageMeta({
    middleware: ['auth']
  })

  useHead({
    title: 'Saturdays.io - Athlete Search',
    meta: [
      { name: 'description', content: 'Saturdays.io admin dashboard' },
    ]
  })

  const user = useSupabaseUser()
  const client = useSupabaseClient()

  const loading = ref(false)

  const athleteStore = useAthleteStore()

  const setResults = (data: IAlgoliaSearchResult<IAthlete>) => {
    athleteStore.setResults(data)
  }

  const searchClient = new AlgoliaAutocomplete<IAthlete>('athlete', {
    limit: 50,
  })


  function setQuery(passedQuery: string) {
    athleteStore.setQuery(passedQuery)
  }

  function nextPage(page: number) {
    searchClient.search(athleteStore.getQuery!, page).then((res) => {
      setResults(res)
    })
  }

  const autoCompleteSearchInstance = new AlgoliaAutocomplete<IAlgoliaHitExtended & IAthlete>('athlete', {
    limit: 15,
  })

  const searchFunction = (query: any): Promise<any> => {
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

  const queryAutocomplete = (inputValue: IAthlete) => {
    setQuery(inputValue.name)
    searchClient.search(inputValue.name, 0).then((res) => {
      setResults(res)
    })
  }
  const parseSearchResult = (result: IAlgoliaHitExtended & IAthlete) => {
    return result ? result.name : ''
  }
  const customQuery = (query: string) => {
    return { id: null, name: query }
  }

</script>


<template>
  <div>
    <header>
      <SearchAutoComplete
        label="Search Fighter"
        :value="athleteStore.getQuery"
        :search-function="searchFunction"
        :parse-search-result="parseSearchResult"
        placeholder="Fighter Name"
        :on-type="setQuery"
        :custom-query="customQuery"
        :on-enter="queryAutocomplete"
        :limit="50"
      >
        <template #default="{ item, selected, active }">
          <span class="block">
            <span class="flex items-center">
              <span class="ml-3 block truncate">
                <span class="text-md font-medium text-white" v-html="item._highlightResult.name.value"></span>
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
            <th scope="col" class="w-full sm:w-1/2 py-2 px-4">Name</th>
            <th scope="col" class="hidden py-2 px-4 sm:table-cell">Record</th>
            <th scope="col" class="hidden py-2 px-4 sm:table-cell">Division</th>
            <th scope="col" class="hidden py-2 px-4 text-right sm:table-cell">Last updated on</th>
            <th scope="col" class="w-16 py-2 px-4 sm:table-cell"></th>
          </tr>
        </thead>

        <tbody class="divide-y divide-white/10">
          <tr v-for="item in athleteStore.getResults?.hits" :key="item.objectID" class="h-16 hover:bg-gray-800/40">
            <td class="py-2 px-4">
              <NuxtLink :to="`/athlete/${item.id}/bio`">
                <div class="flex items-center gap-x-4">
                  <img :src="item.imageUrl || '/avatars/no-profile-image.png'" alt="fighter profile picture" class="h-10 w-10 object-cover rounded-full bg-gray-600" />

                  <div class="truncate text-base font-bold leading-6 text-white hover:text-green-400">
                    {{ item.name }}
                  </div>
                </div>
              </NuxtLink>
            </td>

            <td class="hidden py-2 px-4 sm:table-cell">
              <span class="inline-flex items-center rounded-md px-3 py-2 bg-gray-400/20 text-sm text-gray-400 ring-1 ring-inset ring-gray-400/20">
                {{ item.rank || '? - ?' }}
              </span>
            </td>

            <td class="hidden py-2 px-4 text-md text-gray-400 sm:table-cell">
              {{ item.weightclass !== 'undefined' ? item.weightclass : 'Unknown' }}
            </td>

            <td class="hidden py-2 px-4 text-right text-md leading-6 text-gray-400 sm:table-cell">
              <time :datetime="item.dateTime">
                {{ format(parseISO(item.updated_at), 'MMM d, yyyy') }}
              </time>
            </td>

            <td class="py-2 px-2 text-right sm:table-cell">
              <Button
                class="grid center-center h-8"
                button-label="Athlete page link"
                button-type="button"
                button-class="h-full text-white hover:text-green-400"
                :to="`/athlete/${item.id}/bio`"
              >
                <ChevronRightIcon class="h-6 w-6 align-middle" aria-hidden="true" />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>


    </div>

    <Pagination
      :pages="athleteStore.getResults?.nbPages"
      :total="athleteStore.getResults?.nbHits"
      :per-page="athleteStore.getResults?.hitsPerPage"
      :current-page="athleteStore.getResults?.page + 1"
      :from="athleteStore.getResults?.page * athleteStore.getResults?.hitsPerPage"
      :to="athleteStore.getResults?.page + 1 != athleteStore.getResults?.nbPages ? (athleteStore.getResults?.page + 1) * athleteStore.getResults?.hitsPerPage : athleteStore.getResults?.nbHits"
      :on-page-change="nextPage"
    />

  </div>
</template>


<style scoped lang="scss">
</style>
