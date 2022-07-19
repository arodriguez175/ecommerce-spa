import Search from "./Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartLength = useSelector((state) => state.cart.cart.length);

  return (
    <div className="header">
      <div className="flex gap-4">
        <Link to="/" className="text-red-500 p-3">
          Mercury
        </Link>

        <Link
          to="/"
          className="hover:border gainsboro-100 
          hover:m-[-1px]
          rounded p-3"
        >
          Home
        </Link>

        <Link
          to="about"
          className="hover:border gainsboro-100 
          hover:m-[-1px] 
          rounded p-3"
        >
          About
        </Link>

        <Link
          to="contact"
          className="hover:border gainsboro-100 
          hover:m-[-1px] 
          rounded p-3"
        >
          Contact
        </Link>

        <Link
          to="/men"
          className="hover:bg-[#363636] hover:text-shoe-text-hover 
          border gainsboro-100 
          rounded p-3"
        >
          Men
        </Link>

        <Link
          to="/women"
          className="hover:bg-[#363636] hover:text-shoe-text-hover  
          border gainsboro-100 
          rounded p-3"
        >
          Women
        </Link>

        <Search />

        <Link
          to="/signin"
          className="hover:border gainsboro-100 
          hover:m-[-1px] 
          rounded p-3"
        >
          Sign in
        </Link>

        <Link
          to="/cart"
          className="hover:border gainsboro-100 
          hover:m-[-1px] 
          rounded p-3"
        >
          Cart {cartLength}
        </Link>
      </div>
    </div>
  );
}

export default Header;
