import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const pathname = useLocation().pathname;

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
      <h4 className="text-white font-bold">Cycarts</h4>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <Link to={"/"}>
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px]  hover:text-white text-dimWhite mr-5 ${
              pathname.includes("/") ? "text-white" : "text-dimWhite"
            }`}
          >
            Home
          </li>
        </Link>
        <Link to={"/systems-and-services"}>
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px]  hover:text-white text-dimWhite mr-5 ${
              pathname.includes("/systems-and-services")
                ? "text-white"
                : "text-dimWhite"
            }`}
          >
            Services
          </li>
        </Link>
        <Link to="/showcase">
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px]  hover:text-white text-dimWhite mr-5`}
          >
            Showcase
          </li>
        </Link>
        <Link to={"/about-us"}>
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px]  hover:text-white text-dimWhite mr-5 ${
              pathname.includes("/about-us") ? "text-white" : "text-dimWhite"
            }`}
          >
            About Us
          </li>
        </Link>
        <Link to={'/career'}>
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px]  hover:text-white text-dimWhite mr-5`}
          >
            Career
          </li>
        </Link>
        {/* <div className="md:border-l md:border-gray-400 w-[2px] h-[20px] mx-2" /> */}
        <Button>Get a Quote</Button>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[90%] min-h-[70vh] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <Button>Get a Quote</Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
