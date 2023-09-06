import React from "react";
import Container from "../../components/Container";
import CountUp from "react-countup";

const HomeStats = () => {
  return (
    <Container>
      {/* <SectionTitle pretitle="Already Made Custome System" title="">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the
      </SectionTitle> */}
      <div class="mt-8 sm:mt-12">
        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div class="flex flex-col rounded-lg bg-gray-900 px-4 py-8 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">
              Projects
            </dt>

            <dd class="text-4xl font-extrabold text-white md:text-5xl">
              <CountUp start={0} end={231} duration={2.75} />{" "}
            </dd>
          </div>

          <div class="flex flex-col rounded-lg bg-gray-900 px-4 py-8 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">
              Projects
            </dt>

            <dd class="text-4xl font-extrabold text-white md:text-5xl">
              <CountUp start={0} end={231} duration={2.75} />{" "}
            </dd>
          </div>

          <div class="flex flex-col rounded-lg bg-gray-900 px-4 py-8 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">
              Projects
            </dt>

            <dd class="text-4xl font-extrabold text-white md:text-5xl">
              <CountUp start={0} end={231} duration={2.75} />{" "}
            </dd>
          </div>
        </dl>
      </div>
    </Container>
  );
};

export default HomeStats;
