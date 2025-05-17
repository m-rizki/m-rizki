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
                  ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0"
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
      <ul className="flex gap-4 rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/articles">Articles</NavItem>
      </ul>
    </nav>
  );
}
