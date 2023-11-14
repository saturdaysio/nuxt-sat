<template>
  <div class="space-y-14">
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900/10 p-4">
      <!--    sub title -->
      <div v-if="pending" class="flex justify-center">
        <Loader />
      </div>
      <div v-else-if="error" class="flex justify-center">
        <p class="text-red-500">{{ error }}</p>
      </div>
      <div v-else>
        <div v-if="eventMatches.length === 0" class="flex justify-center">
          <p class="text-white">No matches found</p>
        </div>

        <div v-else>
          <div :v-if="matches.length" v-for="matches in eventMatches" :key="matches ? matches[0]?.type : 'invalid'" class="relative overflow-x-auto">
            <table class="w-full text-md md:text-base text-left whitespace-nowrap mb-8 md:mb-12">
              <caption class="py-2 text-left">
                <h2 class="text-xl font-base uppercase text-white">
                {{ matches ? matches[0]?.type : 'invalid' }}
              </h2>
              </caption>

              <thead class="text-sm font-bold uppercase text-gray-400 bg-gray-800/40">
                <tr>
                  <th scope="col" class="py-2 px-2 md:table-cell">Won</th>
                  <th scope="col" class="py-2 px-2 md:table-cell">Lost</th>
                  <th scope="col" class="hidden py-2 px-2 md:table-cell">Weightclass</th>
                  <th scope="col" class="py-2 px-2 md:table-cell">Method</th>
                  <th scope="col" class="py-2 px-2 md:table-cell">Round</th>
                  <th scope="col" class="py-2 px-2 md:table-cell">Time</th>
                  <td scope="col" class="py-2 px-2 md:table-cell"></td>
                </tr>
              </thead>

              <tbody class="divide-y divide-white/10 bg-black border border-white/20">
                <tr v-for="match in matches" :key="match.id" class="leading-6 text-gray-400 hover:bg-gray-800/40">

                  <td class="py-2 px-2">
                    <div class="font-bold hover:text-green-400">
                      <NuxtLink :to="`/athlete/${match.winner.id}/bio`">
                        {{ match.winner.name }}
                      </NuxtLink>
                    </div>
                  </td>

                  <td class="py-2 px-2">
                    <div class="font-bold hover:text-green-400">
                      <NuxtLink :to="`/athlete/${match.loser.id}/bio`">
                        {{ match.loser.name }}
                      </NuxtLink>
                    </div>
                  </td>

                  <td class="hidden py-2 px-2 md:table-cell">
                    {{ match.weightclass }}
                  </td>

                  <td class="py-2 px-2 md:table-cell">
                    {{ match.method }}
                  </td>

                  <td class="py-2 px-2 md:table-cell">
                    {{ match.round }}
                  </td>

                  <td class="py-2 px-2 md:table-cell">
                    {{ match.time }}
                  </td>

                  <td class="py-2 px-2 text-right md:table-cell">
                    <Button
                      button-label="Match page link"
                      button-type="button"
                      button-class="text-white hover:text-green-400"
                      :to="`/match/${match.id}/stats`"
                    >
                      <ChevronRightIcon class="h-6 w-6" aria-hidden="true" />
                    </Button>
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


<script setup lang="ts">

  import Button from "~/components/Button.vue";
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

</script>


<style scoped lang="scss">
</style>
