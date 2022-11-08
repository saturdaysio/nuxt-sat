import { defineStore } from 'pinia'

import clientJson from '@/json/result.json'

export const useClientStore = defineStore({
    id: 'results',
    state: () => {
        return {
            resultJson
        }
    },
    getters: {},

    actions: {}
})