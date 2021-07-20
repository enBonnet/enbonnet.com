import Link from "next/link";
import { ArticleType } from "@/types/ArticleType";

type PostProps = {
  post: ArticleType;
};

export default function PostCard({ post }: PostProps) {
  return (
    <>
      <article className="card" key={post.id}>
        <Link href={post.url || "/404"}>
          <a className="link">
            <h3 className="title">{post.title}</h3>
          </a>
        </Link>
        <Link href={post.url || "/404"}>
          <a className="link">
            <p className="description">{post.description}</p>
          </a>
        </Link>
      </article>
      <style jsx>{`
        .card {
          border-bottom: 1px solid rgba(0, 0, 0, 20%);
          margin-bottom: 16px;
          padding: 16px;
        }
        .card .link {
          text-decoration: none;
          color: inherit;
        }
        .card .title {
          margin: 0;
          font-size: 1.2em;
          margin-bottom: 16px;
        }
        .card .description {
          margin: 0;
          margin-bottom: 18px;
          line-height: 30px;
          font-size: 1.2em;
          font-weight: 200;
        }
      `}</style>
    </>
  );
}
