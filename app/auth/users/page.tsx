import { prisma } from "@/lib/prisma";
import { Table } from "@radix-ui/themes";
import React from "react";

const PageUsers = async () => {
  const users = await prisma.user.findMany();
  return (
    <div dir="ltr">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Email</Table.Cell>
            <Table.Cell>Role</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default PageUsers;
