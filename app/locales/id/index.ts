import type { Resource } from "i18next";
import home from "./home";
import navigation from "./navigation";
import about from "./about";
import projects from "./projects";
import articles from "./articles";

export default {
  translation: { home, navigation, about, projects, articles },
} satisfies Resource;
