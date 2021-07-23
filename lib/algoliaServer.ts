import AlgoliaServer from "next-algolia-server";
import { algoliaId, algoliaKey, indexName } from "../config";

const algolia = AlgoliaServer.getInstance({ algoliaId, algoliaKey });
algolia.setIndex(indexName);
algolia.setSearchableAttributes([
  "title,description",
  "content",
  "categories.name",
]);

export default algolia;
