import React from 'react'
import {BsTwitter,BsInstagram,BsPinterest} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex justify-between items-center px-[62.5px] bg-black text-white py-5 bottom-0'>
        <div className='flex flex-row gap-4'>
           <div className='text-gray-500 hover:text-white'>
           <BsTwitter/>
           </div>
           <div className='text-gray-500 hover:text-white'>

            <BsInstagram/>
           </div>
           <div className='text-gray-500 hover:text-white'>
            <FaLinkedinIn/>

           </div>
            <div className='text-gray-500 hover:text-white'>

            <BsPinterest/>
            </div>


        </div>
        <div className='text-sm text-gray-500 font  hover:text-white'>
        © {new Date().getFullYear} copyright all right reserved
        </div>
    </div>
  )
}

export default Footer