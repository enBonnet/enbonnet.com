import { ArticleType } from "@/types/ArticleType";
import slugify from "@/lib/slugify";

type PathsWithSlugs = {
  params: {
    slug?: string;
    id?: string;
  };
};

export const filterPublicArticles = (
  articles: Array<ArticleType>
): Array<ArticleType> =>
  articles.filter((article: ArticleType) => article.publico);

export const getPathsWithSlug = (
  articles: Array<ArticleType>
): Array<PathsWithSlugs> => {
  return filterPublicArticles(articles).map((article: ArticleType) => ({
    params: { slug: slugify(article.title) },
  }));
};

export const getPathsWithSlugAndId = (
  articles: Array<ArticleType>
): Array<PathsWithSlugs> => {
  return filterPublicArticles(articles).map((article: ArticleType) => ({
    params: { id: `${article.id}`, slug: slugify(article.title) },
  }));
};

export const getPostBySlug = (
  articles: Array<ArticleType>,
  slug: string
): ArticleType => {
  const filterArticle = filterPublicArticles(articles)
    .map((article: ArticleType) => ({
      ...article,
      slug: slugify(article.title),
    }))
    .filter((article: ArticleType) => article.slug === slug);

  return filterArticle[0];
};
