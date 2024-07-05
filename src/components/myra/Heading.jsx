import React from "react";

const Heading = ({ children, className = "" }) => {
  return (
    <h2 className={`text-[28px] font-medium text-center ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;
