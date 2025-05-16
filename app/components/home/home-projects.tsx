import { projects } from "~/utils/projects";
import CardProject from "../projects/card-project";

export default function HomeProjects() {
  const projectsToShow = projects.slice(0, 3);
  const hasThirdProject = projectsToShow.length >= 3;

  return (
    <div className="py-2">
      <p className="text-3xl font-bold">Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
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
        <button className="btn btn-sm btn-ghost btn-primary border-base-content/20 hover:border-none">
          More
        </button>
      </div>
    </div>
  );
}
