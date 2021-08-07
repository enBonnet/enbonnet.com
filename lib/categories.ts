import axios, { AxiosResponse } from "axios";
import { ArticleType } from "@/types/ArticleType";
import { CATEGORIES } from "./api";

export interface CategoriesType {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  articles: Array<ArticleType>;
}

interface CategoriesRes extends AxiosResponse {
  data: Array<CategoriesType>;
}

export const getCategories = async () => {
  try {
    const res: CategoriesRes = await axios.get(CATEGORIES);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
