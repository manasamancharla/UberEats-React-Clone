import React, { useState } from "react";
import menu from "./images/menu.png";
import logo from "./images/logo.svg";
import login from "./images/login.png";
import ubereats from "./images/ubereatslogo.png";
import apple from "./images/Apple-Logo.png";
import android from "./images/android.png";

import "./Navbar.css";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  const handleClick = () => {
    setSideBar(!sideBar);
  };
  return (
    <div id="navbar">
      <nav>
        <a href="#">
          <img src={menu} id="menu-image" onClick={handleClick} />
        </a>
        <a href="#" id="logo">
          <img src={logo} id="logo-image" />
        </a>
        <button id="login">
          <img src={login} id="login-image" /> Log in
        </button>
        <button id="signUp">Sign up</button>
      </nav>
      {sideBar && (
        <div>
          <div id="overlay" onClick={handleClick}></div>
          <div id="sidebar">
            <button id="signup">Sign up</button>
            <button id="loginbtn">Log in</button>
            <ul>
              <li>
                <a href="#">Create a business account</a>
              </li>
              <li>
                <a href="#">Add your restaurant</a>
              </li>
              <li>
                <a href="#">Sign up to deliver</a>
              </li>
            </ul>
            <div id="footerDiv">
              <div id="firstDiv">
                <img src={ubereats} />
                <p>There's more to love in the app.</p>
              </div>
              <div id="secondDiv">
                <button>
                  <span className="span">
                    <img src={apple} id="iimage" />
                    <p>iPhone</p>
                  </span>
                </button>
                <button>
                  <span className="span">
                    <img src={android} id="aimage" />
                    <p>Android</p>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
