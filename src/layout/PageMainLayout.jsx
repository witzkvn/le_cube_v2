import React from "react";

const PageMainLayout = ({ customClasses, children }) => {
  return (
    <main className={`${customClasses} p-2 md:p-12 mx-auto xl:max-w-screen-xl`}>
      {children}
    </main>
  );
};

export default PageMainLayout;
