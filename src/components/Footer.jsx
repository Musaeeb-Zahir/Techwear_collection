import { Link } from "react-router-dom";
import logo from "/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import pay from "../assets/pay/pay.png";
import app from "../assets/pay/app.jpg";
import play from "../assets/pay/play.jpg";
function Footer() {
  return (
    <footer className="section-p1">
      <div className="col">
        <Link to={"/"}>
          <img className="footerlogo" src={logo} alt="" width={"80px"} />
        </Link>
        <h4>Contact</h4>
        <p>
          {" "}
          <strong>Address:</strong>rong Yugo house ,P334 house RWP
        </p>
        <p>
          {" "}
          <strong>Phone:</strong>+92 355-4218434 / 0355-4433912
        </p>
        <p>
          {" "}
          <strong>Hours:</strong>24/7 Mon-Sun
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="col">
        <h4>My Accounts</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Listwish</a>
        <a href="#">Track my Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Trem and Condition</a>
        <a href="#">Contant Us</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Play Store</p>
        <div className="row">
          <img src={app} alt="" />
          <img src={play} alt="" />
        </div>
        <p>Secure payment Gateway</p>
        <img src={pay} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
