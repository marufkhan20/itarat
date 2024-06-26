import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          backgroundImage: "url(/images/footer.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "500px",
        }}
        id="footer"
        className="container overflow-hidden rounded-tr-3xl rounded-tl-3xl"
      >
        {/* <img
        src="/images/footer-banner.png"
        className="w-full -z-10 absolute inset-0"
        alt=""
      /> */}
        <div className="container flex items-center justify-center flex-col relative h-full">
          <div className="min-h-full">
            <img
              src="/images/logo-dark.png"
              alt=""
              className="mt-9 m-auto bg-white px-4 py-2 rounded-md"
            />
            <p className="text-center mt-4 text-white font-light text-2xl">
              Capture The Best Precious Moments With <br />
              Iitarat Frames
            </p>
          </div>

          <div className="absolute px-5 right-0 sm:px-0 sm:right-5 md:right-10 bottom-10">
            <ul className="flex flex-col gap-5 justify-end items-end">
              <li>
                <Link to="#">
                  <FaFacebook className="text-white text-3xl" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <IoLogoInstagram className="text-white text-3xl" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaYoutube className="text-white text-3xl" />
                </Link>
              </li>
            </ul>

            <div className="mt-14 flex items-center gap-9 text-white font-medium text-lg flex-wrap">
              <Link to="#">Privacy Police</Link>
              <Link to="#">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
