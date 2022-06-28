import Menu from "../menu/Menu";
import Search from "../search/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">logo</Link>
      <Link to="/signin">Sign in</Link>
      <Link to="/cart">Cart</Link>
      <Menu />
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Search />
    </div>
  );
}

export default Header;
