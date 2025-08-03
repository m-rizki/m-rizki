import Projects from "~/components/projects/projects";
import TechStack from "~/components/projects/tech-stacks";
import type { Route } from "./+types/projects";
import { getInstance } from "~/middleware/i18next";
import { data } from "react-router";
import { Trans, useTranslation } from "react-i18next";

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: data?.title },
    {
      name: "description",
      content: data?.description,
    },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  let i18n = getInstance(context);

  return data({
    title: i18n.t("projects.hero.title"),
    description: i18n.t("projects.description"),
  });
}

export default function ProjectsPage() {
  let { t } = useTranslation();

  return (
    <div className="mt-36 space-y-12">
      <section className="max-w-2xl">
        <h1 className="text-base-content text-4xl font-bold">
          {t("projects.hero.title")}
        </h1>
        <p className="text-base-content/70 mt-8">
          <Trans i18nKey="projects.hero.content" components={{ em: <em /> }} />
        </p>
      </section>
      <section className="space-y-8">
        <h2 className="text-base-content text-2xl font-bold">
          {t("projects.techstack.title")}
        </h2>
        <TechStack />
      </section>
      <section className="space-y-8">
        <h2 className="text-base-content text-2xl font-bold">
          {t("projects.projects.title")}
        </h2>
        <Projects />
      </section>
    </div>
  );
}
