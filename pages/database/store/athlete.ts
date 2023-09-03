import {defineStore} from 'pinia'
import {IAlgoliaSearchResult} from "~/utils/searchUtil";
import {IAthlete} from "~/utils/interfaces/Athlete";

interface State {
  data: IAlgoliaSearchResult<IAthlete>
}

export const useAthleteStore = defineStore({
  id: 'athlete',
  state: (): State => {
    return {
      data: {
        hits: [],
        nbHits: 0,
        page: 0,
        nbPages: 0,
        hitsPerPage: 0,
        exhaustiveNbHits: false,
        query: '',
        params: '',
        processingTimeMS: 0,
      }
    }
  },
  getters: {
    getResults: (state: State): IAlgoliaSearchResult<IAthlete> => state.data
  },
  actions: {
    setResults(results: IAlgoliaSearchResult<IAthlete>) {
      this.data = results
    }
  }
})
