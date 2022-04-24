import React from "react";
import ListLink from "./ListLink";
const CatList = ({ allCatLinkData }) => {
  return (
    <div className="relative  overflow-hidden ">
      <div className="container sm:mx-auto relative lg:ml-0  lg:mr-0">
        <ListLink data={allCatLinkData} />
      </div>
    </div>
  );
};

export default CatList;
