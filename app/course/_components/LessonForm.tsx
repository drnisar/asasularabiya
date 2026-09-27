"use client";

import { Button, Container, TextField } from "@radix-ui/themes";
import React from "react";
import { useRouter } from "next/navigation";
import type { Lesson } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";

import {
  createLessonAction,
  updateLessonAction,
} from "@/app/course/actions/lesson";
import MarkdownEditor from "./MarkdownEditor";

interface Props {
  subjectId: number;
  lesson?: Lesson;
  mode: "create" | "edit";
  id?: number;
}

const LessonForm = ({ subjectId, lesson, mode, id }: Props) => {
  const router = useRouter();

  const { register, handleSubmit, control } = useForm<Lesson>({
    defaultValues: {
      subjectId,

      title: lesson?.title ?? "",
      arabicTitle: lesson?.arabicTitle ?? "",
      slug: lesson?.slug ?? "",

      definition: lesson?.definition ?? "",
      explanation: lesson?.explanation ?? "",
      examples: lesson?.examples ?? "",
      note: lesson?.note ?? "",
    },
  });

  const onSubmit = async (data: Lesson) => {
    try {
      if (mode === "edit") {
        if (!id) {
          console.error("Lesson ID is missing");
          return;
        }

        await updateLessonAction(data, id);
      } else {
        await createLessonAction(data);
      }

      router.push("/course/hewarat");
      router.refresh();
    } catch (error) {
      console.error("Failed to save lesson:", error);
    }
  };

  return (
    <Container px="5">
      <div style={{ marginBottom: "1rem" }}>
        <h2>{mode === "edit" ? "Edit Lesson" : "Create Lesson"}</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* Subject ID */}
          <TextField.Root
            {...register("subjectId", {
              valueAsNumber: true,
            })}
            value={subjectId}
            readOnly
          />

          {/* Title */}
          <TextField.Root {...register("title")} placeholder="انگلش ٹائیٹل" />

          {/* Arabic Title */}
          <TextField.Root
            {...register("arabicTitle")}
            placeholder="عربی ٹائیٹل"
          />

          {/* Slug */}
          <TextField.Root {...register("slug")} placeholder="سلگ" />

          {/* Definition */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Definition
            </label>

            <Controller
              name="definition"
              control={control}
              render={({ field }) => (
                <MarkdownEditor
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  placeholder="Enter lesson definition..."
                />
              )}
            />
          </div>

          {/* Explanation */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Explanation
            </label>

            <Controller
              name="explanation"
              control={control}
              render={({ field }) => (
                <MarkdownEditor
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  placeholder="Enter lesson explanation..."
                />
              )}
            />
          </div>

          {/* Examples */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Examples
            </label>

            <Controller
              name="examples"
              control={control}
              render={({ field }) => (
                <MarkdownEditor
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  placeholder="Enter examples..."
                />
              )}
            />
          </div>

          {/* Note */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Note
            </label>

            <Controller
              name="note"
              control={control}
              render={({ field }) => (
                <MarkdownEditor
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  placeholder="Enter notes..."
                />
              )}
            />
          </div>

          {/* Submit */}
          <div>
            <Button type="submit">
              {mode === "edit" ? "Update Lesson" : "Create Lesson"}
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default LessonForm;
