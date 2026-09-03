import React from "react";
import ContentList from "../_components/ContentList";
import qiratUrRashida from "@/public/data/qirat-ur-rashida/index.json";

const QiratulRashidaPage = () => {
  return (
    <>
      <ContentList contents={qiratUrRashida} slugPrefix="qiratul-rashida/" />
    </>
  );
};

export default QiratulRashidaPage;
