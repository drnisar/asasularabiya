"use client";
import { Button } from "@radix-ui/themes";
import React from "react";
import { deleteWordMeaning } from "@/app/course/actions/wordMeaning";
import { useRouter } from "next/navigation";

const ButtonDeleteWordMeaning = ({ id }: { id: number }) => {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      onClick={async () => {
        // Implement the delete logic here
        try {
          // Call the delete function here
          await deleteWordMeaning(id); // Replace `meaningId` with the actual ID of the word meaning to delete
          router.refresh();
        } catch (error) {
          console.error("Failed to delete word meaning:", error);
        }
      }}
    >
      Delete
    </Button>
  );
};

export default ButtonDeleteWordMeaning;
