import { Box } from "@radix-ui/themes";
import React from "react";
import ButtonDeleteWordMeaning from "@/app/course/_components/ButtonDeleteWordMeaning";
import {
  deleteWordMeaning,
  getWordMeaningsBySlug,
} from "@/app/course/actions/wordMeaning";
import { getLessonBySlug } from "@/app/course/actions/lesson";
import FormWordMeaning from "@/app/course/_components/FormWordMeaning";

const PageHewaratSingleLesson = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug);
  const wordMeanings = await getWordMeaningsBySlug(slug);
  if (!wordMeanings.length) {
    return (
      <Box px={{ initial: "2", sm: "6" }} mx={"auto"} maxWidth="1200px">
        No word meanings found.
        <FormWordMeaning lessonId={lesson?.id ?? 0} />
      </Box>
    );
  }
  return (
    <Box px={{ initial: "2", sm: "6" }} mx={"auto"} maxWidth="1200px">
      <table>
        <thead>
          <tr>
            <th>Arabic</th>
            <th>Urdu</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {wordMeanings.map((meaning) => (
            <tr key={meaning.id} className="p-4">
              <td style={{ textAlign: "right" }}>{meaning.arabic}</td>
              <td>{meaning.urdu}</td>
              <td>
                <ButtonDeleteWordMeaning id={meaning.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <FormWordMeaning lessonId={lesson?.id ?? 0} />
    </Box>
  );
};

export default PageHewaratSingleLesson;
