import { Box, Card, Container, Heading, Text } from "@radix-ui/themes";

type DefinitionLesson = {
  id: number;
  order: number;
  title: string;
  arabicTitle: string;
  urduTitle: string;
  definition: string;
  explanation: string;
  examples: string;
  note: string;
  lessonId: number;
};

const Definition = ({ lesson }: { lesson: DefinitionLesson }) => (
  <Box py={{ initial: "6", sm: "8" }}>
    <Container size="3" px={{ initial: "4", sm: "6" }}>
      <Card size={{ initial: "2", sm: "3" }} mb="5">
        <Box mb={{ initial: "6", sm: "8" }}>
          <Heading size={{ initial: "8", sm: "9" }} mb="2">
            {lesson.arabicTitle}
          </Heading>
          <Text size={{ initial: "4", sm: "5" }} color="gray">
            {lesson.urduTitle}
          </Text>
        </Box>
        {lesson.definition && (
          <div>
            <Text as="p" size="2" weight="bold" color="orange" mb="2">
              تعریف
            </Text>
            <Heading size={{ initial: "5", sm: "6" }} mb="3">
              {lesson.definition}
            </Heading>
          </div>
        )}
        {lesson.explanation && (
          <div>
            <Text as="p" size="2" weight="bold" color="orange" mb="2">
              وضاحت
            </Text>

            <Text as="p" size={{ initial: "3", sm: "4" }} color="gray">
              {lesson.explanation}
            </Text>
          </div>
        )}
        <Text as="p" size="2" weight="bold" color="orange" mb="3">
          مثال
        </Text>
        <Text as="p" size={{ initial: "3", sm: "4" }} mb="2">
          {lesson.examples}
        </Text>
        <Text as="p" size="2" weight="bold" color="orange" mb="3">
          نوٹ
        </Text>
        <Text as="p" size="3" color="gray">
          {lesson.note}
        </Text>
      </Card>
      {/* </Box> */}
    </Container>
  </Box>
);

export default Definition;
