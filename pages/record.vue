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
  <div class="min-h-full">

    <Nav2 />

    <div class="w-full pt-24 px-4 space-y-14">
      <section class="mx-auto w-full max-w-screen-2xl rounded-sm border border-purple-400 bg-gray-900/10 px-4 py-8">

        <h1 class="text-2xl md:text-2xl lg:text-3xl font-bold text-white">Fight Record</h1>

        <div id="fight_table" class="max-w-full mx-auto pt-4">

          <div class="relative overflow-x-auto pb-16">
            <table class="w-full text-base text-left">
              <thead class="text-sm uppercase bg-gray-800/40 text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Result
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Opponent
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Event
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Method
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Round
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in record" :key="item.id" class="bg-white/5 border border-blue-300/50 text-white">
                  <th scope="row" class="px-6 py-4 font-bold whitespace-nowrap text-gray-400">
                    {{ item.result }}
                  </th>
                  <td class="px-6 py-4">
                    {{ item.opponent }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.date }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.event }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.method }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.round }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.time }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <table class="w-full table-auto text-left">
            <colgroup>
              <col class="" />
              <col class="" />
              <col class="" />
              <col class="" />
              <col class="" />
              <col class="w-1/12" />
              <col class="w-1/12" />
              <col class="" />
            </colgroup>
            <thead class="bg-gray-900 text-sm leading-6 text-white">
              <tr>
                <th scope="col" class="py-2 px-4 font-bold uppercase">Res</th>
                <th scope="col" class="py-2 px-4 font-bold uppercase md:table-cell">Date</th>
                <th scope="col" class="py-2 px-4 font-bold uppercase md:table-cell">Opponent</th>
                <th scope="col" class="hidden py-2 px-4 font-bold uppercase md:table-cell">Event</th>
                <th scope="col" class="hidden py-2 px-4 font-bold uppercase md:table-cell">Method</th>
                <th scope="col" class="hidden py-2 px-4 font-bold uppercase md:table-cell">Rnd</th>
                <th scope="col" class="hidden py-2 px-4 font-bold uppercase md:table-cell">Time</th>
                <th scope="col" class="hidden md:table-cell"></th>
              </tr>
            </thead>

            <tbody v-for="item in record" :key="item.id" class="border border-white/20">
              <tr class=" divide-x divide-white/20">
                <td class="py-4 px-4">
                  <!-- result -->
                  <div class="flex items-center gap-x-4">
                    <div class="text-base font-bold text-center leading-6 text-white">{{ item.result }}</div>
                  </div>
                </td>

                <td class="py-4 px-4 sm:table-cell">
                  <!-- date -->
                  <div class="flex gap-x-3">
                    <div class="text-md leading-6 text-white">
                      {{ item.date }}
                    </div>
                  </div>
                </td>

                <td class="py-4 px-4 text-right leading-6 sm:table-cell">
                  <!-- opponent name -->
                  <div class="flex gap-x-3">
                    <div class=" text-md leading-6 text-white">
                      <NuxtLink>
                        {{ item.opponent }}
                      </NuxtLink>
                    </div>
                  </div>
                </td>

                <td class="hidden py-4 px-4 text-right leading-6 sm:table-cell">
                  <!-- event -->
                  <div class="flex gap-x-3">
                    <div class=" text-md leading-6 text-white">
                      <NuxtLink>
                        {{ item.event }}
                      </NuxtLink>
                    </div>
                  </div>
                </td>

                <td class="hidden py-4 px-4 text-right leading-6 sm:table-cell">
                  <!-- method -->
                  <div class="flex gap-x-3">
                    <div class=" text-md leading-6 text-white">
                      {{ item.method }}
                    </div>
                  </div>
                </td>

                <td class="hidden py-4 px-4 text-right leading-6 sm:table-cell">
                  <!-- round -->
                  <div class="flex gap-x-3">
                    <div class=" text-md leading-6 text-white">
                      {{ item.round }}
                    </div>
                  </div>
                </td>

                <td class="hidden py-4 px-4 text-right leading-6 sm:table-cell">
                  <!-- time -->
                  <div class="flex gap-x-3">
                    <div class=" text-md leading-6 text-white">
                      {{ item.time }}
                    </div>
                  </div>
                </td>

                <td class="hidden py-4 px-4 text-right sm:table-cell">
                  <!-- chevron-right -->
                  <ChevronRightIcon class="h-6 w-6 text-white hover:text-green-400" aria-hidden="true" />
                </td>

              </tr>
            </tbody>
          </table>
        </div>

      </section>
    </div>

  </div>
</template>


<style scoped lang="scss"></style>
