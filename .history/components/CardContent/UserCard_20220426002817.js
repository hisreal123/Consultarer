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
  {
    slug: "user5",
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
    slug: "user6",
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
    slug: "user7",
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
    slug: "user8",
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
              className={` user relative flex flex-col bg-white pt-2 pl-2 shadow-lg ${userStyle}`}
              key={slug}
            >
              <div className="relative h-7 w-28 self-center  mb-24 ">
                <Image
                  src={user.ImageProfile}
                  height="100"
                  width="100"
                  layout="responsive"
                  alt="profile Image"
                />
              </div>
              <div className="infos relative">
                <h2 className=" font-semibold flex items-center">
                  {user.fullname}
                  {user.verified ? (
                    <div className="w-3 ml-3">
                      <Image
                        src="/img/unsplash_x9cXI2eQLBw.svg"
                        alt="verified"
                        layout="responsive"
                        height="100"
                        width="100"
                      />
                    </div>
                  ) : (
                    null(" false")
                  )}
                </h2>
                <h3 className=" font-medium text-sm"> {user.username} </h3>

                <p className="text-sm truncate">
                  Bio:
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Similique itaque dolore, quod hic magnam facere enim
                    temporibus esse eligen
                  </span>
                </p>

                <p className="sta"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
