import React from "react";
import styles from "../../styles/style";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Techs from "./Techs";
import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";
import { gird1, gird2 } from "../../assets";
import Footer from "../../components/Footer";
import Portfolio from "./Portfolio";
import HomeStats from "./HomeStats";
import FAQs from "../../components/FAQs";
import ContactCTA from "../../components/ContactCTA";
import Brands from "../../components/Brands";
import Tail from "../../checkk/Tail";

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          {/* <Tail /> */}
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div
        className={`bg-primary ${styles.paddingX} ${styles.paddingY}  ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Techs />
        </div>
      </div>
      <div className={`${styles.paddingY}`}>
        <HomeAbout />
      </div>
      {/* <div className={``} style={{ backgroundImage: `url(${gird2})` }}> */}
      <div className={``}>
        <HomeServices />
      </div>
      <div className={`${styles.paddingY}`}>
        <Brands />
      </div>
      {/* <ContactCTA /> */}
      <div className={`${styles.paddingY}`}>
        <FAQs />
      </div>
      {/* <div className={`${styles.paddingY}`}>
        <HomeStats />
      </div> */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
