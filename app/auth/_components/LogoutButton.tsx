"use client";

import { deleteSession } from "@/lib/auth/session";
import { Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import type { currentUser } from "@/app/course/_components/NavbarCourse";

interface Props {
  user?: currentUser;
}
export default function LogoutButton({ user }: Props) {
  const router = useRouter();

  const handleLogout = async () => {
    await deleteSession();
    router.push("/auth/login");
  };

  //   const user = await getCurrentUser();

  return (
    <>
      <Flex>
        <span>{user?.email}</span>
        {user && (
          <Button onClick={handleLogout} className="text-red-600">
            Logout
          </Button>
        )}
      </Flex>
    </>
  );
}
