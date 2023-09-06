import React from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Tilt from "react-parallax-tilt";
import styles from "../../styles/style";
import { mob1, mob2, mob3, mob4, mob5, mob6, mob7 } from "../../assets";
import { BsTools } from "react-icons/bs";

import "./showcase.css";
import { Fade } from "react-reveal";

const Showcase = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="relative overflow-hidden ">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <Tilt reset={false}>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  <span className="text-gradient"> Summer styles are</span>
                  finally here
                </h1>
              </Tilt>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </p>
            </div>
            <div>
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <Fade left cascade>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src={mob1}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                            {/* </Fade> */}
                          </div>

                          <div className="h-64 w-44 overflow-hidden rounded-lg ">
                            {/* <Fade left cascade> */}
                            <img
                              src={mob2}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </Fade>
                      <Fade bottom cascade>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg relative">
                            <Tilt className="group">
                              <img
                                src={mob1}
                                alt=""
                                className="h-full w-full object-cover object-center transition-transform duration-300 transform scale-100 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </Tilt>
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={mob3}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={mob4}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </Fade>
                      <Fade right cascade>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={mob6}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={mob7}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>

                <Button className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                  Shop Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
