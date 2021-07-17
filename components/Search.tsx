import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import { searchClient } from "@/lib/algolia";
import { ArticleType } from "@/types/ArticleType";
import { algoliaIndex } from "../config";

type HitProps = {
  hit: ArticleType;
};

const Hit = ({ hit }: HitProps) => <p>{hit.title}</p>;

export default function Search() {
  return (
    <div>
      <InstantSearch indexName={algoliaIndex} searchClient={searchClient}>
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
}
