import React from "react";
import Slider from "react-slick";

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
    <section>
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img
                src="/images/hero-banner.png"
                alt="hero banner"
                className="w-full rounded-3xl"
              />
            </div>
            <div>
              <img
                src="/images/hero-banner.png"
                alt="hero banner"
                className="w-full rounded-3xl"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
