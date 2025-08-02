import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { articles } from "~/data/articles";

import ArticleItem from "../article/article-item";

export default function HomeArticle() {
  let { t } = useTranslation();

  return (
    <section className="space-y-16">
      {articles.map((article) => (
        <ArticleItem key={article.slug} article={article} />
      ))}

      <div className="text-center">
        <Link to={"/articles"} className="btn btn-sm btn-outline btn-accent">
          {t("home.articles.more")}
        </Link>
      </div>
    </section>
  );
}
