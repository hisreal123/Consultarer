import React from "react";

function Divider({setStyle}) {
  return <div className={`divider h-[0.08px] w-full bg-gray-300 ${setStyle}`}></div>;
}

export default Divider;
