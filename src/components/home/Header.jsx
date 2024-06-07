import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container flex flex-col gap-8 justify-center items-center mb-8">
        <Link to="/" className="mt-[18px]">
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <nav className="py-2 sm:py-[18px]">
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-16">
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
