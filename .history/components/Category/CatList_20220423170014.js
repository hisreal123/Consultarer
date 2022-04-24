import React from "react";
import ListLink from "./ListLink";
const CatList = ({ allCatLinkData }) => {
  return (
    <div className="relative  overflow-hidden ">
      <div className="container mx-auto relative lg: ">
        <ListLink data={allCatLinkData} />
      </div>
    </div>
  );
};

export default CatList;
