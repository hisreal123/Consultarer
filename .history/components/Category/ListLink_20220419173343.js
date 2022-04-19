import Link from "next/link";
import React from "react";
import CatLinkData from '../../utils/CatLinkdata'

const ListLink = () => {
  return (
    <div className="relative ">
      <ul className=" bg-red-200 w-full inline-flex justify-between">
      {CatLinkData.map(())}
      </ul>
    </div>
  );
};

export default ListLink;
