import algoliasearch from "algoliasearch";
import { ArticleType } from "@/types/ArticleType";

const algoliaId = process.env.ALGOLIA_ID || "";
const algoliaKey = process.env.ALGOLIA_KEY || "";

const client = algoliasearch(algoliaId, algoliaKey);
const index = client.initIndex("blog_enbonnet");

export const saveRecords = async (records: Array<ArticleType>) => {
  try {
    index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });
  } catch (err) {
    throw new Error(err);
  }
};
