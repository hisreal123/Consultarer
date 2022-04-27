import { FilterList } from "../Filter/FilterList";
import { Cards } from "./UserCards";
export const EnquiryRequest = () => {
  return (
    <div className="grid grid-cols-2 relative w-full bg-green-300">
    <FilterList />
      <Cards />
    </div>
  );
};
