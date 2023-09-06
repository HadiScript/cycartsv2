import React from "react";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import "./home.css";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";

const Techs = () => {
  return (
    <>
      <div className="text-md text-center text-dimWhite">
        Technologies & Stack That we are using.
      </div>

      <div className="tech_container">
        <div className="tech_scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            <div className="techs_box">
              <FaReact />
              React JS
            </div>

            <div className="techs_box">
              <FaAngular /> Angular
            </div>
            <div className="techs_box">
              <FaNodeJs /> Node JS
            </div>
            <div className="techs_box">
              <BiLogoMongodb /> MongoDB
            </div>
            <div className="techs_box">
              <BsFiletypeSql /> SQL
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Techs;
