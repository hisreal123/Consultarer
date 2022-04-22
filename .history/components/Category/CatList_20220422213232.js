import React from "react";
import ListLink from "./ListLink";
const CatList = ({ allCatLinkData }) => {
  return (
    <div className="relativ  overflow-hidden ">
      <div className="container mx-auto relative ">
        <ListLink data={allCatLinkData} />
      </div>
    </div>
  );
};

export default CatList;
