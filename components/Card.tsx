import React from "react";
import Image from "next/image";
import network from "../public/network.png";
import calendar from "../public/calendar.png";
import dance from "../public/dance.png";

const Cards = () => {
  return (
    <div id="getstarted" className=" mx-auto  md:h-screen bg-white ">
      <div className="w-full py-[10rem] px-4  bg-white ">
        <div className=" mx-auto grid md:grid-cols-3 sm:h-[32rem]  gap-8">
          <div className=" w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <Image className="w-20 mx-auto mt-[-3rem]" src={network} alt="/" />

            <h2 className="text-2xl font-bold text-center py-8">Choose</h2>

            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                {" "}
                Choose your circle - add family, friends, colleagues.
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <Image
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={calendar}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Share</h2>

            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                {" "}
                Share your plans - add events or travel dates to your profile
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <Image
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={dance}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Connect</h2>

            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                {" "}
                Connect in-person, and your social outing is on us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
