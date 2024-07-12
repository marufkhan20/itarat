import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { hash, pathname } = useLocation();
  const [navItems, setNavItems] = useState([]);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    if (pathname === "/" || pathname === "/packages" || pathname === "/book") {
      setNavItems([
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Gallery",
          link: "#",
        },
        {
          name: "Portfolio",
          link: "#portfolio",
        },
        {
          name: "Packages",
          link: "/packages",
        },
        {
          name: "Book",
          link: "/book",
        },
        {
          name: "About us",
          link: "#footer",
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

  const changeNavBg = () => {
    if (window.scrollY >= 100) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  window.addEventListener("scroll", changeNavBg);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <header
      className={`translate-x-0 duration-200 z-50 ${
        navBg ? "fixed top-0 left-0 right-0 w-full bg-white shadow" : "relative"
      }`}
    >
      <div className="border-b">
        <div className="container">
          <div className="flex justify-between items-center gap-4">
            <div>
              <FaBars
                onClick={() => setOpenMenu(true)}
                className="block xl:hidden cursor-pointer text-xl"
              />
            </div>

            <div className="my-3">
              {(pathname === "/" ||
                pathname === "/packages" ||
                pathname === "/book") && (
                <Link to="/">
                  <img
                    src="/images/services/3.png"
                    className="h-14 sm:h-20"
                    alt=""
                  />
                </Link>
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

            <div
              className={`flex items-center gap-5 text-2xl ${
                pathname === "/" ||
                pathname === "/packages" ||
                pathname === "/book"
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            >
              <FaRegHeart className="cursor-pointer" />
              <IoBagOutline className="cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-5">
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
