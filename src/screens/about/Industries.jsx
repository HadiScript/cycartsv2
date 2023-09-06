import React from "react";
import Marquee from "react-fast-marquee";
import "../Home/home.css";

const Industries = () => {
  return (
    <>
      <div className="text-md text-center text-dimWhite">
        Industries we serve
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
            <div className="techs_box">Health</div>
            <div className="techs_box">Finance</div>
            <div className="techs_box">Retail</div>
            <div className="techs_box">Governments</div>
            <div className="techs_box">NonProfit</div>
            <div className="techs_box">Media</div>
            <div className="techs_box">Sports</div>
            <div className="techs_box">Entertainments</div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Industries;
