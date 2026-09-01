import React from "react";
import conversations from "@/public/data/lughatularabiya/conversations.json";
import ContentList from "@/app/course/_components/ContentList";

const PageLughatulArabiyaConversationsD = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = await params;

  return <ContentList contents={conversations.conversations} />;
};

export default PageLughatulArabiyaConversationsD;
