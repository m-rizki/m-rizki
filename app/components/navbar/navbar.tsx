import { Home, Menu } from "lucide-react";
import { Link } from "react-router";
import { useNavigationScroll } from "../hooks/use-navigation-scroll";
import ThemeSwitcher from "../controllers/theme-switcher";
import MobileNavigation from "./mobile-navigation";
import DesktopNavigation from "./desktop-navigation";

export default function Navbar() {
  const { visible } = useNavigationScroll();

  return (
    <div
      className={`fixed top-6 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="px-8 sm:px-16 lg:px-32 xl:px-64">
        <div className="flex justify-between items-center bg-transparent shadow-none rounded-full">
          <div>
            {/* <Link
              to={"/"}
              className="btn btn-circle shadow-sm font-bold bg-base-300 border-base-content/10"
            >
              <Home />
            </Link> */}
          </div>

          <DesktopNavigation />

          <div className="flex justify-end items-center gap-4">
            <MobileNavigation />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
