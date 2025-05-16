import { ArrowDown, BriefcaseBusiness } from "lucide-react";
import { resumeList } from "~/utils/resume";

export default function HomeResume() {
  return (
    <div className="rounded-2xl border border-base-content/20 p-6">
      <h2 className="flex font-semibold">
        <BriefcaseBusiness />
        <span className="ml-3">Resume</span>
      </h2>
      <div className="my-6 space-y-6">
        {resumeList.map((resume) => (
          <div className="flex justify-between">
            <div className="flex items-center gap-x-4">
              <div>{resume.logo}</div>
              <div>
                <p>{resume.company}</p>
                <p className="text-base-content/50 text-sm">{resume.title}</p>
              </div>
            </div>
            <div className="text-sm text-base-content/50 whitespace-nowrap">
              {resume.start && <span>{resume.start} - </span>}
              {resume.end}
            </div>
          </div>
        ))}
      </div>

      <a className="btn btn-sm btn-ghost btn-primary btn-block border-base-content/20 hover:border-none">
        Download Resume
        <ArrowDown size={16} />
      </a>
    </div>
  );
}
