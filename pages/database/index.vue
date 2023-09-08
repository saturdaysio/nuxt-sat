<template>
  <div class="min-h-full">

    <Nav2/>

    <main class="pt-24">
      <div class="mx-auto max-w-full px-4 pb-12 sm:px-6 lg:px-8 bg-black">
        <!-- Your content -->
        <section>
          <TabGroup>
            <TabList class="flex flex-0 w-48 space-x-1 rounded-md border-2 border-gray-700">
              <Tab
                  v-for="category in ['Athlete', 'Event']"
                  as="template"
                  :key="category"
                  v-slot="{ selected }"
              >
                <button
                    :class="[
                      'w-full py-2.5 text-sm font-medium leading-5 text-grey-700 outline-none',
                       'focus:outline-none focus:text-white',
                       selected
                ? 'text-white shadow'
                : 'text-gray-400 hover:text-white',
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


<script setup lang="ts">
import {TabGroup, TabList, Tab, TabPanels, TabPanel} from '@headlessui/vue'
import Athlete from "./athlete.vue";
import Event from "./event.vue";


</script>


<style lang="scss">
</style>
