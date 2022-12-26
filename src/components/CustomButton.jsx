import React from "react";

const CustomButton = ({ children }) => {
  return (
    <div className="border border-white text-white uppercase font-bold py-2 px-6 rounded-md hover:bg-white hover:text-black">
      {children}
    </div>
  );
};

export default CustomButton;
