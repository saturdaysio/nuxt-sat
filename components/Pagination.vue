<template>
  <div class="flex items-center justify-between border border-white/20 bg-gray-800/20 px-4 py-3 sm:px-4">
    <div class="flex flex-1 justify-between sm:hidden">
      <a href="#"
         class="relative inline-flex items-center rounded-md border border-green-400 bg-black px-4 py-2 text-md font-medium text-green-400 hover:bg-gray-50">Previous</a>
      <a href="#"
         class="relative ml-3 inline-flex items-center rounded-md border border-white/20 bg-green-400 px-4 py-2 text-md font-bold text-black hover:bg-gray-50">Next</a>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-md text-gray-200">
          Showing
          {{ ' ' }}
          <span class="font-bold">{{ from }}</span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span class="font-bold">{{ to }}</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span class="font-bold">{{ total }}</span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md text-white shadow-sm" aria-label="Pagination">
          <a href="#"
             @click.prevent="onPageChange(currentPage - 2)"
             class="relative inline-flex items-center rounded-l-md px-2 py-2 text-white ring-1 ring-inset ring-gray-900 hover:bg-gray-900 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-6 w-6" aria-hidden="true"/>
          </a>

          <!-- for computed links -->
          <a v-for="link in computedLinks"
             :key="link"
             href="#"
             @click.prevent="onPageChange(link.page - 1)"
             class="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-900 hover:bg-gray-900 focus:z-20 focus:outline-offset-0"
             :class="{'bg-white text-black hover:bg-white': link.isActive, '': !link.isActive}">
            {{ link.page }}
          </a>

          <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
          <!--          <a href="#" aria-current="page"-->
          <!--             class="relative z-10 inline-flex items-center bg-white px-4 py-2 text-md font-bold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>-->
          <!--          <a href="#"-->
          <!--             class="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-900 hover:bg-gray-900 focus:z-20 focus:outline-offset-0">2</a>-->
          <!--          <a href="#"-->
          <!--             class="relative hidden items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-900 hover:bg-gray-900 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>-->
          <!--          <span-->
          <!--              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-900 focus:outline-offset-0">...</span>-->
          <!--          <a href="#"-->
          <!--             class="relative hidden items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-900 hover:bg-gray-900 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>-->
          <!--          <a href="#"-->
          <!--             class="relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-900 hover:bg-gray-900 focus:z-20 focus:outline-offset-0">9</a>-->
          <!--          <a href="#"-->
          <!--             class="relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-900 hover:bg-gray-900 focus:z-20 focus:outline-offset-0">10</a>-->
          <a href="#"
             @click.prevent="onPageChange(currentPage)"
             class="relative inline-flex items-center rounded-r-md px-2 py-2 text-white ring-1 ring-inset ring-gray-900 hover:bg-gray-900 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-6 w-6" aria-hidden="true"/>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/20/solid'

interface IPagenationProps {
  total: number
  perPage: number
  currentPage: number
  from: number
  pages: number
  to: number
  onPageChange: (page: number) => void
}

const props = defineProps<IPagenationProps>()

const {total, pages, currentPage, from, to} = toRefs(props)

const computedLinks = computed(() => {
  const pageLinks = new Array(pages.value).fill(0).map((_, i) => {
    const page = i + 1
    return {
      page: page,
      url: `?page=${page}`,
      isActive: page === currentPage.value,
    }
  })
  return pageLinks
})

</script>
