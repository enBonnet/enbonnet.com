import Link from "next/link";
import { PaginatorType } from "@/types/PageType";

interface PaginatorProps {
  pages: PaginatorType;
}

export default function Paginator({ pages }: PaginatorProps) {
  return (
    <>
      <div className="paginator">
        {Number(pages.current) - 1 > 0 && (
          <Link href={`/blog/page/${Number(pages.current) - 1}`}>
            <a title="Pagina anterior" className="page">
              {"<"}
            </a>
          </Link>
        )}
        {pages.allIndex.map((number) => (
          <Link key={number} href={`/blog/page/${number}`}>
            <a
              title={`Pagina ${number}`}
              className={`page ${pages.current === number && "current"}`}
            >
              {number}
            </a>
          </Link>
        ))}
        {Number(pages.current) !== pages.last && (
          <Link href={`/blog/page/${Number(pages.current) + 1}`}>
            <a title="Pagina siguiente" className="page">
              {">"}
            </a>
          </Link>
        )}
      </div>
      <style jsx>{`
        .paginator {
          display: flex;
          justify-content: center;
          margin: 40px 0;
          font-size: var(--actions-text-size);
        }
        .paginator .page {
          padding: 12px;
          text-decoration: none;
          color: var(--text-with-bg);
          background: var(--text-bg);
        }
        .paginator .page.current {
          font-weight: bold;
          background-color: inherit;
          color: inherit;
        }
        .paginator .page:not(:last-child) {
          margin-right: 8px;
        }
      `}</style>
    </>
  );
}
