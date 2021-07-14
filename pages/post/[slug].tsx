import axios from "axios";
import { POSTS_SORT_BY_CREATED_AT_DESC } from "@/lib/api";
import { getPathsWithSlug, getPostBySlug } from "@/lib/articles";
import Article from "@/components/Article";
import { ArrayOfPosts, ArticleProps } from "@/types/ArticleType";

export default function PostPage({ article }: ArticleProps) {
  return <Article article={article} />;
}

export async function getStaticPaths() {
  const res: ArrayOfPosts = await axios.get(POSTS_SORT_BY_CREATED_AT_DESC);
  const paths = getPathsWithSlug(res.data);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res: ArrayOfPosts = await axios.get(POSTS_SORT_BY_CREATED_AT_DESC);
  const post = getPostBySlug(res.data, params.slug);
  return { props: { article: post } };
}
