import React from "react";
import ProfilePic from "../components/svgs/unsplash_x9cXI2eQLBw.svg";

export const Profile = () => {
  return (
    <div className="absolute right-0 pr-2 md:hidden">
      <ProfilePic className="text-3xl " />
      <span className="bg-green-600 h-2 w-2 absolute z-10 bottom-1 right-2  rounded-full "></span>
    </div>
  );
};
