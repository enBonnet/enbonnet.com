import { ArticleType } from "@/types/ArticleType";
import { getPublicArticles, formatPostsPages } from "@/lib/articles";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import RecentPosts from "@/components/RecentPosts";
import Hero from "@/components/Hero";
import algoliaServer from "@/lib/algoliaServer";

interface HomeProps {
  posts: Array<ArticleType>;
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head />
      <Navbar absolute />
      <main>
        <div className="row">
          <div className="col">
            <div className="container">
              <Hero />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="container">
              <RecentPosts posts={posts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const articles = await getPublicArticles();
  const posts = formatPostsPages(articles);
  algoliaServer.saveRecords(posts);
  return {
    props: { posts: posts.slice(0, 3) },
  };
}
