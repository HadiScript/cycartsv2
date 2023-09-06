import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Fade from "react-reveal/Fade";
import { Desc } from "../../assets";

const Portfolio = () => {
  return (
    <>
      <SectionTitle pretitle="Already Made Custome System" title="Portfolio">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the
      </SectionTitle>
      <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-4 sm:mt-4 md:mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        {[1, 2, 3, 4].map((x) => (
          <Fade bottom cascade>
            <li className="group relative rounded-3xl  p-6 bg-slate-800/80 highlight-white/5 hover:bg-slate-700/50">
              <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-700">
                <img
                  alt=""
                  fetchpriority="high"
                  decoding="async"
                  data-nimg="1"
                  className="absolute inset-0 w-full h-full"
                  src={Desc}
                  style={{ color: "transparent",  }}
                />
              </div>
              <div
                style={{ opacity: "0", transition: "opacity 0.5s linear 0s" }}
              >
                <video
                  preload="none"
                  playsinline=""
                  class="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
                >
                  <source
                    src="/_next/static/media/openai.com.e55b5afbebfae62d1350968a66653eef24f49dfe.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              <div class="flex flex-wrap items-center mt-6">
                <h2 class="text-sm leading-6 text-white font-poppin font-semibold group-hover:text-sky-400">
                  <a href="/showcase/openai">
                    <span class="absolute inset-0 rounded-3xl"></span>OpenAI /
                    ChatGPT
                  </a>
                </h2>
                <svg
                  class="w-6 h-6 flex-none opacity-0 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
                    stroke="#0EA5E9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p class="w-full flex-none text-[0.8125rem] font-poppin leading-6 text-dimWhite">
                  Marketing website &amp; chat interface
                </p>
              </div>
            </li>
          </Fade>
        ))}
      </ul>
    </>
  );
};

export default Portfolio;
