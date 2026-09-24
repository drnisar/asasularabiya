"use client";
import { use, useActionState, useEffect, useState } from "react";
import { Button, Container, TextArea, TextField } from "@radix-ui/themes";
import { useSearchParams, useRouter } from "next/navigation";
import { createLesson, updateLesson } from "@/app/course/actions/lesson";
// import type { Lesson } from "@prisma/client";

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
  const [editMode, setEditMode] = useState(false);
  const [state, formAction, isPending] = useActionState(
    (_state: typeof initialState, formData: FormData) =>
      editMode
        ? updateLesson(formData, lesson?.id ?? 0)
        : createLesson(formData),
    initialState,
  );

  useEffect(() => {
    if (lesson) {
      setEditMode(true);
    }
  }, [lesson]);
  useEffect(() => {
    if (state.success) {
      // router.replace(window.location.pathname);
      router.push(`/course/tajweed`);
      //   router.back();
    }
  }, [state.success]);
  return (
    <>
      <Container>
        <form action={formAction}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <TextField.Root
                name="subjectId"
                placeholder="Subject ID"
                value={subjectId}
                readOnly
              />
            </div>
            <div className="">
              <TextField.Root
                name="title"
                placeholder="انگلش ٹائیٹل"
                defaultValue={lesson?.title ?? ""}
              />
            </div>
            <div className="">
              <TextField.Root
                name="arabicTitle"
                placeholder="عربی ٹائیٹل"
                defaultValue={lesson?.arabicTitle ?? ""}
              />
            </div>
            <div className="">
              <TextField.Root
                name="slug"
                placeholder="سلگ"
                defaultValue={lesson?.slug ?? ""}
              />
            </div>
            <div className="">
              <TextField.Root
                name="note"
                placeholder="نوٹ"
                defaultValue={lesson?.note ?? ""}
              />
            </div>
            <div>
              <TextArea
                name="definition"
                placeholder="تعریف"
                defaultValue={lesson?.definition ?? ""}
              />
            </div>
            <div>
              <TextArea
                name="explanation"
                placeholder="تفصیل"
                defaultValue={lesson?.explanation ?? ""}
              />
            </div>
            <div>
              <TextArea
                name="examples"
                placeholder="مثالیں"
                defaultValue={lesson?.examples ?? ""}
              />
            </div>
          </div>
          <div>
            <Button type="submit">
              {isPending
                ? "Creating..."
                : editMode
                  ? "Update Lesson"
                  : "Create Lesson"}
            </Button>
          </div>
          {state.message && (
            <div style={{ color: state.success ? "green" : "red" }}>
              {state.message}
            </div>
          )}
        </form>
      </Container>
    </>
  );
};

export default DefinitionEntryForm;
