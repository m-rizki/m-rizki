import { Outlet } from "react-router";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function SiteLayout() {
  return (
    <>
      <Navbar />
      <div className="px-8 sm:px-16 lg:px-32 xl:px-64 min-h-screen">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
