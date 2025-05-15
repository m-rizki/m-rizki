import { Home, Menu } from "lucide-react";
import ThemeSwitcher from "./controllers/theme-switcher";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 bg-transparent">
      <div className="px-8 sm:px-16 lg:px-32 xl:px-64">
        <div className="flex justify-between items-center bg-transparent shadow-none rounded-full">
          <div>
            <Link
              to={"/"}
              className="btn btn-circle shadow-sm font-bold bg-base-300 border-base-content/10"
            >
              <Home />
            </Link>
          </div>

          <div className="hidden md:block">
            <button className="btn shadow-sm font-bold bg-base-300 rounded-full border-base-content/10">
              menu desktop list
            </button>
          </div>

          <div className="flex justify-end items-center gap-4">
            <div className="md:hidden">
              <button className="btn shadow-sm font-bold bg-base-300 rounded-full border-base-content/10">
                <Menu />
              </button>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
