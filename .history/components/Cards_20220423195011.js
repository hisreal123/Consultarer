import React from "react";

const User = [
  {
    slug: "user1",
    img: " ",
    fullname: " Mark Anthony",
    username: "MarkAnt",
    verified: true,
    rank: true,
    rate : '4.5(25)',
    salary:  '50'
    Aviability:  
  },
];
export const Cards = () => {
  return (
    <div className="cardWrapper relative">
      <div className="cardContent">
        <h1>ImageTop</h1>

        <div className="top">
          <h3>ImageProfile</h3>
          <h3> Username </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            itaque dolore, quod hic magnam facere enim temporibus esse eligen
          </p>
        </div>
      </div>
    </div>
  );
};
