import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div
        className={`fixed bg-white z-50 inset-0 translate-x-0 duration-300 ${
          isLoading ? "opacity-100 visible" : "opacity-0 invisible"
        } min-h-screen w-full flex justify-center items-center`}
      >
        <img
          className="animate-ping duration-700!"
          src="/images/logo.png"
          alt=""
        />
      </div>
      <Outlet />
    </>
  );
};

export default Loading;
