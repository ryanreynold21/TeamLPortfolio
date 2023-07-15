import React from "react";
import RootLayout from "../layout/RootLayout";

const Contact = () => {
  return (
    <RootLayout>
      <div className=" p-8 py-[100px] bg-slate-200">
        <h2 className="text-4xl font-semibold mb-8">Latest Blogs</h2>
        <h3 className="mb-14">A LEAD UX & UI DESIGNER BASED IN CANADA</h3>
        <div className="flex items-center justify-between flex-wrap">
          <div className="">
            <input
              type="text"
              placeholder="Name *"
              className=" bg-slate-200 outline-none  py-2 border-b border-slate-600"
            />
          </div>
          <div className="">
            <div className=""> box</div>
            <div className=""> box</div>
            <div className=""> box</div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Contact;
