import React from "react";

const GridSectionWrapper = ({ children }) => {
  return (
    <section className="grid grid-col-1 gap-12 max-w-max mx-auto mb-24 lg:grid-cols-2 2xl:grid-cols-3">
      {children}
    </section>
  );
};

export default GridSectionWrapper;
