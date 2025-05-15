import { Outlet } from "react-router";
import Navbar from "../navbar";

export default function SiteLayout() {
  return (
    <div className="px-4 sm:px-8">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
