import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section>
      <div>
        <div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="relative">
                <img
                  src="/images/hero-banner.png"
                  alt="hero banner"
                  className="w-full"
                />
                <div className="absolute z-40 inset-0 w-full h-full bg-black/60">
                  <div className="container h-full w-full flex items-end">
                    <p className="text-white text-[36px] leading-[44px] font-normal mb-28">
                      Capture The Best Precious <br />
                      Moments With Iitarat <br />
                      Frames.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/hero-banner.png"
                  alt="hero banner"
                  className="w-full"
                />
                <div className="absolute z-40 inset-0 w-full h-full bg-black/60">
                  <div className="container h-full w-full flex items-end">
                    <p className="text-white text-[36px] leading-[44px] font-normal mb-28">
                      Capture The Best Precious <br />
                      Moments With Iitarat <br />
                      Frames.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
