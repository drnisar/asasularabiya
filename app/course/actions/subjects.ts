"use server";
import { prisma } from "@/lib/prisma";

export const getSubjects = async () => {
  const subjects = await prisma.subject.findMany();

  return subjects;
};
