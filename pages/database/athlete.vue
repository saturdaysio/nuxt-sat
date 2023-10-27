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
    title: 'Saturdays.io - MMA Database',
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

    <!-- Activity list -->
    <div class="border-t border-white/10 pt-16">
      <table class="w-full whitespace-nowrap text-left">
        <colgroup>
          <col class="w-full sm:w-2/12" />
          <col class="lg:w-1/12" />
          <col class="lg:w-1/12" />
          <col class="lg:w-1/12" />
          <col class="lg:w-1/12" />
        </colgroup>

        <thead class="bg-gray-900/80 text-sm leading-6 text-gray-600">
          <tr>
            <th scope="col" class="py-2 px-4 font-bold uppercase ">Name</th>
            <th scope="col" class="py-2 px-4 font-bold uppercase sm:table-cell">Record</th>
            <th scope="col" class="py-2 px-4 text-right font-bold uppercase sm:text-left">Division</th>
            <th scope="col" class="py-2 px-4 text-right font-bold uppercase sm:table-cell">Last updated on</th>
            <th scope="col" class="py-2 px-4 sm:table-cell"></th>
          </tr>
        </thead>

        <tbody class="divide-y divide-white/10">
          <tr v-for="item in athleteStore.getResults?.hits" :key="item.objectID">
            <td class="py-2 px-4">
              <Button button-label="Athlete page link" :to="`/athlete/${item.id}/bio`">
                <div class="flex items-center gap-x-4">
                  <img :src="item.imageUrl || '/avatars/no-profile-image.png'" alt="fighter profile picture"
                    class="h-10 w-10 object-cover rounded-full bg-gray-600" />
                  <div class="truncate text-base font-bold leading-6 text-white hover:text-green-400">
                    {{ item.name }}
                  </div>
                </div>
              </Button>
            </td>

            <td class="hidden py-2 px-4 sm:table-cell">
              <div class="flex gap-x-2">
                <span
                  class="inline-flex items-center rounded-md bg-gray-400/20 px-3 py-2 text-sm font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                  {{ item.rank || '? - ?' }}
                </span>
              </div>
            </td>

            <td class="py-2 px-4 text-sm leading-4">
              <div class="flex items-center justify-end gap-x-2 sm:justify-start">
                <time class="text-gray-400 sm:hidden" :datetime="item.dateTime">{{ item.date }}</time>

                <div class="text-md text-gray-400 sm:block">
                  {{ item.weightclass !== 'undefined' ? item.weightclass : 'Unknown' }}
                </div>
              </div>
            </td>

            <td class="py-2 px-4 text-right text-md leading-6 text-gray-400 sm:table-cell">
              <time :datetime="item.dateTime">{{
                format(parseISO(item.updated_at), 'MMM d, yyyy')

              }}
              </time>
            </td>

            <td class="py-2 px-4 text-right sm:table-cell">
              <Button
                button-label="Athlete page link"
                button-type="button"
                button-class="text-white hover:text-green-400"
                :to="`/athlete/${item.id}/bio`"
              >
                <ChevronRightIcon class="h-6 w-6" aria-hidden="true" />
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