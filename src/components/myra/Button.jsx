import React from "react";

const Button = ({ children, type = "primary" }) => {
  const styles = `uppercase px-5 py-2 sm:py-3 border text-sm font-bold ${
    type === "primary"
      ? "border-black bg-black text-white"
      : "border-white bg-transparent text-white"
  }`;
  return <button className={styles}>{children}</button>;
};

export default Button;
