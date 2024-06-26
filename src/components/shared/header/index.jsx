import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    if (pathname === "/") {
      setNavItems([
        {
          name: "Gallery",
          link: "#",
        },
        {
          name: "Portfolio",
          link: "#",
        },
        {
          name: "Packages",
          link: "#",
        },
        {
          name: "About us",
          link: "#",
        },
      ]);
    }

    if (pathname === "/myra") {
      setNavItems([
        {
          name: "New collection",
          link: "#",
        },
        {
          name: "Watch list",
          link: "#",
        },
        {
          name: "Offer",
          link: "#",
        },
        {
          name: "Contact us",
          link: "#",
        },
        {
          name: "About us",
          link: "#",
        },
      ]);
    }

    if (pathname === "/noya") {
      setNavItems([
        {
          name: "New collection",
          link: "#",
        },
        {
          name: "Watch list",
          link: "#",
        },
        {
          name: "Contact us",
          link: "#",
        },
        {
          name: "About us",
          link: "#",
        },
      ]);
    }
  }, [pathname]);
  return (
    <header>
      <div className="border-b">
        <div className="container flex items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div>
              <FaBars
                onClick={() => setOpenMenu(true)}
                className="block xl:hidden cursor-pointer text-xl"
              />
            </div>
            {pathname === "/" && (
              <img
                src="/images/services/3.png"
                className="h-14 sm:h-20"
                alt=""
              />
            )}

            {pathname === "/noya" && (
              <img
                src="/images/services/2.png"
                className="h-14 sm:h-20"
                alt=""
              />
            )}

            {pathname === "/myra" && (
              <img
                src="/images/services/1.png"
                className="h-14 sm:h-20"
                alt=""
              />
            )}
          </div>
          <nav className="container py-3 hidden xl:block">
            <ul className="flex items-center justify-center gap-6">
              {navItems?.map((nav) => (
                <li
                  key={nav?.name}
                  className="font-medium border-b transition-all border-transparent hover:border-black"
                >
                  <Link to={nav?.link}>{nav?.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={`flex items-center gap-5 text-2xl ${
              pathname === "/" ? "opacity-0" : "opacity-100"
            }`}
          >
            <FaRegHeart className="cursor-pointer" />
            <IoBagOutline className="cursor-pointer" />
          </div>
        </div>
      </div>

      <MobileMenu
        navItems={navItems}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
    </header>
  );
};

export default Header;
