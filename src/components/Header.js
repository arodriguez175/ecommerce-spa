import Search from "./Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const cartLength = useSelector((state) => state.cart.cart)
    .map((item) => {
      return item.quantity;
    })
    .reduce((first, last) => first + last, 0);

  return (
    <div className="header">
      <div className="flex gap-4">
        <Link to="/" className="text-red p-3">
          Mercury
        </Link>

        <Link to="/" className="hover:border hover:m-[-1px] rounded p-3">
          Home
        </Link>

        <Link to="about" className="hover:border hover:m-[-1px] rounded p-3">
          About
        </Link>

        <Link to="contact" className="hover:border hover:m-[-1px] rounded p-3">
          Contact
        </Link>

        <Link
          to="/men"
          className="hover:bg-shoe-primary hover:text-shoe-text-hover border rounded p-3"
        >
          Men
        </Link>

        <Link
          to="/women"
          className="hover:bg-shoe-primary hover:text-shoe-text-hover border rounded p-3"
        >
          Women
        </Link>

        <Search />

        <Link to="/signin" className="hover:border hover:m-[-1px] rounded p-3">
          Sign in
        </Link>

        <Link to="/cart" className="hover:border hover:m-[-1px] rounded p-3">
          <FontAwesomeIcon icon={faBagShopping} />
          <span className="bg-red text-white rounded-full min-w-[1rem] w-auto text-center text-[0.7rem] absolute">
            {cartLength > 0 ? cartLength : ""}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
