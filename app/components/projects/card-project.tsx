import { Link } from "lucide-react";
import type { Project } from "~/utils/projects";
import FaGithub from "../icons/fa-github";

interface CardProjectProps {
  project: Project;
}

export default function CardProject({ project }: CardProjectProps) {
  return (
    <div className="h-80 w-full max-w-xs bg-base-200/60 rounded-3xl p-8  transition duration-200 ease-in-out hover:-translate-y-1 hover:bg-base-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-full shadow-md bg-base-100 ring-1 ring-base-content/10 dark:border dark:border-base-content/10 dark:bg-base-content/5">
        {project.logo}
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {project.name}
      </h2>
      <p className="mt-4 text-xs text-base-content/60">{project.description}</p>
      <div className="mt-8 flex gap-2 items-center">
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
