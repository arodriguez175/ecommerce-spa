import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Layout() {
  return (
    <div>
      <div className="pt-1 px-1 md:pt-6 md:px-6">
        <a
          href="https://github.com/arodriguez175/ecommerce-spa"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[25px] text-primary"
          />
        </a>
        <Header />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
