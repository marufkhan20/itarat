import Slider from "react-slick";
import Heading from "../myra/Heading";
import Line from "../ui/Line";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-14 pb-28 bg-gray-900">
      <div className="container">
        <Heading className="text-white">Portfolio</Heading>

        <Line className="bg-white" />

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
                arrows: false,
              }}
            >
              <div className="px-3 transition-all group relative">
                <img
                  className="w-full h-full"
                  src="/images/portfolio/1.jpg"
                  alt=""
                />
                <div className="absolute inset-0 left-3 right-3 h-full bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <h2 className="text-white font-medium italic text-lg">
                    Portfolio 1
                  </h2>
                </div>
              </div>
              <div className="px-3 transition-all group relative">
                <img className="w-full" src="/images/portfolio/2.jpg" alt="" />
                <div className="absolute inset-0 left-3 right-3 h-full bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <h2 className="text-white font-medium italic text-lg">
                    Portfolio 2
                  </h2>
                </div>
              </div>
              <div className="px-3 transition-all group relative">
                <img className="w-full" src="/images/portfolio/3.jpg" alt="" />
                <div className="absolute inset-0 left-3 right-3 h-full bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <h2 className="text-white font-medium italic text-lg">
                    Portfolio 3
                  </h2>
                </div>
              </div>
              <div className="px-3 transition-all group relative">
                <img className="w-full" src="/images/portfolio/4.jpg" alt="" />
                <div className="absolute inset-0 left-3 right-3 h-full bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <h2 className="text-white font-medium italic text-lg">
                    Portfolio 4
                  </h2>
                </div>
              </div>
              <div className="px-3 transition-all group relative">
                <img className="w-full" src="/images/portfolio/5.jpg" alt="" />
                <div className="absolute inset-0 left-3 right-3 h-full bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <h2 className="text-white font-semibold text-lg">
                    Portfolio 5
                  </h2>
                </div>
              </div>
              <div className="px-3 transition-all group relative">
                <img className="w-full" src="/images/portfolio/6.jpg" alt="" />
                <div className="absolute inset-0 left-3 right-3 h-full bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <h2 className="text-white font-medium italic text-lg">
                    Portfolio 6
                  </h2>
                </div>
              </div>
              <div className="px-3 transition-all group relative">
                <img className="w-full" src="/images/portfolio/7.jpg" alt="" />
                <div className="absolute inset-0 left-3 right-3 h-full bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <h2 className="text-white font-medium italic text-lg">
                    Portfolio 7
                  </h2>
                </div>
              </div>
              <div className="px-3 transition-all group relative">
                <img className="w-full" src="/images/portfolio/8.jpg" alt="" />
                <div className="absolute inset-0 left-3 right-3 h-full bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <h2 className="text-white font-medium italic text-lg">
                    Portfolio 8
                  </h2>
                </div>
              </div>
              <div className="px-3 transition-all group relative">
                <img className="w-full" src="/images/portfolio/9.jpg" alt="" />
                <div className="absolute inset-0 left-3 right-3 h-full bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <h2 className="text-white font-medium italic text-lg">
                    Portfolio 9
                  </h2>
                </div>
              </div>
              <div className="px-3 transition-all group relative">
                <img className="w-full" src="/images/portfolio/10.jpg" alt="" />
                <div className="absolute inset-0 left-3 right-3 h-full bg-black/60 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <h2 className="text-white font-medium italic text-lg">
                    Portfolio 10
                  </h2>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
