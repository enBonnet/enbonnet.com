import Link from "next/link";
import PostCard from "./PostCard";
import { ArticleType } from "@/types/ArticleType";

interface RecentPostsProps {
  posts: Array<ArticleType>;
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="recent-posts">
      <h3 className="section-title">Post recientes</h3>
      <div>
        {posts.map((post: ArticleType) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="more">
        <div className="link">
          <Link href="/blog/page/1">
            <a className="text">Más posts</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .link {
          background-color: var(--text-bg);
          padding: 8px 10px;
        }
        .more {
          margin: 32px 0;
          display: flex;
          justify-content: flex-end;
        }
        .text {
          color: var(--text-with-bg);
          font-weight: bold;
          font-size: var(--actions-text-size);
          text-decoration: none;
        }
      `}</style>
    </section>
  );
}
