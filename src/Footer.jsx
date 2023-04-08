import React from "react";
import logo from "./images/logo.svg";
import apple from "./images/apple.png";
import google from "./images/google.png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div id="main">
        <div id="subdiv">
          <img src={logo} alt="image" id="logof" />
          <div id="buttondiv">
            <img src={apple} alt="image" class="button" />
            <img src={google} alt="image" class="button" />
          </div>
        </div>
        <div class="subdiv2">
          <ul>
            <li>Get Help</li>
            <li>Buy gift cards</li>
            <li>Add your restaurant</li>
            <li>Sign up to deliver</li>
            <li>Create a business account</li>
            <li>Promotions</li>
          </ul>
        </div>
        <div class="subdiv2">
          <ul>
            <li>Restaurants near me </li>
            <li>View all cities</li>
            <li>View all countries</li>
            <li>Pickup near me</li>
            <li>About Uber Eats</li>
            <li>English</li>
          </ul>
        </div>
      </div>
      <div id="bottomdiv">
        <div id="bsubdiv">
          <img src={facebook} alt="image" class="slogo" />
          <img src={twitter} alt="image" class="slogo" />
          <img src={instagram} alt="image" class="slogo" />
        </div>
        <div id="bsubdiv2"></div>
        <div id="bsubdiv3">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Pricing</a>
          <a href="#">Do not sell or share my personal information</a>
        </div>
      </div>
      <div id="lastdiv">
        <div id="l1"></div>
        <div id="l2">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
        <div id="l3">© 2023 Uber Technologies Inc.</div>
      </div>
      <div id="lspace"></div>
    </>
  );
}
