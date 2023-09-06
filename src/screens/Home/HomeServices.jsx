import React from "react";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdOutlineDeveloperMode } from "react-icons/md";

import Fade from "react-reveal/Fade";
import { services } from "../../constants";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const sliderSettings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <SectionTitle pretitle="What we are providing" title={"Systems"}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the
      </SectionTitle>

      <div className="my-8">
        <Slider {...sliderSettings}>
          {[1, 2, 3, 4].map((x) => (
            <Fade zoom cascade>
              <div>
                {/* <div class="p-4 md:w-1/3"> */}
                <div class="h-full bg-gray-900  rounded-lg overflow-hidden mx-2">
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-dimWhite mb-1">
                      MANAGEMENT
                    </h2>
                    <h2 class="title-font text-lg font-medium text-white mb-3">
                      Learning Management System
                    </h2>
                    <p class="text-dimWhite mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat. Photo booth fam
                      kinfolk cold-pressed sriracha leggings jianbing
                      microdosing tousled waistcoat.
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
                {/* </div> */}
              </div>
            </Fade>
          ))}
        </Slider>
      </div>

      <SectionTitle pretitle="" title={"Services"}>
        <Fade bottom cascade>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the
        </Fade>
      </SectionTitle>

      <div className="flex flex-wrap -m-4">
        {services.map((x) => (
          <Fade bottom cascade>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-gradient text-indigo-500 mb-4">
                </div> */}
                {x.icon}
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  {x.title}
                </h2>
                <p className="leading-relaxed text-dimWhite">{x.desc}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      <Link to={'/'}><Button styles={"flex mx-auto mt-16"}>Show More</Button></Link>
    </Container>
  );
};

export default HomeServices;
