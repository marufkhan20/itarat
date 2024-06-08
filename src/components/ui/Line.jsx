const Line = ({ type = "primary", className = "" }) => {
  return (
    <div
      className={`${
        type === "primary" ? "h-[1px]" : "h-[3px]"
      } w-[150px] sm:w-[200px] md:w-[254px] bg-black m-auto ${className}`}
    />
  );
};

export default Line;
