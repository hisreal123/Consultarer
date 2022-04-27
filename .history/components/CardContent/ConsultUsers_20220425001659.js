import React from "react";
import { FilterList } from "../Filter/FilterList";
import { UserCard } from "./UserCard";
export const ConsultUsers = () => {
  return (
    <div className="grid grid-cols-2 relative w-full bg-gray-200">
      <FilterList />
      <UserCard inStyle="grid grid-cols-4 gap-5" />
    </div>
  );
};
