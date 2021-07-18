import { useState, ChangeEvent } from "react";
import { search, QueryResults } from "@/lib/algoliaClient";
import { ArticleType } from "@/types/ArticleType";

interface QueryPostsResults extends QueryResults {
  hits: Array<ArticleType>;
}

export default function Search() {
  const [hitsResults, setHitsResults] = useState<Array<ArticleType>>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const minInputLent = query.length >= 3;
    setShowResults(minInputLent);
    if (minInputLent) {
      const results = (await search(query)) as QueryPostsResults;
      setHitsResults(results.hits);
    }
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="[B] Buscar"
        onChange={(event) => handleSearch(event)}
      />

      {showResults && (
        <div className="results">
          <ul className="results-list">
            {hitsResults.map((hit) => {
              return (
                <li className="result" key={hit.id}>
                  {hit.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
