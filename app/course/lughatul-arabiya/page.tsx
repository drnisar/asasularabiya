import contentsList from "@/public/data/lughatularabiya/contentsList.json";
import ContentList from "../_components/ContentList";

const PageLughatulArabiya = () => {
  return <ContentList contents={contentsList.contents} />;
};

export default PageLughatulArabiya;
