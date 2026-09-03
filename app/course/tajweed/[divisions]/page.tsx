import React from "react";
import tajweed from "@/public/data/tajweed.json";
import ContentList from "../../_components/ContentList";
import TajweedLessons from "../../_components/TajweedLessons";

interface Props {
  params: Promise<{ divisions: string }>;
}

const PageTajweedDivisions = async ({ params }: Props) => {
  const { divisions } = await params;
  const lessonsList = tajweed.divisions.find(
    (d) => d.slug === divisions,
  )?.lessons;
  return (
    <>
      {lessonsList?.map((lesson) => (
        <TajweedLessons key={lesson.slug} lesson={lesson} />
      ))}
    </>
  );
};

export default PageTajweedDivisions;
