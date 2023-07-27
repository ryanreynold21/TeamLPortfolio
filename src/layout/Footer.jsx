import React from 'react'
import {BsTwitter,BsInstagram,BsPinterest} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-[20px] md:px-[62.5px] bg-black text-white py-5 bottom-0">
      <div className="flex flex-row gap-2 md:gap-4 md:ml-20">
        <div className="text-gray-500 hover:text-white">
          <BsTwitter />
        </div>
        <div className="text-gray-500 hover:text-white">
          <BsInstagram />
        </div>
        <div className="text-gray-500 hover:text-white">
          <FaLinkedinIn />
        </div>
        <div className="text-gray-500 hover:text-white">
          <BsPinterest />
        </div>
      </div>
      <div className="text-[10px] text-gray-500 font flex hover:text-white">
        <p>©{new Date().getFullYear}</p><p>copyright all right reserved by Team L</p>
      </div>
    </div>
  );
}

export default Footer