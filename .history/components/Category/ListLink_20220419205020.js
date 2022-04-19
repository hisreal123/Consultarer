import Link from "next/link";
import React from "react";
import CatLinkData from "../../utils/CatLinkdata";

const ListLink = () => {
  const data = CatLinkData;

  return (
    <div className="relative ">
      <ul className=" bg-red-200 w-full inline-flex justify-between">
        {(data.map((link, index) => (
          <span key={link.id}>{link.Category}</span>
        ))}
      </ul>
    </div>
  );
};

export default ListLink;
