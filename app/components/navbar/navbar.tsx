import { Home, Menu } from "lucide-react";
import { Link } from "react-router";
import ThemeSwitcher from "../controllers/theme-switcher";
import MobileNavigation from "./mobile-navigation";
import DesktopNavigation from "./desktop-navigation";
import useNavigationScroll from "../../hooks/use-navigation-scroll";

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
          <div>
            {/* <Link
              to={"/"}
              className="btn btn-circle shadow-sm font-bold bg-base-300 border-base-content/10"
            >
              <Home />
            </Link> */}
          </div>

          <DesktopNavigation />

          <div className="flex items-center justify-end gap-4">
            <MobileNavigation />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
