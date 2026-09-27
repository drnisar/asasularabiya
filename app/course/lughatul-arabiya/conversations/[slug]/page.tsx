import conversations from "@/public/data/lughatularabiya/conversations.json";
import ContentList from "@/app/course/_components/ContentList";

const PageLughatulArabiyaConversationsD = async () => {
  return <ContentList contents={conversations.conversations} />;
};

export default PageLughatulArabiyaConversationsD;
