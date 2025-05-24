import { Outlet } from "react-router";

export default function ArticleLayout() {
  return (
    <div className="mt-36">
      <Outlet />
    </div>
  );
}
