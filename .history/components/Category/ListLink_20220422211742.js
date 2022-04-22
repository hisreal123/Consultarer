import Link from "next/link";
import React from "react";

const ListLink = ({ data }) => {
  return (
    <div className="relative ">
      <ul className=" bg-red-200 w-100 flex whitespace-nowrap px-10 sm:px-20 space-x-10 sm:space-x-20 overflow-x-auto ">
        {data.map((list) => (
          <Link href="#" key={list.id}>
            <a>
              <li key={list.id}>{list.Category}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ListLink;
