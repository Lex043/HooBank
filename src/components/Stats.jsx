import React from "react";

const Stats = () => {
  return (
    <section className="font-poppins flex flex-col sm:flex-row md:justify-between lg:px-10 lg:text-3xl md:gap-6 gap-4 pt-6">
      <div className="sm:flex sm:gap-2 sm:items-center ">
        <h1 className="text-white">3800+</h1>
        <p className="text-secondary text-[12px]">USER ACTIVE</p>
        <div className="hidden sm:block sm:border-r-2 sm:border-footerline h-3 lg:h-6 sm:ml-4"></div>
      </div>

      <div className="sm:flex sm:gap-2 sm:items-center ">
        <h1 className="text-white sm:gap-2">230+</h1>
        <p className="text-secondary text-[12px]">TRUSTED BY COMPANY</p>
        <div className="hidden sm:block sm:border-r-2 sm:border-footerline h-3 lg:h-6 sm:ml-4"></div>
      </div>

      <div className="sm:flex sm:gap-2 sm:items-center">
        <h1 className="text-white">$230M+</h1>
        <p className="text-secondary text-[12px]">TRANSACTION</p>
      </div>
    </section>
  );
};

export default Stats;
