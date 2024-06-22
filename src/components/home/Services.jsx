import { useState } from "react";
import "react-fancy-circular-carousel/FancyCarousel.css";
import Slider from "react-slick/lib/slider";
import Line from "../ui/Line";

const Services = () => {
  const [focusElement, setFocusElement] = useState(0);
  const images = [
    "/images/services/1.png",
    "/images/services/2.png",
    "/images/services/3.png",
  ];
  const info = [
    {
      name: "Myra",
      description: "Capture The Best Precious Moments With Iitarat Frames",
      linkText: "Visit Now",
      link: "/",
    },
    {
      name: "Noya",
      description: "Capture The Best Precious Moments With Iitarat Frames",
      linkText: "Book Now",
      link: "/",
    },
    {
      name: "Iitarat",
      description: "Capture The Best Precious Moments With Iitarat Frames",
      linkText: "Book Now",
      link: "/",
    },
  ];

  const imageSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const textSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    screenLeft: true,
  };
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-[32px] leading-[48px] sm:text-[48px] sm:leading-[72px] md:text-[64px] md:leading-[99px]">
          Our Service
        </h2>

        <Line />

        <div className="mt-6 grid sm:grid-cols-2 gap-12">
          {/* <FancyCarousel
            images={images}
            setFocusElement={setFocusElement}
            carouselRadius={400}
            peripheralImageRadius={100}
            centralImageRadius={200}
            focusElementStyling={{ border: "2px solid #ba4949" }}
            autoRotateTime={3}
            borderWidth={4}
            borderHexColor={"1c364f"}
          /> */}

          <div className="slider-container">
            <Slider {...imageSettings}>
              <div>
                <img
                  className="shadow-2xl rounded-md"
                  src="/images/services/1.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="shadow-2xl rounded-md"
                  src="/images/services/2.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="shadow-2xl rounded-md"
                  src="/images/services/3.png"
                  alt=""
                />
              </div>
            </Slider>
          </div>

          <div className="slider-container">
            <Slider {...textSettings}>
              {info?.map((item) => (
                <div key={item?.name}>
                  <h2 className="text-center font-medium text-[40px] leading-[60px] sm:text-[64px] sm:leading-[96px] md:text-[80px] md:leading-[120px] lg:text-[96px] lg:leading-[148px]">
                    {item?.name}
                  </h2>

                  <Line />
                  <p className="mt-6 font-medium text-[20px] leading-[30px] sm:text-[28px] sm:leading-[42px] md:text-[32px] md:leading-[48px] lg:text-[40px] lg:leading-[62px]">
                    {item?.description}
                  </p>

                  <button className="inline-block mt-6 font-medium text-[18px] leading-[28px] sm:text-[22px] sm:leading-[34px] md:text-[24px] md:leading-[36px] lg:text-[28px] lg:leading-[44px] px-4 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 lg:px-8 lg:py-3.5 border rounded-[24px] border-black">
                    {item?.linkText}
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
