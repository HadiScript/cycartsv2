import React from "react";
import styles from "../../styles/style";
import Button from "../../components/Button";
import { homeImg } from "../../assets";
import { Fade } from "react-reveal";
import SecondaryBtn from "../../components/SecondaryBtn";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={` hidden md:block lg:block xl:block 2xl:block md:flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}
      >
        <img
          src={homeImg}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div
        className={`my-24 flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  `}
      >
        <Fade bottom cascade>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Cycarts
            </h1>
          </div>

          <div>
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] w-full">
              Your Digital Ally
            </h1>
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>

          <div
            className="mt-5"
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <Button>Get in touch </Button>
            <SecondaryBtn>About Us</SecondaryBtn>
            {/* <span className="text-white">About Us</span> */}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
