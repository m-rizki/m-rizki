import { ArrowDown, BriefcaseBusiness } from "lucide-react";
import { resumeList } from "~/utils/resume";

export default function HomeResume() {
  return (
    <div className="border-base-content/20 rounded-2xl border p-6">
      <h2 className="flex font-semibold">
        <BriefcaseBusiness />
        <span className="ml-3">Resume</span>
      </h2>
      <div className="my-6 space-y-6">
        {resumeList.map((resume) => (
          <div key={resume.id} className="flex items-start justify-between">
            <div className="flex items-start gap-x-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                {resume.logo && (
                  <div className="max-h-full max-w-full object-contain">
                    {resume.logo}
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm leading-tight font-semibold">
                  {resume.company}
                </p>
                <p className="text-base-content/70 mt-0.5 text-sm leading-tight">
                  {resume.title}
                </p>
                <p className="text-base-content/50 mt-1 text-xs whitespace-nowrap">
                  {resume.start && <span>{resume.start} - </span>}
                  {resume.end}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        target="_blank"
        href="/documents/resume/en_cv_m_rizki_9_aug_2025.pdf"
        className="btn btn-sm btn-ghost btn-accent btn-block border-base-content/20 hover:border-none"
      >
        Download Resume
        <ArrowDown size={16} />
      </a>
    </div>
  );
}
