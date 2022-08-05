import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer bg-[#363636] text-[#fff] pt-10 px-10 pb-4 mt-[100px]">
      <div className="bottom-0 grid grid-cols-4 mb-8 text-sm">
        <div>
          <p>GIFT CARDS</p>
          <p>PROMOTIONS</p>
          <p>FIND A STORE</p>
          <p>SIGN UP FOR EMAIL</p>
          <p>BECOME A MEMBER</p>
          <p>SEND US FEEDBACK</p>
        </div>

        <div>
          <p>GET HELP</p>
          <p>Order Status</p>
          <p>Shipping and Delivery</p>
          <p>Returns</p>
          <p>Payment Options</p>
          <p>Gift Card Balance</p>
          <p>Contact Us</p>
        </div>

        <div>
          <p>ABOUT MERCURY</p>
          <p>News</p>
          <p>Careers</p>
          <p>Purpose</p>
          <p>Sustainability</p>
        </div>

        <div className="[&>*]:ml-4 text-[25px]">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>

      <div className="text-[10px]">
        <p className="float-left">
          &copy; {new Date().getFullYear()} Mercury, Inc. All Rights Reserved
        </p>

        <div className="flex float-right [&>*]:ml-6">
          <p>Guides</p>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Mercury Privacy Policy</p>
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  );
}

export default Footer;
