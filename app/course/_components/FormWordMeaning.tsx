"use client";

import { Box, Button, Flex, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { createWordMeaning } from "@/app/course/actions/wordMeaning";
import type { WordMeaning } from "@prisma/client";
import { useRouter } from "next/navigation";
interface Props {
  lessonId: number;
}
const FormWordMeaning = ({ lessonId }: Props) => {
  const { register, handleSubmit, reset, setFocus } = useForm<WordMeaning>();
  const router = useRouter();

  const onSubmit = async (data: WordMeaning) => {
    console.log({ ...data, lessonId });
    try {
      await createWordMeaning({ ...data, lessonId });
      reset();
      requestAnimationFrame(() => setFocus("arabic"));
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Box px={{ initial: "4", sm: "6" }} mx="auto" maxWidth="900px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap="2" align="end">
            <label>
              عربی
              <TextField.Root {...register("arabic")} />
            </label>
            <label>
              اردو
              <TextField.Root {...register("urdu")} />
            </label>
            <Button type="submit" id="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default FormWordMeaning;
