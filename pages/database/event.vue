<script setup lang="ts">


import {format} from "date-fns";
import {IAlgoliaSearchResult} from "~/utils/searchUtil";
import {ChevronRightIcon} from "@heroicons/vue/20/solid";
import {IEvent} from "~/utils/interfaces/Event";
import {useEventStore} from "~/pages/database/store/event";


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
</script>

<template>
  <div>
        <header>
          <SearchInput label="Search Events"
                        :value="eventStore.getQuery"
                       :search-instance="searchClient"
                       placeholder="Event Name" :on-type="setQuery"
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
            </colgroup>
            <thead class="border border-white/20 bg-gray-900/40 text-sm leading-6 text-white">
            <tr>
              <th scope="col" class="py-2 pl-4 pr-8 font-bold sm:pl-6 lg:pl-20">Name</th>
              <th scope="col" class="hidden py-2 pl-0 pr-8 font-bold sm:table-cell">Event Date</th>
              <th scope="col" class="hidden py-2 pl-0 pr-4 text-right font-bold sm:table-cell sm:pr-6 lg:pr-8">
                Last
                updated on
              </th>
              <td class="hidden py-2 pl-0 pr-4 text-right font-bold sm:table-cell sm:pr-6 lg:pr-8"></td>
            </tr>
            </thead>
            <tbody class="divide-y divide-white/10">
            <tr v-for="item in eventStore.getResults?.hits" :key="item.objectID">
              <td class="py-4 pl-4 pr-8 sm:pl-4 lg:pl-4">
                <div class="flex items-center gap-x-4">
                  <div class="truncate text-base font-bold leading-6 text-white">{{ item.event_name }}</div>
                </div>
              </td>
              <td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div class="flex gap-x-3">
                  <div class="font-mono text-md leading-6 text-gray-400">
                    {{ format(new Date(item.event_date), 'MMM d, yyyy') }}
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
        <Pagination :pages="eventStore.getResults?.nbPages" :total="eventStore.getResults?.nbHits" :per-page="eventStore.getResults?.hitsPerPage"
                    :current-page="eventStore.getResults?.page + 1" :from="eventStore.getResults?.page * eventStore.getResults?.hitsPerPage"
                    :to="eventStore.getResults?.page+1 != eventStore.getResults?.nbPages ? (eventStore.getResults?.page + 1) * eventStore.getResults?.hitsPerPage : eventStore.getResults?.nbHits"
                    :on-page-change="nextPage"/>
</div>
</template>

<style scoped lang="scss">

</style>
