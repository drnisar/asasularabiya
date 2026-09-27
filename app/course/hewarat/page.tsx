import { Container } from "@radix-ui/themes";
import Link from "next/link";

import { prisma } from "@/lib/prisma";
import HewaratLessonsList from "../_components/HewaratLessonsList";

const HewaratPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ edit: string }>;
}) => {
  const search = await searchParams;

  const lesson = await prisma.lesson.findMany({
    where: { subjectId: 1 },
  });

  return (
    <>
      <Container>
        {search.edit === "true" && (
          <Link href="/course/hewarat/add">
            Create New Lesson {search.edit}
          </Link>
        )}
        <HewaratLessonsList lesson={lesson} />
      </Container>
    </>
  );
};

export default HewaratPage;
