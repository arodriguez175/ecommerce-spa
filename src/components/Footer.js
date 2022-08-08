import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer bg-primary text-secondary pt-10 px-10 pb-4 mt-[100px]">
      <div className="bottom-0 grid grid-cols-4 mb-8 text-sm [&>*>*]:mb-3">
        <ul>
          <li>
            <Link to="#">GIFT CARDS</Link>
          </li>
          <li>
            <Link to="#">PROMOTIONS</Link>
          </li>
          <li>
            <Link to="#">FIND A STORE</Link>
          </li>
          <li>
            <Link to="#">SIGN UP FOR EMAIL</Link>
          </li>
          <li>
            <Link to="#">BECOME A MEMBER</Link>
          </li>
          <li>
            <Link to="#">MERCURY JOURNAL</Link>
          </li>
          <li>
            <Link to="#">SEND US FEEDBACK</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="#">GET HELP</Link>
          </li>
          <li>
            <Link to="#">Order Status</Link>
          </li>
          <li>
            <Link to="#">Shipping and Delivery</Link>
          </li>
          <li>
            <Link to="#">Returns</Link>
          </li>
          <li>
            <Link to="#">Payment Options</Link>
          </li>
          <li>
            <Link to="#">Gift Card Balance</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="#">ABOUT MERCURY</Link>
          </li>
          <li>
            <Link to="#">News</Link>
          </li>
          <li>
            <Link to="#">Careers</Link>
          </li>
          <li>
            <Link to="#">Purpose</Link>
          </li>
          <li>
            <Link to="#">Sustainability</Link>
          </li>
        </ul>

        <div className="[&>*]:ml-4 text-[25px] absolute right-0 mr-[40px]">
          <Link to="#">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="#">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>

      <div className="text-[10px]">
        <p className="float-left">
          &copy; {new Date().getFullYear()} Mercury, Inc. All Rights Reserved
        </p>

        <div className="flex float-right [&>*]:ml-6">
          <Link to="#">Guides</Link>
          <Link to="#">Terms of Sale</Link>
          <Link to="#">Terms of Use</Link>
          <Link to="#">Mercury Privacy Policy</Link>
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  );
}

export default Footer;
