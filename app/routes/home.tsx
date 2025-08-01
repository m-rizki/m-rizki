import { data } from "react-router";
import HomeArticle from "~/components/home/home-article";
import HomeHero from "~/components/home/home-hero";
import HomeProjects from "~/components/home/home-projects";
import HomeResume from "~/components/home/home-resume";
import { getInstance } from "~/middleware/i18next";

import type { Route } from "./+types/home";

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: data?.title },
    { name: "description", content: data?.description },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  let i18n = getInstance(context);

  return data({
    title: i18n.t("home.title"),
    description: i18n.t("home.description"),
  });
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeProjects />
      <div className="mt-24 mb-10 md:mt-28">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <HomeArticle />
          <HomeResume />
        </div>
      </div>
    </>
  );
}
