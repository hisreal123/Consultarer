import Divider from "./divider";
import { FilterCheckBox } from "./FilterCheckBox";
import Sortby from "./Sortby";

export const FilterList = ({ filStyle }) => {
  return (
    <div className=" bg-gray-100 px-">
      <h3 className={filStyle}> Filter by</h3>

      <div className="wrap px-2">
        <FilterCheckBox OptionTitle="Online Status" />
        <FilterCheckBox OptionTitle="Type of user" />
        <FilterCheckBox OptionTitle="Category" />
        <FilterCheckBox OptionTitle="Subcategory" />
        <FilterCheckBox OptionTitle="State/Province" />
        <FilterCheckBox OptionTitle="Language" />

        {/*<Sortby title="Sort By" subTitle="Price" />
              <Divider />
          <Sortby title=" Rating " /> */}
      </div>
    </div>
  );
};
