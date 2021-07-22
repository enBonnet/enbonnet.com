import Head from "./Head";
import ArticleDate from "./ArticleDate";
import { ArticleProps } from "@/types/ArticleType";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Highlight from "./Highlight";
import Link from "@/components/Link";

const Article = ({ article }: ArticleProps) => {
  const categories = article.categories
    ?.map((category) => category.name)
    .join(", ");

  return (
    <>
      <Head subtitle={article.title} />
      <Navbar />
      <div className="row">
        <article className="container">
          <Highlight title={article.title} />
          <div className="content">{article.content}</div>
          <ArticleDate
            updatedAt={article.updated_at}
            createdAt={article.created_at}
          />
          {article.categories.length > 0 && (
            <div className="categories">
              {article.categories.map(({ name }) => (
                <div key={name}>
                  <Link url={`/category/${name}`} label={name} />
                </div>
              ))}
            </div>
          )}
        </article>
      </div>
      <Footer />
      <style jsx>{`
        .container {
          margin-top: 40px;
        }
        .content {
          margin: 40px 0;
        }
        .categories {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
        }
      `}</style>
    </>
  );
};

export default Article;
