import useNavigationScroll from "../../hooks/use-navigation-scroll";
import LanguageSwitcher from "../controllers/language-switcher";
import ThemeSwitcher from "../controllers/theme-switcher";
import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

export default function Navbar() {
  const { visible } = useNavigationScroll();

  return (
    <div
      className={`fixed top-6 right-0 left-0 z-50 bg-transparent transition-all duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="px-8 sm:px-16 lg:px-32 xl:px-64">
        <div className="flex items-center justify-between rounded-full bg-transparent shadow-none">
          <div></div>

          <DesktopNavigation />

          <div className="flex items-center justify-end gap-4">
            <MobileNavigation />
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
