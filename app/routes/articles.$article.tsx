import { getMDXComponent } from "mdx-bundler/client";
import React from "react";
import { useTranslation } from "react-i18next";
import { data } from "react-router";
import { getInstance } from "~/middleware/i18next";
import { formatDateString } from "~/utils/field";

import { bundleArticle } from "./apis/articles";

import type { Route } from "./+types/articles.$article";

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: data?.title },
    {
      name: "description",
      content: data?.title,
    },
  ];
}

export async function loader({ params, context }: Route.LoaderArgs) {
  let i18n = getInstance(context);

  const articleBundle = await bundleArticle(params.slug, i18n.language);

  return data({
    articleBundle,
    title: `${articleBundle?.frontmatter?.title}`,
  });
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/github-dark.min.css",
    },
  ];
}

export default function Article({ loaderData }: Route.ComponentProps) {
  const { articleBundle } = loaderData;
  const { i18n } = useTranslation();

  const ArticleComponent = React.useMemo(
    () => getMDXComponent(articleBundle.code),
    [articleBundle.code],
  );

  return (
    <div className="mx-auto mt-48 max-w-3xl space-y-4">
      <time
        className="text-base-content/70 relative z-10 order-first mb-3 flex items-center py-4 pl-3.5 text-sm"
        dateTime={articleBundle.frontmatter?.date}
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="bg-base-content/40 h-4 w-0.5 rounded-full"></span>
        </span>
        {formatDateString(articleBundle.frontmatter?.date, i18n.language)}
      </time>

      <ArticleComponent
        components={{
          // Headings
          h1: (props) => (
            <h1
              className="text-base-content mb-8 text-4xl font-bold"
              {...props}
            />
          ),
          h2: (props: any) => (
            <h2
              className="text-base-content mt-8 mb-4 text-3xl font-semibold"
              {...props}
            />
          ),
          h3: (props: any) => (
            <h2
              className="text-base-content mt-8 mb-4 text-2xl font-semibold"
              {...props}
            />
          ),
          h4: (props: any) => (
            <h3
              className="mt-6 mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100"
              {...props}
            />
          ),

          // Paragraphs and text
          p: (props: any) => (
            <p
              className="text-base-content/70 mb-4 leading-relaxed"
              {...props}
            />
          ),

          // Lists
          ul: (props: any) => (
            <ul
              className="text-base-content/70 mb-4 ml-6 list-disc"
              {...props}
            />
          ),
          ol: (props: any) => (
            <ol
              className="text-base-content/70 mb-4 ml-6 list-decimal"
              {...props}
            />
          ),
          li: (props: any) => <li className="mb-1" {...props} />,

          // Code
          code: (props: any) => (
            <code
              className="bg-base-200 text-secondary rounded px-1.5 py-0.5 font-mono text-sm"
              {...props}
            />
          ),
          pre: (props: any) => (
            <pre
              className="bg-base-300 border-base-content/50 mb-4 overflow-x-auto rounded-lg border"
              {...props}
            />
          ),

          // Links
          a: (props: any) => <a className="link link-accent" {...props} />,

          // Horizontal rule
          hr: (props: any) => (
            <hr className="border-base-content/20 my-8 border" {...props} />
          ),
        }}
      />
    </div>
  );
}
