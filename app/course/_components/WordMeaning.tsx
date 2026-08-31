"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Table,
  Text,
} from "@radix-ui/themes";
import { useState } from "react";

type WordMeaning = {
  word: string;
  meaning: string;
};

interface Props {
  wordMeaningArray: WordMeaning[];
}

const WordMeaning = ({ wordMeaningArray }: Props) => {
  const [direction, setDirection] = useState<
    "arabic-to-urdu" | "urdu-to-arabic"
  >("arabic-to-urdu");
  const [revealedWord, setRevealedWord] = useState<string | null>(null);
  const isArabicToUrdu = direction === "arabic-to-urdu";

  const changeDirection = (
    nextDirection: "arabic-to-urdu" | "urdu-to-arabic",
  ) => {
    setDirection(nextDirection);
    setRevealedWord(null);
  };

  return (
    <Box
      px={{ initial: "3", sm: "6" }}
      py="6"
      mx="auto"
      maxWidth="900px"
      width="100%"
    >
      <Flex justify="between" align="center" mb="4" gap="3" wrap="wrap">
        <Box>
          <Text as="p" size="2" color="orange" weight="bold">
            الفاظ و معانی
          </Text>
          <Heading size={{ initial: "6", sm: "7" }}>
            الفاظ اور ان کے معنی
          </Heading>
        </Box>
        <Badge size="2" color="orange" variant="soft">
          {wordMeaningArray.length} الفاظ
        </Badge>
      </Flex>

      <Flex gap="2" mb="4" role="group" aria-label="ترجمے کی سمت">
        <Button
          color="orange"
          variant={isArabicToUrdu ? "solid" : "soft"}
          onClick={() => changeDirection("arabic-to-urdu")}
        >
          عربی سے اردو
        </Button>
        <Button
          color="orange"
          variant={!isArabicToUrdu ? "solid" : "soft"}
          onClick={() => changeDirection("urdu-to-arabic")}
        >
          اردو سے عربی
        </Button>
      </Flex>

      <Card size={{ initial: "1", sm: "3" }} dir="rtl">
        <Table.Root variant="surface" size={{ initial: "1", sm: "2" }}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>عمل</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>اردو معنی</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>عربی لفظ</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {wordMeaningArray.map(({ word, meaning }, index) => {
              const isRevealed = revealedWord === word;
              const urduValue = isArabicToUrdu && !isRevealed ? "۔۔۔" : meaning;
              const arabicValue = !isArabicToUrdu && !isRevealed ? "۔۔۔" : word;
              return (
                <Table.Row key={word}>
                  <Table.Cell>
                    <Button
                      aria-label={`${word} کا ترجمہ ${isRevealed ? "چھپائیں" : "دکھائیں"}`}
                      color="orange"
                      highContrast
                      size={{ initial: "1", sm: "2" }}
                      variant={isRevealed ? "soft" : "solid"}
                      onClick={() => setRevealedWord(isRevealed ? null : word)}
                    >
                      {isRevealed ? "چھپائیں" : "دکھائیں"}
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Text
                      size={{ initial: "3", sm: "4" }}
                      weight={isArabicToUrdu && isRevealed ? "bold" : "regular"}
                    >
                      {urduValue}
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text
                      size={{ initial: "4", sm: "5" }}
                      weight={
                        !isArabicToUrdu && isRevealed ? "bold" : "regular"
                      }
                    >
                      {arabicValue}
                    </Text>
                  </Table.Cell>
                  <Table.RowHeaderCell style={{ whiteSpace: "nowrap" }}>
                    <Text color="gray">{index + 1}</Text>
                  </Table.RowHeaderCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </Card>
    </Box>
  );
};

export default WordMeaning;
