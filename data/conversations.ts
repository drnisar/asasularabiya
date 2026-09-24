import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import conversationsIndex from "@/public/data/lughatularabiya/conversations/index.json";

export type SentencePair = {
  arabic: string;
  urdu: string;
};

export async function getConversation(slug: string) {
  const conversation = conversationsIndex.find((item) => item.slug === slug);

  if (!conversation) return undefined;

  const filename = path.basename(conversation.content);
  const filePath = path.join(
    process.cwd(),
    "public/data/lughatularabiya/conversations",
    filename,
  );
  const fileContents = await readFile(filePath, "utf8");
  const content = fileContents.trim()
    ? (JSON.parse(fileContents) as SentencePair[])
    : [];

  return { ...conversation, content };
}

export async function getConversations() {
  const conversations = await Promise.all(
    conversationsIndex.map((conversation) =>
      getConversation(conversation.slug),
    ),
  );

  return conversations.filter(
    (conversation): conversation is NonNullable<typeof conversation> =>
      Boolean(conversation),
  );
}
