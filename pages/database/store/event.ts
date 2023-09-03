import {defineStore} from 'pinia'
import {IAlgoliaSearchResult} from "~/utils/searchUtil";
import {IEvent} from "~/utils/interfaces/Event";

interface State {
  data: IAlgoliaSearchResult<IEvent>
}

export const useEventStore = defineStore({
  id: 'event',
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
    getResults: (state: State): IAlgoliaSearchResult<IEvent> => state.data
  },
  actions: {
    setResults(results: IAlgoliaSearchResult<IEvent>) {
      this.data = results
    }
  }
})
