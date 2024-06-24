import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/footer-banner-2.png"; // Replace with your image URL

    img.onload = () => {
      setDivHeight(img.height);
    };
  }, []);
  return (
    <footer
      style={{
        backgroundImage: "url(/images/footer-banner-2.png)",
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
      <div className="absolute inset-0 w-full h-full bg-white/30"></div>
      <div className="container flex items-center justify-center flex-col relative h-full">
        <div className="min-h-full">
          <img src="/images/myra-logo.png" alt="" className="m-auto" />
          <img src="/images/line.png" className="m-auto -mt-20" alt="" />
          <p
            className="
        text-center font-medium uppercase 
        text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] 
        leading-[24px] sm:leading-[30px] md:leading-[38px] lg:leading-[49px]
      "
          >
            Showcase your beauty in artistic works
          </p>
        </div>

        <div className="absolute px-5 left-0 w-full right-0 sm:px-0 sm:right-5 md:right-0 bottom-10 flex justify-between items-start gap-5 flex-wrap">
          <ul className="flex gap-5 items-end">
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

          <div className="flex items-center gap-9 font-medium text-base sm:text-lg md:text-xl lg:text-2xl flex-wrap">
            <Link to="#">Privacy Police</Link>
            <Link to="#">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
