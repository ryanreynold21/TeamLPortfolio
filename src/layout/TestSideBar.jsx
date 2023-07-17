import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {FaHouseDamage,FaRegAddressCard,FaConciergeBell,FaBriefcase,FaBlog,FaIdCardAlt} from 'react-icons/fa'

const TestSideBar = () => {
  return (
    <div className=''> 
      <motion.div
       animate={{ x: 0 }}
       initial={{ x: "-100px" }}
      className=" w-[120px] h-screen shadow-2xl fixed left-0 bg-white z-50">
        {/* NavbarBrand */}
        <div className=" bg-[#d9832e] text-white text-[20px] font-bold text-center p-[10px]">
            <a className='' href="">Tony</a>
        </div>
        {/* Nav */}
        <ul>
                <p data-to-scrollspy-id="home" >
                 <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                         <FaHouseDamage className=' text-[30px]' />
                         <span className=' text-[15px] tracking-wider mt-2'>HOME</span>
                 </li>
                </p>
              <a data-to-scrollspy-id="about">
                <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                        <FaRegAddressCard className=' text-[30px]' />
                        <span className=' text-[15px] tracking-wider mt-2'>ABOUT ME</span>
                </li>
                </a>
                <p data-to-scrollspy-id="service">
                        <a href="/service">
                <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                        <FaConciergeBell className=' text-[30px]' />
                        <span className=' text-[15px] tracking-wider mt-2'>SERVICES</span>
                </li>
                        </a>
                </p>
                <p data-to-scrollspy-id="portfolio">
                <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                        <FaBriefcase className=' text-[30px]' />
                        <span className=' text-[15px] tracking-wider mt-2'>PORTFILIO</span>
                </li>
                </p>
                <p data-to-scrollspy-id="blog">
                <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                        <FaBlog className=' text-[30px]' />
                        <span className=' text-[15px] tracking-wider mt-2'>BLOG</span>
                </li>
                </p>
                <p data-to-scrollspy-id="contact">
                <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                        <FaIdCardAlt className=' text-[30px]' />
                        <span className=' text-[15px] tracking-wider mt-2'>CONTACT</span>
                </li>
                </p>
        </ul>
      </motion.div>
    </div>
  )
}

export default TestSideBar
