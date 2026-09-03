import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import qiratIndex from "@/public/data/qirat-ur-rashida/index.json";

type WordMeaning = {
  word: string;
  meaning: string;
};

type LessonContent = {
  wordMeanings: WordMeaning[];
};

export async function getQiratLesson(slug: string) {
  const lesson = qiratIndex.find((item) => item.slug === slug);

  if (!lesson) return undefined;

  const filename = path.basename(lesson.content);
  const filePath = path.join(
    process.cwd(),
    "public/data/qirat-ur-rashida",
    filename,
  );
  const content = JSON.parse(await readFile(filePath, "utf8")) as LessonContent;

  return { ...lesson, content };
}
