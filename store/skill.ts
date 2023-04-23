import { defineStore } from 'pinia'

import skillJson from '@/json/skills.json'

export const useSkillStore = defineStore({
    id: 'skills',
    state: () => {

        return {
            skillJson
        }
    },
    getters: {},

    actions: {}
})