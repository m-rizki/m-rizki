import { Outlet } from "react-router";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function SiteLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-8 sm:px-16 lg:px-32 xl:px-64">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
