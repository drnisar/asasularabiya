import React from "react";
import ContentList from "../_components/ContentList";
import tajweed from "@/public/data/tajweed.json";
import TajweedLessons from "../_components/TajweedLessons";

interface Params {
  searchParams: Promise<{ division: string }>;
}

const PageTajweed = async ({ searchParams }: Params) => {
  const divisions = tajweed.divisions;
  const { division } = await searchParams;

  const filteredDivisions = divisions.filter((d) => d.slug === division);
  return (
    <>
      <h1>{division}</h1>
      <div>
        {filteredDivisions.flatMap((div) =>
          div.lessons.map((lesson) => (
            <TajweedLessons
              key={lesson.id}
              lesson={{
                id: lesson.id,
                title: lesson.title,
                arabicTitle: lesson.arabicTitle,
                urduTitle: lesson.urduTitle,
                definition: lesson.definition,
                explanation: lesson.explanation,
                examples: lesson.examples,
                practice: lesson.practice,
              }}
            />
          )),
        )}
      </div>
    </>
  );
};

export default PageTajweed;
