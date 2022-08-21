import Search from "./Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const cartLength = useSelector((state) => state.cart.cart)
    .map((item) => {
      return item.quantity;
    })
    .reduce((first, last) => first + last, 0);

  return (
    <div className="header">
      <div className="flex gap-2">
        <Link to="/" className="text-red p-3">
          Mercury
        </Link>

        <Link
          to="/"
          className="hover:border border-lightgrayBorder hover:m-[-1px] rounded p-3"
        >
          Home
        </Link>

        <Link
          to="about"
          className="hover:border border-lightgrayBorder hover:m-[-1px] rounded p-3"
        >
          About
        </Link>

        <Link
          to="contact"
          className="hover:border border-lightgrayBorder hover:m-[-1px] rounded p-3"
        >
          Contact
        </Link>

        <Link
          to="/men"
          className="hover:bg-primary hover:text-secondary border border-lightgrayBorder rounded p-3"
        >
          Men
        </Link>

        <Link
          to="/women"
          className="hover:bg-primary hover:text-secondary border border-lightgrayBorder rounded p-3"
        >
          Women
        </Link>

        <Search />

        <div className="ml-auto flex gap-2">
          <Link
            to="/signin"
            className="hover:border border-lightgrayBorder hover:m-[-1px] rounded p-3"
          >
            Sign in
          </Link>

          <Link
            to="/saved"
            className="hover:border border-lightgrayBorder hover:m-[-1px] rounded p-3 relative"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="text-[25px] text-primary"
            />
            <span className="bg-red text-secondary rounded-full min-w-[1rem] w-auto text-center text-[0.7rem] absolute top-2 right-[2px]">
              {/* {cartLength > 0 ? cartLength : ""} */}
            </span>
          </Link>

          <Link
            to="/cart"
            className="hover:border border-lightgrayBorder hover:m-[-1px] rounded p-3 relative"
          >
            <FontAwesomeIcon
              icon={faBagShopping}
              className="text-[25px] text-primary"
            />
            <span className="bg-red text-secondary rounded-full min-w-[1rem] w-auto text-center text-[0.7rem] absolute top-2 right-[2px]">
              {cartLength > 0 ? cartLength : ""}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
