import React from "react";

const CardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-full rounded-md overflow-hidden bg-white shadow-md text-center transition-all hover:-translate-y-1 hover:shadow-lg">
      {children}
    </div>
  );
};

export default CardLayout;
