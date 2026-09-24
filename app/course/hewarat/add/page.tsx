import React from "react";
import LessonForm from "../../_components/LessonForm";
import { prisma } from "@/lib/prisma";

const PageHewaratLesson = async () => {
  const lessonCount = await prisma.lesson.count({
    where: { subjectId: 100 },
  });
  console.log(lessonCount);
  return <LessonForm subjectId={1} mode="create" />;
};

export default PageHewaratLesson;
