import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {
  let { t } = useTranslation();

  return (
    <footer className="footer lg:footer-horizontal border-base-content/10 text-base-content mt-24 items-center border-t px-8 py-12 sm:px-16 lg:px-32 xl:px-64">
      <aside className="grid-flow-col items-center">
        <nav className="grid grid-flow-col gap-4">
          <Link to={"/"} className="link link-hover">
            {t("navigation.home")}
          </Link>
          <Link to={"/about"} className="link link-hover">
            {t("navigation.about")}
          </Link>
          <Link to={"/projects"} className="link link-hover">
            {t("navigation.projects")}
          </Link>
          <Link to={"/articles"} className="link link-hover">
            {t("navigation.articles")}
          </Link>
        </nav>
      </aside>
      <nav className="grid-flow-col gap-4 lg:justify-self-end">
        <p className="text-base-content/60">
          © {2025} Muhamad Rizki -{" "}
          <a className="link link-hover" href="/web_client_licenses.txt">
            GNU General Public License v3.0
          </a>
        </p>
      </nav>
    </footer>
  );
}
