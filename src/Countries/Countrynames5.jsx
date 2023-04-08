import React from "react";

import "../Cities/citynames.css";

const mainsection = [
  {
    city: "Costa Rica",
  },
  {
    city: "Italy",
  },
  {
    city: "Portugal",
  },
  {
    city: "United States",
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
