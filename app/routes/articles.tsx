import { articles } from "~/utils/articles";
import ArticleItem from "~/components/article/article-item";
import type { Route } from "./+types/articles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Muhamad Rizki - Articles" },
    {
      name: "description",
      content:
        "A collection of my long-form thoughts on programming — ideas, insights, and experiments — all written over time",
    },
  ];
}

export default function ArticlesPage() {
  return (
    <div className="mt-36 space-y-20">
      <section className="max-w-2xl">
        <h1 className="text-base-content text-4xl font-bold">Articles</h1>
        <p className="text-base-content/50 mt-8">
          A collection of my long-form thoughts on programming — ideas,
          insights, and experiments — all written over time and arranged in
          descending date order, so the newest posts are always up top.
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
