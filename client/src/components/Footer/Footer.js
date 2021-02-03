import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse
          rerum ratione!
        </p>
        <ul className="footerTxt">
          <a href="#">
            {" "}
            <li>About me</li>{" "}
          </a>
          <a href="#">
            <li>Portfolio</li>{" "}
          </a>
          <a href="#">
            <li>Contact me</li>{" "}
          </a>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </footer>
    </>
  );
}

export default Footer;
