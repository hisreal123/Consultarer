import { React, useState } from "react";

const list = [
  { id: 1, name: " Low to High" },
  { id: 1, name: " High to Low" },
];
function Sortby({ title, subTitle }) {
  const [Info, setInfo] = useState();

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setInfo(target.value);
    }
  };
  return (
    <div className="py-3 "  >
      <h2 className="text-bold font-bold mb-1 md:text-xl "> {title}</h2>
      <h4 className="text-xs  font-bold mb-2 md:text-lg ">{subTitle}</h4>
      <form action=" " method="post" className="lg:bg-white lg:px-2 ">
        <div className="wrapRadio text-xs md:text-lg ">
          {(list || []).map((list, i) => (
            <div className=" flex items-center py-2  " key="i">
              <label htmlFor="Low to High ">
                <input
                  type="radio"
                  name=""
                  value={list.name}
                  id=""
                  onChange=""
                  checked={Info == list.name}
                />
                <span className="ml-2 lg:text-sm">{list.name}</span>
              </label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Sortby;
