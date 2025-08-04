import { Link } from "react-router";
import { projects } from "~/data/projects";

import CardProject from "../projects/card-project";
import { useTranslation } from "react-i18next";

export default function HomeProjects() {
  let { t } = useTranslation();
  const projectsToShow = projects.slice(0, 3);
  const hasThirdProject = projectsToShow.length >= 3;

  return (
    <section id="home-project" className="py-16">
      <p className="text-3xl font-bold">{t("home.projects.title")}</p>
      <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Render first two projects normally */}
        {projectsToShow.slice(0, 2).map((project) => (
          <div key={project.id} className="flex justify-center">
            <CardProject project={project} />
          </div>
        ))}

        {/* Conditionally render third project with special positioning */}
        {hasThirdProject && (
          <>
            {/* Spacer for sm */}
            <div className="hidden sm:block lg:hidden" />

            <div className="flex justify-center sm:col-start-1 sm:col-end-3 lg:col-auto">
              <CardProject project={projectsToShow[2]} />
            </div>
          </>
        )}
      </div>
      <div className="text-center">
        <Link to={"/projects"} className="btn btn-sm btn-outline btn-accent">
          {t("home.projects.more")}
        </Link>
      </div>
    </section>
  );
}
