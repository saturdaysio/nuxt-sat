<script setup lang="ts">

  import { IEvent } from "~/utils/interfaces/Event";
  import { IMatch } from "~/utils/interfaces/Match";
  import { ChevronRightIcon } from "@heroicons/vue/20/solid";

  interface BioProps {
    event: IEvent
  }

  const { event } = defineProps<BioProps>()
  const api = API.getInstance()

  const { data: eventMatches, pending, error, refresh }: {
    data: Ref<any | null>,
    pending: Ref<boolean>,
    error: any,
    refresh: () => void
  } = await useAsyncData<any>(`eventMatches_${event.id}`, async () => {
    const result = await api.getEventMatches(event.id.toString())
    const types = ['main', 'prelims', 'early']
    if (result.data.length === 0) {
      return {

      }
    }
    if (result.data[0].type === null) {
      return {
        'unkown': result.data.map((match: IMatch) => {
          match.type = 'unknown'
          return match
        })
      }
    }
    // order based on type and reverse order number
    const sorted: any = {}
    for (const type of types) {
      if (!result.data.find((match: IMatch) => match.type?.toLowerCase().substring(0, type.length) === type)) {
        continue
      }
      sorted[type] = result.data.filter((match: IMatch) => match.type?.toLowerCase().substring(0, type.length) === type).sort((a: IMatch, b: IMatch) => {
        if (a.order < b.order) {
          return -1
        } else if (a.order > b.order) {
          return 1
        } else {
          return 0
        }
      })
    }

    return sorted
  })

  definePageMeta({
    middleware: ['auth'],
    pageTransition: false,
    layoutTransition: false
  })

</script>


<template>
  <div class="space-y-4 md:space-y-6 lg:space-y-8">
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-800/40 px-4 py-8">
      <div v-if="pending" class="flex justify-center">
        <span class="text-white">loading..</span>
      </div>
      <div v-else-if="error" class="flex justify-center">
        <p class="text-red-500">{{ error }}</p>
      </div>
      <div v-else>
        <div v-if="eventMatches.length === 0" class="flex justify-center">
          <p class="text-white">No matches found</p>
        </div>

        <div v-else class="flex flex-col gap-y-8 md:gap-y-12">
          <div :v-if="matches.length" v-for="matches in eventMatches" :key="matches ? matches[0]?.type : 'invalid'" class="relative overflow-x-auto">
            <table class="table-auto w-full text-md md:text-base text-left whitespace-nowrap">
              <caption class="text-left pb-4">
                <h1 class="text-2xl font-bold leading-8 text-white">
                  {{ matches ? matches[0]?.type : 'invalid' }}
                </h1>
              </caption>

              <thead class="text-sm font-bold uppercase text-gray-400 border border-white/25">
                <tr>
                  <th scope="col" class="py-2 px-2">Won</th>
                  <th scope="col" class="py-2 px-2">Lost</th>
                  <th scope="col" class="py-2 px-2">Weightclass</th>
                  <th scope="col" class="py-2 px-2">Method</th>
                  <th scope="col" class="py-2 px-2">Round</th>
                  <th scope="col" class="py-2 px-2">Time</th>
                  <td scope="col" class="py-2 px-2"></td>
                </tr>
              </thead>

              <tbody class=" divide-y divide-white/10 bg-black border border-white/20">
                <tr v-for="match in matches" :key="match.id" class="h-12 leading-6 text-gray-400 hover:bg-gray-800/40">

                  <td class="w-1/5 min-w-[16rem] py-2 px-2">
                    <div class="font-bold hover:text-green-400">
                      <NuxtLink :to="`/athlete/${match.winner.id}/bio`">
                        {{ match.winner.name }}
                      </NuxtLink>
                    </div>
                  </td>

                  <td class="w-1/5 min-w-[16rem] py-2 px-2">
                    <div class="font-bold hover:text-green-400">
                      <NuxtLink :to="`/athlete/${match.loser.id}/bio`">
                        {{ match.loser.name }}
                      </NuxtLink>
                    </div>
                  </td>

                  <td class="w-1/5 min-w-[16rem] py-2 px-2">
                    {{ match.weightclass }}
                  </td>

                  <td class="w-1/5 min-w-[16rem] py-2 px-2">
                    {{ match.method }}
                  </td>

                  <td class="py-2 px-2">
                    {{ match.round }}
                  </td>

                  <td class="py-2 px-2">
                    {{ match.time }}
                  </td>

                  <td class="w-12 h-12 py-2 px-2">
                    <NuxtLink :to="`/athlete/${match.loser.id}/bio`" class="grid place-items-center text-white hover:text-green-400">
                      <ChevronRightIcon class="h-6 w-6" aria-hidden="true" />
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>


<style scoped lang="scss">
</style>
