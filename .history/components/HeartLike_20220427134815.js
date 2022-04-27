import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as heartSolid } from "@heroicons/react/Solid";

import React from "react";

export const HeartLike = () => {
  return (
    <div className={`heart absolute w-7 top-2 right-2  `}>
      <HeartIcon className="text-white relative hover:text-red-500 " />
    </div>
  );
};
