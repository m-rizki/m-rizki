import { projects } from "~/data/projects";

import CardProject from "./card-project";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className="flex justify-center">
          <CardProject project={project} />
        </div>
      ))}
    </div>
  );
}
