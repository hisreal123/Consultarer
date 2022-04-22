import { React, useState } from "react";

const list = [
  { id: 1, name: " Low to High" },
  { id: 1, name: " High to Low" },
];
function Sortby({ title, subTitle, list1, list2 }) {
  //   const [Info, setInfo] = useState();

  //   const handleChange = (e) => {
  //     const target = e.target;

  //     if (target.checked) {
  //       setInfo(target.value);
  //     }
  //   };
  return (
    <div>
      <h2> {title}</h2>
      <h4>{subTitle}</h4>

      <form action=" " method="post">
        <div className="wrapRadio text-xs">
          {(list || []).map((list, i) => (
            <div className=" " key="i">
              <label htmlFor="Low to High">
                <input
                  type="radio"
                  name=""
                  value={list.name}
                  id=""
                  checked=""
                  onChange=""
                />
                <span>Low to High</span>
              </label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Sortby;
