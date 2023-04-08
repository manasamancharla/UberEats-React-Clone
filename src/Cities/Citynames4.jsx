import React from "react";

import "./citynames.css";

const mainsection = [
  {
    city: "Concord",
  },
  {
    city: "McAllen",
  },
  {
    city: "Omaha",
  },
  {
    city: "Stony Brook",
  },
];

const City = (props) => {
  const { city } = props;
  return (
    <div id="div2">
      <span id="name">{city}</span>
    </div>
  );
};

export default function Citynames() {
  return (
    <>
      <div id="div">
        {mainsection.map((content) => {
          const { city } = content;
          return <City city={city} />;
        })}
      </div>
    </>
  );
}
