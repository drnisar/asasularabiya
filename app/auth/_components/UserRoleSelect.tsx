"use client";

import { updateUserRole } from "@/lib/auth/user";
import { Role } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  defaultRole: Role;
  roles: Role[];
  userId: number;
}
const UserRoleSelect = ({ defaultRole, roles, userId }: Props) => {
  const router = useRouter();

  const handleChange = async (newRole: Role) => {
    await updateUserRole(userId, newRole);
    router.refresh();
  };
  return (
    <Select.Root
      defaultValue={defaultRole}
      value={defaultRole}
      onValueChange={handleChange}
      disabled={defaultRole === "ADMIN"}
    >
      <Select.Trigger>{defaultRole}</Select.Trigger>
      <Select.Content>
        {roles.map((role) => (
          <Select.Item key={role} value={role}>
            {role}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default UserRoleSelect;
