import React from "react";
import type { Lesson } from "@prisma/client";

interface Props {
  lessons: Lesson[];
}

const LessonsList = ({ lessons }: Props) => {
  return (
    <div>
      <h2>Lessons List</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.arabicTitle}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonsList;
