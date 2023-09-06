import React from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/style";
import OpenJobs from "./OpenJobs";
import Footer from "../../components/Footer";

const Career = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingY}`}>
        <OpenJobs />
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Career;
