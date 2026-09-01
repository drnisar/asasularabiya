import type { ReactNode } from "react";
import NavbarLughatulArabiya from "../_components/NavbarLughatulArabiya";

const LayoutLughatulArabiya = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavbarLughatulArabiya />
      {children}
    </>
  );
};

export default LayoutLughatulArabiya;