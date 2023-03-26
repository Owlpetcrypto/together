import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full ease-in duration-300 z-10"
    >
      <div className=" m-auto flex justify-between items-center px-10 py-6 text-black">
        <Link href="/">
          <h1 className="font-bold text-4xl">Together.</h1>
        </Link>

        <ul className="hidden font-semibold sm:flex">
          <li className="p-4">
            <Link href="#">Home</Link>
          </li>

          <li className="p-4">
            <Link href="#getstarted">Get Started</Link>
          </li>

          <li className="p-4">
            <Link href="#contact">Contact</Link>
          </li>

          <li className="p-4">
            <Link href="#">Login</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {/* nav is true then close else menu */}
          {nav ? (
            <AiOutlineClose
              size={20}
              // style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              // style={{ color: `${textColor}` }}
            />
          )}
        </div>
        {/* Mobile Menus */}
        <div
          className={
            nav
              ? "sm:hidden absolute inset-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute inset-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              style={{ color: `${textColor}` }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="#">Home</Link>
            </li>

            <li
              onClick={handleNav}
              style={{ color: `${textColor}` }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="#getstarted">Get Started</Link>
            </li>

            <li
              onClick={handleNav}
              style={{ color: `${textColor}` }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="#contact">Contact</Link>
            </li>

            <li
              onClick={handleNav}
              style={{ color: `${textColor}` }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="#">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
