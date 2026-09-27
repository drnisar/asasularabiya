"use client";
import { Button } from "@radix-ui/themes";
import React from "react";
import { deleteUser } from "@/lib/auth/user";
import { useRouter } from "next/navigation";

const DeleteUserButton = ({ userId }: { userId: number }) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteUser(userId);
    router.refresh();
  };
  return (
    <Button variant="ghost" onClick={handleDelete}>
      Delete User
    </Button>
  );
};

export default DeleteUserButton;
