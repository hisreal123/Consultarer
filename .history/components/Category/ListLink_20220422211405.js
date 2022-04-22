import Link from "next/link";
import React from "react";

const ListLink = ({ data }) => {
  return (
    <div className="relative ">
      <ul className=" bg-red-200 w-100 flex whitespace-nowrap px-10  ">
        {data.map((list) => (
          <li key={list.id}>{list.Category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListLink;
