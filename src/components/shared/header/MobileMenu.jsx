import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = ({ navItems, openMenu, setOpenMenu }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`fixed bg-white transition-all duration-300 ${
        openMenu ? "left-0" : "-left-[400%]"
      } xl:-left-[100%] top-0 min-h-screen w-full z-[10000]`}
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

          {pathname === "/" && (
            <a
              href="#"
              className="bg-black text-white w-fit py-[18px] px-10 rounded-bl-3xl rounded-tr-3xl font-medium text-[15px] transition-all hover:rounded-tl-3xl hover:rounded-br-3xl hover:rounded-tr-none hover:rounded-bl-none"
            >
              Book Now
            </a>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
