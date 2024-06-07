import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/footer-banner.png"; // Replace with your image URL

    img.onload = () => {
      setDivHeight(img.height);
    };
  }, []);
  return (
    <footer
      style={{
        backgroundImage: "url(/images/footer-banner.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: divHeight,
      }}
      id="footer"
      className="relative"
    >
      {/* <img
        src="/images/footer-banner.png"
        className="w-full -z-10 absolute inset-0"
        alt=""
      /> */}
      <div className="container flex items-center justify-center flex-col relative h-full">
        <div className="min-h-full">
          <img src="/images/logo-dark.png" alt="" className="mt-9 m-auto" />
          <p className="text-center text-white font-light text-[20px] leading-[30px] sm:text-[24px] sm:leading-[36px] md:text-[28px] md:leading-[42px] lg:text-[30px] lg:leading-[47px]">
            Capture The Best Precious Moments With <br />
            Iitarat Frames
          </p>
        </div>

        <div className="absolute px-5 right-0 sm:px-0 sm:right-5 md:right-0 bottom-10">
          <ul className="flex flex-col gap-5 justify-end items-end">
            <li>
              <Link to="#">
                <img src="/images/icons/facebook.png" alt="" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/images/icons/instagram.png" alt="" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/images/icons/youtube.png" alt="" />
              </Link>
            </li>
          </ul>

          <div className="mt-14 flex items-center gap-9 text-white font-medium text-base sm:text-lg md:text-xl lg:text-2xl flex-wrap">
            <Link to="#">Privacy Police</Link>
            <Link to="#">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
