import React from "react";
import { ContentCard } from "./ContentCard";

export const Content = () => {
  return (
    <div className="relative max-w-screen overflow-hidden lg:grid grid-cols-3">
      <h2> Content Filter section to right </h2>
      <div className="contentCard col-span-2 bg-red-300">
        <ContentCard />
      </div>
    </div>
  );
};
