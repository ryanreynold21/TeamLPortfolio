import React from "react";
import RootLayout from "../layout/RootLayout";

const Portfolio = () => {
  return (
    <RootLayout>
      <div className="">
        <div className=" container mx-[100px] py-[90px]">
          <h3 className=" text-4xl tracking-tight uppercase font-semibold relative inline-block align-top z-10 mb-[10px] py-[10px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#d9832e] after:w-[50px]">
            Latest Works
          </h3>
          <p className=" text-slate-600 tracking-wider text-sm">A JUNIOR WEB DEVELOPER BASED IN MYANMAR</p>
        </div>
      </div>
    </RootLayout>
  );
};

export default Portfolio;
