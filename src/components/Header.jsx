import logo from "/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import close from "../assets/svg/close.svg";
function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [navBarActive, setnavBarActive] = useState("NavBarNonActive");
  return (
    <div>
      <section id="header">
        <Link to={"/"}>
          <img id="logo" src={logo} alt="" />
        </Link>
        <div>
          <ul id="navbar" className={`${navBarActive}`}>
            <li>
              <Link to={"/"} className={currentPath === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/shop"}
                className={currentPath === "/shop" ? "active" : ""}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to={"/blog"}
                className={currentPath === "/blog" ? "active" : ""}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={currentPath === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className={currentPath === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
            <li id="lg-bag">
              <Link
                to={"/cart"}
                className={currentPath === "/cart" ? "active" : ""}
              >
                <FaShoppingCart />
              </Link>
            </li>
            <img src={close} alt="" id="close" onClick={(e) => {
                setnavBarActive("NavBarNonActive");
              }} />
          </ul>
          <div className="mobile">
            <Link to={"/cart"}>
              <FaShoppingCart />
            </Link>
            <RxHamburgerMenu
              id="bar"
              className="cursor-pointer"
              onClick={(e) => {
                setnavBarActive("NavBarActive");
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
