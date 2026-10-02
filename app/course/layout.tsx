import type { ReactNode } from "react";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth/session";
import NavBar from "./_components/NavBar";

const LayoutCourse = async ({ children }: { children: ReactNode }) => {
  const subjects = await prisma.subject.findMany();
  const user = await getCurrentUser();
  if (!user) {
    return null;
  }

  const currentUser = {
    id: user.id!,
    name: user.name!,
    email: user.email!,
    role: String(user.role),
  };

  return (
    <div>
      {/* <NavbarCourse subjects={subjects} currentUser={user || undefined} /> */}
      <NavBar subjects={subjects} currentUser={currentUser} />
      {/* <pre>
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
      </pre> */}
      {children}
    </div>
  );
};

export default LayoutCourse;
