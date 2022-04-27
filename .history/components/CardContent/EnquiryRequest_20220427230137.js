import { FilterList } from "../Filter/FilterList";
import { EnquiryCard } from "./EnquiryCard";
export const EnquiryRequest = () => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-4 h-auto pb-20 pt-10 px-10 z-10 lg:gap-20 relative w-full bg-gray-200">
      <FilterList show="hidden lg:block " />
      <EnquiryCard enqStyle='lg:cols'/>
    </div>
  );
};
