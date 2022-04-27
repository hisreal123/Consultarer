import React from "react";
import { FilterList } from "../Filter/FilterList";
import { UserCards } from "./UserCard";
export const ConsultUsers = () => {
  return 
    <div className="grid grid-cols-2 relative w-full bg-red-300">
      <FilterList />
      <UserCards />
    </div>
  );
};
