import {React, useState} from "react";

function Sortby({ title, subTitle, list1, list2 }) {
    const [Info, setInfo] = useState();

    const handleChange  = e =>{
        const target = e.target;

        if (target)
    }
  return (
    <div>
      <h2> {title}</h2>
      <h4>{subTitle}</h4>

      <form action=" " method="post">
        <div className="wrapRadio text-xs">
          <div className=" ">
            <label htmlFor="Low to High">
              <input type="radio" name="" value="Low to High" id="" checked={soirt == ' male'} />
              <span>Low to High</span>
            </label>
          </div>
          <div>
            <label htmlFor="Low to High">
              <input type="radio" name="" value="Low to High" id="" />
              <span>High to Low</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Sortby;
