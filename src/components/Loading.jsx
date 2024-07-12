import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div
        className={`fixed bg-white inset-0 translate-x-0 duration-300 z-[99999] ${
          isLoading ? "opacity-100 visible" : "opacity-0 invisible"
        } min-h-screen w-full flex justify-center items-center`}
      >
        {pathname === "/" && (
          <img
            className="animate-ping w-[80%] mx-auto sm:w-fit duration-700!"
            src="/images/logo.png"
            alt=""
          />
        )}

        {pathname === "/myra" && (
          <img
            className="animate-ping w-[80%] mx-auto sm:w-fit duration-700!"
            src="/images/services/1.png"
            alt=""
          />
        )}

        {pathname === "/noya" && (
          <img
            className="animate-ping w-[80%] mx-auto sm:w-fit duration-700!"
            src="/images/services/2.png"
            alt=""
          />
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Loading;
