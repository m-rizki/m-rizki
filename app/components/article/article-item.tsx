import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import type { Article } from "~/utils/articles";
import { formatDateString } from "~/utils/field";

interface ArticleItemProps {
  article: Article;
}

export default function ArticleItem({ article }: ArticleItemProps) {
  return (
    <article className="group relative flex flex-col items-start">
      <h2 className="text-base-content text-base font-semibold tracking-tight">
        <div className="bg-base-300 absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link to={`/articles/${article.slug}`}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{article.title}</span>
        </Link>
      </h2>
      <time
        className="text-base-content/50 relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm"
        dateTime={article.date}
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="bg-base-content/40 h-4 w-0.5 rounded-full"></span>
        </span>
        {formatDateString(article.date)}
      </time>
      <p className="text-base-content/50 relative z-10 mt-2 text-sm">
        {article.description}
      </p>
      <div
        aria-hidden="true"
        className="text-accent relative z-10 mt-4 flex items-center justify-start gap-2 text-sm font-medium"
      >
        <span>Read article</span>
        <ChevronRight size={15} />
      </div>
    </article>
  );
}
