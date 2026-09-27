import TajweedLesson from "../_components/TajweedLesson";
import { prisma } from "@/lib/prisma";
import { Container } from "@radix-ui/themes/dist/cjs/components/index.js";
import Link from "next/link";

const PageTajweed = async () => {
  const lessons = await prisma.lesson.findMany({
    where: {
      subjectId: 4,
    },
  });
  return (
    <>
      <Container>
        <div>
          {lessons.map((lesson) => (
            <TajweedLesson key={lesson.id} lesson={lesson} />
          ))}
        </div>
        <Link href={`/course/tajweed/add`}>Add Tajweed Lessons</Link>
      </Container>
    </>
  );
};

export default PageTajweed;
