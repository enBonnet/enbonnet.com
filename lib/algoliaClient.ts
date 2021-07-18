import algoliasearch from "algoliasearch/lite";
import { createNullCache } from "@algolia/cache-common";
import { createInMemoryCache } from "@algolia/cache-in-memory";
import {
  algoliaPublicId,
  algoliaPublicKey,
  indexName,
  isProduction,
} from "../config";

export interface QueryResults {
  exhaustiveNbHits: boolean;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  query: string;
}

const getAlgoliaConfig = () => {
  if (isProduction) {
    return {
      responsesCache: createInMemoryCache(),
      requestsCache: createInMemoryCache({ serializable: false }),
    };
  }

  return {
    responsesCache: createNullCache(),
  };
};

const searchClient = algoliasearch(
  algoliaPublicId,
  algoliaPublicKey,
  getAlgoliaConfig()
);

export const search = (query: string) => {
  return new Promise((resolve, reject) => {
    const client = searchClient.initIndex(indexName);
    client
      .search(query)
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};
