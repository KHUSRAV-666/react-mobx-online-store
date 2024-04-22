import { Outlet } from "react-router-dom";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";

const Layout = () => {

  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <TheHeader />
      <main className="main_container justify-beetwen">
        <Outlet />
      </main>
      <TheFooter />
    </div>
  );
};

export { Layout };
