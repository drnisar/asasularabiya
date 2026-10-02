"use client";
import { DropdownMenu, Link, Text } from "@radix-ui/themes";
import LogoutButton from "@/app/auth/_components/LogoutButton";
import type { User } from "@prisma/client";

interface Props {
  currentUser: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}

const NavBarDropdown = ({ currentUser }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Link href="#">{currentUser?.name ?? "Login"}</Link>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {currentUser ? (
          <>
            <Text>
              <span className="font-semibold">Name: </span>
              {currentUser?.name}
            </Text>
            <Text>
              <span className="font-semibold">Email: </span>
              {currentUser?.email}
            </Text>
            <Text>
              <span className="font-semibold">Role: </span>
              {currentUser?.role}
            </Text>
            <DropdownMenu.Separator />

            <DropdownMenu.Item>
              {/* <Link href="/logout">Logout</Link> */}
              <LogoutButton user={currentUser} />
            </DropdownMenu.Item>
          </>
        ) : (
          <DropdownMenu.Item></DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default NavBarDropdown;
