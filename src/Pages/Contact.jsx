import React from "react";
import RootLayout from "../layout/RootLayout";
import FormInput from "../components/FormInput";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <RootLayout>
      <div className=" p-8 py-[100px] bg-slate-200">
        <h2 className="text-4xl font-semibold mb-8">Latest Blogs</h2>
        <h3 className="mb-14">A LEAD UX & UI DESIGNER BASED IN CANADA</h3>
        <div className="flex items-center gap-9 justify-between w-full">
          <div className="  p-11 w-full bg-white">
            <div className="flex flex-col md:flex-row gap-11 items-center justify-between ">
              <div className="flex items-center w-full gap-5 bg-white justify-center flex-col">
                <div className="flex items-center w-full justify-center gap-6">
                  <FormInput name="Name" />
                  <FormInput name="Email" />
                </div>
                <FormInput name="Subject" />
                <textarea
                  rows="3"
                  placeholder="Your Message *"
                  className=" w-full outline-none  py-2 border-b border-slate-600"
                  onFocus={() => console.log("focus")}
                ></textarea>
              </div>
            </div>
            <button className="mt-7 uppercase text-white p-3 bg-[#d9832e] hover:bg-black duration-700">
              send message
            </button>
          </div>
          <div className="flex flex-col items-center h-full justify-between">
            <ContactInfo />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Contact;
