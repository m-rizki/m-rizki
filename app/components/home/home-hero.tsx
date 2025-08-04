import { ArrowDown } from "lucide-react";
import FaGithub from "../icons/fa-github";
import FaLinkedin from "../icons/fa-linkedin";
import { Trans, useTranslation } from "react-i18next";

export default function HomeHero() {
  let { t } = useTranslation();

  return (
    <div className="hero relative min-h-screen">
      <div className="hero-content justify-self-start p-0">
        <div className="max-w-2xl">
          <div className="avatar pb-2">
            <div className="w-24 rounded-full">
              <img src="/profile-adj.jpg" alt="pp" />
            </div>
          </div>
          <h1 className="text-5xl font-bold">{t("home.hero.title")}</h1>
          <p className="text-base-content/70 py-6">
            <Trans
              i18nKey="home.hero.description"
              components={{ em: <em /> }}
            />
          </p>
          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://github.com/m-rizki/"
              className="btn btn-ghost btn-circle"
            >
              <FaGithub widthClass="w-6" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rizki1998/"
              className="btn btn-ghost btn-circle"
            >
              <FaLinkedin widthClass="w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-20 left-0 flex justify-center">
        <a
          href="#home-project"
          className="btn btn-outline btn-accent btn-circle animate-bounce"
        >
          <ArrowDown />
        </a>
      </div>
    </div>
  );
}
