import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

const articleItemRoutes = await flatRoutes({
  rootDirectory: "./routes/article",
});

export default [
  // // API
  route("api/locales/:lng/:ns", "./routes/apis/locales.ts"),

  // PAGES
  layout("./routes/layouts/site-layout.tsx", [
    index("routes/home.tsx"),
    route("/about", "./routes/about.tsx"),
    route("/projects", "./routes/projects.tsx"),
    route("/articles", "./routes/articles.tsx"),
    route("article", "./routes/layouts/article-layout.tsx", [
      ...articleItemRoutes,
    ]),
  ]),

] satisfies RouteConfig;
