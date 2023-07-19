import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {FaHouseDamage,FaRegAddressCard,FaConciergeBell,FaBriefcase,FaBlog,FaIdCardAlt} from 'react-icons/fa'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const TestSideBar = () => {
       const data = [{
        id:'1',
        to:'home',
        icon : <FaHouseDamage size={30} />,
        title: 'HOME'
       },{
        id:'2',
        to:'about',
        icon : <FaRegAddressCard size={30} />,
        title: 'ABOUT'
       },{
        id:'3',
        to:'services',
        icon : <FaConciergeBell size={30} />,
        title: 'SERVICES'
       },{
        id:'4',
        to:'portfolio',
        icon : <FaBriefcase size={30} />,
        title: 'PORTFOLIO'
       },{
        id:'5',
        to:'blog',
        icon : <FaBlog size={30} />,
        title: 'BLOG'
       },{
        id:'6',
        to:'contact',
        icon : <FaIdCardAlt size={30} />,
        title: 'CONTACT'
       },]
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
        <ul className=''>
                {data?.map((item) => (
                  <Link activeClass='active' to={item.to} smooth={true} duration={500} offset={-50}>
           <li key={item.id} className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                   {item.icon}
                   <span className=' text-[15px] tracking-wider mt-2'>{item.title}</span>
           </li>
                  </Link>
                ) )}
        </ul>
      </motion.div>
    </div>
  )
}

export default TestSideBar
