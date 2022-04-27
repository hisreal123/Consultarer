import React from "react";
import { FilterList } from "../Filter/FilterList";
import { UserCard } from "./UserCard";
export const ConsultUsers = () => {
  return (
    <div className="grid grid-cols-4 pt-10 px-20 z-10 gap-20 relative w-full bg-gray-200">
      <FilterList />
      <div className="useCard col-span-3">
        <UserCard userStyle="" />
      </div>
    </div>
  );
};
