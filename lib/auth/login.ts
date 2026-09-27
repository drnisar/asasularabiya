"use server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { createSession } from "./session";

type FormData = {
  email: string;
  password: string;
};
export async function login(data: FormData) {
  const email = data.email;
  const password = data.password;

  // Implement your login logic here, e.g., call an API or check credentials
  if (!email || !password) {
    return { success: false, text: "Email and password are required" };
  }
  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { success: false, text: "User not found" };
  }

  // Check if the password is correct
  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
  if (isPasswordValid) {
    await createSession(user.id);
    return { success: true, text: "Login successful" };
  } else {
    return { success: false, text: "Invalid password" };
  }

  // This line is no longer needed as the success case is handled above
}
