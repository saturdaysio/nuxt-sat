<script setup lang="ts">
import { IAthlete } from "~/utils/interfaces/Athlete";
import Button from "~/components/Button.vue";
import CustomInput from "~/components/CustomInput.vue";
import { format, isDate, parseISO } from "date-fns";
import { API } from "~/composable/api";
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

<template>
  <div class="space-y-14">
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900 p-4">
      <h1 class="text-2xl font-bold text-white">Matches</h1>
      <!--    sub title -->
      <h2 class="text-lg text-white">Description flavour text on your user profile information</h2>
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

          <div :v-if="matches.length" v-for="matches in eventMatches" :key="matches ? matches[0]?.type : 'invalid'" class="border-t border-white/10 pt-16">
            <table class="mt-6 w-full whitespace-nowrap text-left">
              <colgroup>
                <col class="w-full sm:w-4/12" />
                <col class="lg:w-1/12" />
                <col class="lg:w-2/12" />
                <col class="lg:w-1/12" />
                <col class="lg:w-1/12" />
                <col class="lg:w-1/12" />
              </colgroup>
              <thead class="border border-white/20 bg-gray-900/40 text-sm leading-6 text-white">
                <tr>
                  <th scope="col" class="py-2 pl-2 font-bold">{{ matches ? matches[0]?.type : 'invalid' }}</th>
                  <th scope="col" class="hidden py-2 pl-0 pr-8 font-bold sm:table-cell">Weightclass</th>
                  <th scope="col" class="hidden py-2 pl-0 pr-8 font-bold sm:table-cell">Method</th>
                  <th scope="col" class="hidden py-2 pl-0 pr-8 font-bold sm:table-cell">Round</th>
                  <th scope="col" class="hidden py-2 pl-0 pr-8 font-bold sm:table-cell">Time</th>
                  <td class="hidden py-2 pl-0 pr-4 text-right font-bold sm:table-cell"></td>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/10">
                <tr v-for="match in matches" :key="match.id">
                  <td class="py-4 pl-4 pr-8">

                    <div class="flex items-center gap-x-4">
                      <div class="truncate text-base font-bold leading-6 text-white">{{ match.winner.name }}</div>
                      <span>def.</span>
                      <div class="truncate text-base font-bold leading-6 text-white">{{ match.loser.name }}</div>
                    </div>

                  </td>
                  <td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                    <div class="flex gap-x-3">
                      <div class="font-mono text-md leading-6 text-gray-400">
                        <NuxtLink :to="`/athlete/${item.id}/bio`">
                        {{ match.weightclass || match.winner.weightclass }}
                        </NuxtLink>
                      </div>
                    </div>
                  </td>
                  <td
                    class="hidden py-4 pl-0 pr-4 text-right text-md leading-6 text-gray-400 sm:table-cell">
                    <div class="flex gap-x-3">
                      <div class="font-mono text-md leading-6 text-gray-400">
                        {{ match.method }}
                      </div>
                    </div>
                  </td>
                  <td
                    class="hidden py-4 pl-0 pr-4 text-right text-md leading-6 text-gray-400 sm:table-cell">
                    <div class="flex gap-x-3">
                      <div class="font-mono text-md leading-6 text-gray-400">
                        {{ match.round }}
                      </div>
                    </div>
                  </td>
                  <td
                    class="hidden py-4 pl-0 pr-4 text-right text-md leading-6 text-gray-400 sm:table-cell">
                    <div class="flex gap-x-3">
                      <div class="font-mono text-md leading-6 text-gray-400">
                        {{ match.time }}
                      </div>
                    </div>
                  </td>
                  <td class="py-4 pl-0 pr-4 text-right text-md leading-6 text-gray-400 sm:table-cell">
                    <!-- chevron-right -->
                    <ChevronRightIcon class="h-6 w-6" aria-hidden="true" />
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
