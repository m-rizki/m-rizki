import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal border-base-content/10 text-base-content mt-24 items-center border-t px-8 py-12 sm:px-16 lg:px-32 xl:px-64">
      <aside className="grid-flow-col items-center">
        <nav className="grid grid-flow-col gap-4">
          <Link to={"/"} className="link link-hover">
            Home
          </Link>
          <Link to={"/about"} className="link link-hover">
            About
          </Link>
          <Link to={"/projects"} className="link link-hover">
            Projects
          </Link>
          <Link to={"/articles"} className="link link-hover">
            Articles
          </Link>
        </nav>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
