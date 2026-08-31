import type { ReactNode } from "react";
import NavbarCourse from "./_components/NavbarCourse";

const LayoutCourse = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavbarCourse />
      {children}
    </div>
  );
};

export default LayoutCourse;