import {
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";

type TajweedLesson = {
  id: number;
  title: string;
  arabicTitle: string;
  urduTitle: string;
  definition: string;
  explanation: string;
  examples: { letter: string; word: string; note: string }[];
  practice: string[];
};

const TajweedLessons = ({ lesson }: { lesson: TajweedLesson }) => (
  <Box py={{ initial: "6", sm: "8" }}>
    <Container size="3" px={{ initial: "4", sm: "6" }}>
      <Box mb={{ initial: "6", sm: "8" }}>
        <Badge color="orange" variant="soft" size="2" mb="3">
          درس {lesson.id}
        </Badge>
        <Heading size={{ initial: "8", sm: "9" }} mb="2">
          {lesson.arabicTitle}
        </Heading>
        <Text size={{ initial: "4", sm: "5" }} color="gray">
          {lesson.urduTitle}
        </Text>
      </Box>

      <Card size={{ initial: "2", sm: "3" }} mb="5">
        <Text as="p" size="2" weight="bold" color="orange" mb="2">
          تعریف
        </Text>
        <Heading size={{ initial: "5", sm: "6" }} mb="3">
          {lesson.definition}
        </Heading>
        <Text as="p" size={{ initial: "3", sm: "4" }} color="gray">
          {lesson.explanation}
        </Text>
      </Card>

      <Box mb="5">
        <Text as="p" size="2" weight="bold" color="orange" mb="3">
          مثالیں
        </Text>
        <Grid columns={{ initial: "1", sm: "2" }} gap="4">
          {lesson.examples.map((example) => (
            <Card key={`${example.letter}-${example.word}`} size="3">
              <Flex justify="between" align="center" mb="4">
                <Badge color="orange" radius="full" size="2">
                  حرف
                </Badge>
                <Heading size="8" color="orange">
                  {example.letter}
                </Heading>
              </Flex>
              <Heading size="6" mb="2">
                {example.word}
              </Heading>
              <Text as="p" size="3" color="gray">
                {example.note}
              </Text>
            </Card>
          ))}
        </Grid>
      </Box>

      <Card
        size={{ initial: "2", sm: "3" }}
        style={{ background: "var(--orange-3)" }}
      >
        <Text as="p" size="2" weight="bold" color="orange" mb="3">
          مشق
        </Text>
        <Flex direction="column" gap="3">
          {lesson.practice.map((step, index) => (
            <Flex align="start" gap="3" key={step}>
              <Badge color="orange" radius="full">
                {index + 1}
              </Badge>
              <Text size={{ initial: "3", sm: "4" }}>{step}</Text>
            </Flex>
          ))}
        </Flex>
      </Card>
    </Container>
  </Box>
);

export default TajweedLessons;
