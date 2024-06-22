import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header>
      <div className="container flex sm:flex-col gap-8 justify-between sm:justify-center items-center mb-8">
        <Link to="/" className="sm:mt-[18px]">
          <img src="/images/logo.png" className="w-24 sm:w-full" alt="logo" />
        </Link>
        <FaBars
          className="block cursor-pointer text-2xl sm:hidden"
          onClick={() => setOpenMenu(true)}
        />
        <nav
          className={`fixed transition-all duration-300 ${
            openMenu ? "opacity-100 visible" : "opacity-0 invisible"
          } p-20 inset-0 !sm:opacity-100 !sm:visible sm:relative z-50 w-full h-full sm:py-[18px] bg-white`}
        >
          <ul className="flex flex-col w-full h-full z-50 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center gap-4 sm:gap-16">
            <IoMdClose
              onClick={() => setOpenMenu(false)}
              className="text-[26px] cursor-pointer inline-block sm:hidden"
            />
            <li>
              <Link
                className="text-[26px] transition-all hover:text-red-600 leading-[41px]"
                to="#"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="text-[26px] transition-all hover:text-red-600 leading-[41px]"
                to="#"
              >
                Fashion
              </Link>
            </li>
            <li>
              <Link
                className="text-[26px] transition-all hover:text-red-600 leading-[41px]"
                to="#"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
