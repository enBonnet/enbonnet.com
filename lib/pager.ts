import { ArticleType } from "@/types/ArticleType";

type SortPagesType = { [key: string]: Array<ArticleType> };

export default function handlePages(posts: Array<ArticleType>) {
  const POST_PER_PAGES = 6;
  const PAGES_COUNT = Math.ceil(posts.length / POST_PER_PAGES);

  const listOfPages = new Array(PAGES_COUNT)
    .fill([])
    .map(() => posts.splice(0, POST_PER_PAGES));

  const sortPages: SortPagesType = listOfPages.reduce(
    (acc, cur, key) => ({ ...acc, [key + 1]: cur }),
    {}
  );

  const indexOfPages = Object.keys(sortPages);

  return {
    sortPages,
    indexOfPages,
  };
}
