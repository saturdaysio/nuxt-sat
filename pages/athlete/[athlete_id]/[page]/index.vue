<script setup lang="ts">

  import { IAthlete } from "~/utils/interfaces/Athlete";
  import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
  import Bio from "./Bio.vue";
  import Stats from "./Stats.vue";
  import FightRecord from "./fight_record.vue";

  const types = ['bio', 'stats', 'record', 'media']
  const route = useRoute()

  const api = API.getInstance()
  const {data: athlete, pending, error, refresh}: {
    data: Ref<IAthlete | null>,
    pending: Ref<boolean>,
    error: any,
    refresh: () => void
  } = await useAsyncData<IAthlete>(`athlete_${route.params.athlete_id}`, async () => {
    const result = await api.getAthlete(route.params.athlete_id as string)
    return result.data
  })
  const activeTab = computed(() => {
    return types.indexOf((route.params.page as string).toLowerCase().replace(/\s/g, '_'))
  })

  const router = useRouter()
  function changeTab(index: number) {
    const tab = types[index]
    router.push({
      path: `/athlete/${route.params.athlete_id as string}/${tab}`,
      params: {
        athlete_id: route.params.athlete_id,
        page: tab
      }
    })
  }

  definePageMeta({
    middleware: ['auth'],
    pageTransition: false,
    layoutTransition: false
  })

</script>

<template>
  <div class="min-h-full">
    <Nav2/>

    <main class="pt-24">
      <div class="mx-auto max-w-screen-2xl px-2 sm:px-4 text-white">
        <!-- Your content -->

        <div class="flex items-center justify-between py-2">
          <h1 v-if="athlete" class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{{ `${athlete.firstName} ${athlete.lastName}` }}</h1>
        </div>
        <TabGroup :selectedIndex="activeTab" @change="changeTab">
          <TabList class="flex flex-0 w-full space-x-8 border-b border-gray-700 ">
            <Tab
                v-for="category in ['Bio', 'Stats', 'Record', 'Media']"
                as="template"
                :key="category"
                v-slot="{ selected }"
            >
              <button :class="['block w-auto h-12 text-base leading-5 font-base focus:outline-none', 'focus:outline-none focus:text-white whitespace-nowrap',
                selected ? 'font-bold text-blue-400 border-b border-blue-400' : 'text-gray-400 hover:text-white',]">
                {{ category }}
              </button>
            </Tab>

          </TabList>
          <TabPanels class="py-8">
            <TabPanel>
              <Bio v-if="athlete" :athlete="athlete as IAthlete"/>
            </TabPanel>
            <TabPanel>
              <Stats v-if="athlete" :athlete="athlete as IAthlete"/>
            </TabPanel>
            <TabPanel>
              <FightRecord v-if="athlete" :athlete="athlete as IAthlete"/>
            </TabPanel>
            <TabPanel>
              <h1>Coming soon!</h1>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
</style>
