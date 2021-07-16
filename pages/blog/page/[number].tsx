import axios from "axios";
import Link from "next/link";
import { ArrayOfPosts, ArticleType } from "@/types/ArticleType";
import { PaginatorType } from "@/types/PageType";
import { POSTS_SORT_BY_CREATED_AT_DESC } from "@/lib/api";
import { filterPublicArticles } from "@/lib/articles";
import handlePages from "@/lib/pager";
import slugify from "@/lib/slugify";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Paginator from "@/components/Paginator";
import PostCard from "@/components/PostCard";

type HomeProps = {
  posts: Array<ArticleType>;
  pages: PaginatorType;
};

export default function BlogPage({ posts, pages }: HomeProps) {
  return (
    <div>
      <Head subtitle="Blog" />
      <div className="container">
        <main>
          <nav>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </nav>
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

type PathParams = {
  params: {
    number: string;
  };
};

export async function getStaticProps({ params }: PathParams) {
  const res: ArrayOfPosts = await axios.get(POSTS_SORT_BY_CREATED_AT_DESC);
  const posts = filterPublicArticles(res.data).map((post: ArticleType) => ({
    ...post,
    slug: slugify(post.title),
  }));
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
  const res: ArrayOfPosts = await axios.get(POSTS_SORT_BY_CREATED_AT_DESC);
  const posts = filterPublicArticles(res.data);
  const { indexOfPages } = handlePages(posts);

  const paths = indexOfPages.map((number) => ({
    params: {
      number,
    },
  }));

  return { paths, fallback: false };
}
