import Slider from "react-slick";
import Line from "../ui/Line";

const Portfolio = () => {
  return (
    <section className="pt-14 pb-28">
      <div className="container">
        <h2 className="text-center font-normal text-[28px] leading-[42px] sm:text-[36px] sm:leading-[54px] md:text-[44px] md:leading-[66px] lg:text-[54px] lg:leading-[82px]">
          Portfolio
        </h2>

        <Line />

        <div className="mt-9">
          <div className="slider-container -mx-3">
            <Slider
              {...{
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                speed: 3000,
                autoplaySpeed: 3000,
                cssEase: "linear",
                pauseOnDotsHover: true,
              }}
            >
              <div className="px-3">
                <img className="w-full" src="/images/portfolio/1.png" alt="" />
              </div>
              <div className="px-3">
                <img className="w-full" src="/images/portfolio/2.png" alt="" />
              </div>
              <div className="px-3">
                <img className="w-full" src="/images/portfolio/3.png" alt="" />
              </div>
              <div className="px-3">
                <img className="w-full" src="/images/portfolio/4.png" alt="" />
              </div>
              <div className="px-3">
                <img className="w-full" src="/images/portfolio/5.png" alt="" />
              </div>
              <div className="px-3">
                <img className="w-full" src="/images/portfolio/6.png" alt="" />
              </div>
              <div className="px-3">
                <img className="w-full" src="/images/portfolio/7.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
