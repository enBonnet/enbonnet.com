import Link from "next/link";
import axios from "axios";
import { ArrayOfPosts, ArticleType } from "@/types/ArticleType";
import { POSTS_SORT_BY_CREATED_AT_DESC } from "@/lib/api";
import { filterPublicArticles } from "@/lib/articles";
import handlePlages from "@/lib/pager";
import slugify from "@/lib/slugify";
import Footer from "@/components/Footer";
import Head from "@/components/Head";

type HomeProps = {
  posts: Array<ArticleType>;
};

export default function BlogPage({ posts }: HomeProps) {
  return (
    <div>
      <Head subtitle="Blog" />

      <main className="">
        <div>
          <h3>Posts</h3>
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
        </div>
      </main>

      <Footer />
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
  const { sortPages } = handlePlages(posts);

  return {
    props: { posts: sortPages[params.number] },
  };
}

export async function getStaticPaths() {
  const res: ArrayOfPosts = await axios.get(POSTS_SORT_BY_CREATED_AT_DESC);
  const posts = filterPublicArticles(res.data);
  const { indexOfPages } = handlePlages(posts);

  const paths = indexOfPages.map((number) => ({
    params: {
      number,
    },
  }));

  return { paths, fallback: false };
}
