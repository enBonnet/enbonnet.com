import axios from "axios";
import { ArticleType, ArrayOfPosts } from "@/types/ArticleType";
import { POSTS_SORT_BY_CREATED_AT_DESC, ALL_POSTS } from "./api";
import slugify from "./slugify";

type PathsWithSlugs = {
  params: {
    slug?: string;
    id?: string;
  };
};

const getArticlesSortDesc = async () => {
  try {
    const res: ArrayOfPosts = await axios.get(POSTS_SORT_BY_CREATED_AT_DESC);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getArticleById = async (id: string) => {
  try {
    const res: ArrayOfPosts = await axios.get(`${ALL_POSTS}/${id}`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

const filterPublicArticles = (
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
  return filterPublicArticles(articles).map((article: ArticleType) => {
    const slug = slugify(article.title);
    return {
      params: {
        id: `${article.id}`,
        slug,
        url: `/article/${article.id}/${slug}`,
      },
    };
  });
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

export const getPublicArticles = async () => {
  const articles = await getArticlesSortDesc();
  return filterPublicArticles(articles);
};

export const formatPostsPages = (articles: Array<ArticleType>) => {
  return articles.map((post: ArticleType) => {
    const slug = slugify(post.title);
    return {
      ...post,
      objectID: post.id,
      slug,
      url: `/post/${slug}`,
    };
  });
};
