"use client";
import { Box, Button, Container, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

type SentencePair = {
  arabic: string;
  urdu: string;
};

interface Props {
  sentencePairs: SentencePair[];
}
const SentenceTranslation = ({ sentencePairs }: Props) => {
  const [rowNumber, setRowNumber] = useState<number | null>(null);
  const [language, setLanguage] = useState<"arabic" | "urdu">("urdu");

  const toggleRow = (index: number) => {
    setRowNumber((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Container>
        <Button
          onClick={() => setLanguage(language === "arabic" ? "urdu" : "arabic")}
          my="3"
          mx="6"
        >
          {language === "arabic"
            ? "عربی میں تبدیل کریں"
            : "اردو میں تبدیل کریں"}
        </Button>
        <Box p={{ initial: "3", sm: "5" }}>
          {sentencePairs.map((s, index) => {
            const isRevealed = rowNumber === index;
            return (
              <Flex
                key={index}
                mb="2"
                px="4"
                justify="between"
                align="center"
                maxWidth="468px"
                className="border-b-gray-500 shadow-sm"
              >
                <Text
                  size={{ initial: "3", sm: "4", md: "5" }}
                  weight={isRevealed ? "bold" : "regular"}
                >
                  {isRevealed
                    ? s[language]
                    : s[language === "arabic" ? "urdu" : "arabic"]}
                </Text>
                <Button
                  size="2"
                  variant="ghost"
                  onClick={() => toggleRow(index)}
                >
                  {isRevealed ? "چھپائیں" : "دکھائیں"}
                </Button>
              </Flex>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default SentenceTranslation;
