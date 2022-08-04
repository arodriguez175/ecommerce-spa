function Footer() {
  return (
    <div className="footer">
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

        <div>{/* social media icons */}</div>
      </div>

      <div className="text-[10px]">
        <p className="float-left">
          &copy; {new Date().getFullYear()} Mercury, Inc. All Rights Reserved
        </p>

        <div className="footerBottomRight">
          <p>Guides</p>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Mercury Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
