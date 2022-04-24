import React from "react";

import { GrFormClose } from "react-icons/gr";
export const CloseMobile = ({}) => {
  return (
    <div>
      {" "}
      <GrFormClose
        className="text-3xl"
        onClick={() => setOpenSideBar(!openSideBar)}
      />
    </div>
  );
};
