import { articles } from "~/utils/articles";
import ArticleItem from "../article/article-item";
import { Link } from "react-router";

export default function HomeArticle() {
  return (
    <section className="space-y-16">
      {articles.map((article) => (
        <ArticleItem key={article.slug} article={article} />
      ))}

      <div className="text-center">
        <Link to={"/articles"} className="btn btn-sm btn-outline btn-accent">
          More articles
        </Link>
      </div>
    </section>
  );
}
