import { ArticleType } from "@/types/ArticleType";
import { getPublicArticles } from "@/lib/articles";
import { saveRecords } from "@/lib/algolia";
import slugify from "@/lib/slugify";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import RecentPosts from "@/components/RecentPosts";

type HomeProps = {
  posts: Array<ArticleType>;
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <Head />
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="content">
            <div className="highlight">
              <h1 className="title">Ender Bonnet</h1>
            </div>
            <div className="description">
              <p>
                Frontend Developer, apasionado con compartir conocimientos.
                Hablar sobre JavaScript, TypeScript, ReactJS y NextJS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <main>
          <RecentPosts posts={posts} />
        </main>

        <Footer />
      </div>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .hero .highlight {
          background-color: #000;
          padding: 8px 16px;
          width: fit-content;
        }
        .hero .title {
          font-size: 2.7em;
          margin: 0;
          background: linear-gradient(90deg, #1cfeba, #9d8df1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero .description {
          max-width: 300px;
          line-height: 30px;
          font-size: 1.3em;
          font-weight: 200;
        }
      `}</style>
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
