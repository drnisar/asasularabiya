"use server";

import { prisma } from "@/lib/prisma";
import { createUser } from "@/lib/auth/user";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (!name || !email || !password || !confirmPassword) {
    redirect("/auth/signup?status=missing-fields");
  }

  if (password !== confirmPassword) {
    redirect("/auth/signup?status=password-mismatch");
  }

  if (password.length < 8) {
    redirect("/auth/signup?status=password-too-short");
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    redirect("/auth/signup?status=email-exists");
  }

  try {
    await createUser({ name, email, password });
  } catch (error) {
    console.error("Signup failed", error);
    redirect("/auth/signup?status=failed");
  }

  redirect("/auth/signup?status=created");
}
