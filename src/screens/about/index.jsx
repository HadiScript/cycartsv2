import React from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/style";
import Button from "../../components/Button";
import HomeAbout from "../Home/HomeAbout";
import AboutSectionOne from "./AboutSectionOne";
import Container from "../../components/Container";
import AboutStats from "./AboutStats";
import Industries from "./Industries";
import AboutTeams from "./AboutTeams";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
        <div class="mx-auto max-w-xl text-center">
          <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
            Understand User Flow.
            <strong class="font-extrabold text-gradient sm:block">
              Increase Conversion.
            </strong>
          </h1>

          <p class="mt-4 sm:text-xl/relaxed text-dimWhite">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <Button>See more</Button>
          </div>
          {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
          {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>

      <HomeAbout />
      <Container>
        <AboutSectionOne />
        <AboutStats />
      </Container>

      <Industries />
      <div className="mb-20">
        <Container>
          <AboutTeams />
        </Container>
      </div>

      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-90 white__gradient" />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
