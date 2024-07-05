import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D]">
      <div className="container">
        <div className=" py-20 grid sm:grid-cols-3 md:grid-cols-5 gap-8">
          <div>
            <img src="/images/logo.png" className="logo-white" alt="" />
            <nav className="text-white mt-4">
              <ul className="flex items-center gap-4 flex-wrap">
                <li>
                  <Link to="#">Gallery</Link>
                </li>
                <li>
                  <Link to="#">Portfolio</Link>
                </li>
                <li>
                  <Link to="/packages">Packages</Link>
                </li>
                <li>
                  <Link to="#">About us</Link>
                </li>
              </ul>
            </nav>
            <nav className="text-white mt-4">
              <ul className="flex items-center gap-4 text-lg">
                <li>
                  <Link to="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaYoutube />
                  </Link>
                </li>
                <li>
                  <Link to="/packages">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-span-2 bg-[#D3D0CB] p-2 grid grid-cols-2 sm:grid-cols-3 gap-1">
            <img src="/images/portfolio/1.jpg" alt="" />
            <img src="/images/portfolio/2.jpg" alt="" />
            <img src="/images/portfolio/3.jpg" alt="" />
            <img src="/images/portfolio/4.jpg" alt="" />
            <img src="/images/portfolio/5.jpg" alt="" />
            <img src="/images/portfolio/6.jpg" alt="" />
          </div>
          <div className="col-span-2 text-white">
            <h2 className="text-[34px] mb-2">About us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              temporibus recusandae optio iste aut ullam veritatis fugiat
              laudantium blanditiis voluptatibus soluta harum voluptate
              praesentium, exercitationem facere eius nostrum doloribus
              reprehenderit?
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 text-white flex items-center justify-between gap-5 flex-wrap">
        <p className="text-xs">© 2013-2024 ITARAT PHOTOGRAPHY</p>
        <p className="text-xs">Brand Logo</p>
        <ul className="flex items-center gap-4 text-xs">
          <li className="uppercase">
            <Link to="#">Terms</Link>
          </li>
          <li className="uppercase">
            <Link to="#">privacy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
