import fs from "node:fs";
import { bundleMDX } from "mdx-bundler";
import rehypeHighlight from "rehype-highlight";

export type Article = {
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
};

export async function bundleArticle(slug: string, locale: string = "en") {
  const pathBase = `${process.cwd()}/app/contents/articles/${slug}`;

  let filePath = `${pathBase}/${locale}.mdx`;

  if (!fs.existsSync(filePath)) {
    filePath = `${pathBase}/en.mdx`;
    console.warn(
      `Article ${slug} not found in ${locale}, using English version`,
    );
  }

  const bundle = await bundleMDX({
    file: `${filePath}`,
    cwd: pathBase,

    esbuildOptions: (options) => {
      // Configuration to allow image loading
      // https://github.com/kentcdodds/mdx-bundler#image-bundling
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
        ".jpg": "dataurl",
        ".svg": "dataurl",
        ".gif": "dataurl",
      };
      return options;
    },
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeHighlight,
      ];

      return options;
    },
  });

  return bundle;
}

export function getAllArticlesSlug() {
  return fs.readdirSync(`${process.cwd()}/app/contents/articles`);
}

export async function getFeaturedArticles(limit: number = 5, locale = "en") {
  const dirs = getAllArticlesSlug();

  const latestDirs = dirs.sort((a, b) => b.localeCompare(a)).slice(0, limit);

  const articles: Article[] = await Promise.all(
    latestDirs.map(async (slug) => {
      const { frontmatter } = await bundleArticle(slug, locale);
      return { slug, ...frontmatter } as Article;
    }),
  );

  return articles;
}

export async function listAllArticles({
  limit,
  locale = "en",
}: {
  limit?: number;
  locale?: string;
} = {}): Promise<Article[]> {
  const dirs = getAllArticlesSlug();

  const articles: Article[] = await Promise.all(
    dirs.map(async (slug) => {
      const { frontmatter } = await bundleArticle(slug, locale);
      return { slug, ...frontmatter } as Article;
    }),
  );

  articles.sort((a, b) => (a.date < b.date ? 1 : -1));

  return typeof limit === "number" ? articles.slice(0, limit) : articles;
}
