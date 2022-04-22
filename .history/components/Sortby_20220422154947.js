import React from "react";

function Sortby({ title, subTitle, list1, list2 }) {
  return (
    <div>
      <h2> {title}</h2>
      <h4>{subTitle}</h4>
      <form action="#" method="post">
        <div className="radio">
          <label label="">
            <input
              type="radio"
              id=""
              value="low to High"
              name="low to high "
              checked=" "
              onChange=" "
              className=""
            />
          </label>
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked=" "
              onChange=" "
              className=""
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Sortby;
