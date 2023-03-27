import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <img className="navLogo" src={logo} alt="" />
        <div className="navLink">
          <a className="link" href="/order-review">
            Order review
          </a>
          <a className="link" href="/order">
            Order
          </a>
          <a className="link" href="/inventory">
            Manage inventory
          </a>
          <a className="link" href="/login">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
