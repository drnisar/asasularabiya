"use client";
import { Button, Container, TextField, TextArea } from "@radix-ui/themes";
import React, { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import type { Lesson } from "@prisma/client";
import { useForm } from "react-hook-form";
import {
  createLessonAction,
  updateLesson,
  updateLessonAction,
} from "@/app/course/actions/lesson";

const initialState = {
  message: "",
  success: false,
};
interface Props {
  subjectId: number;
  lesson?: Lesson;
  mode: "create" | "edit";
  id?: number;
}

const LessonForm = ({ subjectId, lesson, mode, id }: Props) => {
  const { register, handleSubmit } = useForm<Lesson>({
    defaultValues: {
      subjectId,
      title: lesson?.title ?? "",
      arabicTitle: lesson?.arabicTitle ?? "",
      slug: lesson?.slug ?? "",
      definition: lesson?.definition ?? "",
      explanation: lesson?.explanation ?? "",
      note: lesson?.note ?? "",
      examples: lesson?.examples ?? "",
    },
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    if (mode === "edit") {
      updateLessonAction(data, id!);
    } else {
      createLessonAction(data);
    }
    console.log(data as Lesson);
    router.push("/course/hewarat");
  };

  return (
    <Container px="5">
      <div>Lesson Form</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <TextField.Root
              {...register("subjectId")}
              name="subjectId"
              placeholder="Subject ID"
              value={subjectId}
              readOnly
            />
          </div>
          <div className="">
            <TextField.Root
              {...register("title")}
              name="title"
              placeholder="انگلش ٹائیٹل"
              defaultValue={lesson?.title ?? ""}
            />
          </div>
          <div className="">
            <TextField.Root
              {...register("arabicTitle")}
              name="arabicTitle"
              placeholder="عربی ٹائیٹل"
              defaultValue={lesson?.arabicTitle ?? ""}
            />
          </div>
          <div className="">
            <TextField.Root
              {...register("slug")}
              name="slug"
              placeholder="سلگ"
              defaultValue={lesson?.slug ?? ""}
            />
          </div>
        </div>
        <div>
          <Button type="submit">
            {mode === "edit" ? "Update Lesson" : "Create Lesson"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default LessonForm;
