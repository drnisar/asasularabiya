import { Box, Container, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import WordMeaning from "../../_components/WordMeaning";
import { hewaratLessons } from "@/app/course/actions/hewarat";
import FormWordMeaning from "../../_components/FormWordMeaning";
import Link from "next/link";

type HewaratDynamicPageProps = {
  params: Promise<{ slug: string }>;
};

const HewaratDynamicPage = async ({ params }: HewaratDynamicPageProps) => {
  const { slug } = await params;

  // const lesson = await prisma.lesson.findUnique({
  //   where: {
  //     slug,
  //   },
  //   include: {
  //     wordMeanings: true,
  //   },
  // });
  const lesson = await hewaratLessons(slug);

  if (!lesson) notFound();

  return (
    <main>
      <Box pt={{ initial: "6", sm: "8" }}>
        <Container size="3" px={{ initial: "4", sm: "6" }}>
          <Text as="p" color="orange" size="2" weight="bold" mb="2">
            دروس المحادثة
          </Text>
          <Heading size={{ initial: "7", sm: "9" }} mb="2">
            {lesson.arabicTitle}
          </Heading>
          <Text color="gray" size={{ initial: "3", sm: "4" }}>
            {lesson.title}
          </Text>
        </Container>
      </Box>
      <WordMeaning wordMeaningArray={lesson.wordMeanings} />
      <Link href={`/course/hewarat/edit/${slug}`}>Edit Lesson</Link>
      <FormWordMeaning lessonId={lesson.id} />
    </main>
  );
};

export default HewaratDynamicPage;
