import FaGithub from "~/components/icons/fa-github";
import type { Route } from "./+types/about";
import FaLinkedin from "~/components/icons/fa-linkedin";
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
    title: i18n.t("about.title"),
    description: i18n.t("about.description"),
  });
}

export default function AboutPage() {
  let { t } = useTranslation();

  return (
    <div className="mt-36">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="avatar">
            <div className="border-base-content/70 w-72 rotate-3 rounded-xl border-3">
              <img src="/profile-adj.jpg" />
            </div>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-base-content text-4xl font-bold">
            {t("about.greetings")}
          </h1>
          <div className="text-base-content/70 mt-6 space-y-7">
            <p>
              <Trans
                i18nKey="about.content.par_1"
                components={{ em: <em /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.content.par_2"
                components={{ em: <em /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.content.par_3"
                components={{ em: <em /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.content.par_4"
                components={{ em: <em /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.content.par_5"
                components={{ em: <em /> }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.content.par_6"
                components={{ em: <em /> }}
              />
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul className="flex flex-col gap-6">
            <li className="text-base-content/70 hover:text-accent group cursor-pointer">
              <a
                target="_blank"
                href="https://github.com/m-rizki/"
                className="flex items-center gap-4"
              >
                <FaGithub
                  widthClass="w-6"
                  additionalClass="group-hover:fill-accent"
                />
                <span>{t("about.socials.github")}</span>
              </a>
            </li>
            <li className="text-base-content/70 hover:text-accent group cursor-pointer">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rizki1998/"
                className="flex items-center gap-4"
              >
                <FaLinkedin
                  widthClass="w-6"
                  additionalClass="group-hover:fill-accent"
                />
                <span>{t("about.socials.linkedin")}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
