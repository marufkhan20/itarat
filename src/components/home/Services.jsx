import { useEffect, useState } from "react";
import "react-fancy-circular-carousel/FancyCarousel.css";
import { Link } from "react-router-dom";
import Heading from "../myra/Heading";
import Line from "../ui/Line";

const Services = () => {
  const [focusElement, setFocusElement] = useState(0);
  const [activeService, setActiveService] = useState(1);

  const info = [
    {
      image: "/images/services/myra.jpg",
      name: "Myra",
      description: "Capture The Best Precious Moments With Iitarat Frames",
      linkText: "Visit Now",
      link: "/myra",
    },
    {
      image: "/images/services/noya.jpg",
      name: "Noya",
      description: "Capture The Best Precious Moments With Iitarat Frames",
      linkText: "Book Now",
      link: "/noya",
    },
    {
      image: "/images/services/itarat.jpg",
      name: "Iitarat",
      description: "Capture The Best Precious Moments With Iitarat Frames",
      linkText: "Book Now",
      link: "/",
    },
  ];

  useEffect(() => {
    setInterval(() => {
      setActiveService((prevItem) => (prevItem >= 3 ? 1 : prevItem + 1));
    }, 5500);
  }, []);

  console.log("activeService", activeService);
  return (
    <section className="pt-20 pb-10">
      <div className="container">
        <Heading>Our Service</Heading>

        <Line />

        <div className="grid sm:grid-cols-2 gap-12 overflow-hidden h-[500px] sm:h-[300px] mt-5 sm:mt-0">
          <div className="flex items-center relative h-full w-full">
            {info?.map((item, idx) => (
              <div
                key={item}
                className={`service-image-container absolute top-0 justify-center w-full left-[-150%] py-3 h-full items-center ${
                  idx + 1 === activeService ? "flex active" : "hidden"
                }`}
              >
                <Link to={item?.link} className={`service-image shadow-lg`}>
                  <img
                    className="w-full sm:w-[80%] lg:w-[300px] h-[100px] md:h-[150px] rounded-md"
                    src={item?.image}
                    alt=""
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full h-full relative">
            {info?.map((item, idx) => (
              <Link
                to={item?.link}
                key={idx}
                className={`service-content absolute top-0 right-[-150%] w-full sm:mt-8 ${
                  idx + 1 === activeService ? "block" : "hidden"
                }`}
              >
                <h2 className="text-[28px] font-medium">{item?.name}</h2>
                <p className="text-base mt-4 font-normal">
                  {item?.description}
                </p>
                <div>
                  <Link
                    to={item?.link}
                    className="inline-block mt-6 font-medium text-[18px] px-4 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 lg:px-8 lg:py-3.5 border rounded-[24px] border-black"
                  >
                    {item?.linkText}
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
