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
