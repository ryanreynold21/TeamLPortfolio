import React from 'react'
import {AiOutlineDesktop,AiOutlineMobile} from 'react-icons/ai'
import {IoPricetagOutline} from 'react-icons/io5'

import {PiChatCircleDotsLight,PiTargetThin} from 'react-icons/pi'
import {LiaToolsSolid} from 'react-icons/lia'
import RootLayout from '../layout/RootLayout'
const Services = () => {
    const data= [{
        id:"1",
        icons:<AiOutlineDesktop size={35} /> ,
        title: "Unique Design",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },{
        id:"2",
        icons:<IoPricetagOutline size={35} /> ,
        title: "Different Layout",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
        id:"3",
        icons:<PiChatCircleDotsLight size={35} /> ,
        title: "Make It Simple",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
        id:"4",
        icons:<AiOutlineMobile size={35} /> ,
        title: "Responsiveness        ",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
        id:"5",
        icons:<PiTargetThin size={35} /> ,
        title: "Testing for Perfection",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
        id:"6",
        icons:<LiaToolsSolid size={35} /> ,
        title: "Advanced Options",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },]
  return (
    <div>
      <div
        name="services"
        className="px-4 py-[250px] sm:py-[100px] min-h-screen font bg-[#EAEDF2] "
      >
        <div className="px-4 mb-[36px]">
          <h1 className="text-2xl md:text-4xl tracking-tight uppercase font-semibold relative inline-block align-top z-10 mb-[10px] py-[10px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#d9832e] after:w-[50px] ">
            <span className=" border-b-2 border-[#D9832E] pb-2"> MY</span>{" "}
            Service
          </h1>
          <p className="text-sm popfont opacity-70 tracking-widest mt-2">
            A LEAD UX & UI DESIGNER BASED IN CANADA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {data.map((item) => (
            <div className="group">
              <div className=" bg-white  shadow-xl w-full px-[30px] py-[40px] hover:-translate-y-4 transition-all duration-[400ms] hover:rounded-md group-hover:bg-[#DB8B3B] group-hover:text-white">
                <div className="border mb-[22px] rounded-full inline-block p-4 border-dashed border-[#DB8B3B] group-hover:border-white group-hover:text-white text-[#DB8B3B]">
                  {item.icons}
                </div>
                <div>
                  <h5 className="text-[16px] mb-3 font-[500]">{item.title}</h5>
                  <p className="text-[15px] ">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services