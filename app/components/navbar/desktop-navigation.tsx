import { NavLink } from "react-router";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          [
            "relative inline-block px-2 py-2",
            isActive ? "text-accent" : "hover:text-accent",
          ].join(" ")
        }
      >
        {({ isActive }) => (
          <>
            {children}
            <span
              className={
                isActive
                  ? "from-accent/0 via-accent/40 to-accent/0 absolute inset-x-1 -bottom-px h-px bg-gradient-to-r"
                  : ""
              }
            />
          </>
        )}
      </NavLink>
    </li>
  );
}

export default function DesktopNavigation() {
  return (
    <nav className="hidden md:block">
      <ul className="bg-base-300/90 ring-base-content/10 shadow-neutral-content/5 flex gap-4 rounded-full px-3 text-sm font-medium shadow-lg ring-1 backdrop-blur">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/articles">Articles</NavItem>
      </ul>
    </nav>
  );
}
