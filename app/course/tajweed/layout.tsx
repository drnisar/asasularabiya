import React from "react";
import NavBarTajweed from "../_components/NavBarTajweed";

const layoutTajweed = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBarTajweed />
      <div>{children}</div>
    </>
  );
};

export default layoutTajweed;
