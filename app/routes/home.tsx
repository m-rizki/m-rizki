import HomeHero from "~/components/home/home-hero";
import type { Route } from "./+types/home";
import HomeProjects from "~/components/home/home-projects";
import HomeResume from "~/components/home/home-resume";
import HomeArticle from "~/components/home/home-article";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Muhamad Rizki - Software engineer" },
    {
      name: "description",
      content: "Software engineer",
    },
  ];
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
