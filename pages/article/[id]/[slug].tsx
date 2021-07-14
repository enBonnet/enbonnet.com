import "dayjs/locale/es-us";
import axios from "axios";
import { ArrayOfPosts, ArticleProps } from "@/types/ArticleType";
import { POSTS_SORT_BY_CREATED_AT_DESC, ALL_POSTS } from "@/lib/api";
import { getPathsWithSlugAndId } from "@/lib/articles";
import Article from "@/components/Article";

export default function ArticlePage({ article }: ArticleProps) {
  return <Article article={article} />;
}

export async function getStaticPaths() {
  const res: ArrayOfPosts = await axios.get(POSTS_SORT_BY_CREATED_AT_DESC);
  const paths = getPathsWithSlugAndId(res.data);
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res: ArrayOfPosts = await axios.get(`${ALL_POSTS}/${params.id}`);
  return { props: { article: res.data } };
}
