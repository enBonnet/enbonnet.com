import dayjs from "dayjs";
import "dayjs/locale/es-us";
import axios from "axios";
import slugify from "@/lib/slugify";
import { ArticleType } from "@/types/ArticleType";
import { POSTS_SORT_BY_CREATED_AT_DESC } from "@/lib/api";

dayjs.locale("es-us");

type ArticleDateType = {
  updatedAt: string;
  createdAt: string;
};

const ArticleDate = ({ updatedAt, createdAt }: ArticleDateType) => {
  const dateFormat = "DD/MM/YYYY [a las] HH:mm";
  const lastDate =
    createdAt !== updatedAt
      ? `Actualizado el ${dayjs(updatedAt).format(dateFormat)}`
      : `Creado el ${dayjs(createdAt).format(dateFormat)}`;
  return <div>{lastDate}</div>;
};

export default function Article({ article }) {
  return (
    <div>
      <h1>{article.title}</h1>
      <div>{article.content}</div>
      <div>
        {article.categories?.map((category) => category.name).join(", ") ||
          null}
      </div>
      <ArticleDate
        updatedAt={article.updated_at}
        createdAt={article.created_at}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await axios.get(POSTS_SORT_BY_CREATED_AT_DESC);
  const paths = res.data
    .filter((article: ArticleType) => article.publico)
    .map((article: ArticleType) => ({
      params: { slug: slugify(article.title) },
    }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(POSTS_SORT_BY_CREATED_AT_DESC);
  const [post] = res.data
    .filter((article: ArticleType) => article.publico)
    .map((article: ArticleType) => ({
      ...article,
      slug: slugify(article.title),
    }))
    .filter((article: ArticleType) => article.slug === params.slug);
  console.log(post);
  return { props: { article: post, slug: params.slug } };
}
