import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["SOCIAL"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 130,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    // backkground
    <div className="flex items-center justify-center h-screen mb-20 bg-fixed bf-center bg-cover ">
      {/* text */}

      <div className="p-5 text-center max-w-2xl">
        <p className="py-4 font-semibold md:text-sm text-sm">
          CHERISH MEMORIES WITH THOSE WHO MATTER MOST, WHEREVER YOU GO
        </p>
        <span className="title ">
          <h1 className="style1 md:text-5xl sm:text-4xl text-4xl font-bold">
            A SOCIAL APP THAT IS,
          </h1>
          <h1 className="style2 md:text-5xl sm:text-4xl text-4xl font-bold">
            WELL,
          </h1>
          <h1 className="style3 md:text-5xl sm:text-4xl text-4xl font-bold">
            TRULY{" "}
            <span
              className="style3 md:text-5xl sm:text-4xl text-4xl font-bold text-white"
              ref={el}
            ></span>
          </h1>
        </span>
        <p className="p-6 ">
          Unaware that a friend or family member is nearby during your travels?
          Discover <strong className="text-xl ">Together.</strong>, the social
          app that redefines meaningful connections.
        </p>
        <div className="my-4 max-w-xl m-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black outline-none"
              type="email"
              placeholder="Enter Email"
            />
            <button
              type="submit"
              className="bg-black text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
