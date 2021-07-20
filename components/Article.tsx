import Head from "./Head";
import ArticleDate from "./ArticleDate";
import { ArticleProps } from "@/types/ArticleType";
import Navbar from "./Navbar";

const Article = ({ article }: ArticleProps) => {
  return (
    <>
      <Head subtitle={article.title} />
      <Navbar />
      <div className="container">
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
    </>
  );
};

export default Article;
