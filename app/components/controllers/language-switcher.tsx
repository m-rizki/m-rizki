import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";

const getLanguageIcon = (lng: string): string => {
  switch (lng) {
    case "id":
      return "🇮🇩";
    case "en":
      return "🇬🇧";
    default:
      return "🌐";
  }
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("lng", lng);

    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle bg-base-300 border-base-content/10 shadow-base-content/5 font-bold shadow-sm text-shadow-lg"
      >
        {getLanguageIcon(currentLanguage)}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box shadow-base-content/5 bg-base-300 mt-2 shadow-sm"
      >
        <li>
          <button
            onClick={() => changeLanguage("en")}
            className="flex items-center gap-2"
            disabled={currentLanguage === "en"}
          >
            <span className="text-shadow-lg" role="img" aria-label="UK Flag">
              🇬🇧
            </span>
            English
          </button>
        </li>
        <li>
          <button
            onClick={() => changeLanguage("id")}
            className="flex items-center gap-2"
            disabled={currentLanguage === "id"}
          >
            <span
              className="text-shadow-lg"
              role="img"
              aria-label="Indonesia Flag"
            >
              🇮🇩
            </span>
            Indonesia
          </button>
        </li>
      </ul>
    </div>
  );
}
