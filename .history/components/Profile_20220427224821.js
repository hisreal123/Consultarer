import React from "react";
import ProfilePic from "../public/img/unsplash_x9cXI2eQLBw.svg";

export const Profile = ({ position, appear }) => {
  return (
    <div
      className={` group right-0 pr-2  transition duration-150 ${position}`}
    >
      <ProfilePic className="text-3xl group:hover:shadow-lg " />
      <span className={`bg-green-600 h-2 w-2 absolute z-10 bottom-1 right-2  lg:hidden  rounded-full ${appear}`}></span>
    </div>
  );
};