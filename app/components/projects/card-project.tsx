import { Link } from "lucide-react";
import type { Project } from "~/utils/projects";
import FaGithub from "../icons/fa-github";

interface CardProjectProps {
  project: Project;
}

export default function CardProject({ project }: CardProjectProps) {
  return (
    <div className="bg-base-100 hover:bg-base-300 border-base-content/20 h-80 w-full max-w-xs rounded-3xl border p-8 transition duration-200 ease-in-out hover:-translate-y-1">
      <div className="bg-base-100 ring-base-content/10 dark:border-base-content/1 dark:bg-base-content/5 flex h-12 w-12 items-center justify-center rounded-full shadow-md ring-1 dark:border">
        {project.logo}
      </div>
      <h2 className="font-semibol mt-6 text-base">{project.name}</h2>
      <p className="text-base-content/60 mt-4 text-xs">{project.description}</p>
      <div className="mt-8 flex items-center gap-2">
        {project.link.href && (
          <a
            href={project.link.href}
            title={project.link.title}
            target="_blank"
            className="btn btn-circle btn-ghost btn-link"
          >
            <Link size={20} />
          </a>
        )}

        {project.repoLink.href && (
          <a
            href={project.repoLink.href}
            title={project.repoLink.title}
            target="_blank"
            className="btn btn-circle btn-ghost"
          >
            <FaGithub widthClass="w-[20px]" />
          </a>
        )}
      </div>
    </div>
  );
}
