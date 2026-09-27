"use server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import type { Session } from "@prisma/client";
import { redirect } from "next/navigation";
import type { Role } from "@prisma/client";

interface ExtendedSession extends Session {
  expiresAt: Date;
}

const SESSION_COOKIE_NAME = "session";
const SESSION_DURATION = 1000 * 60 * 60 * 24 * 7; // 7 day in milliseconds

export async function createSession(userId: number) {
  const sessionId = crypto.randomBytes(16).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DURATION);

  await prisma.session.create({
    data: {
      id: sessionId,
      userId,
      expiresAt,
    },
  });
  const cookieStore = await cookies();

  cookieStore.set({
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    name: SESSION_COOKIE_NAME,
    value: sessionId,
    expires: expiresAt,
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionId) return null;

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
  });

  if (!session) return null;

  const extendedSession: ExtendedSession = {
    ...session,
    expiresAt: new Date(session.expiresAt),
  };

  return extendedSession;
}

export async function getCurrentUser() {
  const session = await getSession();
  if (!session) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
  });

  const userForSession = {
    id: user?.id,
    name: user?.name,
    email: user?.email,
    role: user?.role,
  };
  if (!user) return null;

  return userForSession;
}

export async function deleteSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionId) return;

  await prisma.session.delete({
    where: { id: sessionId },
  });
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function isAdmin() {
  const user = await getCurrentUser();
  if (!user) return false;
  return user.role === "ADMIN";
}

export async function isTeacher() {
  const user = await getCurrentUser();
  if (!user) return false;
  return user.role === "TEACHER";
}

export async function isStudent() {
  const user = await getCurrentUser();
  if (!user) return false;
  return user.role === "STUDENT";
}

export async function requireRole(role: Role) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/auth/login");
  }
  if (user.role !== role) {
    redirect("/unauthorized");
  }
  return user;
}

export async function requireAdmin() {
  return requireRole("ADMIN");
}
export async function requireTeacher() {
  return requireRole("TEACHER");
}
export async function requireStudent() {
  return requireRole("STUDENT");
}

export async function requireSignedOut() {
  const user = await getCurrentUser();
  if (user) {
    redirect("/");
  }
}
