import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ArticleProps } from "@/types/ArticleType";
import Link from "@/components/Link";
import Head from "./Head";
import ArticleDate from "./ArticleDate";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Highlight from "./Highlight";

const components = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code({ inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={nord}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props} />
    );
  },
};

const Article = ({ article }: ArticleProps) => {
  return (
    <>
      <Head subtitle={article.title} />
      <Navbar />
      <div className="row">
        <article className="col">
          <div className="container">
            <Highlight title={article.title} />
            <div className="content post">
              <ReactMarkdown components={components}>
                {article.content}
              </ReactMarkdown>
            </div>
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
          </div>
        </article>
      </div>
      <Footer />
      <style jsx>{`
        .col {
          margin-top: 40px;
        }
        .content {
          margin: 30px 0;
          font-size: var(--actions-text-size);
          line-height: 30px;
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
