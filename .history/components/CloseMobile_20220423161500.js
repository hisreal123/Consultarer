import React from "react";

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
