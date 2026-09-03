import { Box, Container, Heading, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

type Content = {
  id: number;
  slug: string;
  slugPrefix?: string;
  arabicTitle: string;
  title: string;
};

interface Props {
  contents: Content[];
  title?: string;
  arabicTitle?: string;
  slugPrefix?: string;
}

const ContentList = ({ contents, title, arabicTitle, slugPrefix }: Props) => {
  return (
    <Box py={{ initial: "6", sm: "8" }}>
      <Container size="3" px={{ initial: "4", sm: "6" }}>
        <Box mb={{ initial: "6", sm: "8" }}>
          <Text as="p" color="orange" size="2" weight="bold" mb="2">
            فہرست مضامین
          </Text>
          <Heading size={{ initial: "7", sm: "9" }}>
            {arabicTitle ?? "لغۃ العربیۃ"}
          </Heading>
        </Box>

        <Card size={{ initial: "1", sm: "2" }}>
          <Flex direction="column" gap="2">
            {contents.map((content) => (
              <Link
                href={`/course/${slugPrefix ?? ""}${content.slug}`}
                key={content.id}
              >
                <Flex
                  align="center"
                  gap={{ initial: "3", sm: "5" }}
                  justify="between"
                  p={{ initial: "3", sm: "4" }}
                  className="border border-transparent transition-colors hover:border-orange-300 hover:bg-orange-50"
                >
                  <Text
                    color="orange"
                    weight="bold"
                    style={{ minWidth: "2rem" }}
                  >
                    {String(content.id).padStart(2, "0")}
                  </Text>
                  <Box style={{ flex: 1 }}>
                    <Heading size={{ initial: "4", sm: "5" }}>
                      {content.arabicTitle}
                    </Heading>
                    <Text color="gray" size={{ initial: "1", sm: "2" }}>
                      {content.title}
                    </Text>
                  </Box>
                  <Text color="orange" size="5" aria-hidden="true">
                    &#8592;
                  </Text>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Card>
      </Container>
    </Box>
  );
};

export default ContentList;
