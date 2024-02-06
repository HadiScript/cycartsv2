import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Fade from "react-reveal/Fade";

const Systems = () => {
  return (
    <>
      <SectionTitle pretitle="CYCARTS SYSTEMS" title="Provided Systems">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the
      </SectionTitle>
      <div className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-4 sm:mt-4 md:mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-50 blue__gradient" /> */}
        {/* <Fade bottom cascade> */}
        {[1, 2, 3, 4, 5].map((x) => (
          <div className="h-full bg-gray-900  rounded-lg overflow-hidden mx-2">
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-dimWhite mb-1">
                MANAGEMENT
              </h2>
              <h2 className="title-font text-lg font-medium text-white mb-3">
                Learning Management System
              </h2>
              <p className="text-dimWhite mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat. Photo booth fam kinfolk
                cold-pressed sriracha leggings jianbing microdosing tousled
                waistcoat.
              </p>

              <a className="inline-flex items-center mt-5">
                <img
                  alt="blog"
                  src="https://hadielearning.com/assets/images/primary.svg"
                  className="w-full h-16 rounded-full flex-shrink-0 object-cover object-center"
                />
                {/* <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Holden Caulfield
                  </span>
                  <span className="text-dimWhite text-xs tracking-widest mt-0.5">
                    UI DEVELOPER
                  </span>
                </span> */}
              </a>
              <div className="flex items-center flex-wrap mt-7">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                  1.2K Sales
                </span>
              </div>
            </div>
          </div>
        ))}
        {/* </Fade> */}
      </div>
    </>
  );
};

export default Systems;
