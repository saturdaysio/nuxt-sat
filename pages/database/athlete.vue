<script setup lang="ts">

import {format} from "date-fns";
import {IAthlete} from "~/utils/interfaces/Athlete";
import {IAlgoliaSearchResult} from "~/utils/searchUtil";
import {ChevronRightIcon} from "@heroicons/vue/20/solid";
import {useAthleteStore} from "~/pages/database/store/athlete";

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

const athleteStore = useAthleteStore()

const setResults = (data: IAlgoliaSearchResult<IAthlete>) => {
  athleteStore.setResults(data)
}

const searchClient = new AlgoliaSearch<IAthlete>('athlete', {
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
</script>

<template>

  <div>
    <header>
      <SearchInput label="Search Fighter"
                   :value="athleteStore.getQuery"
                   :search-instance="searchClient"
                   placeholder="Fighter Name" :on-type="setQuery"
                   :on-enter="setResults" :limit="50"/>
    </header>
    <!-- Activity list -->
    <div class="border-t border-white/10 pt-16">
      <h2 class="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Last updated:</h2>
      <table class="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col class="w-full sm:w-4/12"/>
          <col class="lg:w-1/12"/>
          <col class="lg:w-2/12"/>
          <col class="lg:w-1/12"/>
          <col class="lg:w-1/12"/>
        </colgroup>
        <thead class="border border-white/20 bg-gray-900/40 text-sm leading-6 text-white">
        <tr>
          <th scope="col" class="py-2 pl-4 pr-8 font-bold sm:pl-6 lg:pl-20">Name</th>
          <th scope="col" class="hidden py-2 pl-0 pr-8 font-bold sm:table-cell">Record</th>
          <th scope="col" class="py-2 pl-6 pr-4 text-right font-bold sm:pr-8 sm:text-left lg:pr-20">
            Division
          </th>
          <th scope="col"
              class="hidden py-2 pl-0 pr-4 text-right font-bold sm:table-cell sm:pr-6 lg:pr-8">Last
            updated on
          </th>
          <td class="hidden py-2 pl-0 pr-4 text-right font-bold sm:table-cell sm:pr-6 lg:pr-8"></td>
        </tr>
        </thead>
        <tbody class="divide-y divide-white/10">
        <tr v-for="item in athleteStore.getResults?.hits" :key="item.commit">
          <td class="py-4 pl-4 pr-8 sm:pl-4 lg:pl-4">
            <div class="flex items-center gap-x-4">
              <img :src="item.imageUrl || '/avatars/crop-3949584.png'" alt=""
                   class="h-12 w-12 rounded-full bg-gray-800"/>
              <div class="truncate text-base font-bold leading-6 text-white">{{ item.name }}</div>
            </div>
          </td>
          <td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
            <div class="flex gap-x-3">
              <div class="font-mono text-md leading-6 text-gray-400">{{ item.commit }}</div>
              <span
                  class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-sm font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">{{
                  item.rank || '? - ?'
                }}</span>
            </div>
          </td>
          <td class="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
            <div class="flex items-center justify-end gap-x-2 sm:justify-start">
              <time class="text-gray-400 sm:hidden" :datetime="item.dateTime">{{ item.date }}</time>
              <div :class="[[item.status], 'flex-none rounded-full p-1']">
                <div class="h-1.5 w-1.5 rounded-full bg-current"/>
              </div>
              <div class="hidden text-md text-gray-400 sm:block">
                {{ item.weightclass !== 'undefined' ? item.weightclass : 'Unknown' }}
              </div>
            </div>
          </td>
          <td class="hidden py-4 pl-0 pr-4 text-right text-md leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
            <time :datetime="item.dateTime">{{ format(new Date(item.updated_at), 'MMM d, yyyy') }}</time>
          </td>
          <td class="py-4 pl-0 pr-4 text-right text-md leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
            <!-- chevron-right -->
            <ChevronRightIcon class="h-6 w-6" aria-hidden="true"/>
          </td>
        </tr>
        </tbody>
      </table>


    </div>
    <Pagination :pages="athleteStore.getResults?.nbPages" :total="athleteStore.getResults?.nbHits"
                :per-page="athleteStore.getResults?.hitsPerPage"
                :current-page="athleteStore.getResults?.page + 1"
                :from="athleteStore.getResults?.page * athleteStore.getResults?.hitsPerPage"
                :to="athleteStore.getResults?.page+1 != athleteStore.getResults?.nbPages ? (athleteStore.getResults?.page + 1) * athleteStore.getResults?.hitsPerPage : athleteStore.getResults?.nbHits"
                :on-page-change="nextPage"/>

  </div>

</template>

<style scoped lang="scss">

</style>
