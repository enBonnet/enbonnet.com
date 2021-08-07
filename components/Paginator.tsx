import Link from "next/link";
import { PaginatorType } from "@/types/PageType";

interface PaginatorProps {
  pages: PaginatorType;
  base: string;
}

export default function Paginator({ pages, base }: PaginatorProps) {
  if (pages.last <= 1) return null;
  return (
    <>
      <div className="paginator">
        {Number(pages.current) - 1 > 0 && (
          <Link href={`${base}${Number(pages.current) - 1}`}>
            <a title="Pagina anterior" className="page">
              {"<"}
            </a>
          </Link>
        )}
        {pages.allIndex.map((number) => (
          <Link key={number} href={`${base}${number}`}>
            <a
              title={`Pagina ${number}`}
              className={`page ${pages.current === number && "current"}`}
            >
              {number}
            </a>
          </Link>
        ))}
        {Number(pages.current) !== pages.last && (
          <Link href={`${base}${Number(pages.current) + 1}`}>
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
          padding: 8px 10px;
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
