import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
  layout("./routes/layouts/site-layout.tsx", [
    index("routes/home.tsx"),
    route("/about", "./routes/about.tsx"),
    route("/projects", "./routes/projects.tsx"),
    route("/articles", "./routes/articles.tsx"),
    route("article", "./routes/layouts/article-layout.tsx", [
      ...(await flatRoutes({ rootDirectory: "./routes/article" })),
    ]),
  ]),

  // issue (temporary solution) : https://github.com/remix-run/react-router/issues/13516
  route(
    "/.well-known/appspecific/com.chrome.devtools.json",
    "./routes/temporary/issue1.tsx",
  ),
] satisfies RouteConfig;
