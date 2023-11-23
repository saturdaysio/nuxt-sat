
import { IAlgoliaSearchResult } from "~/utils/search/searchUtil";
import { IEvent } from "~/utils/interfaces/Event";

interface State {
  data: IAlgoliaSearchResult<IEvent>,
  query: string,
}

export const useEventStore = defineStore({
  id: 'event',
  state: (): State => {
    return {
      query: '',
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
    getResults: (state: State): IAlgoliaSearchResult<IEvent> => state.data,
    getQuery: (state: State): string => state.query
  },
  actions: {
    setResults(results: IAlgoliaSearchResult<IEvent>) {
      this.data = results
    },
    setQuery(query: string) {
      this.query = query
    }
  }
})
