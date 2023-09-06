import React from "react";
import "./components.css";

const SecondaryBtn = ({ children, styles }) => {
  return (
    <button
      className={`secBtn py-2 px-6 font-poppins font-medium text-[14px]  rounded-[10px] outline-none ${styles}`}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
