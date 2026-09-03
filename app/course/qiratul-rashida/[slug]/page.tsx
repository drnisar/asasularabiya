import { Box, Container, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import WordMeaning from "../../_components/WordMeaning";
import { getQiratLesson } from "@/data/qirat-ur-rashida";

type PageQiratulRashidaProps = {
  params: Promise<{ slug: string }>;
};

const PageQiratulRashida = async ({ params }: PageQiratulRashidaProps) => {
  const { slug } = await params;
  const lesson = await getQiratLesson(slug);

  if (!lesson) notFound();

  return (
    <main>
      <Box pt={{ initial: "6", sm: "8" }}>
        <Container size="3" px={{ initial: "4", sm: "6" }}>
          <Text as="p" color="orange" size="2" weight="bold" mb="2">
            قراءة الرشيدة
          </Text>
          <Heading size={{ initial: "7", sm: "9" }} mb="2">
            {lesson.arabicTitle}
          </Heading>
          <Text color="gray" size={{ initial: "3", sm: "4" }}>
            {lesson.title}
          </Text>
        </Container>
      </Box>
      <WordMeaning wordMeaningArray={lesson.content.wordMeanings} />
    </main>
  );
};

export default PageQiratulRashida;
