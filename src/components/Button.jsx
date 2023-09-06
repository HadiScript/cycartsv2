import React from "react";

const Button = ({ styles, children }) => (
  <button
    type="button"
    className={`py-2 px-6 font-poppins font-medium text-[14px] text-dar bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {children}
  </button>
);

export default Button;
