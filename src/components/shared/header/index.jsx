import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  console.log("pathname: ", pathname);
  return (
    <header>
      <div className="border-b">
        <div className="container flex items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <FaBars
              onClick={() => setOpenMenu(true)}
              className="block xl:hidden cursor-pointer text-xl"
            />
            <div className="sm:flex items-center gap-2 py-2 px-3 rounded-md border hidden">
              <IoSearchOutline />
              <input
                type="text"
                className="outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div>
            {pathname === "/" && (
              <img src="/images/services/3.png" className="h-20" alt="" />
            )}

            {pathname === "/noya" && (
              <img src="/images/services/2.png" className="h-20" alt="" />
            )}

            {pathname === "/myra" && (
              <img src="/images/services/1.png" className="h-20" alt="" />
            )}
          </div>
          <div className="flex items-center gap-5 text-2xl">
            <FaRegHeart className="cursor-pointer" />
            <IoBagOutline className="cursor-pointer" />
          </div>
        </div>
      </div>

      <nav className="container py-3 hidden xl:block">
        <ul className="flex items-center justify-center gap-6">
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">News</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Offers</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Outerwear</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Clothing</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Footwear</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Accessories</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Car Seats & Strollers</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Baby</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Toys</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Home</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Selections</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Archive</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black">
            <Link to="#">Brands</Link>
          </li>
        </ul>
      </nav>

      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default Header;
