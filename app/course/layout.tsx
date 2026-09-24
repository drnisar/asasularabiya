import type { ReactNode } from "react";
import NavbarCourse from "./_components/NavbarCourse";
import { prisma } from "@/lib/prisma";

const LayoutCourse = async ({ children }: { children: ReactNode }) => {
  const subjects = await prisma.subject.findMany();

  return (
    <div>
      <NavbarCourse subjects={subjects} />
      {children}
    </div>
  );
};

export default LayoutCourse;
