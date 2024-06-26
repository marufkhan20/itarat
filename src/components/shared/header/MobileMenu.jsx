import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileMenu = ({ navItems, openMenu, setOpenMenu }) => {
  return (
    <div
      className={`fixed transition-all duration-300 ${
        openMenu ? "left-0" : "-left-[400%]"
      } xl:-left-[100%] top-0 h-full w-full z-[10000] bg-black/30`}
      onClick={() => setOpenMenu(false)}
    >
      <nav
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:w-[384px] bg-white h-full"
      >
        <div className="p-6">
          <RiCloseLargeLine
            onClick={() => setOpenMenu(false)}
            className="cursor-pointer text-xl"
          />
        </div>
        <ul className="flex p-6 flex-col gap-9 overflow-auto">
          {navItems?.map((nav) => (
            <li
              key={nav?.name}
              className="font-medium border-b transition-all border-transparent hover:border-black inline-block w-fit"
            >
              <Link to={nav?.link}>{nav?.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
