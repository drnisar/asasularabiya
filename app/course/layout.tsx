import type { ReactNode } from "react";
import NavbarCourse from "./_components/NavbarCourse";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth/session";

const LayoutCourse = async ({ children }: { children: ReactNode }) => {
  const subjects = await prisma.subject.findMany();
  const user = await getCurrentUser();
  // if (!user) {
  //   return null;
  // }

  return (
    <div>
      <NavbarCourse subjects={subjects} currentUser={user || undefined} />
      <pre>
        {JSON.stringify(
          user
            ? {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
              }
            : null,
        )}
      </pre>
      {children}
    </div>
  );
};

export default LayoutCourse;
