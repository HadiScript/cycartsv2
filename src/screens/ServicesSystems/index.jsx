import React from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/style";
import SectionHero from "./SectionHero";
import Systems from "./Systems";
import Services from "./Services";
import Footer from "../../components/Footer";

const links = [
  { name: "Learning Management System", href: "#" },
  { name: "Content Management System", href: "#" },
  { name: "Ticketing Systems", href: "#" },
  { name: "More", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

const ServicesSystems = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <SectionHero links={links} stats={stats} />
      <div className={`${styles.paddingY}`}>
        <Systems />
      </div>
      <Services />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ServicesSystems;
