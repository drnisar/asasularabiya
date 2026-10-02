"use client";

import { deleteSession } from "@/lib/auth/session";
import { Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

interface Props {
  user?: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
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
        {user && (
          <Button onClick={handleLogout} className="text-red-600">
            Logout
          </Button>
        )}
      </Flex>
    </>
  );
}
