import dayjs from "dayjs";
import { ArticleDateType } from "@/types/ArticleType";

import "dayjs/locale/es-us";

dayjs.locale("es-us");

const ArticleDate = ({ updatedAt, createdAt }: ArticleDateType) => {
  const dateFormat = "DD/MM/YYYY [a las] HH:mm";
  const lastDate =
    createdAt !== updatedAt
      ? `Actualizado el ${dayjs(updatedAt).format(dateFormat)}`
      : `Creado el ${dayjs(createdAt).format(dateFormat)}`;
  return <div>{lastDate}</div>;
};

export default ArticleDate;