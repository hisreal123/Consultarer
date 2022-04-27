import React from "react";
import { FilterList } from "../Filter/FilterList";
import { UserCard } from "./UserCard";
export const ConsultUsers = () => {
  return (
    <div className="grid sm:grid-cols-2 relative pt-10 px-20 z-10 lg:gap-20 relative w-full bg-gray-200">
      <FilterList show="hidden lg:block" />
      <div className="useCard col-span-3 sm:cols-span-2">
        <UserCard userStyle="" />
      </div>
    </div>
  );
};
