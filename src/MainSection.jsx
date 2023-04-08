import React from "react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

import "./Mainsection.css";

const mainsection = [
  {
    image: image1,
    content1: "Feed your  employees",
    content2: "Create a business account",
  },
  {
    image: image2,
    content1: "Your restaurant,delivered",
    content2: "Add your restaurant",
  },
  {
    image: image3,
    content1: "Deliver with Uber Eats",
    content2: "Sign up to deliver",
  },
];

const Subsection = (props) => {
  const { image, content1, content2 } = props;
  return (
    <div>
      <img className="image" src={image} alt="image" />
      <p className="content1">{content1}</p>
      <p className="content2">
        <u>{content2}</u>
      </p>
    </div>
  );
};

export default function MainSection() {
  return (
    <>
      <div id="mainsec">
        {mainsection.map((content) => {
          const { image, content1, content2 } = content;
          return (
            <Subsection image={image} content1={content1} content2={content2} />
          );
        })}
      </div>
    </>
  );
}
