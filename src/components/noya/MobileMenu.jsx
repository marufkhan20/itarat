import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileMenu = ({ openMenu, setOpenMenu }) => {
  const [test, setTest] = useState("");
  return (
    <div
      className={`fixed transition-all duration-300 ${
        openMenu ? "left-0" : "-left-[400%]"
      } xl:-left-[100%] top-0 left-0 h-full w-full z-[10000] bg-black/30`}
      // onClick={() => setOpenMenu(false)}
    >
      <nav
        // onClick={(e) => e.stopPropagation()}
        className="w-full sm:w-[384px] bg-white h-full"
      >
        <div className="p-6">
          <RiCloseLargeLine
            onClick={() => setOpenMenu(false)}
            className="cursor-pointer text-xl"
          />
        </div>
        <input
          type="text"
          placeholder="hello"
          value={test}
          onChange={(e) => setTest(e.target.value)}
        />
        <ul className="flex p-6 flex-col gap-9 overflow-auto">
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">News</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Offers</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Outerwear</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Clothing</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Footwear</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Accessories</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Car Seats & Strollers</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Baby</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Toys</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Home</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Selections</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Archive</Link>
          </li>
          <li className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit">
            <Link to="#">Brands</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
