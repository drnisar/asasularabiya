import { prisma } from "@/lib/prisma";
import DefinitionEntryForm from "../../dataEntry/DefinitionEntryForm";

const PageTajweedEdit = async ({
  params,
}: {
  params: { lessonId: string };
}) => {
  const { lessonId } = await params;
  const lesson = await prisma.lesson.findUnique({
    where: { id: Number(lessonId) },
  });
  if (!lesson) {
    return <div>Lesson not found</div>;
  }
  console.log(lesson);
  return (
    <>
      <DefinitionEntryForm subjectId={lesson.subjectId} lesson={lesson} />
    </>
  );
};

export default PageTajweedEdit;
