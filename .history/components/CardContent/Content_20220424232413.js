import React from "react";
import  
import { FilterList } from "../Filter/FilterList";

export const Content = () => {
  return (
    <div className="relative max-w-screen overflow-hidden lg:grid grid-cols-3 container mx-auto gap-8 lg:bg-gray-100 ">
      <FilterList />
      <div className="contentCard col-span-2 bg-red-300">
      <ContentTab />
      </div>
    </div>
  );
};
