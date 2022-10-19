import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assets/brands/first.png";
import Brand2 from "../../../assets/brands/second.png";
import "./BrandCarousel.css";

const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 caraousel-pic"
            src={Brand1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caraousel-pic"
            src={Brand2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
