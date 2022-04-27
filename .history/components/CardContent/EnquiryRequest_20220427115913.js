import { FilterList } from "../Filter/FilterList";
import { EnquiryCard } from "./EnquiryCard";
export const EnquiryRequest = () => {
  return (
    <div className="grid sm:grid-cols-1  lg:grid-cols-4 pt-10 px-20 z-10 lg:gap-20 relative w-full bg-gray-200">
      <FilterList />
      
      <EnquiryCard />
    </div>
  );
};
