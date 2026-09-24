"use server";
import { prisma } from "@/lib/prisma";

export const hewaratLessons = async (slug: string) => {
  return await prisma.lesson.findUnique({
    where: {
      slug,
    },
    include: {
      wordMeanings: true,
    },
  });
};
