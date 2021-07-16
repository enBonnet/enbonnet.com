import { ArticleType } from "@/types/ArticleType";
import Link from "next/link";

type PostProps = {
  post: ArticleType;
};

export default function PostCard({ post }: PostProps) {
  return (
    <div key={post.id}>
      <Link href={`/post/${post.slug}`}>
        <a>
          <h3>{post.title}</h3>
        </a>
      </Link>
      <Link href={`/post/${post.slug}`}>
        <a>
          <p>{post.description}</p>
        </a>
      </Link>
    </div>
  );
}
