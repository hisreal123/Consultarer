import React from "react";
import ListLink from "./ListLink";
const CatList = ({ allCatLinkData }) => {
  returnexport async function getStaticProps() {
    return {
      props: {
        data: CatLinkData,
      },
      revalidate: 4 * 60 * 60,
    };
  }
   (
    <div className="relative  bg-red-900">
      <div className="container mx-auto relative">
        <ListLink data={ allCatLinkData }/>
      </div>
    </div>
  );
};

export default CatList;
