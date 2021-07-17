import algoliasearch from "algoliasearch";
import { createNullCache } from "@algolia/cache-common";
import { createInMemoryCache } from "@algolia/cache-in-memory";
import { ArticleType } from "@/types/ArticleType";
import {
  algoliaId,
  algoliaKey,
  algoliaPublicId,
  algoliaPublicKey,
  algoliaIndex,
  isProduction,
} from "../config";

const client = algoliasearch(algoliaId, algoliaKey);
const index = client.initIndex(algoliaIndex);

const uploadRecords = (records: Array<ArticleType>) => {
  return new Promise((resolve, reject) => {
    index
      .saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
      .then((recordsIds) => {
        resolve(recordsIds);
      })
      .catch((err) => reject(err));
  });
};

const clearRecords = () => {
  return new Promise((resolve, reject) => {
    index
      .clearObjects()
      .then((done) => {
        resolve(done);
      })
      .catch((err) => reject(err));
  });
};

export const saveRecords = async (records: Array<ArticleType>) => {
  try {
    Promise.all([await clearRecords(), await uploadRecords(records)]);
  } catch (err) {
    throw new Error(err);
  }
};

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

export const searchClient = algoliasearch(
  algoliaPublicId,
  algoliaPublicKey,
  getAlgoliaConfig()
);
