import { FileText, Folder, Home, Info, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function MobileNavigation() {
  let { t } = useTranslation();

  return (
    <div className="md:hidden">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          className="btn bg-base-300 border-base-content/10 shadow-base-content/5 rounded-full font-bold shadow-sm"
        >
          <Menu />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box shadow-base-content/5 bg-base-300 mt-2 w-40 shadow-sm"
        >
          <li>
            <Link to={"/"}>
              <Home size={20} />
              {t("navigation.home")}
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <Info size={20} /> {t("navigation.about")}
            </Link>
          </li>
          <li>
            <Link to={"/projects"}>
              <Folder size={20} /> {t("navigation.projects")}
            </Link>
          </li>
          <li>
            <Link to={"/articles"}>
              <FileText size={20} /> {t("navigation.articles")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
