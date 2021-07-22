import dayjs from "dayjs";
import { ArticleDateType } from "@/types/ArticleType";

import "dayjs/locale/es-us";

dayjs.locale("es-us");

const ArticleDate = ({ updatedAt, createdAt }: ArticleDateType) => {
  const dateFormat = "DD/MM/YYYY [a las] HH:mm";
  const lastDate =
    createdAt !== updatedAt
      ? `Actualizado ${dayjs(updatedAt).format(dateFormat)}`
      : `Publicado ${dayjs(createdAt).format(dateFormat)}`;
  return (
    <div className="date">
      {lastDate}
      <style jsx>{`
        .date {
          margin-bottom: 32px;
        }
      `}</style>
    </div>
  );
};

export default ArticleDate;
