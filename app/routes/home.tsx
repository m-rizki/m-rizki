import Hero from "~/components/home/hero";
import type { Route } from "./+types/home";
import HomeProjects from "~/components/home/home-projects";
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
      <Hero />
      <HomeProjects />
    </>
  );
}
