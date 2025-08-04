import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // // API
  route("api/locales/:lng/:ns", "./routes/apis/locales.ts"),

  // PAGES
  layout("./routes/layouts/site-layout.tsx", [
    index("routes/home.tsx"),
    route("/about", "./routes/about.tsx"),
    route("/projects", "./routes/projects.tsx"),
    route("/articles", "./routes/articles.tsx"),
    route("/articles/:slug", "./routes/articles.$article.tsx"),
  ]),
] satisfies RouteConfig;
