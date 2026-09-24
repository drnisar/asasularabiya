"use server";
import { prisma } from "@/lib/prisma";
import { Lesson } from "@prisma/client/edge";

export async function createLesson(formData: FormData) {
  // Implement the server-side logic to create a lesson here

  const title = formData.get("title") as string;
  const arabicTitle = formData.get("arabicTitle") as string;
  const slug = formData.get("slug") as string;
  const definition = formData.get("definition") as string;
  const explanation = formData.get("explanation") as string;
  const examples = formData.get("examples") as string;
  const note = formData.get("note") as string;
  const subjectId = Number(formData.get("subjectId"));
  try {
    await prisma.lesson.create({
      data: {
        subjectId,
        title,
        arabicTitle,
        slug,
        definition,
        explanation,
        examples,
        note,
      },
    });
    return {
      success: true,
      message: "Lesson created successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to create lesson",
    };
  }
}

export async function updateLesson(formData: FormData, id: number) {
  // const id = Number(formData.get("id"));
  const title = formData.get("title") as string;
  const arabicTitle = formData.get("arabicTitle") as string;
  const slug = formData.get("slug") as string;
  const definition = formData.get("definition") as string;
  const explanation = formData.get("explanation") as string;
  const examples = formData.get("examples") as string;
  const note = formData.get("note") as string;
  const subjectId = Number(formData.get("subjectId"));
  try {
    await prisma.lesson.update({
      where: { id },
      data: {
        id,
        subjectId,
        title,
        arabicTitle,
        slug,
        definition,
        explanation,
        examples,
        note,
      },
    });
    return {
      success: true,
      message: "Lesson updated successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to update lesson",
    };
  }
}

export const createLessonAction = async (data: Lesson) => {
  const {
    subjectId,
    title,
    arabicTitle,
    slug,
    definition,
    explanation,
    examples,
    note,
  } = data;
  await prisma.lesson.create({
    data: {
      subjectId,
      title,
      arabicTitle,
      slug,
      definition: definition ?? "",
      explanation: explanation ?? "",
      examples: examples ?? "",
      note: note ?? "",
    },
  });
  return {
    success: true,
    message: "Lesson created successfully",
  };
};
export const updateLessonAction = async (data: Lesson, id: number) => {
  const {
    subjectId,
    title,
    arabicTitle,
    slug,
    definition,
    explanation,
    examples,
    note,
  } = data;
  await prisma.lesson.update({
    where: {
      id: id,
    },
    data: {
      subjectId,
      title,
      arabicTitle,
      slug,
      definition: definition ?? "",
      explanation: explanation ?? "",
      examples: examples ?? "",
      note: note ?? "",
    },
  });
  return {
    success: true,
    message: "Lesson created successfully",
  };
};

export const getLessonBySlug = async (slug: string) => {
  return await prisma.lesson.findUnique({
    where: {
      slug,
    },
  });
};
