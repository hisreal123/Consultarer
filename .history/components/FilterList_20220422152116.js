import { FilterCheckBox } from "./FilterCheckBox";

export const FilterList = ({ filStyle }) => {
  return (
    <div className="">
      <h3 className={filStyle}> Filter by</h3>

      <FilterCheckBox OptionTitle="Online Staus" />
      <FilterCheckBox OptionTitle="Type of user" />
      <FilterCheckBox OptionTitle="Category" />
      <FilterCheckBox OptionTitle="Subcategory" />
      <FilterCheckBox OptionTitle="State" />
      <FilterCheckBox OptionTitle="Online Staus" />
      <FilterCheckBox OptionTitle="Online Staus" />
    </div>
  );
};
