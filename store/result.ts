import { defineStore } from 'pinia'

import resultJson from '@/json/results.json'

export const useResultStore = defineStore({
    id: 'results',
    state: () => {
        return {
            resultJson
        }
    },
    getters: {},

    actions: {}
})