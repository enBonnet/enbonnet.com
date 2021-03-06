import paginatorEasy from "pagination-easy";
import { ArticleType } from "@/types/ArticleType";
import { PaginatorType } from "@/types/PageType";
import { getPublicArticles, formatPostsPages } from "@/lib/articles";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Paginator from "@/components/Paginator";
import PostCard from "@/components/PostCard";
import Navbar from "@/components/Navbar";

interface HomeProps {
  posts: Array<ArticleType>;
  pages: PaginatorType;
}

interface PathParams {
  params: {
    number: string;
  };
}

const postsByPage = 8;

export default function BlogPage({ posts, pages }: HomeProps) {
  return (
    <div>
      <Head subtitle="Blog" />
      <Navbar />
      <div className="row">
        <div className="col">
          <main className="container">
            <section>
              <h2 className="section-title">Posts</h2>
              <div>
                {posts.map((post: ArticleType) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
            <Paginator pages={pages} base="/blog/page/" />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }: PathParams) {
  const articles = await getPublicArticles();
  const posts = formatPostsPages(articles);
  const { sortPages, indexOfPages } = paginatorEasy(posts, postsByPage);

  return {
    props: {
      posts: sortPages[params.number],
      pages: {
        allIndex: indexOfPages,
        current: params.number,
        last: indexOfPages.length,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPublicArticles();
  const { indexOfPages } = paginatorEasy(posts, postsByPage);

  const paths = indexOfPages.map((number) => ({
    params: {
      number,
    },
  }));

  return { paths, fallback: false };
}
