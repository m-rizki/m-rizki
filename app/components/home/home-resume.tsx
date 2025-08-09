import { ArrowDown, BriefcaseBusiness } from "lucide-react";
import { useTranslation } from "react-i18next";
import { resumeList } from "~/data/resume";

function getDateRangeText(
  start: { en: string; id: string },
  end: { en: string; id: string },
  lang: string,
): string {
  const s = lang === "id" ? start.id : start.en;
  const e = lang === "id" ? end.id : end.en;

  if (!s && !e) return "";
  if (!s) return e;
  if (!e) return s;

  return `${s} - ${e}`;
}

export default function HomeResume() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const getURLCV = (lng: string) => {
    if (lng === "id") return "/documents/resume/id_cv_m_rizki_9_aug_2025.pdf";

    return "/documents/resume/en_cv_m_rizki_9_aug_2025.pdf";
  };

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
                  {currentLanguage === "id" ? resume.title.id : resume.title.en}
                </p>
                <p className="text-base-content/50 mt-1 text-xs whitespace-nowrap">
                  {getDateRangeText(resume.start, resume.end, currentLanguage)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        target="_blank"
        href={getURLCV(currentLanguage)}
        className="btn btn-sm btn-ghost btn-accent btn-block border-base-content/20 hover:border-none"
      >
        Download Resume
        <ArrowDown size={16} />
      </a>
    </div>
  );
}
