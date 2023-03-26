import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="contact"
      className=" mx-auto py-16 px-4 flex flex-col gap-8 text-white bg-black"
    >
      <div className=" m-auto p-4 text-black  h-[45rem]">
        <h1 className="text-2xl font-bold text-center text-white p-4">
          Contact Us
        </h1>
        <form className="max-w-[600px] m-auto">
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border shadow-lg p-3"
              type="text"
              placeholder="Name"
            />
            <input
              className="border shadow-lg p-3"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className="border shadow-lg p-3 w-full my-2"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border shadow-lg p-3 w-full"
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="border shadow-lg p-3 w-full mt-2  text-white"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center text-center items-center pt-10">
        <h1 className="w-full text-3xl font-bold ">Together.</h1>
        <div className="flex  gap-8 my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
        <span>&copy;Together. ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
};

export default Footer;
