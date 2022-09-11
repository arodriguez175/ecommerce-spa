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
      <div className="bottom-0 grid grid-cols-1 md:grid-cols-4 mb-8 text-sm [&>*>*]:mb-3">
        <ul>
          <li>
            <Link to="#">Gift Cards</Link>
          </li>
          <li>
            <Link to="#">Promotions</Link>
          </li>
          <li>
            <Link to="#">Find a Store</Link>
          </li>
          <li>
            <Link to="#">Sign up for Email</Link>
          </li>
          <li>
            <Link to="#">Become a Member</Link>
          </li>
          <li>
            <Link to="#">Mercury Journal</Link>
          </li>
          <li>
            <Link to="#">Send us Feedback</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="#">Get Help</Link>
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
            <Link to="#">About Mercury</Link>
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

        <div className="text-[25px] md:absolute md:right-0 md:mr-[40px]">
          <Link to="#">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="#" className="ml-4">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
          <Link to="#" className="ml-4">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="#" className="ml-4">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>

      <div className="text-[10px]">
        <p className="float-left">
          &copy; {new Date().getFullYear()} Mercury, Inc. All Rights Reserved
        </p>

        <ul className="[&>*]:mt-3 md:flex md:float-right md:[&>*]:ml-6">
          <br />
          <li>
            <Link to="#">Guides</Link>
          </li>
          <li>
            <Link to="#">Terms of Sale</Link>
          </li>
          <li>
            <Link to="#">Terms of Use</Link>
          </li>
          <li>
            <Link to="#">Mercury Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="clear-both"></div>
    </div>
  );
}

export default Footer;
