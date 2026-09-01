import React from "react";
import contentJson from "@/public/data/lughatularabiya/contentsList.json";

type contentJson = {
  id: string;
  title: string;
  slug: string;
  contents?: { id: string; title: string }[];
}[];

const LughatulArabiyaPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  return (
    <div>
      <h1>
        {Array.isArray(contentJson) && slug === "content"
          ? contentJson.filter((c) => c.slug === slug)[0]?.title ||
            "Lughatul Arabiya Course Page"
          : "Lughatul Arabiya Course Page"}
      </h1>
      ;
      <ul>
        {Array.isArray(contentJson)
          ? contentJson
              .filter((c) => c.slug === slug)
              .flatMap((c) => c.contents ?? [])
              .map((content) => <li key={content.id}>{content.title}</li>)
          : null}
      </ul>
    </div>
  );
};

export default LughatulArabiyaPage;
