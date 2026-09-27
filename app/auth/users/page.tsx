import { prisma } from "@/lib/prisma";
import { Table } from "@radix-ui/themes";
import React from "react";
import UserRoleSelect from "../_components/UserRoleSelect";
import DeleteUserButton from "../_components/DeleteUserButton";
import { Role } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/session";

const PageUsers = async () => {
  const user = await requireAdmin();
  const users = await prisma.user.findMany();
  const uniqueRoles: Role[] = ["ADMIN", "TEACHER", "STUDENT"];
  return (
    <div dir="ltr">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Email</Table.Cell>
            <Table.Cell>Role</Table.Cell>
            <Table.Cell>Actions</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id} >
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell >
                <UserRoleSelect
                  defaultRole={user.role}
                  roles={uniqueRoles}
                  userId={user.id}
                />
              </Table.Cell>
              <Table.Cell>
                <DeleteUserButton userId={user.id} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default PageUsers;
