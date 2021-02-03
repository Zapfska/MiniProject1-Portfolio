import React from "react";
import "./css/portfolioSection.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.png";

function PortfolioSection() {
  return (
    <a id="portfolioSection">
      <div className="portfolioContainer">
        <div>
          <a href="#" className="portfolioSectionATags">
            <img src={img1} alt="" className="portimg" />
          </a>
          <p>CLICK FOR MORE</p>
        </div>

        <div>
          <a href="#" className="portfolioSectionATags">
            <img src={img1} alt="" className="portimg" />
          </a>
          <p>CLICK FOR MORE</p>
        </div>

        <div>
          <a href="#" className="portfolioSectionATags">
            <img src={img1} alt="" className="portimg" />
          </a>
          <p>CLICK FOR MORE</p>
        </div>
      </div>
    </a>
  );
}

export default PortfolioSection;
