import Menu from "./menu/Menu";
import Search from "./Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>
        <Link to="/" className="text-red-500">
          Mercury
        </Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/cart">Cart</Link>
        <Menu />
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Search />
      </div>
    </div>
  );
}

export default Header;
