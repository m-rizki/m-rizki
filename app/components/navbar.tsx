import { Home } from "lucide-react";
import ThemeSwitcher from "./controllers/theme-switcher";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-transparent shadow-none rounded-full sticky top-4 mb-10">
      <div>
        <Link
          to={"/"}
          className="btn btn-circle shadow-sm font-bold bg-base-300 border-base-content/30"
        >
          <Home />
        </Link>
      </div>

      <div className="hidden md:block">
        <button className="btn shadow-sm font-bold bg-base-300 rounded-full border-base-content/30">
          menu desktop list
        </button>
      </div>

      <div className="flex justify-end items-center gap-4">
        <div className="md:hidden">
          <button className="btn shadow-sm font-bold bg-base-300 rounded-full border-base-content/30">
            Menu
          </button>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
