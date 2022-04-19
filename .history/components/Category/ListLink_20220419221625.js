import Link from "next/link";
import React from "react";
import CatLinkData from "../../utils/CatLinkdata";

export const getStaticProps = async () => {
  return {
    props: {
      data: CatLinkData,
    },
  };
};

const ListLink = (data) => {
  return (
    <div className="relative ">
      <ul className=" bg-red-200 w-full inline-flex justify-between">
        {data.map(list => (
          <
        ))}
      </ul>
    </div>
  );
};

export default ListLink;
