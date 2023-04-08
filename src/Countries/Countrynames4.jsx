import React from "react";

import "../Cities/citynames.css";

const mainsection = [
  {
    city: "Chile",
  },
  {
    city: "Ireland",
  },
  {
    city: "Poland",
  },
  {
    city: "United Kingdom",
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
