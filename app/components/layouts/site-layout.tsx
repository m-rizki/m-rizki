import { Outlet } from "react-router";
import Navbar from "../navbar";

export default function SiteLayout() {
  return (
    <>
      <Navbar />

      <div className="px-8 sm:px-16 lg:px-32 xl:px-64">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
