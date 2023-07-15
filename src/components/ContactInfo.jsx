import React from "react";
const infoList = [
  {
    id: 1,
    icon: "",
    title: "Our Address",
    content1: "123 Wt Street New York City",
    content2: ",United States of America 34923",
  },
  {
    id: 2,
    icon: "",
    title: "Our Phone",
    content1: "Office: +00432323232",
    content2: "Office: +00432323232",
  },
  {
    id: 3,
    icon: "",
    title: "Our Email",
    content1: "info@domainname.com",
    content2: "contact@domain.com",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center gap-6 justify-between">
      {infoList.map((info) => {
        return (
          <div
            className=" w-full md:w-[330px] bg-white p-5 flex items-start justify-start gap-6"
            key={info.id}
          >
            <p>icon</p>
            <div className="">
              <h3 className="text-xl font-medium">{info.title}</h3>
              <p className=" text-sm text-slate-500">{info.content1}</p>
              <p className=" text-sm text-slate-500">{info.content2}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
