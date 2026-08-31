import { Container } from "@radix-ui/themes";
import WordMeaning from "../../_components/WordMeaning";
import hewaratData from "@/public/data/hewarat.json"

type HewaratDynamicPageProps = {
  params: Promise<{ slug: string }>;
};

const HewaratDynamicPage = async ({ params }: HewaratDynamicPageProps) => {
  const { slug } = await params;

  const lessonContent = await hewaratData.filter(lesson=>lesson.slug === slug)

  return (
    <main>
<div className="items-center flex flex-col">
      <h1>{lessonContent[0]?.title}</h1>
      <h2>{lessonContent[0]?.arabicTitle}</h2>

</div>
      <WordMeaning wordMeaningArray={lessonContent[0]?.content?.wordMeanings}  />
    </main>
  );
};

export default HewaratDynamicPage;