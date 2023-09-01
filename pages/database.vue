<template>
	<div class="min-h-full">

    <Nav2 />

    <main class="pt-24">
      <div class="mx-auto max-w-full px-4 pb-12 sm:px-6 lg:px-8 bg-black">
        <!-- Your content -->

		<section>
        <header>

          <SearchInput label="Search Fighter" placeholder="Sergio" :on-type="setQuery" :on-enter="setResults" :limit="50" clear-input/>
          <!-- Secondary navigation -->

          <!-- Heading -->
        </header>

        <!-- Activity list -->
        <div class="border-t border-white/10 pt-16">
          <h2 class="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Last updated:</h2>
          <table class="mt-6 w-full whitespace-nowrap text-left">
            <colgroup>
              <col class="w-full sm:w-4/12" />
              <col class="lg:w-1/12" />
              <col class="lg:w-2/12" />
              <col class="lg:w-1/12" />
              <col class="lg:w-1/12" />
            </colgroup>
            <thead class="border border-white/20 bg-gray-900/40 text-sm leading-6 text-white">
              <tr>
                <th scope="col" class="py-2 pl-4 pr-8 font-bold sm:pl-6 lg:pl-20">Name</th>
                <th scope="col" class="hidden py-2 pl-0 pr-8 font-bold sm:table-cell">Record</th>
                <th scope="col" class="py-2 pl-6 pr-4 text-right font-bold sm:pr-8 sm:text-left lg:pr-20">Division</th>
                <th scope="col" class="hidden py-2 pl-0 pr-4 text-right font-bold sm:table-cell sm:pr-6 lg:pr-8">Last updated on</th>
                <td class="hidden py-2 pl-0 pr-4 text-right font-bold sm:table-cell sm:pr-6 lg:pr-8"></td>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10">
              <tr v-for="item in activityItems" :key="item.commit">
                <td class="py-4 pl-4 pr-8 sm:pl-4 lg:pl-4">
                  <div class="flex items-center gap-x-4">
                    <img :src="item.imageUrl || '/avatars/crop-3949584.png'" alt="" class="h-12 w-12 rounded-full bg-gray-800" />
                    <div class="truncate text-base font-bold leading-6 text-white">{{ item.name }}</div>
                  </div>
                </td>
                <td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                  <div class="flex gap-x-3">
                    <div class="font-mono text-md leading-6 text-gray-400">{{ item.commit }}</div>
                    <span class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-sm font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">{{ item.rank || '? - ?' }}</span>
                  </div>
                </td>
                <td class="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                  <div class="flex items-center justify-end gap-x-2 sm:justify-start">
                    <time class="text-gray-400 sm:hidden" :datetime="item.dateTime">{{ item.date }}</time>
                    <div :class="[[item.status], 'flex-none rounded-full p-1']">
                      <div class="h-1.5 w-1.5 rounded-full bg-current" />
                    </div>
                    <div class="hidden text-md text-gray-400 sm:block">{{ item.weightclass !== 'undefined' ? item.weightclass : 'Unknown' }}</div>
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

        <Pagination :pages="results.nbPages" :total="results.nbHits" :per-page="results.hitsPerPage" :current-page="results.page + 1" :from="results.page * results.hitsPerPage" :to="results.page+1 != results.nbPages ? (results.page + 1) * results.hitsPerPage : results.nbHits" :on-page-change="nextPage" />

      </section>
      </div>
    </main>
  </div>
</template>


<script setup lang="ts">

	import {format} from "date-fns";
  import {IAthlete} from "~/utils/interfaces/Athlete";
  import {IAlgoliaSearchResult} from "~/utils/searchUtil";
  import {ChevronRightIcon} from "@heroicons/vue/20/solid";

  const userProfile = {
		name: 'Hello Saturday',
		email: 'hello@saturdays.io',
		imageUrl: '/avatars/monica_hall.png',
	}


	const stats = [
		{ name: 'Number of fighters', value: '40512' },
		{ name: 'Average search time', value: '0.015', unit: 'sec' },
		{ name: 'Server Uptime', value: '96', unit: 'hours' },
		{ name: 'Current Users', value: '1028' },
	]


	const statuses = {
    Completed: 'text-green-400 bg-green-400',
    Error: 'text-rose-400 bg-rose-400'
  }


  const activityItems = ref<IAthlete[]>([]);
	// const activityItems = [
	// 	{
	// 		user: {
	// 		name: 'Alexander Volkanovski',
	// 		imageUrl: '/avatars/crop-3949584.png',
	// 		},
	// 		commit: '25-2-0',
	// 		rank: 'C',
	// 		status: 'Featherweight, Lightweight',
	// 		dateTime: '2023-01-23T11:00',
	// 	},
  //   {
	// 		user: {
	// 		name: 'Alexandre Pantoja',
	// 		imageUrl: '/avatars/crop-2560746.png',
	// 		},
	// 		commit: '25-2-0',
	// 		rank: 'C',
	// 		status: 'Flyweight',
	// 		dateTime: '2023-01-23T11:00',
	// 	},
  //   {
	// 		user: {
	// 		name: 'Alex Pereira',
	// 		imageUrl: '/avatars/crop-4705658.png',
	// 		},
	// 		commit: '8-2-0',
	// 		rank: '3',
	// 		status: 'Middleweight, Light Heavyweight',
	// 		dateTime: '2023-01-23T11:00',
	// 	},
	// 	// More items...
	// ]


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


	const logout = async () => {
		let { error } = await client.auth.signOut();
		navigateTo('/signin');
	}


  const results = ref<IAlgoliaSearchResult<IAthlete>>({
    hits: [],
    nbHits: 0,
    page: 0,
    nbPages: 0,
    hitsPerPage: 0,
    exhaustiveNbHits: false,
    query: '',
    params: '',
    processingTimeMS: 0,
  })
  const setResults = (data: IAlgoliaSearchResult<IAthlete>) => {
    activityItems.value = data.hits
    results.value = data
  }
  const searchClient = new AlgoliaSearch<IAthlete>('athlete', {
    limit: 50,
  })

  const query = ref<string>()
  function setQuery(passedQuery: string) {
    query.value = passedQuery
  }


  function nextPage(page: number) {
    searchClient.search(query.value!, page).then((res) => {
      setResults(res)
    })
  }
</script>


<style lang="scss">
</style>
