import ArticleDate from "./ArticleDate";
import { ArticleProps } from "@/types/ArticleType";

const Article = ({ article }: ArticleProps) => {
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
};

export default Article;
