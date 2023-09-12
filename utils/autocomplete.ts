import {searchClient} from "~/utils/search/algolia";
import {debounce, IAlgoliaOptions, IAlgoliaSearchResult} from "~/utils/search/searchUtil";
import {MultipleQueriesResponse} from "@algolia/client-search";


export interface IAlgoliaHitExtended{
  _highlightResult: {
    [key: string]: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
  };
}

export class AlgoliaAutocomplete<T> {
  private readonly indexName: string;
  private options: IAlgoliaOptions
  private debouceSearch = debounce((query: string, setFunc: any) => {
    this.search(query, 0).then(setFunc);
  },  150, false);


  constructor(indexName: string, options: IAlgoliaOptions = {
    limit: 50,
  }) {
    this.indexName = indexName;
    this.options = options;
  }

  async search(query: string, page: number): Promise<IAlgoliaSearchResult<T>> {
    const res: MultipleQueriesResponse<T> = await searchClient.search<T>(
      [
        {
          indexName: this.indexName,
          query,

          params: {
            // use taailwind classes for highlighting for gray underline
            highlightPreTag: '<em class="underline">',
            highlightPostTag: '</em>',
            hitsPerPage: this.options.limit,
            page,
          },
        },
      ]
    );
    return res.results[0] as IAlgoliaSearchResult<T>
  }

  searchDebounced(query: string, setFunc: (res: IAlgoliaSearchResult<T>) => void) {

    this.debouceSearch(query, setFunc)
  }


}


