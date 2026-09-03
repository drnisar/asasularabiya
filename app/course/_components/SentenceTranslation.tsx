"use client";
import { Box, Button, Card, Table, Text } from "@radix-ui/themes";
import React, { useState } from "react";

type SentencePair = {
  arabic: string;
  urdu: string;
};

const sentence: SentencePair[] = [
  {
    arabic: "اذھب",
    urdu: "میں جاتا ہوں",
  },
  {
    arabic: "أنا ذاهب",
    urdu: "میں جا رہا ہوں",
  },
];
const SentenceTranslation = () => {
  const [revealedRows, setRevealedRows] = useState<number[]>([]);

  const toggleRow = (index: number) => {
    setRevealedRows((rows) =>
      rows.includes(index)
        ? rows.filter((row) => row !== index)
        : [...rows, index],
    );
  };

  return (
    <Box p={{ initial: "3", sm: "5" }}>
      <Card size={{ initial: "1", sm: "2" }}>
        <Table.Root variant="surface" size={{ initial: "1", sm: "2" }}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell
                style={{ width: "1%", whiteSpace: "nowrap" }}
              >
                #
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>جملہ</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>عمل</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sentence.map((sentencePair, index) => {
              const isRevealed = revealedRows.includes(index);
              return (
                <Table.Row key={sentencePair.arabic}>
                  <Table.RowHeaderCell style={{ whiteSpace: "nowrap" }}>
                    <Text color="gray">{index + 1}</Text>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Text
                      size={{ initial: "3", sm: "4" }}
                      weight={isRevealed ? "bold" : "regular"}
                    >
                      {isRevealed ? sentencePair.arabic : sentencePair.urdu}
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color="orange"
                      size={{ initial: "1", sm: "2" }}
                      variant={isRevealed ? "soft" : "solid"}
                      onClick={() => toggleRow(index)}
                    >
                      {isRevealed ? "اردو" : "عربی"}
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </Card>
    </Box>
  );
};

export default SentenceTranslation;
