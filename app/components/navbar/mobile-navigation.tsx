import { FileText, Folder, Home, Info, Menu } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "react-router";

const DROPDOWN = {
  id: "p-mobile-nav",
  anchor: "--a-mobile-nav",
};

export default function MobileNavigation() {
  return (
    <div className="md:hidden">
      <button
        className="btn bg-base-300 border-base-content/10 shadow-neutral-content/5 rounded-full font-bold shadow-lg"
        popoverTarget={DROPDOWN.id}
        style={{ anchorName: DROPDOWN.anchor } as CSSProperties}
      >
        <Menu />
      </button>

      <ul
        className="dropdown dropdown-end menu rounded-box shadow-neutral-content/5 bg-base-300 w-40 shadow-lg"
        popover="auto"
        id={DROPDOWN.id}
        style={{ positionAnchor: DROPDOWN.anchor } as CSSProperties}
      >
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
    </div>
  );
}
