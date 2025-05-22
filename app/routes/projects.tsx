import Projects from "~/components/projects/projects";
import TechStack from "~/components/projects/tech-stacks";
import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Muhamad Rizki - Projects" },
    {
      name: "description",
      content:
        "A showcase of projects and technologies I use as a software engineer, reflecting my approach to clean, simple, and robust code.",
    },
  ];
}

export default function ProjectsPage() {
  return (
    <div className="mt-36 space-y-12">
      <section className="max-w-2xl">
        <h1 className="text-base-content text-4xl font-bold">
          Tech Stack & Projects
        </h1>
        <p className="text-base-content/70 mt-8">
          Throughout my journey as a software engineer, I've worked with various
          technologies and built several projects that reflect my commitment to
          clean, simple, and robust code. Below you'll find the technologies I
          work with regularly and a showcase of projects I've developed, each
          demonstrating my approach to creating software. For some projects,
          I've included links to their GitHub repositories and live websites
          where available.
        </p>
      </section>
      <section className="space-y-8">
        <h2 className="text-base-content text-2xl font-bold">Tech Stack</h2>
        <TechStack />
      </section>
      <section className="space-y-8">
        <h2 className="text-base-content text-2xl font-bold">Projects</h2>
        <Projects />
      </section>
    </div>
  );
}
