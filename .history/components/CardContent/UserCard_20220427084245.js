import React from "react";
import Image from "next/image";
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
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
              className={` user relative flex flex-col bg-white py-2 pl-2 shadow-lg ${userStyle}`}
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
                        src="/img/verified.png"
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

                <p className="text-sm truncate my-1">
                  Bio:
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Similique itaque dolore, quod hic magnam facere enim
                  </span>
                </p>

                <p className="star text-xs flex items-center ">
                  <div className="w-3 mr-2 ">
                    <Image
                      src="/img/unsplash_x9cXI2eQLBw.svg"
                      alt="verified"
                      layout="responsive"
                      height="100"
                      width="100"
                    />
                  </div>
                  <span>{user.rate}</span>
                </p>
                <p>
                  <span>{user.salary}</span>
                  <span className="text-xs">{user.timePrice}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
