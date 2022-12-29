import React from "react";
import CustomButton from "./CustomButton";

const HomeCard = ({
  image,
  title,
  description,
  actionButtonText,
  actionButtonLink,
  customClasses,
  type,
}) => {
  if (type === "right") {
    return (
      <div
        className={`${customClasses} text-center flex flex-col lg:flex-row lg:text-left`}
      >
        <div className="overflow-hidden lg:w-1/2 lg:overflow-visible xl:1/2">
          <img
            src={image}
            alt={title}
            className="h-80 w-full object-cover xl:h-[30rem]"
          />
        </div>
        <div className="lg:w-1/2 lg:ml-6 xl:1/2 xl:ml-12">
          <div className="bg-white font-extrabold text-2xl tracking-widest uppercase xl:text-4xl xl:mb-12">
            {title}
          </div>
          {description}
          <CustomButton to={actionButtonLink} type="secondary">
            {actionButtonText}
          </CustomButton>
        </div>
      </div>
    );
  }

  if (type === "left") {
    return (
      <div
        className={`${customClasses} text-center flex flex-col lg:flex-row lg:text-right`}
      >
        <div className="lg:w-1/2 lg:mr-6 xl:1/2 xl:mr-12">
          <div className="bg-white font-extrabold text-2xl tracking-widest uppercase xl:text-4xl xl:mb-12">
            {title}
          </div>
          {description}
          <CustomButton to={actionButtonLink} type="secondary">
            {actionButtonText}
          </CustomButton>
        </div>
        <div className="-order-1 overflow-hidden lg:w-1/2 lg:overflow-visible lg:order-none xl:1/2">
          <img
            src={image}
            alt={title}
            className="h-80 w-full object-cover xl:h-[30rem]"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${customClasses} text-center flex flex-col lg:flex-row lg:text-left`}
    >
      <div className="flex flex-col overflow-hidden lg:relative lg:w-1/2 lg:overflow-visible xl:1/2">
        <div className="bg-white font-extrabold text-2xl tracking-widest p-3 uppercase lg:whitespace-nowrap lg:absolute lg:top-5 lg:left-full lg:-translate-x-1/2 xl:text-4xl">
          {title}
        </div>
        <img
          src={image}
          alt={title}
          className="-order-1 h-80 w-full object-cover xl:h-[30rem]"
        />
      </div>
      <div className="mt-4 lg:mt-24 lg:ml-6 lg:w-1/2 xl:1/2 xl:mt-32 xl:ml-12">
        {description}
        <CustomButton to={actionButtonLink} type="secondary">
          {actionButtonText}
        </CustomButton>
      </div>
    </div>
  );
};

export default HomeCard;
