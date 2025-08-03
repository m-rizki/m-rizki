import ArticleItem from "~/components/article/article-item";

import type { Route } from "./+types/articles";
import { articles } from "~/data/articles";
import { getInstance } from "~/middleware/i18next";
import { data } from "react-router";
import { useTranslation } from "react-i18next";
export function meta({ data }: Route.MetaArgs) {
  return [
    { title: data?.title },
    {
      name: "description",
      content: data?.description,
    },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  let i18n = getInstance(context);

  return data({
    title: i18n.t("articles.title"),
    description: i18n.t("articles.description"),
  });
}

export default function ArticlesPage() {
  let { t } = useTranslation();
  return (
    <div className="mt-36 space-y-20">
      <section className="max-w-2xl">
        <h1 className="text-base-content text-4xl font-bold">
          {t("articles.hero.title")}
        </h1>
        <p className="text-base-content/50 mt-8">
          {t("articles.hero.content")}
        </p>
      </section>
      <section className="max-w-xl space-y-16">
        {articles.map((article) => (
          <ArticleItem key={article.slug} article={article} />
        ))}
      </section>
    </div>
  );
}
