import React from "react";
import { ContentCard } from "./ContentCard";
import { FilterList } from "./FilterList";

export const Content = () => {
  return (
    <div className="relative max-w-screen overflow-hidden lg:grid grid-cols-3 container mx-auto gap ">
      <FilterList />
      <div className="contentCard col-span-2 bg-red-300">
        <ContentCard />
      </div>
    </div>
  );
};
