import dynamic from "next/dynamic";
import { ArticleType } from "@/types/ArticleType";
import { getPublicArticles, formatPostsPages } from "@/lib/articles";
import algoliaServer from "@/lib/algoliaServer";

const Footer = dynamic(() => import("@/components/Footer"));
const Head = dynamic(() => import("@/components/Head"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const RecentPosts = dynamic(() => import("@/components/RecentPosts"));
const Hero = dynamic(() => import("@/components/Hero"));

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
