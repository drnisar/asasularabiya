"use client";

import { useActionState, useEffect, useState } from "react";
import { Button, Container, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

import { createLesson, updateLesson } from "@/app/course/actions/lesson";
import MarkdownEditor from "../_components/MarkdownEditor";

const initialState = {
  success: false,
  message: "",
};

interface Lesson {
  id?: number;
  title?: string;
  arabicTitle?: string;
  slug?: string;
  note?: string;
  definition?: string;
  explanation?: string;
  examples?: string;
}

interface Props {
  subjectId: number;
  lesson?: Lesson;
}

const DefinitionEntryForm = ({ subjectId, lesson }: Props) => {
  const router = useRouter();

  const editMode = Boolean(lesson);
  // Markdown editor values
  const [definition, setDefinition] = useState(lesson?.definition ?? "");

  const [explanation, setExplanation] = useState(lesson?.explanation ?? "");

  const [examples, setExamples] = useState(lesson?.examples ?? "");

  const [note, setNote] = useState(lesson?.note ?? "");

  const [state, formAction, isPending] = useActionState(
    (_state: typeof initialState, formData: FormData) =>
      editMode
        ? updateLesson(formData, lesson?.id ?? 0)
        : createLesson(formData),
    initialState,
  );

  // useEffect(() => {
  //   if (lesson) {
  //     setEditMode(true);

  //     setDefinition(lesson.definition ?? "");
  //     setExplanation(lesson.explanation ?? "");
  //     setExamples(lesson.examples ?? "");
  //     setNote(lesson.note ?? "");
  //     console.log("lesson.examples from state", examples);
  //   }
  // }, [lesson]);

  useEffect(() => {
    if (state.success) {
      router.push("/course/tajweed");
    }
  }, [state.success, router]);

  return (
    <Container>
      <form action={formAction}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* Subject ID */}
          <TextField.Root
            name="subjectId"
            placeholder="Subject ID"
            value={subjectId}
            readOnly
          />

          {/* Title */}
          <TextField.Root
            name="title"
            placeholder="انگلش ٹائیٹل"
            defaultValue={lesson?.title ?? ""}
          />

          {/* Arabic Title */}
          <TextField.Root
            name="arabicTitle"
            placeholder="عربی ٹائیٹل"
            defaultValue={lesson?.arabicTitle ?? ""}
          />

          {/* Slug */}
          <TextField.Root
            name="slug"
            placeholder="سلگ"
            defaultValue={lesson?.slug ?? ""}
          />

          {/* Note */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              نوٹ
            </label>

            <MarkdownEditor
              value={note}
              onChange={setNote}
              placeholder="نوٹ درج کریں..."
            />

            {/* Send Markdown value with FormData */}
            <input type="hidden" name="note" value={note} />
          </div>

          {/* Definition */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              تعریف
            </label>

            <MarkdownEditor
              value={definition}
              onChange={setDefinition}
              placeholder="تعریف درج کریں..."
            />

            <input type="hidden" name="definition" value={definition} />
          </div>

          {/* Explanation */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              تفصیل
            </label>

            <MarkdownEditor
              value={explanation}
              onChange={setExplanation}
              placeholder="تفصیل درج کریں..."
            />

            <input type="hidden" name="explanation" value={explanation} />
          </div>

          {/* Examples */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              مثالیں
            </label>

            <MarkdownEditor
              value={examples}
              onChange={setExamples}
              placeholder="مثالیں درج کریں..."
            />

            <input type="hidden" name="examples" value={examples} />
          </div>
        </div>

        {/* Submit */}
        <div style={{ marginTop: "1rem" }}>
          <Button type="submit" disabled={isPending}>
            {isPending
              ? editMode
                ? "Updating..."
                : "Creating..."
              : editMode
                ? "Update Lesson"
                : "Create Lesson"}
          </Button>
        </div>

        {/* Action message */}
        {state.message && (
          <div
            style={{
              marginTop: "1rem",
              color: state.success ? "green" : "red",
            }}
          >
            {state.message}
          </div>
        )}
      </form>
    </Container>
  );
};

export default DefinitionEntryForm;
