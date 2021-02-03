import React from "react";
import "./css/aboutMeSection.css";
import img1 from "./assets/img1.png";

function AboutMeSection() {
  return (
    <>
      <div className="aboutMe" id="aboutMeSectionAnchor">
        <div className="image">
          <img src={img1} alt="" />
        </div>
        <h2 className="heading"> About Me </h2>
        <p className="paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          repellendus quia, magnam sit sint tempore a unde beatae delectus
          consectetur provident deserunt possimus, voluptatibus laboriosam?
        </p>
      </div>
    </>
  );
}

export default AboutMeSection;
