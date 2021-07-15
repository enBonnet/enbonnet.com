import Link from "next/link";
import axios from "axios";
import { ArrayOfPosts, ArticleType } from "@/types/ArticleType";
import { POSTS_SORT_BY_CREATED_AT_DESC } from "@/lib/api";
import { filterPublicArticles } from "@/lib/articles";
import slugify from "@/lib/slugify";
import Footer from "@/components/Footer";
import Head from "@/components/Head";

type HomeProps = {
  posts: Array<ArticleType>;
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <Head />

      <main className="">
        <div>
          <h3>Post recientes</h3>
          <div>
            {posts.map((post: ArticleType) => (
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
            ))}
          </div>
          <div>
            <Link href="/blog">
              <a>Más posts</a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res: ArrayOfPosts = await axios.get(POSTS_SORT_BY_CREATED_AT_DESC);
  const posts = filterPublicArticles(res.data).map((post: ArticleType) => ({
    ...post,
    slug: slugify(post.title),
  }));
  return {
    props: { posts: posts.slice(0, 3) },
  };
}
