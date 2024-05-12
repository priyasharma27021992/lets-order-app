import { LOGO_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import { useState } from "react";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={LOGO_URL} alt="Food Fire Logo" />
  </a>
);

const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  const toggleLoginBtn = () => {
    if (loginText === "Login") setLoginText("Logout");
    else setLoginText("Login");
  };
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCartPlus} />
          </li>
          <li>
            <button type="button" onClick={toggleLoginBtn}>
              {loginText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
