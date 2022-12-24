import React from "react";

const CustomButton = ({ children }) => {
  return (
    <div className="bg-black text-white py-3 px-6 rounded-md hover:bg-black/80">
      {children}
    </div>
  );
};

export default CustomButton;
