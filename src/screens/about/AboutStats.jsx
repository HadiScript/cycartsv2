import React from "react";
import styles from "../../styles/style";
import { card } from "../../assets";
import CountUp from "react-countup";

const AboutStats = () => {
  return (
    <>
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h2 className={styles.heading2}>
              You do the business, <br className="sm:block hidden" /> we’ll
              handle the money.
            </h2>
            <div class="leading-relaxed text-dimWhite">
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-bold text-3xl text-gradient">
              <CountUp start={0} end={23} />
            </h2>
            <p class="leading-relaxed text-dimWhite">Users</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-bold text-3xl text-gradient">
              <CountUp start={0} end={23} />
            </h2>
            <p class="leading-relaxed text-dimWhite">Subscribes</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-bold text-3xl text-gradient">
              <CountUp start={0} end={23} />
            </h2>
            <p class="leading-relaxed text-dimWhite">Downloads</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-bold text-3xl text-gradient">
              <CountUp start={0} end={23} />
            </h2>
            <p class="leading-relaxed text-dimWhite">Products</p>
          </div>
        </div>
        <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            src={card}
            width="521"
            height="auto"
            alt="Benefits"
            className={"object-cover"}
            placeholder="blur"
            // blurDataURL={data.image.src}
          />
        </div>
      </div>
    </>
  );
};

export default AboutStats;
