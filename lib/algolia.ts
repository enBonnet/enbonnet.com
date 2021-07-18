import algoliasearch from "algoliasearch";
import { ArticleType } from "@/types/ArticleType";
import { algoliaId, algoliaKey, indexName } from "../config";

const client = algoliasearch(algoliaId, algoliaKey);
const index = client.initIndex(indexName);

const searchableAttributes = [
  "title,description",
  "content",
  "categories.name",
];

const setAttributes = (attributes: Array<string>) => {
  return new Promise((resolve, reject) => {
    index
      .setSettings({
        searchableAttributes: attributes,
      })
      .then((done) => resolve(done))
      .catch((err) => reject(err));
  });
};

export const getindexName = () => {
  return client.initIndex(indexName);
};

const uploadRecords = (records: Array<ArticleType>) => {
  return new Promise((resolve, reject) => {
    index
      .saveObjects(records)
      .then((recordsIds) => resolve(recordsIds))
      .catch((err) => reject(err));
  });
};

export const clearRecords = () => {
  return new Promise((resolve, reject) => {
    index
      .clearObjects()
      .then((done) => resolve(done))
      .catch((err) => reject(err));
  });
};

export const saveRecords = async (records: Array<ArticleType>) => {
  try {
    Promise.all([
      await uploadRecords(records),
      await setAttributes(searchableAttributes),
    ]);
  } catch (err) {
    throw new Error(err);
  }
};
