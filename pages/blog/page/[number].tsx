import Link from "next/link";
import { ArticleType } from "@/types/ArticleType";
import { PaginatorType } from "@/types/PageType";
import { getPublicArticles, formatPostsPages } from "@/lib/articles";
import handlePages from "@/lib/pager";
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

export default function BlogPage({ posts, pages }: HomeProps) {
  return (
    <div>
      <Head subtitle="Blog" />
      <Navbar />
      <div className="container">
        <main>
          <section>
            <h3>Posts</h3>
            <div>
              {posts.map((post: ArticleType) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
          <Paginator pages={pages} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }: PathParams) {
  const articles = await getPublicArticles();
  const posts = formatPostsPages(articles);
  const { sortPages, indexOfPages } = handlePages(posts);

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
  const { indexOfPages } = handlePages(posts);

  const paths = indexOfPages.map((number) => ({
    params: {
      number,
    },
  }));

  return { paths, fallback: false };
}
