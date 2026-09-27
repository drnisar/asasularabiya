"use server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
export async function signup(data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  // Implement your signup logic here
  const { name, email, password, confirmPassword } = data;
  if (password !== confirmPassword)
    return {
      success: false,
      message: "Passwords do not match",
    };

  // find if user exists
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user)
    return {
      success: false,
      message: "User already exists",
    };

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(data);
  console.log(hashedPassword);

  // create the user
  await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
  return {
    success: true,
    message: "User created successfully",
  };
}
