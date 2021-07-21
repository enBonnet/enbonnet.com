import Head from "./Head";
import ArticleDate from "./ArticleDate";
import { ArticleProps } from "@/types/ArticleType";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Highlight from "./Highlight";

const Article = ({ article }: ArticleProps) => {
  return (
    <>
      <Head subtitle={article.title} />
      <Navbar />
      <article className="container">
        <Highlight title={article.title} />
        <div className="content">{article.content}</div>
        <ArticleDate
          updatedAt={article.updated_at}
          createdAt={article.created_at}
        />
        <div className="categories">
          <div>Categorias</div>
          <div>
            {article.categories?.map((category) => category.name).join(", ") ||
              null}
          </div>
        </div>
      </article>
      <Footer />
      <style jsx>{`
        .container {
          margin-top: 40px;
        }
        .content {
          margin: 40px 0;
        }
        .categories {
          margin-bottom: 32px;
        }
      `}</style>
    </>
  );
};

export default Article;
