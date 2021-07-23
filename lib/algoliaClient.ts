import algoliaClient from "next-algolia-client";
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

const client = algoliaClient.getInstance({
  algoliaPublicId,
  algoliaPublicKey,
  options: getAlgoliaConfig(),
});
client.setIndex(indexName);

export default client;
