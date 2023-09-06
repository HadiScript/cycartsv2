import React from "react";
import SectionTitle from "../../components/SectionTitle";

const Systems = () => {
  return (
    <>
      <SectionTitle pretitle="CYCARTS SYSTEMS" title="Provided Systems">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the
      </SectionTitle>
      <div className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-4 sm:mt-4 md:mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-50 blue__gradient" /> */}
        {[1, 2, 3, 4, 5].map((x) => (
          <div class="h-full bg-gray-900  rounded-lg overflow-hidden mx-2">
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-dimWhite mb-1">
                MANAGEMENT
              </h2>
              <h2 class="title-font text-lg font-medium text-white mb-3">
                Learning Management System
              </h2>
              <p class="text-dimWhite mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat. Photo booth fam kinfolk
                cold-pressed sriracha leggings jianbing microdosing tousled
                waistcoat.
              </p>

              <a class="inline-flex items-center mt-5">
                <img
                  alt="blog"
                  src="https://dummyimage.com/104x104"
                  class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-white">
                    Holden Caulfield
                  </span>
                  <span class="text-dimWhite text-xs tracking-widest mt-0.5">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
              <div class="flex items-center flex-wrap mt-7">
                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
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
                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Systems;
