import { useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";
// import { HeartIcon as HeartSolid } from "@heroicons/react/Solid";

export const HeartLike = () => {
  const [swapIcon, setSwapIcon] = useState(false);
  return (
    <div
      className={`heart absolute w-7 top-2 right-2 `}
      onClick={() => setSwapIcon(!swapIcon)}
    >
      {swapIcon
        ? '<HeartIcon className="text-white relative hover:text-red-500 " />'
        : '<HeartSolid className="text-white relative hover:text-red-500 " />'}
    </div>
  );
};
