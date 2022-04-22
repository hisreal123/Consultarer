import React from "react";

function Sortby({ title, subTitle, list1, list2 }) {
  return (
    <div>
      <h2> {title}</h2>
      <h4>{subTitle}</h4>

      <form action=" " method="post">
        <div>
          <label htmlFor="Low to High">inp</label>
        </div>
      </form>
    </div>
  );
}

export default Sortby;
