import { FileText, Folder, Home, Info, Menu } from "lucide-react";
import { Link } from "react-router";

export default function MobileNavigation() {
  return (
    <div className="md:hidden">
      <details className="dropdown dropdown-end">
        <summary className="btn shadow-sm font-bold bg-base-300 rounded-full border-base-content/10">
          <Menu />
        </summary>
        <nav>
          <ul className="menu dropdown-content bg-base-300 rounded-box z-1 w-40 p-2 shadow-sm">
            <li>
              <Link to={"/"}>
                <Home size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <Info size={20} /> About
              </Link>
            </li>
            <li>
              <Link to={"/projects"}>
                <Folder size={20} /> Projects
              </Link>
            </li>
            <li>
              <Link to={"/articles"}>
                <FileText size={20} /> Articles
              </Link>
            </li>
          </ul>
        </nav>
      </details>
    </div>
  );
}
