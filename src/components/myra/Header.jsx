import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container flex flex-col gap-8 justify-center items-center mb-8">
        <Link to="/myra">
          <img src="/images/myra-logo.png" alt="logo" />
          <img src="/images/line.png" className="-mt-24" alt="" />
        </Link>
        <nav className="pb-2 sm:pb-[18px] mt-5">
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-28">
            <li>
              <Link
                className="
               text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 
               transition-all hover:text-red-600 leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[55px] 
               font-medium
             "
                to="#"
              >
                Watch List
              </Link>
            </li>
            <li>
              <Link
                className="
                text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 
                transition-all hover:text-red-600 leading-[35px] sm:leading-[45px] md:leading-[50px] lg:leading-[55px] 
                font-medium
              "
                to="#"
              >
                Collection
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
