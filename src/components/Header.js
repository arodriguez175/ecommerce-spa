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

  const savedItemsLength = useSelector(
    (state) => state.saveItem.savedItems.length
  );

  return (
    <div className="antialiased">
      <header>
        <nav
          className="
          flex flex-wrap lg:flex-nowrap
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

          <Link
            to="/"
            className="text-red p-3 md:mr-[12px] order-2"
            onClick={() => {
              let element = document.querySelector("#menu");
              element.className =
                "hidden w-full md:flex md:items-center md:w-auto order-4 md:order-2";
            }}
          >
            Mercury
          </Link>

          <div
            className="hidden w-full md:flex md:items-center md:w-auto order-4 md:order-2"
            id="menu"
          >
            <ul
              className="
              text-base
              pt-4
              text-center
              md:flex
              md:justify-between
              md:pt-0
              md:gap-3"
            >
              <li>
                <Link
                  to="/"
                  className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3"
                  onClick={() => {
                    let element = document.querySelector("#menu");
                    element.className =
                      "hidden w-full md:flex md:items-center md:w-auto order-4 md:order-2";
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3"
                  onClick={() => {
                    let element = document.querySelector("#menu");
                    element.className =
                      "hidden w-full md:flex md:items-center md:w-auto order-4 md:order-2";
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3"
                  onClick={() => {
                    let element = document.querySelector("#menu");
                    element.className =
                      "hidden w-full md:flex md:items-center md:w-auto order-4 md:order-2";
                  }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/men"
                  className="border border-lightgrayBorder m-[-1px] hover:bg-primary hover:text-secondary rounded md:p-3 py-2 block p-3"
                  onClick={() => {
                    let element = document.querySelector("#menu");
                    element.className =
                      "hidden w-full md:flex md:items-center md:w-auto order-4 md:order-2";
                  }}
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="border border-lightgrayBorder m-[-1px] hover:bg-primary hover:text-secondary rounded md:p-3 py-2 block p-3"
                  onClick={() => {
                    let element = document.querySelector("#menu");
                    element.className =
                      "hidden w-full md:flex md:items-center md:w-auto order-4 md:order-2";
                  }}
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3"
                  onClick={() => {
                    let element = document.querySelector("#menu");
                    element.className =
                      "hidden w-full md:flex md:items-center md:w-auto order-4 md:order-2";
                  }}
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </div>

          <Search className="order-4 md:order-3" />

          <div className="md:ml-auto flex order-3 md:order-4 md:gap-3">
            <Link
              to="/saved"
              className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3 relative"
              onClick={() => {
                let element = document.querySelector("#menu");
                element.className =
                  "hidden w-full md:flex md:items-center md:w-auto order-4 md:order-2";
              }}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="text-[25px] text-primary"
              />
              <span className="bg-red text-secondary font-bold rounded-full min-w-[1rem] w-auto text-center text-[0.7rem] absolute top-2 right-[2px]">
                {savedItemsLength > 0 ? savedItemsLength : ""}
              </span>
            </Link>

            <Link
              to="/cart"
              className="hover:border border-lightgrayBorder hover:m-[-1px] rounded md:p-3 py-2 block p-3 relative"
              onClick={() => {
                let element = document.querySelector("#menu");
                element.className =
                  "hidden w-full md:flex md:items-center md:w-auto order-4 md:order-2";
              }}
            >
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-[25px] text-primary"
              />
              <span className="bg-red text-secondary font-bold rounded-full min-w-[1rem] w-auto text-center text-[0.7rem] absolute top-2 right-[2px]">
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
