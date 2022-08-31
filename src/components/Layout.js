import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <div className="pt-1 px-1 md:pt-6 md:px-6">
        <Header />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
