import React from "react";
import type { Lesson } from "@prisma/client";
import {
  Badge,
  Container,
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from "@radix-ui/themes/dist/cjs/components/index.js";
const HewaratLessonsList = ({ lesson }: { lesson: Lesson[] }) => {
  return (
    <Box py={{ initial: "6", sm: "8" }}>
      <Container size="3" px={{ initial: "4", sm: "6" }}>
        <Flex direction="column" gap="2" mb={{ initial: "6", sm: "8" }}>
          <Text color="orange" size="2" weight="bold">
            دروس المحادثة
          </Text>
          <Heading size={{ initial: "7", sm: "9" }}>الحوارات العربية</Heading>
          <Text color="gray" size={{ initial: "3", sm: "4" }}>
            منتخب مکالمات کے ذریعے عربی زبان سیکھیے
          </Text>
        </Flex>

        <Grid columns={{ initial: "1", sm: "2", lg: "3" }} gap="4">
          {lesson.map(({ id, title, slug, arabicTitle }) => (
            <Card asChild key={id} size="3" className="group">
              <Flex direction="column" justify="between" height="100%" gap="6">
                <Flex justify="between" align="start">
                  <Badge color="orange" variant="soft" radius="full">
                    درس {id}
                  </Badge>
                  {/* <Text color="gray" size="2">
                      {content.wordMeanings.length} الفاظ
                    </Text> */}
                </Flex>
                <Box>
                  <Heading size="6" mb="2">
                    {arabicTitle}
                  </Heading>
                  <Text color="gray" size="2">
                    {title}
                  </Text>
                </Box>
                <Flex
                  justify="between"
                  align="center"
                  className="border-t border-stone-200 pt-4"
                >
                  <Link href={`/course/hewarat/${slug}`} aria-hidden="true">
                    <Text size="2" weight="bold" color="orange">
                      سبق کھولیے
                    </Text>
                  </Link>
                  <Text size="5" color="orange" aria-hidden="true">
                    &#8592;
                  </Text>
                  <Link
                    href={`/course/hewarat/edit?lessonId=${id}`}
                    aria-hidden="true"
                  >
                    Edit
                  </Link>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HewaratLessonsList;
