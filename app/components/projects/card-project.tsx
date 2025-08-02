import { Link } from "lucide-react";

import FaGithub from "../icons/fa-github";

import type { Project } from "~/data/projects";
import { useTranslation } from "react-i18next";

interface CardProjectProps {
  project: Project;
}

export default function CardProject({ project }: CardProjectProps) {
  const { i18n } = useTranslation();
  let currentLanguage = i18n.language;

  return (
    <div className="bg-base-100 hover:bg-base-300 border-base-content/20 h-90 w-full max-w-xs rounded-3xl border p-8 transition duration-200 ease-in-out hover:-translate-y-1">
      <div className="bg-base-100 ring-base-content/10 dark:border-base-content/1 dark:bg-base-content/5 flex h-9 w-9 items-center justify-center rounded-full shadow-md ring-1 dark:border">
        {project.logo}
      </div>
      <h2 className="font-semibol mt-6 text-base">{project.name}</h2>
      <p className="text-base-content/60 mt-4 text-xs">
        {currentLanguage === "id"
          ? project.description.id
          : project.description.en}
      </p>
      <div className="mt-8 flex items-center gap-4">
        {project.link.href && (
          <a
            href={project.link.href}
            title={project.link.title}
            target="_blank"
            className="hover:text-accent"
          >
            <Link size={20} />
          </a>
        )}

        {project.repoLink.href && (
          <a
            href={project.repoLink.href}
            title={project.repoLink.title}
            target="_blank"
            className=""
          >
            <FaGithub
              widthClass="w-[20px]"
              additionalClass="hover:fill-accent"
            />
          </a>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-xs">
        {project.techStack.map((stack) => (
          <p key={stack.name} className={stack.color}>
            {stack.name}
          </p>
        ))}
      </div>
    </div>
  );
}
