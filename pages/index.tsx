import Link from "next/link";
import { ArticleType } from "@/types/ArticleType";
import { getPublicArticles } from "@/lib/articles";
import { saveRecords } from "@/lib/algolia";
import slugify from "@/lib/slugify";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import PostCard from "@/components/PostCard";
import Search from "@/components/Search";

type HomeProps = {
  posts: Array<ArticleType>;
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <Head />
      <Search />
      <div className="container">
        <main>
          <section>
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
        </main>

        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getPublicArticles();
  const posts = articles.map((post: ArticleType) => {
    const slug = slugify(post.title);
    return {
      ...post,
      objectID: post.id,
      slug,
      url: `/post/${slug}`,
    };
  });
  saveRecords(posts);
  return {
    props: { posts: posts.slice(0, 3) },
  };
}
