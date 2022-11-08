import { defineStore } from 'pinia'

import clientJson from '@/json/skills.json'

export const useClientStore = defineStore({
    id: 'skills',
    state: () => {
        return {
            skillJson
        }
    },
    getters: {},

    actions: {}
})