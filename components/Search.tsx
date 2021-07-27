import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import client, { QueryResults } from "@/lib/algoliaClient";
import { ArticleType } from "@/types/ArticleType";

interface QueryPostsResults extends QueryResults {
  hits: Array<ArticleType>;
}

export default function Search() {
  const router = useRouter();
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
    const element = document.querySelector("body");
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") return closeResults();
    };
    element?.addEventListener("keydown", escape);
    return () => element?.removeEventListener("keydown", escape);
  });

  const handleClick = (href: string) => {
    closeResults();
    router.push(href);
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
                <li onClick={closeResults} className="result" key={hit.id}>
                  <a
                    className="link"
                    onClick={() => handleClick(hit.url || "/404")}
                  >
                    <h3 className="title">{hit.title}</h3>
                  </a>
                  <a
                    className="link"
                    onClick={() => handleClick(hit.url || "/404")}
                  >
                    <p className="description">{hit.description}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style jsx>{`
        .search-input {
          background-color: var(--input-bg);
          border-radius: 4px;
          border: none;
          outline: none;
          padding: 8px;
          border: var(--input-border);
        }
        .search-input:focus {
          border: var(--input-border-focus);
        }
        .results {
          position: absolute;
          right: 0;
          top: 55px;
          box-shadow: var(--box-shadow);
          border-radius: 4px;
          overflow: hidden;
          color: var(--text-color);
        }
        .results-list {
          background-color: var(--list-bg);
          list-style: none;
          margin: 0;
          padding: 16px;
          position: relative;
        }
        .result {
          margin-bottom: 16px;
        }
        .result:hover {
          background-color: var(--list-bg-hover);
        }
        .results .result:not(:last-child) {
          border-bottom: var(--divider-underline);
          padding-bottom: 16px;
        }
        .result .link {
          cursor: pointer;
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
