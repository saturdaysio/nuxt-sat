import {MultipleQueriesResponse} from "@algolia/client-search";
import {searchClient} from "~/utils/search/algolia";

export function debounce(func: any, wait: number, immediate: boolean): (this: any, ...args: any[]) => void {
  let timeout: any;
  return function executedFunction() {
    // @ts-ignore
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout!);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


export interface IAlgoliaOptions {
  limit?: number;
  offset?: number;
}

export interface IAlgoliaSearchResult<T> {
  hits: T[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
  processingTimeMS: number;

}


export class AlgoliaSearch<T> {
  index: string;
  options: IAlgoliaOptions;

  constructor(indexName: string, options: IAlgoliaOptions = {
    limit: 50,
  }) {
    this.index = indexName
    this.options = options
  }

  async search(query: string, page: number): Promise<IAlgoliaSearchResult<T>> {
    const res: MultipleQueriesResponse<T> = await searchClient.search<T>(
      [
        {
          indexName: this.index,
          query,
          params: {
            hitsPerPage: this.options.limit,
            page,
          },
        },
      ]
    );
    return res.results[0] as IAlgoliaSearchResult<T>
  }

  searchDebounced = debounce(this.search, 120, false);


}
