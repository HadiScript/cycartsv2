import React, { useState } from "react";
import { features } from "../../constants";
import styles, { layout } from "../../styles/style";
import Button from "../../components/Button";
import SectionTitle from "../../components/SectionTitle";
import Fade from "react-reveal/Fade";
import { bgs } from "../../assets";

const LeftCard0 = () => {
  return (
    <div className={layout.sectionInfo}>
      <Fade bottom cascade>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
      </Fade>
      <Fade bottom cascade>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles={`mt-10`}>Mission & Vission</Button>
      </Fade>
    </div>
  );
};
const LeftCard1 = () => {
  return (
    <div className={layout.sectionInfo}>
      <Fade bottom cascade>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
      </Fade>
      <Fade bottom cascade>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles={`mt-10`}>Mission & Vission</Button>
      </Fade>
    </div>
  );
};
const LeftCard2 = () => {
  return (
    <div className={layout.sectionInfo}>
      <Fade bottom cascade>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
      </Fade>
      <Fade bottom cascade>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles={`mt-10`}>Mission & Vission</Button>
      </Fade>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  content,
  index,
  setActiveCard,
  activeCard,
}) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] w-[350px] md:w-[500px]  ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }  ${
      index === activeCard && "bg-black-gradient"
    } feature-card cursor-pointer`}
    onClick={() =>
      index === 0
        ? setActiveCard(0)
        : index === 1
        ? setActiveCard(1)
        : setActiveCard(2)
    }
    style={{ backgroundImage: `url(${bgs})` }}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      {/* <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p> */}
    </div>
  </div>
);

const AboutSectionOne = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
      <SectionTitle pretitle="" title="publishing and graphic design">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly
      </SectionTitle>
      <section id="features" className={layout.section}>
        {activeCard === 0 ? (
          <LeftCard0 />
        ) : activeCard === 1 ? (
          <LeftCard1 />
        ) : (
          <LeftCard2 />
        )}
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              {...feature}
              index={index}
              setActiveCard={setActiveCard}
              activeCard={activeCard}
            />
          ))}
        </div>
      </section>
      <div className="absolute z-[0] w-[40%] h-[35%] top-90 pink__gradient" />
    </>
  );
};

export default AboutSectionOne;
