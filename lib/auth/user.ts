"use server";
import { prisma } from "../prisma";
import { hashPassword } from "./password";

type UserData = {
  name: string;
  email: string;
  password: string;
  role?: "ADMIN" | "TEACHER" | "STUDENT";
};
export const createUser = async (data: UserData) => {
  const { password, role, ...userData } = data;
  const hashedPassword = await hashPassword(password);

  return await prisma.user.create({
    data: {
      ...userData,
      hashedPassword,
      ...(role ? { role } : {}),
    },
  });
};

export const updateUserRole = async (
  userId: number,
  role: "ADMIN" | "TEACHER" | "STUDENT",
) => {
  return await prisma.user.update({
    where: { id: userId },
    data: { role },
  });
};

export const deleteUser = async (userId: number) => {
  return await prisma.user.delete({
    where: { id: userId },
  });
};
