import React from "react";
import ListLink from "./ListLink";
const CatList = ({ allCatLinkData }) => {
  return (
    <div className="relative  bg-red-900">
      <div className="container mx-auto relative ">
        <ListLink data={allCatLinkData} />
      </div>
    </div>
  );
};

export default CatList;
