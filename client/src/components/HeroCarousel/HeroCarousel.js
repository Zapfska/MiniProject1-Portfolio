import React, { useState } from "react";
import "./css/heroCarousel.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function HeroCarousel() {
  const carouselImgs = [img1, img2, img3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImgsLength = carouselImgs.length;

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === carouselImgsLength - 1 ? 0 : currentSlide + 1
    );
    console.log(currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? carouselImgsLength - 1 : currentSlide - 1
    );
    console.log(currentSlide);
  };

  return (
    <>
      <main className="carousel">
        <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />

        <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />

        {carouselImgs.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slideActive" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <img src={slide} alt="Nav Images" className="carouselImage" />
              )}
            </div>
          );
        })}
      </main>
    </>
  );
}

export default HeroCarousel;
