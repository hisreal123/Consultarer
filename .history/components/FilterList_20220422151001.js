import { FilterCheckBox } from "./FilterCheckBox";

export const FilterList = ({ filStyle }) => {

  return (
    <div className="">
      <h3 className={filStyle}> Filter by</h3>

      <FilterCheckBox  OptionTitle=' '/> 
    </div>
  );
};
