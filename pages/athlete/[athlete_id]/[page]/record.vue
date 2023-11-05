<script setup lang="ts">

  import { API } from "~/composables/api";
  import { ChevronRightIcon } from "@heroicons/vue/20/solid";

  const record = [
    {
      id: '0',
      result: "L",
      opponent: "Islam Makhachev",
      date: "Oct 23, 2023",
      event: "UFC 294: Makhachev vs Volkanovski 2",
      method: "KO/TKO",
      round: "3",
      time: "3:06",
    },
    {
      id: '1',
      result: "W",
      opponent: "Yair Rodriguez",
      date: "Jul 8, 2023",
      event: "UFC 290: Volkanovski vs. Rodriguez",
      method: "KO/TKO",
      round: "3",
      time: "4:19",
    },
    {
      id: '2',
      result: "L",
      opponent: "Islam Makhachev",
      date: "Feb 11, 2023",
      event: "UFC 284: Makhachev vs. Volkanovski",
      method: "Decision - Unanimous",
      round: "5",
      time: "5:00",
    },
    {
      id: '3',
      result: "W",
      opponent: "Max Holloway",
      date: "Jul 2, 2022",
      event: "UFC 276: Adesanya vs. Cannonier",
      method: "Decision - Unanimous",
      round: "5",
      time: "5:00",
    },
    {
      id: '4',
      result: "W",
      opponent: "Chan Sung Jung",
      date: "Apr 9, 2022",
      event: "UFC 273: Volkanovski vs. The Korean Zombie",
      method: "KO/TKO",
      round: "4",
      time: "0:45",
    },
  ]

</script>


<template>
  <div class="space-y-14">
    <section class="mx-auto w-full rounded-sm border border-white/20 bg-gray-900/10 p-4">
      <h1 class="text-2xl font-bold text-white">Fight Record</h1>

      <div id="fight_table" class="pt-4">
        <div class="relative overflow-x-auto">
          <table class="w-full text-md md:text-base text-left">
            <thead class="text-sm font-bold uppercase text-gray-400 bg-gray-800/40">
              <tr>
                <th scope="col" class="px-2 py-2 text-center">Res</th>
                <th scope="col" class="px-2 py-2">Opponent</th>
                <th scope="col" class="px-2 py-2">Method</th>
                <th scope="col" class="px-2 py-2">Round</th>
                <th scope="col" class="px-2 py-2">Time</th>
                <th scope="col" class="px-2 py-2">Date</th>
                <th scope="col" class="px-2 py-2">Event</th>
              </tr>
            </thead>

            <tbody class="divide-y divide-white/10 bg-black border border-white/20">
              <tr v-for="item in record" :key="item.id" class="leading-6 text-gray-400">
                <th scope="row" class="px-2 py-2 font-bold text-center text-white">
                  {{ item.result }}
                </th>
                <td class="px-2 py-2 font-bold whitespace-nowrap">
                  <NuxtLink>
                    {{ item.opponent }}
                  </NuxtLink>
                </td>
                <td class="px-2 py-2 whitespace-nowrap">
                  {{ item.method }}
                </td>
                <td class="px-2 py-2">
                  {{ item.round }}
                </td>
                <td class="px-2 py-2">
                  {{ item.time }}
                </td>
                <td class="px-2 py-2 whitespace-nowrap">
                  {{ item.date }}
                </td>
                <td class="px-2 py-2 font-bold whitespace-nowrap">
                  <NuxtLink>
                    {{ item.event }}
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  </div>
</template>


<style scoped lang="scss">
</style>
