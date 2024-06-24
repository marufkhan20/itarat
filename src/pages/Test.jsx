import React, { useEffect, useState } from "react";

const Test = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    console.log("active", active);
  }, [active]);
  return (
    <div>
      <button onClick={() => setActive(!active)}>Click here</button>
    </div>
  );
};

export default Test;
