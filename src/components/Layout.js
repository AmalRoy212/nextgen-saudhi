import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import UIClogo from "../assets/images/UICLOGOIMAGE.png";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/";

  return (
    <div className="bg-[#000814] flex flex-col min-h-screen w-screen">
      {!isHomePage && <Header logo={UIClogo} />}
      <Outlet />
    </div>
  );
};

export default Layout;
