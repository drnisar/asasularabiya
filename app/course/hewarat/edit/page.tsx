import React from "react";
import LessonForm from "../../_components/LessonForm";
import type { Lesson } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";
const PageHewaratLessonEdit = async ({
  searchParams,
}: {
  searchParams: { lessonId: string };
}) => {
  const { lessonId } = await searchParams;

  const user = await requireAdmin();

  const lesson = await prisma.lesson.findUnique({
    where: { id: Number(lessonId) },
  });

  if (!lesson) {
    return <p>Lesson not found</p>;
  }

  return (
    <>
      <p>Editing Lesson {lessonId}</p>

      <LessonForm
        subjectId={1}
        mode="edit"
        lesson={lesson}
        id={Number(lessonId)}
      />
    </>
  );
};

export default PageHewaratLessonEdit;
