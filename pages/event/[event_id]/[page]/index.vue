<script setup lang="ts">

  import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/vue";
  import Overview from "./Overview.vue";
  import Matches from "./Matches.vue";
  import {IEvent} from "~/utils/interfaces/Event";

  const types = ['overview', 'matches', 'media']
  const route = useRoute()

  const api = API.getInstance()
  const {data: event, pending, error, refresh}: {
    data: Ref<IEvent | null>,
    pending: Ref<boolean>,
    error: any,
    refresh: () => void
  } = await useAsyncData<IEvent>(`event_${route.params.event_id}`, async () => {
    const result = await api.getEvent(route.params.event_id as string)
    return result.data
  })
  const activeTab = computed(() => {
    return types.indexOf((route.params.page as string).toLowerCase().replace(/\s/g, '_'))
  })

  const router = useRouter()
  function changeTab(index: number) {
    const tab = types[index]
    router.push({
      path: `/event/${route.params.event_id as string}/${tab}`,
      params: {
        event_id: route.params.event_id,
        page: tab
      }
    })
  }

</script>

<template>
  <div class="min-h-full">
    <Nav2/>

    <main class="pt-24">
      <div class="mx-auto max-w-screen-2xl px-2 sm:px-4 text-white">
        <!-- Your content -->

        <div class="flex items-center justify-between py-2">
          <h1 v-if="event" class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{{ event.name }}</h1>
        </div>
        <TabGroup :selectedIndex="activeTab" @change="changeTab">
          <TabList class="flex flex-0 w-full space-x-8 border-b border-gray-700 ">
            <Tab v-for="category in ['Overview', 'Matches', 'Media']" as="template" :key="category" v-slot="{ selected }">
              <button
                  :class="[' py-2.5 text-lg font-medium leading-5 text-grey-700 outline-none', 'focus:outline-none focus:text-white whitespace-nowrap',
                       selected ? 'text-white shadow' : 'text-gray-400 hover:text-white',
                  ]"
              >
                {{ category }}
              </button>
            </Tab>

          </TabList>
          <TabPanels class="py-8">
            <TabPanel>
              <Overview v-if="event" :event="event as IEvent"/>
            </TabPanel>

            <TabPanel>
              <Matches v-if="event" :event="event as IEvent"/>
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
