import { useState, ChangeEvent } from "react";
import Link from "next/link";
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
        placeholder="Buscar..."
        onChange={(event) => handleSearch(event)}
      />

      {showResults && hitsResults.length > 0 && (
        <div className="results">
          <ul className="results-list">
            {hitsResults.map((hit) => {
              return (
                <li className="result" key={hit.id}>
                  <Link href={hit.url || "/404"}>
                    <a className="link">
                      <h3 className="title">{hit.title}</h3>
                    </a>
                  </Link>
                  <Link href={hit.url || "/404"}>
                    <a className="link">
                      <p className="description">{hit.description}</p>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style jsx>{`
        .search-input {
          background-color: rgba(255, 255, 255, 50%);
          border-radius: 4px;
          border: none;
          outline: none;
          padding: 8px;
          border: 1px solid rgba(189, 189, 189, 50%);
        }
        .search-input:focus {
          border: 1px solid rgb(189, 189, 189);
        }
        .results {
          position: absolute;
          right: 0;
          top: 55px;
        }
        .results-list {
          background-color: rgba(255, 255, 255);
          list-style: none;
          margin: 0;
          padding: 16px;
          position: relative;
        }
        .result {
          margin-bottom: 16px;
        }
        .results .result:not(:last-child) {
          border-bottom: 1px solid rgba(0, 0, 0, 30%);
          padding-bottom: 16px;
        }
        .result .link {
          color: inherit;
          text-decoration: none;
        }
        .result .title {
          margin: 0;
        }
        .result .description {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
