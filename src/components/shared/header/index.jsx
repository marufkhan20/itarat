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
    if (
      pathname === "/" ||
      pathname === "/portfolio-details" ||
      pathname === "/gallery" ||
      pathname === "/wishlist" ||
      pathname === "/packages" ||
      pathname === "/book"
    ) {
      setNavItems([
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Gallery",
          link: "/gallery",
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

    if (pathname?.includes("myra")) {
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
    if (window.scrollY >= 200) {
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
  return pathname === "/" ? (
    <header
      className={`translate-x-0 py-5 fixed duration-200 bg-transparent z-50 ${
        navBg
          ? "top-0 left-0 right-0 w-full bg-white shadow"
          : "bg-transparent w-full"
      }`}
    >
      <div>
        <div className="container">
          <div className="flex items-center justify-between gap-5">
            <div>
              <Link to="/">
                <img
                  src={`${
                    navBg ? "/images/logo.png" : "/images/logo-white.png"
                  }`}
                  className="h-14 sm:h-16"
                  alt=""
                />
              </Link>
            </div>
            <nav className="hidden xl:block">
              <ul className="flex items-center justify-center gap-6">
                {navItems?.map((nav) => (
                  <li
                    key={nav?.name}
                    className={`font-medium border-b transition-all border-transparent ${
                      navBg
                        ? "text-black hover:border-black"
                        : "hover:border-white text-white"
                    }`}
                  >
                    <Link to={nav?.link}>{nav?.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden xl:block">
              <a
                href="#"
                className={`${
                  navBg ? "bg-black text-white" : "bg-white text-black"
                } py-[18px] px-10 rounded-bl-3xl rounded-tr-3xl font-medium text-[15px] transition-all hover:rounded-tl-3xl hover:rounded-br-3xl hover:rounded-tr-none hover:rounded-bl-none`}
              >
                Book Now
              </a>
            </div>
            <div>
              <FaBars
                onClick={() => setOpenMenu(true)}
                className="block text-white xl:hidden cursor-pointer text-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        navItems={navItems}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
    </header>
  ) : (
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
              {(pathname === "/portfolio-details" ||
                pathname === "/gallery" ||
                pathname === "/wishlist" ||
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

              {pathname?.includes("myra") && (
                <img
                  src="/images/services/1.png"
                  className="h-14 sm:h-20"
                  alt=""
                />
              )}
            </div>

            <div
              className={`flex items-center gap-5 text-2xl ${
                pathname === "/packages" || pathname === "/book"
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            >
              <Link to="/wishlist">
                <FaRegHeart className="cursor-pointer" />
              </Link>
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
