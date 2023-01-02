import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ to, customClasses, type = "primary", children }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`border uppercase font-bold py-2 px-6 rounded-md inline-block transition-all ease-in duration-100 ${
          type === "secondary"
            ? "border-black text-black hover:bg-black hover:text-white"
            : "border-white text-white hover:bg-white hover:text-black"
        } ${customClasses}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <div
      className={`border uppercase font-bold py-2 px-6 rounded-md inline-block transition-all ease-in duration-100 ${
        type === "secondary"
          ? "border-black text-black hover:bg-black hover:text-white"
          : "border-white text-white hover:bg-white hover:text-black"
      } ${customClasses}`}
    >
      {children}
    </div>
  );
};

export default CustomButton;
