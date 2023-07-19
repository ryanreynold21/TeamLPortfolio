import React from "react";
import { ImLocation2 } from "react-icons/im";
const infoList = [
  {
    id: 1,
    icon: "https://image.similarpng.com/very-thumbnail/2021/01/Location-icon-design-on-transparent-background-PNG.png",
    title: "Our Address",
    content1: "123 Wt Street New York City",
    content2: ",United States of America 34923",
  },
  {
    id: 2,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Phone_font_awesome.svg/1200px-Phone_font_awesome.svg.png",

    title: "Our Phone",
    content1: "Office: +00432323232",
    content2: "Office: +00432323232",
  },
  {
    icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-1024.png",
    id: 3,
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
            <div className=" overflow-hidden w-[30px] h-[30px] rounded-full">
              <img src={info?.icon} alt="icon" />
            </div>
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
