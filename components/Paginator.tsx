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
          margin: 12px 0 24px 0;
        }
        .paginator .page {
          padding: 12px;
        }
        .paginator .page.current {
          font-weight: bold;
        }
        .paginator .page:not(:last-child) {
          margin-right: 8px;
        }
      `}</style>
    </>
  );
}
