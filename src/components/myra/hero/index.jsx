import React from "react";
import Slider from "react-slick";
import SubHeading from "../SubHeading";
import Item from "./Item";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="mt-10 mb-16">
      <div className="container">
        <SubHeading>the latest</SubHeading>
        <div className="mt-5">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <Item image="1.webp" name="Vineet Rahul" />
              </div>
              <div>
                <Item image="2.webp" name="Vineet Rahul" />
              </div>
              <div>
                <Item image="3.webp" name="Vineet Rahul" />
              </div>{" "}
              <div>
                <Item image="4.webp" name="Vineet Rahul" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
