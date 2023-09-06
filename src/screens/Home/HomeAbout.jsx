import React from "react";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { card } from "../../assets";
import Fade from "react-reveal/Fade";
import { BiSupport } from "react-icons/bi";
import { about_services } from "../../constants";

const HomeAbout = () => {
  return (
    <>
      <SectionTitle
        pretitle="GET TO KNOW BETTER"
        title="Creative agency focused on vision, product and people"
      ></SectionTitle>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 lg:order-1`}
        >
          <Fade right cascade>
            <div>
              <img
                src={card}
                width="521"
                height="auto"
                alt="Benefits"
                className={"object-cover"}
                placeholder="blur"
              />
            </div>
          </Fade>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end`}
        >
          <div className="w-full mt-5">
            {about_services.map((x) => (
              <Fade bottom cascade>
                <div className="flex items-start mt-8 space-x-3">
                  <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-gradient rounded-md w-11 h-11 ">
                    {x.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                      {x.title}
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      {x.desc}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomeAbout;
