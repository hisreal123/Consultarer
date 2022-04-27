import React from "react";
import Image from "next/image";
const User = [
  {
    slug: "user1",
    ImageProfile: "/img/unsplash_x9cXI2eQLBw.svg",
    fullname: " Mark Anthony",
    username: "MarkAnt",
    verified: true,
    rank: true,
    rate: "4.5(25)",
    salary: "50",
    timePrice: "10mins",
  },

  {
    slug: "user1",
    ImageProfile: "/img/unsplash_x9cXI2eQLBw.svg",
    fullname: " Mark Anthony",
    username: "MarkAnt",
    verified: true,
    rank: true,
    rate: "4.5(25)",
    salary: "50",
    timePrice: "10mins",
  },

  {
    slug: "user1",
    ImageProfile: "/img/unsplash_x9cXI2eQLBw.svg",
    fullname: " Mark Anthony",
    username: "MarkAnt",
    verified: true,
    rank: true,
    rate: "4.5(25)",
    salary: "50",
    timePrice: "10mins",
  },

  {
    slug: "user1",
    ImageProfile: "/img/unsplash_x9cXI2eQLBw.svg",
    fullname: " Mark Anthony",
    username: "MarkAnt",
    verified: true,
    rank: true,
    rate: "4.5(25)",
    salary: "50",
    timePrice: "10mins",
  },
];

export const UserCard = ({ inStyle }) => {
  return (
    <div className="cardWrapper relative">
      <div className="cardContent">
        <h1>ImageTop</h1>

        <div className=" details bg-red-200">
          {User.map((user, slug) => (
            <div className={` user bg-white relative ${inStyle}`} key={slug}>
              <div className="relative">
                <Image
                  src={user.ImageProfile}
                  height="100"
                  width="100"
                  layout="responsive"
                  alt="profile Image"
                />
              </div>
              <h3>{user.fullname}</h3>
              <h3> {user.username} </h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique itaque dolore, quod hic magnam facere enim temporibus
                esse eligen
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
