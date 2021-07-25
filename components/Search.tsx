import { useState, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import client, { QueryResults } from "@/lib/algoliaClient";
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
      const results = (await client.search(query)) as QueryPostsResults;
      setHitsResults(results.hits);
    }
  };

  const closeResults = () => setShowResults(false);

  useEffect(() => {
    const element = document.querySelector("main");
    element?.addEventListener("click", closeResults);
    return () => element?.removeEventListener("click", closeResults);
  });

  useEffect(() => {
    const element = document.querySelector("body");
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") return closeResults();
    };
    element?.addEventListener("keydown", escape);
    return () => element?.removeEventListener("keydown", escape);
  });

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
                <li onClick={closeResults} className="result" key={hit.id}>
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
          box-shadow: 2px 3px 7px rgb(165, 165, 165);
          border-radius: 4px;
          overflow: hidden;
        }
        .results-list {
          background-color: rgb(250, 250, 250);
          list-style: none;
          margin: 0;
          padding: 16px;
          position: relative;
        }
        .result {
          margin-bottom: 16px;
        }
        .result:hover {
          background-color: rgb(255, 255, 255);
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
        @media (min-width: 1000px) {
          .results {
            right: 170px;
            max-width: 500px;
          }
        }
      `}</style>
    </div>
  );
}
