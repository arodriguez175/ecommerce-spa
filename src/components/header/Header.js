import Cart from "./cart/Cart";
import Menu from "./menu/Menu";
import Selection from "./selection/Selection";
import Search from "./search/Search";

function Header() {
  return (
    <div className="header">
      <p>logo</p>
      <p>Sign in</p>
      <Cart />
      <Menu />
      <Selection />
      <Search />
    </div>
  );
}

export default Header;
