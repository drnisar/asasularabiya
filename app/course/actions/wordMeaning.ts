"use server";
import { prisma } from "@/lib/prisma";
export const createWordMeaning = async (data: {
  arabic: string;
  urdu: string;
  lessonId: number;
}) => {
  // Implement the logic to create a word meaning entry in your database
  const { arabic, urdu, lessonId } = data;
  await prisma.wordMeaning.create({
    data: {
      arabic,
      urdu,
      lessonId,
    },
  });
};

export const getWordMeaningsBySlug = async (slug: string) => {
  return await prisma.wordMeaning.findMany({
    where: {
      lesson: {
        slug,
      },
    },
  });
};

export const deleteWordMeaning = async (id: number) => {
  await prisma.wordMeaning.delete({
    where: {
      id,
    },
  });
};
