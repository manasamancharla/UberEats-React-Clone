import React, { useState } from "react";

import mapmarker from "./images/mapmarker.png";
import schedule from "./images/schedulelater.png";
import clock from "./images/clock.png";

import "./MainPicture.css";

export default function MainPicture() {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <>
      <div class="bg-image">
        <div class="order">
          <p id="order">
            <b>Order food to your door</b>
          </p>
          <div class="whitediv">
            <img src={mapmarker} id="mapmarker" />
            <input
              type="text"
              placeholder="Enter delivery address"
              id="searchbar"
            />
            <div
              class="whitediv1"
              onClick={() => setDropDownOpen(!dropDownOpen)}
            >
              {dropDownOpen ? (
                <ul>
                  <DropdownItem img={clock} text={"Deliver now"} />
                  <DropdownItem img={schedule} text={"Schedule for later"} />
                </ul>
              ) : (
                <div id="dropid">
                  <center>
                    <img src={clock} />
                    <span>
                      <p>{"Deliver now"} ᐯ</p>
                    </span>
                  </center>
                </div>
              )}
            </div>
            <button id="findFood">
              <b>Find Food</b>
            </button>
            <p id="signin">
              <b>
                <span id="sign">Sign In </span>
                &nbsp;for your recent addresses
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function DropdownItem({ img, text }) {
  return (
    <li className="dropDownItem">
      <div id="drop">
        <center>
          <img src={img} />
          <span>
            <a>{text}</a>
          </span>
        </center>
      </div>
    </li>
  );
}
