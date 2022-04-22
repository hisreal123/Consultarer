import { useState } from " react";
FilChec
export const FilterList = ({ filStyle }) => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="">
      <h3 className={filStyle}> Filter by</h3>

      <FilterCheckBox  />
    </div>
  );
};
