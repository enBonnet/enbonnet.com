import paginatorEasy from "pagination-easy";
import { ArticleType } from "@/types/ArticleType";
import { PaginatorType } from "@/types/PageType";
import { CategoriesType, getCategories } from "@/lib/categories";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Paginator from "@/components/Paginator";
import PostCard from "@/components/PostCard";
import Navbar from "@/components/Navbar";
import slugify from "@/lib/slugify";
import { filterPublicArticles, formatPostsPages } from "@/lib/articles";

interface HomeProps {
  posts: Array<ArticleType>;
  pages: PaginatorType;
  categoryName: string;
}

interface PathParams {
  params: {
    name: string;
    number: string;
  };
}

const postsByPage = 8;

export default function CategoryPage({
  posts,
  pages,
  categoryName,
}: HomeProps) {
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
            <Paginator
              pages={pages}
              base={`/blog/categories/${categoryName}/page/`}
            />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const serializeCategories = async () => {
  const categories = await getCategories();
  const initialValue: { [key: string]: CategoriesType } = {};
  const sortByCategory = categories.reduce((acc, cur) => {
    return {
      ...acc,
      [slugify(cur.name)]: cur,
    };
  }, initialValue);
  return sortByCategory;
};

export async function getStaticProps({ params }: PathParams) {
  const categoriesSort = await serializeCategories();
  const posts = formatPostsPages(
    filterPublicArticles(categoriesSort[slugify(params.name)].articles)
  );
  const { sortPages, indexOfPages } = paginatorEasy(posts, postsByPage);

  return {
    props: {
      categoryName: params.name,
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
  const categories = await getCategories();
  const paths: Array<PathParams> = [];
  categories.forEach((category) => {
    const { indexOfPages } = paginatorEasy(category.articles, postsByPage);
    indexOfPages.forEach((number) =>
      paths.push({
        params: {
          name: slugify(category.name),
          number,
        },
      })
    );
  });
  return { paths, fallback: false };
}
