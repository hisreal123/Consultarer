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
    slug: "user2",
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
    slug: "user3",
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
    slug: "user4",
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

export const UserCard = ({ userStyle }) => {
  return (
    <div className={`cardWrapper relative `}>
      <div className="cardContent">
        <div className=" details relative  grid grid-cols-4 gap-5 ">
          {User.map((user, slug) => (
            <div
              className={` user relative flex flex-col bg-white pt-5 pl-2  ${userStyle}`}
              key={slug}
            >
              <div className="relative h-7 w-20 self-center  mb-20">
                <Image
                  src={user.ImageProfile}
                  height="100"
                  width="100"
                  layout="responsive"
                  alt="profile Image"
                />
              </div>
              <div className="infos relative">
                <h3>{user.fullname}</h3>
                <h3> {user.username} </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique itaque dolore, quod hic magnam facere enim
                  temporibus esse eligen
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
