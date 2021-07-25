import PostCard from "./PostCard";
import { ArticleType } from "@/types/ArticleType";
import Link from "@/components/Link";

interface RecentPostsProps {
  posts: Array<ArticleType>;
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="recent-posts">
      <h2 className="section-title">Post recientes</h2>
      <div>
        {posts.map((post: ArticleType) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="more">
        <div className="link">
          <Link url="/blog/page/1" label="Más posts" />
        </div>
      </div>
      <style jsx>{`
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
