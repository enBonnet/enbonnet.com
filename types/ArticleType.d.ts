import { AxiosResponse } from "axios";
import { BaseType } from "./BaseType";
interface CategoryType extends BaseType {
  name: string;
}

interface ImageType extends BaseType {
  name: string;
  hash: string;
  sha256: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  provider: string;
  public_id: string;
}

export type ArticleDateType = {
  updatedAt: string;
  createdAt: string;
};

export type ArticleProps = {
  article: ArticleType;
};

export interface ArticleType extends BaseType {
  title: string;
  content: string;
  description: string;
  publico: boolean;
  image: ImageType;
  categories: Array<CategoryType>;
  slug?: string;
}

export interface ArrayOfPosts extends AxiosResponse {
  data: Array<ArticleType>;
}