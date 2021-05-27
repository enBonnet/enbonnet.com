import dayjs from "dayjs";
import "dayjs/locale/es-us";
import axios from "axios";
import slugify from "@/lib/slugify";
import { ArticleType } from "@/types/ArticleType";

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
        {article.categories.map((category) => category.name).join(", ")}
      </div>
      <ArticleDate
        updatedAt={article.updated_at}
        createdAt={article.created_at}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await axios.get(
    "https://enbonnet-cms.herokuapp.com/articles?_sort=created_at:desc"
  );
  const paths = res.data
    .filter((article: ArticleType) => article.publico)
    .map((article: ArticleType) => ({
      params: { id: `${article.id}`, slug: slugify(article.title) },
    }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://enbonnet-cms.herokuapp.com/articles/${params.id}`
  );
  return { props: { article: res.data } };
}
