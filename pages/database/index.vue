<script setup lang="ts">

  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import Athlete from "./athlete.vue";
  import Event from "./event.vue";

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
      <div class="mx-auto max-w-full px-4 pb-12 bg-black">
        <!-- Your content -->
        <section>
          <TabGroup>
            <TabList class="flex flex-0 w-48 rounded-lg">
              <Tab v-for="category in ['Athlete', 'Event']" as="template" :key="category" v-slot="{ selected }">
                <button
                    :class="['w-full py-2.5 text-sm font-bold leading-5 text-black outline-none',
                       'focus:outline-none',
                       selected
                      ? 'bg-green-400 outline-none'
                      : 'text-white hover:text-white bg-gray-800 hover:bg-blue-500 outline-none',
                    ]"
                >
                  {{ category }}
                </button>
              </Tab>

            </TabList>
            <TabPanels class="py-8">
              <TabPanel>
                <Athlete/>
              </TabPanel>
              <TabPanel>
                <Event/>
              </TabPanel>
            </TabPanels>
          </TabGroup>


        </section>
      </div>
    </main>
  </div>
</template>


<style lang="scss">
</style>
