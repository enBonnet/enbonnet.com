import Link from "next/link";
import PostCard from "./PostCard";
import { ArticleType } from "@/types/ArticleType";

type RecentPostsProps = {
  posts: Array<ArticleType>;
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="recent-posts">
      <h3>Post recientes</h3>
      <div>
        {posts.map((post: ArticleType) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div>
        <Link href="/blog/page/1">
          <a>Más posts</a>
        </Link>
      </div>
    </section>
  );
}