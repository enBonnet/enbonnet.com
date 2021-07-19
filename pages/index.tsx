import { ArticleType } from "@/types/ArticleType";
import { getPublicArticles } from "@/lib/articles";
import { saveRecords } from "@/lib/algolia";
import slugify from "@/lib/slugify";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import RecentPosts from "@/components/RecentPosts";
import Hero from "@/components/Hero";

type HomeProps = {
  posts: Array<ArticleType>;
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <Head />
      <Navbar />
      <main>
        <div className="container">
          <Hero />
        </div>

        <div className="container">
          <RecentPosts posts={posts} />
        </div>
      </main>
      <div className="container">
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
