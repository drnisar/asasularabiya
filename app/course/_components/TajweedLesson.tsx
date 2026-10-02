import { Badge, Box, Card, Container, Heading, Text } from "@radix-ui/themes";
import type { Lesson } from "@prisma/client";
import Link from "next/link";
import MarkdownRenderer from "./MarkdownRenderer";

interface Props {
  lesson: Lesson;
}

const TajweedLesson = ({ lesson }: Props) => (
  <Box py={{ initial: "6", sm: "8" }}>
    <Container size="3" px={{ initial: "4", sm: "6" }}>
      <Box mb={{ initial: "6", sm: "8" }}>
        <Box key={lesson.id} mb={{ initial: "6", sm: "8" }}>
          <Badge color="orange" variant="soft" size="2" mb="3">
            درس {lesson.id}
          </Badge>
          <Heading size={{ initial: "8", sm: "9" }} mb="2">
            {lesson.arabicTitle}
          </Heading>
          {/* <Text size={{ initial: "4", sm: "5" }} color="gray">
            {lesson.title}
          </Text> */}
        </Box>
      </Box>
      <>
        <Card key={lesson.id} size={{ initial: "2", sm: "3" }} mb="5">
          <Text as="p" size="2" weight="bold" color="orange" mb="2">
            تعریف
          </Text>
          <MarkdownRenderer content={lesson.definition} />
          <Text as="p" size="2" weight="bold" color="orange" mb="2">
            تفصیل
          </Text>

          {/* <Text as="p" size={{ initial: "3", sm: "4" }} color="gray">
            {lesson.explanation}
          </Text> */}
          <MarkdownRenderer content={lesson.explanation} />
          <Text as="p" size="2" weight="bold" color="orange" mb="2">
            مثالیں
          </Text>

          <MarkdownRenderer content={lesson.examples} />
          <Link href={`/course/tajweed/${lesson.id}?mode=edit`} passHref>
            <Text as="p" size="2" weight="bold" color="blue" mb="2">
              Edit
            </Text>
          </Link>
        </Card>
      </>
      x
    </Container>
  </Box>
);

export default TajweedLesson;
