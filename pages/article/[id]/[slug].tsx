import { ArticleProps } from "@/types/ArticleType";
import {
  getPathsWithSlugAndId,
  getPublicArticles,
  getArticleById,
} from "@/lib/articles";
import Article from "@/components/Article";

export default function ArticlePage({ article }: ArticleProps) {
  return <Article article={article} />;
}

export async function getStaticPaths() {
  const articles = await getPublicArticles();
  const paths = getPathsWithSlugAndId(articles);
  return { paths, fallback: false };
}

type PathParams = {
  params: {
    slug: string;
    id: string;
  };
};

export async function getStaticProps({ params }: PathParams) {
  const article = await getArticleById(params.id);
  return { props: { article } };
}
