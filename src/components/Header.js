import Search from "./Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const cartLength = useSelector((state) => state.cart.cart)
    .map((item) => {
      return item.quantity;
    })
    .reduce((first, last) => first + last, 0);

  return (
    <div className="antialiased">
      <header>
        <nav
          className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4"
        >
          <button
            className="h-6 w-6 cursor-pointer md:hidden block order-1"
            onClick={() => {
              let element = document.querySelector("#menu");
              element.classList.toggle("hidden");
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <Link to="/" className="text-red p-3 order-2">
            Mercury
          </Link>

          <div
            className="hidden w-full md:flex md:items-center md:w-auto order-4"
            id="menu"
          >
            <ul
              className="
              text-base
              pt-4
              md:flex
              md:justify-between
              md:pt-0
              text-center"
            >
              <li>
                <Link
                  to="/"
                  className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/men"
                  className="border border-lightgrayBorder m-[-1px] hover:bg-primary hover:text-secondary rounded md:p-3 py-2 block p-3"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="border border-lightgrayBorder m-[-1px] hover:bg-primary hover:text-secondary rounded md:p-3 py-2 block p-3"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </div>

          {/*  */}
          <Search className="order-4" />

          <div className="md:ml-auto flex order-3">
            <Link
              to="/saved"
              className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3 relative"
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
              className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3 relative"
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
        </nav>
      </header>
    </div>
  );
}

export default Header;
