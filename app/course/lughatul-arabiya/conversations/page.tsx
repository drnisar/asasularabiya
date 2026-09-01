import React from "react";
import conversations from "@/public/data/lughatularabiya/conversations.json";
import ContentList from "../../_components/ContentList";
const PageConversations = () => {
  return (
    <ContentList
      title={conversations.title}
      arabicTitle={conversations.arabicTitle}
      contents={conversations.conversations}
    />
  );
};

export default PageConversations;
